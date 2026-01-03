(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}figure.image-zooom{position:relative;display:inline-block;width:auto;min-height:25vh;background-position:50% 50%;background-color:#eee;margin:0;overflow:hidden;cursor:zoom-in;-webkit-user-select:none;user-select:none}figure.image-zooom.loaded{min-height:auto}figure.image-zooom.zoomed{cursor:zoom-out}figure.image-zooom:before{content:"";background-color:transparent;position:absolute;top:0;left:0;right:0;width:100%;height:100%;opacity:1;transition:opacity .2s ease-in-out;z-index:1}figure.image-zooom.loaded:before{opacity:0}figure.image-zooom:after{content:"";position:absolute;top:calc(50% - 25px);left:calc(50% - 25px);width:50px;height:50px;border-radius:50%;border:5px solid transparent;border-top-color:#333;border-right-color:#333;border-bottom-color:#333;animation:rotate 2s linear infinite;opacity:1;transition:opacity .2s ease-in-out;z-index:2}figure.image-zooom.loaded:after{opacity:0}img#imageZoom{opacity:1;display:block}figure.image-zooom.zoomed img#imageZoom{opacity:0}p.image-zooom-error{width:100%;text-align:center;border:1px solid #f8f8f8;padding:8px 16px;border-radius:8px;color:#555}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { jsx as T } from "react/jsx-runtime";
import { useEffect as P, useMemo as H, useCallback as d, useState as S, useRef as z, isValidElement as q } from "react";
function A(t, o) {
  P(() => {
    const e = getComputedStyle(document.body).overflow || "auto";
    return t ? document.body.style.overflow = "hidden" : document.body.style.overflow = e, () => {
      document.body.style.overflow = e;
    };
  }, [t]), P(() => {
    if (!o) return;
    const e = (n) => {
      t && n.touches.length === 1 && n.preventDefault();
    };
    return t && o.addEventListener("touchmove", e, { passive: !1 }), () => {
      o.removeEventListener("touchmove", e);
    };
  }, [t, o]);
}
function F(t, o, e, n) {
  return H(() => {
    if (!o || !e) return `${t}%`;
    const r = (n == null ? void 0 : n.clientWidth) || 0;
    if (!r) return `${t}%`;
    const u = e / r * 100;
    return `${u < 100 ? t : u}%`;
  }, [t, o, e, n]);
}
function G(t) {
  return d((o) => {
    if (!t) return;
    const e = t.getBoundingClientRect();
    let n, r;
    if (((s) => "touches" in s)(o)) {
      const s = o.touches[0];
      n = (s.clientX - e.x) / e.width * 100, r = (s.clientY - e.y) / e.height * 100;
    } else
      n = (o.clientX - e.x) / e.width * 100, r = (o.clientY - e.y) / e.height * 100;
    return `${Math.max(0, Math.min(n, 100))}% ${Math.max(
      0,
      Math.min(r, 100)
    )}%`;
  }, [t]);
}
function J(t, o) {
  const [e, n] = S({
    imgData: null,
    error: !1,
    naturalWidth: 0,
    naturalHeight: 0
  });
  return P(() => {
    if (n({ imgData: null, error: !1, naturalWidth: 0, naturalHeight: 0 }), !t) {
      n((h) => ({ ...h, error: !0 }));
      return;
    }
    const r = new Image(), u = () => {
      n({
        imgData: r.src,
        error: !1,
        naturalWidth: r.naturalWidth,
        naturalHeight: r.naturalHeight
      });
    }, s = (h) => {
      n((y) => ({ ...y, error: !0 })), o == null || o(h);
    };
    return r.addEventListener("load", u), r.addEventListener("error", s), r.src = t, () => {
      r.removeEventListener("load", u), r.removeEventListener("error", s);
    };
  }, [t, o]), e;
}
function U({
  zoom: t = "200",
  fullWidth: o = !1,
  alt: e = "This is an imageZoom image",
  width: n = "100%",
  height: r = "auto",
  src: u,
  id: s,
  className: h,
  onError: y,
  errorContent: x
}) {
  const [i, b] = S(!1), [E, f] = S("50% 50%"), g = z(null), l = G(g.current), m = z(!1);
  A(i, g.current);
  const { imgData: c, error: W, naturalWidth: B } = J(u, y), I = F(
    t,
    o,
    B,
    g.current
  ), Z = (a, p, M, L, v, O) => {
    p && (m.current = !0);
    const C = !M;
    L(C);
    const D = C ? O(a) : "50% 50%";
    D && v(D);
  }, $ = (a, p, M, L) => {
    if (p) {
      const v = L(a);
      v && M(v);
    }
  }, j = d(
    (a) => {
      if (m.current) {
        m.current = !1;
        return;
      }
      Z(a, !1, i, b, f, l);
    },
    [i, l]
  ), w = d(
    (a) => {
      a.touches.length === 1 && Z(a, !0, i, b, f, l);
    },
    [i, l]
  ), N = d(
    (a) => {
      $(a, i, f, l);
    },
    [i, l]
  ), V = d(
    (a) => {
      a.touches.length === 1 && (a.preventDefault(), m.current = !0, i ? $(a, i, f, l) : w(a));
    },
    [w, i, l]
  ), k = d(() => {
    m.current = !1, b(!1), f("50% 50%");
  }, []), X = H(
    () => ({
      backgroundImage: `url(${i && c ? c : ""})`,
      backgroundSize: I,
      backgroundPosition: E
    }),
    [i, c, I, E]
  );
  if (W)
    return q(x) ? x : /* @__PURE__ */ T("p", { className: "image-zooom-error", children: "There was a problem loading your image" });
  const Y = [
    c ? "loaded" : "loading",
    i ? "zoomed" : "fullView",
    "image-zooom",
    h
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ T(
    "figure",
    {
      ref: g,
      id: s,
      className: Y,
      style: X,
      onClick: j,
      onMouseMove: N,
      onMouseLeave: k,
      onTouchStart: w,
      onTouchMove: V,
      onTouchEnd: k,
      role: "button",
      "aria-label": `Zoomable image: ${e}`,
      tabIndex: 0,
      children: c && /* @__PURE__ */ T(
        "img",
        {
          loading: "lazy",
          id: "imageZoom",
          src: c,
          alt: e,
          width: n,
          height: r
        }
      )
    }
  );
}
export {
  U as default
};
