function Cp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function jp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Np = { exports: {} },
  rl = {},
  Pp = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yi = Symbol.for("react.element"),
  k0 = Symbol.for("react.portal"),
  C0 = Symbol.for("react.fragment"),
  j0 = Symbol.for("react.strict_mode"),
  N0 = Symbol.for("react.profiler"),
  P0 = Symbol.for("react.provider"),
  R0 = Symbol.for("react.context"),
  T0 = Symbol.for("react.forward_ref"),
  _0 = Symbol.for("react.suspense"),
  L0 = Symbol.for("react.memo"),
  O0 = Symbol.for("react.lazy"),
  md = Symbol.iterator;
function D0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (md && e[md]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Tp = Object.assign,
  _p = {};
function lo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _p),
    (this.updater = n || Rp);
}
lo.prototype.isReactComponent = {};
lo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
lo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lp() {}
Lp.prototype = lo.prototype;
function Fu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = _p),
    (this.updater = n || Rp);
}
var Iu = (Fu.prototype = new Lp());
Iu.constructor = Fu;
Tp(Iu, lo.prototype);
Iu.isPureReactComponent = !0;
var gd = Array.isArray,
  Op = Object.prototype.hasOwnProperty,
  $u = { current: null },
  Dp = { key: !0, ref: !0, __self: !0, __source: !0 };
