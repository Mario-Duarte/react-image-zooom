import Ye, { useEffect as me, useMemo as Ve, useCallback as V, useState as ye, useRef as Le, isValidElement as gr } from "react";
var be = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function hr() {
  if (Me) return J;
  Me = 1;
  var f = Ye, c = Symbol.for("react.element"), u = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, v = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(T, m, k) {
    var s, w = {}, O = null, C = null;
    k !== void 0 && (O = "" + k), m.key !== void 0 && (O = "" + m.key), m.ref !== void 0 && (C = m.ref);
    for (s in m) d.call(m, s) && !R.hasOwnProperty(s) && (w[s] = m[s]);
    if (T && T.defaultProps) for (s in m = T.defaultProps, m) w[s] === void 0 && (w[s] = m[s]);
    return { $$typeof: c, type: T, key: O, ref: C, props: w, _owner: v.current };
  }
  return J.Fragment = u, J.jsx = b, J.jsxs = b, J;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function mr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var f = Ye, c = Symbol.for("react.element"), u = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), T = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), F = Symbol.iterator, x = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[x];
      return typeof r == "function" ? r : null;
    }
    var S = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ie("error", e, t);
      }
    }
    function ie(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Z = !1, H = !1, X = !1, ue = !1, U = !1, G;
    G = Symbol.for("react.module.reference");
    function se(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === R || U || e === v || e === k || e === s || ue || e === C || Z || H || X || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === w || e.$$typeof === b || e.$$typeof === T || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === G || e.getModuleId !== void 0));
    }
    function Q(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case u:
          return "Portal";
        case R:
          return "Profiler";
        case v:
          return "StrictMode";
        case k:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ee(r) + ".Consumer";
          case b:
            var t = e;
            return ee(t._context) + ".Provider";
          case m:
            return Q(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : j(e.type) || "Memo";
          case O: {
            var i = e, l = i._payload, o = i._init;
            try {
              return j(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var p = Object.assign, D = 0, L, M, A, re, N, B, Ee;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function Ue() {
      {
        if (D === 0) {
          L = console.log, M = console.info, A = console.warn, re = console.error, N = console.group, B = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ne() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: p({}, e, {
              value: L
            }),
            info: p({}, e, {
              value: M
            }),
            warn: p({}, e, {
              value: A
            }),
            error: p({}, e, {
              value: re
            }),
            group: p({}, e, {
              value: N
            }),
            groupCollapsed: p({}, e, {
              value: B
            }),
            groupEnd: p({}, e, {
              value: Ee
            })
          });
        }
        D < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = S.ReactCurrentDispatcher, ce;
    function te(e, r, t) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            ce = n && n[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var fe = !1, ne;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Be();
    }
    function Re(e, r) {
      if (!e || fe)
        return "";
      {
        var t = ne.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      fe = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = le.current, le.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), E = n.stack.split(`
`), g = a.length - 1, h = E.length - 1; g >= 1 && h >= 0 && a[g] !== E[h]; )
            h--;
          for (; g >= 1 && h >= 0; g--, h--)
            if (a[g] !== E[h]) {
              if (g !== 1 || h !== 1)
                do
                  if (g--, h--, h < 0 || a[g] !== E[h]) {
                    var P = `
` + a[g].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, P), P;
                  }
                while (g >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        fe = !1, le.current = l, Ne(), Error.prepareStackTrace = i;
      }
      var Y = e ? e.displayName || e.name : "", $ = Y ? te(Y) : "";
      return typeof e == "function" && ne.set(e, $), $;
    }
    function ze(e, r, t) {
      return Re(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Je(e));
      if (typeof e == "string")
        return te(e);
      switch (e) {
        case k:
          return te("Suspense");
        case s:
          return te("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return ze(e.render);
          case w:
            return ae(e.type, r, t);
          case O: {
            var n = e, i = n._payload, l = n._init;
            try {
              return ae(l(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, Te = {}, we = S.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var r = e._owner, t = ae(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var l = Function.call.bind(z);
        for (var o in e)
          if (l(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              a = g;
            }
            a && !(a instanceof Error) && (oe(i), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), oe(null)), a instanceof Error && !(a.message in Te) && (Te[a.message] = !0, oe(i), y("Failed %s type: %s", t, a.message), oe(null));
          }
      }
    }
    var Ke = Array.isArray;
    function de(e) {
      return Ke(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Pe(e) {
      if (He(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), Se(e);
    }
    var Oe = S.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, xe;
    function Ge(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && Oe.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, i, l, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ar(e, r, t, n, i) {
      {
        var l, o = {}, a = null, E = null;
        t !== void 0 && (Pe(t), a = "" + t), Qe(r) && (Pe(r.key), a = "" + r.key), Ge(r) && (E = r.ref, er(r, i));
        for (l in r)
          z.call(r, l) && !Xe.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (l in g)
            o[l] === void 0 && (o[l] = g[l]);
        }
        if (a || E) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, h), E && tr(o, h);
        }
        return nr(e, a, E, i, n, Oe.current, o);
      }
    }
    var ve = S.ReactCurrentOwner, je = S.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = ae(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var pe;
    pe = !1;
    function ge(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function ke() {
      {
        if (ve.current) {
          var e = j(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var De = {};
    function ir(e) {
      {
        var r = ke();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Fe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (De[t])
          return;
        De[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ve.current && (n = " It was passed a child from " + j(e._owner.type) + "."), W(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), W(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ge(n) && Fe(n, r);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = I(e);
          if (typeof i == "function" && i !== e.entries)
            for (var l = i.call(e), o; !(o = l.next()).done; )
              ge(o.value) && Fe(o.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !pe) {
          pe = !0;
          var i = j(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            W(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Ae = {};
    function $e(e, r, t, n, i, l) {
      {
        var o = se(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = or();
          E ? a += E : a += ke();
          var g;
          e === null ? g = "null" : de(e) ? g = "array" : e !== void 0 && e.$$typeof === c ? (g = "<" + (j(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, a);
        }
        var h = ar(e, r, t, i, l);
        if (h == null)
          return h;
        if (o) {
          var P = r.children;
          if (P !== void 0)
            if (n)
              if (de(P)) {
                for (var Y = 0; Y < P.length; Y++)
                  Ie(P[Y], e);
                Object.freeze && Object.freeze(P);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(P, e);
        }
        if (z.call(r, "key")) {
          var $ = j(e), _ = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), he = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[$ + he]) {
            var vr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, $, vr, $), Ae[$ + he] = !0;
          }
        }
        return e === d ? sr(h) : ur(h), h;
      }
    }
    function lr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function cr(e, r, t) {
      return $e(e, r, t, !1);
    }
    var fr = cr, dr = lr;
    q.Fragment = d, q.jsx = fr, q.jsxs = dr;
  }()), q;
}
process.env.NODE_ENV === "production" ? be.exports = hr() : be.exports = mr();
var K = be.exports;
function yr(f, c) {
  me(() => {
    const u = getComputedStyle(document.body).overflow || "auto";
    return f ? document.body.style.overflow = "hidden" : document.body.style.overflow = u, () => {
      document.body.style.overflow = u;
    };
  }, [f]), me(() => {
    if (!c) return;
    const u = (d) => {
      f && d.preventDefault();
    };
    return f && c.addEventListener("touchmove", u, { passive: !1 }), () => {
      c.removeEventListener("touchmove", u);
    };
  }, [f, c]);
}
function br(f, c, u, d) {
  return Ve(() => {
    if (!c || !u) return `${f}%`;
    const v = (d == null ? void 0 : d.clientWidth) || 0;
    if (!v) return `${f}%`;
    const R = u / v * 100;
    return `${R < 100 ? f : R}%`;
  }, [f, c, u, d]);
}
function Er(f) {
  return V((c) => {
    if (!f) return;
    const u = f.getBoundingClientRect();
    let d, v;
    if (((b) => "touches" in b)(c)) {
      const b = c.touches[0];
      d = (b.clientX - u.x) / u.width * 100, v = (b.clientY - u.y) / u.height * 100;
    } else
      d = (c.clientX - u.x) / u.width * 100, v = (c.clientY - u.y) / u.height * 100;
    return `${Math.max(0, Math.min(d, 100))}% ${Math.max(
      0,
      Math.min(v, 100)
    )}%`;
  }, [f]);
}
function _r(f, c) {
  const [u, d] = ye({
    imgData: null,
    error: !1,
    naturalWidth: 0,
    naturalHeight: 0
  });
  return me(() => {
    if (d({ imgData: null, error: !1, naturalWidth: 0, naturalHeight: 0 }), !f) {
      d((T) => ({ ...T, error: !0 }));
      return;
    }
    const v = new Image(), R = () => {
      d({
        imgData: v.src,
        error: !1,
        naturalWidth: v.naturalWidth,
        naturalHeight: v.naturalHeight
      });
    }, b = (T) => {
      d((m) => ({ ...m, error: !0 })), c == null || c(T);
    };
    return v.addEventListener("load", R), v.addEventListener("error", b), v.src = f, () => {
      v.removeEventListener("load", R), v.removeEventListener("error", b);
    };
  }, [f, c]), u;
}
function Tr({
  zoom: f = "200",
  fullWidth: c = !1,
  alt: u = "This is an imageZoom image",
  width: d = "100%",
  height: v = "auto",
  src: R,
  id: b,
  className: T,
  onError: m,
  errorContent: k
}) {
  const [s, w] = ye(!1), [O, C] = ye("50% 50%"), F = Le(null), x = Er(F.current), I = Le(!1);
  yr(s, F.current);
  const { imgData: S, error: y, naturalWidth: ie } = _r(R, m), Z = br(
    f,
    c,
    ie,
    F.current
  ), H = (p, D, L, M, A, re) => {
    D && (I.current = !0);
    const N = !L;
    M(N);
    const B = N ? re(p) : "50% 50%";
    B && A(B);
  }, X = (p, D, L, M) => {
    if (D) {
      const A = M(p);
      A && L(A);
    }
  }, ue = V(
    (p) => {
      if (I.current) {
        I.current = !1;
        return;
      }
      H(p, !1, s, w, C, x);
    },
    [s, x]
  ), U = V(
    (p) => {
      H(p, !0, s, w, C, x);
    },
    [s, x]
  ), G = V(
    (p) => {
      X(p, s, C, x);
    },
    [s, x]
  ), se = V(
    (p) => {
      p.preventDefault(), I.current = !0, s ? X(p, s, C, x) : U(p);
    },
    [U, s, x]
  ), Q = V(() => {
    I.current = !1, w(!1), C("50% 50%");
  }, []), ee = Ve(
    () => ({
      backgroundImage: `url(${s && S ? S : ""})`,
      backgroundSize: Z,
      backgroundPosition: O
    }),
    [s, S, Z, O]
  );
  if (y)
    return /* @__PURE__ */ K.jsx(K.Fragment, { children: gr(k) ? k : /* @__PURE__ */ K.jsx("p", { className: "image-zooom-error", children: "There was a problem loading your image" }) });
  const j = [
    S ? "loaded" : "loading",
    s ? "zoomed" : "fullView",
    "image-zooom",
    T
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ K.jsx(
    "figure",
    {
      ref: F,
      id: b,
      className: j,
      style: ee,
      onClick: ue,
      onMouseMove: G,
      onMouseLeave: Q,
      onTouchStart: U,
      onTouchMove: se,
      onTouchEnd: Q,
      role: "button",
      "aria-label": `Zoomable image: ${u}`,
      tabIndex: 0,
      children: S && /* @__PURE__ */ K.jsx(
        "img",
        {
          loading: "lazy",
          id: "imageZoom",
          src: S,
          alt: u,
          width: d,
          height: v
        }
      )
    }
  );
}
export {
  Tr as default
};
