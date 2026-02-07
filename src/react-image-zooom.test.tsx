import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import MockImage from "./testUtils/MockImage";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import ImageZoom from "./react-image-zooom";
import { act } from "@testing-library/react";

describe("ImageZoom component", () => {
  let originalImage: typeof window.Image;

  beforeEach(() => {
    MockImage.mock.instances = [];
    originalImage = window.Image;
    window.Image = MockImage as unknown as typeof window.Image;
  });

  afterEach(() => {
    window.Image = originalImage;
    cleanup();
  });

  it("renders with required props", async () => {
    render(<ImageZoom src="test.jpg" />);
    const imgInstance = (window.Image as any).mock.instances[0];
    await act(async () => {
      imgInstance.onload();
    });
    expect(screen.getByRole("button")).not.toBeNull();
    expect(screen.getByAltText(/imagezoom/i)).not.toBeNull();
  });

  it("applies custom alt, width, height, and id props", async () => {
    render(
      <ImageZoom
        src="test.jpg"
        alt="Custom alt"
        width={123}
        height={456}
        id="custom-id"
      />
    );
    const imgInstance = (window.Image as any).mock.instances[0];
    await act(async () => {
      imgInstance.onload();
    });
    const img = screen.getByAltText("Custom alt");
    expect(img.getAttribute("width")).toBe("123");
    expect(img.getAttribute("height")).toBe("456");
    const buttons = screen.getAllByRole("button");
    const customButton = buttons.find(btn => btn.getAttribute("id") === "custom-id");
    expect(customButton).not.toBeNull();
    expect(customButton!.getAttribute("id")).toBe("custom-id");
  });

  it("applies theme classes if provided", async () => {
    render(
      <ImageZoom src="test.jpg" theme={{ root: "my-root", image: "my-img" }} />
    );
    const imgInstance = (window.Image as any).mock.instances[0];
    await act(async () => {
      imgInstance.onload();
    });
    expect(screen.getByRole("button").className).toMatch(/my-root/);
    expect(screen.getByRole("img").className).toMatch(/my-img/);
  });

  it("shows errorContent if image fails to load and errorContent is provided", async () => {
    const errorContent = <div data-testid="custom-error">Custom error</div>;
    render(<ImageZoom src="" errorContent={errorContent} />);
    expect(screen.queryByTestId("custom-error")).not.toBeNull();
  });

  it("toggles zoom on click", async () => {
    render(<ImageZoom src="test.jpg" />);
    const imgInstance = (window.Image as any).mock.instances[0];
    await act(async () => {
      imgInstance.onload();
    });
    const figure = screen.getByRole("button");
    expect(figure.className).toMatch(/fullView/);
    fireEvent.click(figure);
    expect(figure.className).toMatch(/zoomed/);
    fireEvent.click(figure);
    expect(figure.className).toMatch(/fullView/);
  });

  it("calls onError callback if image fails to load", async () => {
  const onError = vi.fn();
  render(<ImageZoom src="bad.jpg" onError={onError} />);
  const imgInstance = (window.Image as any).mock.instances[0];
  await act(async () => {
    if (imgInstance.onerror) imgInstance.onerror(new Event("error"));
  });
  expect(onError).toHaveBeenCalled();
});
});