function bp(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Op.call(t, r) && !Dp.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: yi,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: $u.current,
  };
}
function b0(e, t) {
  return {
    $$typeof: yi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Uu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yi;
}
function z0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var vd = /\/+/g;
function $l(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? z0("" + e.key)
    : t.toString(36);
}
function na(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case yi:
          case k0:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + $l(a, 0) : r),
      gd(o)
        ? ((n = ""),
          e != null && (n = e.replace(vd, "$&/") + "/"),
          na(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Uu(o) &&
            (o = b0(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(vd, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), gd(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + $l(i, l);
      a += na(i, t, n, s, o);
    }
  else if (((s = D0(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + $l(i, l++)), (a += na(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function bi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    na(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function M0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var nt = { current: null },
  ra = { transition: null },
  A0 = {
    ReactCurrentDispatcher: nt,
    ReactCurrentBatchConfig: ra,
    ReactCurrentOwner: $u,
  };
Z.Children = {
  map: bi,
  forEach: function (e, t, n) {
    bi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      bi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      bi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Uu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Z.Component = lo;
Z.Fragment = C0;
Z.Profiler = N0;
Z.PureComponent = Fu;
Z.StrictMode = j0;
Z.Suspense = _0;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A0;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Tp({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = $u.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Op.call(t, s) &&
        !Dp.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: yi, type: e.type, key: o, ref: i, props: r, _owner: a };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: R0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: P0, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = bp;
Z.createFactory = function (e) {
  var t = bp.bind(null, e);
  return (t.type = e), t;
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: T0, render: e };
};
Z.isValidElement = Uu;
Z.lazy = function (e) {
  return { $$typeof: O0, _payload: { _status: -1, _result: e }, _init: M0 };
};
Z.memo = function (e, t) {
  return { $$typeof: L0, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = ra.transition;
  ra.transition = {};
  try {
    e();
  } finally {
    ra.transition = t;
  }
};
Z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Z.useCallback = function (e, t) {
  return nt.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return nt.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return nt.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return nt.current.useEffect(e, t);
};
Z.useId = function () {
  return nt.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
  return nt.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
  return nt.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return nt.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return nt.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
  return nt.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
  return nt.current.useRef(e);
};
Z.useState = function (e) {
  return nt.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
  return nt.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
  return nt.current.useTransition();
};
Z.version = "18.2.0";
Pp.exports = Z;
var C = Pp.exports;
const G = jp(C),
  F0 = Cp({ __proto__: null, default: G }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var I0 = C,
  $0 = Symbol.for("react.element"),
  U0 = Symbol.for("react.fragment"),
  B0 = Object.prototype.hasOwnProperty,
  H0 = I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  V0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function zp(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) B0.call(t, r) && !V0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: $0,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: H0.current,
  };
}
rl.Fragment = U0;
rl.jsx = zp;
rl.jsxs = zp;
Np.exports = rl;
var h = Np.exports,
  Ns = {},
  Mp = { exports: {} },
  wt = {},
  Ap = { exports: {} },
  Fp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, A) {
    var I = b.length;
    b.push(A);
    e: for (; 0 < I; ) {
      var W = (I - 1) >>> 1,
        K = b[W];
      if (0 < o(K, A)) (b[W] = A), (b[I] = K), (I = W);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var A = b[0],
      I = b.pop();
    if (I !== A) {
      b[0] = I;
      e: for (var W = 0, K = b.length, fe = K >>> 1; W < fe; ) {
        var ne = 2 * (W + 1) - 1,
          de = b[ne],
          se = ne + 1,
          De = b[se];
        if (0 > o(de, I))
          se < K && 0 > o(De, de)
            ? ((b[W] = De), (b[se] = I), (W = se))
            : ((b[W] = de), (b[ne] = I), (W = ne));
        else if (se < K && 0 > o(De, I)) (b[W] = De), (b[se] = I), (W = se);
        else break e;
      }
    }
    return A;
  }
  function o(b, A) {
    var I = b.sortIndex - A.sortIndex;
    return I !== 0 ? I : b.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    g = 3,
    x = !1,
    y = !1,
    v = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(b) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= b)
        r(u), (A.sortIndex = A.expirationTime), t(s, A);
      else break;
      A = n(u);
    }
  }
  function E(b) {
    if (((v = !1), m(b), !y))
      if (n(s) !== null) (y = !0), Je(T);
      else {
        var A = n(u);
        A !== null && q(E, A.startTime - b);
      }
  }
  function T(b, A) {
    (y = !1), v && ((v = !1), p(P), (P = -1)), (x = !0);
    var I = g;
    try {
      for (
        m(A), d = n(s);
        d !== null && (!(d.expirationTime > A) || (b && !H()));

      ) {
        var W = d.callback;
        if (typeof W == "function") {
          (d.callback = null), (g = d.priorityLevel);
          var K = W(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof K == "function" ? (d.callback = K) : d === n(s) && r(s),
            m(A);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var fe = !0;
      else {
        var ne = n(u);
        ne !== null && q(E, ne.startTime - A), (fe = !1);
      }
      return fe;
    } finally {
      (d = null), (g = I), (x = !1);
    }
  }
  var w = !1,
    j = null,
    P = -1,
    O = 5,
    z = -1;
  function H() {
    return !(e.unstable_now() - z < O);
  }
  function ie() {
    if (j !== null) {
      var b = e.unstable_now();
      z = b;
      var A = !0;
      try {
        A = j(!0, b);
      } finally {
        A ? le() : ((w = !1), (j = null));
      }
    } else w = !1;
  }
  var le;
  if (typeof f == "function")
    le = function () {
      f(ie);
    };
  else if (typeof MessageChannel < "u") {
    var xe = new MessageChannel(),
      qe = xe.port2;
    (xe.port1.onmessage = ie),
      (le = function () {
        qe.postMessage(null);
      });
  } else
    le = function () {
      S(ie, 0);
    };
  function Je(b) {
    (j = b), w || ((w = !0), le());
  }
  function q(b, A) {
    P = S(function () {
      b(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), Je(T));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (b) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = g;
      }
      var I = g;
      g = A;
      try {
        return b();
      } finally {
        g = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, A) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var I = g;
      g = b;
      try {
        return A();
      } finally {
        g = I;
      }
    }),
    (e.unstable_scheduleCallback = function (b, A, I) {
      var W = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? W + I : W))
          : (I = W),
        b)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = I + K),
        (b = {
          id: c++,
          callback: A,
          priorityLevel: b,
          startTime: I,
          expirationTime: K,
          sortIndex: -1,
        }),
        I > W
          ? ((b.sortIndex = I),
            t(u, b),
            n(s) === null &&
              b === n(u) &&
              (v ? (p(P), (P = -1)) : (v = !0), q(E, I - W)))
          : ((b.sortIndex = K), t(s, b), y || x || ((y = !0), Je(T))),
        b
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (b) {
      var A = g;
      return function () {
        var I = g;
        g = A;
        try {
          return b.apply(this, arguments);
        } finally {
          g = I;
        }
      };
    });
})(Fp);
Ap.exports = Fp;
var W0 = Ap.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip = C,
  yt = W0;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $p = new Set(),
  Go = {};
function mr(e, t) {
  Qr(e, t), Qr(e + "Capture", t);
}
function Qr(e, t) {
  for (Go[e] = t, e = 0; e < t.length; e++) $p.add(t[e]);
}
var un = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ps = Object.prototype.hasOwnProperty,
  K0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yd = {},
  wd = {};
function Q0(e) {
  return Ps.call(wd, e)
    ? !0
    : Ps.call(yd, e)
    ? !1
    : K0.test(e)
    ? (wd[e] = !0)
    : ((yd[e] = !0), !1);
}
function Y0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function G0(e, t, n, r) {
  if (t === null || typeof t > "u" || Y0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function rt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    We[e] = new rt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  We[t] = new rt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  We[e] = new rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  We[e] = new rt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    We[e] = new rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  We[e] = new rt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  We[e] = new rt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  We[e] = new rt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  We[e] = new rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bu = /[\-:]([a-z])/g;
function Hu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bu, Hu);
    We[t] = new rt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bu, Hu);
    We[t] = new rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bu, Hu);
  We[t] = new rt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  We[e] = new rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
We.xlinkHref = new rt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  We[e] = new rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vu(e, t, n, r) {
  var o = We.hasOwnProperty(t) ? We[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (G0(t, n, o, r) && (n = null),
    r || o === null
      ? Q0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hn = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zi = Symbol.for("react.element"),
  Cr = Symbol.for("react.portal"),
  jr = Symbol.for("react.fragment"),
  Wu = Symbol.for("react.strict_mode"),
  Rs = Symbol.for("react.profiler"),
  Up = Symbol.for("react.provider"),
  Bp = Symbol.for("react.context"),
  Ku = Symbol.for("react.forward_ref"),
  Ts = Symbol.for("react.suspense"),
  _s = Symbol.for("react.suspense_list"),
  Qu = Symbol.for("react.memo"),
  jn = Symbol.for("react.lazy"),
  Hp = Symbol.for("react.offscreen"),
  xd = Symbol.iterator;
function yo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xd && e[xd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ce = Object.assign,
  Ul;
function Oo(e) {
  if (Ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ul = (t && t[1]) || "";
    }
  return (
    `
` +
    Ul +
    e
  );
}
var Bl = !1;
function Hl(e, t) {
  if (!e || Bl) return "";
  Bl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Bl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Oo(e) : "";
}
function X0(e) {
  switch (e.tag) {
    case 5:
      return Oo(e.type);
    case 16:
      return Oo("Lazy");
    case 13:
      return Oo("Suspense");
    case 19:
      return Oo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Hl(e.type, !1)), e;
    case 11:
      return (e = Hl(e.type.render, !1)), e;
    case 1:
      return (e = Hl(e.type, !0)), e;
    default:
      return "";
  }
}
function Ls(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jr:
      return "Fragment";
    case Cr:
      return "Portal";
    case Rs:
      return "Profiler";
    case Wu:
      return "StrictMode";
    case Ts:
      return "Suspense";
    case _s:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bp:
        return (e.displayName || "Context") + ".Consumer";
      case Up:
        return (e._context.displayName || "Context") + ".Provider";
      case Ku:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Qu:
        return (
          (t = e.displayName || null), t !== null ? t : Ls(e.type) || "Memo"
        );
      case jn:
        (t = e._payload), (e = e._init);
        try {
          return Ls(e(t));
        } catch {}
    }
  return null;
}
function q0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ls(t);
    case 8:
      return t === Wu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $n(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Vp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function J0(e) {
  var t = Vp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Mi(e) {
  e._valueTracker || (e._valueTracker = J0(e));
}
function Wp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Vp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ca(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Os(e, t) {
  var n = t.checked;
  return Ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Sd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $n(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Kp(e, t) {
  (t = t.checked), t != null && Vu(e, "checked", t, !1);
}
function Ds(e, t) {
  Kp(e, t);
  var n = $n(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bs(e, t.type, $n(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ed(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bs(e, t, n) {
  (t !== "number" || Ca(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Do = Array.isArray;
function Ir(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $n(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function zs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function kd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Do(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $n(n) };
}
function Qp(e, t) {
  var n = $n(t.value),
    r = $n(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Cd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ms(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Yp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ai,
  Gp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ai = Ai || document.createElement("div"),
          Ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ai.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ao = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Z0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ao).forEach(function (e) {
  Z0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ao[t] = Ao[e]);
  });
});
function Xp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ao.hasOwnProperty(e) && Ao[e])
    ? ("" + t).trim()
    : t + "px";
}
function qp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Xp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var eg = Ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function As(e, t) {
  if (t) {
    if (eg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Fs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Is = null;
function Yu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $s = null,
  $r = null,
  Ur = null;
function jd(e) {
  if ((e = Si(e))) {
    if (typeof $s != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = sl(t)), $s(e.stateNode, e.type, t));
  }
}
function Jp(e) {
  $r ? (Ur ? Ur.push(e) : (Ur = [e])) : ($r = e);
}
function Zp() {
  if ($r) {
    var e = $r,
      t = Ur;
    if (((Ur = $r = null), jd(e), t)) for (e = 0; e < t.length; e++) jd(t[e]);
  }
}
function eh(e, t) {
  return e(t);
}
function th() {}
var Vl = !1;
function nh(e, t, n) {
  if (Vl) return e(t, n);
  Vl = !0;
  try {
    return eh(e, t, n);
  } finally {
    (Vl = !1), ($r !== null || Ur !== null) && (th(), Zp());
  }
}
function qo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Us = !1;
if (un)
  try {
    var wo = {};
    Object.defineProperty(wo, "passive", {
      get: function () {
        Us = !0;
      },
    }),
      window.addEventListener("test", wo, wo),
      window.removeEventListener("test", wo, wo);
  } catch {
    Us = !1;
  }
function tg(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Fo = !1,
  ja = null,
  Na = !1,
  Bs = null,
  ng = {
    onError: function (e) {
      (Fo = !0), (ja = e);
    },
  };
function rg(e, t, n, r, o, i, a, l, s) {
  (Fo = !1), (ja = null), tg.apply(ng, arguments);
}
function og(e, t, n, r, o, i, a, l, s) {
  if ((rg.apply(this, arguments), Fo)) {
    if (Fo) {
      var u = ja;
      (Fo = !1), (ja = null);
    } else throw Error(L(198));
    Na || ((Na = !0), (Bs = u));
  }
}
function gr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Nd(e) {
  if (gr(e) !== e) throw Error(L(188));
}
function ig(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gr(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Nd(o), e;
        if (i === r) return Nd(o), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function oh(e) {
  return (e = ig(e)), e !== null ? ih(e) : null;
}
function ih(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ih(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ah = yt.unstable_scheduleCallback,
  Pd = yt.unstable_cancelCallback,
  ag = yt.unstable_shouldYield,
  lg = yt.unstable_requestPaint,
  Re = yt.unstable_now,
  sg = yt.unstable_getCurrentPriorityLevel,
  Gu = yt.unstable_ImmediatePriority,
  lh = yt.unstable_UserBlockingPriority,
  Pa = yt.unstable_NormalPriority,
  ug = yt.unstable_LowPriority,
  sh = yt.unstable_IdlePriority,
  ol = null,
  Kt = null;
function cg(e) {
  if (Kt && typeof Kt.onCommitFiberRoot == "function")
    try {
      Kt.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Mt = Math.clz32 ? Math.clz32 : pg,
  dg = Math.log,
  fg = Math.LN2;
function pg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((dg(e) / fg) | 0)) | 0;
}
var Fi = 64,
  Ii = 4194304;
function bo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ra(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = bo(l)) : ((i &= a), i !== 0 && (r = bo(i)));
  } else (a = n & ~o), a !== 0 ? (r = bo(a)) : i !== 0 && (r = bo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Mt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function hg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function mg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Mt(i),
      l = 1 << a,
      s = o[a];
    s === -1
      ? (!(l & n) || l & r) && (o[a] = hg(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Hs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function uh() {
  var e = Fi;
  return (Fi <<= 1), !(Fi & 4194240) && (Fi = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Mt(t)),
    (e[t] = n);
}
function gg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Mt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Xu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Mt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ue = 0;
function ch(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dh,
  qu,
  fh,
  ph,
  hh,
  Vs = !1,
  $i = [],
  On = null,
  Dn = null,
  bn = null,
  Jo = new Map(),
  Zo = new Map(),
  Pn = [],
  vg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Rd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      On = null;
      break;
    case "dragenter":
    case "dragleave":
      Dn = null;
      break;
    case "mouseover":
    case "mouseout":
      bn = null;
      break;
    case "pointerover":
    case "pointerout":
      Jo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zo.delete(t.pointerId);
  }
}
function xo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Si(t)), t !== null && qu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function yg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (On = xo(On, e, t, n, r, o)), !0;
    case "dragenter":
      return (Dn = xo(Dn, e, t, n, r, o)), !0;
    case "mouseover":
      return (bn = xo(bn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Jo.set(i, xo(Jo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Zo.set(i, xo(Zo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function mh(e) {
  var t = Zn(e.target);
  if (t !== null) {
    var n = gr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rh(n)), t !== null)) {
          (e.blockedOn = t),
            hh(e.priority, function () {
              fh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function oa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Is = r), n.target.dispatchEvent(r), (Is = null);
    } else return (t = Si(n)), t !== null && qu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Td(e, t, n) {
  oa(e) && n.delete(t);
}
function wg() {
  (Vs = !1),
    On !== null && oa(On) && (On = null),
    Dn !== null && oa(Dn) && (Dn = null),
    bn !== null && oa(bn) && (bn = null),
    Jo.forEach(Td),
    Zo.forEach(Td);
}
function So(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Vs ||
      ((Vs = !0),
      yt.unstable_scheduleCallback(yt.unstable_NormalPriority, wg)));
}
function ei(e) {
  function t(o) {
    return So(o, e);
  }
  if (0 < $i.length) {
    So($i[0], e);
    for (var n = 1; n < $i.length; n++) {
      var r = $i[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    On !== null && So(On, e),
      Dn !== null && So(Dn, e),
      bn !== null && So(bn, e),
      Jo.forEach(t),
      Zo.forEach(t),
      n = 0;
    n < Pn.length;
    n++
  )
    (r = Pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pn.length && ((n = Pn[0]), n.blockedOn === null); )
    mh(n), n.blockedOn === null && Pn.shift();
}
var Br = hn.ReactCurrentBatchConfig,
  Ta = !0;
function xg(e, t, n, r) {
  var o = ue,
    i = Br.transition;
  Br.transition = null;
  try {
    (ue = 1), Ju(e, t, n, r);
  } finally {
    (ue = o), (Br.transition = i);
  }
}
function Sg(e, t, n, r) {
  var o = ue,
    i = Br.transition;
  Br.transition = null;
  try {
    (ue = 4), Ju(e, t, n, r);
  } finally {
    (ue = o), (Br.transition = i);
  }
}
function Ju(e, t, n, r) {
  if (Ta) {
    var o = Ws(e, t, n, r);
    if (o === null) ts(e, t, r, _a, n), Rd(e, r);
    else if (yg(o, e, t, n, r)) r.stopPropagation();
    else if ((Rd(e, r), t & 4 && -1 < vg.indexOf(e))) {
      for (; o !== null; ) {
        var i = Si(o);
        if (
          (i !== null && dh(i),
          (i = Ws(e, t, n, r)),
          i === null && ts(e, t, r, _a, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else ts(e, t, r, null, n);
  }
}
var _a = null;
function Ws(e, t, n, r) {
  if (((_a = null), (e = Yu(r)), (e = Zn(e)), e !== null))
    if (((t = gr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (_a = e), null;
}
function gh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sg()) {
        case Gu:
          return 1;
        case lh:
          return 4;
        case Pa:
        case ug:
          return 16;
        case sh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tn = null,
  Zu = null,
  ia = null;
function vh() {
  if (ia) return ia;
  var e,
    t = Zu,
    n = t.length,
    r,
    o = "value" in Tn ? Tn.value : Tn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (ia = o.slice(e, 1 < r ? 1 - r : void 0));
}
function aa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ui() {
  return !0;
}
function _d() {
  return !1;
}
function xt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ui
        : _d),
      (this.isPropagationStopped = _d),
      this
    );
  }
  return (
    Ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ui));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ui));
      },
      persist: function () {},
      isPersistent: Ui,
    }),
    t
  );
}
var so = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ec = xt(so),
  xi = Ce({}, so, { view: 0, detail: 0 }),
  Eg = xt(xi),
  Kl,
  Ql,
  Eo,
  il = Ce({}, xi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Eo &&
            (Eo && e.type === "mousemove"
              ? ((Kl = e.screenX - Eo.screenX), (Ql = e.screenY - Eo.screenY))
              : (Ql = Kl = 0),
            (Eo = e)),
          Kl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ql;
    },
  }),
  Ld = xt(il),
  kg = Ce({}, il, { dataTransfer: 0 }),
  Cg = xt(kg),
  jg = Ce({}, xi, { relatedTarget: 0 }),
  Yl = xt(jg),
  Ng = Ce({}, so, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pg = xt(Ng),
  Rg = Ce({}, so, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Tg = xt(Rg),
  _g = Ce({}, so, { data: 0 }),
  Od = xt(_g),
  Lg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Og = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Dg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function bg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dg[e]) ? !!t[e] : !1;
}
function tc() {
  return bg;
}
var zg = Ce({}, xi, {
    key: function (e) {
      if (e.key) {
        var t = Lg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = aa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Og[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tc,
    charCode: function (e) {
      return e.type === "keypress" ? aa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? aa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Mg = xt(zg),
  Ag = Ce({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Dd = xt(Ag),
  Fg = Ce({}, xi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tc,
  }),
  Ig = xt(Fg),
  $g = Ce({}, so, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ug = xt($g),
  Bg = Ce({}, il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Hg = xt(Bg),
  Vg = [9, 13, 27, 32],
  nc = un && "CompositionEvent" in window,
  Io = null;
un && "documentMode" in document && (Io = document.documentMode);
var Wg = un && "TextEvent" in window && !Io,
  yh = un && (!nc || (Io && 8 < Io && 11 >= Io)),
  bd = " ",
  zd = !1;
function wh(e, t) {
  switch (e) {
    case "keyup":
      return Vg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Nr = !1;
function Kg(e, t) {
  switch (e) {
    case "compositionend":
      return xh(t);
    case "keypress":
      return t.which !== 32 ? null : ((zd = !0), bd);
    case "textInput":
      return (e = t.data), e === bd && zd ? null : e;
    default:
      return null;
  }
}
function Qg(e, t) {
  if (Nr)
    return e === "compositionend" || (!nc && wh(e, t))
      ? ((e = vh()), (ia = Zu = Tn = null), (Nr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return yh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Md(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yg[e.type] : t === "textarea";
}
function Sh(e, t, n, r) {
  Jp(r),
    (t = La(t, "onChange")),
    0 < t.length &&
      ((n = new ec("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $o = null,
  ti = null;
function Gg(e) {
  Oh(e, 0);
}
function al(e) {
  var t = Tr(e);
  if (Wp(t)) return e;
}
function Xg(e, t) {
  if (e === "change") return t;
}
var Eh = !1;
if (un) {
  var Gl;
  if (un) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var Ad = document.createElement("div");
      Ad.setAttribute("oninput", "return;"),
        (Xl = typeof Ad.oninput == "function");
    }
    Gl = Xl;
  } else Gl = !1;
  Eh = Gl && (!document.documentMode || 9 < document.documentMode);
}
function Fd() {
  $o && ($o.detachEvent("onpropertychange", kh), (ti = $o = null));
}
function kh(e) {
  if (e.propertyName === "value" && al(ti)) {
    var t = [];
    Sh(t, ti, e, Yu(e)), nh(Gg, t);
  }
}
function qg(e, t, n) {
  e === "focusin"
    ? (Fd(), ($o = t), (ti = n), $o.attachEvent("onpropertychange", kh))
    : e === "focusout" && Fd();
}
function Jg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return al(ti);
}
function Zg(e, t) {
  if (e === "click") return al(t);
}
function ev(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function tv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var It = typeof Object.is == "function" ? Object.is : tv;
function ni(e, t) {
  if (It(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ps.call(t, o) || !It(e[o], t[o])) return !1;
  }
  return !0;
}
function Id(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $d(e, t) {
  var n = Id(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Id(n);
  }
}
function Ch(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ch(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jh() {
  for (var e = window, t = Ca(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ca(e.document);
  }
  return t;
}
function rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function nv(e) {
  var t = jh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ch(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && rc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = $d(n, i));
        var a = $d(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var rv = un && "documentMode" in document && 11 >= document.documentMode,
  Pr = null,
  Ks = null,
  Uo = null,
  Qs = !1;
function Ud(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qs ||
    Pr == null ||
    Pr !== Ca(r) ||
    ((r = Pr),
    "selectionStart" in r && rc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Uo && ni(Uo, r)) ||
      ((Uo = r),
      (r = La(Ks, "onSelect")),
      0 < r.length &&
        ((t = new ec("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pr))));
}
function Bi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Rr = {
    animationend: Bi("Animation", "AnimationEnd"),
    animationiteration: Bi("Animation", "AnimationIteration"),
    animationstart: Bi("Animation", "AnimationStart"),
    transitionend: Bi("Transition", "TransitionEnd"),
  },
  ql = {},
  Nh = {};
un &&
  ((Nh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Rr.animationend.animation,
    delete Rr.animationiteration.animation,
    delete Rr.animationstart.animation),
  "TransitionEvent" in window || delete Rr.transitionend.transition);
function ll(e) {
  if (ql[e]) return ql[e];
  if (!Rr[e]) return e;
  var t = Rr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nh) return (ql[e] = t[n]);
  return e;
}
var Ph = ll("animationend"),
  Rh = ll("animationiteration"),
  Th = ll("animationstart"),
  _h = ll("transitionend"),
  Lh = new Map(),
  Bd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Vn(e, t) {
  Lh.set(e, t), mr(t, [e]);
}
for (var Jl = 0; Jl < Bd.length; Jl++) {
  var Zl = Bd[Jl],
    ov = Zl.toLowerCase(),
    iv = Zl[0].toUpperCase() + Zl.slice(1);
  Vn(ov, "on" + iv);
}
Vn(Ph, "onAnimationEnd");
Vn(Rh, "onAnimationIteration");
Vn(Th, "onAnimationStart");
Vn("dblclick", "onDoubleClick");
Vn("focusin", "onFocus");
Vn("focusout", "onBlur");
Vn(_h, "onTransitionEnd");
Qr("onMouseEnter", ["mouseout", "mouseover"]);
Qr("onMouseLeave", ["mouseout", "mouseover"]);
Qr("onPointerEnter", ["pointerout", "pointerover"]);
Qr("onPointerLeave", ["pointerout", "pointerover"]);
mr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var zo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  av = new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));
function Hd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), og(r, t, void 0, e), (e.currentTarget = null);
}
function Oh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          Hd(o, l, u), (i = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          Hd(o, l, u), (i = s);
        }
    }
  }
  if (Na) throw ((e = Bs), (Na = !1), (Bs = null), e);
}
function ge(e, t) {
  var n = t[Js];
  n === void 0 && (n = t[Js] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Dh(t, e, 2, !1), n.add(r));
}
function es(e, t, n) {
  var r = 0;
  t && (r |= 4), Dh(n, e, r, t);
}
var Hi = "_reactListening" + Math.random().toString(36).slice(2);
function ri(e) {
  if (!e[Hi]) {
    (e[Hi] = !0),
      $p.forEach(function (n) {
        n !== "selectionchange" && (av.has(n) || es(n, !1, e), es(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hi] || ((t[Hi] = !0), es("selectionchange", !1, t));
  }
}
function Dh(e, t, n, r) {
  switch (gh(t)) {
    case 1:
      var o = xg;
      break;
    case 4:
      o = Sg;
      break;
    default:
      o = Ju;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Us ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ts(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Zn(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  nh(function () {
    var u = i,
      c = Yu(n),
      d = [];
    e: {
      var g = Lh.get(e);
      if (g !== void 0) {
        var x = ec,
          y = e;
        switch (e) {
          case "keypress":
            if (aa(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Mg;
            break;
          case "focusin":
            (y = "focus"), (x = Yl);
            break;
          case "focusout":
            (y = "blur"), (x = Yl);
            break;
          case "beforeblur":
          case "afterblur":
            x = Yl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Ld;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Cg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Ig;
            break;
          case Ph:
          case Rh:
          case Th:
            x = Pg;
            break;
          case _h:
            x = Ug;
            break;
          case "scroll":
            x = Eg;
            break;
          case "wheel":
            x = Hg;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Tg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Dd;
        }
        var v = (t & 4) !== 0,
          S = !v && e === "scroll",
          p = v ? (g !== null ? g + "Capture" : null) : g;
        v = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var E = m.stateNode;
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              p !== null && ((E = qo(f, p)), E != null && v.push(oi(f, E, m)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((g = new x(g, y, null, n, c)), d.push({ event: g, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Is &&
            (y = n.relatedTarget || n.fromElement) &&
            (Zn(y) || y[cn]))
        )
          break e;
        if (
          (x || g) &&
          ((g =
            c.window === c
              ? c
              : (g = c.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = u),
              (y = y ? Zn(y) : null),
              y !== null &&
                ((S = gr(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = u)),
          x !== y)
        ) {
          if (
            ((v = Ld),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Dd),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (S = x == null ? g : Tr(x)),
            (m = y == null ? g : Tr(y)),
            (g = new v(E, f + "leave", x, n, c)),
            (g.target = S),
            (g.relatedTarget = m),
            (E = null),
            Zn(c) === u &&
              ((v = new v(p, f + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = S),
              (E = v)),
            (S = E),
            x && y)
          )
            t: {
              for (v = x, p = y, f = 0, m = v; m; m = Sr(m)) f++;
              for (m = 0, E = p; E; E = Sr(E)) m++;
              for (; 0 < f - m; ) (v = Sr(v)), f--;
              for (; 0 < m - f; ) (p = Sr(p)), m--;
              for (; f--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = Sr(v)), (p = Sr(p));
              }
              v = null;
            }
          else v = null;
          x !== null && Vd(d, g, x, v, !1),
            y !== null && S !== null && Vd(d, S, y, v, !0);
        }
      }
      e: {
        if (
          ((g = u ? Tr(u) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === "select" || (x === "input" && g.type === "file"))
        )
          var T = Xg;
        else if (Md(g))
          if (Eh) T = ev;
          else {
            T = Jg;
            var w = qg;
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (T = Zg);
        if (T && (T = T(e, u))) {
          Sh(d, T, n, c);
          break e;
        }
        w && w(e, g, u),
          e === "focusout" &&
            (w = g._wrapperState) &&
            w.controlled &&
            g.type === "number" &&
            bs(g, "number", g.value);
      }
      switch (((w = u ? Tr(u) : window), e)) {
        case "focusin":
          (Md(w) || w.contentEditable === "true") &&
            ((Pr = w), (Ks = u), (Uo = null));
          break;
        case "focusout":
          Uo = Ks = Pr = null;
          break;
        case "mousedown":
          Qs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Qs = !1), Ud(d, n, c);
          break;
        case "selectionchange":
          if (rv) break;
        case "keydown":
        case "keyup":
          Ud(d, n, c);
      }
      var j;
      if (nc)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Nr
          ? wh(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (yh &&
          n.locale !== "ko" &&
          (Nr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Nr && (j = vh())
            : ((Tn = c),
              (Zu = "value" in Tn ? Tn.value : Tn.textContent),
              (Nr = !0))),
        (w = La(u, P)),
        0 < w.length &&
          ((P = new Od(P, e, null, n, c)),
          d.push({ event: P, listeners: w }),
          j ? (P.data = j) : ((j = xh(n)), j !== null && (P.data = j)))),
        (j = Wg ? Kg(e, n) : Qg(e, n)) &&
          ((u = La(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Od("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = j)));
    }
    Oh(d, t);
  });
}
function oi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function La(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = qo(e, n)),
      i != null && r.unshift(oi(e, i, o)),
      (i = qo(e, t)),
      i != null && r.push(oi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Sr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vd(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = qo(n, i)), s != null && a.unshift(oi(n, s, l)))
        : o || ((s = qo(n, i)), s != null && a.push(oi(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var lv = /\r\n?/g,
  sv = /\u0000|\uFFFD/g;
function Wd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lv,
      `
`
    )
    .replace(sv, "");
}
function Vi(e, t, n) {
  if (((t = Wd(t)), Wd(e) !== t && n)) throw Error(L(425));
}
function Oa() {}
var Ys = null,
  Gs = null;
function Xs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var qs = typeof setTimeout == "function" ? setTimeout : void 0,
  uv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Kd = typeof Promise == "function" ? Promise : void 0,
  cv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Kd < "u"
      ? function (e) {
          return Kd.resolve(null).then(e).catch(dv);
        }
      : qs;
function dv(e) {
  setTimeout(function () {
    throw e;
  });
}
function ns(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ei(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ei(t);
}
function zn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Qd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var uo = Math.random().toString(36).slice(2),
  Vt = "__reactFiber$" + uo,
  ii = "__reactProps$" + uo,
  cn = "__reactContainer$" + uo,
  Js = "__reactEvents$" + uo,
  fv = "__reactListeners$" + uo,
  pv = "__reactHandles$" + uo;
function Zn(e) {
  var t = e[Vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[cn] || n[Vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Qd(e); e !== null; ) {
          if ((n = e[Vt])) return n;
          e = Qd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Si(e) {
  return (
    (e = e[Vt] || e[cn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Tr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function sl(e) {
  return e[ii] || null;
}
var Zs = [],
  _r = -1;
function Wn(e) {
  return { current: e };
}
function ye(e) {
  0 > _r || ((e.current = Zs[_r]), (Zs[_r] = null), _r--);
}
function he(e, t) {
  _r++, (Zs[_r] = e.current), (e.current = t);
}
var Un = {},
  Xe = Wn(Un),
  ut = Wn(!1),
  cr = Un;
function Yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ct(e) {
  return (e = e.childContextTypes), e != null;
}
function Da() {
  ye(ut), ye(Xe);
}
function Yd(e, t, n) {
  if (Xe.current !== Un) throw Error(L(168));
  he(Xe, t), he(ut, n);
}
function bh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, q0(e) || "Unknown", o));
  return Ce({}, n, r);
}
function ba(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Un),
    (cr = Xe.current),
    he(Xe, e),
    he(ut, ut.current),
    !0
  );
}
function Gd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = bh(e, t, cr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ye(ut),
      ye(Xe),
      he(Xe, e))
    : ye(ut),
    he(ut, n);
}
var tn = null,
  ul = !1,
  rs = !1;
function zh(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
function hv(e) {
  (ul = !0), zh(e);
}
function Kn() {
  if (!rs && tn !== null) {
    rs = !0;
    var e = 0,
      t = ue;
    try {
      var n = tn;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (tn = null), (ul = !1);
    } catch (o) {
      throw (tn !== null && (tn = tn.slice(e + 1)), ah(Gu, Kn), o);
    } finally {
      (ue = t), (rs = !1);
    }
  }
  return null;
}
var Lr = [],
  Or = 0,
  za = null,
  Ma = 0,
  Et = [],
  kt = 0,
  dr = null,
  rn = 1,
  on = "";
function qn(e, t) {
  (Lr[Or++] = Ma), (Lr[Or++] = za), (za = e), (Ma = t);
}
function Mh(e, t, n) {
  (Et[kt++] = rn), (Et[kt++] = on), (Et[kt++] = dr), (dr = e);
  var r = rn;
  e = on;
  var o = 32 - Mt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Mt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (rn = (1 << (32 - Mt(t) + o)) | (n << o) | r),
      (on = i + e);
  } else (rn = (1 << i) | (n << o) | r), (on = e);
}
function oc(e) {
  e.return !== null && (qn(e, 1), Mh(e, 1, 0));
}
function ic(e) {
  for (; e === za; )
    (za = Lr[--Or]), (Lr[Or] = null), (Ma = Lr[--Or]), (Lr[Or] = null);
  for (; e === dr; )
    (dr = Et[--kt]),
      (Et[kt] = null),
      (on = Et[--kt]),
      (Et[kt] = null),
      (rn = Et[--kt]),
      (Et[kt] = null);
}
var vt = null,
  mt = null,
  we = !1,
  zt = null;
function Ah(e, t) {
  var n = Ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (vt = e), (mt = zn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (vt = e), (mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = dr !== null ? { id: rn, overflow: on } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (vt = e),
            (mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function eu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tu(e) {
  if (we) {
    var t = mt;
    if (t) {
      var n = t;
      if (!Xd(e, t)) {
        if (eu(e)) throw Error(L(418));
        t = zn(n.nextSibling);
        var r = vt;
        t && Xd(e, t)
          ? Ah(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (we = !1), (vt = e));
      }
    } else {
      if (eu(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (we = !1), (vt = e);
    }
  }
}
function qd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  vt = e;
}
function Wi(e) {
  if (e !== vt) return !1;
  if (!we) return qd(e), (we = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xs(e.type, e.memoizedProps))),
    t && (t = mt))
  ) {
    if (eu(e)) throw (Fh(), Error(L(418)));
    for (; t; ) Ah(e, t), (t = zn(t.nextSibling));
  }
  if ((qd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              mt = zn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      mt = null;
    }
  } else mt = vt ? zn(e.stateNode.nextSibling) : null;
  return !0;
}
function Fh() {
  for (var e = mt; e; ) e = zn(e.nextSibling);
}
function Gr() {
  (mt = vt = null), (we = !1);
}
function ac(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
var mv = hn.ReactCurrentBatchConfig;
function Ot(e, t) {
  if (e && e.defaultProps) {
    (t = Ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Aa = Wn(null),
  Fa = null,
  Dr = null,
  lc = null;
function sc() {
  lc = Dr = Fa = null;
}
function uc(e) {
  var t = Aa.current;
  ye(Aa), (e._currentValue = t);
}
function nu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Hr(e, t) {
  (Fa = e),
    (lc = Dr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (lt = !0), (e.firstContext = null));
}
function Rt(e) {
  var t = e._currentValue;
  if (lc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Dr === null)) {
      if (Fa === null) throw Error(L(308));
      (Dr = e), (Fa.dependencies = { lanes: 0, firstContext: e });
    } else Dr = Dr.next = e;
  return t;
}
var er = null;
function cc(e) {
  er === null ? (er = [e]) : er.push(e);
}
function Ih(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), cc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    dn(e, r)
  );
}
function dn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Nn = !1;
function dc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $h(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function an(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), re & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      dn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), cc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    dn(e, n)
  );
}
function la(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xu(e, n);
  }
}
function Jd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ia(e, t, n, r) {
  var o = e.updateQueue;
  Nn = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = s = null), (l = i);
    do {
      var g = l.lane,
        x = l.eventTime;
      if ((r & g) === g) {
        c !== null &&
          (c = c.next =
            {
              eventTime: x,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((g = t), (x = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                d = y.call(x, d, g);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (g = typeof y == "function" ? y.call(x, d, g) : y),
                g == null)
              )
                break e;
              d = Ce({}, d, g);
              break e;
            case 2:
              Nn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [l]) : g.push(l));
      } else
        (x = {
          eventTime: x,
          lane: g,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = x), (s = d)) : (c = c.next = x),
          (a |= g);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (g = l),
          (l = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (pr |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Zd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var Uh = new Ip.Component().refs;
function ru(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      o = Fn(e),
      i = an(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Mn(e, i, o)),
      t !== null && (At(t, e, o, r), la(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      o = Fn(e),
      i = an(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Mn(e, i, o)),
      t !== null && (At(t, e, o, r), la(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = tt(),
      r = Fn(e),
      o = an(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Mn(e, o, r)),
      t !== null && (At(t, e, r, n), la(t, e, r));
  },
};
function ef(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ni(n, r) || !ni(o, i)
      : !0
  );
}
function Bh(e, t, n) {
  var r = !1,
    o = Un,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Rt(i))
      : ((o = ct(t) ? cr : Xe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Yr(e, o) : Un)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function tf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function ou(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Uh), dc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Rt(i))
    : ((i = ct(t) ? cr : Xe.current), (o.context = Yr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ru(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && cl.enqueueReplaceState(o, o.state, null),
      Ia(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ko(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            l === Uh && (l = o.refs = {}),
              a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Ki(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function nf(e) {
  var t = e._init;
  return t(e._payload);
}
function Hh(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function o(p, f) {
    return (p = In(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, f, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, f, m, E) {
    return f === null || f.tag !== 6
      ? ((f = cs(m, p.mode, E)), (f.return = p), f)
      : ((f = o(f, m)), (f.return = p), f);
  }
  function s(p, f, m, E) {
    var T = m.type;
    return T === jr
      ? c(p, f, m.props.children, E, m.key)
      : f !== null &&
        (f.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === jn &&
            nf(T) === f.type))
      ? ((E = o(f, m.props)), (E.ref = ko(p, f, m)), (E.return = p), E)
      : ((E = pa(m.type, m.key, m.props, null, p.mode, E)),
        (E.ref = ko(p, f, m)),
        (E.return = p),
        E);
  }
  function u(p, f, m, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = ds(m, p.mode, E)), (f.return = p), f)
      : ((f = o(f, m.children || [])), (f.return = p), f);
  }
  function c(p, f, m, E, T) {
    return f === null || f.tag !== 7
      ? ((f = ar(m, p.mode, E, T)), (f.return = p), f)
      : ((f = o(f, m)), (f.return = p), f);
  }
  function d(p, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = cs("" + f, p.mode, m)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case zi:
          return (
            (m = pa(f.type, f.key, f.props, null, p.mode, m)),
            (m.ref = ko(p, null, f)),
            (m.return = p),
            m
          );
        case Cr:
          return (f = ds(f, p.mode, m)), (f.return = p), f;
        case jn:
          var E = f._init;
          return d(p, E(f._payload), m);
      }
      if (Do(f) || yo(f))
        return (f = ar(f, p.mode, m, null)), (f.return = p), f;
      Ki(p, f);
    }
    return null;
  }
  function g(p, f, m, E) {
    var T = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return T !== null ? null : l(p, f, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case zi:
          return m.key === T ? s(p, f, m, E) : null;
        case Cr:
          return m.key === T ? u(p, f, m, E) : null;
        case jn:
          return (T = m._init), g(p, f, T(m._payload), E);
      }
      if (Do(m) || yo(m)) return T !== null ? null : c(p, f, m, E, null);
      Ki(p, m);
    }
    return null;
  }
  function x(p, f, m, E, T) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(m) || null), l(f, p, "" + E, T);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case zi:
          return (p = p.get(E.key === null ? m : E.key) || null), s(f, p, E, T);
        case Cr:
          return (p = p.get(E.key === null ? m : E.key) || null), u(f, p, E, T);
        case jn:
          var w = E._init;
          return x(p, f, m, w(E._payload), T);
      }
      if (Do(E) || yo(E)) return (p = p.get(m) || null), c(f, p, E, T, null);
      Ki(f, E);
    }
    return null;
  }
  function y(p, f, m, E) {
    for (
      var T = null, w = null, j = f, P = (f = 0), O = null;
      j !== null && P < m.length;
      P++
    ) {
      j.index > P ? ((O = j), (j = null)) : (O = j.sibling);
      var z = g(p, j, m[P], E);
      if (z === null) {
        j === null && (j = O);
        break;
      }
      e && j && z.alternate === null && t(p, j),
        (f = i(z, f, P)),
        w === null ? (T = z) : (w.sibling = z),
        (w = z),
        (j = O);
    }
    if (P === m.length) return n(p, j), we && qn(p, P), T;
    if (j === null) {
      for (; P < m.length; P++)
        (j = d(p, m[P], E)),
          j !== null &&
            ((f = i(j, f, P)), w === null ? (T = j) : (w.sibling = j), (w = j));
      return we && qn(p, P), T;
    }
    for (j = r(p, j); P < m.length; P++)
      (O = x(j, p, P, m[P], E)),
        O !== null &&
          (e && O.alternate !== null && j.delete(O.key === null ? P : O.key),
          (f = i(O, f, P)),
          w === null ? (T = O) : (w.sibling = O),
          (w = O));
    return (
      e &&
        j.forEach(function (H) {
          return t(p, H);
        }),
      we && qn(p, P),
      T
    );
  }
  function v(p, f, m, E) {
    var T = yo(m);
    if (typeof T != "function") throw Error(L(150));
    if (((m = T.call(m)), m == null)) throw Error(L(151));
    for (
      var w = (T = null), j = f, P = (f = 0), O = null, z = m.next();
      j !== null && !z.done;
      P++, z = m.next()
    ) {
      j.index > P ? ((O = j), (j = null)) : (O = j.sibling);
      var H = g(p, j, z.value, E);
      if (H === null) {
        j === null && (j = O);
        break;
      }
      e && j && H.alternate === null && t(p, j),
        (f = i(H, f, P)),
        w === null ? (T = H) : (w.sibling = H),
        (w = H),
        (j = O);
    }
    if (z.done) return n(p, j), we && qn(p, P), T;
    if (j === null) {
      for (; !z.done; P++, z = m.next())
        (z = d(p, z.value, E)),
          z !== null &&
            ((f = i(z, f, P)), w === null ? (T = z) : (w.sibling = z), (w = z));
      return we && qn(p, P), T;
    }
    for (j = r(p, j); !z.done; P++, z = m.next())
      (z = x(j, p, P, z.value, E)),
        z !== null &&
          (e && z.alternate !== null && j.delete(z.key === null ? P : z.key),
          (f = i(z, f, P)),
          w === null ? (T = z) : (w.sibling = z),
          (w = z));
    return (
      e &&
        j.forEach(function (ie) {
          return t(p, ie);
        }),
      we && qn(p, P),
      T
    );
  }
  function S(p, f, m, E) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === jr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case zi:
          e: {
            for (var T = m.key, w = f; w !== null; ) {
              if (w.key === T) {
                if (((T = m.type), T === jr)) {
                  if (w.tag === 7) {
                    n(p, w.sibling),
                      (f = o(w, m.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  w.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === jn &&
                    nf(T) === w.type)
                ) {
                  n(p, w.sibling),
                    (f = o(w, m.props)),
                    (f.ref = ko(p, w, m)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, w);
                break;
              } else t(p, w);
              w = w.sibling;
            }
            m.type === jr
              ? ((f = ar(m.props.children, p.mode, E, m.key)),
                (f.return = p),
                (p = f))
              : ((E = pa(m.type, m.key, m.props, null, p.mode, E)),
                (E.ref = ko(p, f, m)),
                (E.return = p),
                (p = E));
          }
          return a(p);
        case Cr:
          e: {
            for (w = m.key; f !== null; ) {
              if (f.key === w)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(p, f.sibling),
                    (f = o(f, m.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = ds(m, p.mode, E)), (f.return = p), (p = f);
          }
          return a(p);
        case jn:
          return (w = m._init), S(p, f, w(m._payload), E);
      }
      if (Do(m)) return y(p, f, m, E);
      if (yo(m)) return v(p, f, m, E);
      Ki(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = o(f, m)), (f.return = p), (p = f))
          : (n(p, f), (f = cs(m, p.mode, E)), (f.return = p), (p = f)),
        a(p))
      : n(p, f);
  }
  return S;
}
var Xr = Hh(!0),
  Vh = Hh(!1),
  Ei = {},
  Qt = Wn(Ei),
  ai = Wn(Ei),
  li = Wn(Ei);
function tr(e) {
  if (e === Ei) throw Error(L(174));
  return e;
}
function fc(e, t) {
  switch ((he(li, t), he(ai, e), he(Qt, Ei), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ms(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ms(t, e));
  }
  ye(Qt), he(Qt, t);
}
function qr() {
  ye(Qt), ye(ai), ye(li);
}
function Wh(e) {
  tr(li.current);
  var t = tr(Qt.current),
    n = Ms(t, e.type);
  t !== n && (he(ai, e), he(Qt, n));
}
function pc(e) {
  ai.current === e && (ye(Qt), ye(ai));
}
var Ee = Wn(0);
function $a(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var os = [];
function hc() {
  for (var e = 0; e < os.length; e++)
    os[e]._workInProgressVersionPrimary = null;
  os.length = 0;
}
var sa = hn.ReactCurrentDispatcher,
  is = hn.ReactCurrentBatchConfig,
  fr = 0,
  ke = null,
  be = null,
  Ie = null,
  Ua = !1,
  Bo = !1,
  si = 0,
  gv = 0;
function Qe() {
  throw Error(L(321));
}
function mc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!It(e[n], t[n])) return !1;
  return !0;
}
function gc(e, t, n, r, o, i) {
  if (
    ((fr = i),
    (ke = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (sa.current = e === null || e.memoizedState === null ? xv : Sv),
    (e = n(r, o)),
    Bo)
  ) {
    i = 0;
    do {
      if (((Bo = !1), (si = 0), 25 <= i)) throw Error(L(301));
      (i += 1),
        (Ie = be = null),
        (t.updateQueue = null),
        (sa.current = Ev),
        (e = n(r, o));
    } while (Bo);
  }
  if (
    ((sa.current = Ba),
    (t = be !== null && be.next !== null),
    (fr = 0),
    (Ie = be = ke = null),
    (Ua = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function vc() {
  var e = si !== 0;
  return (si = 0), e;
}
function Bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ie === null ? (ke.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie;
}
function Tt() {
  if (be === null) {
    var e = ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = be.next;
  var t = Ie === null ? ke.memoizedState : Ie.next;
  if (t !== null) (Ie = t), (be = e);
  else {
    if (e === null) throw Error(L(310));
    (be = e),
      (e = {
        memoizedState: be.memoizedState,
        baseState: be.baseState,
        baseQueue: be.baseQueue,
        queue: be.queue,
        next: null,
      }),
      Ie === null ? (ke.memoizedState = Ie = e) : (Ie = Ie.next = e);
  }
  return Ie;
}
function ui(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function as(e) {
  var t = Tt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = be,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((fr & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = d), (a = r)) : (s = s.next = d),
          (ke.lanes |= c),
          (pr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (a = r) : (s.next = l),
      It(r, t.memoizedState) || (lt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ke.lanes |= i), (pr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ls(e) {
  var t = Tt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    It(i, t.memoizedState) || (lt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Kh() {}
function Qh(e, t) {
  var n = ke,
    r = Tt(),
    o = t(),
    i = !It(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (lt = !0)),
    (r = r.queue),
    yc(Xh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ie !== null && Ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ci(9, Gh.bind(null, n, r, o, t), void 0, null),
      Ue === null)
    )
      throw Error(L(349));
    fr & 30 || Yh(n, t, o);
  }
  return o;
}
function Yh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ke.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), qh(t) && Jh(e);
}
function Xh(e, t, n) {
  return n(function () {
    qh(t) && Jh(e);
  });
}
function qh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !It(e, n);
  } catch {
    return !0;
  }
}
function Jh(e) {
  var t = dn(e, 1);
  t !== null && At(t, e, 1, -1);
}
function rf(e) {
  var t = Bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ui,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = wv.bind(null, ke, e)),
    [t.memoizedState, e]
  );
}
function ci(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ke.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zh() {
  return Tt().memoizedState;
}
function ua(e, t, n, r) {
  var o = Bt();
  (ke.flags |= e),
    (o.memoizedState = ci(1 | t, n, void 0, r === void 0 ? null : r));
}
function dl(e, t, n, r) {
  var o = Tt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (be !== null) {
    var a = be.memoizedState;
    if (((i = a.destroy), r !== null && mc(r, a.deps))) {
      o.memoizedState = ci(t, n, i, r);
      return;
    }
  }
  (ke.flags |= e), (o.memoizedState = ci(1 | t, n, i, r));
}
function of(e, t) {
  return ua(8390656, 8, e, t);
}
function yc(e, t) {
  return dl(2048, 8, e, t);
}
function em(e, t) {
  return dl(4, 2, e, t);
}
function tm(e, t) {
  return dl(4, 4, e, t);
}
function nm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function rm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), dl(4, 4, nm.bind(null, t, e), n)
  );
}
function wc() {}
function om(e, t) {
  var n = Tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function im(e, t) {
  var n = Tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function am(e, t, n) {
  return fr & 21
    ? (It(n, t) || ((n = uh()), (ke.lanes |= n), (pr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = n));
}
function vv(e, t) {
  var n = ue;
  (ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = is.transition;
  is.transition = {};
  try {
    e(!1), t();
  } finally {
    (ue = n), (is.transition = r);
  }
}
function lm() {
  return Tt().memoizedState;
}
function yv(e, t, n) {
  var r = Fn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sm(e))
  )
    um(t, n);
  else if (((n = Ih(e, t, n, r)), n !== null)) {
    var o = tt();
    At(n, e, r, o), cm(n, t, r);
  }
}
function wv(e, t, n) {
  var r = Fn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sm(e)) um(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), It(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), cc(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ih(e, t, o, r)),
      n !== null && ((o = tt()), At(n, e, r, o), cm(n, t, r));
  }
}
function sm(e) {
  var t = e.alternate;
  return e === ke || (t !== null && t === ke);
}
function um(e, t) {
  Bo = Ua = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function cm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xu(e, n);
  }
}
var Ba = {
    readContext: Rt,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useInsertionEffect: Qe,
    useLayoutEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useMutableSource: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    unstable_isNewReconciler: !1,
  },
  xv = {
    readContext: Rt,
    useCallback: function (e, t) {
      return (Bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Rt,
    useEffect: of,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ua(4194308, 4, nm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ua(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ua(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Bt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = yv.bind(null, ke, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: rf,
    useDebugValue: wc,
    useDeferredValue: function (e) {
      return (Bt().memoizedState = e);
    },
    useTransition: function () {
      var e = rf(!1),
        t = e[0];
      return (e = vv.bind(null, e[1])), (Bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ke,
        o = Bt();
      if (we) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Ue === null)) throw Error(L(349));
        fr & 30 || Yh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        of(Xh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ci(9, Gh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Bt(),
        t = Ue.identifierPrefix;
      if (we) {
        var n = on,
          r = rn;
        (n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = si++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = gv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Sv = {
    readContext: Rt,
    useCallback: om,
    useContext: Rt,
    useEffect: yc,
    useImperativeHandle: rm,
    useInsertionEffect: em,
    useLayoutEffect: tm,
    useMemo: im,
    useReducer: as,
    useRef: Zh,
    useState: function () {
      return as(ui);
    },
    useDebugValue: wc,
    useDeferredValue: function (e) {
      var t = Tt();
      return am(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = as(ui)[0],
        t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Kh,
    useSyncExternalStore: Qh,
    useId: lm,
    unstable_isNewReconciler: !1,
  },
  Ev = {
    readContext: Rt,
    useCallback: om,
    useContext: Rt,
    useEffect: yc,
    useImperativeHandle: rm,
    useInsertionEffect: em,
    useLayoutEffect: tm,
    useMemo: im,
    useReducer: ls,
    useRef: Zh,
    useState: function () {
      return ls(ui);
    },
    useDebugValue: wc,
    useDeferredValue: function (e) {
      var t = Tt();
      return be === null ? (t.memoizedState = e) : am(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = ls(ui)[0],
        t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: Kh,
    useSyncExternalStore: Qh,
    useId: lm,
    unstable_isNewReconciler: !1,
  };
function Jr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += X0(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ss(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function iu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var kv = typeof WeakMap == "function" ? WeakMap : Map;
function dm(e, t, n) {
  (n = an(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Va || ((Va = !0), (mu = r)), iu(e, t);
    }),
    n
  );
}
function fm(e, t, n) {
  (n = an(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        iu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        iu(e, t),
          typeof r != "function" &&
            (An === null ? (An = new Set([this])) : An.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function af(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Av.bind(null, e, t, n)), t.then(e, e));
}
function lf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = an(-1, 1)), (t.tag = 2), Mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Cv = hn.ReactCurrentOwner,
  lt = !1;
function Ze(e, t, n, r) {
  t.child = e === null ? Vh(t, null, n, r) : Xr(t, e.child, n, r);
}
function uf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Hr(t, o),
    (r = gc(e, t, n, r, i, o)),
    (n = vc()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (we && n && oc(t), (t.flags |= 1), Ze(e, t, r, o), t.child)
  );
}
function cf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Pc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), pm(e, t, i, r, o))
      : ((e = pa(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ni), n(a, r) && e.ref === t.ref)
    )
      return fn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = In(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pm(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ni(i, r) && e.ref === t.ref)
      if (((lt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (lt = !0);
      else return (t.lanes = e.lanes), fn(e, t, o);
  }
  return au(e, t, n, r, o);
}
function hm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        he(zr, ht),
        (ht |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          he(zr, ht),
          (ht |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        he(zr, ht),
        (ht |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      he(zr, ht),
      (ht |= r);
  return Ze(e, t, o, n), t.child;
}
function mm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function au(e, t, n, r, o) {
  var i = ct(n) ? cr : Xe.current;
  return (
    (i = Yr(t, i)),
    Hr(t, o),
    (n = gc(e, t, n, r, i, o)),
    (r = vc()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (we && r && oc(t), (t.flags |= 1), Ze(e, t, n, o), t.child)
  );
}
function df(e, t, n, r, o) {
  if (ct(n)) {
    var i = !0;
    ba(t);
  } else i = !1;
  if ((Hr(t, o), t.stateNode === null))
    ca(e, t), Bh(t, n, r), ou(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Rt(u))
      : ((u = ct(n) ? cr : Xe.current), (u = Yr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && tf(t, a, r, u)),
      (Nn = !1);
    var g = t.memoizedState;
    (a.state = g),
      Ia(t, r, a, o),
      (s = t.memoizedState),
      l !== r || g !== s || ut.current || Nn
        ? (typeof c == "function" && (ru(t, n, c, r), (s = t.memoizedState)),
          (l = Nn || ef(t, n, l, r, g, s, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      $h(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ot(t.type, l)),
      (a.props = u),
      (d = t.pendingProps),
      (g = a.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Rt(s))
        : ((s = ct(n) ? cr : Xe.current), (s = Yr(t, s)));
    var x = n.getDerivedStateFromProps;
    (c =
      typeof x == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== d || g !== s) && tf(t, a, r, s)),
      (Nn = !1),
      (g = t.memoizedState),
      (a.state = g),
      Ia(t, r, a, o);
    var y = t.memoizedState;
    l !== d || g !== y || ut.current || Nn
      ? (typeof x == "function" && (ru(t, n, x, r), (y = t.memoizedState)),
        (u = Nn || ef(t, n, u, r, g, y, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return lu(e, t, n, r, i, o);
}
function lu(e, t, n, r, o, i) {
  mm(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Gd(t, n, !1), fn(e, t, i);
  (r = t.stateNode), (Cv.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Xr(t, e.child, null, i)), (t.child = Xr(t, null, l, i)))
      : Ze(e, t, l, i),
    (t.memoizedState = r.state),
    o && Gd(t, n, !0),
    t.child
  );
}
function gm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Yd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Yd(e, t.context, !1),
    fc(e, t.containerInfo);
}
function ff(e, t, n, r, o) {
  return Gr(), ac(o), (t.flags |= 256), Ze(e, t, n, r), t.child;
}
var su = { dehydrated: null, treeContext: null, retryLane: 0 };
function uu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vm(e, t, n) {
  var r = t.pendingProps,
    o = Ee.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    he(Ee, o & 1),
    e === null)
  )
    return (
      tu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = hl(a, r, 0, null)),
              (e = ar(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = uu(n)),
              (t.memoizedState = su),
              e)
            : xc(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return jv(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = In(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = In(l, i)) : ((i = ar(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? uu(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = su),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = In(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function xc(e, t) {
  return (
    (t = hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qi(e, t, n, r) {
  return (
    r !== null && ac(r),
    Xr(t, e.child, null, n),
    (e = xc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jv(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ss(Error(L(422)))), Qi(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = hl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = ar(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Xr(t, e.child, null, a),
        (t.child.memoizedState = uu(a)),
        (t.memoizedState = su),
        i);
  if (!(t.mode & 1)) return Qi(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(L(419))), (r = ss(i, r, void 0)), Qi(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), lt || l)) {
    if (((r = Ue), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), dn(e, o), At(r, e, o, -1));
    }
    return Nc(), (r = ss(Error(L(421)))), Qi(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Fv.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (mt = zn(o.nextSibling)),
      (vt = t),
      (we = !0),
      (zt = null),
      e !== null &&
        ((Et[kt++] = rn),
        (Et[kt++] = on),
        (Et[kt++] = dr),
        (rn = e.id),
        (on = e.overflow),
        (dr = t)),
      (t = xc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function pf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), nu(e.return, t, n);
}
function us(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function ym(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ze(e, t, r.children, n), (r = Ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && pf(e, n, t);
        else if (e.tag === 19) pf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((he(Ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && $a(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          us(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && $a(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        us(t, !0, n, null, i);
        break;
      case "together":
        us(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ca(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function fn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = In(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Nv(e, t, n) {
  switch (t.tag) {
    case 3:
      gm(t), Gr();
      break;
    case 5:
      Wh(t);
      break;
    case 1:
      ct(t.type) && ba(t);
      break;
    case 4:
      fc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      he(Aa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (he(Ee, Ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? vm(e, t, n)
          : (he(Ee, Ee.current & 1),
            (e = fn(e, t, n)),
            e !== null ? e.sibling : null);
      he(Ee, Ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ym(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        he(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hm(e, t, n);
  }
  return fn(e, t, n);
}
var wm, cu, xm, Sm;
wm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
cu = function () {};
xm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), tr(Qt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Os(e, o)), (r = Os(e, r)), (i = []);
        break;
      case "select":
        (o = Ce({}, o, { value: void 0 })),
          (r = Ce({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = zs(e, o)), (r = zs(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Oa);
    }
    As(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Go.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Go.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && ge("scroll", e),
                  i || l === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Sm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Co(e, t) {
  if (!we)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Pv(e, t, n) {
  var r = t.pendingProps;
  switch ((ic(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ye(t), null;
    case 1:
      return ct(t.type) && Da(), Ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        qr(),
        ye(ut),
        ye(Xe),
        hc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), zt !== null && (yu(zt), (zt = null)))),
        cu(e, t),
        Ye(t),
        null
      );
    case 5:
      pc(t);
      var o = tr(li.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        xm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Ye(t), null;
        }
        if (((e = tr(Qt.current)), Wi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Vt] = t), (r[ii] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ge("cancel", r), ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < zo.length; o++) ge(zo[o], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ge("error", r), ge("load", r);
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              Sd(r, i), ge("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ge("invalid", r);
              break;
            case "textarea":
              kd(r, i), ge("invalid", r);
          }
          As(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Go.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  ge("scroll", r);
            }
          switch (n) {
            case "input":
              Mi(r), Ed(r, i, !0);
              break;
            case "textarea":
              Mi(r), Cd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Oa);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Yp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Vt] = t),
            (e[ii] = r),
            wm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Fs(n, r)), n)) {
              case "dialog":
                ge("cancel", e), ge("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < zo.length; o++) ge(zo[o], e);
                o = r;
                break;
              case "source":
                ge("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", e), ge("load", e), (o = r);
                break;
              case "details":
                ge("toggle", e), (o = r);
                break;
              case "input":
                Sd(e, r), (o = Os(e, r)), ge("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ce({}, r, { value: void 0 })),
                  ge("invalid", e);
                break;
              case "textarea":
                kd(e, r), (o = zs(e, r)), ge("invalid", e);
                break;
              default:
                o = r;
            }
            As(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === "style"
                  ? qp(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Gp(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Xo(e, s)
                    : typeof s == "number" && Xo(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Go.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && ge("scroll", e)
                      : s != null && Vu(e, i, s, a));
              }
            switch (n) {
              case "input":
                Mi(e), Ed(e, r, !1);
                break;
              case "textarea":
                Mi(e), Cd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $n(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ir(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ir(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Oa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ye(t), null;
    case 6:
      if (e && t.stateNode != null) Sm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = tr(li.current)), tr(Qt.current), Wi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Vt] = t),
            (i = r.nodeValue !== n) && ((e = vt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Vi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Vi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Vt] = t),
            (t.stateNode = r);
      }
      return Ye(t), null;
    case 13:
      if (
        (ye(Ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (we && mt !== null && t.mode & 1 && !(t.flags & 128))
          Fh(), Gr(), (t.flags |= 98560), (i = !1);
        else if (((i = Wi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(L(317));
            i[Vt] = t;
          } else
            Gr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ye(t), (i = !1);
        } else zt !== null && (yu(zt), (zt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ee.current & 1 ? ze === 0 && (ze = 3) : Nc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ye(t),
          null);
    case 4:
      return (
        qr(), cu(e, t), e === null && ri(t.stateNode.containerInfo), Ye(t), null
      );
    case 10:
      return uc(t.type._context), Ye(t), null;
    case 17:
      return ct(t.type) && Da(), Ye(t), null;
    case 19:
      if ((ye(Ee), (i = t.memoizedState), i === null)) return Ye(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Co(i, !1);
        else {
          if (ze !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = $a(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Co(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return he(Ee, (Ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Re() > Zr &&
            ((t.flags |= 128), (r = !0), Co(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $a(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Co(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !we)
            )
              return Ye(t), null;
          } else
            2 * Re() - i.renderingStartTime > Zr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Co(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Re()),
          (t.sibling = null),
          (n = Ee.current),
          he(Ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ye(t), null);
    case 22:
    case 23:
      return (
        jc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ht & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Rv(e, t) {
  switch ((ic(t), t.tag)) {
    case 1:
      return (
        ct(t.type) && Da(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        qr(),
        ye(ut),
        ye(Xe),
        hc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return pc(t), null;
    case 13:
      if (
        (ye(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Gr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ye(Ee), null;
    case 4:
      return qr(), null;
    case 10:
      return uc(t.type._context), null;
    case 22:
    case 23:
      return jc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yi = !1,
  Ge = !1,
  Tv = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function br(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ne(e, t, r);
      }
    else n.current = null;
}
function du(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var hf = !1;
function _v(e, t) {
  if (((Ys = Ta), (e = jh()), rc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            g = null;
          t: for (;;) {
            for (
              var x;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (s = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (x = d.firstChild) !== null;

            )
              (g = d), (d = x);
            for (;;) {
              if (d === e) break t;
              if (
                (g === n && ++u === o && (l = a),
                g === i && ++c === r && (s = a),
                (x = d.nextSibling) !== null)
              )
                break;
              (d = g), (g = d.parentNode);
            }
            d = x;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gs = { focusedElem: e, selectionRange: n }, Ta = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    S = y.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ot(t.type, v),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (E) {
          Ne(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = hf), (hf = !1), y;
}
function Ho(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && du(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function fl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function fu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Em(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Em(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Vt], delete t[ii], delete t[Js], delete t[fv], delete t[pv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function km(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || km(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function pu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Oa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pu(e, t, n), e = e.sibling; e !== null; ) pu(e, t, n), (e = e.sibling);
}
function hu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hu(e, t, n), e = e.sibling; e !== null; ) hu(e, t, n), (e = e.sibling);
}
var He = null,
  Dt = !1;
function Sn(e, t, n) {
  for (n = n.child; n !== null; ) Cm(e, t, n), (n = n.sibling);
}
function Cm(e, t, n) {
  if (Kt && typeof Kt.onCommitFiberUnmount == "function")
    try {
      Kt.onCommitFiberUnmount(ol, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ge || br(n, t);
    case 6:
      var r = He,
        o = Dt;
      (He = null),
        Sn(e, t, n),
        (He = r),
        (Dt = o),
        He !== null &&
          (Dt
            ? ((e = He),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : He.removeChild(n.stateNode));
      break;
    case 18:
      He !== null &&
        (Dt
          ? ((e = He),
            (n = n.stateNode),
            e.nodeType === 8
              ? ns(e.parentNode, n)
              : e.nodeType === 1 && ns(e, n),
            ei(e))
          : ns(He, n.stateNode));
      break;
    case 4:
      (r = He),
        (o = Dt),
        (He = n.stateNode.containerInfo),
        (Dt = !0),
        Sn(e, t, n),
        (He = r),
        (Dt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && du(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Sn(e, t, n);
      break;
    case 1:
      if (
        !Ge &&
        (br(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ne(n, t, l);
        }
      Sn(e, t, n);
      break;
    case 21:
      Sn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ge = (r = Ge) || n.memoizedState !== null), Sn(e, t, n), (Ge = r))
        : Sn(e, t, n);
      break;
    default:
      Sn(e, t, n);
  }
}
function gf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Tv()),
      t.forEach(function (r) {
        var o = Iv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (He = l.stateNode), (Dt = !1);
              break e;
            case 3:
              (He = l.stateNode.containerInfo), (Dt = !0);
              break e;
            case 4:
              (He = l.stateNode.containerInfo), (Dt = !0);
              break e;
          }
          l = l.return;
        }
        if (He === null) throw Error(L(160));
        Cm(i, a, o), (He = null), (Dt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) jm(t, e), (t = t.sibling);
}
function jm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Lt(t, e), Ut(e), r & 4)) {
        try {
          Ho(3, e, e.return), fl(3, e);
        } catch (v) {
          Ne(e, e.return, v);
        }
        try {
          Ho(5, e, e.return);
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      break;
    case 1:
      Lt(t, e), Ut(e), r & 512 && n !== null && br(n, n.return);
      break;
    case 5:
      if (
        (Lt(t, e),
        Ut(e),
        r & 512 && n !== null && br(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Xo(o, "");
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Kp(o, i),
              Fs(l, a);
            var u = Fs(l, i);
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                d = s[a + 1];
              c === "style"
                ? qp(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Gp(o, d)
                : c === "children"
                ? Xo(o, d)
                : Vu(o, c, d, u);
            }
            switch (l) {
              case "input":
                Ds(o, i);
                break;
              case "textarea":
                Qp(o, i);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Ir(o, !!i.multiple, x, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ir(o, !!i.multiple, i.defaultValue, !0)
                      : Ir(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ii] = i;
          } catch (v) {
            Ne(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Lt(t, e), Ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Lt(t, e), Ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ei(t.containerInfo);
        } catch (v) {
          Ne(e, e.return, v);
        }
      break;
    case 4:
      Lt(t, e), Ut(e);
      break;
    case 13:
      Lt(t, e),
        Ut(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (kc = Re())),
        r & 4 && gf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ge = (u = Ge) || c), Lt(t, e), (Ge = u)) : Lt(t, e),
        Ut(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (d = M = c; M !== null; ) {
              switch (((g = M), (x = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ho(4, g, g.return);
                  break;
                case 1:
                  br(g, g.return);
                  var y = g.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      Ne(r, n, v);
                    }
                  }
                  break;
                case 5:
                  br(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    yf(d);
                    continue;
                  }
              }
              x !== null ? ((x.return = g), (M = x)) : yf(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (s = d.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = Xp("display", a)));
              } catch (v) {
                Ne(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                Ne(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Lt(t, e), Ut(e), r & 4 && gf(e);
      break;
    case 21:
      break;
    default:
      Lt(t, e), Ut(e);
  }
}
function Ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (km(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Xo(o, ""), (r.flags &= -33));
          var i = mf(e);
          hu(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = mf(e);
          pu(e, l, a);
          break;
        default:
          throw Error(L(161));
      }
    } catch (s) {
      Ne(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Lv(e, t, n) {
  (M = e), Nm(e);
}
function Nm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Yi;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || Ge;
        l = Yi;
        var u = Ge;
        if (((Yi = a), (Ge = s) && !u))
          for (M = o; M !== null; )
            (a = M),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? wf(o)
                : s !== null
                ? ((s.return = a), (M = s))
                : wf(o);
        for (; i !== null; ) (M = i), Nm(i), (i = i.sibling);
        (M = o), (Yi = l), (Ge = u);
      }
      vf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (M = i)) : vf(e);
  }
}
function vf(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || fl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ot(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Zd(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zd(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ei(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Ge || (t.flags & 512 && fu(t));
      } catch (g) {
        Ne(t, t.return, g);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function yf(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function wf(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fl(4, t);
          } catch (s) {
            Ne(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Ne(t, o, s);
            }
          }
          var i = t.return;
          try {
            fu(t);
          } catch (s) {
            Ne(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            fu(t);
          } catch (s) {
            Ne(t, a, s);
          }
      }
    } catch (s) {
      Ne(t, t.return, s);
    }
    if (t === e) {
      M = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (M = l);
      break;
    }
    M = t.return;
  }
}
var Ov = Math.ceil,
  Ha = hn.ReactCurrentDispatcher,
  Sc = hn.ReactCurrentOwner,
  jt = hn.ReactCurrentBatchConfig,
  re = 0,
  Ue = null,
  Le = null,
  Ve = 0,
  ht = 0,
  zr = Wn(0),
  ze = 0,
  di = null,
  pr = 0,
  pl = 0,
  Ec = 0,
  Vo = null,
  at = null,
  kc = 0,
  Zr = 1 / 0,
  Zt = null,
  Va = !1,
  mu = null,
  An = null,
  Gi = !1,
  _n = null,
  Wa = 0,
  Wo = 0,
  gu = null,
  da = -1,
  fa = 0;
function tt() {
  return re & 6 ? Re() : da !== -1 ? da : (da = Re());
}
function Fn(e) {
  return e.mode & 1
    ? re & 2 && Ve !== 0
      ? Ve & -Ve
      : mv.transition !== null
      ? (fa === 0 && (fa = uh()), fa)
      : ((e = ue),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gh(e.type))),
        e)
    : 1;
}
function At(e, t, n, r) {
  if (50 < Wo) throw ((Wo = 0), (gu = null), Error(L(185)));
  wi(e, n, r),
    (!(re & 2) || e !== Ue) &&
      (e === Ue && (!(re & 2) && (pl |= n), ze === 4 && Rn(e, Ve)),
      dt(e, r),
      n === 1 && re === 0 && !(t.mode & 1) && ((Zr = Re() + 500), ul && Kn()));
}
function dt(e, t) {
  var n = e.callbackNode;
  mg(e, t);
  var r = Ra(e, e === Ue ? Ve : 0);
  if (r === 0)
    n !== null && Pd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Pd(n), t === 1))
      e.tag === 0 ? hv(xf.bind(null, e)) : zh(xf.bind(null, e)),
        cv(function () {
          !(re & 6) && Kn();
        }),
        (n = null);
    else {
      switch (ch(r)) {
        case 1:
          n = Gu;
          break;
        case 4:
          n = lh;
          break;
        case 16:
          n = Pa;
          break;
        case 536870912:
          n = sh;
          break;
        default:
          n = Pa;
      }
      n = bm(n, Pm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pm(e, t) {
  if (((da = -1), (fa = 0), re & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (Vr() && e.callbackNode !== n) return null;
  var r = Ra(e, e === Ue ? Ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ka(e, r);
  else {
    t = r;
    var o = re;
    re |= 2;
    var i = Tm();
    (Ue !== e || Ve !== t) && ((Zt = null), (Zr = Re() + 500), ir(e, t));
    do
      try {
        zv();
        break;
      } catch (l) {
        Rm(e, l);
      }
    while (!0);
    sc(),
      (Ha.current = i),
      (re = o),
      Le !== null ? (t = 0) : ((Ue = null), (Ve = 0), (t = ze));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Hs(e)), o !== 0 && ((r = o), (t = vu(e, o)))), t === 1)
    )
      throw ((n = di), ir(e, 0), Rn(e, r), dt(e, Re()), n);
    if (t === 6) Rn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Dv(o) &&
          ((t = Ka(e, r)),
          t === 2 && ((i = Hs(e)), i !== 0 && ((r = i), (t = vu(e, i)))),
          t === 1))
      )
        throw ((n = di), ir(e, 0), Rn(e, r), dt(e, Re()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Jn(e, at, Zt);
          break;
        case 3:
          if (
            (Rn(e, r), (r & 130023424) === r && ((t = kc + 500 - Re()), 10 < t))
          ) {
            if (Ra(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              tt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = qs(Jn.bind(null, e, at, Zt), t);
            break;
          }
          Jn(e, at, Zt);
          break;
        case 4:
          if ((Rn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Mt(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Re() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ov(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qs(Jn.bind(null, e, at, Zt), r);
            break;
          }
          Jn(e, at, Zt);
          break;
        case 5:
          Jn(e, at, Zt);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return dt(e, Re()), e.callbackNode === n ? Pm.bind(null, e) : null;
}
function vu(e, t) {
  var n = Vo;
  return (
    e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256),
    (e = Ka(e, t)),
    e !== 2 && ((t = at), (at = n), t !== null && yu(t)),
    e
  );
}
function yu(e) {
  at === null ? (at = e) : at.push.apply(at, e);
}
function Dv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!It(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Rn(e, t) {
  for (
    t &= ~Ec,
      t &= ~pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xf(e) {
  if (re & 6) throw Error(L(327));
  Vr();
  var t = Ra(e, 0);
  if (!(t & 1)) return dt(e, Re()), null;
  var n = Ka(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hs(e);
    r !== 0 && ((t = r), (n = vu(e, r)));
  }
  if (n === 1) throw ((n = di), ir(e, 0), Rn(e, t), dt(e, Re()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jn(e, at, Zt),
    dt(e, Re()),
    null
  );
}
function Cc(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    (re = n), re === 0 && ((Zr = Re() + 500), ul && Kn());
  }
}
function hr(e) {
  _n !== null && _n.tag === 0 && !(re & 6) && Vr();
  var t = re;
  re |= 1;
  var n = jt.transition,
    r = ue;
  try {
    if (((jt.transition = null), (ue = 1), e)) return e();
  } finally {
    (ue = r), (jt.transition = n), (re = t), !(re & 6) && Kn();
  }
}
function jc() {
  (ht = zr.current), ye(zr);
}
function ir(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), uv(n)), Le !== null))
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch ((ic(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Da();
          break;
        case 3:
          qr(), ye(ut), ye(Xe), hc();
          break;
        case 5:
          pc(r);
          break;
        case 4:
          qr();
          break;
        case 13:
          ye(Ee);
          break;
        case 19:
          ye(Ee);
          break;
        case 10:
          uc(r.type._context);
          break;
        case 22:
        case 23:
          jc();
      }
      n = n.return;
    }
  if (
    ((Ue = e),
    (Le = e = In(e.current, null)),
    (Ve = ht = t),
    (ze = 0),
    (di = null),
    (Ec = pl = pr = 0),
    (at = Vo = null),
    er !== null)
  ) {
    for (t = 0; t < er.length; t++)
      if (((n = er[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    er = null;
  }
  return e;
}
function Rm(e, t) {
  do {
    var n = Le;
    try {
      if ((sc(), (sa.current = Ba), Ua)) {
        for (var r = ke.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ua = !1;
      }
      if (
        ((fr = 0),
        (Ie = be = ke = null),
        (Bo = !1),
        (si = 0),
        (Sc.current = null),
        n === null || n.return === null)
      ) {
        (ze = 1), (di = t), (Le = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = Ve),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var g = c.alternate;
            g
              ? ((c.updateQueue = g.updateQueue),
                (c.memoizedState = g.memoizedState),
                (c.lanes = g.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var x = lf(a);
          if (x !== null) {
            (x.flags &= -257),
              sf(x, a, l, i, t),
              x.mode & 1 && af(i, u, t),
              (t = x),
              (s = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              af(i, u, t), Nc();
              break e;
            }
            s = Error(L(426));
          }
        } else if (we && l.mode & 1) {
          var S = lf(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              sf(S, a, l, i, t),
              ac(Jr(s, l));
            break e;
          }
        }
        (i = s = Jr(s, l)),
          ze !== 4 && (ze = 2),
          Vo === null ? (Vo = [i]) : Vo.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = dm(i, s, t);
              Jd(i, p);
              break e;
            case 1:
              l = s;
              var f = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (An === null || !An.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = fm(i, l, t);
                Jd(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Lm(n);
    } catch (T) {
      (t = T), Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Tm() {
  var e = Ha.current;
  return (Ha.current = Ba), e === null ? Ba : e;
}
function Nc() {
  (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
    Ue === null || (!(pr & 268435455) && !(pl & 268435455)) || Rn(Ue, Ve);
}
function Ka(e, t) {
  var n = re;
  re |= 2;
  var r = Tm();
  (Ue !== e || Ve !== t) && ((Zt = null), ir(e, t));
  do
    try {
      bv();
      break;
    } catch (o) {
      Rm(e, o);
    }
  while (!0);
  if ((sc(), (re = n), (Ha.current = r), Le !== null)) throw Error(L(261));
  return (Ue = null), (Ve = 0), ze;
}
function bv() {
  for (; Le !== null; ) _m(Le);
}
function zv() {
  for (; Le !== null && !ag(); ) _m(Le);
}
function _m(e) {
  var t = Dm(e.alternate, e, ht);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lm(e) : (Le = t),
    (Sc.current = null);
}
function Lm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Rv(n, t)), n !== null)) {
        (n.flags &= 32767), (Le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ze = 6), (Le = null);
        return;
      }
    } else if (((n = Pv(n, t, ht)), n !== null)) {
      Le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  ze === 0 && (ze = 5);
}
function Jn(e, t, n) {
  var r = ue,
    o = jt.transition;
  try {
    (jt.transition = null), (ue = 1), Mv(e, t, n, r);
  } finally {
    (jt.transition = o), (ue = r);
  }
  return null;
}
function Mv(e, t, n, r) {
  do Vr();
  while (_n !== null);
  if (re & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (gg(e, i),
    e === Ue && ((Le = Ue = null), (Ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Gi ||
      ((Gi = !0),
      bm(Pa, function () {
        return Vr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = jt.transition), (jt.transition = null);
    var a = ue;
    ue = 1;
    var l = re;
    (re |= 4),
      (Sc.current = null),
      _v(e, n),
      jm(n, e),
      nv(Gs),
      (Ta = !!Ys),
      (Gs = Ys = null),
      (e.current = n),
      Lv(n),
      lg(),
      (re = l),
      (ue = a),
      (jt.transition = i);
  } else e.current = n;
  if (
    (Gi && ((Gi = !1), (_n = e), (Wa = o)),
    (i = e.pendingLanes),
    i === 0 && (An = null),
    cg(n.stateNode),
    dt(e, Re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Va) throw ((Va = !1), (e = mu), (mu = null), e);
  return (
    Wa & 1 && e.tag !== 0 && Vr(),
    (i = e.pendingLanes),
    i & 1 ? (e === gu ? Wo++ : ((Wo = 0), (gu = e))) : (Wo = 0),
    Kn(),
    null
  );
}
function Vr() {
  if (_n !== null) {
    var e = ch(Wa),
      t = jt.transition,
      n = ue;
    try {
      if (((jt.transition = null), (ue = 16 > e ? 16 : e), _n === null))
        var r = !1;
      else {
        if (((e = _n), (_n = null), (Wa = 0), re & 6)) throw Error(L(331));
        var o = re;
        for (re |= 4, M = e.current; M !== null; ) {
          var i = M,
            a = i.child;
          if (M.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ho(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (M = d);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var g = c.sibling,
                        x = c.return;
                      if ((Em(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = x), (M = g);
                        break;
                      }
                      M = x;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var S = v.sibling;
                    (v.sibling = null), (v = S);
                  } while (v !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (M = a);
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ho(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (M = p);
                break e;
              }
              M = i.return;
            }
        }
        var f = e.current;
        for (M = f; M !== null; ) {
          a = M;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (M = m);
          else
            e: for (a = f; M !== null; ) {
              if (((l = M), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, l);
                  }
                } catch (T) {
                  Ne(l, l.return, T);
                }
              if (l === a) {
                M = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (M = E);
                break e;
              }
              M = l.return;
            }
        }
        if (
          ((re = o), Kn(), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        )
          try {
            Kt.onPostCommitFiberRoot(ol, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ue = n), (jt.transition = t);
    }
  }
  return !1;
}
function Sf(e, t, n) {
  (t = Jr(n, t)),
    (t = dm(e, t, 1)),
    (e = Mn(e, t, 1)),
    (t = tt()),
    e !== null && (wi(e, 1, t), dt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3) Sf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (An === null || !An.has(r)))
        ) {
          (e = Jr(n, e)),
            (e = fm(t, e, 1)),
            (t = Mn(t, e, 1)),
            (e = tt()),
            t !== null && (wi(t, 1, e), dt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Av(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ue === e &&
      (Ve & n) === n &&
      (ze === 4 || (ze === 3 && (Ve & 130023424) === Ve && 500 > Re() - kc)
        ? ir(e, 0)
        : (Ec |= n)),
    dt(e, t);
}
function Om(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ii), (Ii <<= 1), !(Ii & 130023424) && (Ii = 4194304))
      : (t = 1));
  var n = tt();
  (e = dn(e, t)), e !== null && (wi(e, t, n), dt(e, n));
}
function Fv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Om(e, n);
}
function Iv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Om(e, n);
}
var Dm;
Dm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ut.current) lt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (lt = !1), Nv(e, t, n);
      lt = !!(e.flags & 131072);
    }
  else (lt = !1), we && t.flags & 1048576 && Mh(t, Ma, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ca(e, t), (e = t.pendingProps);
      var o = Yr(t, Xe.current);
      Hr(t, n), (o = gc(null, t, r, e, o, n));
      var i = vc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ct(r) ? ((i = !0), ba(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            dc(t),
            (o.updater = cl),
            (t.stateNode = o),
            (o._reactInternals = t),
            ou(t, r, e, n),
            (t = lu(null, t, r, !0, i, n)))
          : ((t.tag = 0), we && i && oc(t), Ze(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ca(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Uv(r)),
          (e = Ot(r, e)),
          o)
        ) {
          case 0:
            t = au(null, t, r, e, n);
            break e;
          case 1:
            t = df(null, t, r, e, n);
            break e;
          case 11:
            t = uf(null, t, r, e, n);
            break e;
          case 14:
            t = cf(null, t, r, Ot(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ot(r, o)),
        au(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ot(r, o)),
        df(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((gm(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          $h(e, t),
          Ia(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Jr(Error(L(423)), t)), (t = ff(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Jr(Error(L(424)), t)), (t = ff(e, t, r, n, o));
            break e;
          } else
            for (
              mt = zn(t.stateNode.containerInfo.firstChild),
                vt = t,
                we = !0,
                zt = null,
                n = Vh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gr(), r === o)) {
            t = fn(e, t, n);
            break e;
          }
          Ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wh(t),
        e === null && tu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Xs(r, o) ? (a = null) : i !== null && Xs(r, i) && (t.flags |= 32),
        mm(e, t),
        Ze(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && tu(t), null;
    case 13:
      return vm(e, t, n);
    case 4:
      return (
        fc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xr(t, null, r, n)) : Ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ot(r, o)),
        uf(e, t, r, o, n)
      );
    case 7:
      return Ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          he(Aa, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (It(i.value, a)) {
            if (i.children === o.children && !ut.current) {
              t = fn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = an(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      nu(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(L(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  nu(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Ze(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Hr(t, n),
        (o = Rt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ot(r, t.pendingProps)),
        (o = Ot(r.type, o)),
        cf(e, t, r, o, n)
      );
    case 15:
      return pm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ot(r, o)),
        ca(e, t),
        (t.tag = 1),
        ct(r) ? ((e = !0), ba(t)) : (e = !1),
        Hr(t, n),
        Bh(t, r, o),
        ou(t, r, o, n),
        lu(null, t, r, !0, e, n)
      );
    case 19:
      return ym(e, t, n);
    case 22:
      return hm(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function bm(e, t) {
  return ah(e, t);
}
function $v(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ct(e, t, n, r) {
  return new $v(e, t, n, r);
}
function Pc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Uv(e) {
  if (typeof e == "function") return Pc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ku)) return 11;
    if (e === Qu) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function pa(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Pc(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case jr:
        return ar(n.children, o, i, t);
      case Wu:
        (a = 8), (o |= 8);
        break;
      case Rs:
        return (
          (e = Ct(12, n, t, o | 2)), (e.elementType = Rs), (e.lanes = i), e
        );
      case Ts:
        return (e = Ct(13, n, t, o)), (e.elementType = Ts), (e.lanes = i), e;
      case _s:
        return (e = Ct(19, n, t, o)), (e.elementType = _s), (e.lanes = i), e;
      case Hp:
        return hl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Up:
              a = 10;
              break e;
            case Bp:
              a = 9;
              break e;
            case Ku:
              a = 11;
              break e;
            case Qu:
              a = 14;
              break e;
            case jn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ct(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function ar(e, t, n, r) {
  return (e = Ct(7, e, r, t)), (e.lanes = n), e;
}
function hl(e, t, n, r) {
  return (
    (e = Ct(22, e, r, t)),
    (e.elementType = Hp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function cs(e, t, n) {
  return (e = Ct(6, e, null, t)), (e.lanes = n), e;
}
function ds(e, t, n) {
  return (
    (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Bv(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wl(0)),
    (this.expirationTimes = Wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Rc(e, t, n, r, o, i, a, l, s) {
  return (
    (e = new Bv(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ct(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    dc(i),
    e
  );
}
function Hv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zm(e) {
  if (!e) return Un;
  e = e._reactInternals;
  e: {
    if (gr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ct(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ct(n)) return bh(e, n, t);
  }
  return t;
}
function Mm(e, t, n, r, o, i, a, l, s) {
  return (
    (e = Rc(n, r, !0, e, o, i, a, l, s)),
    (e.context = zm(null)),
    (n = e.current),
    (r = tt()),
    (o = Fn(n)),
    (i = an(r, o)),
    (i.callback = t ?? null),
    Mn(n, i, o),
    (e.current.lanes = o),
    wi(e, o, r),
    dt(e, r),
    e
  );
}
function ml(e, t, n, r) {
  var o = t.current,
    i = tt(),
    a = Fn(o);
  return (
    (n = zm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = an(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mn(o, t, a)),
    e !== null && (At(e, o, a, i), la(e, o, a)),
    a
  );
}
function Qa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ef(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tc(e, t) {
  Ef(e, t), (e = e.alternate) && Ef(e, t);
}
function Vv() {
  return null;
}
var Am =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _c(e) {
  this._internalRoot = e;
}
gl.prototype.render = _c.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  ml(e, t, null, null);
};
gl.prototype.unmount = _c.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hr(function () {
      ml(null, e, null, null);
    }),
      (t[cn] = null);
  }
};
function gl(e) {
  this._internalRoot = e;
}
gl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ph();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pn.length && t !== 0 && t < Pn[n].priority; n++);
    Pn.splice(n, 0, e), n === 0 && mh(e);
  }
};
function Lc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function kf() {}
function Wv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Qa(a);
        i.call(u);
      };
    }
    var a = Mm(t, r, e, 0, null, !1, !1, "", kf);
    return (
      (e._reactRootContainer = a),
      (e[cn] = a.current),
      ri(e.nodeType === 8 ? e.parentNode : e),
      hr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Qa(s);
      l.call(u);
    };
  }
  var s = Rc(e, 0, !1, null, null, !1, !1, "", kf);
  return (
    (e._reactRootContainer = s),
    (e[cn] = s.current),
    ri(e.nodeType === 8 ? e.parentNode : e),
    hr(function () {
      ml(t, s, n, r);
    }),
    s
  );
}
function yl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var s = Qa(a);
        l.call(s);
      };
    }
    ml(t, a, e, o);
  } else a = Wv(n, t, e, o, r);
  return Qa(a);
}
dh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = bo(t.pendingLanes);
        n !== 0 &&
          (Xu(t, n | 1), dt(t, Re()), !(re & 6) && ((Zr = Re() + 500), Kn()));
      }
      break;
    case 13:
      hr(function () {
        var r = dn(e, 1);
        if (r !== null) {
          var o = tt();
          At(r, e, 1, o);
        }
      }),
        Tc(e, 1);
  }
};
qu = function (e) {
  if (e.tag === 13) {
    var t = dn(e, 134217728);
    if (t !== null) {
      var n = tt();
      At(t, e, 134217728, n);
    }
    Tc(e, 134217728);
  }
};
fh = function (e) {
  if (e.tag === 13) {
    var t = Fn(e),
      n = dn(e, t);
    if (n !== null) {
      var r = tt();
      At(n, e, t, r);
    }
    Tc(e, t);
  }
};
ph = function () {
  return ue;
};
hh = function (e, t) {
  var n = ue;
  try {
    return (ue = e), t();
  } finally {
    ue = n;
  }
};
$s = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ds(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = sl(r);
            if (!o) throw Error(L(90));
            Wp(r), Ds(r, o);
          }
        }
      }
      break;
    case "textarea":
      Qp(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ir(e, !!n.multiple, t, !1);
  }
};
eh = Cc;
th = hr;
var Kv = { usingClientEntryPoint: !1, Events: [Si, Tr, sl, Jp, Zp, Cc] },
  jo = {
    findFiberByHostInstance: Zn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Qv = {
    bundleType: jo.bundleType,
    version: jo.version,
    rendererPackageName: jo.rendererPackageName,
    rendererConfig: jo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = oh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: jo.findFiberByHostInstance || Vv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xi.isDisabled && Xi.supportsFiber)
    try {
      (ol = Xi.inject(Qv)), (Kt = Xi);
    } catch {}
}
wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kv;
wt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lc(t)) throw Error(L(200));
  return Hv(e, t, null, n);
};
wt.createRoot = function (e, t) {
  if (!Lc(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = Am;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Rc(e, 1, !1, null, null, n, !1, r, o)),
    (e[cn] = t.current),
    ri(e.nodeType === 8 ? e.parentNode : e),
    new _c(t)
  );
};
wt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = oh(t)), (e = e === null ? null : e.stateNode), e;
};
wt.flushSync = function (e) {
  return hr(e);
};
wt.hydrate = function (e, t, n) {
  if (!vl(t)) throw Error(L(200));
  return yl(null, e, t, !0, n);
};
wt.hydrateRoot = function (e, t, n) {
  if (!Lc(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = Am;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Mm(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[cn] = t.current),
    ri(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new gl(t);
};
wt.render = function (e, t, n) {
  if (!vl(t)) throw Error(L(200));
  return yl(null, e, t, !1, n);
};
wt.unmountComponentAtNode = function (e) {
  if (!vl(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (hr(function () {
        yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[cn] = null);
        });
      }),
      !0)
    : !1;
};
wt.unstable_batchedUpdates = Cc;
wt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return yl(e, t, n, !1, r);
};
wt.version = "18.2.0-next-9e3b772b8-20220608";
function Fm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fm);
    } catch (e) {
      console.error(e);
    }
}
Fm(), (Mp.exports = wt);
var Oc = Mp.exports;
const Yv = jp(Oc),
  Gv = Cp({ __proto__: null, default: Yv }, [Oc]);
var Cf = Oc;
(Ns.createRoot = Cf.createRoot), (Ns.hydrateRoot = Cf.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Se() {
  return (
    (Se = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Se.apply(this, arguments)
  );
}
var Pe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Pe || (Pe = {}));
const jf = "popstate";
function Xv(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: l } = r.location;
    return fi(
      "",
      { pathname: i, search: a, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Bn(o);
  }
  return Jv(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function eo(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function qv() {
  return Math.random().toString(36).substr(2, 8);
}
function Nf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Se(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? mn(t) : t,
      { state: n, key: (t && t.key) || r || qv() }
    )
  );
}
function Bn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function mn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Jv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    l = Pe.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), a.replaceState(Se({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    l = Pe.Pop;
    let S = c(),
      p = S == null ? null : S - u;
    (u = S), s && s({ action: l, location: v.location, delta: p });
  }
  function g(S, p) {
    l = Pe.Push;
    let f = fi(v.location, S, p);
    n && n(f, S), (u = c() + 1);
    let m = Nf(f, u),
      E = v.createHref(f);
    try {
      a.pushState(m, "", E);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      o.location.assign(E);
    }
    i && s && s({ action: l, location: v.location, delta: 1 });
  }
  function x(S, p) {
    l = Pe.Replace;
    let f = fi(v.location, S, p);
    n && n(f, S), (u = c());
    let m = Nf(f, u),
      E = v.createHref(f);
    a.replaceState(m, "", E),
      i && s && s({ action: l, location: v.location, delta: 0 });
  }
  function y(S) {
    let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
      f = typeof S == "string" ? S : Bn(S);
    return (
      (f = f.replace(/ $/, "%20")),
      X(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(o, a);
    },
    listen(S) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(jf, d),
        (s = S),
        () => {
          o.removeEventListener(jf, d), (s = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: y,
    encodeLocation(S) {
      let p = y(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: g,
    replace: x,
    go(S) {
      return a.go(S);
    },
  };
  return v;
}
var je;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(je || (je = {}));
const Zv = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function ey(e) {
  return e.index === !0;
}
function wu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let a = [...n, i],
        l = typeof o.id == "string" ? o.id : a.join("-");
      if (
        (X(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        X(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        ey(o))
      ) {
        let s = Se({}, o, t(o), { id: l });
        return (r[l] = s), s;
      } else {
        let s = Se({}, o, t(o), { id: l, children: void 0 });
        return (
          (r[l] = s), o.children && (s.children = wu(o.children, t, a, r)), s
        );
      }
    })
  );
}
function Mr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? mn(t) : t,
    o = $t(r.pathname || "/", n);
  if (o == null) return null;
  let i = Im(e);
  ny(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) {
    let s = py(o);
    a = dy(i[l], s);
  }
  return a;
}
function ty(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Im(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, l) => {
    let s = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (X(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Yt([r, s.relativePath]),
      c = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (X(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Im(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: uy(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, a);
      else for (let s of $m(i.path)) o(i, a, s);
    }),
    t
  );
}
function $m(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = $m(r.join("/")),
    l = [];
  return (
    l.push(...a.map((s) => (s === "" ? i : [i, s].join("/")))),
    o && l.push(...a),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function ny(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : cy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ry = /^:[\w-]+$/,
  oy = 3,
  iy = 2,
  ay = 1,
  ly = 10,
  sy = -2,
  Pf = (e) => e === "*";
function uy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Pf) && (r += sy),
    t && (r += iy),
    n
      .filter((o) => !Pf(o))
      .reduce((o, i) => o + (ry.test(i) ? oy : i === "" ? ay : ly), r)
  );
}
function cy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function dy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = xu(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    i.push({
      params: r,
      pathname: Yt([o, c.pathname]),
      pathnameBase: gy(Yt([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = Yt([o, c.pathnameBase]));
  }
  return i;
}
function xu(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = fy(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: g, isOptional: x } = c;
      if (g === "*") {
        let v = l[d] || "";
        a = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[d];
      return (
        x && !y ? (u[g] = void 0) : (u[g] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function fy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    eo(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, l, s) => (
            r.push({ paramName: l, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function py(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      eo(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function $t(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function hy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? mn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : my(n, t)) : t,
    search: vy(r),
    hash: yy(o),
  };
}
function my(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function fs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Um(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Dc(e, t) {
  let n = Um(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function bc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = mn(e))
    : ((o = Se({}, e)),
      X(
        !o.pathname || !o.pathname.includes("?"),
        fs("?", "pathname", "search", o)
      ),
      X(
        !o.pathname || !o.pathname.includes("#"),
        fs("#", "pathname", "hash", o)
      ),
      X(!o.search || !o.search.includes("#"), fs("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    l;
  if (a == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith("..")) {
      let g = a.split("/");
      for (; g[0] === ".."; ) g.shift(), (d -= 1);
      o.pathname = g.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let s = hy(o, l),
    u = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const Yt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  gy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  vy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  yy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  ln = function (t, n) {
    n === void 0 && (n = 302);
    let r = n;
    typeof r == "number"
      ? (r = { status: r })
      : typeof r.status > "u" && (r.status = 302);
    let o = new Headers(r.headers);
    return o.set("Location", t), new Response(null, Se({}, r, { headers: o }));
  };
class zc {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Bm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Hm = ["post", "put", "patch", "delete"],
  wy = new Set(Hm),
  xy = ["get", ...Hm],
  Sy = new Set(xy),
  Ey = new Set([301, 302, 303, 307, 308]),
  ky = new Set([307, 308]),
  ps = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Cy = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  No = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Vm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  jy = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Wm = "remix-router-transitions";
function Ny(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  X(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let k = e.detectErrorBoundary;
    o = (N) => ({ hasErrorBoundary: k(N) });
  } else o = jy;
  let i = {},
    a = wu(e.routes, o, void 0, i),
    l,
    s = e.basename || "/",
    u = Se(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    c = null,
    d = new Set(),
    g = null,
    x = null,
    y = null,
    v = e.hydrationData != null,
    S = Mr(a, e.history.location, s),
    p = null;
  if (S == null) {
    let k = St(404, { pathname: e.history.location.pathname }),
      { matches: N, route: R } = zf(a);
    (S = N), (p = { [R.id]: k });
  }
  let f,
    m = S.some((k) => k.route.lazy),
    E = S.some((k) => k.route.loader);
  if (m) f = !1;
  else if (!E) f = !0;
  else if (u.v7_partialHydration) {
    let k = e.hydrationData ? e.hydrationData.loaderData : null,
      N = e.hydrationData ? e.hydrationData.errors : null,
      R = (D) =>
        D.route.loader
          ? D.route.loader.hydrate === !0
            ? !1
            : (k && k[D.route.id] !== void 0) || (N && N[D.route.id] !== void 0)
          : !0;
    if (N) {
      let D = S.findIndex((F) => N[F.route.id] !== void 0);
      f = S.slice(0, D + 1).every(R);
    } else f = S.every(R);
  } else f = e.hydrationData != null;
  let T,
    w = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: S,
      initialized: f,
      navigation: ps,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || p,
      fetchers: new Map(),
      blockers: new Map(),
    },
    j = Pe.Pop,
    P = !1,
    O,
    z = !1,
    H = new Map(),
    ie = null,
    le = !1,
    xe = !1,
    qe = [],
    Je = [],
    q = new Map(),
    b = 0,
    A = -1,
    I = new Map(),
    W = new Set(),
    K = new Map(),
    fe = new Map(),
    ne = new Set(),
    de = new Map(),
    se = new Map(),
    De = !1;
  function qt() {
    if (
      ((c = e.history.listen((k) => {
        let { action: N, location: R, delta: D } = k;
        if (De) {
          De = !1;
          return;
        }
        eo(
          se.size === 0 || D != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let F = fd({
          currentLocation: w.location,
          nextLocation: R,
          historyAction: N,
        });
        if (F && D != null) {
          (De = !0),
            e.history.go(D * -1),
            Li(F, {
              state: "blocked",
              location: R,
              proceed() {
                Li(F, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: R,
                }),
                  e.history.go(D);
              },
              reset() {
                let J = new Map(w.blockers);
                J.set(F, No), Me({ blockers: J });
              },
            });
          return;
        }
        return Gn(N, R);
      })),
      n)
    ) {
      Ay(t, H);
      let k = () => Fy(t, H);
      t.addEventListener("pagehide", k),
        (ie = () => t.removeEventListener("pagehide", k));
    }
    return w.initialized || Gn(Pe.Pop, w.location, { initialHydration: !0 }), T;
  }
  function Jt() {
    c && c(),
      ie && ie(),
      d.clear(),
      O && O.abort(),
      w.fetchers.forEach((k, N) => _i(N)),
      w.blockers.forEach((k, N) => dd(N));
  }
  function ho(k) {
    return d.add(k), () => d.delete(k);
  }
  function Me(k, N) {
    N === void 0 && (N = {}), (w = Se({}, w, k));
    let R = [],
      D = [];
    u.v7_fetcherPersist &&
      w.fetchers.forEach((F, J) => {
        F.state === "idle" && (ne.has(J) ? D.push(J) : R.push(J));
      }),
      [...d].forEach((F) =>
        F(w, {
          deletedFetchers: D,
          unstable_viewTransitionOpts: N.viewTransitionOpts,
          unstable_flushSync: N.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist &&
        (R.forEach((F) => w.fetchers.delete(F)), D.forEach((F) => _i(F)));
  }
  function ot(k, N, R) {
    var D, F;
    let { flushSync: J } = R === void 0 ? {} : R,
      V =
        w.actionData != null &&
        w.navigation.formMethod != null &&
        bt(w.navigation.formMethod) &&
        w.navigation.state === "loading" &&
        ((D = k.state) == null ? void 0 : D._isRedirect) !== !0,
      U;
    N.actionData
      ? Object.keys(N.actionData).length > 0
        ? (U = N.actionData)
        : (U = null)
      : V
      ? (U = w.actionData)
      : (U = null);
    let $ = N.loaderData
        ? bf(w.loaderData, N.loaderData, N.matches || [], N.errors)
        : w.loaderData,
      ee = w.blockers;
    ee.size > 0 && ((ee = new Map(ee)), ee.forEach((pe, Be) => ee.set(Be, No)));
    let Ae =
      P === !0 ||
      (w.navigation.formMethod != null &&
        bt(w.navigation.formMethod) &&
        ((F = k.state) == null ? void 0 : F._isRedirect) !== !0);
    l && ((a = l), (l = void 0)),
      le ||
        j === Pe.Pop ||
        (j === Pe.Push
          ? e.history.push(k, k.state)
          : j === Pe.Replace && e.history.replace(k, k.state));
    let Q;
    if (j === Pe.Pop) {
      let pe = H.get(w.location.pathname);
      pe && pe.has(k.pathname)
        ? (Q = { currentLocation: w.location, nextLocation: k })
        : H.has(k.pathname) &&
          (Q = { currentLocation: k, nextLocation: w.location });
    } else if (z) {
      let pe = H.get(w.location.pathname);
      pe
        ? pe.add(k.pathname)
        : ((pe = new Set([k.pathname])), H.set(w.location.pathname, pe)),
        (Q = { currentLocation: w.location, nextLocation: k });
    }
    Me(
      Se({}, N, {
        actionData: U,
        loaderData: $,
        historyAction: j,
        location: k,
        initialized: !0,
        navigation: ps,
        revalidation: "idle",
        restoreScrollPosition: hd(k, N.matches || w.matches),
        preventScrollReset: Ae,
        blockers: ee,
      }),
      { viewTransitionOpts: Q, flushSync: J === !0 }
    ),
      (j = Pe.Pop),
      (P = !1),
      (z = !1),
      (le = !1),
      (xe = !1),
      (qe = []),
      (Je = []);
  }
  async function id(k, N) {
    if (typeof k == "number") {
      e.history.go(k);
      return;
    }
    let R = Su(
        w.location,
        w.matches,
        s,
        u.v7_prependBasename,
        k,
        u.v7_relativeSplatPath,
        N == null ? void 0 : N.fromRouteId,
        N == null ? void 0 : N.relative
      ),
      {
        path: D,
        submission: F,
        error: J,
      } = Rf(u.v7_normalizeFormMethod, !1, R, N),
      V = w.location,
      U = fi(w.location, D, N && N.state);
    U = Se({}, U, e.history.encodeLocation(U));
    let $ = N && N.replace != null ? N.replace : void 0,
      ee = Pe.Push;
    $ === !0
      ? (ee = Pe.Replace)
      : $ === !1 ||
        (F != null &&
          bt(F.formMethod) &&
          F.formAction === w.location.pathname + w.location.search &&
          (ee = Pe.Replace));
    let Ae =
        N && "preventScrollReset" in N ? N.preventScrollReset === !0 : void 0,
      Q = (N && N.unstable_flushSync) === !0,
      pe = fd({ currentLocation: V, nextLocation: U, historyAction: ee });
    if (pe) {
      Li(pe, {
        state: "blocked",
        location: U,
        proceed() {
          Li(pe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            id(k, N);
        },
        reset() {
          let Be = new Map(w.blockers);
          Be.set(pe, No), Me({ blockers: Be });
        },
      });
      return;
    }
    return await Gn(ee, U, {
      submission: F,
      pendingError: J,
      preventScrollReset: Ae,
      replace: N && N.replace,
      enableViewTransition: N && N.unstable_viewTransition,
      flushSync: Q,
    });
  }
  function d0() {
    if (
      (zl(),
      Me({ revalidation: "loading" }),
      w.navigation.state !== "submitting")
    ) {
      if (w.navigation.state === "idle") {
        Gn(w.historyAction, w.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Gn(j || w.historyAction, w.navigation.location, {
        overrideNavigation: w.navigation,
      });
    }
  }
  async function Gn(k, N, R) {
    O && O.abort(),
      (O = null),
      (j = k),
      (le = (R && R.startUninterruptedRevalidation) === !0),
      x0(w.location, w.matches),
      (P = (R && R.preventScrollReset) === !0),
      (z = (R && R.enableViewTransition) === !0);
    let D = l || a,
      F = R && R.overrideNavigation,
      J = Mr(D, N, s),
      V = (R && R.flushSync) === !0;
    if (!J) {
      let Be = St(404, { pathname: N.pathname }),
        { matches: ft, route: Fe } = zf(D);
      Ml(),
        ot(
          N,
          { matches: ft, loaderData: {}, errors: { [Fe.id]: Be } },
          { flushSync: V }
        );
      return;
    }
    if (
      w.initialized &&
      !xe &&
      Ly(w.location, N) &&
      !(R && R.submission && bt(R.submission.formMethod))
    ) {
      ot(N, { matches: J }, { flushSync: V });
      return;
    }
    O = new AbortController();
    let U = Ro(e.history, N, O.signal, R && R.submission),
      $,
      ee;
    if (R && R.pendingError) ee = { [Ko(J).route.id]: R.pendingError };
    else if (R && R.submission && bt(R.submission.formMethod)) {
      let Be = await f0(U, N, R.submission, J, {
        replace: R.replace,
        flushSync: V,
      });
      if (Be.shortCircuited) return;
      ($ = Be.pendingActionData),
        (ee = Be.pendingActionError),
        (F = hs(N, R.submission)),
        (V = !1),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: Ae,
      loaderData: Q,
      errors: pe,
    } = await p0(
      U,
      N,
      J,
      F,
      R && R.submission,
      R && R.fetcherSubmission,
      R && R.replace,
      R && R.initialHydration === !0,
      V,
      $,
      ee
    );
    Ae ||
      ((O = null),
      ot(
        N,
        Se({ matches: J }, $ ? { actionData: $ } : {}, {
          loaderData: Q,
          errors: pe,
        })
      ));
  }
  async function f0(k, N, R, D, F) {
    F === void 0 && (F = {}), zl();
    let J = zy(N, R);
    Me({ navigation: J }, { flushSync: F.flushSync === !0 });
    let V,
      U = ku(D, N);
    if (!U.route.action && !U.route.lazy)
      V = {
        type: je.error,
        error: St(405, {
          method: k.method,
          pathname: N.pathname,
          routeId: U.route.id,
        }),
      };
    else if (
      ((V = await Po("action", k, U, D, i, o, s, u.v7_relativeSplatPath)),
      k.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (rr(V)) {
      let $;
      return (
        F && F.replace != null
          ? ($ = F.replace)
          : ($ = V.location === w.location.pathname + w.location.search),
        await mo(w, V, { submission: R, replace: $ }),
        { shortCircuited: !0 }
      );
    }
    if (Ar(V)) {
      let $ = Ko(D, U.route.id);
      return (
        (F && F.replace) !== !0 && (j = Pe.Push),
        { pendingActionData: {}, pendingActionError: { [$.route.id]: V.error } }
      );
    }
    if (nr(V)) throw St(400, { type: "defer-action" });
    return { pendingActionData: { [U.route.id]: V.data } };
  }
  async function p0(k, N, R, D, F, J, V, U, $, ee, Ae) {
    let Q = D || hs(N, F),
      pe = F || J || Ff(Q),
      Be = l || a,
      [ft, Fe] = Tf(
        e.history,
        w,
        R,
        pe,
        N,
        u.v7_partialHydration && U === !0,
        xe,
        qe,
        Je,
        ne,
        K,
        W,
        Be,
        s,
        ee,
        Ae
      );
    if (
      (Ml(
        (oe) =>
          !(R && R.some((ce) => ce.route.id === oe)) ||
          (ft && ft.some((ce) => ce.route.id === oe))
      ),
      (A = ++b),
      ft.length === 0 && Fe.length === 0)
    ) {
      let oe = ud();
      return (
        ot(
          N,
          Se(
            { matches: R, loaderData: {}, errors: Ae || null },
            ee ? { actionData: ee } : {},
            oe ? { fetchers: new Map(w.fetchers) } : {}
          ),
          { flushSync: $ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!le && (!u.v7_partialHydration || !U)) {
      Fe.forEach((ce) => {
        let it = w.fetchers.get(ce.key),
          Di = To(void 0, it ? it.data : void 0);
        w.fetchers.set(ce.key, Di);
      });
      let oe = ee || w.actionData;
      Me(
        Se(
          { navigation: Q },
          oe
            ? Object.keys(oe).length === 0
              ? { actionData: null }
              : { actionData: oe }
            : {},
          Fe.length > 0 ? { fetchers: new Map(w.fetchers) } : {}
        ),
        { flushSync: $ }
      );
    }
    Fe.forEach((oe) => {
      q.has(oe.key) && wn(oe.key),
        oe.controller && q.set(oe.key, oe.controller);
    });
    let yr = () => Fe.forEach((oe) => wn(oe.key));
    O && O.signal.addEventListener("abort", yr);
    let {
      results: Al,
      loaderResults: wr,
      fetcherResults: xn,
    } = await ad(w.matches, R, ft, Fe, k);
    if (k.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener("abort", yr),
      Fe.forEach((oe) => q.delete(oe.key));
    let Xn = Mf(Al);
    if (Xn) {
      if (Xn.idx >= ft.length) {
        let oe = Fe[Xn.idx - ft.length].key;
        W.add(oe);
      }
      return await mo(w, Xn.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: Fl, errors: vo } = Df(w, R, ft, wr, Ae, Fe, xn, de);
    de.forEach((oe, ce) => {
      oe.subscribe((it) => {
        (it || oe.done) && de.delete(ce);
      });
    }),
      u.v7_partialHydration &&
        U &&
        w.errors &&
        Object.entries(w.errors)
          .filter((oe) => {
            let [ce] = oe;
            return !ft.some((it) => it.route.id === ce);
          })
          .forEach((oe) => {
            let [ce, it] = oe;
            vo = Object.assign(vo || {}, { [ce]: it });
          });
    let Il = ud(),
      xr = cd(A),
      Oi = Il || xr || Fe.length > 0;
    return Se(
      { loaderData: Fl, errors: vo },
      Oi ? { fetchers: new Map(w.fetchers) } : {}
    );
  }
  function h0(k, N, R, D) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    q.has(k) && wn(k);
    let F = (D && D.unstable_flushSync) === !0,
      J = l || a,
      V = Su(
        w.location,
        w.matches,
        s,
        u.v7_prependBasename,
        R,
        u.v7_relativeSplatPath,
        N,
        D == null ? void 0 : D.relative
      ),
      U = Mr(J, V, s);
    if (!U) {
      go(k, N, St(404, { pathname: V }), { flushSync: F });
      return;
    }
    let {
      path: $,
      submission: ee,
      error: Ae,
    } = Rf(u.v7_normalizeFormMethod, !0, V, D);
    if (Ae) {
      go(k, N, Ae, { flushSync: F });
      return;
    }
    let Q = ku(U, $);
    if (((P = (D && D.preventScrollReset) === !0), ee && bt(ee.formMethod))) {
      m0(k, N, $, Q, U, F, ee);
      return;
    }
    K.set(k, { routeId: N, path: $ }), g0(k, N, $, Q, U, F, ee);
  }
  async function m0(k, N, R, D, F, J, V) {
    if ((zl(), K.delete(k), !D.route.action && !D.route.lazy)) {
      let ce = St(405, { method: V.formMethod, pathname: R, routeId: N });
      go(k, N, ce, { flushSync: J });
      return;
    }
    let U = w.fetchers.get(k);
    yn(k, My(V, U), { flushSync: J });
    let $ = new AbortController(),
      ee = Ro(e.history, R, $.signal, V);
    q.set(k, $);
    let Ae = b,
      Q = await Po("action", ee, D, F, i, o, s, u.v7_relativeSplatPath);
    if (ee.signal.aborted) {
      q.get(k) === $ && q.delete(k);
      return;
    }
    if (u.v7_fetcherPersist && ne.has(k)) {
      if (rr(Q) || Ar(Q)) {
        yn(k, kn(void 0));
        return;
      }
    } else {
      if (rr(Q))
        if ((q.delete(k), A > Ae)) {
          yn(k, kn(void 0));
          return;
        } else
          return W.add(k), yn(k, To(V)), mo(w, Q, { fetcherSubmission: V });
      if (Ar(Q)) {
        go(k, N, Q.error);
        return;
      }
    }
    if (nr(Q)) throw St(400, { type: "defer-action" });
    let pe = w.navigation.location || w.location,
      Be = Ro(e.history, pe, $.signal),
      ft = l || a,
      Fe =
        w.navigation.state !== "idle"
          ? Mr(ft, w.navigation.location, s)
          : w.matches;
    X(Fe, "Didn't find any matches after fetcher action");
    let yr = ++b;
    I.set(k, yr);
    let Al = To(V, Q.data);
    w.fetchers.set(k, Al);
    let [wr, xn] = Tf(
      e.history,
      w,
      Fe,
      V,
      pe,
      !1,
      xe,
      qe,
      Je,
      ne,
      K,
      W,
      ft,
      s,
      { [D.route.id]: Q.data },
      void 0
    );
    xn
      .filter((ce) => ce.key !== k)
      .forEach((ce) => {
        let it = ce.key,
          Di = w.fetchers.get(it),
          E0 = To(void 0, Di ? Di.data : void 0);
        w.fetchers.set(it, E0),
          q.has(it) && wn(it),
          ce.controller && q.set(it, ce.controller);
      }),
      Me({ fetchers: new Map(w.fetchers) });
    let Xn = () => xn.forEach((ce) => wn(ce.key));
    $.signal.addEventListener("abort", Xn);
    let {
      results: Fl,
      loaderResults: vo,
      fetcherResults: Il,
    } = await ad(w.matches, Fe, wr, xn, Be);
    if ($.signal.aborted) return;
    $.signal.removeEventListener("abort", Xn),
      I.delete(k),
      q.delete(k),
      xn.forEach((ce) => q.delete(ce.key));
    let xr = Mf(Fl);
    if (xr) {
      if (xr.idx >= wr.length) {
        let ce = xn[xr.idx - wr.length].key;
        W.add(ce);
      }
      return mo(w, xr.result);
    }
    let { loaderData: Oi, errors: oe } = Df(
      w,
      w.matches,
      wr,
      vo,
      void 0,
      xn,
      Il,
      de
    );
    if (w.fetchers.has(k)) {
      let ce = kn(Q.data);
      w.fetchers.set(k, ce);
    }
    cd(yr),
      w.navigation.state === "loading" && yr > A
        ? (X(j, "Expected pending action"),
          O && O.abort(),
          ot(w.navigation.location, {
            matches: Fe,
            loaderData: Oi,
            errors: oe,
            fetchers: new Map(w.fetchers),
          }))
        : (Me({
            errors: oe,
            loaderData: bf(w.loaderData, Oi, Fe, oe),
            fetchers: new Map(w.fetchers),
          }),
          (xe = !1));
  }
  async function g0(k, N, R, D, F, J, V) {
    let U = w.fetchers.get(k);
    yn(k, To(V, U ? U.data : void 0), { flushSync: J });
    let $ = new AbortController(),
      ee = Ro(e.history, R, $.signal);
    q.set(k, $);
    let Ae = b,
      Q = await Po("loader", ee, D, F, i, o, s, u.v7_relativeSplatPath);
    if (
      (nr(Q) && (Q = (await Ym(Q, ee.signal, !0)) || Q),
      q.get(k) === $ && q.delete(k),
      !ee.signal.aborted)
    ) {
      if (ne.has(k)) {
        yn(k, kn(void 0));
        return;
      }
      if (rr(Q))
        if (A > Ae) {
          yn(k, kn(void 0));
          return;
        } else {
          W.add(k), await mo(w, Q);
          return;
        }
      if (Ar(Q)) {
        go(k, N, Q.error);
        return;
      }
      X(!nr(Q), "Unhandled fetcher deferred data"), yn(k, kn(Q.data));
    }
  }
  async function mo(k, N, R) {
    let {
      submission: D,
      fetcherSubmission: F,
      replace: J,
    } = R === void 0 ? {} : R;
    N.revalidate && (xe = !0);
    let V = fi(k.location, N.location, { _isRedirect: !0 });
    if ((X(V, "Expected a location on the redirect navigation"), n)) {
      let pe = !1;
      if (N.reloadDocument) pe = !0;
      else if (Vm.test(N.location)) {
        const Be = e.history.createURL(N.location);
        pe = Be.origin !== t.location.origin || $t(Be.pathname, s) == null;
      }
      if (pe) {
        J ? t.location.replace(N.location) : t.location.assign(N.location);
        return;
      }
    }
    O = null;
    let U = J === !0 ? Pe.Replace : Pe.Push,
      { formMethod: $, formAction: ee, formEncType: Ae } = k.navigation;
    !D && !F && $ && ee && Ae && (D = Ff(k.navigation));
    let Q = D || F;
    if (ky.has(N.status) && Q && bt(Q.formMethod))
      await Gn(U, V, {
        submission: Se({}, Q, { formAction: N.location }),
        preventScrollReset: P,
      });
    else {
      let pe = hs(V, D);
      await Gn(U, V, {
        overrideNavigation: pe,
        fetcherSubmission: F,
        preventScrollReset: P,
      });
    }
  }
  async function ad(k, N, R, D, F) {
    let J = await Promise.all([
        ...R.map(($) => Po("loader", F, $, N, i, o, s, u.v7_relativeSplatPath)),
        ...D.map(($) =>
          $.matches && $.match && $.controller
            ? Po(
                "loader",
                Ro(e.history, $.path, $.controller.signal),
                $.match,
                $.matches,
                i,
                o,
                s,
                u.v7_relativeSplatPath
              )
            : { type: je.error, error: St(404, { pathname: $.path }) }
        ),
      ]),
      V = J.slice(0, R.length),
      U = J.slice(R.length);
    return (
      await Promise.all([
        Af(
          k,
          R,
          V,
          V.map(() => F.signal),
          !1,
          w.loaderData
        ),
        Af(
          k,
          D.map(($) => $.match),
          U,
          D.map(($) => ($.controller ? $.controller.signal : null)),
          !0
        ),
      ]),
      { results: J, loaderResults: V, fetcherResults: U }
    );
  }
  function zl() {
    (xe = !0),
      qe.push(...Ml()),
      K.forEach((k, N) => {
        q.has(N) && (Je.push(N), wn(N));
      });
  }
  function yn(k, N, R) {
    R === void 0 && (R = {}),
      w.fetchers.set(k, N),
      Me(
        { fetchers: new Map(w.fetchers) },
        { flushSync: (R && R.flushSync) === !0 }
      );
  }
  function go(k, N, R, D) {
    D === void 0 && (D = {});
    let F = Ko(w.matches, N);
    _i(k),
      Me(
        { errors: { [F.route.id]: R }, fetchers: new Map(w.fetchers) },
        { flushSync: (D && D.flushSync) === !0 }
      );
  }
  function ld(k) {
    return (
      u.v7_fetcherPersist &&
        (fe.set(k, (fe.get(k) || 0) + 1), ne.has(k) && ne.delete(k)),
      w.fetchers.get(k) || Cy
    );
  }
  function _i(k) {
    let N = w.fetchers.get(k);
    q.has(k) && !(N && N.state === "loading" && I.has(k)) && wn(k),
      K.delete(k),
      I.delete(k),
      W.delete(k),
      ne.delete(k),
      w.fetchers.delete(k);
  }
  function v0(k) {
    if (u.v7_fetcherPersist) {
      let N = (fe.get(k) || 0) - 1;
      N <= 0 ? (fe.delete(k), ne.add(k)) : fe.set(k, N);
    } else _i(k);
    Me({ fetchers: new Map(w.fetchers) });
  }
  function wn(k) {
    let N = q.get(k);
    X(N, "Expected fetch controller: " + k), N.abort(), q.delete(k);
  }
  function sd(k) {
    for (let N of k) {
      let R = ld(N),
        D = kn(R.data);
      w.fetchers.set(N, D);
    }
  }
  function ud() {
    let k = [],
      N = !1;
    for (let R of W) {
      let D = w.fetchers.get(R);
      X(D, "Expected fetcher: " + R),
        D.state === "loading" && (W.delete(R), k.push(R), (N = !0));
    }
    return sd(k), N;
  }
  function cd(k) {
    let N = [];
    for (let [R, D] of I)
      if (D < k) {
        let F = w.fetchers.get(R);
        X(F, "Expected fetcher: " + R),
          F.state === "loading" && (wn(R), I.delete(R), N.push(R));
      }
    return sd(N), N.length > 0;
  }
  function y0(k, N) {
    let R = w.blockers.get(k) || No;
    return se.get(k) !== N && se.set(k, N), R;
  }
  function dd(k) {
    w.blockers.delete(k), se.delete(k);
  }
  function Li(k, N) {
    let R = w.blockers.get(k) || No;
    X(
      (R.state === "unblocked" && N.state === "blocked") ||
        (R.state === "blocked" && N.state === "blocked") ||
        (R.state === "blocked" && N.state === "proceeding") ||
        (R.state === "blocked" && N.state === "unblocked") ||
        (R.state === "proceeding" && N.state === "unblocked"),
      "Invalid blocker state transition: " + R.state + " -> " + N.state
    );
    let D = new Map(w.blockers);
    D.set(k, N), Me({ blockers: D });
  }
  function fd(k) {
    let { currentLocation: N, nextLocation: R, historyAction: D } = k;
    if (se.size === 0) return;
    se.size > 1 && eo(!1, "A router only supports one blocker at a time");
    let F = Array.from(se.entries()),
      [J, V] = F[F.length - 1],
      U = w.blockers.get(J);
    if (
      !(U && U.state === "proceeding") &&
      V({ currentLocation: N, nextLocation: R, historyAction: D })
    )
      return J;
  }
  function Ml(k) {
    let N = [];
    return (
      de.forEach((R, D) => {
        (!k || k(D)) && (R.cancel(), N.push(D), de.delete(D));
      }),
      N
    );
  }
  function w0(k, N, R) {
    if (((g = k), (y = N), (x = R || null), !v && w.navigation === ps)) {
      v = !0;
      let D = hd(w.location, w.matches);
      D != null && Me({ restoreScrollPosition: D });
    }
    return () => {
      (g = null), (y = null), (x = null);
    };
  }
  function pd(k, N) {
    return (
      (x &&
        x(
          k,
          N.map((D) => ty(D, w.loaderData))
        )) ||
      k.key
    );
  }
  function x0(k, N) {
    if (g && y) {
      let R = pd(k, N);
      g[R] = y();
    }
  }
  function hd(k, N) {
    if (g) {
      let R = pd(k, N),
        D = g[R];
      if (typeof D == "number") return D;
    }
    return null;
  }
  function S0(k) {
    (i = {}), (l = wu(k, o, void 0, i));
  }
  return (
    (T = {
      get basename() {
        return s;
      },
      get future() {
        return u;
      },
      get state() {
        return w;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: qt,
      subscribe: ho,
      enableScrollRestoration: w0,
      navigate: id,
      fetch: h0,
      revalidate: d0,
      createHref: (k) => e.history.createHref(k),
      encodeLocation: (k) => e.history.encodeLocation(k),
      getFetcher: ld,
      deleteFetcher: v0,
      dispose: Jt,
      getBlocker: y0,
      deleteBlocker: dd,
      _internalFetchControllers: q,
      _internalActiveDeferreds: de,
      _internalSetRoutes: S0,
    }),
    T
  );
}
function Py(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Su(e, t, n, r, o, i, a, l) {
  let s, u;
  if (a) {
    s = [];
    for (let d of t)
      if ((s.push(d), d.route.id === a)) {
        u = d;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let c = bc(o || ".", Dc(s, i), $t(e.pathname, n) || e.pathname, l === "path");
  return (
    o == null && ((c.search = e.search), (c.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      u &&
      u.route.index &&
      !Mc(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Yt([n, c.pathname])),
    Bn(c)
  );
}
function Rf(e, t, n, r) {
  if (!r || !Py(r)) return { path: n };
  if (r.formMethod && !by(r.formMethod))
    return { path: n, error: St(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: St(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    a = e ? i.toUpperCase() : i.toLowerCase(),
    l = Qm(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!bt(a)) return o();
      let g =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((x, y) => {
              let [v, S] = y;
              return (
                "" +
                x +
                v +
                "=" +
                S +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: g,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!bt(a)) return o();
      try {
        let g = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: g,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  X(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (r.formData) (s = Eu(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Eu(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = Of(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = Of(s));
    } catch {
      return o();
    }
  let c = {
    formMethod: a,
    formAction: l,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (bt(c.formMethod)) return { path: n, submission: c };
  let d = mn(n);
  return (
    t && d.search && Mc(d.search) && s.append("index", ""),
    (d.search = "?" + s),
    { path: Bn(d), submission: c }
  );
}
function Ry(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Tf(e, t, n, r, o, i, a, l, s, u, c, d, g, x, y, v) {
  let S = v ? Object.values(v)[0] : y ? Object.values(y)[0] : void 0,
    p = e.createURL(t.location),
    f = e.createURL(o),
    m = v ? Object.keys(v)[0] : void 0,
    T = Ry(n, m).filter((j, P) => {
      let { route: O } = j;
      if (O.lazy) return !0;
      if (O.loader == null) return !1;
      if (i)
        return O.loader.hydrate
          ? !0
          : t.loaderData[O.id] === void 0 &&
              (!t.errors || t.errors[O.id] === void 0);
      if (
        Ty(t.loaderData, t.matches[P], j) ||
        l.some((ie) => ie === j.route.id)
      )
        return !0;
      let z = t.matches[P],
        H = j;
      return _f(
        j,
        Se(
          {
            currentUrl: p,
            currentParams: z.params,
            nextUrl: f,
            nextParams: H.params,
          },
          r,
          {
            actionResult: S,
            defaultShouldRevalidate:
              a ||
              p.pathname + p.search === f.pathname + f.search ||
              p.search !== f.search ||
              Km(z, H),
          }
        )
      );
    }),
    w = [];
  return (
    c.forEach((j, P) => {
      if (i || !n.some((le) => le.route.id === j.routeId) || u.has(P)) return;
      let O = Mr(g, j.path, x);
      if (!O) {
        w.push({
          key: P,
          routeId: j.routeId,
          path: j.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let z = t.fetchers.get(P),
        H = ku(O, j.path),
        ie = !1;
      d.has(P)
        ? (ie = !1)
        : s.includes(P)
        ? (ie = !0)
        : z && z.state !== "idle" && z.data === void 0
        ? (ie = a)
        : (ie = _f(
            H,
            Se(
              {
                currentUrl: p,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: f,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: S, defaultShouldRevalidate: a }
            )
          )),
        ie &&
          w.push({
            key: P,
            routeId: j.routeId,
            path: j.path,
            matches: O,
            match: H,
            controller: new AbortController(),
          });
    }),
    [T, w]
  );
}
function Ty(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Km(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function _f(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Lf(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  X(o, "No route found in manifest");
  let i = {};
  for (let a in r) {
    let s = o[a] !== void 0 && a !== "hasErrorBoundary";
    eo(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !s && !Zv.has(a) && (i[a] = r[a]);
  }
  Object.assign(o, i), Object.assign(o, Se({}, t(o), { lazy: void 0 }));
}
async function Po(e, t, n, r, o, i, a, l, s) {
  s === void 0 && (s = {});
  let u,
    c,
    d,
    g = (v) => {
      let S,
        p = new Promise((f, m) => (S = m));
      return (
        (d = () => S()),
        t.signal.addEventListener("abort", d),
        Promise.race([
          v({ request: t, params: n.params, context: s.requestContext }),
          p,
        ])
      );
    };
  try {
    let v = n.route[e];
    if (n.route.lazy)
      if (v) {
        let S,
          p = await Promise.all([
            g(v).catch((f) => {
              S = f;
            }),
            Lf(n.route, i, o),
          ]);
        if (S) throw S;
        c = p[0];
      } else if ((await Lf(n.route, i, o), (v = n.route[e]), v)) c = await g(v);
      else if (e === "action") {
        let S = new URL(t.url),
          p = S.pathname + S.search;
        throw St(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: je.data, data: void 0 };
    else if (v) c = await g(v);
    else {
      let S = new URL(t.url),
        p = S.pathname + S.search;
      throw St(404, { pathname: p });
    }
    X(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (v) {
    (u = je.error), (c = v);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if (Dy(c)) {
    let v = c.status;
    if (Ey.has(v)) {
      let p = c.headers.get("Location");
      if (
        (X(
          p,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Vm.test(p))
      )
        p = Su(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, p, l);
      else if (!s.isStaticRequest) {
        let f = new URL(t.url),
          m = p.startsWith("//") ? new URL(f.protocol + p) : new URL(p),
          E = $t(m.pathname, a) != null;
        m.origin === f.origin && E && (p = m.pathname + m.search + m.hash);
      }
      if (s.isStaticRequest) throw (c.headers.set("Location", p), c);
      return {
        type: je.redirect,
        status: v,
        location: p,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (s.isRouteRequest)
      throw { type: u === je.error ? je.error : je.data, response: c };
    let S;
    try {
      let p = c.headers.get("Content-Type");
      p && /\bapplication\/json\b/.test(p)
        ? c.body == null
          ? (S = null)
          : (S = await c.json())
        : (S = await c.text());
    } catch (p) {
      return { type: je.error, error: p };
    }
    return u === je.error
      ? { type: u, error: new zc(v, c.statusText, S), headers: c.headers }
      : { type: je.data, data: S, statusCode: c.status, headers: c.headers };
  }
  if (u === je.error) return { type: u, error: c };
  if (Oy(c)) {
    var x, y;
    return {
      type: je.deferred,
      deferredData: c,
      statusCode: (x = c.init) == null ? void 0 : x.status,
      headers:
        ((y = c.init) == null ? void 0 : y.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: je.data, data: c };
}
function Ro(e, t, n, r) {
  let o = e.createURL(Qm(t)).toString(),
    i = { signal: n };
  if (r && bt(r.formMethod)) {
    let { formMethod: a, formEncType: l } = r;
    (i.method = a.toUpperCase()),
      l === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": l })),
          (i.body = JSON.stringify(r.json)))
        : l === "text/plain"
        ? (i.body = r.text)
        : l === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = Eu(r.formData))
        : (i.body = r.formData);
  }
  return new Request(o, i);
}
function Eu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Of(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function _y(e, t, n, r, o) {
  let i = {},
    a = null,
    l,
    s = !1,
    u = {};
  return (
    n.forEach((c, d) => {
      let g = t[d].route.id;
      if (
        (X(!rr(c), "Cannot handle redirect results in processLoaderData"),
        Ar(c))
      ) {
        let x = Ko(e, g),
          y = c.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[x.route.id] == null && (a[x.route.id] = y),
          (i[g] = void 0),
          s || ((s = !0), (l = Bm(c.error) ? c.error.status : 500)),
          c.headers && (u[g] = c.headers);
      } else
        nr(c)
          ? (o.set(g, c.deferredData), (i[g] = c.deferredData.data))
          : (i[g] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !s &&
            (l = c.statusCode),
          c.headers && (u[g] = c.headers);
    }),
    r && ((a = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: l || 200, loaderHeaders: u }
  );
}
function Df(e, t, n, r, o, i, a, l) {
  let { loaderData: s, errors: u } = _y(t, n, r, o, l);
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: g, controller: x } = i[c];
    X(
      a !== void 0 && a[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = a[c];
    if (!(x && x.signal.aborted))
      if (Ar(y)) {
        let v = Ko(e.matches, g == null ? void 0 : g.route.id);
        (u && u[v.route.id]) || (u = Se({}, u, { [v.route.id]: y.error })),
          e.fetchers.delete(d);
      } else if (rr(y)) X(!1, "Unhandled fetcher revalidation redirect");
      else if (nr(y)) X(!1, "Unhandled fetcher deferred data");
      else {
        let v = kn(y.data);
        e.fetchers.set(d, v);
      }
  }
  return { loaderData: s, errors: u };
}
function bf(e, t, n, r) {
  let o = Se({}, t);
  for (let i of n) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function Ko(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function zf(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function St(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && n && r
          ? (l =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (l = "defer() is not supported in actions")
          : i === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        o && n && r
          ? (l =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')),
    new zc(e || 500, a, new Error(l), !0)
  );
}
function Mf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (rr(n)) return { result: n, idx: t };
  }
}
function Qm(e) {
  let t = typeof e == "string" ? mn(e) : e;
  return Bn(Se({}, t, { hash: "" }));
}
function Ly(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function nr(e) {
  return e.type === je.deferred;
}
function Ar(e) {
  return e.type === je.error;
}
function rr(e) {
  return (e && e.type) === je.redirect;
}
function Oy(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Dy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function by(e) {
  return Sy.has(e.toLowerCase());
}
function bt(e) {
  return wy.has(e.toLowerCase());
}
async function Af(e, t, n, r, o, i) {
  for (let a = 0; a < n.length; a++) {
    let l = n[a],
      s = t[a];
    if (!s) continue;
    let u = e.find((d) => d.route.id === s.route.id),
      c = u != null && !Km(u, s) && (i && i[s.route.id]) !== void 0;
    if (nr(l) && (o || c)) {
      let d = r[a];
      X(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Ym(l, d, o).then((g) => {
          g && (n[a] = g || n[a]);
        });
    }
  }
}
async function Ym(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: je.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: je.error, error: o };
      }
    return { type: je.data, data: e.deferredData.data };
  }
}
function Mc(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ku(e, t) {
  let n = typeof t == "string" ? mn(t).search : t.search;
  if (e[e.length - 1].route.index && Mc(n || "")) return e[e.length - 1];
  let r = Um(e);
  return r[r.length - 1];
}
function Ff(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: i,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function hs(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function zy(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function To(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function My(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function kn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Ay(e, t) {
  try {
    let n = e.sessionStorage.getItem(Wm);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function Fy(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(Wm, JSON.stringify(n));
    } catch (r) {
      eo(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
  return (
    (pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pi.apply(this, arguments)
  );
}
const ki = C.createContext(null),
  Ac = C.createContext(null),
  Gt = C.createContext(null),
  wl = C.createContext(null),
  gn = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Gm = C.createContext(null);
function Iy(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ci() || X(!1);
  let { basename: r, navigator: o } = C.useContext(Gt),
    { hash: i, pathname: a, search: l } = ji(e, { relative: n }),
    s = a;
  return (
    r !== "/" && (s = a === "/" ? r : Yt([r, a])),
    o.createHref({ pathname: s, search: l, hash: i })
  );
}
function Ci() {
  return C.useContext(wl) != null;
}
function Qn() {
  return Ci() || X(!1), C.useContext(wl).location;
}
function Xm(e) {
  C.useContext(Gt).static || C.useLayoutEffect(e);
}
function xl() {
  let { isDataRoute: e } = C.useContext(gn);
  return e ? Zy() : $y();
}
function $y() {
  Ci() || X(!1);
  let e = C.useContext(ki),
    { basename: t, future: n, navigator: r } = C.useContext(Gt),
    { matches: o } = C.useContext(gn),
    { pathname: i } = Qn(),
    a = JSON.stringify(Dc(o, n.v7_relativeSplatPath)),
    l = C.useRef(!1);
  return (
    Xm(() => {
      l.current = !0;
    }),
    C.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = bc(u, JSON.parse(a), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Yt([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, a, i, e]
    )
  );
}
const Uy = C.createContext(null);
function By(e) {
  let t = C.useContext(gn).outlet;
  return t && C.createElement(Uy.Provider, { value: e }, t);
}
function ji(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = C.useContext(Gt),
    { matches: o } = C.useContext(gn),
    { pathname: i } = Qn(),
    a = JSON.stringify(Dc(o, r.v7_relativeSplatPath));
  return C.useMemo(() => bc(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function Hy(e, t, n, r) {
  Ci() || X(!1);
  let { navigator: o } = C.useContext(Gt),
    { matches: i } = C.useContext(gn),
    a = i[i.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let s = a ? a.pathnameBase : "/";
  a && a.route;
  let u = Qn(),
    c;
  if (t) {
    var d;
    let S = typeof t == "string" ? mn(t) : t;
    s === "/" || ((d = S.pathname) != null && d.startsWith(s)) || X(!1),
      (c = S);
  } else c = u;
  let g = c.pathname || "/",
    x = g;
  if (s !== "/") {
    let S = s.replace(/^\//, "").split("/");
    x = "/" + g.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let y = Mr(e, { pathname: x }),
    v = Yy(
      y &&
        y.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: Yt([
              s,
              o.encodeLocation
                ? o.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? s
                : Yt([
                    s,
                    o.encodeLocation
                      ? o.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? C.createElement(
        wl.Provider,
        {
          value: {
            location: pi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Pe.Pop,
          },
        },
        v
      )
    : v;
}
function Vy() {
  let e = Jy(),
    t = Bm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: o }, n) : null,
    null
  );
}
const Wy = C.createElement(Vy, null);
class Ky extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          gn.Provider,
          { value: this.props.routeContext },
          C.createElement(Gm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Qy(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = C.useContext(ki);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(gn.Provider, { value: t }, r)
  );
}
function Yy(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let c = a.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id])
    );
    c >= 0 || X(!1), (a = a.slice(0, Math.min(a.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let d = a[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: g, errors: x } = n,
          y =
            d.route.loader &&
            g[d.route.id] === void 0 &&
            (!x || x[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (s = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((c, d, g) => {
    let x,
      y = !1,
      v = null,
      S = null;
    n &&
      ((x = l && d.route.id ? l[d.route.id] : void 0),
      (v = d.route.errorElement || Wy),
      s &&
        (u < 0 && g === 0
          ? (e2("route-fallback", !1), (y = !0), (S = null))
          : u === g &&
            ((y = !0), (S = d.route.hydrateFallbackElement || null))));
    let p = t.concat(a.slice(0, g + 1)),
      f = () => {
        let m;
        return (
          x
            ? (m = v)
            : y
            ? (m = S)
            : d.route.Component
            ? (m = C.createElement(d.route.Component, null))
            : d.route.element
            ? (m = d.route.element)
            : (m = c),
          C.createElement(Qy, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || g === 0)
      ? C.createElement(Ky, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: x,
          children: f(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var qm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(qm || {}),
  pn = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(pn || {});
function Gy(e) {
  let t = C.useContext(ki);
  return t || X(!1), t;
}
function Fc(e) {
  let t = C.useContext(Ac);
  return t || X(!1), t;
}
function Xy(e) {
  let t = C.useContext(gn);
  return t || X(!1), t;
}
function Ni(e) {
  let t = Xy(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function qy() {
  return Ni(pn.UseRouteId);
}
function vn() {
  let e = Fc(pn.UseLoaderData),
    t = Ni(pn.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
    );
    return;
  }
  return e.loaderData[t];
}
function Ic() {
  let e = Fc(pn.UseActionData),
    t = Ni(pn.UseLoaderData);
  return e.actionData ? e.actionData[t] : void 0;
}
function Jy() {
  var e;
  let t = C.useContext(Gm),
    n = Fc(pn.UseRouteError),
    r = Ni(pn.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Zy() {
  let { router: e } = Gy(qm.UseNavigateStable),
    t = Ni(pn.UseNavigateStable),
    n = C.useRef(!1);
  return (
    Xm(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, pi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const If = {};
function e2(e, t, n) {
  !t && !If[e] && (If[e] = !0);
}
function Jm(e) {
  return By(e.context);
}
function t2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Pe.Pop,
    navigator: i,
    static: a = !1,
    future: l,
  } = e;
  Ci() && X(!1);
  let s = t.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        future: pi({ v7_relativeSplatPath: !1 }, l),
      }),
      [s, l, i, a]
    );
  typeof r == "string" && (r = mn(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: g = "",
      state: x = null,
      key: y = "default",
    } = r,
    v = C.useMemo(() => {
      let S = $t(c, s);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: g, state: x, key: y },
            navigationType: o,
          };
    }, [s, c, d, g, x, y, o]);
  return v == null
    ? null
    : C.createElement(
        Gt.Provider,
        { value: u },
        C.createElement(wl.Provider, { children: n, value: v })
      );
}
new Promise(() => {});
function n2(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: C.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: C.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: C.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hn() {
  return (
    (Hn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hn.apply(this, arguments)
  );
}
function $c(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const ha = "get",
  ms = "application/x-www-form-urlencoded";
function Sl(e) {
  return e != null && typeof e.tagName == "string";
}
function r2(e) {
  return Sl(e) && e.tagName.toLowerCase() === "button";
}
function o2(e) {
  return Sl(e) && e.tagName.toLowerCase() === "form";
}
function i2(e) {
  return Sl(e) && e.tagName.toLowerCase() === "input";
}
function a2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function l2(e, t) {
  return e.button === 0 && (!t || t === "_self") && !a2(e);
}
let qi = null;
function s2() {
  if (qi === null)
    try {
      new FormData(document.createElement("form"), 0), (qi = !1);
    } catch {
      qi = !0;
    }
  return qi;
}
const u2 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function gs(e) {
  return e != null && !u2.has(e) ? null : e;
}
function c2(e, t) {
  let n, r, o, i, a;
  if (o2(e)) {
    let l = e.getAttribute("action");
    (r = l ? $t(l, t) : null),
      (n = e.getAttribute("method") || ha),
      (o = gs(e.getAttribute("enctype")) || ms),
      (i = new FormData(e));
  } else if (r2(e) || (i2(e) && (e.type === "submit" || e.type === "image"))) {
    let l = e.form;
    if (l == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let s = e.getAttribute("formaction") || l.getAttribute("action");
    if (
      ((r = s ? $t(s, t) : null),
      (n = e.getAttribute("formmethod") || l.getAttribute("method") || ha),
      (o =
        gs(e.getAttribute("formenctype")) ||
        gs(l.getAttribute("enctype")) ||
        ms),
      (i = new FormData(l, e)),
      !s2())
    ) {
      let { name: u, type: c, value: d } = e;
      if (c === "image") {
        let g = u ? u + "." : "";
        i.append(g + "x", "0"), i.append(g + "y", "0");
      } else u && i.append(u, d);
    }
  } else {
    if (Sl(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = ha), (r = null), (o = ms), (a = e);
  }
  return (
    i && o === "text/plain" && ((a = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: o, formData: i, body: a }
  );
}
const d2 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  f2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  p2 = [
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  h2 = "6";
try {
  window.__reactRouterVersion = h2;
} catch {}
function m2(e, t) {
  return Ny({
    basename: t == null ? void 0 : t.basename,
    future: Hn({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Xv({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || g2(),
    routes: e,
    mapRouteProperties: n2,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function g2() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Hn({}, t, { errors: v2(t.errors) })), t;
}
function v2(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new zc(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let a = new i(o.message);
            (a.stack = ""), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(o.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = o;
  return n;
}
const Zm = C.createContext({ isTransitioning: !1 }),
  y2 = C.createContext(new Map()),
  w2 = "startTransition",
  $f = F0[w2],
  x2 = "flushSync",
  Uf = Gv[x2];
function S2(e) {
  $f ? $f(e) : e();
}
function _o(e) {
  Uf ? Uf(e) : e();
}
class E2 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function k2(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, i] = C.useState(n.state),
    [a, l] = C.useState(),
    [s, u] = C.useState({ isTransitioning: !1 }),
    [c, d] = C.useState(),
    [g, x] = C.useState(),
    [y, v] = C.useState(),
    S = C.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    f = C.useCallback(
      (j) => {
        p ? S2(j) : j();
      },
      [p]
    ),
    m = C.useCallback(
      (j, P) => {
        let {
          deletedFetchers: O,
          unstable_flushSync: z,
          unstable_viewTransitionOpts: H,
        } = P;
        O.forEach((le) => S.current.delete(le)),
          j.fetchers.forEach((le, xe) => {
            le.data !== void 0 && S.current.set(xe, le.data);
          });
        let ie =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!H || ie) {
          z ? _o(() => i(j)) : f(() => i(j));
          return;
        }
        if (z) {
          _o(() => {
            g && (c && c.resolve(), g.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: H.currentLocation,
                nextLocation: H.nextLocation,
              });
          });
          let le = n.window.document.startViewTransition(() => {
            _o(() => i(j));
          });
          le.finished.finally(() => {
            _o(() => {
              d(void 0), x(void 0), l(void 0), u({ isTransitioning: !1 });
            });
          }),
            _o(() => x(le));
          return;
        }
        g
          ? (c && c.resolve(),
            g.skipTransition(),
            v({
              state: j,
              currentLocation: H.currentLocation,
              nextLocation: H.nextLocation,
            }))
          : (l(j),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: H.currentLocation,
              nextLocation: H.nextLocation,
            }));
      },
      [n.window, g, c, S, f]
    );
  C.useLayoutEffect(() => n.subscribe(m), [n, m]),
    C.useEffect(() => {
      s.isTransitioning && !s.flushSync && d(new E2());
    }, [s]),
    C.useEffect(() => {
      if (c && a && n.window) {
        let j = a,
          P = c.promise,
          O = n.window.document.startViewTransition(async () => {
            f(() => i(j)), await P;
          });
        O.finished.finally(() => {
          d(void 0), x(void 0), l(void 0), u({ isTransitioning: !1 });
        }),
          x(O);
      }
    }, [f, a, c, n.window]),
    C.useEffect(() => {
      c && a && o.location.key === a.location.key && c.resolve();
    }, [c, g, o.location, a]),
    C.useEffect(() => {
      !s.isTransitioning &&
        y &&
        (l(y.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        v(void 0));
    }, [s.isTransitioning, y]),
    C.useEffect(() => {}, []);
  let E = C.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (j) => n.navigate(j),
        push: (j, P, O) =>
          n.navigate(j, {
            state: P,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (j, P, O) =>
          n.navigate(j, {
            replace: !0,
            state: P,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n]
    ),
    T = n.basename || "/",
    w = C.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: T }),
      [n, E, T]
    );
  return C.createElement(
    C.Fragment,
    null,
    C.createElement(
      ki.Provider,
      { value: w },
      C.createElement(
        Ac.Provider,
        { value: o },
        C.createElement(
          y2.Provider,
          { value: S.current },
          C.createElement(
            Zm.Provider,
            { value: s },
            C.createElement(
              t2,
              {
                basename: T,
                location: o.location,
                navigationType: o.historyAction,
                navigator: E,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              o.initialized || n.future.v7_partialHydration
                ? C.createElement(C2, {
                    routes: n.routes,
                    future: n.future,
                    state: o,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function C2(e) {
  let { routes: t, future: n, state: r } = e;
  return Hy(t, void 0, r, n);
}
const j2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  N2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Nt = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: l,
        target: s,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      g = $c(t, d2),
      { basename: x } = C.useContext(Gt),
      y,
      v = !1;
    if (typeof u == "string" && N2.test(u) && ((y = u), j2))
      try {
        let m = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          T = $t(E.pathname, x);
        E.origin === m.origin && T != null
          ? (u = T + E.search + E.hash)
          : (v = !0);
      } catch {}
    let S = Iy(u, { relative: o }),
      p = R2(u, {
        replace: a,
        state: l,
        target: s,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: d,
      });
    function f(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return C.createElement(
      "a",
      Hn({}, g, { href: y || S, onClick: v || i ? r : f, ref: n, target: s })
    );
  }),
  P2 = C.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: a = !1,
        style: l,
        to: s,
        unstable_viewTransition: u,
        children: c,
      } = t,
      d = $c(t, f2),
      g = ji(s, { relative: d.relative }),
      x = Qn(),
      y = C.useContext(Ac),
      { navigator: v, basename: S } = C.useContext(Gt),
      p = y != null && D2(g) && u === !0,
      f = v.encodeLocation ? v.encodeLocation(g).pathname : g.pathname,
      m = x.pathname,
      E =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    o ||
      ((m = m.toLowerCase()),
      (E = E ? E.toLowerCase() : null),
      (f = f.toLowerCase())),
      E && S && (E = $t(E, S) || E);
    const T = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let w = m === f || (!a && m.startsWith(f) && m.charAt(T) === "/"),
      j =
        E != null &&
        (E === f || (!a && E.startsWith(f) && E.charAt(f.length) === "/")),
      P = { isActive: w, isPending: j, isTransitioning: p },
      O = w ? r : void 0,
      z;
    typeof i == "function"
      ? (z = i(P))
      : (z = [
          i,
          w ? "active" : null,
          j ? "pending" : null,
          p ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let H = typeof l == "function" ? l(P) : l;
    return C.createElement(
      Nt,
      Hn({}, d, {
        "aria-current": O,
        className: z,
        ref: n,
        style: H,
        to: s,
        unstable_viewTransition: u,
      }),
      typeof c == "function" ? c(P) : c
    );
  }),
  Uc = C.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: o,
        replace: i,
        state: a,
        method: l = ha,
        action: s,
        onSubmit: u,
        relative: c,
        preventScrollReset: d,
        unstable_viewTransition: g,
      } = e,
      x = $c(e, p2),
      y = co(),
      v = O2(s, { relative: c }),
      S = l.toLowerCase() === "get" ? "get" : "post",
      p = (f) => {
        if ((u && u(f), f.defaultPrevented)) return;
        f.preventDefault();
        let m = f.nativeEvent.submitter,
          E = (m == null ? void 0 : m.getAttribute("formmethod")) || l;
        y(m || f.currentTarget, {
          fetcherKey: n,
          method: E,
          navigate: r,
          replace: i,
          state: a,
          relative: c,
          preventScrollReset: d,
          unstable_viewTransition: g,
        });
      };
    return C.createElement(
      "form",
      Hn({ ref: t, method: S, action: v, onSubmit: o ? u : p }, x)
    );
  });
var Ya;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ya || (Ya = {}));
var Bf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Bf || (Bf = {}));
function e1(e) {
  let t = C.useContext(ki);
  return t || X(!1), t;
}
function R2(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    s = xl(),
    u = Qn(),
    c = ji(e, { relative: a });
  return C.useCallback(
    (d) => {
      if (l2(d, n)) {
        d.preventDefault();
        let g = r !== void 0 ? r : Bn(u) === Bn(c);
        s(e, {
          replace: g,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: l,
        });
      }
    },
    [u, s, c, r, o, n, e, i, a, l]
  );
}
function T2() {
  if (typeof document > "u")
    throw new Error(
      "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
    );
}
let _2 = 0,
  L2 = () => "__" + String(++_2) + "__";
function co() {
  let { router: e } = e1(Ya.UseSubmit),
    { basename: t } = C.useContext(Gt),
    n = qy();
  return C.useCallback(
    function (r, o) {
      o === void 0 && (o = {}), T2();
      let { action: i, method: a, encType: l, formData: s, body: u } = c2(r, t);
      if (o.navigate === !1) {
        let c = o.fetcherKey || L2();
        e.fetch(c, n, o.action || i, {
          preventScrollReset: o.preventScrollReset,
          formData: s,
          body: u,
          formMethod: o.method || a,
          formEncType: o.encType || l,
          unstable_flushSync: o.unstable_flushSync,
        });
      } else
        e.navigate(o.action || i, {
          preventScrollReset: o.preventScrollReset,
          formData: s,
          body: u,
          formMethod: o.method || a,
          formEncType: o.encType || l,
          replace: o.replace,
          state: o.state,
          fromRouteId: n,
          unstable_flushSync: o.unstable_flushSync,
          unstable_viewTransition: o.unstable_viewTransition,
        });
    },
    [e, t, n]
  );
}
function O2(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = C.useContext(Gt),
    o = C.useContext(gn);
  o || X(!1);
  let [i] = o.matches.slice(-1),
    a = Hn({}, ji(e || ".", { relative: n })),
    l = Qn();
  if (e == null) {
    a.search = l.search;
    let s = new URLSearchParams(a.search);
    s.has("index") &&
      s.get("index") === "" &&
      (s.delete("index"), (a.search = s.toString() ? "?" + s.toString() : ""));
  }
  return (
    (!e || e === ".") &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (a.pathname = a.pathname === "/" ? r : Yt([r, a.pathname])),
    Bn(a)
  );
}
function D2(e, t) {
  t === void 0 && (t = {});
  let n = C.useContext(Zm);
  n == null && X(!1);
  let { basename: r } = e1(Ya.useViewTransitionState),
    o = ji(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = $t(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    a = $t(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return xu(o.pathname, a) != null || xu(o.pathname, i) != null;
}
var st = function () {
  return (
    (st =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    st.apply(this, arguments)
  );
};
function Ga(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var ve = "-ms-",
  Qo = "-moz-",
  ae = "-webkit-",
  t1 = "comm",
  El = "rule",
  Bc = "decl",
  b2 = "@import",
  n1 = "@keyframes",
  z2 = "@layer",
  r1 = Math.abs,
  Hc = String.fromCharCode,
  Cu = Object.assign;
function M2(e, t) {
  return $e(e, 0) ^ 45
    ? (((((((t << 2) ^ $e(e, 0)) << 2) ^ $e(e, 1)) << 2) ^ $e(e, 2)) << 2) ^
        $e(e, 3)
    : 0;
}
function o1(e) {
  return e.trim();
}
function en(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Y(e, t, n) {
  return e.replace(t, n);
}
function ma(e, t, n) {
  return e.indexOf(t, n);
}
function $e(e, t) {
  return e.charCodeAt(t) | 0;
}
function to(e, t, n) {
  return e.slice(t, n);
}
function Ht(e) {
  return e.length;
}
function i1(e) {
  return e.length;
}
function Mo(e, t) {
  return t.push(e), e;
}
function A2(e, t) {
  return e.map(t).join("");
}
function Hf(e, t) {
  return e.filter(function (n) {
    return !en(n, t);
  });
}
var kl = 1,
  no = 1,
  a1 = 0,
  _t = 0,
  _e = 0,
  fo = "";
function Cl(e, t, n, r, o, i, a, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: kl,
    column: no,
    length: a,
    return: "",
    siblings: l,
  };
}
function Cn(e, t) {
  return Cu(
    Cl("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Er(e) {
  for (; e.root; ) e = Cn(e.root, { children: [e] });
  Mo(e, e.siblings);
}
function F2() {
  return _e;
}
function I2() {
  return (
    (_e = _t > 0 ? $e(fo, --_t) : 0), no--, _e === 10 && ((no = 1), kl--), _e
  );
}
function Ft() {
  return (
    (_e = _t < a1 ? $e(fo, _t++) : 0), no++, _e === 10 && ((no = 1), kl++), _e
  );
}
function lr() {
  return $e(fo, _t);
}
function ga() {
  return _t;
}
function jl(e, t) {
  return to(fo, e, t);
}
function ju(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function $2(e) {
  return (kl = no = 1), (a1 = Ht((fo = e))), (_t = 0), [];
}
function U2(e) {
  return (fo = ""), e;
}
function vs(e) {
  return o1(jl(_t - 1, Nu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function B2(e) {
  for (; (_e = lr()) && _e < 33; ) Ft();
  return ju(e) > 2 || ju(_e) > 3 ? "" : " ";
}
function H2(e, t) {
  for (
    ;
    --t &&
    Ft() &&
    !(_e < 48 || _e > 102 || (_e > 57 && _e < 65) || (_e > 70 && _e < 97));

  );
  return jl(e, ga() + (t < 6 && lr() == 32 && Ft() == 32));
}
function Nu(e) {
  for (; Ft(); )
    switch (_e) {
      case e:
        return _t;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nu(_e);
        break;
      case 40:
        e === 41 && Nu(e);
        break;
      case 92:
        Ft();
        break;
    }
  return _t;
}
function V2(e, t) {
  for (; Ft() && e + _e !== 57; ) if (e + _e === 84 && lr() === 47) break;
  return "/*" + jl(t, _t - 1) + "*" + Hc(e === 47 ? e : Ft());
}
function W2(e) {
  for (; !ju(lr()); ) Ft();
  return jl(e, _t);
}
function K2(e) {
  return U2(va("", null, null, null, [""], (e = $2(e)), 0, [0], e));
}
function va(e, t, n, r, o, i, a, l, s) {
  for (
    var u = 0,
      c = 0,
      d = a,
      g = 0,
      x = 0,
      y = 0,
      v = 1,
      S = 1,
      p = 1,
      f = 0,
      m = "",
      E = o,
      T = i,
      w = r,
      j = m;
    S;

  )
    switch (((y = f), (f = Ft()))) {
      case 40:
        if (y != 108 && $e(j, d - 1) == 58) {
          ma((j += Y(vs(f), "&", "&\f")), "&\f", r1(u ? l[u - 1] : 0)) != -1 &&
            (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        j += vs(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        j += B2(y);
        break;
      case 92:
        j += H2(ga() - 1, 7);
        continue;
      case 47:
        switch (lr()) {
          case 42:
          case 47:
            Mo(Q2(V2(Ft(), ga()), t, n, s), s);
            break;
          default:
            j += "/";
        }
        break;
      case 123 * v:
        l[u++] = Ht(j) * p;
      case 125 * v:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            p == -1 && (j = Y(j, /\f/g, "")),
              x > 0 &&
                Ht(j) - d &&
                Mo(
                  x > 32
                    ? Wf(j + ";", r, n, d - 1, s)
                    : Wf(Y(j, " ", "") + ";", r, n, d - 2, s),
                  s
                );
            break;
          case 59:
            j += ";";
          default:
            if (
              (Mo(
                (w = Vf(j, t, n, u, c, o, l, m, (E = []), (T = []), d, i)),
                i
              ),
              f === 123)
            )
              if (c === 0) va(j, t, w, w, E, i, d, l, T);
              else
                switch (g === 99 && $e(j, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    va(
                      e,
                      w,
                      w,
                      r && Mo(Vf(e, w, w, 0, 0, o, l, m, o, (E = []), d, T), T),
                      o,
                      T,
                      d,
                      l,
                      r ? E : T
                    );
                    break;
                  default:
                    va(j, w, w, w, [""], T, 0, l, T);
                }
        }
        (u = c = x = 0), (v = p = 1), (m = j = ""), (d = a);
        break;
      case 58:
        (d = 1 + Ht(j)), (x = y);
      default:
        if (v < 1) {
          if (f == 123) --v;
          else if (f == 125 && v++ == 0 && I2() == 125) continue;
        }
        switch (((j += Hc(f)), f * v)) {
          case 38:
            p = c > 0 ? 1 : ((j += "\f"), -1);
            break;
          case 44:
            (l[u++] = (Ht(j) - 1) * p), (p = 1);
            break;
          case 64:
            lr() === 45 && (j += vs(Ft())),
              (g = lr()),
              (c = d = Ht((m = j += W2(ga())))),
              f++;
            break;
          case 45:
            y === 45 && Ht(j) == 2 && (v = 0);
        }
    }
  return i;
}
function Vf(e, t, n, r, o, i, a, l, s, u, c, d) {
  for (
    var g = o - 1, x = o === 0 ? i : [""], y = i1(x), v = 0, S = 0, p = 0;
    v < r;
    ++v
  )
    for (var f = 0, m = to(e, g + 1, (g = r1((S = a[v])))), E = e; f < y; ++f)
      (E = o1(S > 0 ? x[f] + " " + m : Y(m, /&\f/g, x[f]))) && (s[p++] = E);
  return Cl(e, t, n, o === 0 ? El : l, s, u, c, d);
}
function Q2(e, t, n, r) {
  return Cl(e, t, n, t1, Hc(F2()), to(e, 2, -2), 0, r);
}
function Wf(e, t, n, r, o) {
  return Cl(e, t, n, Bc, to(e, 0, r), to(e, r + 1, -1), r, o);
}
function l1(e, t, n) {
  switch (M2(e, t)) {
    case 5103:
      return ae + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ae + e + e;
    case 4789:
      return Qo + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + Qo + e + ve + e + e;
    case 5936:
      switch ($e(e, t + 11)) {
        case 114:
          return ae + e + ve + Y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ae + e + ve + Y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ae + e + ve + Y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ae + e + ve + e + e;
    case 6165:
      return ae + e + ve + "flex-" + e + e;
    case 5187:
      return (
        ae + e + Y(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + ve + "flex-$1$2") + e
      );
    case 5443:
      return (
        ae +
        e +
        ve +
        "flex-item-" +
        Y(e, /flex-|-self/g, "") +
        (en(e, /flex-|baseline/)
          ? ""
          : ve + "grid-row-" + Y(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        ae +
        e +
        ve +
        "flex-line-pack" +
        Y(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return ae + e + ve + Y(e, "shrink", "negative") + e;
    case 5292:
      return ae + e + ve + Y(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ae +
        "box-" +
        Y(e, "-grow", "") +
        ae +
        e +
        ve +
        Y(e, "grow", "positive") +
        e
      );
    case 4554:
      return ae + Y(e, /([^-])(transform)/g, "$1" + ae + "$2") + e;
    case 6187:
      return (
        Y(Y(Y(e, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), e, "") +
        e
      );
    case 5495:
    case 3959:
      return Y(e, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return (
        Y(
          Y(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + ve + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ae +
        e +
        e
      );
    case 4200:
      if (!en(e, /flex-|baseline/))
        return ve + "grid-column-align" + to(e, t) + e;
      break;
    case 2592:
    case 3360:
      return ve + Y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), en(r.props, /grid-\w+-end/);
        })
        ? ~ma(e + (n = n[t].value), "span", 0)
          ? e
          : ve +
            Y(e, "-start", "") +
            e +
            ve +
            "grid-row-span:" +
            (~ma(n, "span", 0) ? en(n, /\d+/) : +en(n, /\d+/) - +en(e, /\d+/)) +
            ";"
        : ve + Y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return en(r.props, /grid-\w+-start/);
        })
        ? e
        : ve + Y(Y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Y(e, /(.+)-inline(.+)/, ae + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ht(e) - 1 - t > 6)
        switch ($e(e, t + 1)) {
          case 109:
            if ($e(e, t + 4) !== 45) break;
          case 102:
            return (
              Y(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ae +
                  "$2-$3$1" +
                  Qo +
                  ($e(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~ma(e, "stretch", 0)
              ? l1(Y(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return Y(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, o, i, a, l, s, u) {
          return (
            ve +
            o +
            ":" +
            i +
            u +
            (a ? ve + o + "-span:" + (l ? s : +s - +i) + u : "") +
            e
          );
        }
      );
    case 4949:
      if ($e(e, t + 6) === 121) return Y(e, ":", ":" + ae) + e;
      break;
    case 6444:
      switch ($e(e, $e(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            Y(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                ae +
                ($e(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ae +
                "$2$3$1" +
                ve +
                "$2box$3"
            ) + e
          );
        case 100:
          return Y(e, ":", ":" + ve) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Xa(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Y2(e, t, n, r) {
  switch (e.type) {
    case z2:
      if (e.children.length) break;
    case b2:
    case Bc:
      return (e.return = e.return || e.value);
    case t1:
      return "";
    case n1:
      return (e.return = e.value + "{" + Xa(e.children, r) + "}");
    case El:
      if (!Ht((e.value = e.props.join(",")))) return "";
  }
  return Ht((n = Xa(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function G2(e) {
  var t = i1(e);
  return function (n, r, o, i) {
    for (var a = "", l = 0; l < t; l++) a += e[l](n, r, o, i) || "";
    return a;
  };
}
function X2(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function q2(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Bc:
        e.return = l1(e.value, e.length, n);
        return;
      case n1:
        return Xa([Cn(e, { value: Y(e.value, "@", "@" + ae) })], r);
      case El:
        if (e.length)
          return A2((n = e.props), function (o) {
            switch (en(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Er(Cn(e, { props: [Y(o, /:(read-\w+)/, ":" + Qo + "$1")] })),
                  Er(Cn(e, { props: [o] })),
                  Cu(e, { props: Hf(n, r) });
                break;
              case "::placeholder":
                Er(
                  Cn(e, { props: [Y(o, /:(plac\w+)/, ":" + ae + "input-$1")] })
                ),
                  Er(Cn(e, { props: [Y(o, /:(plac\w+)/, ":" + Qo + "$1")] })),
                  Er(Cn(e, { props: [Y(o, /:(plac\w+)/, ve + "input-$1")] })),
                  Er(Cn(e, { props: [o] })),
                  Cu(e, { props: Hf(n, r) });
                break;
            }
            return "";
          });
    }
}
var J2 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  pt = {},
  ro =
    (typeof process < "u" &&
      pt !== void 0 &&
      (pt.REACT_APP_SC_ATTR || pt.SC_ATTR)) ||
    "data-styled",
  s1 = "active",
  u1 = "data-styled-version",
  Nl = "6.1.8",
  Vc = `/*!sc*/
`,
  Wc = typeof window < "u" && "HTMLElement" in window,
  Z2 = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      pt !== void 0 &&
      pt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      pt.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? pt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      pt.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      pt !== void 0 &&
      pt.SC_DISABLE_SPEEDY !== void 0 &&
      pt.SC_DISABLE_SPEEDY !== "" &&
      pt.SC_DISABLE_SPEEDY !== "false" &&
      pt.SC_DISABLE_SPEEDY),
  Pl = Object.freeze([]),
  oo = Object.freeze({});
function ew(e, t, n) {
  return (
    n === void 0 && (n = oo), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var c1 = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  tw = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  nw = /(^-|-$)/g;
function Kf(e) {
  return e.replace(tw, "-").replace(nw, "");
}
var rw = /(a)(d)/gi,
  Ji = 52,
  Qf = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Pu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > Ji; t = (t / Ji) | 0) n = Qf(t % Ji) + n;
  return (Qf(t % Ji) + n).replace(rw, "$1-$2");
}
var ys,
  d1 = 5381,
  Fr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  f1 = function (e) {
    return Fr(d1, e);
  };
function ow(e) {
  return Pu(f1(e) >>> 0);
}
function iw(e) {
  return e.displayName || e.name || "Component";
}
function ws(e) {
  return typeof e == "string" && !0;
}
var p1 = typeof Symbol == "function" && Symbol.for,
  h1 = p1 ? Symbol.for("react.memo") : 60115,
  aw = p1 ? Symbol.for("react.forward_ref") : 60112,
  lw = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  sw = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  m1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  uw =
    (((ys = {})[aw] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (ys[h1] = m1),
    ys);
function Yf(e) {
  return ("type" in (t = e) && t.type.$$typeof) === h1
    ? m1
    : "$$typeof" in e
    ? uw[e.$$typeof]
    : lw;
  var t;
}
var cw = Object.defineProperty,
  dw = Object.getOwnPropertyNames,
  Gf = Object.getOwnPropertySymbols,
  fw = Object.getOwnPropertyDescriptor,
  pw = Object.getPrototypeOf,
  Xf = Object.prototype;
function g1(e, t, n) {
  if (typeof t != "string") {
    if (Xf) {
      var r = pw(t);
      r && r !== Xf && g1(e, r, n);
    }
    var o = dw(t);
    Gf && (o = o.concat(Gf(t)));
    for (var i = Yf(e), a = Yf(t), l = 0; l < o.length; ++l) {
      var s = o[l];
      if (!(s in sw || (n && n[s]) || (a && s in a) || (i && s in i))) {
        var u = fw(t, s);
        try {
          cw(e, s, u);
        } catch {}
      }
    }
  }
  return e;
}
function io(e) {
  return typeof e == "function";
}
function Kc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function or(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function qf(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function hi(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Ru(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !hi(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Ru(e[r], t[r]);
  else if (hi(t)) for (var r in t) e[r] = Ru(e[r], t[r]);
  return e;
}
function Qc(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Pi(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var hw = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
            if ((i <<= 1) < 0) throw Pi(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var a = o; a < i; a++) this.groupSizes[a] = 0;
        }
        for (
          var l = this.indexOfGroup(t + 1), s = ((a = 0), n.length);
          a < s;
          a++
        )
          this.tag.insertRule(l, n[a]) && (this.groupSizes[t]++, l++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            i = o + r,
            a = o;
          a < i;
          a++
        )
          n += "".concat(this.tag.getRule(a)).concat(Vc);
        return n;
      }),
      e
    );
  })(),
  ya = new Map(),
  qa = new Map(),
  wa = 1,
  Zi = function (e) {
    if (ya.has(e)) return ya.get(e);
    for (; qa.has(wa); ) wa++;
    var t = wa++;
    return ya.set(e, t), qa.set(t, e), t;
  },
  mw = function (e, t) {
    (wa = t + 1), ya.set(e, t), qa.set(t, e);
  },
  gw = "style[".concat(ro, "][").concat(u1, '="').concat(Nl, '"]'),
  vw = new RegExp(
    "^".concat(ro, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  yw = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  ww = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Vc),
        o = [],
        i = 0,
        a = r.length;
      i < a;
      i++
    ) {
      var l = r[i].trim();
      if (l) {
        var s = l.match(vw);
        if (s) {
          var u = 0 | parseInt(s[1], 10),
            c = s[2];
          u !== 0 && (mw(c, u), yw(e, c, s[3]), e.getTag().insertRules(u, o)),
            (o.length = 0);
        } else o.push(l);
      }
    }
  };
function xw() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var v1 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (l) {
        var s = Array.from(l.querySelectorAll("style[".concat(ro, "]")));
        return s[s.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(ro, s1), r.setAttribute(u1, Nl);
    var a = xw();
    return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
  },
  Sw = (function () {
    function e(t) {
      (this.element = v1(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var a = r[o];
            if (a.ownerNode === n) return a;
          }
          throw Pi(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  Ew = (function () {
    function e(t) {
      (this.element = v1(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  kw = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Jf = Wc,
  Cw = { isServer: !Wc, useCSSOMInjection: !Z2 },
  y1 = (function () {
    function e(t, n, r) {
      t === void 0 && (t = oo), n === void 0 && (n = {});
      var o = this;
      (this.options = st(st({}, Cw), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Wc &&
          Jf &&
          ((Jf = !1),
          (function (i) {
            for (
              var a = document.querySelectorAll(gw), l = 0, s = a.length;
              l < s;
              l++
            ) {
              var u = a[l];
              u &&
                u.getAttribute(ro) !== s1 &&
                (ww(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        Qc(this, function () {
          return (function (i) {
            for (
              var a = i.getTag(),
                l = a.length,
                s = "",
                u = function (d) {
                  var g = (function (p) {
                    return qa.get(p);
                  })(d);
                  if (g === void 0) return "continue";
                  var x = i.names.get(g),
                    y = a.getGroup(d);
                  if (x === void 0 || y.length === 0) return "continue";
                  var v = ""
                      .concat(ro, ".g")
                      .concat(d, '[id="')
                      .concat(g, '"]'),
                    S = "";
                  x !== void 0 &&
                    x.forEach(function (p) {
                      p.length > 0 && (S += "".concat(p, ","));
                    }),
                    (s += ""
                      .concat(y)
                      .concat(v, '{content:"')
                      .concat(S, '"}')
                      .concat(Vc));
                },
                c = 0;
              c < l;
              c++
            )
              u(c);
            return s;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return Zi(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            st(st({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new kw(o) : r ? new Sw(o) : new Ew(o);
            })(this.options)),
            new hw(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Zi(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Zi(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Zi(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  jw = /&/g,
  Nw = /^\s*\/\/.*$/gm;
function w1(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = w1(n.children, t)),
      n
    );
  });
}
function Pw(e) {
  var t,
    n,
    r,
    o = e === void 0 ? oo : e,
    i = o.options,
    a = i === void 0 ? oo : i,
    l = o.plugins,
    s = l === void 0 ? Pl : l,
    u = function (g, x, y) {
      return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : g;
    },
    c = s.slice();
  c.push(function (g) {
    g.type === El &&
      g.value.includes("&") &&
      (g.props[0] = g.props[0].replace(jw, n).replace(r, u));
  }),
    a.prefix && c.push(q2),
    c.push(Y2);
  var d = function (g, x, y, v) {
    x === void 0 && (x = ""),
      y === void 0 && (y = ""),
      v === void 0 && (v = "&"),
      (t = v),
      (n = x),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var S = g.replace(Nw, ""),
      p = K2(y || x ? "".concat(y, " ").concat(x, " { ").concat(S, " }") : S);
    a.namespace && (p = w1(p, a.namespace));
    var f = [];
    return (
      Xa(
        p,
        G2(
          c.concat(
            X2(function (m) {
              return f.push(m);
            })
          )
        )
      ),
      f
    );
  };
  return (
    (d.hash = s.length
      ? s
          .reduce(function (g, x) {
            return x.name || Pi(15), Fr(g, x.name);
          }, d1)
          .toString()
      : ""),
    d
  );
}
var Rw = new y1(),
  Tu = Pw(),
  x1 = G.createContext({
    shouldForwardProp: void 0,
    styleSheet: Rw,
    stylis: Tu,
  });
x1.Consumer;
G.createContext(void 0);
function Zf() {
  return C.useContext(x1);
}
var Tw = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Tu);
        var a = r.name + i.hash;
        o.hasNameForId(r.id, a) ||
          o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Qc(this, function () {
          throw Pi(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Tu), this.name + t.hash;
      }),
      e
    );
  })(),
  _w = function (e) {
    return e >= "A" && e <= "Z";
  };
function ep(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    _w(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var S1 = function (e) {
    return e == null || e === !1 || e === "";
  },
  E1 = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !S1(i) &&
        ((Array.isArray(i) && i.isCss) || io(i)
          ? r.push("".concat(ep(o), ":"), i, ";")
          : hi(i)
          ? r.push.apply(r, Ga(Ga(["".concat(o, " {")], E1(i), !1), ["}"], !1))
          : r.push(
              ""
                .concat(ep(o), ": ")
                .concat(
                  ((t = o),
                  (n = i) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in J2 ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function sr(e, t, n, r) {
  if (S1(e)) return [];
  if (Kc(e)) return [".".concat(e.styledComponentId)];
  if (io(e)) {
    if (!io((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return sr(o, t, n, r);
  }
  var i;
  return e instanceof Tw
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : hi(e)
    ? E1(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Pl,
        e.map(function (a) {
          return sr(a, t, n, r);
        })
      )
    : [e.toString()];
}
function Lw(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (io(n) && !Kc(n)) return !1;
  }
  return !0;
}
var Ow = f1(Nl),
  Dw = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && Lw(t)),
        (this.componentId = n),
        (this.baseHash = Fr(Ow, n)),
        (this.baseStyle = r),
        y1.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = or(o, this.staticRulesId);
          else {
            var i = qf(sr(this.rules, t, n, r)),
              a = Pu(Fr(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, a)) {
              var l = r(i, ".".concat(a), void 0, this.componentId);
              n.insertRules(this.componentId, a, l);
            }
            (o = or(o, a)), (this.staticRulesId = a);
          }
        else {
          for (
            var s = Fr(this.baseHash, r.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var d = this.rules[c];
            if (typeof d == "string") u += d;
            else if (d) {
              var g = qf(sr(d, t, n, r));
              (s = Fr(s, g + c)), (u += g);
            }
          }
          if (u) {
            var x = Pu(s >>> 0);
            n.hasNameForId(this.componentId, x) ||
              n.insertRules(
                this.componentId,
                x,
                r(u, ".".concat(x), void 0, this.componentId)
              ),
              (o = or(o, x));
          }
        }
        return o;
      }),
      e
    );
  })(),
  k1 = G.createContext(void 0);
k1.Consumer;
var xs = {};
function bw(e, t, n) {
  var r = Kc(e),
    o = e,
    i = !ws(e),
    a = t.attrs,
    l = a === void 0 ? Pl : a,
    s = t.componentId,
    u =
      s === void 0
        ? (function (E, T) {
            var w = typeof E != "string" ? "sc" : Kf(E);
            xs[w] = (xs[w] || 0) + 1;
            var j = "".concat(w, "-").concat(ow(Nl + w + xs[w]));
            return T ? "".concat(T, "-").concat(j) : j;
          })(t.displayName, t.parentComponentId)
        : s,
    c = t.displayName,
    d =
      c === void 0
        ? (function (E) {
            return ws(E) ? "styled.".concat(E) : "Styled(".concat(iw(E), ")");
          })(e)
        : c,
    g =
      t.displayName && t.componentId
        ? "".concat(Kf(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    x = r && o.attrs ? o.attrs.concat(l).filter(Boolean) : l,
    y = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var v = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var S = t.shouldForwardProp;
      y = function (E, T) {
        return v(E, T) && S(E, T);
      };
    } else y = v;
  }
  var p = new Dw(n, g, r ? o.componentStyle : void 0);
  function f(E, T) {
    return (function (w, j, P) {
      var O = w.attrs,
        z = w.componentStyle,
        H = w.defaultProps,
        ie = w.foldedComponentIds,
        le = w.styledComponentId,
        xe = w.target,
        qe = G.useContext(k1),
        Je = Zf(),
        q = w.shouldForwardProp || Je.shouldForwardProp,
        b = ew(j, qe, H) || oo,
        A = (function (de, se, De) {
          for (
            var qt,
              Jt = st(st({}, se), { className: void 0, theme: De }),
              ho = 0;
            ho < de.length;
            ho += 1
          ) {
            var Me = io((qt = de[ho])) ? qt(Jt) : qt;
            for (var ot in Me)
              Jt[ot] =
                ot === "className"
                  ? or(Jt[ot], Me[ot])
                  : ot === "style"
                  ? st(st({}, Jt[ot]), Me[ot])
                  : Me[ot];
          }
          return (
            se.className && (Jt.className = or(Jt.className, se.className)), Jt
          );
        })(O, j, b),
        I = A.as || xe,
        W = {};
      for (var K in A)
        A[K] === void 0 ||
          K[0] === "$" ||
          K === "as" ||
          (K === "theme" && A.theme === b) ||
          (K === "forwardedAs"
            ? (W.as = A.forwardedAs)
            : (q && !q(K, I)) || (W[K] = A[K]));
      var fe = (function (de, se) {
          var De = Zf(),
            qt = de.generateAndInjectStyles(se, De.styleSheet, De.stylis);
          return qt;
        })(z, A),
        ne = or(ie, le);
      return (
        fe && (ne += " " + fe),
        A.className && (ne += " " + A.className),
        (W[ws(I) && !c1.has(I) ? "class" : "className"] = ne),
        (W.ref = P),
        C.createElement(I, W)
      );
    })(m, E, T);
  }
  f.displayName = d;
  var m = G.forwardRef(f);
  return (
    (m.attrs = x),
    (m.componentStyle = p),
    (m.displayName = d),
    (m.shouldForwardProp = y),
    (m.foldedComponentIds = r
      ? or(o.foldedComponentIds, o.styledComponentId)
      : ""),
    (m.styledComponentId = g),
    (m.target = r ? o.target : e),
    Object.defineProperty(m, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (E) {
        this._foldedDefaultProps = r
          ? (function (T) {
              for (var w = [], j = 1; j < arguments.length; j++)
                w[j - 1] = arguments[j];
              for (var P = 0, O = w; P < O.length; P++) Ru(T, O[P], !0);
              return T;
            })({}, o.defaultProps, E)
          : E;
      },
    }),
    Qc(m, function () {
      return ".".concat(m.styledComponentId);
    }),
    i &&
      g1(m, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    m
  );
}
function tp(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var np = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function zw(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (io(e) || hi(e)) return np(sr(tp(Pl, Ga([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? sr(r)
    : np(sr(tp(r, t)));
}
function _u(e, t, n) {
  if ((n === void 0 && (n = oo), !t)) throw Pi(1, t);
  var r = function (o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(t, n, zw.apply(void 0, Ga([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return _u(
        e,
        t,
        st(st({}, n), {
          attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (o) {
      return _u(e, t, st(st({}, n), o));
    }),
    r
  );
}
var C1 = function (e) {
    return _u(bw, e);
  },
  me = C1;
c1.forEach(function (e) {
  me[e] = C1(e);
});
const Mw = me.div`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: var(--fluid-width);

    ${(e) =>
      e.pathLength !== 24
        ? `max-width: var(--max-width);
    margin: 0 auto;
    padding: 1rem 0;`
        : "width: 100%;"}
  }
  @media screen and (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      ${(e) => e.pathLength !== 24 && "width: 90%;"}
    }
  }
`;
function j1(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Aw } = Object.prototype,
  { getPrototypeOf: Yc } = Object,
  Rl = ((e) => (t) => {
    const n = Aw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Xt = (e) => ((e = e.toLowerCase()), (t) => Rl(t) === e),
  Tl = (e) => (t) => typeof t === e,
  { isArray: po } = Array,
  mi = Tl("undefined");
function Fw(e) {
  return (
    e !== null &&
    !mi(e) &&
    e.constructor !== null &&
    !mi(e.constructor) &&
    Pt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const N1 = Xt("ArrayBuffer");
function Iw(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && N1(e.buffer)),
    t
  );
}
const $w = Tl("string"),
  Pt = Tl("function"),
  P1 = Tl("number"),
  _l = (e) => e !== null && typeof e == "object",
  Uw = (e) => e === !0 || e === !1,
  xa = (e) => {
    if (Rl(e) !== "object") return !1;
    const t = Yc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Bw = Xt("Date"),
  Hw = Xt("File"),
  Vw = Xt("Blob"),
  Ww = Xt("FileList"),
  Kw = (e) => _l(e) && Pt(e.pipe),
  Qw = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Pt(e.append) &&
          ((t = Rl(e)) === "formdata" ||
            (t === "object" &&
              Pt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Yw = Xt("URLSearchParams"),
  Gw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ri(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), po(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let l;
    for (r = 0; r < a; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}
function R1(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const T1 =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  _1 = (e) => !mi(e) && e !== T1;
function Lu() {
  const { caseless: e } = (_1(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && R1(t, o)) || o;
      xa(t[i]) && xa(r)
        ? (t[i] = Lu(t[i], r))
        : xa(r)
        ? (t[i] = Lu({}, r))
        : po(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ri(arguments[r], n);
  return t;
}
const Xw = (e, t, n, { allOwnKeys: r } = {}) => (
    Ri(
      t,
      (o, i) => {
        n && Pt(o) ? (e[i] = j1(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  qw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Jw = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Zw = (e, t, n, r) => {
    let o, i, a;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (a = o[i]), (!r || r(a, e, t)) && !l[a] && ((t[a] = e[a]), (l[a] = !0));
      e = n !== !1 && Yc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ex = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  tx = (e) => {
    if (!e) return null;
    if (po(e)) return e;
    let t = e.length;
    if (!P1(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  nx = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Yc(Uint8Array)),
  rx = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  ox = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  ix = Xt("HTMLFormElement"),
  ax = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  rp = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  lx = Xt("RegExp"),
  L1 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ri(n, (o, i) => {
      let a;
      (a = t(o, i, e)) !== !1 && (r[i] = a || o);
    }),
      Object.defineProperties(e, r);
  },
  sx = (e) => {
    L1(e, (t, n) => {
      if (Pt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Pt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  ux = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return po(e) ? r(e) : r(String(e).split(t)), n;
  },
  cx = () => {},
  dx = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ss = "abcdefghijklmnopqrstuvwxyz",
  op = "0123456789",
  O1 = { DIGIT: op, ALPHA: Ss, ALPHA_DIGIT: Ss + Ss.toUpperCase() + op },
  fx = (e = 16, t = O1.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function px(e) {
  return !!(
    e &&
    Pt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const hx = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (_l(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = po(r) ? [] : {};
            return (
              Ri(r, (a, l) => {
                const s = n(a, o + 1);
                !mi(s) && (i[l] = s);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  mx = Xt("AsyncFunction"),
  gx = (e) => e && (_l(e) || Pt(e)) && Pt(e.then) && Pt(e.catch),
  _ = {
    isArray: po,
    isArrayBuffer: N1,
    isBuffer: Fw,
    isFormData: Qw,
    isArrayBufferView: Iw,
    isString: $w,
    isNumber: P1,
    isBoolean: Uw,
    isObject: _l,
    isPlainObject: xa,
    isUndefined: mi,
    isDate: Bw,
    isFile: Hw,
    isBlob: Vw,
    isRegExp: lx,
    isFunction: Pt,
    isStream: Kw,
    isURLSearchParams: Yw,
    isTypedArray: nx,
    isFileList: Ww,
    forEach: Ri,
    merge: Lu,
    extend: Xw,
    trim: Gw,
    stripBOM: qw,
    inherits: Jw,
    toFlatObject: Zw,
    kindOf: Rl,
    kindOfTest: Xt,
    endsWith: ex,
    toArray: tx,
    forEachEntry: rx,
    matchAll: ox,
    isHTMLForm: ix,
    hasOwnProperty: rp,
    hasOwnProp: rp,
    reduceDescriptors: L1,
    freezeMethods: sx,
    toObjectSet: ux,
    toCamelCase: ax,
    noop: cx,
    toFiniteNumber: dx,
    findKey: R1,
    global: T1,
    isContextDefined: _1,
    ALPHABET: O1,
    generateString: fx,
    isSpecCompliantForm: px,
    toJSONObject: hx,
    isAsyncFn: mx,
    isThenable: gx,
  };
function te(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
_.inherits(te, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: _.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const D1 = te.prototype,
  b1 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  b1[e] = { value: e };
});
Object.defineProperties(te, b1);
Object.defineProperty(D1, "isAxiosError", { value: !0 });
te.from = (e, t, n, r, o, i) => {
  const a = Object.create(D1);
  return (
    _.toFlatObject(
      e,
      a,
      function (s) {
        return s !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    te.call(a, e.message, t, n, r, o),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
const vx = null;
function Ou(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function z1(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ip(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = z1(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function yx(e) {
  return _.isArray(e) && !e.some(Ou);
}
const wx = _.toFlatObject(_, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ll(e, t, n) {
  if (!_.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = _.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, S) {
        return !_.isUndefined(S[v]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    a = n.indexes,
    s = (n.Blob || (typeof Blob < "u" && Blob)) && _.isSpecCompliantForm(t);
  if (!_.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (_.isDate(y)) return y.toISOString();
    if (!s && _.isBlob(y))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(y) || _.isTypedArray(y)
      ? s && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, v, S) {
    let p = y;
    if (y && !S && typeof y == "object") {
      if (_.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (_.isArray(y) && yx(y)) ||
        ((_.isFileList(y) || _.endsWith(v, "[]")) && (p = _.toArray(y)))
      )
        return (
          (v = z1(v)),
          p.forEach(function (m, E) {
            !(_.isUndefined(m) || m === null) &&
              t.append(
                a === !0 ? ip([v], E, i) : a === null ? v : v + "[]",
                u(m)
              );
          }),
          !1
        );
    }
    return Ou(y) ? !0 : (t.append(ip(S, v, i), u(y)), !1);
  }
  const d = [],
    g = Object.assign(wx, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Ou,
    });
  function x(y, v) {
    if (!_.isUndefined(y)) {
      if (d.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(y),
        _.forEach(y, function (p, f) {
          (!(_.isUndefined(p) || p === null) &&
            o.call(t, p, _.isString(f) ? f.trim() : f, v, g)) === !0 &&
            x(p, v ? v.concat(f) : [f]);
        }),
        d.pop();
    }
  }
  if (!_.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function ap(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Gc(e, t) {
  (this._pairs = []), e && Ll(e, this, t);
}
const M1 = Gc.prototype;
M1.append = function (t, n) {
  this._pairs.push([t, n]);
};
M1.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, ap);
      }
    : ap;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function xx(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function A1(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || xx,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = _.isURLSearchParams(t) ? t.toString() : new Gc(t, n).toString(r)),
    i)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class lp {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    _.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const F1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Sx = typeof URLSearchParams < "u" ? URLSearchParams : Gc,
  Ex = typeof FormData < "u" ? FormData : null,
  kx = typeof Blob < "u" ? Blob : null,
  Cx = {
    isBrowser: !0,
    classes: { URLSearchParams: Sx, FormData: Ex, Blob: kx },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  I1 = typeof window < "u" && typeof document < "u",
  jx = ((e) => I1 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Nx =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Px = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: I1,
        hasStandardBrowserEnv: jx,
        hasStandardBrowserWebWorkerEnv: Nx,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Wt = { ...Px, ...Cx };
function Rx(e, t) {
  return Ll(
    e,
    new Wt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return Wt.isNode && _.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Tx(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function _x(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function $1(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a),
      s = i >= n.length;
    return (
      (a = !a && _.isArray(o) ? o.length : a),
      s
        ? (_.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !l)
        : ((!o[a] || !_.isObject(o[a])) && (o[a] = []),
          t(n, r, o[a], i) && _.isArray(o[a]) && (o[a] = _x(o[a])),
          !l)
    );
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return (
      _.forEachEntry(e, (r, o) => {
        t(Tx(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function Lx(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Xc = {
  transitional: F1,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = _.isObject(t);
      if ((i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t)))
        return o ? JSON.stringify($1(t)) : t;
      if (
        _.isArrayBuffer(t) ||
        _.isBuffer(t) ||
        _.isStream(t) ||
        _.isFile(t) ||
        _.isBlob(t)
      )
        return t;
      if (_.isArrayBufferView(t)) return t.buffer;
      if (_.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Rx(t, this.formSerializer).toString();
        if ((l = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return Ll(
            l ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), Lx(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Xc.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && _.isString(t) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError"
              ? te.from(l, te.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Wt.classes.FormData, Blob: Wt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Xc.headers[e] = {};
});
const qc = Xc,
  Ox = _.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Dx = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (o = a.indexOf(":")),
              (n = a.substring(0, o).trim().toLowerCase()),
              (r = a.substring(o + 1).trim()),
              !(!n || (t[n] && Ox[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  sp = Symbol("internals");
function Lo(e) {
  return e && String(e).trim().toLowerCase();
}
function Sa(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(Sa) : String(e);
}
function bx(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const zx = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Es(e, t, n, r, o) {
  if (_.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!_.isString(t))) {
    if (_.isString(r)) return t.indexOf(r) !== -1;
    if (_.isRegExp(r)) return r.test(t);
  }
}
function Mx(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ax(e, t) {
  const n = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0,
    });
  });
}
class Ol {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(l, s, u) {
      const c = Lo(s);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = _.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || s] = Sa(l));
    }
    const a = (l, s) => _.forEach(l, (u, c) => i(u, c, s));
    return (
      _.isPlainObject(t) || t instanceof this.constructor
        ? a(t, n)
        : _.isString(t) && (t = t.trim()) && !zx(t)
        ? a(Dx(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Lo(t)), t)) {
      const r = _.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return bx(o);
        if (_.isFunction(n)) return n.call(this, o, r);
        if (_.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Lo(t)), t)) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Es(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (((a = Lo(a)), a)) {
        const l = _.findKey(r, a);
        l && (!n || Es(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }
    return _.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Es(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      _.forEach(this, (o, i) => {
        const a = _.findKey(r, i);
        if (a) {
          (n[a] = Sa(o)), delete n[i];
          return;
        }
        const l = t ? Mx(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = Sa(o)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      _.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && _.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[sp] = this[sp] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(a) {
      const l = Lo(a);
      r[l] || (Ax(o, a), (r[l] = !0));
    }
    return _.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Ol.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
_.reduceDescriptors(Ol.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
_.freezeMethods(Ol);
const sn = Ol;
function ks(e, t) {
  const n = this || qc,
    r = t || n,
    o = sn.from(r.headers);
  let i = r.data;
  return (
    _.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function U1(e) {
  return !!(e && e.__CANCEL__);
}
function Ti(e, t, n) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
_.inherits(Ti, te, { __CANCEL__: !0 });
function Fx(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new te(
          "Request failed with status code " + n.status,
          [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Ix = Wt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const a = [e + "=" + encodeURIComponent(t)];
        _.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
          _.isString(r) && a.push("path=" + r),
          _.isString(o) && a.push("domain=" + o),
          i === !0 && a.push("secure"),
          (document.cookie = a.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function $x(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ux(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function B1(e, t) {
  return e && !$x(t) ? Ux(e, t) : t;
}
const Bx = Wt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let a = i;
        return (
          t && (n.setAttribute("href", a), (a = n.href)),
          n.setAttribute("href", a),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (a) {
          const l = _.isString(a) ? o(a) : a;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Hx(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Vx(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        c = r[i];
      a || (a = u), (n[o] = s), (r[o] = u);
      let d = i,
        g = 0;
      for (; d !== o; ) (g += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - a < t)) return;
      const x = c && u - c;
      return x ? Math.round((g * 1e3) / x) : void 0;
    }
  );
}
function up(e, t) {
  let n = 0;
  const r = Vx(50, 250);
  return (o) => {
    const i = o.loaded,
      a = o.lengthComputable ? o.total : void 0,
      l = i - n,
      s = r(l),
      u = i <= a;
    n = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: s || void 0,
      estimated: s && a && u ? (a - i) / s : void 0,
      event: o,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const Wx = typeof XMLHttpRequest < "u",
  Kx =
    Wx &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = sn.from(e.headers).normalize();
        let { responseType: a, withXSRFToken: l } = e,
          s;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener("abort", s);
        }
        let c;
        if (_.isFormData(o)) {
          if (Wt.hasStandardBrowserEnv || Wt.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((c = i.getContentType()) !== !1) {
            const [v, ...S] = c
              ? c
                  .split(";")
                  .map((p) => p.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([v || "multipart/form-data", ...S].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "",
            S = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(v + ":" + S));
        }
        const g = B1(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), A1(g, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function x() {
          if (!d) return;
          const v = sn.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            p = {
              data:
                !a || a === "text" || a === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: v,
              config: e,
              request: d,
            };
          Fx(
            function (m) {
              n(m), u();
            },
            function (m) {
              r(m), u();
            },
            p
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = x)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(x);
              }),
          (d.onabort = function () {
            d &&
              (r(new te("Request aborted", te.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new te("Network Error", te.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let S = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const p = e.transitional || F1;
            e.timeoutErrorMessage && (S = e.timeoutErrorMessage),
              r(
                new te(
                  S,
                  p.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
                  e,
                  d
                )
              ),
              (d = null);
          }),
          Wt.hasStandardBrowserEnv &&
            (l && _.isFunction(l) && (l = l(e)), l || (l !== !1 && Bx(g))))
        ) {
          const v =
            e.xsrfHeaderName && e.xsrfCookieName && Ix.read(e.xsrfCookieName);
          v && i.set(e.xsrfHeaderName, v);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in d &&
            _.forEach(i.toJSON(), function (S, p) {
              d.setRequestHeader(p, S);
            }),
          _.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          a && a !== "json" && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            d.addEventListener("progress", up(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", up(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (v) => {
              d &&
                (r(!v || v.type ? new Ti(null, e, d) : v),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
        const y = Hx(g);
        if (y && Wt.protocols.indexOf(y) === -1) {
          r(new te("Unsupported protocol " + y + ":", te.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(o || null);
      });
    },
  Du = { http: vx, xhr: Kx };
_.forEach(Du, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const cp = (e) => `- ${e}`,
  Qx = (e) => _.isFunction(e) || e === null || e === !1,
  H1 = {
    getAdapter: (e) => {
      e = _.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let a;
        if (
          ((r = n),
          !Qx(n) && ((r = Du[(a = String(n)).toLowerCase()]), r === void 0))
        )
          throw new te(`Unknown adapter '${a}'`);
        if (r) break;
        o[a || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([l, s]) =>
            `adapter ${l} ` +
            (s === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let a = t
          ? i.length > 1
            ? `since :
` +
              i.map(cp).join(`
`)
            : " " + cp(i[0])
          : "as no adapter specified";
        throw new te(
          "There is no suitable adapter to dispatch the request " + a,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Du,
  };
function Cs(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ti(null, e);
}
function dp(e) {
  return (
    Cs(e),
    (e.headers = sn.from(e.headers)),
    (e.data = ks.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    H1.getAdapter(e.adapter || qc.adapter)(e).then(
      function (r) {
        return (
          Cs(e),
          (r.data = ks.call(e, e.transformResponse, r)),
          (r.headers = sn.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          U1(r) ||
            (Cs(e),
            r &&
              r.response &&
              ((r.response.data = ks.call(e, e.transformResponse, r.response)),
              (r.response.headers = sn.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const fp = (e) => (e instanceof sn ? { ...e } : e);
function ao(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return _.isPlainObject(u) && _.isPlainObject(c)
      ? _.merge.call({ caseless: d }, u, c)
      : _.isPlainObject(c)
      ? _.merge({}, c)
      : _.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, d) {
    if (_.isUndefined(c)) {
      if (!_.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!_.isUndefined(c)) return r(void 0, c);
  }
  function a(u, c) {
    if (_.isUndefined(c)) {
      if (!_.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, c) => o(fp(u), fp(c), !0),
  };
  return (
    _.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = s[c] || o,
        g = d(e[c], t[c], c);
      (_.isUndefined(g) && d !== l) || (n[c] = g);
    }),
    n
  );
}
const V1 = "1.6.8",
  Jc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Jc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const pp = {};
Jc.transitional = function (t, n, r) {
  function o(i, a) {
    return (
      "[Axios v" +
      V1 +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (i, a, l) => {
    if (t === !1)
      throw new te(
        o(a, " has been removed" + (n ? " in " + n : "")),
        te.ERR_DEPRECATED
      );
    return (
      n &&
        !pp[a] &&
        ((pp[a] = !0),
        console.warn(
          o(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, a, l) : !0
    );
  };
};
function Yx(e, t, n) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      a = t[i];
    if (a) {
      const l = e[i],
        s = l === void 0 || a(l, i, e);
      if (s !== !0)
        throw new te("option " + i + " must be " + s, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new te("Unknown option " + i, te.ERR_BAD_OPTION);
  }
}
const bu = { assertOptions: Yx, validators: Jc },
  En = bu.validators;
class Ja {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new lp(), response: new lp() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = ao(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      bu.assertOptions(
        r,
        {
          silentJSONParsing: En.transitional(En.boolean),
          forcedJSONParsing: En.transitional(En.boolean),
          clarifyTimeoutError: En.transitional(En.boolean),
        },
        !1
      ),
      o != null &&
        (_.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : bu.assertOptions(
              o,
              { encode: En.function, serialize: En.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a = i && _.merge(i.common, i[n.method]);
    i &&
      _.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete i[y];
        }
      ),
      (n.headers = sn.concat(a, i));
    const l = [];
    let s = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((s = s && v.synchronous), l.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      d = 0,
      g;
    if (!s) {
      const y = [dp.bind(this), void 0];
      for (
        y.unshift.apply(y, l),
          y.push.apply(y, u),
          g = y.length,
          c = Promise.resolve(n);
        d < g;

      )
        c = c.then(y[d++], y[d++]);
      return c;
    }
    g = l.length;
    let x = n;
    for (d = 0; d < g; ) {
      const y = l[d++],
        v = l[d++];
      try {
        x = y(x);
      } catch (S) {
        v.call(this, S);
        break;
      }
    }
    try {
      c = dp.call(this, x);
    } catch (y) {
      return Promise.reject(y);
    }
    for (d = 0, g = u.length; d < g; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = ao(this.defaults, t);
    const n = B1(t.baseURL, t.url);
    return A1(n, t.params, t.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function (t) {
  Ja.prototype[t] = function (n, r) {
    return this.request(
      ao(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
_.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, a, l) {
      return this.request(
        ao(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (Ja.prototype[t] = n()), (Ja.prototype[t + "Form"] = n(!0));
});
const Ea = Ja;
class Zc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const a = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, l) {
        r.reason || ((r.reason = new Ti(i, a, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Zc(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const Gx = Zc;
function Xx(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function qx(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const zu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(zu).forEach(([e, t]) => {
  zu[t] = e;
});
const Jx = zu;
function W1(e) {
  const t = new Ea(e),
    n = j1(Ea.prototype.request, t);
  return (
    _.extend(n, Ea.prototype, t, { allOwnKeys: !0 }),
    _.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return W1(ao(e, o));
    }),
    n
  );
}
const Oe = W1(qc);
Oe.Axios = Ea;
Oe.CanceledError = Ti;
Oe.CancelToken = Gx;
Oe.isCancel = U1;
Oe.VERSION = V1;
Oe.toFormData = Ll;
Oe.AxiosError = te;
Oe.Cancel = Oe.CanceledError;
Oe.all = function (t) {
  return Promise.all(t);
};
Oe.spread = Xx;
Oe.isAxiosError = qx;
Oe.mergeConfig = ao;
Oe.AxiosHeaders = sn;
Oe.formToJSON = (e) => $1(_.isHTMLForm(e) ? new FormData(e) : e);
Oe.getAdapter = H1.getAdapter;
Oe.HttpStatusCode = Jx;
Oe.default = Oe;
const Ke = Oe.create({ baseURL: "/api/v1" });
function K1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = K1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Ln() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = K1(e)) && (r && (r += " "), (r += t));
  return r;
}
const gi = (e) => typeof e == "number" && !isNaN(e),
  ur = (e) => typeof e == "string",
  gt = (e) => typeof e == "function",
  ka = (e) => (ur(e) || gt(e) ? e : null),
  Mu = (e) => C.isValidElement(e) || ur(e) || gt(e) || gi(e);
function Zx(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: o } = e;
  requestAnimationFrame(() => {
    (o.minHeight = "initial"),
      (o.height = r + "px"),
      (o.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (o.height = "0"), (o.padding = "0"), (o.margin = "0"), setTimeout(t, n);
      });
  });
}
function Dl(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: o = !0,
    collapseDuration: i = 300,
  } = e;
  return function (a) {
    let {
      children: l,
      position: s,
      preventExitTransition: u,
      done: c,
      nodeRef: d,
      isIn: g,
      playToast: x,
    } = a;
    const y = r ? `${t}--${s}` : t,
      v = r ? `${n}--${s}` : n,
      S = C.useRef(0);
    return (
      C.useLayoutEffect(() => {
        const p = d.current,
          f = y.split(" "),
          m = (E) => {
            E.target === d.current &&
              (x(),
              p.removeEventListener("animationend", m),
              p.removeEventListener("animationcancel", m),
              S.current === 0 &&
                E.type !== "animationcancel" &&
                p.classList.remove(...f));
          };
        p.classList.add(...f),
          p.addEventListener("animationend", m),
          p.addEventListener("animationcancel", m);
      }, []),
      C.useEffect(() => {
        const p = d.current,
          f = () => {
            p.removeEventListener("animationend", f), o ? Zx(p, c, i) : c();
          };
        g ||
          (u
            ? f()
            : ((S.current = 1),
              (p.className += ` ${v}`),
              p.addEventListener("animationend", f)));
      }, [g]),
      G.createElement(G.Fragment, null, l)
    );
  };
}
function hp(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const et = new Map();
let vi = [];
const Au = new Set(),
  e4 = (e) => Au.forEach((t) => t(e)),
  Q1 = () => et.size > 0;
function Y1(e, t) {
  var n;
  if (t) return !((n = et.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return (
    et.forEach((o) => {
      o.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function G1(e, t) {
  Mu(e) &&
    (Q1() || vi.push({ content: e, options: t }),
    et.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function mp(e, t) {
  et.forEach((n) => {
    t != null && t != null && t.containerId
      ? (t == null ? void 0 : t.containerId) === n.id &&
        n.toggle(e, t == null ? void 0 : t.id)
      : n.toggle(e, t == null ? void 0 : t.id);
  });
}
function t4(e) {
  const {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = C.useRef(
    (function (i) {
      const a = i.containerId || 1;
      return {
        subscribe(l) {
          const s = (function (c, d, g) {
            let x = 1,
              y = 0,
              v = [],
              S = [],
              p = [],
              f = d;
            const m = new Map(),
              E = new Set(),
              T = () => {
                (p = Array.from(m.values())), E.forEach((P) => P());
              },
              w = (P) => {
                (S = P == null ? [] : S.filter((O) => O !== P)), T();
              },
              j = (P) => {
                const {
                    toastId: O,
                    onOpen: z,
                    updateId: H,
                    children: ie,
                  } = P.props,
                  le = H == null;
                P.staleId && m.delete(P.staleId),
                  m.set(O, P),
                  (S = [...S, P.props.toastId].filter(
                    (xe) => xe !== P.staleId
                  )),
                  T(),
                  g(hp(P, le ? "added" : "updated")),
                  le && gt(z) && z(C.isValidElement(ie) && ie.props);
              };
            return {
              id: c,
              props: f,
              observe: (P) => (E.add(P), () => E.delete(P)),
              toggle: (P, O) => {
                m.forEach((z) => {
                  (O != null && O !== z.props.toastId) ||
                    (gt(z.toggle) && z.toggle(P));
                });
              },
              removeToast: w,
              toasts: m,
              clearQueue: () => {
                (y -= v.length), (v = []);
              },
              buildToast: (P, O) => {
                if (
                  ((K) => {
                    let { containerId: fe, toastId: ne, updateId: de } = K;
                    const se = fe ? fe !== c : c !== 1,
                      De = m.has(ne) && de == null;
                    return se || De;
                  })(O)
                )
                  return;
                const {
                    toastId: z,
                    updateId: H,
                    data: ie,
                    staleId: le,
                    delay: xe,
                  } = O,
                  qe = () => {
                    w(z);
                  },
                  Je = H == null;
                Je && y++;
                const q = {
                  ...f,
                  style: f.toastStyle,
                  key: x++,
                  ...Object.fromEntries(
                    Object.entries(O).filter((K) => {
                      let [fe, ne] = K;
                      return ne != null;
                    })
                  ),
                  toastId: z,
                  updateId: H,
                  data: ie,
                  closeToast: qe,
                  isIn: !1,
                  className: ka(O.className || f.toastClassName),
                  bodyClassName: ka(O.bodyClassName || f.bodyClassName),
                  progressClassName: ka(
                    O.progressClassName || f.progressClassName
                  ),
                  autoClose:
                    !O.isLoading &&
                    ((b = O.autoClose),
                    (A = f.autoClose),
                    b === !1 || (gi(b) && b > 0) ? b : A),
                  deleteToast() {
                    const K = m.get(z),
                      { onClose: fe, children: ne } = K.props;
                    gt(fe) && fe(C.isValidElement(ne) && ne.props),
                      g(hp(K, "removed")),
                      m.delete(z),
                      y--,
                      y < 0 && (y = 0),
                      v.length > 0 ? j(v.shift()) : T();
                  },
                };
                var b, A;
                (q.closeButton = f.closeButton),
                  O.closeButton === !1 || Mu(O.closeButton)
                    ? (q.closeButton = O.closeButton)
                    : O.closeButton === !0 &&
                      (q.closeButton = !Mu(f.closeButton) || f.closeButton);
                let I = P;
                C.isValidElement(P) && !ur(P.type)
                  ? (I = C.cloneElement(P, {
                      closeToast: qe,
                      toastProps: q,
                      data: ie,
                    }))
                  : gt(P) &&
                    (I = P({ closeToast: qe, toastProps: q, data: ie }));
                const W = { content: I, props: q, staleId: le };
                f.limit && f.limit > 0 && y > f.limit && Je
                  ? v.push(W)
                  : gi(xe)
                  ? setTimeout(() => {
                      j(W);
                    }, xe)
                  : j(W);
              },
              setProps(P) {
                f = P;
              },
              setToggle: (P, O) => {
                m.get(P).toggle = O;
              },
              isToastActive: (P) => S.some((O) => O === P),
              getSnapshot: () => (f.newestOnTop ? p.reverse() : p),
            };
          })(a, i, e4);
          et.set(a, s);
          const u = s.observe(l);
          return (
            vi.forEach((c) => G1(c.content, c.options)),
            (vi = []),
            () => {
              u(), et.delete(a);
            }
          );
        },
        setProps(l) {
          var s;
          (s = et.get(a)) == null || s.setProps(l);
        },
        getSnapshot() {
          var l;
          return (l = et.get(a)) == null ? void 0 : l.getSnapshot();
        },
      };
    })(e)
  ).current;
  r(e);
  const o = C.useSyncExternalStore(t, n, n);
  return {
    getToastToRender: function (i) {
      if (!o) return [];
      const a = new Map();
      return (
        o.forEach((l) => {
          const { position: s } = l.props;
          a.has(s) || a.set(s, []), a.get(s).push(l);
        }),
        Array.from(a, (l) => i(l[0], l[1]))
      );
    },
    isToastActive: Y1,
    count: o == null ? void 0 : o.length,
  };
}
function n4(e) {
  const [t, n] = C.useState(!1),
    [r, o] = C.useState(!1),
    i = C.useRef(null),
    a = C.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: l,
      pauseOnHover: s,
      closeToast: u,
      onClick: c,
      closeOnClick: d,
    } = e;
  var g, x;
  function y() {
    n(!0);
  }
  function v() {
    n(!1);
  }
  function S(m) {
    const E = i.current;
    a.canDrag &&
      E &&
      ((a.didMove = !0),
      t && v(),
      (a.delta =
        e.draggableDirection === "x"
          ? m.clientX - a.start
          : m.clientY - a.start),
      a.start !== m.clientX && (a.canCloseOnClick = !1),
      (E.style.transform = `translate3d(${
        e.draggableDirection === "x"
          ? `${a.delta}px, var(--y)`
          : `0, calc(${a.delta}px + var(--y))`
      },0)`),
      (E.style.opacity = "" + (1 - Math.abs(a.delta / a.removalDistance))));
  }
  function p() {
    document.removeEventListener("pointermove", S),
      document.removeEventListener("pointerup", p);
    const m = i.current;
    if (a.canDrag && a.didMove && m) {
      if (((a.canDrag = !1), Math.abs(a.delta) > a.removalDistance))
        return o(!0), e.closeToast(), void e.collapseAll();
      (m.style.transition = "transform 0.2s, opacity 0.2s"),
        m.style.removeProperty("transform"),
        m.style.removeProperty("opacity");
    }
  }
  (x = et.get(
    (g = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1
  )) == null || x.setToggle(g.id, g.fn),
    C.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || v(),
          window.addEventListener("focus", y),
          window.addEventListener("blur", v),
          () => {
            window.removeEventListener("focus", y),
              window.removeEventListener("blur", v);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const f = {
    onPointerDown: function (m) {
      if (e.draggable === !0 || e.draggable === m.pointerType) {
        (a.didMove = !1),
          document.addEventListener("pointermove", S),
          document.addEventListener("pointerup", p);
        const E = i.current;
        (a.canCloseOnClick = !0),
          (a.canDrag = !0),
          (E.style.transition = "none"),
          e.draggableDirection === "x"
            ? ((a.start = m.clientX),
              (a.removalDistance = E.offsetWidth * (e.draggablePercent / 100)))
            : ((a.start = m.clientY),
              (a.removalDistance =
                (E.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (m) {
      const {
        top: E,
        bottom: T,
        left: w,
        right: j,
      } = i.current.getBoundingClientRect();
      m.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      m.clientX >= w &&
      m.clientX <= j &&
      m.clientY >= E &&
      m.clientY <= T
        ? v()
        : y();
    },
  };
  return (
    l && s && ((f.onMouseEnter = v), e.stacked || (f.onMouseLeave = y)),
    d &&
      (f.onClick = (m) => {
        c && c(m), a.canCloseOnClick && u();
      }),
    {
      playToast: y,
      pauseToast: v,
      isRunning: t,
      preventExitTransition: r,
      toastRef: i,
      eventHandlers: f,
    }
  );
}
function r4(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: o = "default",
    hide: i,
    className: a,
    style: l,
    controlledProgress: s,
    progress: u,
    rtl: c,
    isIn: d,
    theme: g,
  } = e;
  const x = i || (s && u === 0),
    y = {
      ...l,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
    };
  s && (y.transform = `scaleX(${u})`);
  const v = Ln(
      "Toastify__progress-bar",
      s
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${g}`,
      `Toastify__progress-bar--${o}`,
      { "Toastify__progress-bar--rtl": c }
    ),
    S = gt(a) ? a({ rtl: c, type: o, defaultClassName: v }) : Ln(v, a),
    p = {
      [s && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        s && u < 1
          ? null
          : () => {
              d && r();
            },
    };
  return G.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": x },
    G.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${o}`,
    }),
    G.createElement("div", {
      role: "progressbar",
      "aria-hidden": x ? "true" : "false",
      "aria-label": "notification timer",
      className: S,
      style: y,
      ...p,
    })
  );
}
let o4 = 1;
const X1 = () => "" + o4++;
function i4(e) {
  return e && (ur(e.toastId) || gi(e.toastId)) ? e.toastId : X1();
}
function Yo(e, t) {
  return G1(e, t), t.toastId;
}
function Za(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: i4(t) };
}
function ea(e) {
  return (t, n) => Yo(t, Za(e, n));
}
function B(e, t) {
  return Yo(e, Za("default", t));
}
(B.loading = (e, t) =>
  Yo(
    e,
    Za("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (B.promise = function (e, t, n) {
    let r,
      { pending: o, error: i, success: a } = t;
    o && (r = ur(o) ? B.loading(o, n) : B.loading(o.render, { ...n, ...o }));
    const l = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      s = (c, d, g) => {
        if (d == null) return void B.dismiss(r);
        const x = { type: c, ...l, ...n, data: g },
          y = ur(d) ? { render: d } : d;
        return r ? B.update(r, { ...x, ...y }) : B(y.render, { ...x, ...y }), g;
      },
      u = gt(e) ? e() : e;
    return u.then((c) => s("success", a, c)).catch((c) => s("error", i, c)), u;
  }),
  (B.success = ea("success")),
  (B.info = ea("info")),
  (B.error = ea("error")),
  (B.warning = ea("warning")),
  (B.warn = B.warning),
  (B.dark = (e, t) => Yo(e, Za("default", { theme: "dark", ...t }))),
  (B.dismiss = function (e) {
    (function (t) {
      var n;
      if (Q1()) {
        if (t == null || ur((n = t)) || gi(n))
          et.forEach((r) => {
            r.removeToast(t);
          });
        else if (t && ("containerId" in t || "id" in t)) {
          const r = et.get(t.containerId);
          r
            ? r.removeToast(t.id)
            : et.forEach((o) => {
                o.removeToast(t.id);
              });
        }
      } else vi = vi.filter((r) => t != null && r.options.toastId !== t);
    })(e);
  }),
  (B.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      et.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  (B.isActive = Y1),
  (B.update = function (e, t) {
    t === void 0 && (t = {});
    const n = ((r, o) => {
      var i;
      let { containerId: a } = o;
      return (i = et.get(a || 1)) == null ? void 0 : i.toasts.get(r);
    })(e, t);
    if (n) {
      const { props: r, content: o } = n,
        i = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: X1() };
      i.toastId !== e && (i.staleId = e);
      const a = i.render || o;
      delete i.render, Yo(a, i);
    }
  }),
  (B.done = (e) => {
    B.update(e, { progress: 1 });
  }),
  (B.onChange = function (e) {
    return (
      Au.add(e),
      () => {
        Au.delete(e);
      }
    );
  }),
  (B.play = (e) => mp(!0, e)),
  (B.pause = (e) => mp(!1, e));
const a4 = typeof window < "u" ? C.useLayoutEffect : C.useEffect,
  ta = (e) => {
    let { theme: t, type: n, isLoading: r, ...o } = e;
    return G.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...o,
    });
  },
  js = {
    info: function (e) {
      return G.createElement(
        ta,
        { ...e },
        G.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return G.createElement(
        ta,
        { ...e },
        G.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return G.createElement(
        ta,
        { ...e },
        G.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return G.createElement(
        ta,
        { ...e },
        G.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return G.createElement("div", { className: "Toastify__spinner" });
    },
  },
  l4 = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: o,
        playToast: i,
      } = n4(e),
      {
        closeButton: a,
        children: l,
        autoClose: s,
        onClick: u,
        type: c,
        hideProgressBar: d,
        closeToast: g,
        transition: x,
        position: y,
        className: v,
        style: S,
        bodyClassName: p,
        bodyStyle: f,
        progressClassName: m,
        progressStyle: E,
        updateId: T,
        role: w,
        progress: j,
        rtl: P,
        toastId: O,
        deleteToast: z,
        isIn: H,
        isLoading: ie,
        closeOnClick: le,
        theme: xe,
      } = e,
      qe = Ln(
        "Toastify__toast",
        `Toastify__toast-theme--${xe}`,
        `Toastify__toast--${c}`,
        { "Toastify__toast--rtl": P },
        { "Toastify__toast--close-on-click": le }
      ),
      Je = gt(v)
        ? v({ rtl: P, position: y, type: c, defaultClassName: qe })
        : Ln(qe, v),
      q = (function (W) {
        let { theme: K, type: fe, isLoading: ne, icon: de } = W,
          se = null;
        const De = { theme: K, type: fe };
        return (
          de === !1 ||
            (gt(de)
              ? (se = de({ ...De, isLoading: ne }))
              : C.isValidElement(de)
              ? (se = C.cloneElement(de, De))
              : ne
              ? (se = js.spinner())
              : ((qt) => qt in js)(fe) && (se = js[fe](De))),
          se
        );
      })(e),
      b = !!j || !s,
      A = { closeToast: g, type: c, theme: xe };
    let I = null;
    return (
      a === !1 ||
        (I = gt(a)
          ? a(A)
          : C.isValidElement(a)
          ? C.cloneElement(a, A)
          : (function (W) {
              let { closeToast: K, theme: fe, ariaLabel: ne = "close" } = W;
              return G.createElement(
                "button",
                {
                  className: `Toastify__close-button Toastify__close-button--${fe}`,
                  type: "button",
                  onClick: (de) => {
                    de.stopPropagation(), K(de);
                  },
                  "aria-label": ne,
                },
                G.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  G.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  })
                )
              );
            })(A)),
      G.createElement(
        x,
        {
          isIn: H,
          done: z,
          position: y,
          preventExitTransition: n,
          nodeRef: r,
          playToast: i,
        },
        G.createElement(
          "div",
          {
            id: O,
            onClick: u,
            "data-in": H,
            className: Je,
            ...o,
            style: S,
            ref: r,
          },
          G.createElement(
            "div",
            {
              ...(H && { role: w }),
              className: gt(p) ? p({ type: c }) : Ln("Toastify__toast-body", p),
              style: f,
            },
            q != null &&
              G.createElement(
                "div",
                {
                  className: Ln("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !ie,
                  }),
                },
                q
              ),
            G.createElement("div", null, l)
          ),
          I,
          G.createElement(r4, {
            ...(T && !b ? { key: `pb-${T}` } : {}),
            rtl: P,
            theme: xe,
            delay: s,
            isRunning: t,
            isIn: H,
            closeToast: g,
            hide: d,
            type: c,
            style: E,
            className: m,
            controlledProgress: b,
            progress: j || 0,
          })
        )
      )
    );
  },
  bl = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  s4 = Dl(bl("bounce", !0));
Dl(bl("slide", !0));
Dl(bl("zoom"));
Dl(bl("flip"));
const u4 = {
  position: "top-right",
  transition: s4,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light",
};
function c4(e) {
  let t = { ...u4, ...e };
  const n = e.stacked,
    [r, o] = C.useState(!0),
    i = C.useRef(null),
    { getToastToRender: a, isToastActive: l, count: s } = t4(t),
    { className: u, style: c, rtl: d, containerId: g } = t;
  function x(v) {
    const S = Ln(
      "Toastify__toast-container",
      `Toastify__toast-container--${v}`,
      { "Toastify__toast-container--rtl": d }
    );
    return gt(u)
      ? u({ position: v, rtl: d, defaultClassName: S })
      : Ln(S, ka(u));
  }
  function y() {
    n && (o(!0), B.play());
  }
  return (
    a4(() => {
      if (n) {
        var v;
        const S = i.current.querySelectorAll('[data-in="true"]'),
          p = 12,
          f = (v = t.position) == null ? void 0 : v.includes("top");
        let m = 0,
          E = 0;
        Array.from(S)
          .reverse()
          .forEach((T, w) => {
            const j = T;
            j.classList.add("Toastify__toast--stacked"),
              w > 0 && (j.dataset.collapsed = `${r}`),
              j.dataset.pos || (j.dataset.pos = f ? "top" : "bot");
            const P = m * (r ? 0.2 : 1) + (r ? 0 : p * w);
            j.style.setProperty("--y", `${f ? P : -1 * P}px`),
              j.style.setProperty("--g", `${p}`),
              j.style.setProperty("--s", "" + (1 - (r ? E : 0))),
              (m += j.offsetHeight),
              (E += 0.025);
          });
      }
    }, [r, s, n]),
    G.createElement(
      "div",
      {
        ref: i,
        className: "Toastify",
        id: g,
        onMouseEnter: () => {
          n && (o(!1), B.pause());
        },
        onMouseLeave: y,
      },
      a((v, S) => {
        const p = S.length ? { ...c } : { ...c, pointerEvents: "none" };
        return G.createElement(
          "div",
          { className: x(v), style: p, key: `container-${v}` },
          S.map((f) => {
            let { content: m, props: E } = f;
            return G.createElement(
              l4,
              {
                ...E,
                stacked: n,
                collapseAll: y,
                isIn: l(E.toastId, E.containerId),
                style: E.style,
                key: `toast-${E.key}`,
              },
              m
            );
          })
        );
      })
    )
  );
}
const d4 = async () => {
    var e, t;
    try {
      return (await Ke("/users/current-user")).data;
    } catch (n) {
      return (
        B.error(
          (t =
            (e = n == null ? void 0 : n.response) == null ? void 0 : e.data) ==
            null
            ? void 0
            : t.msg
        ),
        ln("/login")
      );
    }
  },
  q1 = C.createContext(),
  f4 = () => JSON.parse(localStorage.getItem("theme")) || !1,
  p4 = () => {
    const [e, t] = C.useState(!1),
      [n, r] = C.useState(!1),
      [o, i] = C.useState(f4()),
      { user: a } = vn(),
      l = xl(),
      s = Qn().pathname.split("/"),
      u = s[s.length - 1].length,
      c = async () => {
        const g = await Ke.delete("/auth/logout");
        B.success(g.data.msg || "log out successful"), l("/login");
      },
      d = () => {
        i(!o),
          document.body.classList.toggle("dark-mode", !o),
          localStorage.setItem("theme", !o);
      };
    return (
      C.useEffect(() => {
        document.body.classList.toggle("dark-mode", o);
      }, []),
      h.jsx(q1.Provider, {
        value: {
          theme: o,
          toggleTheme: d,
          showSidebar: e,
          setShowSidebar: t,
          user: a,
          logoutUser: c,
          profile: n,
          setProfile: r,
        },
        children: h.jsx(Mw, {
          pathLength: u,
          children: h.jsxs("div", {
            className: "dashboard",
            children: [
              h.jsx(b4, {}),
              h.jsx(n3, {}),
              h.jsxs("div", {
                children: [
                  h.jsx(U4, {}),
                  h.jsx("div", {
                    className: "dashboard-page",
                    children: h.jsx(Jm, {}),
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  vr = () => C.useContext(q1),
  h4 = me.aside`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
    box-shadow: 1px 0 0 0 rgba(var(--box-shadow-color), 0.1);
    z-index: 2;
    .sidebar {
      background: var(--bg-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .sidebar-center {
      position: sticky;
      top: 0;
    }
    header {
      height: 6rem;
    }
    .show-sidebar {
      margin-left: 0;
    }
    .side-links {
      display: flex;
      flex-direction: column;
    }
    .side-link {
      padding: 1rem 0;
      padding-left: 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: capitalize;
      color: var(--text-secondary-color);
      transition: padding-left 0.3s ease-in-out;
    }
    .side-link:hover {
      padding-left: 2.5rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
    }
    .active {
      color: var(--primary-500);
    }
  }
`;
var J1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  gp = G.createContext && G.createContext(J1),
  m4 = ["attr", "size", "title"];
function g4(e, t) {
  if (e == null) return {};
  var n = v4(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function v4(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function el() {
  return (
    (el = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    el.apply(this, arguments)
  );
}
function vp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function tl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vp(Object(n), !0).forEach(function (r) {
          y4(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function y4(e, t, n) {
  return (
    (t = w4(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function w4(e) {
  var t = x4(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function x4(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z1(e) {
  return (
    e &&
    e.map((t, n) => G.createElement(t.tag, tl({ key: n }, t.attr), Z1(t.child)))
  );
}
function Te(e) {
  return (t) =>
    G.createElement(S4, el({ attr: tl({}, e.attr) }, t), Z1(e.child));
}
function S4(e) {
  var t = (n) => {
    var { attr: r, size: o, title: i } = e,
      a = g4(e, m4),
      l = o || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      G.createElement(
        "svg",
        el(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: s,
            style: tl(tl({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && G.createElement("title", null, i),
        e.children
      )
    );
  };
  return gp !== void 0
    ? G.createElement(gp.Consumer, null, (n) => t(n))
    : t(J1);
}
function E4(e) {
  return Te({
    tag: "svg",
    attr: { t: "1569683928793", viewBox: "0 0 1024 1024", version: "1.1" },
    child: [
      { tag: "defs", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16z m-52 268H212V212h200v200zM864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16z m-52 268H612V212h200v200zM864 544H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z m-52 268H612V612h200v200zM424 712H296V584c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v128H104c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h128v128c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V776h128c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
        },
        child: [],
      },
    ],
  })(e);
}
function k4(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.997.997 0 0 0-.707.293L2.294 5.292A.996.996 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM12 18l-5-5h3v-3h4v3h3l-5 5z",
        },
        child: [],
      },
    ],
  })(e);
}
function C4(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z",
        },
        child: [],
      },
    ],
  })(e);
}
function j4(e) {
  return Te({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z",
        },
        child: [],
      },
    ],
  })(e);
}
function N4(e) {
  return Te({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z",
        },
        child: [],
      },
    ],
  })(e);
}
function P4(e) {
  return Te({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z",
        },
        child: [],
      },
    ],
  })(e);
}
function R4(e) {
  return Te({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z",
        },
        child: [],
      },
    ],
  })(e);
}
function T4(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function _4(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
        },
        child: [],
      },
    ],
  })(e);
}
function L4(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 352 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
        },
        child: [],
      },
    ],
  })(e);
}
function O4(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32zm70.11-175.8l89.38-94.26a15.41 15.41 0 0 1 22.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",
        },
        child: [],
      },
    ],
  })(e);
}
function e0(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",
        },
        child: [],
      },
    ],
  })(e);
}
function D4(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M131.3 20.35c-14.6.1-28.1 10-31.93 24.82-2.33 9.13-.55 18.4 4.13 25.84-7.67 4.26-13.69 11.53-16.03 20.66-2.32 9.13-.56 18.33 4.1 25.83a32.687 32.687 0 0 0-15.96 20.6c-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.33 9.1-.54 18.4 4.19 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.08 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.35 9.2-.51 18.5 4.3 26a32.915 32.915 0 0 0-16.28 20.8c-4.48 17.5 6.25 35.6 23.79 40.1l.1-.2 31.71 8.2-1.47 5.7 261.56 67L374 326.5l-22.4 21.2-87.8 26.5 15.5-42.5-151.7-38.8 4.4-17.4 153.5 39.3 9.7-26.7 15.3-14.4-167-42.8 4.4-17.4 178 45.6 39.6-37.4-206.1-52.8 4.4-17.4L380.7 207l-.1.4 31.5-29.8 18.3-71.4-261.6-67.04-4.8 18.66c2.2-16.32-8.1-32.27-24.5-36.44-2.7-.7-5.5-1.04-8.2-1.03zm.3 17.99c1.2 0 2.4.19 3.5.48 8.1 2.09 12.9 10.13 10.8 18.27l17.2 4.4-11 42.81c2.2-16.35-8.2-32.26-24.5-36.43l-.6-.15c-7.8-2.34-12.2-10.15-10.2-18.07 1.7-6.61 7.3-11 13.7-11.3h1.1zm-11.9 46.51c.9 0 1.9.14 2.9.36l.6.15c8.1 2.08 12.9 10.12 10.8 18.24l17.2 4.4-11 43c2.4-16.4-8-32.6-24.4-36.7-.7-.2-1.3-.4-1.9-.5-7-2.7-10.9-10.1-9-17.62 1.7-6.97 7.9-11.45 14.8-11.29zm59.9 4.59 217 55.66-4.4 17.4-217-55.6zm-72.9 41.86h1.3c.5 0 .9 0 1.4.1.6.2 1.2.3 1.8.5l.1-.2c8.1 2.1 12.9 10.1 10.8 18.3l17.2 4.4-11 43c2.3-16.3-8.1-32.4-24.4-36.6-8.18-2.1-12.94-10.1-10.85-18.3 1.69-6.6 7.25-10.9 13.65-11.2zM465.4 152l-10.2 9.6 31.6 33.5 10.2-9.6zm-23.3 22L315.7 293.5l31.5 33.5 126.5-119.5zm-347.23 3.7c1.48 0 3 .1 4.53.5 8.1 2.1 12.9 10.1 10.8 18.3l17.2 4.4-11 43c2.3-16.4-8.1-32.4-24.44-36.6-8.14-2.1-12.9-10.1-10.82-18.3 1.7-6.6 7.32-11 13.73-11.3zm-11.91 46.5c1.48 0 3 .1 4.53.5 8.14 2.1 12.91 10.1 10.81 18.3l17.2 4.4-11 42.9c2.3-16.3-8.1-32.3-24.45-36.5-8.14-2.1-12.89-10.1-10.81-18.3 1.69-6.6 7.31-11 13.72-11.3zm-11.9 46.5c1.48 0 3 .1 4.53.5 8.13 2.1 12.89 10.1 10.81 18.3l17.2 4.3-10.94 42.8c2.16-16.3-8.25-32.1-24.51-36.3-8.14-2.1-12.9-10.1-10.82-18.3 1.7-6.6 7.32-11 13.73-11.3zm235.34 39.2L293 346.6l37.4-11.3zm-247.25 7.3c1.48 0 3 .1 4.53.5 8.14 2.1 12.9 10.1 10.81 18.3l17.21 4.3-11 43c2.1-16.2-8.3-32-24.53-36.2l.1-.3c-8.16-2.1-12.92-10.1-10.84-18.3 1.69-6.6 7.31-11 13.72-11.3zm56.95 20.3L333.2 393l-4.4 17.4-217.1-55.5zM47.18 364c1.48 0 3 .1 4.52.5 8.14 2.1 12.9 10.1 10.82 18.3l17.2 4.3-3.69 14.4-31.92-8.2v.2c-8.01-2.2-12.67-10.1-10.61-18.2 1.7-6.6 7.32-11 13.73-11.3z",
        },
        child: [],
      },
    ],
  })(e);
}
const kr = ({ to: e, icon: t, text: n }) => {
    const { setShowSidebar: r } = vr();
    return h.jsxs(P2, {
      onClick: () => r(!1),
      to: e,
      className: "side-link",
      end: !0,
      children: [h.jsx("span", { className: "icon", children: t }), n],
    });
  },
  t0 = () =>
    h.jsxs("div", {
      className: "side-links",
      children: [
        h.jsx(kr, { to: "", icon: h.jsx(_4, {}), text: "dashboard" }),
        h.jsx(kr, { to: "addNote", icon: h.jsx(E4, {}), text: "add note" }),
        h.jsx(kr, { to: "notes", icon: h.jsx(D4, {}), text: "notes" }),
        h.jsx(kr, { to: "archive", icon: h.jsx(k4, {}), text: "archive" }),
        h.jsx(kr, { to: "bin", icon: h.jsx(R4, {}), text: "bin" }),
        h.jsx(kr, { to: "profile", icon: h.jsx(C4, {}), text: "profile" }),
      ],
    }),
  b4 = () => {
    const { showSidebar: e } = vr();
    return h.jsx(h4, {
      children: h.jsx("div", {
        className: `sidebar ${!e && "show-sidebar"}`,
        children: h.jsxs("div", {
          className: "sidebar-center",
          children: [h.jsx("header", {}), h.jsx(t0, {})],
        }),
      }),
    });
  },
  n0 = [
    "var(--bg-secondary-color)",
    "#fda4af",
    "#f9a8d4",
    "#d8b4fe",
    "#a5b4fc",
    "#93c5fd",
    "#7dd3fc",
    "#67e8f9",
    "#5eead4",
    "#fca5a5",
    "#fdba74",
    "#fcd34d",
    "#fde047",
    "#bef264",
    "#86efac",
    "#6ee7b7",
  ],
  nl = [
    "Roboto",
    "Open Sans",
    "Lato",
    "Montserrat",
    "Oswald",
    "Source Sans 3",
    "Slabo",
    "Raleway",
    "PT Sans",
    "Merriweather",
  ],
  z4 = me.div`
  background: var(--bg-secondary-color);
  box-shadow: var(--shadow-2);
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 300px;
  margin: 0 auto;
  position: relative;
  .color-container {
    position: absolute;
    top: 125%;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-secondary-color);
    border-radius: 0.5rem;
    display: none;
    gap: 0.5rem;
    padding: 1rem;
    box-shadow: var(--shadow-2);
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 2rem);
  }
  .show-color-container {
    display: grid;
  }
  .color {
    cursor: pointer;
    justify-self: center;
    border-radius: 50%;
    height: 1.75rem;
    width: 1.75rem;
    border: 1px solid var(--text-color);
  }
  .selected {
    height: 2rem;
    width: 2rem;
  }
  .color-container .selected {
    border: 3px dashed var(--gray-400);
  }
  .transform-btns {
    display: flex;
    gap: 0.5rem;
  }
  .textTransform {
    cursor: pointer;
    padding: 0.25rem 0;
    width: 1.5rem;
    text-transform: capitalize;
    font-size: 1rem;
    background: transparent;
    border: none;
    border: 1px solid var(--text-color);
    color: var(--text-color);
    border-radius: var(--border-radius);
  }
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .underline {
    text-decoration: underline;
  }
  /* .transformed {
    background: var(--text-color);
    color: var(--bg-secondary-color);
  } */
`,
  r0 = ({
    transform: e,
    currentColor: t,
    currentFont: n,
    setCurrentColor: r,
    setCurrentFont: o,
  }) =>
    h.jsxs(z4, {
      className: "edit-panel",
      children: [
        h.jsx("select", {
          name: "font",
          id: "font",
          className: "form-select",
          defaultValue: n || nl[0],
          onChange: (i) => o(i.currentTarget.value),
          children: nl.map((i) =>
            h.jsx("option", { value: i, children: i }, i)
          ),
        }),
        h.jsx("button", {
          className: "color selected",
          style: { background: t },
          onClick: (i) =>
            i.currentTarget.nextElementSibling.classList.toggle(
              "show-color-container"
            ),
        }),
        h.jsx("div", {
          className: "color-container",
          children: n0.map((i) =>
            h.jsx(
              "button",
              {
                type: "button",
                className: "color",
                style: { background: i },
                onClick: (a) => {
                  a.currentTarget.parentElement.classList.toggle(
                    "show-color-container"
                  ),
                    r(i);
                },
              },
              i
            )
          ),
        }),
        h.jsxs("div", {
          className: "transform-btns",
          children: [
            h.jsx("button", {
              className: "textTransform bold",
              onClick: (i) => {
                e("bold");
              },
              children: "b",
            }),
            h.jsx("button", {
              className: "textTransform italic",
              onClick: (i) => {
                e("italic");
              },
              children: "i",
            }),
            h.jsx("button", {
              className: "textTransform underline",
              onClick: (i) => {
                e("underline");
              },
              children: "u",
            }),
          ],
        }),
      ],
    }),
  M4 = "/assets/notes-logo-BU02aN0b.svg",
  Yn = () =>
    h.jsx("img", {
      src: M4,
      style: { height: "2.5rem" },
      className: "logo",
      alt: "",
    }),
  A4 = () => {
    const { user: e, logoutUser: t, profile: n, setProfile: r } = vr();
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx("div", {
          onClick: () => r(!n),
          className: "profile",
          children: e.image
            ? h.jsx("img", { src: e.image })
            : e.name[0].toUpperCase(),
        }),
        h.jsx("button", {
          onClick: t,
          className: ` btn logout ${n && "show-logout"}`,
          children: "logout",
        }),
      ],
    });
  };
function F4(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z",
        },
        child: [],
      },
    ],
  })(e);
}
const I4 = me.nav`
  background: var(--bg-secondary-color);
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(var(--box-shadow-color), 0.1);
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--fluid-width);
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    font-size: 2rem;
    cursor: pointer;
    display: grid;
    align-items: center;
  }
  .theme-profile {
    position: relative;
    display: grid;
    grid-template-columns: auto 5rem;
    gap: 1rem;
    align-items: center;
    justify-items: center;
  }
  .theme-btn {
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    font-size: 1.25rem;
    display: grid;
    align-items: center;
    transition: background-color 0.3s ease-in-out;
    border-radius: 50%;
    padding: 0.25rem;
    color: var(--text-secondary-color);
  }
  .theme-btn:hover {
    background: var(--bg-color);
  }
  .profile {
    font-family: var(--headingFont);
    width: 3rem;
    height: 3rem;
    background: var(--primary-500);
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    font-size: 1.25rem;
  }
  .profile img {
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .logout {
    display: none;
    position: absolute;
    top: 4rem;
    left: 3rem;
    padding: 0.2rem 0.5rem;
    text-transform: capitalize;
  }
  .show-logout {
    display: grid;
  }
  @media screen and (min-width: 992px) {
    position: sticky;
    top: 0;
    z-index: 2;
    .nav-center {
      width: 90%;
    }
  }
`,
  $4 = () => {
    const { theme: e, toggleTheme: t } = vr();
    return h.jsx("button", {
      onClick: () => t(),
      className: "theme-btn",
      children: e ? h.jsx(N4, {}) : h.jsx(j4, {}),
    });
  },
  U4 = () => {
    const {
      theme: e,
      toggleTheme: t,
      showSidebar: n,
      setShowSidebar: r,
    } = vr();
    return h.jsx(I4, {
      children: h.jsxs("div", {
        className: "nav-center",
        children: [
          h.jsx("button", {
            onClick: () => r(!n),
            className: "toggle-btn",
            children: h.jsx(F4, {}),
          }),
          h.jsx(Yn, {}),
          h.jsxs("div", {
            className: "theme-profile",
            children: [h.jsx($4, {}), h.jsx(A4, {})],
          }),
        ],
      }),
    });
  },
  B4 = me.article``,
  H4 = me.div`
  position: relative;
  .info {
    cursor: pointer;
    background: var(--bg-secondary-color);
    padding: 1rem;
    width: ${(e) => (e.view === "grid" ? "10rem" : "clamp(20rem,40vw,50rem)")};
    height: ${(e) => (e.view === "grid" ? "8rem" : "auto")};
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius);
    transition: var(--transition);
  }
  .info:hover {
    box-shadow: var(--shadow-3);
    transform: scale(1.03);
  }
  p {
    margin: 0;
    text-align: left;
  }
  .title {
    margin-bottom: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .options-btn {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 5px;
    display: grid;
    place-items: center;
    background: transparent;
    font-size: 1rem;
    border: transparent;
    color: var(--text-color);
  }
  .options {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background: var(--bg-color);
    display: ${(e) => (e.view === "grid" ? "grid" : "flex")};
    gap: 0.25rem;
    box-shadow: var(--shadow-1);
    z-index: 2;
  }
`;
function o0(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5 6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z",
        },
        child: [],
      },
    ],
  })(e);
}
function i0(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "m20.55 5.22-1.39-1.68A1.51 1.51 0 0 0 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z",
        },
        child: [],
      },
    ],
  })(e);
}
function a0(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 256 256", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224,176a8,8,0,0,1-8,8H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L70.46,48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16h-6.46l21.17,120H216A8,8,0,0,1,224,176Z",
        },
        child: [],
      },
    ],
  })(e);
}
function l0(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 256 256", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M213.38,221.92a8,8,0,0,1-11.3-.54L168.1,184H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L66.24,72,42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM190.5,161.07a8,8,0,0,0,13.79-6.77L185.54,48H192a8,8,0,0,0,0-16H91.25a8,8,0,0,0-5.92,13.38Z",
        },
        child: [],
      },
    ],
  })(e);
}
const V4 = me.div`
  .edit-btn {
    color: var(--text-color);
    cursor: pointer;
    background: transparent;
    text-transform: capitalize;
    display: flex;
    gap: 0.25rem;
    border: transparent;
    padding: 0.5rem;
    font-family: var(--headingFont);
    width: 100%;
    height: 100%;
  }
  .edit-btn:hover {
    background: var(--bg-secondary-color);
  }
`,
  nn = ({ id: e, submitForm: t, view: n, icon: r }) =>
    h.jsx(V4, {
      children: h.jsxs("button", {
        type: "submit",
        onClick: (o) => t(o),
        className: "edit-btn",
        id: `${e}`,
        children: [r, n === "grid" ? e : ""],
      }),
    }),
  W4 = ({
    title: e,
    description: t,
    id: n,
    color: r,
    font: o,
    submitForm: i,
    pinned: a,
    archived: l,
    view: s,
    options: u,
    setOptions: c,
  }) => {
    const d = Qn(),
      g = xl(),
      x = d.pathname.split("/")[d.pathname.split("/").length - 1],
      y = x === "dashboard" ? `notes/${n}` : `${n}`;
    return h.jsxs(H4, {
      view: s,
      children: [
        h.jsxs("div", {
          onClick: (v) => x !== "bin" && g(y),
          style: { background: r, fontFamily: o },
          className: "info",
          children: [
            h.jsx("p", { className: "title", ref: e }),
            h.jsx("p", { className: "description", ref: t }),
          ],
        }),
        h.jsx("button", {
          className: "options-btn",
          onClick: () => {
            c(u === n ? "" : n);
          },
          children: h.jsx(P4, {}),
        }),
        u === n &&
          h.jsx("div", {
            className: "options",
            children:
              x === "bin"
                ? h.jsx(nn, {
                    icon: h.jsx(O4, {}),
                    id: "restore",
                    view: s,
                    submitForm: i,
                  })
                : h.jsxs(h.Fragment, {
                    children: [
                      h.jsx(nn, {
                        id: "delete",
                        icon: h.jsx(e0, {}),
                        view: s,
                        submitForm: i,
                      }),
                      l
                        ? h.jsx(nn, {
                            id: "unarchive",
                            icon: h.jsx(i0, {}),
                            view: s,
                            submitForm: i,
                          })
                        : h.jsx(nn, {
                            id: "archive",
                            icon: h.jsx(o0, {}),
                            view: s,
                            submitForm: i,
                          }),
                      a
                        ? h.jsx(nn, {
                            id: "unpin",
                            icon: h.jsx(l0, {}),
                            view: s,
                            submitForm: i,
                          })
                        : h.jsx(nn, {
                            id: "pin",
                            icon: h.jsx(a0, {}),
                            view: s,
                            submitForm: i,
                          }),
                    ],
                  }),
          }),
      ],
    });
  },
  K4 = ({ note: e, view: t, options: n, setOptions: r }) => {
    const o = C.useRef(),
      i = C.useRef(),
      a = co(),
      l = (s) => {
        const u = new FormData();
        s.currentTarget.id === "delete" &&
          (u.append("deleted", !0),
          u.append("archived", !1),
          u.append("pinned", !1)),
          s.currentTarget.id === "restore" && u.append("deleted", !1),
          s.currentTarget.id === "archive" &&
            (u.append("archived", !0), u.append("pinned", !1)),
          s.currentTarget.id === "unarchive" && u.append("archived", !1),
          s.currentTarget.id === "pin" &&
            (u.append("pinned", !0), u.append("archived", !1)),
          s.currentTarget.id === "unpin" && u.append("pinned", !1),
          u.append(
            "msg",
            s.currentTarget.id === "pin" || s.currentTarget.id === "unpin"
              ? s.currentTarget.id + "ned"
              : s.currentTarget.id + "d"
          );
        const c = Object.fromEntries(u);
        r(""),
          a(c, { method: "post", action: `/dashboard/update-note/${e._id}` });
      };
    return (
      C.useEffect(() => {
        var d;
        e.title && (o.current.innerHTML = e.title);
        let s = (d = e.description) == null ? void 0 : d.split(/<\/?[a-z]+>/);
        s = s == null ? void 0 : s.filter((g) => g.length !== 0);
        const u = s == null ? void 0 : s.join(" "),
          c =
            u == null
              ? void 0
              : u.slice(0, 50).concat(u.length > 50 ? "..." : "");
        e.description && (i.current.innerHTML = c);
      }, [e]),
      h.jsx(B4, {
        children: h.jsx(W4, {
          id: e._id,
          title: o,
          color: e.color,
          font: e.font,
          description: i,
          archived: e.archived,
          pinned: e.pinned,
          submitForm: l,
          view: t,
          options: n,
          setOptions: r,
        }),
      })
    );
  },
  Q4 = me.div`
  display: grid;
  place-items: center;
  gap: 2rem;
  margin-top: 5rem;

  .img-container {
    height: 20rem;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,
  Y4 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20data-name='Layer%201'%20width='647.63626'%20height='632.17383'%20viewBox='0%200%20647.63626%20632.17383'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%23f2f2f2'/%3e%3cpath%20d='M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%233f3d56'/%3e%3cpath%20d='M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%236c63ff'/%3e%3ccircle%20cx='190.15351'%20cy='24.95465'%20r='20'%20fill='%236c63ff'/%3e%3ccircle%20cx='190.15351'%20cy='24.95465'%20r='12.66462'%20fill='%23fff'/%3e%3cpath%20d='M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%23e6e6e6'/%3e%3cpath%20d='M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%233f3d56'/%3e%3cpath%20d='M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z'%20transform='translate(-276.18187%20-133.91309)'%20fill='%236c63ff'/%3e%3ccircle%20cx='433.63626'%20cy='105.17383'%20r='20'%20fill='%236c63ff'/%3e%3ccircle%20cx='433.63626'%20cy='105.17383'%20r='12.18187'%20fill='%23fff'/%3e%3c/svg%3e",
  ed = ({ text: e }) =>
    h.jsxs(Q4, {
      children: [
        h.jsx("div", {
          className: "img-container",
          children: h.jsx("img", { src: Y4, alt: "" }),
        }),
        h.jsx("p", { children: e }),
      ],
    }),
  G4 = me.div`
  display: grid;
  justify-content: center;
  .section-center {
    display: grid;
    grid-template-columns: ${(e) =>
      e.view === "grid" ? "repeat(2, 1fr)" : ""};
    gap: 1rem;
  }
  @media screen and (min-width: 768px) {
    .section-center {
      grid-template-columns: ${(e) =>
        e.view === "grid" ? "repeat(3, 1fr)" : ""};
    }
  }
`,
  Wr = ({ notes: e, view: t, options: n, setOptions: r }) =>
    h.jsx(G4, {
      view: t,
      children: h.jsx("section", {
        children: h.jsx("div", {
          className: "section-center",
          children: e.map((o) =>
            h.jsx(K4, { view: t, setOptions: r, note: o, options: n }, o._id)
          ),
        }),
      }),
    }),
  X4 = me.div`
  width: clamp(70%, 5vw, 90%);
  margin: 0 auto;
  .pinned {
    margin-bottom: 2rem;
  }
  h4 {
    margin-bottom: 1rem;
  }
`,
  q4 = ({ view: e, options: t, setOptions: n }) => {
    let { notes: r } = vn();
    const o = r.filter((a) => a.pinned === !0);
    r = r.filter(
      (a) => a.pinned === !1 && a.deleted === !1 && a.archived === !1
    );
    const i = o.length > 0;
    return h.jsx(X4, {
      children: i
        ? h.jsxs("div", {
            children: [
              h.jsxs("div", {
                className: "pinned",
                children: [
                  h.jsx("h4", { children: "Pinned" }),
                  h.jsx(Wr, { view: e, setOptions: n, options: t, notes: o }),
                ],
              }),
              h.jsxs("div", {
                className: "others",
                children: [
                  h.jsx("h4", { children: "others" }),
                  h.jsx(Wr, { view: e, setOptions: n, options: t, notes: r }),
                ],
              }),
            ],
          })
        : h.jsx(Wr, { view: e, setOptions: n, options: t, notes: r }),
    });
  },
  J4 = me.div`
  .filter-btns {
    display: flex;
    gap: 0.1rem;
  }
  .filter-btn {
    cursor: pointer;
    background: transparent;
    font-size: 1.25rem;
    border: none;
    display: grid;
    place-items: center;
    color: var(--text-color);
    transition: var(--transition);
    border-radius: 50%;
    padding: 0.5rem;
  }
  .filter-btn:hover {
    box-shadow: var(--shadow-1);
    background: var(--bg-color);
  }
  .view {
    background: var(--bg-color);
  }
`;
function Z4(e) {
  return Te({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
        },
        child: [],
      },
    ],
  })(e);
}
function e3(e) {
  return Te({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",
        },
        child: [],
      },
    ],
  })(e);
}
const s0 = ({ view: e, setView: t }) =>
    h.jsx(J4, {
      children: h.jsxs("div", {
        className: "filter-btns",
        children: [
          h.jsx("button", {
            type: "button",
            onClick: () => t("grid"),
            className: `filter-btn ${e === "grid" && "view"}`,
            children: h.jsx(Z4, {}),
          }),
          h.jsx("button", {
            type: "button",
            onClick: () => t("list"),
            className: `filter-btn ${e === "list" && "view"}`,
            children: h.jsx(e3, {}),
          }),
        ],
      }),
    }),
  t3 = me.aside`
  @media screen and (min-width: 992px) {
    display: none;
  }
  .side-center {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 3;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--bg-secondary-color);
    padding: 4rem 0;
    border-radius: var(--border-radius);
    width: var(--fluid-width);
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: transparent;
    color: var(--red-dark);
    font-size: 1.75rem;
    border-color: transparent;
    cursor: pointer;
  }
  .logo {
    margin-bottom: 2rem;
  }
  .side-links {
  }
  .side-link {
    padding: 1rem 0;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: var(--text-secondary-color);
    transition: var(--transition);
  }
  .side-link:hover {
    color: var(--primary-500);
  }
  .icon {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
  .active {
    color: var(--primary-500);
  }
`,
  n3 = () => {
    const { setShowSidebar: e, showSidebar: t } = vr();
    return h.jsxs(t3, {
      children: [
        h.jsx("div", {
          className: `side-center ${t && "show-sidebar"}`,
          children: h.jsxs("div", {
            className: "content",
            children: [
              h.jsx("button", {
                className: "close-btn",
                type: "button",
                onClick: () => e(!1),
                children: h.jsx(L4, {}),
              }),
              h.jsx(Yn, {}),
              h.jsx(t0, {}),
            ],
          }),
        }),
        " ",
      ],
    });
  },
  Kr = ({ labelText: e, name: t, type: n }) =>
    h.jsxs("div", {
      className: "form-row",
      children: [
        h.jsx("label", {
          htmlFor: t,
          className: "form-label",
          children: e || t,
        }),
        h.jsx("input", {
          name: t,
          required: !0,
          type: n || t,
          className: "form-input",
        }),
      ],
    }),
  td = ({ value: e }) =>
    h.jsx("button", {
      type: "submit",
      className: "btn btn-block",
      children: e,
    }),
  u0 = ({ value: e }) =>
    h.jsx("div", {
      className: "title",
      children: h.jsx("h3", { className: "title-surround", children: e }),
    }),
  r3 = me.div`
  background: var(--bg-secondary-color);
  box-shadow: var(--shadow-1);
  display: flex;
  justify-content: center;
  padding: 0.75rem 0;
  align-items: center;
  width: clamp(70%, 5vw, 90%);
  margin: 0 auto;
  gap: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  .form-input {
    width: clamp(70%, 10vw, 80%);
    border: none;
  }
  @media screen and (max-width: 500px) {
    .form-input {
      width: 60%;
    }
  }
`,
  nd = ({ view: e, setView: t }) =>
    h.jsxs(r3, {
      children: [
        h.jsx("input", {
          type: "search",
          className: "form-input",
          placeholder: "search",
        }),
        h.jsx(s0, { view: e, setView: t }),
      ],
    }),
  o3 = me.div`
  .btn {
    font-weight: bold;
    letter-spacing: 3px;
  }
  .form-row {
    overflow: hidden;
  }
  .form-input,
  .form-textarea {
    overflow: hidden;
  }
`,
  i3 = async ({ request: e }) => {
    var r, o;
    const t = await e.formData(),
      n = Object.fromEntries(t);
    try {
      const i = await Ke.post("/notes", n);
      return B.success(i.data.msg), ln("../notes");
    } catch (i) {
      return (
        B.error(
          (o =
            (r = i == null ? void 0 : i.response) == null ? void 0 : r.data) ==
            null
            ? void 0
            : o.msg
        ),
        i
      );
    }
  },
  a3 = () => {
    const e = C.useRef(""),
      t = C.useRef(""),
      [n, r] = C.useState(""),
      [o, i] = C.useState(""),
      [a, l] = C.useState(n0[0]),
      [s, u] = C.useState(nl[0]),
      c = co(),
      d = (x) => {
        document.execCommand(x);
      },
      g = (x) => {
        const y = new FormData();
        y.append("title", n),
          y.append("description", o),
          y.append("color", a),
          y.append("font", s);
        const v = Object.fromEntries(y);
        c(v, { method: "post" });
      };
    return h.jsx(o3, {
      children: h.jsxs("div", {
        className: "section-center",
        children: [
          h.jsx(r0, {
            transform: d,
            currentColor: a,
            setCurrentColor: l,
            setCurrentFont: u,
          }),
          h.jsxs("div", {
            className: "form",
            style: { background: a },
            children: [
              h.jsxs("div", {
                className: "form-row",
                children: [
                  h.jsx("label", {
                    htmlFor: "title",
                    className: "form-label",
                    children: "title",
                  }),
                  h.jsx("div", {
                    className: "form-input",
                    ref: e,
                    style: { fontFamily: s },
                    contentEditable: !0,
                    suppressContentEditableWarning: !0,
                    onInput: (x) => r(e.current.innerHTML),
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "form-row",
                children: [
                  h.jsx("label", {
                    htmlFor: "description",
                    className: "form-label",
                    children: "description",
                  }),
                  h.jsx("div", {
                    className: "form-textarea",
                    ref: t,
                    contentEditable: !0,
                    suppressContentEditableWarning: !0,
                    style: { fontFamily: s },
                    onInput: (x) => i(t.current.innerHTML),
                  }),
                ],
              }),
              h.jsx("button", {
                onClick: g,
                type: "submit",
                className: "btn btn-block",
                children: "save",
              }),
            ],
          }),
        ],
      }),
    });
  },
  yp = me.div`
  .archived {
    width: clamp(70%, 5vw, 90%);
    margin: 0 auto;
  }
  h4 {
    margin-bottom: 1rem;
  }
`,
  l3 = async () => {
    var e, t;
    try {
      return (await Ke("/notes?archived=true&deleted=false")).data;
    } catch (n) {
      return (
        B.error(
          (t =
            (e = n == null ? void 0 : n.response) == null ? void 0 : e.data) ==
            null
            ? void 0
            : t.msg
        ),
        n
      );
    }
  },
  s3 = () => {
    const { notes: e } = vn(),
      [t, n] = C.useState("grid"),
      [r, o] = C.useState();
    return e.length === 0
      ? h.jsx(yp, {
          children: h.jsx("div", {
            className: "section-center",
            children: h.jsx(ed, { text: "You'll see notes you archive here." }),
          }),
        })
      : h.jsx(yp, {
          children: h.jsxs("div", {
            className: "section-center",
            children: [
              h.jsx(nd, { view: t, setOptions: o, setView: n }),
              h.jsxs("div", {
                className: "archived",
                children: [
                  h.jsx("h4", { children: "archived" }),
                  h.jsx(Wr, { options: r, setOptions: o, view: t, notes: e }),
                ],
              }),
            ],
          }),
        });
  },
  wp = me.div`
  .deleted {
    width: clamp(70%, 5vw, 90%);
    margin: 0 auto;
  }
  .info {
    font-style: italic;
    text-align: center;
    margin-bottom: 1.5rem;
    opacity:0.8;
  }
  h4 {
    margin-bottom: 1rem;
  }
`,
  u3 = async () => {
    var e, t;
    try {
      return (await Ke("/notes?deleted=true")).data;
    } catch (n) {
      return (
        B.error(
          (t =
            (e = n == null ? void 0 : n.response) == null ? void 0 : e.data) ==
            null
            ? void 0
            : t.msg
        ),
        n
      );
    }
  },
  c3 = () => {
    const { notes: e } = vn(),
      [t, n] = C.useState("grid"),
      [r, o] = C.useState();
    return e.length === 0
      ? h.jsx(wp, {
          children: h.jsx("div", {
            className: "section-center",
            children: h.jsx(ed, {
              text: "You'll see notes you move to Bin here.",
            }),
          }),
        })
      : h.jsx(wp, {
          children: h.jsxs("div", {
            className: "section-center",
            children: [
              h.jsx(nd, { view: t, setOptions: o, setView: n }),
              h.jsx("p", {
                className: "info",
                children:
                  "Notes present in Bin will be deleted permanently after 30 days.",
              }),
              h.jsxs("div", {
                className: "deleted",
                children: [
                  h.jsx("h4", { children: "deleted" }),
                  h.jsx(Wr, { options: r, setOptions: o, view: t, notes: e }),
                ],
              }),
            ],
          }),
        });
  },
  d3 = me.div`
  display: grid;
  place-items: center;
  height: 100vh;
  .container {
    display: grid;
    place-items: center;
  }
  img {
    width: 90vw;
    max-width: var(--fixed-width);
    margin-bottom: 2rem;
  }
  h4 {
    margin-bottom: 0.75rem;
    font-weight: 400;
  }
  p {
    color: var(--gray-500);
    margin-bottom: 1rem;
  }
  .link-btn {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`,
  f3 = "/assets/page_not_found-BMX_ecew.svg",
  p3 = () =>
    h.jsx(d3, {
      children: h.jsxs("div", {
        className: "container",
        children: [
          h.jsx("img", { src: f3, alt: "Not found" }),
          h.jsx("h4", { children: "Oops! Page not found." }),
          h.jsx("p", {
            children: "We are unable to find the page you are looking for.",
          }),
          h.jsx(Nt, { to: "/", className: "link-btn", children: "back home" }),
        ],
      }),
    }),
  h3 = me.div`
  .hero-img {
    display: none;
  }
  nav {
    display: flex;
    align-items: center;
    height: var(--nav-height);
  }
  .hero {
    min-height: calc(100vh - 6.5rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  .hero-title {
    margin-bottom: 1.5rem;
  }
  .text {
    line-height: 1.75;
    color: var(--text-secondary-color);
    margin-bottom: 2.5rem;
  }
  .btn {
    padding: 0.75rem;
  }
  .btn:first-child {
    margin-right: 1rem;
  }
  @media screen and (min-width: 992px) {
    .hero {
      grid-template-columns: 1fr 450px;
    }
    .hero-img {
      display: block;
    }
  }
`,
  m3 = () => h.jsx(h3, { children: h.jsx(Jm, {}) }),
  g3 = me.div`
  header {
    background: var(--bg-secondary-color);
    box-shadow: var(--shadow-1);
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    align-items: center;
    width: clamp(70%, 5vw, 90%);
    margin: 0 auto;
    gap: 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: 2rem;
  }
  h4 {
    display: flex;
    gap: 0.25rem;
  }
`;
function v3(e) {
  return Te({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "g",
        attr: { fillOpacity: ".9" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M255.8 48C141 48 48 141.2 48 256s93 208 207.8 208c115 0 208.2-93.2 208.2-208S370.8 48 255.8 48zm.2 374.4c-91.9 0-166.4-74.5-166.4-166.4S164.1 89.6 256 89.6 422.4 164.1 422.4 256 347.9 422.4 256 422.4z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M266.4 152h-31.2v124.8l109.2 65.5 15.6-25.6-93.6-55.5V152z",
            },
            child: [],
          },
        ],
      },
    ],
  })(e);
}
const y3 = async () => {
    var e, t;
    try {
      return (await Ke("/notes?deleted=false&archived=false&sort=-updatedAt"))
        .data;
    } catch (n) {
      return (
        B.error(
          (t =
            (e = n == null ? void 0 : n.response) == null ? void 0 : e.data) ==
            null
            ? void 0
            : t.msg
        ),
        n
      );
    }
  },
  w3 = () => {
    const { notes: e } = vn(),
      [t, n] = C.useState("grid"),
      [r, o] = C.useState();
    return h.jsx(g3, {
      children: h.jsxs("div", {
        className: "section-center",
        children: [
          h.jsxs("header", {
            children: [
              h.jsxs("h4", { children: [h.jsx(v3, {}), "recent"] }),
              h.jsx(s0, { view: t, setView: n }),
            ],
          }),
          h.jsx(Wr, { options: r, setOptions: o, view: t, notes: e }),
        ],
      }),
    });
  },
  c0 = me.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  .form {
    width: 95%;
    max-width: 600px;
  }
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }
  p {
    text-align: center;
    margin-top: 1rem;
  }
  .link-btn {
    color: var(--primary-500);
  }
`,
  x3 = async ({ request: e }) => {
    var r, o;
    const t = await e.formData(),
      n = Object.fromEntries(t);
    try {
      const i = await Ke.post("/auth/login", n);
      return B.success("log in successful"), ln("/dashboard");
    } catch (i) {
      return (
        B.error(
          (o =
            (r = i == null ? void 0 : i.response) == null ? void 0 : r.data) ==
            null
            ? void 0
            : o.msg
        ),
        i
      );
    }
  },
  S3 = () =>
    h.jsx(c0, {
      children: h.jsxs(Uc, {
        className: "form",
        method: "post",
        children: [
          h.jsx(Nt, { to: "/", children: h.jsx(Yn, {}) }),
          h.jsx(u0, { value: "login" }),
          h.jsx(Kr, { name: "email" }),
          h.jsx(Kr, { name: "password" }),
          h.jsx(td, { value: "submit" }),
          h.jsxs("p", {
            children: [
              "Not a member yet?",
              " ",
              h.jsx(Nt, {
                to: "/register",
                className: "link-btn",
                children: "Register",
              }),
            ],
          }),
          h.jsxs("p", {
            children: [
              "Forgot your password?",
              " ",
              h.jsx(Nt, {
                to: "/user/forgot-password",
                className: "link-btn",
                children: "Reset Password",
              }),
            ],
          }),
        ],
      }),
    }),
  E3 = me.div`
  display: grid;
  height: calc(100vh - 8rem);
  justify-content: center;
  align-content: center;
  h3 {
    margin-bottom: 2rem;
  }
  .btn {
    margin-top: 1rem;
  }
  .checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .checkbox .form-input {
  }
  .form-label {
    margin: 0;
  }
`,
  k3 = async ({ request: e, params: t }) => {
    var o, i;
    const n = await e.formData(),
      r = Object.fromEntries(n);
    try {
      const a = await Ke.patch("/users/update-user", r);
      return B.success("profile updated"), ln("/dashboard/notes");
    } catch (a) {
      B.error(
        (i = (o = a == null ? void 0 : a.response) == null ? void 0 : o.data) ==
          null
          ? void 0
          : i.msg
      );
    }
    return null;
  },
  C3 = () => {
    const { user: e } = vr(),
      [t, n] = C.useState(e.image || ""),
      [r, o] = C.useState(e.name),
      [i, a] = C.useState(e.email),
      l = co(),
      [s, u] = C.useState(!1),
      c = async (g) => {
        const x = new FormData();
        x.append("name", r),
          x.append("email", i),
          x.append("image", t),
          l(x, { method: "post" });
      },
      d = async (g) => {
        var v, S, p, f;
        u(!0);
        const x = g.currentTarget.files[0],
          y = new FormData();
        y.append("image", x);
        try {
          const m = await Ke.post("/users/upload", y, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          B.success("Image uploaded"),
            n(
              (S =
                (v = m == null ? void 0 : m.data) == null ? void 0 : v.image) ==
                null
                ? void 0
                : S.src
            );
        } catch (m) {
          B.error(
            (f =
              (p = m == null ? void 0 : m.response) == null
                ? void 0
                : p.data) == null
              ? void 0
              : f.msg
          );
        } finally {
          u(!1);
        }
      };
    return h.jsx(E3, {
      children: h.jsxs("div", {
        className: "form",
        children: [
          h.jsxs("h3", { children: ["Hi, ", e.name] }),
          h.jsx("h5", {
            className: "title title-surround",
            children: "profile",
          }),
          h.jsxs("div", {
            className: "form-row",
            children: [
              h.jsx("label", {
                htmlFor: "name",
                className: "form-label",
                children: "name",
              }),
              h.jsx("input", {
                type: "text",
                value: r,
                onChange: (g) => o(g.currentTarget.value),
                className: "form-input",
                name: "name",
              }),
            ],
          }),
          h.jsxs("div", {
            className: "form-row",
            children: [
              h.jsx("label", {
                htmlFor: "email",
                className: "form-label",
                children: "email",
              }),
              h.jsx("input", {
                type: "email",
                value: i,
                onChange: (g) => a(g.currentTarget.value),
                className: "form-input",
                name: "email",
              }),
            ],
          }),
          h.jsxs("div", {
            className: "form-row",
            children: [
              h.jsx("label", {
                htmlFor: "image",
                className: "form-label",
                children: "image",
              }),
              h.jsx("input", {
                onChange: d,
                type: "file",
                className: "form-input",
                accept: "image/*",
                name: "image",
              }),
            ],
          }),
          h.jsxs("div", {
            className: "form-row checkbox",
            children: [
              h.jsx("input", {
                type: "checkbox",
                name: "",
                id: "",
                className: "form-input",
                onChange: (g) => (g.currentTarget.checked ? n("") : n(e.image)),
              }),
              h.jsx("label", {
                htmlFor: "",
                className: "form-label",
                children: "remove old profile picture",
              }),
            ],
          }),
          h.jsx("button", {
            className: "btn",
            onClick: c,
            disabled: s,
            children: "submit",
          }),
        ],
      }),
    });
  },
  j3 = me.div`
  text-align: center;
  .form-label {
    font-size: clamp(0.75rem, 2vw, 1rem);
    padding: 0.5rem;
    white-space: nowrap;
    font-weight: bold;
  }
  @media screen and (max-width: 500px) {
    .form-label {
      white-space: normal;
    }
  }
`,
  rd = ({ msg: e }) =>
    h.jsx(j3, {
      children: h.jsx("div", {
        className: "form-row",
        children: h.jsx("p", {
          className: "alert-success form-label",
          children: e,
        }),
      }),
    }),
  N3 = async ({ request: e }) => {
    var r, o;
    const t = await e.formData(),
      n = Object.fromEntries(t);
    try {
      const i = await Ke.post("/auth/register", n),
        { msg: a } = i.data;
      return B.success("registered successfully"), { msg: a, status: 201 };
    } catch (i) {
      return (
        B.error(
          (o =
            (r = i == null ? void 0 : i.response) == null ? void 0 : r.data) ==
            null
            ? void 0
            : o.msg
        ),
        i
      );
    }
  },
  P3 = () => {
    const e = Ic();
    return h.jsx(c0, {
      children: h.jsxs(Uc, {
        className: "form",
        method: "post",
        children: [
          h.jsx(Nt, { to: "/", children: h.jsx(Yn, {}) }),
          (e == null ? void 0 : e.status) === 201
            ? h.jsx(rd, { msg: e == null ? void 0 : e.msg })
            : h.jsxs(h.Fragment, {
                children: [
                  h.jsx(u0, { value: "register" }),
                  h.jsx(Kr, { name: "name", type: "text" }),
                  h.jsx(Kr, { name: "email" }),
                  h.jsx(Kr, { name: "password" }),
                  h.jsx(td, { value: "submit" }),
                  h.jsxs("p", {
                    children: [
                      "Already have an account?",
                      " ",
                      h.jsx(Nt, {
                        to: "/login",
                        className: "link-btn",
                        children: "Login",
                      }),
                    ],
                  }),
                ],
              }),
        ],
      }),
    });
  },
  od = me.div`
  header {
    width: 100vw;
    padding: 1rem 0;
  }
  .logo {
    display: block;
    margin: 0 auto;
  }
  .container {
    margin-top: 5rem;
  }
  h4 {
    margin-bottom: 2rem;
  }
`,
  R3 = async ({ request: e }) => {
    const [t, n] = [...new URLSearchParams(e.url).values()];
    return { passwordToken: t, email: n };
  },
  T3 = async ({ request: e }) => {
    var a, l;
    const t = await e.formData(),
      {
        password: n,
        "confirm-password": r,
        email: o,
        token: i,
      } = Object.fromEntries(t);
    if (n !== r) return B.error("Passwords didn't match");
    try {
      return await Ke.post("/auth/reset-password", {
        email: o,
        password: n,
        token: i,
      });
    } catch (s) {
      return (
        B.error(
          (l =
            (a = s == null ? void 0 : s.response) == null ? void 0 : a.data) ==
            null
            ? void 0
            : l.msg
        ),
        s
      );
    }
  },
  _3 = () => {
    const e = Ic(),
      t = xl();
    (e == null ? void 0 : e.status) === 200 &&
      setTimeout(() => t("/login"), 2e3);
    const { passwordToken: n, email: r } = vn(),
      [o, i] = C.useState(),
      [a, l] = C.useState(),
      s = co(),
      u = async (c) => {
        const d = new FormData();
        d.append("token", n),
          d.append("password", o),
          d.append("confirm-password", a),
          d.append("email", r),
          s(d, { method: "post" });
      };
    return h.jsxs(od, {
      children: [
        h.jsx("header", { children: h.jsx(Yn, {}) }),
        h.jsx("div", {
          className: "form",
          children:
            (e == null ? void 0 : e.status) === 200
              ? h.jsx(rd, {
                  msg: "Updated password. Redirecting shortly to Login Page!",
                })
              : h.jsxs(h.Fragment, {
                  children: [
                    h.jsxs("div", {
                      className: "form-row",
                      children: [
                        h.jsx("label", {
                          htmlFor: "password",
                          className: "form-label",
                          children: "password",
                        }),
                        h.jsx("input", {
                          name: "password",
                          required: !0,
                          type: "password",
                          className: "form-input",
                          onChange: (c) => i(c.currentTarget.value),
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "form-row",
                      children: [
                        h.jsx("label", {
                          htmlFor: "confirm-password",
                          className: "form-label",
                          children: "confirm password",
                        }),
                        h.jsx("input", {
                          name: "confirm-password",
                          required: !0,
                          type: "password",
                          className: "form-input",
                          onChange: (c) => l(c.currentTarget.value),
                        }),
                      ],
                    }),
                    h.jsx("button", {
                      type: "button",
                      className: "btn btn-block",
                      onClick: u,
                      children: "reset",
                    }),
                  ],
                }),
        }),
      ],
    });
  },
  L3 = async ({ request: e }) => {
    var r, o;
    const t = await e.formData(),
      { email: n } = Object.fromEntries(t);
    try {
      return await Ke.post("/auth/forgot-password", { email: n });
    } catch (i) {
      B.error(
        (o = (r = i == null ? void 0 : i.response) == null ? void 0 : r.data) ==
          null
          ? void 0
          : o.msg
      );
    }
    return null;
  },
  O3 = () => {
    var t;
    const e = Ic();
    return h.jsxs(od, {
      children: [
        h.jsx("header", {
          children: h.jsx(Nt, { to: "/login", children: h.jsx(Yn, {}) }),
        }),
        h.jsx(Uc, {
          method: "post",
          className: "form",
          children:
            (e == null ? void 0 : e.status) === 200
              ? h.jsx(rd, {
                  msg:
                    (t = e == null ? void 0 : e.data) == null ? void 0 : t.msg,
                })
              : h.jsxs(h.Fragment, {
                  children: [
                    h.jsx(Kr, { name: "email", type: "email" }),
                    h.jsx(td, { value: "submit" }),
                  ],
                }),
        }),
      ],
    });
  },
  D3 = async ({ request: e }) => {
    var r, o;
    const [t, n] = [...new URLSearchParams(e.url).values()];
    try {
      return (
        await Ke.post("/auth/verify-email", { verificationToken: t, email: n })
      ).data.msg;
    } catch (i) {
      return (o =
        (r = i == null ? void 0 : i.response) == null ? void 0 : r.data) == null
        ? void 0
        : o.msg;
    }
  },
  b3 = async ({ request: e }) => null,
  z3 = () => {
    const e = vn();
    return h.jsxs(od, {
      children: [
        h.jsx("header", { children: h.jsx(Yn, {}) }),
        h.jsxs("div", {
          className: "container",
          children: [
            h.jsx("h4", { children: e }),
            h.jsx(Nt, { to: "/login", className: "btn", children: "login" }),
          ],
        }),
      ],
    });
  },
  xp = me.div`
  .section-center {
    margin: 0 auto;
  }
`,
  M3 = async ({ request: e }) => {
    try {
      return (await Ke("/notes")).data;
    } catch (t) {
      return t;
    }
  },
  A3 = () => {
    const { notes: e } = vn(),
      [t, n] = C.useState("grid"),
      [r, o] = C.useState(!1);
    return e.length === 0
      ? h.jsx(xp, {
          children: h.jsx("div", {
            className: "section-center",
            children: h.jsx(ed, { text: "You'll see notes you create here." }),
          }),
        })
      : h.jsx(xp, {
          children: h.jsxs("div", {
            className: "section-center",
            children: [
              h.jsx(nd, { view: t, setOptions: o, setView: n }),
              h.jsx(q4, { options: r, setOptions: o, view: t }),
            ],
          }),
        });
  },
  F3 = me.div`
  display: flex;
  background: ${(e) => e.bg};
  min-height: calc(100vh - 6rem);
  [contentEditable="true"]:empty:before {
    content: attr(placeholder);
    color: rgba(var(--box-shadow-color), 0.6);
    text-transform: capitalize;
    font-family: ${nl[9]};
    letter-spacing: 1px;
  }
  .back-btn {
    color: var(--primary-500);
    font-size: clamp(0.5rem, 10vw, 1rem);
  }
  .edit-panel {
    margin-bottom: 2rem;
  }
  .section-center {
    padding: 2rem 0;
    margin: 0 auto;
    width: 90%;
  }
  .note-title {
    border-bottom: 2px solid var(--primary-500);
    margin-bottom: 1rem;
    overflow: hidden;
    padding-bottom: 0.5rem;
  }
  .title-input {
    overflow: hidden;
  }
  .note-description {
    overflow: hidden;
    margin-bottom: 2rem;
  }
  .description-input {
    overflow: hidden;
  }
  .fields {
    display: grid;
    /* width: 100%; */
  }
  .btn {
    margin: 0 auto;
  }
  .options {
    display: grid;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    width: 6rem;
    grid-template-columns: repeat(3, 2rem);
    background: var(--bg-color);
    margin: 0 auto;
    justify-items: center;
    margin-top: 2rem;
  }
  .edit-btn {
    border-radius: var(--border-radius);
  }
  .edit-btn-name {
    display: none;
    transition: var(--transition);
    padding: 0.25rem;
  }
  .show-edit-btn-name {
    display: block;
    margin-top: 1rem;
  }
`,
  Sp = async ({ params: e, request: t }) => {
    var i, a;
    const n = await t.formData(),
      r = Object.fromEntries(n),
      { id: o } = e;
    try {
      const l = await Ke.patch(`/notes/${o}`, r);
      if (
        (B.success(r.msg),
        r.msg === "note deleted" ||
          r.msg === "note pinned" ||
          r.msg === "note unpinned" ||
          r.msg === "note unarchived")
      )
        return ln("../notes");
      if (r.msg === "note archived") return ln("../archive");
    } catch (l) {
      B.error(
        (a = (i = l == null ? void 0 : l.response) == null ? void 0 : i.data) ==
          null
          ? void 0
          : a.msg
      );
    }
    return null;
  },
  Ep = async ({ params: e }) => {
    var n, r;
    const { id: t } = e;
    try {
      return (await Ke(`/notes/${t}`)).data;
    } catch (o) {
      return (
        B.error(
          (r =
            (n = o == null ? void 0 : o.response) == null ? void 0 : n.data) ==
            null
            ? void 0
            : r.msg
        ),
        o
      );
    }
  },
  kp = () => {
    const { note: e } = vn(),
      t = C.useRef(""),
      n = C.useRef(""),
      [r, o] = C.useState(e.title),
      [i, a] = C.useState(e.description),
      [l, s] = C.useState(e.color),
      [u, c] = C.useState(e.font),
      d = co(),
      g = (v) => {
        document.execCommand(v);
      },
      x = (v) => {
        const S = new FormData();
        S.append("title", r),
          S.append("description", i),
          S.append("color", l),
          S.append("font", u),
          S.append("msg", "note updated");
        const p = Object.fromEntries(S);
        d(p, { method: "post" });
      },
      y = (v) => {
        const S = new FormData(),
          p = v.currentTarget.id;
        p === "delete" &&
          (S.append("deleted", !0),
          S.append("pinned", !1),
          S.append("archived", !1)),
          p === "pin" && (S.append("pinned", !0), S.append("archived", !1)),
          p === "archive" && (S.append("pinned", !1), S.append("archived", !0)),
          p === "unarchive" && S.append("archived", !1),
          p === "unpin" && S.append("pinned", !1),
          S.append("msg", `note ${p.endsWith("pin") ? p + "ne" : p}d`);
        const f = Object.fromEntries(S);
        d(f, { method: "post" });
      };
    return (
      C.useEffect(() => {
        (t.current.innerHTML = r), (n.current.innerHTML = i);
      }, []),
      h.jsx(F3, {
        bg: l,
        children: h.jsxs("div", {
          className: "section-center",
          children: [
            h.jsx(Nt, {
              className: "back-btn",
              to: "../notes",
              children: h.jsx(T4, {}),
            }),
            h.jsx(r0, {
              transform: g,
              currentColor: l,
              currentFont: u,
              setCurrentColor: s,
              setCurrentFont: c,
            }),
            h.jsxs("div", {
              className: "fields",
              children: [
                h.jsx("div", {
                  className: "note-title",
                  children: h.jsx("div", {
                    className: "title-input",
                    placeholder: "title",
                    ref: t,
                    style: { fontFamily: u },
                    contentEditable: !0,
                    suppressContentEditableWarning: !0,
                    onInput: (v) => o(t.current.innerHTML),
                  }),
                }),
                h.jsx("div", {
                  className: "note-description",
                  children: h.jsx("div", {
                    className: "description-input",
                    placeholder: "description",
                    ref: n,
                    contentEditable: !0,
                    suppressContentEditableWarning: !0,
                    style: { fontFamily: u },
                    onInput: (v) => a(n.current.innerHTML),
                  }),
                }),
                h.jsx("button", {
                  onClick: x,
                  type: "submit",
                  className: "btn",
                  children: "save",
                }),
              ],
            }),
            h.jsxs("div", {
              className: "options",
              children: [
                h.jsx(nn, {
                  icon: h.jsx(e0, {}),
                  id: "delete",
                  view: "list",
                  submitForm: y,
                }),
                h.jsx(nn, {
                  icon: e.archived ? h.jsx(i0, {}) : h.jsx(o0, {}),
                  id: e.archived ? "unarchive" : "archive",
                  view: "list",
                  submitForm: y,
                }),
                h.jsx(nn, {
                  icon: e.pinned ? h.jsx(l0, {}) : h.jsx(a0, {}),
                  id: e.pinned ? "unpin" : "pin",
                  view: "list",
                  submitForm: y,
                }),
              ],
            }),
            h.jsx("p", { className: "edit-btn-name", children: "name" }),
          ],
        }),
      })
    );
  },
  I3 = async ({ request: e, params: t }) => {
    var i, a;
    const n = await e.formData(),
      r = Object.fromEntries(n),
      { id: o } = t;
    try {
      const l = await Ke.patch(`/notes/${o}`, r),
        s = "note " + (r == null ? void 0 : r.msg);
      if ((B.success(s), (r == null ? void 0 : r.msg) === "archived"))
        return ln("/dashboard/archive");
      if ((r == null ? void 0 : r.msg) === "deleted")
        return ln("/dashboard/bin");
    } catch (l) {
      B(
        (a = (i = l == null ? void 0 : l.response) == null ? void 0 : i.data) ==
          null
          ? void 0
          : a.msg
      );
    }
    return ln("/dashboard/notes");
  },
  $3 = "/assets/notes-list-BxUWsLaz.svg",
  U3 = () =>
    h.jsxs("div", {
      className: "container",
      children: [
        h.jsx("nav", { children: h.jsx(Yn, {}) }),
        h.jsxs("section", {
          className: "hero",
          children: [
            h.jsxs("div", {
              className: "hero-description",
              children: [
                h.jsx("h1", { className: "hero-title", children: "notes app" }),
                h.jsx("p", {
                  className: "text",
                  children:
                    "Notes is a good helper to manage your schedules and notes. It gives you a quick and simple notepad editing experience when you write notes, memo, email, message, shopping list and to do list. It makes to take a note easier than any other notepad and memo apps.Capture notes, share them with others, and access them from your computer, phone or tablet.",
                }),
                h.jsxs("div", {
                  className: "btn-container",
                  children: [
                    h.jsx(Nt, {
                      to: "/register",
                      className: "btn",
                      children: "register",
                    }),
                    h.jsx(Nt, {
                      to: "/login",
                      className: "btn",
                      children: "login",
                    }),
                  ],
                }),
              ],
            }),
            h.jsx("img", { className: "hero-img", src: $3, alt: "" }),
          ],
        }),
      ],
    }),
  B3 = () => {
    const e = localStorage.getItem("theme") === "true";
    return document.body.classList.toggle("dark-theme", e), e;
  };
B3();
const H3 = m2([
    {
      path: "/",
      element: h.jsx(m3, {}),
      errorElement: h.jsx(p3, {}),
      children: [
        { index: !0, element: h.jsx(U3, {}) },
        { path: "login", element: h.jsx(S3, {}), action: x3 },
        { path: "register", element: h.jsx(P3, {}), action: N3 },
        {
          path: "dashboard",
          element: h.jsx(p4, {}),
          loader: d4,
          children: [
            { index: !0, element: h.jsx(w3, {}), loader: y3 },
            { path: "addNote", element: h.jsx(a3, {}), action: i3 },
            { path: "notes", element: h.jsx(A3, {}), loader: M3 },
            {
              path: "notes/:id",
              element: h.jsx(kp, {}),
              loader: Ep,
              action: Sp,
            },
            { path: "archive", element: h.jsx(s3, {}), loader: l3 },
            {
              path: "archive/:id",
              element: h.jsx(kp, {}),
              loader: Ep,
              action: Sp,
            },
            { path: "bin", element: h.jsx(c3, {}), loader: u3 },
            { path: "profile", element: h.jsx(C3, {}), action: k3 },
            { path: "update-note/:id", action: I3 },
          ],
        },
      ],
    },
    {
      path: "/user/verify-email",
      element: h.jsx(z3, {}),
      action: b3,
      loader: D3,
    },
    { path: "/user/forgot-password", element: h.jsx(O3, {}), action: L3 },
    {
      path: "/user/reset-password",
      element: h.jsx(_3, {}),
      loader: R3,
      action: T3,
    },
  ]),
  V3 = () => h.jsx(k2, { router: H3 });
Ns.createRoot(document.getElementById("root")).render(
  h.jsxs(h.Fragment, {
    children: [h.jsx(c4, { position: "top-center" }), h.jsx(V3, {})],
  })
);
