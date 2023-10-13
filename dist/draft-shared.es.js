import je from "react";
function dr(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Z = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function fr() {
  if (Te)
    return A;
  Te = 1;
  var c = je, f = Symbol.for("react.element"), p = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, x = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(E, b, S) {
    var h, C = {}, w = null, W = null;
    S !== void 0 && (w = "" + S), b.key !== void 0 && (w = "" + b.key), b.ref !== void 0 && (W = b.ref);
    for (h in b)
      l.call(b, h) && !v.hasOwnProperty(h) && (C[h] = b[h]);
    if (E && E.defaultProps)
      for (h in b = E.defaultProps, b)
        C[h] === void 0 && (C[h] = b[h]);
    return { $$typeof: f, type: E, key: w, ref: W, props: C, _owner: x.current };
  }
  return A.Fragment = p, A.jsx = R, A.jsxs = R, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function pr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var c = je, f = Symbol.for("react.element"), p = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), E = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), re = Symbol.iterator, Pe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var P = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var a = P.ReactDebugCurrentFrame, i = a.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Fe = !1, Ne = !1, Ae = !1, Ie = !1, We = !1, te;
    te = Symbol.for("react.module.reference");
    function Be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === v || We || e === x || e === S || e === h || Ie || e === W || Fe || Ne || Ae || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === C || e.$$typeof === R || e.$$typeof === E || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case p:
          return "Portal";
        case v:
          return "Profiler";
        case x:
          return "StrictMode";
        case S:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return ae(r) + ".Consumer";
          case R:
            var t = e;
            return ae(t._context) + ".Provider";
          case b:
            return $e(e, e.render, "ForwardRef");
          case C:
            var a = e.displayName || null;
            return a !== null ? a : O(e.type) || "Memo";
          case w: {
            var i = e, s = i._payload, o = i._init;
            try {
              return O(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, F = 0, ne, oe, ie, ce, se, le, ue;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ye() {
      {
        if (F === 0) {
          ne = console.log, oe = console.info, ie = console.warn, ce = console.error, se = console.group, le = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        F++;
      }
    }
    function Le() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ne
            }),
            info: j({}, e, {
              value: oe
            }),
            warn: j({}, e, {
              value: ie
            }),
            error: j({}, e, {
              value: ce
            }),
            group: j({}, e, {
              value: se
            }),
            groupCollapsed: j({}, e, {
              value: le
            }),
            groupEnd: j({}, e, {
              value: ue
            })
          });
        }
        F < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = P.ReactCurrentDispatcher, q;
    function B(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (i) {
            var a = i.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
          }
        return `
` + q + e;
      }
    }
    var G = !1, $;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new Me();
    }
    function fe(e, r) {
      if (!e || G)
        return "";
      {
        var t = $.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      G = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = V.current, V.current = null, Ye();
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
            } catch (T) {
              a = T;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (T) {
              a = T;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            a = T;
          }
          e();
        }
      } catch (T) {
        if (T && a && typeof T.stack == "string") {
          for (var n = T.stack.split(`
`), g = a.stack.split(`
`), u = n.length - 1, d = g.length - 1; u >= 1 && d >= 0 && n[u] !== g[d]; )
            d--;
          for (; u >= 1 && d >= 0; u--, d--)
            if (n[u] !== g[d]) {
              if (u !== 1 || d !== 1)
                do
                  if (u--, d--, d < 0 || n[u] !== g[d]) {
                    var _ = `
` + n[u].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && $.set(e, _), _;
                  }
                while (u >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        G = !1, V.current = s, Le(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", Oe = D ? B(D) : "";
      return typeof e == "function" && $.set(e, Oe), Oe;
    }
    function Ue(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case S:
          return B("Suspense");
        case h:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Ue(e.render);
          case C:
            return Y(e.type, r, t);
          case w: {
            var a = e, i = a._payload, s = a._init;
            try {
              return Y(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, pe = {}, ve = P.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function qe(e, r, t, a, i) {
      {
        var s = Function.call.bind(L);
        for (var o in e)
          if (s(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              n = u;
            }
            n && !(n instanceof Error) && (M(i), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), M(null)), n instanceof Error && !(n.message in pe) && (pe[n.message] = !0, M(i), m("Failed %s type: %s", t, n.message), M(null));
          }
      }
    }
    var Ge = Array.isArray;
    function J(e) {
      return Ge(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function me(e) {
      if (He(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), be(e);
    }
    var N = P.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, ye, H;
    H = {};
    function Ke(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && N.current && r && N.current.stateNode !== r) {
        var t = O(N.current.type);
        H[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(N.current.type), e.ref), H[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, a, i, s, o) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function tr(e, r, t, a, i) {
      {
        var s, o = {}, n = null, g = null;
        t !== void 0 && (me(t), n = "" + t), Xe(r) && (me(r.key), n = "" + r.key), Ke(r) && (g = r.ref, Ze(r, i));
        for (s in r)
          L.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (n || g) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && Qe(o, d), g && er(o, d);
        }
        return rr(e, n, g, i, a, N.current, o);
      }
    }
    var z = P.ReactCurrentOwner, he = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function _e() {
      {
        if (z.current) {
          var e = O(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var xe = {};
    function nr(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== z.current && (a = " It was passed a child from " + O(e._owner.type) + "."), k(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), k(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            X(a) && Ee(a, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = ke(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              X(o.value) && Ee(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = O(r);
          qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var i = O(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            k(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Ce(e, r, t, a, i, s) {
      {
        var o = Be(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = ar(i);
          g ? n += g : n += _e();
          var u;
          e === null ? u = "null" : J(e) ? u = "array" : e !== void 0 && e.$$typeof === f ? (u = "<" + (O(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, n);
        }
        var d = tr(e, r, t, i, s);
        if (d == null)
          return d;
        if (o) {
          var _ = r.children;
          if (_ !== void 0)
            if (a)
              if (J(_)) {
                for (var D = 0; D < _.length; D++)
                  Re(_[D], e);
                Object.freeze && Object.freeze(_);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(_, e);
        }
        return e === l ? ir(d) : or(d), d;
      }
    }
    function cr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var lr = sr, ur = cr;
    I.Fragment = l, I.jsx = lr, I.jsxs = ur;
  }()), I;
}
process.env.NODE_ENV === "production" ? Z.exports = fr() : Z.exports = pr();
var Q = Z.exports;
const vr = Q.Fragment, y = Q.jsx, ee = Q.jsxs;
var Se = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(c) {
  (function() {
    var f = {}.hasOwnProperty;
    function p() {
      for (var l = [], x = 0; x < arguments.length; x++) {
        var v = arguments[x];
        if (v) {
          var R = typeof v;
          if (R === "string" || R === "number")
            l.push(v);
          else if (Array.isArray(v)) {
            if (v.length) {
              var E = p.apply(null, v);
              E && l.push(E);
            }
          } else if (R === "object") {
            if (v.toString !== Object.prototype.toString && !v.toString.toString().includes("[native code]")) {
              l.push(v.toString());
              continue;
            }
            for (var b in v)
              f.call(v, b) && v[b] && l.push(b);
          }
        }
      }
      return l.join(" ");
    }
    c.exports ? (p.default = p, c.exports = p) : window.classNames = p;
  })();
})(Se);
var br = Se.exports;
const U = /* @__PURE__ */ dr(br), hr = ({ children: c, ...f }) => {
  const { className: p, ...l } = { ...f };
  return /* @__PURE__ */ y(
    "button",
    {
      ...l,
      className: U(
        p,
        "CadoiButton CadoiButton--primary cadoi-py-2 cadoi-px-3 cadoi-inline-flex cadoi-justify-center cadoi-items-center cadoi-gap-2 cadoi-rounded-md cadoi-border cadoi-border-transparent cadoi-font-semibold cadoi-bg-primary-btn-bg cadoi-text-primary-btn-text cadoi-no-underline hover:cadoi-bg-primary-btn-bg-hover focus:cadoi-outline-none focus:cadoi-ring-2 focus:cadoi-ring-primary-btn-bg focus:cadoi-ring-offset-2 cadoi-transition-all cadoi-text-sm cadoi-h-9 hover:cadoi-text-primary-btn-text-hover disabled:cadoi-opacity-75 disabled:cadoi-cursor-not-allowed disabled:cadoi-bg-primary-btn-bg disabled:cadoi-text-primary-btn-text"
      ),
      children: c
    }
  );
}, _r = ({ children: c, ...f }) => {
  const { className: p, ...l } = { ...f };
  return /* @__PURE__ */ y(
    "a",
    {
      ...l,
      className: U(
        p,
        "CadoiButton CadoiButton--primary cadoi-py-2 cadoi-px-3 cadoi-inline-flex cadoi-justify-center cadoi-items-center cadoi-gap-2 cadoi-rounded-md cadoi-border cadoi-border-transparent cadoi-font-semibold cadoi-bg-primary-btn-bg cadoi-text-primary-btn-text cadoi-no-underline hover:cadoi-bg-primary-btn-bg-hover focus:cadoi-outline-none focus:cadoi-ring-2 focus:cadoi-ring-primary-btn-bg focus:cadoi-ring-offset-2 cadoi-transition-all cadoi-text-sm cadoi-h-9 hover:cadoi-text-primary-btn-text-hover disabled:cadoi-opacity-75 disabled:cadoi-cursor-not-allowed disabled:cadoi-bg-primary-btn-bg disabled:cadoi-text-primary-btn-text"
      ),
      children: c
    }
  );
}, xr = ({ children: c }) => /* @__PURE__ */ y("tr", { className: "cadoi-border-b cadoi-border-primary-border cadoi-flex cadoi-flex-col cadoi-justify-start cadoi-w-full md:cadoi-table-row", children: c }), Er = ({ children: c, headingCol4: f }) => /* @__PURE__ */ y(
  "td",
  {
    className: "CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-justify-end",
    role: "cell",
    "data-label": f,
    children: c
  }
), Rr = ({
  orderName: c,
  orderCreatedAt: f,
  orderTotalNetAmount: p,
  headingCol1: l,
  headingCol2: x,
  headingCol3: v
}) => /* @__PURE__ */ ee(vr, { children: [
  /* @__PURE__ */ y(
    "td",
    {
      className: "CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-whitespace-nowrap cadoi-font-medium cadoi-text-primary-text cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left",
      role: "cell",
      "data-label": l,
      children: c
    }
  ),
  /* @__PURE__ */ y(
    "td",
    {
      className: "CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left",
      role: "cell",
      "data-label": x,
      children: f
    }
  ),
  /* @__PURE__ */ y(
    "td",
    {
      className: "CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left",
      role: "cell",
      "data-label": v,
      children: p
    }
  )
] }), mr = {
  9: "cadoi-w-full md:cadoi-w-9/12",
  10: "cadoi-w-full md:cadoi-w-10/12",
  11: "cadoi-w-full md:cadoi-w-11/12",
  12: "cadoi-w-full"
}, gr = {
  start: "cadoi-justify-start",
  end: "cadoi-justify-end",
  center: "cadoi-justify-center",
  "space-between": "cadoi-justify-between",
  "space-evenly": "cadoi-justify-evenly"
}, Cr = ({
  children: c,
  blockDistribution: f,
  blockWidth: p,
  ...l
}) => /* @__PURE__ */ y(
  "div",
  {
    className: U(
      "cadoi-flex cadoi-flex-wrap cadoi-my-10",
      gr[f]
    ),
    children: /* @__PURE__ */ ee(
      "table",
      {
        ...l,
        className: U(
          "CadoiOrdersTable cadoi-border-collapse cadoi-indent-0 cadoi-border-inherit cadoi-table-auto cadoi-text-sm cadoi-text-left cadoi-text-secondary-text",
          mr[p]
        ),
        children: [
          /* @__PURE__ */ y("caption", { className: "cadoi-sr-only", children: "Your Orders" }),
          c
        ]
      }
    )
  }
), Or = ({ headingCol1: c, headingCol2: f, headingCol3: p, headingCol4: l }) => /* @__PURE__ */ y("thead", { className: "cadoi-text-xs cadoi-text-primary-text cadoi-uppercase cadoi-bg-secondary-bg cadoi-hidden md:cadoi-table-header-group", children: /* @__PURE__ */ ee("tr", { children: [
  /* @__PURE__ */ y("th", { scope: "col", className: "cadoi-px-4 cadoi-py-3", children: c }),
  /* @__PURE__ */ y("th", { scope: "col", className: "cadoi-px-4 cadoi-py-3", children: f }),
  /* @__PURE__ */ y("th", { scope: "col", className: "cadoi-px-4 cadoi-py-3", children: p }),
  /* @__PURE__ */ y("th", { scope: "col", className: "cadoi-px-4 cadoi-py-3 cadoi-text-right", children: l })
] }) }), Tr = ({ children: c }) => /* @__PURE__ */ y("section", { className: "cadoi-py-16", children: c }), wr = {
  widget_settings: {
    style: {
      general: {
        primaryTextColor: {
          rgb: {
            red: 30,
            green: 30,
            blue: 30
          }
        },
        secondaryTextColor: {
          rgb: {
            red: 90,
            green: 90,
            blue: 90
          }
        },
        primaryBgColor: {
          rgb: {
            red: 255,
            green: 255,
            blue: 255
          }
        },
        secondaryBgColor: {
          rgb: {
            red: 249,
            green: 249,
            blue: 249
          }
        },
        primaryBorderColor: {
          rgb: {
            red: 231,
            green: 231,
            blue: 231
          }
        },
        primaryBtnBgColor: {
          rgb: {
            red: 59,
            green: 130,
            blue: 246
          }
        },
        primaryBtnTextColor: {
          rgb: {
            red: 255,
            green: 255,
            blue: 255
          }
        },
        primaryBtnBgHoverColor: {
          rgb: {
            red: 37,
            green: 99,
            blue: 235
          }
        },
        primaryBtnTextHoverColor: {
          rgb: {
            red: 255,
            green: 255,
            blue: 255
          }
        }
      }
    },
    composition: {
      settings: {
        blockDistribution: "center"
      },
      blocks: {
        "orders-table": {
          type: "orders-table",
          name: "Orders table",
          settings: {
            mandatory: !0,
            width: 12,
            headingCol1: "Invoice",
            headingCol2: "Date",
            headingCol3: "Amount",
            headingCol4: "",
            payButtonText: "Pay Now"
          },
          segments: {},
          segmentOrder: []
        }
      },
      blockOrder: ["orders-table"]
    }
  }
};
export {
  hr as Button,
  _r as ButtonLink,
  wr as ORDERS_DEFAULT_SETTINGS,
  xr as OrderItem,
  Er as OrderItemActions,
  Rr as OrderItemInfo,
  Cr as OrdersTable,
  Or as OrdersTableHead,
  Tr as OrdersWidget
};
