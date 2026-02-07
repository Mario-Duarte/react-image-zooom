/**
 * A mock class for simulating image loading behavior in tests.
 *
 * This class mimics the behavior of an HTMLImageElement, allowing you to set
 * the `src`, `naturalWidth`, and `naturalHeight` properties, as well as handle
 * `onload` and `onerror` events. It also tracks all instances created for
 * easier inspection in tests.
 *
 * @example
 * // Usage in tests:
 * const img = new MockImage();
 * img.setSrc('image.jpg');
 * img.onload?.();
 *
 * @remarks
 * - All created instances are stored in the static `mock.instances` array.
 * - Event listeners can be added via `addEventListener`.
 */

export default class MockImage {
    static mock = { instances: [] as MockImage[] };
    public src = "";
    public naturalWidth = 100;
    public naturalHeight = 200;
    public onload: (() => void) | null = null;
    public onerror: ((e: Event) => void) | null = null;

    constructor() {
      (this.constructor as typeof MockImage).mock.instances.push(this);
    }
    addEventListener(event: string, cb: (...args: unknown[]) => void) {
      (this as any)[`on${event}`] = cb;
    }
    removeEventListener() {}
    setSrc(src: string) {
      this.src = src;
    }
  }
