var fn = Object.defineProperty;
var pn = (e, r, t) => r in e ? fn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var nr = (e, r, t) => (pn(e, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as D, jsxs as ae, Fragment as Bt } from "react/jsx-runtime";
import * as F from "react";
import He, { useRef as be, useContext as Ye, useLayoutEffect as Ir, useMemo as Oe, useDebugValue as or, createElement as mn, createContext as Nr, useState as me, useCallback as we, useEffect as pe, forwardRef as vn } from "react";
var ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, it = {}, yn = {
  get exports() {
    return it;
  },
  set exports(e) {
    it = e;
  }
}, ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function gn() {
  if (sr)
    return ne;
  sr = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var k = m.$$typeof;
      switch (k) {
        case e:
          switch (m = m.type, m) {
            case t:
            case o:
            case n:
            case a:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case i:
                case l:
                case f:
                case u:
                case s:
                  return m;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  return ne.ContextConsumer = i, ne.ContextProvider = s, ne.Element = e, ne.ForwardRef = l, ne.Fragment = t, ne.Lazy = f, ne.Memo = u, ne.Portal = r, ne.Profiler = o, ne.StrictMode = n, ne.Suspense = a, ne.SuspenseList = d, ne.isAsyncMode = function() {
    return !1;
  }, ne.isConcurrentMode = function() {
    return !1;
  }, ne.isContextConsumer = function(m) {
    return b(m) === i;
  }, ne.isContextProvider = function(m) {
    return b(m) === s;
  }, ne.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ne.isForwardRef = function(m) {
    return b(m) === l;
  }, ne.isFragment = function(m) {
    return b(m) === t;
  }, ne.isLazy = function(m) {
    return b(m) === f;
  }, ne.isMemo = function(m) {
    return b(m) === u;
  }, ne.isPortal = function(m) {
    return b(m) === r;
  }, ne.isProfiler = function(m) {
    return b(m) === o;
  }, ne.isStrictMode = function(m) {
    return b(m) === n;
  }, ne.isSuspense = function(m) {
    return b(m) === a;
  }, ne.isSuspenseList = function(m) {
    return b(m) === d;
  }, ne.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === t || m === o || m === n || m === a || m === d || m === v || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === u || m.$$typeof === s || m.$$typeof === i || m.$$typeof === l || m.$$typeof === y || m.getModuleId !== void 0);
  }, ne.typeOf = b, ne;
}
var oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function wn() {
  return ir || (ir = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, b = !1, m = !1, k = !1, R = !1, Z;
    Z = Symbol.for("react.module.reference");
    function O(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === t || A === o || R || A === n || A === a || A === d || k || A === v || y || b || m || typeof A == "object" && A !== null && (A.$$typeof === f || A.$$typeof === u || A.$$typeof === s || A.$$typeof === i || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === Z || A.getModuleId !== void 0));
    }
    function p(A) {
      if (typeof A == "object" && A !== null) {
        var ee = A.$$typeof;
        switch (ee) {
          case e:
            var le = A.type;
            switch (le) {
              case t:
              case o:
              case n:
              case a:
              case d:
                return le;
              default:
                var re = le && le.$$typeof;
                switch (re) {
                  case c:
                  case i:
                  case l:
                  case f:
                  case u:
                  case s:
                    return re;
                  default:
                    return ee;
                }
            }
          case r:
            return ee;
        }
      }
    }
    var M = i, T = s, z = e, j = l, I = t, q = f, Q = u, P = r, _ = o, x = n, N = a, w = d, Y = !1, B = !1;
    function U(A) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(A) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function E(A) {
      return p(A) === i;
    }
    function $(A) {
      return p(A) === s;
    }
    function S(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function H(A) {
      return p(A) === l;
    }
    function h(A) {
      return p(A) === t;
    }
    function V(A) {
      return p(A) === f;
    }
    function C(A) {
      return p(A) === u;
    }
    function X(A) {
      return p(A) === r;
    }
    function G(A) {
      return p(A) === o;
    }
    function K(A) {
      return p(A) === n;
    }
    function g(A) {
      return p(A) === a;
    }
    function ce(A) {
      return p(A) === d;
    }
    oe.ContextConsumer = M, oe.ContextProvider = T, oe.Element = z, oe.ForwardRef = j, oe.Fragment = I, oe.Lazy = q, oe.Memo = Q, oe.Portal = P, oe.Profiler = _, oe.StrictMode = x, oe.Suspense = N, oe.SuspenseList = w, oe.isAsyncMode = U, oe.isConcurrentMode = te, oe.isContextConsumer = E, oe.isContextProvider = $, oe.isElement = S, oe.isForwardRef = H, oe.isFragment = h, oe.isLazy = V, oe.isMemo = C, oe.isPortal = X, oe.isProfiler = G, oe.isStrictMode = K, oe.isSuspense = g, oe.isSuspenseList = ce, oe.isValidElementType = O, oe.typeOf = p;
  }()), oe;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = gn() : e.exports = wn();
})(yn);
function bn(e) {
  function r(E, $, S, H, h) {
    for (var V = 0, C = 0, X = 0, G = 0, K, g, ce = 0, A = 0, ee, le = ee = K = 0, re = 0, he = 0, rt = 0, fe = 0, ct = S.length, nt = ct - 1, Me, J = "", de = "", wt = "", bt = "", De; re < ct; ) {
      if (g = S.charCodeAt(re), re === nt && C + G + X + V !== 0 && (C !== 0 && (g = C === 47 ? 10 : 47), G = X = V = 0, ct++, nt++), C + G + X + V === 0) {
        if (re === nt && (0 < he && (J = J.replace(f, "")), 0 < J.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += S.charAt(re);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (J = J.trim(), K = J.charCodeAt(0), ee = 1, fe = ++re; re < ct; ) {
              switch (g = S.charCodeAt(re)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (g = S.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (le = re + 1; le < nt; ++le)
                          switch (S.charCodeAt(le)) {
                            case 47:
                              if (g === 42 && S.charCodeAt(le - 1) === 42 && re + 2 !== le) {
                                re = le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (g === 47) {
                                re = le + 1;
                                break e;
                              }
                          }
                        re = le;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; re++ < nt && S.charCodeAt(re) !== g; )
                    ;
              }
              if (ee === 0)
                break;
              re++;
            }
            switch (ee = S.substring(fe, re), K === 0 && (K = (J = J.replace(u, "").trim()).charCodeAt(0)), K) {
              case 64:
                switch (0 < he && (J = J.replace(f, "")), g = J.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    he = $;
                    break;
                  default:
                    he = N;
                }
                if (ee = r($, he, ee, g, h + 1), fe = ee.length, 0 < Y && (he = t(N, J, rt), De = c(3, ee, he, $, P, Q, fe, g, h, H), J = he.join(""), De !== void 0 && (fe = (ee = De.trim()).length) === 0 && (g = 0, ee = "")), 0 < fe)
                  switch (g) {
                    case 115:
                      J = J.replace(M, i);
                    case 100:
                    case 109:
                    case 45:
                      ee = J + "{" + ee + "}";
                      break;
                    case 107:
                      J = J.replace(R, "$1 $2"), ee = J + "{" + ee + "}", ee = x === 1 || x === 2 && s("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                      break;
                    default:
                      ee = J + ee, H === 112 && (ee = (de += ee, ""));
                  }
                else
                  ee = "";
                break;
              default:
                ee = r($, t($, J, rt), ee, H, h + 1);
            }
            wt += ee, ee = rt = he = le = K = 0, J = "", g = S.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (J = (0 < he ? J.replace(f, "") : J).trim(), 1 < (fe = J.length))
              switch (le === 0 && (K = J.charCodeAt(0), K === 45 || 96 < K && 123 > K) && (fe = (J = J.replace(" ", ":")).length), 0 < Y && (De = c(1, J, $, E, P, Q, de.length, H, h, H)) !== void 0 && (fe = (J = De.trim()).length) === 0 && (J = "\0\0"), K = J.charCodeAt(0), g = J.charCodeAt(1), K) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    bt += J + S.charAt(re);
                    break;
                  }
                default:
                  J.charCodeAt(fe - 1) !== 58 && (de += o(J, K, g, J.charCodeAt(2)));
              }
            rt = he = le = K = 0, J = "", g = S.charCodeAt(++re);
        }
      }
      switch (g) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + K === 0 && H !== 107 && 0 < J.length && (he = 1, J += "\0"), 0 < Y * U && c(0, J, $, E, P, Q, de.length, H, h, H), Q = 1, P++;
          break;
        case 59:
        case 125:
          if (C + G + X + V === 0) {
            Q++;
            break;
          }
        default:
          switch (Q++, Me = S.charAt(re), g) {
            case 9:
            case 32:
              if (G + V + C === 0)
                switch (ce) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Me = "";
                    break;
                  default:
                    g !== 32 && (Me = " ");
                }
              break;
            case 0:
              Me = "\\0";
              break;
            case 12:
              Me = "\\f";
              break;
            case 11:
              Me = "\\v";
              break;
            case 38:
              G + C + V === 0 && (he = rt = 1, Me = "\f" + Me);
              break;
            case 108:
              if (G + C + V + _ === 0 && 0 < le)
                switch (re - le) {
                  case 2:
                    ce === 112 && S.charCodeAt(re - 3) === 58 && (_ = ce);
                  case 8:
                    A === 111 && (_ = A);
                }
              break;
            case 58:
              G + C + V === 0 && (le = re);
              break;
            case 44:
              C + X + G + V === 0 && (he = 1, Me += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (G = G === g ? 0 : G === 0 ? g : G);
              break;
            case 91:
              G + C + X === 0 && V++;
              break;
            case 93:
              G + C + X === 0 && V--;
              break;
            case 41:
              G + C + V === 0 && X--;
              break;
            case 40:
              if (G + C + V === 0) {
                if (K === 0)
                  switch (2 * ce + 3 * A) {
                    case 533:
                      break;
                    default:
                      K = 1;
                  }
                X++;
              }
              break;
            case 64:
              C + X + G + V + le + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < G + V + X))
                switch (C) {
                  case 0:
                    switch (2 * g + 3 * S.charCodeAt(re + 1)) {
                      case 235:
                        C = 47;
                        break;
                      case 220:
                        fe = re, C = 42;
                    }
                    break;
                  case 42:
                    g === 47 && ce === 42 && fe + 2 !== re && (S.charCodeAt(fe + 2) === 33 && (de += S.substring(fe, re + 1)), Me = "", C = 0);
                }
          }
          C === 0 && (J += Me);
      }
      A = ce, ce = g, re++;
    }
    if (fe = de.length, 0 < fe) {
      if (he = $, 0 < Y && (De = c(2, de, he, E, P, Q, fe, H, h, H), De !== void 0 && (de = De).length === 0))
        return bt + de + wt;
      if (de = he.join(",") + "{" + de + "}", x * _ !== 0) {
        switch (x !== 2 || s(de, 2) || (_ = 0), _) {
          case 111:
            de = de.replace(O, ":-moz-$1") + de;
            break;
          case 112:
            de = de.replace(Z, "::-webkit-input-$1") + de.replace(Z, "::-moz-$1") + de.replace(Z, ":-ms-input-$1") + de;
        }
        _ = 0;
      }
    }
    return bt + de + wt;
  }
  function t(E, $, S) {
    var H = $.trim().split(m);
    $ = H;
    var h = H.length, V = E.length;
    switch (V) {
      case 0:
      case 1:
        var C = 0;
        for (E = V === 0 ? "" : E[0] + " "; C < h; ++C)
          $[C] = n(E, $[C], S).trim();
        break;
      default:
        var X = C = 0;
        for ($ = []; C < h; ++C)
          for (var G = 0; G < V; ++G)
            $[X++] = n(E[G] + " ", H[C], S).trim();
    }
    return $;
  }
  function n(E, $, S) {
    var H = $.charCodeAt(0);
    switch (33 > H && (H = ($ = $.trim()).charCodeAt(0)), H) {
      case 38:
        return $.replace(k, "$1" + E.trim());
      case 58:
        return E.trim() + $.replace(k, "$1" + E.trim());
      default:
        if (0 < 1 * S && 0 < $.indexOf("\f"))
          return $.replace(k, (E.charCodeAt(0) === 58 ? "" : "$1") + E.trim());
    }
    return E + $;
  }
  function o(E, $, S, H) {
    var h = E + ";", V = 2 * $ + 3 * S + 4 * H;
    if (V === 944) {
      E = h.indexOf(":", 9) + 1;
      var C = h.substring(E, h.length - 1).trim();
      return C = h.substring(0, E).trim() + C + ";", x === 1 || x === 2 && s(C, 1) ? "-webkit-" + C + C : C;
    }
    if (x === 0 || x === 2 && !s(h, 1))
      return h;
    switch (V) {
      case 1015:
        return h.charCodeAt(10) === 97 ? "-webkit-" + h + h : h;
      case 951:
        return h.charCodeAt(3) === 116 ? "-webkit-" + h + h : h;
      case 963:
        return h.charCodeAt(5) === 110 ? "-webkit-" + h + h : h;
      case 1009:
        if (h.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + h + h;
      case 978:
        return "-webkit-" + h + "-moz-" + h + h;
      case 1019:
      case 983:
        return "-webkit-" + h + "-moz-" + h + "-ms-" + h + h;
      case 883:
        if (h.charCodeAt(8) === 45)
          return "-webkit-" + h + h;
        if (0 < h.indexOf("image-set(", 11))
          return h.replace(q, "$1-webkit-$2") + h;
        break;
      case 932:
        if (h.charCodeAt(4) === 45)
          switch (h.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + h.replace("-grow", "") + "-webkit-" + h + "-ms-" + h.replace("grow", "positive") + h;
            case 115:
              return "-webkit-" + h + "-ms-" + h.replace("shrink", "negative") + h;
            case 98:
              return "-webkit-" + h + "-ms-" + h.replace("basis", "preferred-size") + h;
          }
        return "-webkit-" + h + "-ms-" + h + h;
      case 964:
        return "-webkit-" + h + "-ms-flex-" + h + h;
      case 1023:
        if (h.charCodeAt(8) !== 99)
          break;
        return C = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + h + "-ms-flex-pack" + C + h;
      case 1005:
        return y.test(h) ? h.replace(v, ":-webkit-") + h.replace(v, ":-moz-") + h : h;
      case 1e3:
        switch (C = h.substring(13).trim(), $ = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt($)) {
          case 226:
            C = h.replace(p, "tb");
            break;
          case 232:
            C = h.replace(p, "tb-rl");
            break;
          case 220:
            C = h.replace(p, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + C + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch ($ = (h = E).length - 10, C = (h.charCodeAt($) === 33 ? h.substring(0, $) : h).substring(E.indexOf(":", 7) + 1).trim(), V = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8))
              break;
          case 115:
            h = h.replace(C, "-webkit-" + C) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(C, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + h.replace(C, "-webkit-" + C) + ";" + h.replace(C, "-ms-" + C + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45)
          switch (h.charCodeAt(6)) {
            case 105:
              return C = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + C + "-ms-flex-" + C + h;
            case 115:
              return "-webkit-" + h + "-ms-flex-item-" + h.replace(z, "") + h;
            default:
              return "-webkit-" + h + "-ms-flex-line-pack" + h.replace("align-content", "").replace(z, "") + h;
          }
        break;
      case 973:
      case 989:
        if (h.charCodeAt(3) !== 45 || h.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (I.test(E) === !0)
          return (C = E.substring(E.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(E.replace("stretch", "fill-available"), $, S, H).replace(":fill-available", ":stretch") : h.replace(C, "-webkit-" + C) + h.replace(C, "-moz-" + C.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, S + H === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10))
          return h.substring(0, h.indexOf(";", 27) + 1).replace(b, "$1-webkit-$2") + h;
    }
    return h;
  }
  function s(E, $) {
    var S = E.indexOf($ === 1 ? ":" : "{"), H = E.substring(0, $ !== 3 ? S : 10);
    return S = E.substring(S + 1, E.length - 1), B($ !== 2 ? H : H.replace(j, "$1"), S, $);
  }
  function i(E, $) {
    var S = o($, $.charCodeAt(0), $.charCodeAt(1), $.charCodeAt(2));
    return S !== $ + ";" ? S.replace(T, " or ($1)").substring(4) : "(" + $ + ")";
  }
  function c(E, $, S, H, h, V, C, X, G, K) {
    for (var g = 0, ce = $, A; g < Y; ++g)
      switch (A = w[g].call(d, E, ce, S, H, h, V, C, X, G, K)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = A;
      }
    if (ce !== $)
      return ce;
  }
  function l(E) {
    switch (E) {
      case void 0:
      case null:
        Y = w.length = 0;
        break;
      default:
        if (typeof E == "function")
          w[Y++] = E;
        else if (typeof E == "object")
          for (var $ = 0, S = E.length; $ < S; ++$)
            l(E[$]);
        else
          U = !!E | 0;
    }
    return l;
  }
  function a(E) {
    return E = E.prefix, E !== void 0 && (B = null, E ? typeof E != "function" ? x = 1 : (x = 2, B = E) : x = 0), a;
  }
  function d(E, $) {
    var S = E;
    if (33 > S.charCodeAt(0) && (S = S.trim()), te = S, S = [te], 0 < Y) {
      var H = c(-1, $, S, S, P, Q, 0, 0, 0, 0);
      H !== void 0 && typeof H == "string" && ($ = H);
    }
    var h = r(N, S, $, 0, 0);
    return 0 < Y && (H = c(-2, h, S, S, P, Q, h.length, 0, 0, 0), H !== void 0 && (h = H)), te = "", _ = 0, Q = P = 1, h;
  }
  var u = /^\0+/g, f = /[\0\r\f]/g, v = /: */g, y = /zoo|gra/, b = /([,: ])(transform)/g, m = /,\r+?/g, k = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, Z = /::(place)/g, O = /:(read-only)/g, p = /[svh]\w+-[tblr]{2}/, M = /\(\s*(.*)\s*\)/g, T = /([\s\S]*?);/g, z = /-self|flex-/g, j = /[^]*?(:[rp][el]a[\w-]+)[^]*/, I = /stretch|:\s*\w+\-(?:conte|avail)/, q = /([^-])(image-set\()/, Q = 1, P = 1, _ = 0, x = 1, N = [], w = [], Y = 0, B = null, U = 0, te = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var xn = {
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
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Cn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Sn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ar = /* @__PURE__ */ Cn(
  function(e) {
    return Sn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $t = {}, Mn = {
  get exports() {
    return $t;
  },
  set exports(e) {
    $t = e;
  }
}, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function $n() {
  if (cr)
    return se;
  cr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function Z(p) {
    if (typeof p == "object" && p !== null) {
      var M = p.$$typeof;
      switch (M) {
        case r:
          switch (p = p.type, p) {
            case l:
            case a:
            case n:
            case s:
            case o:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case d:
                case y:
                case v:
                case i:
                  return p;
                default:
                  return M;
              }
          }
        case t:
          return M;
      }
    }
  }
  function O(p) {
    return Z(p) === a;
  }
  return se.AsyncMode = l, se.ConcurrentMode = a, se.ContextConsumer = c, se.ContextProvider = i, se.Element = r, se.ForwardRef = d, se.Fragment = n, se.Lazy = y, se.Memo = v, se.Portal = t, se.Profiler = s, se.StrictMode = o, se.Suspense = u, se.isAsyncMode = function(p) {
    return O(p) || Z(p) === l;
  }, se.isConcurrentMode = O, se.isContextConsumer = function(p) {
    return Z(p) === c;
  }, se.isContextProvider = function(p) {
    return Z(p) === i;
  }, se.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }, se.isForwardRef = function(p) {
    return Z(p) === d;
  }, se.isFragment = function(p) {
    return Z(p) === n;
  }, se.isLazy = function(p) {
    return Z(p) === y;
  }, se.isMemo = function(p) {
    return Z(p) === v;
  }, se.isPortal = function(p) {
    return Z(p) === t;
  }, se.isProfiler = function(p) {
    return Z(p) === s;
  }, se.isStrictMode = function(p) {
    return Z(p) === o;
  }, se.isSuspense = function(p) {
    return Z(p) === u;
  }, se.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === a || p === s || p === o || p === u || p === f || typeof p == "object" && p !== null && (p.$$typeof === y || p.$$typeof === v || p.$$typeof === i || p.$$typeof === c || p.$$typeof === d || p.$$typeof === m || p.$$typeof === k || p.$$typeof === R || p.$$typeof === b);
  }, se.typeOf = Z, se;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function kn() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function Z(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === a || g === s || g === o || g === u || g === f || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === v || g.$$typeof === i || g.$$typeof === c || g.$$typeof === d || g.$$typeof === m || g.$$typeof === k || g.$$typeof === R || g.$$typeof === b);
    }
    function O(g) {
      if (typeof g == "object" && g !== null) {
        var ce = g.$$typeof;
        switch (ce) {
          case r:
            var A = g.type;
            switch (A) {
              case l:
              case a:
              case n:
              case s:
              case o:
              case u:
                return A;
              default:
                var ee = A && A.$$typeof;
                switch (ee) {
                  case c:
                  case d:
                  case y:
                  case v:
                  case i:
                    return ee;
                  default:
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var p = l, M = a, T = c, z = i, j = r, I = d, q = n, Q = y, P = v, _ = t, x = s, N = o, w = u, Y = !1;
    function B(g) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(g) || O(g) === l;
    }
    function U(g) {
      return O(g) === a;
    }
    function te(g) {
      return O(g) === c;
    }
    function E(g) {
      return O(g) === i;
    }
    function $(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function S(g) {
      return O(g) === d;
    }
    function H(g) {
      return O(g) === n;
    }
    function h(g) {
      return O(g) === y;
    }
    function V(g) {
      return O(g) === v;
    }
    function C(g) {
      return O(g) === t;
    }
    function X(g) {
      return O(g) === s;
    }
    function G(g) {
      return O(g) === o;
    }
    function K(g) {
      return O(g) === u;
    }
    ie.AsyncMode = p, ie.ConcurrentMode = M, ie.ContextConsumer = T, ie.ContextProvider = z, ie.Element = j, ie.ForwardRef = I, ie.Fragment = q, ie.Lazy = Q, ie.Memo = P, ie.Portal = _, ie.Profiler = x, ie.StrictMode = N, ie.Suspense = w, ie.isAsyncMode = B, ie.isConcurrentMode = U, ie.isContextConsumer = te, ie.isContextProvider = E, ie.isElement = $, ie.isForwardRef = S, ie.isFragment = H, ie.isLazy = h, ie.isMemo = V, ie.isPortal = C, ie.isProfiler = X, ie.isStrictMode = G, ie.isSuspense = K, ie.isValidElementType = Z, ie.typeOf = O;
  }()), ie;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = $n() : e.exports = kn();
})(Mn);
var Vt = $t, _n = {
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
  type: !0
}, En = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Tn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Hr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Gt = {};
Gt[Vt.ForwardRef] = Tn;
Gt[Vt.Memo] = Hr;
function dr(e) {
  return Vt.isMemo(e) ? Hr : Gt[e.$$typeof] || _n;
}
var Pn = Object.defineProperty, Dn = Object.getOwnPropertyNames, ur = Object.getOwnPropertySymbols, Rn = Object.getOwnPropertyDescriptor, On = Object.getPrototypeOf, hr = Object.prototype;
function Zr(e, r, t) {
  if (typeof r != "string") {
    if (hr) {
      var n = On(r);
      n && n !== hr && Zr(e, n, t);
    }
    var o = Dn(r);
    ur && (o = o.concat(ur(r)));
    for (var s = dr(e), i = dr(r), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!En[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var a = Rn(r, l);
        try {
          Pn(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var An = Zr;
function $e() {
  return ($e = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var fr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, kt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !it.typeOf(e);
}, pt = Object.freeze([]), Ae = Object.freeze({});
function Ve(e) {
  return typeof e == "function";
}
function _t(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ut(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ge = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Xt = typeof window < "u" && "HTMLElement" in window, Ln = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Yn = {}, In = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Nn() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ee(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Nn.apply(void 0, [In[e]].concat(t)).trim());
}
var Hn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++)
      n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, i = s; t >= i; )
        (i <<= 1) < 0 && Ee(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = s; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), a = 0, d = n.length; a < d; a++)
      this.tag.insertRule(l, n[a]) && (this.groupSizes[t]++, l++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, c = s; c < i; c++)
      n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), ht = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), st = 1, lt = function(e) {
  if (ht.has(e))
    return ht.get(e);
  for (; mt.has(st); )
    st++;
  var r = st++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ee(16, "" + r), ht.set(e, r), mt.set(r, e), r;
}, Zn = function(e) {
  return mt.get(e);
}, Wn = function(e, r) {
  r >= st && (st = r + 1), ht.set(e, r), mt.set(r, e);
}, Fn = "style[" + Ge + '][data-styled-version="5.3.8"]', zn = new RegExp("^" + Ge + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), jn = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (n = o[s]) && e.registerName(r, n);
}, Bn = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(zn);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (Wn(a, l), jn(e, a, c[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, Vn = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Wr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var d = l[a];
      if (d && d.nodeType === 1 && d.hasAttribute(Ge))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ge, "active"), n.setAttribute("data-styled-version", "5.3.8");
  var i = Vn();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, s), n;
}, Gn = function() {
  function e(t) {
    var n = this.element = Wr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      Ee(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Un = function() {
  function e(t) {
    var n = this.element = Wr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Xn = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), pr = Xt, Jn = { isServer: !Xt, useCSSOMInjection: !Ln }, vt = function() {
  function e(t, n, o) {
    t === void 0 && (t = Ae), n === void 0 && (n = {}), this.options = $e({}, Jn, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Xt && pr && (pr = !1, function(s) {
      for (var i = document.querySelectorAll(Fn), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(Ge) !== "active" && (Bn(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return lt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e($e({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, i = n.target, t = o ? new Xn(i) : s ? new Gn(i) : new Un(i), new Hn(t)));
    var t, n, o, s, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (lt(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(lt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(lt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", i = 0; i < o; i++) {
        var c = Zn(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = n.getGroup(i);
          if (l && a && l.size) {
            var d = Ge + ".g" + i + '[id="' + c + '"]', u = "";
            l !== void 0 && l.forEach(function(f) {
              f.length > 0 && (u += f + ",");
            }), s += "" + a + d + '{content:"' + u + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), qn = /(a)(d)/gi, mr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Et(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = mr(r % 52) + t;
  return (mr(r % 52) + t).replace(qn, "$1-$2");
}
var Ie = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Fr = function(e) {
  return Ie(5381, e);
};
function zr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Ve(t) && !Ut(t))
      return !1;
  }
  return !0;
}
var Kn = Fr("5.3.8"), Qn = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && zr(r), this.componentId = t, this.baseHash = Ie(Kn, t), this.baseStyle = n, vt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Ze(this.rules, r, t, n).join(""), c = Et(Ie(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = n(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = Ie(this.baseHash, n.hash), u = "", f = 0; f < a; f++) {
        var v = this.rules[f];
        if (typeof v == "string")
          u += v, process.env.NODE_ENV !== "production" && (d = Ie(d, v + f));
        else if (v) {
          var y = Ze(v, r, t, n), b = Array.isArray(y) ? y.join("") : y;
          d = Ie(d, b + f), u += b;
        }
      }
      if (u) {
        var m = Et(d >>> 0);
        if (!t.hasNameForId(o, m)) {
          var k = n(u, "." + m, void 0, o);
          t.insertRules(o, m, k);
        }
        s.push(m);
      }
    }
    return s.join(" ");
  }, e;
}(), eo = /^\s*\/\/.*$/gm, to = [":", "[", ".", "#"];
function ro(e) {
  var r, t, n, o, s = e === void 0 ? Ae : e, i = s.options, c = i === void 0 ? Ae : i, l = s.plugins, a = l === void 0 ? pt : l, d = new bn(c), u = [], f = function(b) {
    function m(k) {
      if (k)
        try {
          b(k + "}");
        } catch {
        }
    }
    return function(k, R, Z, O, p, M, T, z, j, I) {
      switch (k) {
        case 1:
          if (j === 0 && R.charCodeAt(0) === 64)
            return b(R + ";"), "";
          break;
        case 2:
          if (z === 0)
            return R + "/*|*/";
          break;
        case 3:
          switch (z) {
            case 102:
            case 112:
              return b(Z[0] + R), "";
            default:
              return R + (I === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(m);
      }
    };
  }(function(b) {
    u.push(b);
  }), v = function(b, m, k) {
    return m === 0 && to.indexOf(k[t.length]) !== -1 || k.match(o) ? b : "." + r;
  };
  function y(b, m, k, R) {
    R === void 0 && (R = "&");
    var Z = b.replace(eo, ""), O = m && k ? k + " " + m + " { " + Z + " }" : Z;
    return r = R, t = m, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(k || !m ? "" : m, O);
  }
  return d.use([].concat(a, [function(b, m, k) {
    b === 2 && k.length && k[0].lastIndexOf(t) > 0 && (k[0] = k[0].replace(n, v));
  }, f, function(b) {
    if (b === -2) {
      var m = u;
      return u = [], m;
    }
  }])), y.hash = a.length ? a.reduce(function(b, m) {
    return m.name || Ee(15), Ie(b, m.name);
  }, 5381).toString() : "", y;
}
var jr = He.createContext();
jr.Consumer;
var Br = He.createContext(), no = (Br.Consumer, new vt()), Tt = ro();
function Vr() {
  return Ye(jr) || no;
}
function Gr() {
  return Ye(Br) || Tt;
}
var Ur = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Tt);
      var i = n.name + s.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, s(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ee(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Tt), this.name + r.hash;
  }, e;
}(), oo = /([A-Z])/, so = /([A-Z])/g, io = /^ms-/, ao = function(e) {
  return "-" + e.toLowerCase();
};
function vr(e) {
  return oo.test(e) ? e.replace(so, ao).replace(io, "-ms-") : e;
}
var yr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ze(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = Ze(e[i], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (yr(e))
    return "";
  if (Ut(e))
    return "." + e.styledComponentId;
  if (Ve(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !r)
      return e;
    var l = e(r);
    return process.env.NODE_ENV !== "production" && it.isElement(l) && console.warn(_t(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ze(l, r, t, n);
  }
  var a;
  return e instanceof Ur ? t ? (e.inject(t, n), e.getName(n)) : e : kt(e) ? function d(u, f) {
    var v, y, b = [];
    for (var m in u)
      u.hasOwnProperty(m) && !yr(u[m]) && (Array.isArray(u[m]) && u[m].isCss || Ve(u[m]) ? b.push(vr(m) + ":", u[m], ";") : kt(u[m]) ? b.push.apply(b, d(u[m], m)) : b.push(vr(m) + ": " + (v = m, (y = u[m]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || v in xn ? String(y).trim() : y + "px") + ";"));
    return f ? [f + " {"].concat(b, ["}"]) : b;
  }(e) : e.toString();
}
var gr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Jt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return Ve(e) || kt(e) ? gr(Ze(fr(pt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : gr(Ze(fr(e, t)));
}
var wr = /invalid hook call/i, dt = /* @__PURE__ */ new Set(), Xr = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (wr.test(s))
          o = !1, dt.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            c[l - 1] = arguments[l];
          n.apply(void 0, [s].concat(c));
        }
      }, be(), o && !dt.has(t) && (console.warn(t), dt.add(t));
    } catch (s) {
      wr.test(s.message) && dt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Jr = function(e, r, t) {
  return t === void 0 && (t = Ae), e.theme !== t.theme && e.theme || r || t.theme;
}, co = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, lo = /(^-|-$)/g;
function xt(e) {
  return e.replace(co, "-").replace(lo, "");
}
var qt = function(e) {
  return Et(Fr(e) >>> 0);
};
function ut(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Pt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, uo = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ho(e, r, t) {
  var n = e[t];
  Pt(r) && Pt(n) ? qr(n, r) : e[t] = r;
}
function qr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (Pt(i))
      for (var c in i)
        uo(c) && ho(e, i[c], c);
  }
  return e;
}
var Ue = He.createContext();
Ue.Consumer;
function fo(e) {
  var r = Ye(Ue), t = Oe(function() {
    return function(n, o) {
      if (!n)
        return Ee(14);
      if (Ve(n)) {
        var s = n(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ee(7);
      }
      return Array.isArray(n) || typeof n != "object" ? Ee(8) : o ? $e({}, o, {}, n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? He.createElement(Ue.Provider, { value: t }, e.children) : null;
}
var Ct = {};
function Kr(e, r, t) {
  var n = Ut(e), o = !ut(e), s = r.attrs, i = s === void 0 ? pt : s, c = r.componentId, l = c === void 0 ? function(R, Z) {
    var O = typeof R != "string" ? "sc" : xt(R);
    Ct[O] = (Ct[O] || 0) + 1;
    var p = O + "-" + qt("5.3.8" + O + Ct[O]);
    return Z ? Z + "-" + p : p;
  }(r.displayName, r.parentComponentId) : c, a = r.displayName, d = a === void 0 ? function(R) {
    return ut(R) ? "styled." + R : "Styled(" + _t(R) + ")";
  }(e) : a, u = r.displayName && r.componentId ? xt(r.displayName) + "-" + r.componentId : r.componentId || l, f = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, v = r.shouldForwardProp;
  n && e.shouldForwardProp && (v = r.shouldForwardProp ? function(R, Z, O) {
    return e.shouldForwardProp(R, Z, O) && r.shouldForwardProp(R, Z, O);
  } : e.shouldForwardProp);
  var y, b = new Qn(t, u, n ? e.componentStyle : void 0), m = b.isStatic && i.length === 0, k = function(R, Z) {
    return function(O, p, M, T) {
      var z = O.attrs, j = O.componentStyle, I = O.defaultProps, q = O.foldedComponentIds, Q = O.shouldForwardProp, P = O.styledComponentId, _ = O.target;
      process.env.NODE_ENV !== "production" && or(P);
      var x = function(H, h, V) {
        H === void 0 && (H = Ae);
        var C = $e({}, h, { theme: H }), X = {};
        return V.forEach(function(G) {
          var K, g, ce, A = G;
          for (K in Ve(A) && (A = A(C)), A)
            C[K] = X[K] = K === "className" ? (g = X[K], ce = A[K], g && ce ? g + " " + ce : g || ce) : A[K];
        }), [C, X];
      }(Jr(p, Ye(Ue), I) || Ae, p, z), N = x[0], w = x[1], Y = function(H, h, V, C) {
        var X = Vr(), G = Gr(), K = h ? H.generateAndInjectStyles(Ae, X, G) : H.generateAndInjectStyles(V, X, G);
        return process.env.NODE_ENV !== "production" && or(K), process.env.NODE_ENV !== "production" && !h && C && C(K), K;
      }(j, T, N, process.env.NODE_ENV !== "production" ? O.warnTooManyClasses : void 0), B = M, U = w.$as || p.$as || w.as || p.as || _, te = ut(U), E = w !== p ? $e({}, p, {}, w) : p, $ = {};
      for (var S in E)
        S[0] !== "$" && S !== "as" && (S === "forwardedAs" ? $.as = E[S] : (Q ? Q(S, ar, U) : !te || ar(S)) && ($[S] = E[S]));
      return p.style && w.style !== p.style && ($.style = $e({}, p.style, {}, w.style)), $.className = Array.prototype.concat(q, P, Y !== P ? Y : null, p.className, w.className).filter(Boolean).join(" "), $.ref = B, mn(U, $);
    }(y, R, Z, m);
  };
  return k.displayName = d, (y = He.forwardRef(k)).attrs = f, y.componentStyle = b, y.displayName = d, y.shouldForwardProp = v, y.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : pt, y.styledComponentId = u, y.target = n ? e.target : e, y.withComponent = function(R) {
    var Z = r.componentId, O = function(M, T) {
      if (M == null)
        return {};
      var z, j, I = {}, q = Object.keys(M);
      for (j = 0; j < q.length; j++)
        z = q[j], T.indexOf(z) >= 0 || (I[z] = M[z]);
      return I;
    }(r, ["componentId"]), p = Z && Z + "-" + (ut(R) ? R : xt(_t(R)));
    return Kr(R, $e({}, O, { attrs: f, componentId: p }), t);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? qr({}, e.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (Xr(d, u), y.warnTooManyClasses = function(R, Z) {
    var O = {}, p = !1;
    return function(M) {
      if (!p && (O[M] = !0, Object.keys(O).length >= 200)) {
        var T = Z ? ' with the id of "' + Z + '"' : "";
        console.warn("Over 200 classes were generated for component " + R + T + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, O = {};
      }
    };
  }(d, u)), y.toString = function() {
    return "." + y.styledComponentId;
  }, o && An(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var Dt = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Ae), !it.isValidElementType(n))
      return Ee(1, String(n));
    var s = function() {
      return t(n, o, Jt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return r(t, n, $e({}, o, {}, i));
    }, s.attrs = function(i) {
      return r(t, n, $e({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Kr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Dt[e] = Dt(e);
});
var po = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = zr(t), vt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, n, o, s) {
    var i = s(Ze(this.rules, n, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, r.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, n, o, s) {
    t > 2 && vt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, n, o, s);
  }, e;
}();
function mo(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Jt.apply(void 0, [e].concat(t)), s = "sc-global-" + qt(JSON.stringify(o)), i = new po(o, s);
  function c(a) {
    var d = Vr(), u = Gr(), f = Ye(Ue), v = be(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && He.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(y) {
      return typeof y == "string" && y.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(v, a, d, f, u), Ir(function() {
      if (!d.server)
        return l(v, a, d, f, u), function() {
          return i.removeStyles(v, d);
        };
    }, [v, a, d, f, u]), null;
  }
  function l(a, d, u, f, v) {
    if (i.isStatic)
      i.renderStyles(a, Yn, u, v);
    else {
      var y = $e({}, d, { theme: Jr(d, f, c.defaultProps) });
      i.renderStyles(a, y, u, v);
    }
  }
  return process.env.NODE_ENV !== "production" && Xr(s), He.memo(c);
}
function vo(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Jt.apply(void 0, [e].concat(t)).join(""), s = qt(o);
  return new Ur(s, o);
}
var Fe = function() {
  return Ye(Ue);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const W = Dt, ot = "reactSchedulerOutsideWrapper", yo = mo`

  #${ot} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${ot} *,
 #${ot} *:before,
 #${ot} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, go = {
  mode: "light",
  navHeight: "44px",
  colors: {
    background: "#FFFFFF",
    gridBackground: "#FFFFFF",
    primary: "#F8F8FD",
    secondary: "#E6F3FF",
    tertiary: "#C9E5FF",
    textPrimary: "#1C222F",
    textSecondary: "#FFFFFF",
    placeholder: "#777777",
    button: "#FFFFFF",
    border: "#D2D2D2",
    tooltip: "#3B3C5F",
    hover: "#E6F3FF",
    disabled: "#777777",
    warning: "#EF4444",
    defaultTile: "#728DE2",
    accent: "#0A11EB"
  }
}, wo = {
  mode: "dark",
  navHeight: "44px",
  colors: {
    background: "#161B22",
    gridBackground: "#1E252E",
    primary: "#303b49",
    secondary: "#444e5b",
    tertiary: "#6E757F",
    textPrimary: "#DADCE0",
    textSecondary: "#EAEBED",
    placeholder: "#bbbbbb",
    button: "#60676f",
    border: "#2C333A",
    hover: "#303439",
    tooltip: "#3B3C5F",
    disabled: "#38414a",
    warning: "#FF4C4C",
    defaultTile: "#728DE2",
    accent: "#1798c2"
  }
}, Ke = `
margin: 0;
padding: 0;
`, Qr = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
W.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const ge = 50, Te = 24, Qe = 16, Ne = 40, Xe = Ne + Qe + Te, Le = 84, xe = 56, Se = 196, _e = 12, ve = 50, Je = 24, at = 16, Rt = 40, bo = Je + at + Rt, br = 1, xr = 52, ke = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, Be = 3, xo = 1.6, Co = 4.5, Ot = 12, yt = 24, So = "reactSchedulerCanvasHeaderWrapper", en = "reactSchedulerCanvasWrapper", We = ot, Mo = 4, $o = 48, Re = 5, ko = 40, Cr = 8, Kt = Te / 2 + 2, tn = Qe / 2 + Te + 1, Sr = 2, ue = 60;
var qe = {}, _o = {
  get exports() {
    return qe;
  },
  set exports(e) {
    qe = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t = 1e3, n = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", d = "week", u = "month", f = "quarter", v = "year", y = "date", b = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, R = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(P) {
      var _ = ["th", "st", "nd", "rd"], x = P % 100;
      return "[" + P + (_[(x - 20) % 10] || _[x] || _[0]) + "]";
    } }, Z = function(P, _, x) {
      var N = String(P);
      return !N || N.length >= _ ? P : "" + Array(_ + 1 - N.length).join(x) + P;
    }, O = { s: Z, z: function(P) {
      var _ = -P.utcOffset(), x = Math.abs(_), N = Math.floor(x / 60), w = x % 60;
      return (_ <= 0 ? "+" : "-") + Z(N, 2, "0") + ":" + Z(w, 2, "0");
    }, m: function P(_, x) {
      if (_.date() < x.date())
        return -P(x, _);
      var N = 12 * (x.year() - _.year()) + (x.month() - _.month()), w = _.clone().add(N, u), Y = x - w < 0, B = _.clone().add(N + (Y ? -1 : 1), u);
      return +(-(N + (x - w) / (Y ? w - B : B - w)) || 0);
    }, a: function(P) {
      return P < 0 ? Math.ceil(P) || 0 : Math.floor(P);
    }, p: function(P) {
      return { M: u, y: v, w: d, d: a, D: y, h: l, m: c, s: i, ms: s, Q: f }[P] || String(P || "").toLowerCase().replace(/s$/, "");
    }, u: function(P) {
      return P === void 0;
    } }, p = "en", M = {};
    M[p] = R;
    var T = function(P) {
      return P instanceof q;
    }, z = function P(_, x, N) {
      var w;
      if (!_)
        return p;
      if (typeof _ == "string") {
        var Y = _.toLowerCase();
        M[Y] && (w = Y), x && (M[Y] = x, w = Y);
        var B = _.split("-");
        if (!w && B.length > 1)
          return P(B[0]);
      } else {
        var U = _.name;
        M[U] = _, w = U;
      }
      return !N && w && (p = w), w || !N && p;
    }, j = function(P, _) {
      if (T(P))
        return P.clone();
      var x = typeof _ == "object" ? _ : {};
      return x.date = P, x.args = arguments, new q(x);
    }, I = O;
    I.l = z, I.i = T, I.w = function(P, _) {
      return j(P, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var q = function() {
      function P(x) {
        this.$L = z(x.locale, null, !0), this.parse(x);
      }
      var _ = P.prototype;
      return _.parse = function(x) {
        this.$d = function(N) {
          var w = N.date, Y = N.utc;
          if (w === null)
            return new Date(NaN);
          if (I.u(w))
            return new Date();
          if (w instanceof Date)
            return new Date(w);
          if (typeof w == "string" && !/Z$/i.test(w)) {
            var B = w.match(m);
            if (B) {
              var U = B[2] - 1 || 0, te = (B[7] || "0").substring(0, 3);
              return Y ? new Date(Date.UTC(B[1], U, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, te)) : new Date(B[1], U, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, te);
            }
          }
          return new Date(w);
        }(x), this.$x = x.x || {}, this.init();
      }, _.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, _.$utils = function() {
        return I;
      }, _.isValid = function() {
        return this.$d.toString() !== b;
      }, _.isSame = function(x, N) {
        var w = j(x);
        return this.startOf(N) <= w && w <= this.endOf(N);
      }, _.isAfter = function(x, N) {
        return j(x) < this.startOf(N);
      }, _.isBefore = function(x, N) {
        return this.endOf(N) < j(x);
      }, _.$g = function(x, N, w) {
        return I.u(x) ? this[N] : this.set(w, x);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(x, N) {
        var w = this, Y = !!I.u(N) || N, B = I.p(x), U = function(C, X) {
          var G = I.w(w.$u ? Date.UTC(w.$y, X, C) : new Date(w.$y, X, C), w);
          return Y ? G : G.endOf(a);
        }, te = function(C, X) {
          return I.w(w.toDate()[C].apply(w.toDate("s"), (Y ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(X)), w);
        }, E = this.$W, $ = this.$M, S = this.$D, H = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case v:
            return Y ? U(1, 0) : U(31, 11);
          case u:
            return Y ? U(1, $) : U(0, $ + 1);
          case d:
            var h = this.$locale().weekStart || 0, V = (E < h ? E + 7 : E) - h;
            return U(Y ? S - V : S + (6 - V), $);
          case a:
          case y:
            return te(H + "Hours", 0);
          case l:
            return te(H + "Minutes", 1);
          case c:
            return te(H + "Seconds", 2);
          case i:
            return te(H + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(x) {
        return this.startOf(x, !1);
      }, _.$set = function(x, N) {
        var w, Y = I.p(x), B = "set" + (this.$u ? "UTC" : ""), U = (w = {}, w[a] = B + "Date", w[y] = B + "Date", w[u] = B + "Month", w[v] = B + "FullYear", w[l] = B + "Hours", w[c] = B + "Minutes", w[i] = B + "Seconds", w[s] = B + "Milliseconds", w)[Y], te = Y === a ? this.$D + (N - this.$W) : N;
        if (Y === u || Y === v) {
          var E = this.clone().set(y, 1);
          E.$d[U](te), E.init(), this.$d = E.set(y, Math.min(this.$D, E.daysInMonth())).$d;
        } else
          U && this.$d[U](te);
        return this.init(), this;
      }, _.set = function(x, N) {
        return this.clone().$set(x, N);
      }, _.get = function(x) {
        return this[I.p(x)]();
      }, _.add = function(x, N) {
        var w, Y = this;
        x = Number(x);
        var B = I.p(N), U = function($) {
          var S = j(Y);
          return I.w(S.date(S.date() + Math.round($ * x)), Y);
        };
        if (B === u)
          return this.set(u, this.$M + x);
        if (B === v)
          return this.set(v, this.$y + x);
        if (B === a)
          return U(1);
        if (B === d)
          return U(7);
        var te = (w = {}, w[c] = n, w[l] = o, w[i] = t, w)[B] || 1, E = this.$d.getTime() + x * te;
        return I.w(E, this);
      }, _.subtract = function(x, N) {
        return this.add(-1 * x, N);
      }, _.format = function(x) {
        var N = this, w = this.$locale();
        if (!this.isValid())
          return w.invalidDate || b;
        var Y = x || "YYYY-MM-DDTHH:mm:ssZ", B = I.z(this), U = this.$H, te = this.$m, E = this.$M, $ = w.weekdays, S = w.months, H = function(X, G, K, g) {
          return X && (X[G] || X(N, Y)) || K[G].slice(0, g);
        }, h = function(X) {
          return I.s(U % 12 || 12, X, "0");
        }, V = w.meridiem || function(X, G, K) {
          var g = X < 12 ? "AM" : "PM";
          return K ? g.toLowerCase() : g;
        }, C = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: E + 1, MM: I.s(E + 1, 2, "0"), MMM: H(w.monthsShort, E, S, 3), MMMM: H(S, E), D: this.$D, DD: I.s(this.$D, 2, "0"), d: String(this.$W), dd: H(w.weekdaysMin, this.$W, $, 2), ddd: H(w.weekdaysShort, this.$W, $, 3), dddd: $[this.$W], H: String(U), HH: I.s(U, 2, "0"), h: h(1), hh: h(2), a: V(U, te, !0), A: V(U, te, !1), m: String(te), mm: I.s(te, 2, "0"), s: String(this.$s), ss: I.s(this.$s, 2, "0"), SSS: I.s(this.$ms, 3, "0"), Z: B };
        return Y.replace(k, function(X, G) {
          return G || C[X] || B.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(x, N, w) {
        var Y, B = I.p(N), U = j(x), te = (U.utcOffset() - this.utcOffset()) * n, E = this - U, $ = I.m(this, U);
        return $ = (Y = {}, Y[v] = $ / 12, Y[u] = $, Y[f] = $ / 3, Y[d] = (E - te) / 6048e5, Y[a] = (E - te) / 864e5, Y[l] = E / o, Y[c] = E / n, Y[i] = E / t, Y)[B] || E, w ? $ : I.a($);
      }, _.daysInMonth = function() {
        return this.endOf(u).$D;
      }, _.$locale = function() {
        return M[this.$L];
      }, _.locale = function(x, N) {
        if (!x)
          return this.$L;
        var w = this.clone(), Y = z(x, N, !0);
        return Y && (w.$L = Y), w;
      }, _.clone = function() {
        return I.w(this.$d, this);
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toISOString = function() {
        return this.$d.toISOString();
      }, _.toString = function() {
        return this.$d.toUTCString();
      }, P;
    }(), Q = q.prototype;
    return j.prototype = Q, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", u], ["$y", v], ["$D", y]].forEach(function(P) {
      Q[P[1]] = function(_) {
        return this.$g(_, P[0], P[1]);
      };
    }), j.extend = function(P, _) {
      return P.$i || (P(_, q, j), P.$i = !0), j;
    }, j.locale = z, j.isDayjs = T, j.unix = function(P) {
      return j(1e3 * P);
    }, j.en = M[p], j.Ls = M, j.p = {}, j;
  });
})(_o);
const L = qe, Mr = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Qt = (e) => {
  const r = e.day();
  return r !== 0 && r !== 6;
}, rn = (e, r) => L(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(r, "months").daysInMonth(), nn = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Qt(e),
  isCurrentDay: e.isSame(L(), "day"),
  year: parseInt(e.format("YYYY"))
}), er = (e, r, t, n, o, s, i) => {
  e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.secondary : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(r, t, n, xe), e.strokeRect(r + 0.5, t + 0.5, n, xe);
}, Eo = (e, r, t, n, o) => {
  for (let s = 0; s < r; s++)
    for (let i = 0; i <= t; i++) {
      const c = L(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
        i,
        "days"
      ), l = c.isSame(L(), "day");
      er(
        e,
        i * ge,
        s * xe,
        ge,
        Qt(c),
        l,
        o
      );
    }
}, To = (e, r, t, n) => {
  e.setLineDash([5, 5]), e.strokeStyle = n.colors.border, e.moveTo(r + 0.5, 0.5), e.lineTo(r + 0.5, t + 0.5), e.stroke();
}, Po = (e, r, t, n, o) => {
  let s = 0, i = -(n.dayOfMonth - 1) * _e;
  for (let c = 0; c <= t; c++) {
    const a = L(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(
      c,
      "weeks"
    ).isSame(L(), "week");
    for (let d = 0; d < r; d++)
      er(e, s, d * xe, Le, !0, a, o);
    s += Le;
  }
  for (let c = 0; c < t; c++) {
    const l = rn(n, c) * _e;
    To(e, i, r * xe, o), i += l;
  }
}, Do = (e, r, t, n, o) => {
  const s = L(`${n.year}-${n.month + 1}-${n.dayOfMonth + 1}`);
  for (let i = 0; i < r; i++)
    for (let c = 0; c <= t; c++) {
      let l;
      c === Math.floor(t / 2) ? l = L() : c > Math.floor(t / 2) ? l = L().add(c - Math.floor(t / 2), "hours") : l = L().subtract(Math.floor(t / 2) - i, "hours");
      const a = s.isSame(L(), "day") && l.isSame(L(), "hour");
      er(
        e,
        c * ve + ve / 2 - 0.5,
        // -0.5 to make borders better aligned with hour axis
        i * xe,
        ve,
        Qt(l),
        a,
        o
      );
    }
}, Ro = (e, r, t, n, o, s) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(en))
    switch (r) {
      case 0:
        Po(e, t, n, o, s);
        break;
      case 1:
        Eo(e, t, n, o, s);
        break;
      case 2:
        Do(e, t, n, o, s);
        break;
    }
};
var At = {}, Oo = {
  get exports() {
    return At;
  },
  set exports(e) {
    At = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t = "week", n = "year";
    return function(o, s, i) {
      var c = s.prototype;
      c.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(n).add(1, n).date(a), u = i(this).endOf(t);
          if (d.isBefore(u))
            return 1;
        }
        var f = i(this).startOf(n).date(a).startOf(t).subtract(1, "millisecond"), v = this.diff(f, t, !0);
        return v < 0 ? i(this).startOf("week").week() : Math.ceil(v);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(Oo);
const Ao = At;
var Lt = {}, Lo = {
  get exports() {
    return Lt;
  },
  set exports(e) {
    Lt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    return function(t, n, o) {
      n.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(Lo);
const Yo = Lt;
var Yt = {}, Io = {
  get exports() {
    return Yt;
  },
  set exports(e) {
    Yt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t = "day";
    return function(n, o, s) {
      var i = function(a) {
        return a.add(4 - a.isoWeekday(), t);
      }, c = o.prototype;
      c.isoWeekYear = function() {
        return i(this).year();
      }, c.isoWeek = function(a) {
        if (!this.$utils().u(a))
          return this.add(7 * (a - this.isoWeek()), t);
        var d, u, f, v, y = i(this), b = (d = this.isoWeekYear(), u = this.$u, f = (u ? s.utc : s)().year(d).startOf("year"), v = 4 - f.isoWeekday(), f.isoWeekday() > 4 && (v += 7), f.add(v, t));
        return y.diff(b, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var l = c.startOf;
      c.startOf = function(a, d) {
        var u = this.$utils(), f = !!u.u(d) || d;
        return u.p(a) === "isoweek" ? f ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(a, d);
      };
    };
  });
})(Io);
const No = Yt;
var It = {}, Ho = {
  get exports() {
    return It;
  },
  set exports(e) {
    It = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    return function(t, n, o) {
      n.prototype.isBetween = function(s, i, c, l) {
        var a = o(s), d = o(i), u = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (u ? this.isAfter(a, c) : !this.isBefore(a, c)) && (f ? this.isBefore(d, c) : !this.isAfter(d, c)) || (u ? this.isBefore(a, c) : !this.isAfter(a, c)) && (f ? this.isAfter(d, c) : !this.isBefore(d, c));
      };
    };
  });
})(Ho);
const Zo = It;
var Nt = {}, Wo = {
  get exports() {
    return Nt;
  },
  set exports(e) {
    Nt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    var t, n, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, f = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, v = function(p) {
      return p instanceof O;
    }, y = function(p, M, T) {
      return new O(p, T, M.$l);
    }, b = function(p) {
      return n.p(p) + "s";
    }, m = function(p) {
      return p < 0;
    }, k = function(p) {
      return m(p) ? Math.ceil(p) : Math.floor(p);
    }, R = function(p) {
      return Math.abs(p);
    }, Z = function(p, M) {
      return p ? m(p) ? { negative: !0, format: "" + R(p) + M } : { negative: !1, format: "" + p + M } : { negative: !1, format: "" };
    }, O = function() {
      function p(T, z, j) {
        var I = this;
        if (this.$d = {}, this.$l = j, T === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), z)
          return y(T * f[b(z)], this);
        if (typeof T == "number")
          return this.$ms = T, this.parseFromMilliseconds(), this;
        if (typeof T == "object")
          return Object.keys(T).forEach(function(P) {
            I.$d[b(P)] = T[P];
          }), this.calMilliseconds(), this;
        if (typeof T == "string") {
          var q = T.match(u);
          if (q) {
            var Q = q.slice(2).map(function(P) {
              return P != null ? Number(P) : 0;
            });
            return this.$d.years = Q[0], this.$d.months = Q[1], this.$d.weeks = Q[2], this.$d.days = Q[3], this.$d.hours = Q[4], this.$d.minutes = Q[5], this.$d.seconds = Q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var M = p.prototype;
      return M.calMilliseconds = function() {
        var T = this;
        this.$ms = Object.keys(this.$d).reduce(function(z, j) {
          return z + (T.$d[j] || 0) * f[j];
        }, 0);
      }, M.parseFromMilliseconds = function() {
        var T = this.$ms;
        this.$d.years = k(T / a), T %= a, this.$d.months = k(T / d), T %= d, this.$d.days = k(T / c), T %= c, this.$d.hours = k(T / i), T %= i, this.$d.minutes = k(T / s), T %= s, this.$d.seconds = k(T / o), T %= o, this.$d.milliseconds = T;
      }, M.toISOString = function() {
        var T = Z(this.$d.years, "Y"), z = Z(this.$d.months, "M"), j = +this.$d.days || 0;
        this.$d.weeks && (j += 7 * this.$d.weeks);
        var I = Z(j, "D"), q = Z(this.$d.hours, "H"), Q = Z(this.$d.minutes, "M"), P = this.$d.seconds || 0;
        this.$d.milliseconds && (P += this.$d.milliseconds / 1e3);
        var _ = Z(P, "S"), x = T.negative || z.negative || I.negative || q.negative || Q.negative || _.negative, N = q.format || Q.format || _.format ? "T" : "", w = (x ? "-" : "") + "P" + T.format + z.format + I.format + N + q.format + Q.format + _.format;
        return w === "P" || w === "-P" ? "P0D" : w;
      }, M.toJSON = function() {
        return this.toISOString();
      }, M.format = function(T) {
        var z = T || "YYYY-MM-DDTHH:mm:ss", j = { Y: this.$d.years, YY: n.s(this.$d.years, 2, "0"), YYYY: n.s(this.$d.years, 4, "0"), M: this.$d.months, MM: n.s(this.$d.months, 2, "0"), D: this.$d.days, DD: n.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: n.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: n.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: n.s(this.$d.seconds, 2, "0"), SSS: n.s(this.$d.milliseconds, 3, "0") };
        return z.replace(l, function(I, q) {
          return q || String(j[I]);
        });
      }, M.as = function(T) {
        return this.$ms / f[b(T)];
      }, M.get = function(T) {
        var z = this.$ms, j = b(T);
        return j === "milliseconds" ? z %= 1e3 : z = j === "weeks" ? k(z / f[j]) : this.$d[j], z === 0 ? 0 : z;
      }, M.add = function(T, z, j) {
        var I;
        return I = z ? T * f[b(z)] : v(T) ? T.$ms : y(T, this).$ms, y(this.$ms + I * (j ? -1 : 1), this);
      }, M.subtract = function(T, z) {
        return this.add(T, z, !0);
      }, M.locale = function(T) {
        var z = this.clone();
        return z.$l = T, z;
      }, M.clone = function() {
        return y(this.$ms, this);
      }, M.humanize = function(T) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!T);
      }, M.milliseconds = function() {
        return this.get("milliseconds");
      }, M.asMilliseconds = function() {
        return this.as("milliseconds");
      }, M.seconds = function() {
        return this.get("seconds");
      }, M.asSeconds = function() {
        return this.as("seconds");
      }, M.minutes = function() {
        return this.get("minutes");
      }, M.asMinutes = function() {
        return this.as("minutes");
      }, M.hours = function() {
        return this.get("hours");
      }, M.asHours = function() {
        return this.as("hours");
      }, M.days = function() {
        return this.get("days");
      }, M.asDays = function() {
        return this.as("days");
      }, M.weeks = function() {
        return this.get("weeks");
      }, M.asWeeks = function() {
        return this.as("weeks");
      }, M.months = function() {
        return this.get("months");
      }, M.asMonths = function() {
        return this.as("months");
      }, M.years = function() {
        return this.get("years");
      }, M.asYears = function() {
        return this.as("years");
      }, p;
    }();
    return function(p, M, T) {
      t = T, n = T().$utils(), T.duration = function(I, q) {
        var Q = T.locale();
        return y(I, { $l: Q }, q);
      }, T.isDuration = v;
      var z = M.prototype.add, j = M.prototype.subtract;
      M.prototype.add = function(I, q) {
        return v(I) && (I = I.asMilliseconds()), z.bind(this)(I, q);
      }, M.prototype.subtract = function(I, q) {
        return v(I) && (I = I.asMilliseconds()), j.bind(this)(I, q);
      };
    };
  });
})(Wo);
const Fo = Nt;
var zo = "Expected a function", $r = 0 / 0, jo = "[object Symbol]", Bo = /^\s+|\s+$/g, Vo = /^[-+]0x[0-9a-f]+$/i, Go = /^0b[01]+$/i, Uo = /^0o[0-7]+$/i, Xo = parseInt, Jo = typeof ye == "object" && ye && ye.Object === Object && ye, qo = typeof self == "object" && self && self.Object === Object && self, Ko = Jo || qo || Function("return this")(), Qo = Object.prototype, es = Qo.toString, ts = Math.max, rs = Math.min, St = function() {
  return Ko.Date.now();
};
function ns(e, r, t) {
  var n, o, s, i, c, l, a = 0, d = !1, u = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(zo);
  r = kr(r) || 0, Ht(t) && (d = !!t.leading, u = "maxWait" in t, s = u ? ts(kr(t.maxWait) || 0, r) : s, f = "trailing" in t ? !!t.trailing : f);
  function v(M) {
    var T = n, z = o;
    return n = o = void 0, a = M, i = e.apply(z, T), i;
  }
  function y(M) {
    return a = M, c = setTimeout(k, r), d ? v(M) : i;
  }
  function b(M) {
    var T = M - l, z = M - a, j = r - T;
    return u ? rs(j, s - z) : j;
  }
  function m(M) {
    var T = M - l, z = M - a;
    return l === void 0 || T >= r || T < 0 || u && z >= s;
  }
  function k() {
    var M = St();
    if (m(M))
      return R(M);
    c = setTimeout(k, b(M));
  }
  function R(M) {
    return c = void 0, f && n ? v(M) : (n = o = void 0, i);
  }
  function Z() {
    c !== void 0 && clearTimeout(c), a = 0, n = l = o = c = void 0;
  }
  function O() {
    return c === void 0 ? i : R(St());
  }
  function p() {
    var M = St(), T = m(M);
    if (n = arguments, o = this, l = M, T) {
      if (c === void 0)
        return y(l);
      if (u)
        return c = setTimeout(k, r), v(l);
    }
    return c === void 0 && (c = setTimeout(k, r)), i;
  }
  return p.cancel = Z, p.flush = O, p;
}
function Ht(e) {
  var r = typeof e;
  return !!e && (r == "object" || r == "function");
}
function os(e) {
  return !!e && typeof e == "object";
}
function ss(e) {
  return typeof e == "symbol" || os(e) && es.call(e) == jo;
}
function kr(e) {
  if (typeof e == "number")
    return e;
  if (ss(e))
    return $r;
  if (Ht(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ht(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Bo, "");
  var t = Go.test(e);
  return t || Uo.test(e) ? Xo(e.slice(2), t ? 2 : 8) : Vo.test(e) ? $r : +e;
}
var ze = ns;
const ft = [0, 1, 2], is = (e) => ft.includes(e), je = (e) => {
  var n;
  const t = (((n = document.getElementById(We)) == null ? void 0 : n.clientWidth) || 0) - Se;
  switch (e) {
    case 1:
      return Math.ceil(t / ge) * Be;
    case 2:
      return Math.ceil(t / ve) * Be;
    default:
      return Math.ceil(t / Le) * Be;
  }
}, as = (e) => je(e) / Be, tr = (e, r) => {
  const t = je(r) / 2;
  let n;
  switch (r) {
    case 1:
      n = e.subtract(t, "days");
      break;
    case 2:
      n = e.subtract(t, "hours");
      break;
    default:
      n = e.subtract(t, "weeks");
      break;
  }
  let o;
  switch (r) {
    case 1:
      o = e.add(t, "days");
      break;
    case 2:
      o = e.add(t, "hours");
      break;
    default:
      o = e.add(t, "weeks");
      break;
  }
  return {
    startDate: n,
    endDate: o
  };
}, cs = (e, r) => {
  const t = tr(e, r);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, rr = () => {
  var t;
  return ((((t = document.getElementById(We)) == null ? void 0 : t.clientWidth) || 0) - Se) * Be;
}, on = Nr({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: L(),
  isLoading: !1,
  cols: 0,
  startDate: {
    hour: 0,
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
L.extend(Ao);
L.extend(Yo);
L.extend(No);
L.extend(Zo);
L.extend(Fo);
const ls = ({
  data: e,
  children: r,
  isLoading: t,
  config: n,
  defaultStartDate: o = L(),
  onRangeChange: s,
  onFilterData: i,
  onClearFilterData: c
}) => {
  const { zoom: l, maxRecordsPerPage: a = 50 } = n, [d, u] = me(l), [f, v] = me(L()), [y, b] = me(!1), [m, k] = me(je(d)), R = ft[d] !== ft[ft.length - 1], Z = d !== 0, O = Oe(() => cs(f, d), [f, d]), p = tr(f, d).startDate, M = L(p).dayOfYear(), T = nn(p), z = be(null), [j, I] = me([{ x: 0, y: 0 }]), q = we(
    (S, H = "auto") => {
      var V, C, X, G;
      const h = rr();
      switch (S) {
        case "back":
          return (V = z.current) == null ? void 0 : V.scrollTo({
            behavior: H,
            left: h / 3
          });
        case "forward":
          return (C = z.current) == null ? void 0 : C.scrollTo({
            behavior: H,
            left: h / 3
          });
        case "middle": {
          const K = h / Be / 4;
          return (X = z.current) == null ? void 0 : X.scrollTo({
            behavior: H,
            left: h / 2 - K
          });
        }
        default:
          return (G = z.current) == null ? void 0 : G.scrollTo({
            behavior: H,
            left: h / 2
          });
      }
    },
    []
  ), Q = (S) => {
    I(S);
  }, P = we(
    (S) => {
      const H = as(d);
      let h;
      switch (d) {
        case 0:
          h = H * 7;
          break;
        case 1:
          h = H;
          break;
        case 2:
          h = Math.ceil(H / yt);
          break;
      }
      ze(() => {
        switch (S) {
          case "back":
            v((C) => C.subtract(h, "days"));
            break;
          case "forward":
            v((C) => C.add(h, "days"));
            break;
          case "middle":
            v(L());
            break;
        }
        s == null || s(O);
      }, 300)();
    },
    [s, O, d]
  );
  pe(() => {
    z.current = document.getElementById(We), k(je(d));
  }, [d]), pe(() => {
    const S = () => k(je(d));
    return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [d]), pe(() => {
    s == null || s(O);
  }, [s, O]), pe(() => {
    b(!1);
  }, [o]), pe(() => {
    y || (q("middle"), b(!0), v(o));
  }, [o, y, q]);
  const _ = () => {
    t || (v(
      (S) => d === 2 ? S.add(br, "hours") : S.add(Sr, "weeks")
    ), s == null || s(O));
  }, x = we(() => {
    t || (P("forward"), ze(() => {
      q("forward");
    }, 300)());
  }, [t, P, q]), N = () => {
    t || (v(
      (S) => d === 2 ? S.subtract(br, "hours") : S.subtract(Sr, "weeks")
    ), s == null || s(O));
  }, w = we(() => {
    !y || t || (P("back"), ze(() => {
      q("back");
    }, 300)());
  }, [y, t, P, q]), Y = we(() => {
    t || (P("middle"), ze(() => {
      q("middle", "smooth");
    }, 300)());
  }, [t, P, q]), B = () => te(d + 1), U = () => te(d - 1), te = (S) => {
    is(S) && (u(S), k(je(S)), s == null || s(O));
  }, E = () => i == null ? void 0 : i(), { Provider: $ } = on;
  return /* @__PURE__ */ D(
    $,
    {
      value: {
        data: e,
        config: n,
        handleGoNext: _,
        handleScrollNext: x,
        handleGoPrev: N,
        handleScrollPrev: w,
        handleGoToday: Y,
        zoomIn: B,
        zoomOut: U,
        zoom: d,
        isNextZoom: R,
        isPrevZoom: Z,
        date: f,
        isLoading: t,
        cols: m,
        startDate: T,
        dayOfYear: M,
        handleFilterData: E,
        tilesCoords: j,
        updateTilesCoords: Q,
        recordsThreshold: a,
        onClearFilterData: c
      },
      children: r
    }
  );
}, et = () => Ye(on), sn = (e, r, t) => {
  e.canvas.width = r * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = r + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, ds = W.div`
  height: calc(100vh - headerHeight);
`, us = W.div`
  position: relative;
`, hs = W.canvas``;
W.canvas``;
const _r = W.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, fs = vn(function({ zoom: r, rows: t, data: n, onTileClick: o }, s) {
  const { handleScrollNext: i, handleScrollPrev: c, date: l, isLoading: a, cols: d, startDate: u } = et(), f = be(null), v = be(null), y = be(null), b = Fe(), m = we(
    (k) => {
      const R = rr(), Z = t * xe + 1;
      sn(k, R, Z), Ro(k, r, t, d, u, b);
    },
    [d, u, t, r, b]
  );
  return pe(() => {
    if (!f.current)
      return;
    const k = f.current.getContext("2d");
    if (!k)
      return;
    const R = () => m(k);
    return window.addEventListener("resize", R), () => window.removeEventListener("resize", R);
  }, [m]), pe(() => {
    const k = f.current;
    if (!k)
      return;
    k.style.letterSpacing = "1px";
    const R = k.getContext("2d");
    R && m(R);
  }, [l, t, r, m]), pe(() => {
    if (!v.current)
      return;
    const k = new IntersectionObserver(
      (R) => R[0].isIntersecting ? i() : null,
      { root: document.getElementById(We) }
    );
    return k.observe(v.current), () => k.disconnect();
  }, [i]), pe(() => {
    if (!y.current)
      return;
    const k = new IntersectionObserver(
      (R) => R[0].isIntersecting ? c() : null,
      {
        root: document.getElementById(We),
        rootMargin: `0px 0px 0px -${Se}px`
      }
    );
    return k.observe(y.current), () => k.disconnect();
  }, [c]), /* @__PURE__ */ D(ds, { id: en, children: /* @__PURE__ */ ae(us, { ref: s, children: [
    /* @__PURE__ */ D(_r, { position: "left", ref: y }),
    /* @__PURE__ */ D(Rr, { isLoading: a, position: "left" }),
    /* @__PURE__ */ D(hs, { ref: f }),
    /* @__PURE__ */ D(aa, { data: n, zoom: r, onTileClick: o }),
    /* @__PURE__ */ D(_r, { ref: v, position: "right" }),
    /* @__PURE__ */ D(Rr, { isLoading: a, position: "right" })
  ] }) });
}), an = (e) => {
  const r = L.duration(e, "seconds"), t = r.hours(), n = r.minutes();
  return { hours: t, minutes: n };
}, cn = (e) => {
  let r = 0, t = 0, n = 0;
  return e.forEach((o) => {
    r += o.minutes;
    const s = Math.floor(r / ue);
    t += o.hours + s, n += r % ue, n >= ue && (t++, n -= ue);
  }), { hours: t, minutes: n };
}, ln = (e, r) => {
  let t = Cr;
  switch (r) {
    case 0:
      t = ko;
      break;
    case 1:
      t = Cr;
      break;
    case 2:
      t = 1;
      break;
  }
  const n = () => {
    let s = t - e.hours - 1, i = ue - e.minutes;
    return i === ue && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: n(),
    overtime: o()
  };
}, ps = (e, r, t) => {
  const n = r.isoWeek(), o = e.map((a) => {
    const d = L(a.startDate).isoWeek(), u = L(a.startDate).isoWeekday(), f = L(a.endDate).isoWeek(), v = L(a.endDate).isoWeekday(), { hours: y, minutes: b } = an(a.occupancy);
    if (n === d) {
      const m = (Re + 1 - u) * y, k = (Re + 1 - u) * b;
      return { hours: Math.max(0, m), minutes: k };
    } else if (n === f) {
      const m = v > Re ? Re * y : v * y, k = v > Re ? Re * b : v * b;
      return { hours: m, minutes: k };
    } else if (L(r).isBetween(a.startDate, a.endDate))
      return { hours: Re * y, minutes: Re * b };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = cn(o), { free: c, overtime: l } = ln({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, ms = (e, r, t, n) => {
  const o = r.isoWeekday(), s = e.map((d) => {
    const { hours: u, minutes: f } = an(d.occupancy);
    return o <= (n ? 7 : 5) ? { hours: u, minutes: f } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = cn(s), { free: l, overtime: a } = ln({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, vs = (e, r) => {
  let t = 0;
  e.forEach((c) => {
    const l = L(c.startDate).hour(), a = L(c.endDate).hour(), d = r.hour(), u = L(c.endDate).minute(), f = L(c.startDate).minute();
    l < d && a > d ? t += ue : l === d && a === d && f && u ? t += u ? u - f : ue - f : l === d && a >= d ? t += f ? ue - f : ue : a === d && u && (t += u);
  });
  const n = Math.floor(t / ue), o = t % ue, s = n || o ? 0 : 1, i = n ? 0 : o ? ue - o : 0;
  return {
    taken: { hours: n, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, ys = (e, r, t, n, o = !1) => {
  if (r < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => n === 1 ? L(t).isBetween(i.startDate, i.endDate, "day", "[]") : n === 2 ? L(t).isBetween(i.startDate, i.endDate, "hour", "[]") : L(i.startDate).isBetween(
    L(t),
    L(t).add(6, "days"),
    "day",
    "[]"
  ) || L(t).isBetween(L(i.startDate), L(i.endDate), "day", "[]"));
  switch (n) {
    case 1:
      return ms(s, t, n, o);
    case 2:
      return vs(s, t);
    default:
      return ps(s, t, n);
  }
}, gs = (e, r, t, n, o, s = !1) => {
  let i = "weeks", c;
  switch (o) {
    case 0:
      i = "weeks", c = Le;
      break;
    case 1:
      i = "days", c = ge;
      break;
    case 2:
      i = "hours", c = ve;
      break;
  }
  const l = Math.ceil(o === 2 ? (r.x - 0.5 * c) / c : r.x / c), a = L(
    `${e.year}-${e.month + 1}-${e.dayOfMonth}T${e.hour}:00:00`
  ).add(l - 1, i), d = Math.ceil(r.y / xe), u = t.findIndex((b, m, k) => k.slice(0, m + 1).reduce((Z, O) => Z + O, 0) >= d), f = o === 2 ? (l + 1) * c : l * c, v = (d - 1) * xe + xe, y = ys(
    n[u],
    u,
    a,
    o,
    s
  );
  return { coords: { x: f, y: v }, resourceIndex: u, disposition: y };
}, ws = (e, r, t, n) => {
  const o = [];
  let s = 0, i = [], c = 0;
  return r.length > n ? (r.forEach((l, a) => {
    const d = { id: e[a].id, label: e[a].label, data: l };
    c >= n && (o.push(i), s += i.length, i = [], c = 0), c++, i.push(d);
  }), t.slice(s).length <= n && (i = [], r.slice(s).forEach((l, a) => {
    const d = {
      id: e[a + s].id,
      label: e[a + s].label,
      data: l
    };
    i.push(d), a === r.length - s - 1 && o.push(i);
  })), o) : (r.forEach((l, a) => {
    const d = { id: e[a].id, label: e[a].label, data: l };
    i.push(d);
  }), o.push(i), o);
}, bs = (e) => {
  const r = [];
  for (const t of e) {
    let n = !1;
    if (r.length)
      for (const o of r) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          if (L(t.startDate).isBetween(o[i].startDate, o[i].endDate, null, "[]") || L(t.endDate).isBetween(o[i].startDate, o[i].endDate, null, "[]")) {
            s = !0;
            break;
          }
          if (L(t.startDate).isBefore(o[i].startDate, "day") && L(t.endDate).isAfter(o[i].endDate, "day")) {
            s = !0;
            break;
          }
        }
        if (!s) {
          o.push(t), n = !0;
          break;
        }
      }
    n || r.push([t]);
  }
  return r;
}, xs = (e) => {
  const r = [[], []], [t, n] = e.reduce((o, s) => {
    const i = bs(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, r);
  return { projectsPerPerson: t, rowsPerPerson: n };
}, Cs = (e) => e ? e.map((r) => r.data.length).reduce((r, t) => r + Math.max(t, 1), 0) : 0, Ss = (e) => {
  const { recordsThreshold: r } = et(), [t, n] = me(0), [o, s] = me(0), i = be(null);
  pe(() => {
    i.current = document.getElementById(We);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = Oe(() => xs(e), [e]), a = Oe(
    () => ws(e, c, l, r),
    [e, c, r, l]
  ), d = we(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), n((m) => m + a[Math.max(o, 0)].length), s((m) => Math.min(m + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), u = we(() => {
    a[o].length && (n((m) => Math.max(m - a[o - 1].length, 0)), s((m) => Math.max(m - 1, 0)));
  }, [o, a]), f = we(() => {
    n(0), s(0);
  }, []), v = t + a[o].length, y = Oe(
    () => l.slice(t, v),
    [v, l, t]
  ), b = Oe(
    () => c.slice(t, v),
    [v, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: b,
    rowsPerItem: y,
    totalRowsPerPage: Cs(a[o]),
    next: d,
    previous: u,
    reset: f
  };
};
var Zt = {}, Ms = {
  get exports() {
    return Zt;
  },
  set exports(e) {
    Zt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n();
  })(ye, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var n = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (n[(o - 20) % 10] || n[o] || n[0]) + "]";
    } };
  });
})(Ms);
const $s = Zt;
var Wt = {}, ks = {
  get exports() {
    return Wt;
  },
  set exports(e) {
    Wt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(qe);
  })(ye, function(t) {
    function n(f) {
      return f && typeof f == "object" && "default" in f ? f : { default: f };
    }
    var o = n(t);
    function s(f) {
      return f % 10 < 5 && f % 10 > 1 && ~~(f / 10) % 10 != 1;
    }
    function i(f, v, y) {
      var b = f + " ";
      switch (y) {
        case "m":
          return v ? "minuta" : "minutę";
        case "mm":
          return b + (s(f) ? "minuty" : "minut");
        case "h":
          return v ? "godzina" : "godzinę";
        case "hh":
          return b + (s(f) ? "godziny" : "godzin");
        case "MM":
          return b + (s(f) ? "miesiące" : "miesięcy");
        case "yy":
          return b + (s(f) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, d = function(f, v) {
      return a.test(v) ? c[f.month()] : l[f.month()];
    };
    d.s = l, d.f = c;
    var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(f) {
      return f + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(u, null, !0), u;
  });
})(ks);
const _s = Wt;
var Ft = {}, Es = {
  get exports() {
    return Ft;
  },
  set exports(e) {
    Ft = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(qe);
  })(ye, function(t) {
    function n(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = n(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(l, a, d) {
      var u = s[d];
      return Array.isArray(u) && (u = u[a ? 0 : 1]), u.replace("%d", l);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(c, null, !0), c;
  });
})(Es);
const Ts = Ft;
var zt = {}, Ps = {
  get exports() {
    return zt;
  },
  set exports(e) {
    zt = e;
  }
};
(function(e, r) {
  (function(t, n) {
    e.exports = n(qe);
  })(ye, function(t) {
    function n(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = n(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(d, u) {
      return c.test(u) ? s[d.month()] : i[d.month()];
    };
    l.s = i, l.f = s;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(Ps);
const Ds = zt, Rs = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień"
}, Os = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week"
}, As = {
  feelingEmpty: "Keine Ergebnisse...",
  free: "Frei",
  loadNext: "Weiter",
  loadPrevious: "Zurück",
  over: "über",
  taken: "Gebucht",
  topbar: {
    filters: "Filter",
    next: "vor",
    prev: "zurück",
    today: "Heute",
    view: "Ansicht"
  },
  search: "Suche",
  week: "Woche"
}, Ls = {
  feelingEmpty: "Jaučiuosi toks tuščias...",
  free: "Laisva",
  loadNext: "Kitas",
  loadPrevious: "Ankstesnis",
  over: "virš",
  taken: "Užimta",
  topbar: {
    filters: "Filtras",
    next: "kitas",
    prev: "ankstesnis",
    today: "Šiandien",
    view: "Rodinys"
  },
  search: "ieškoti",
  week: "savaitė"
}, Ys = [
  {
    id: "en",
    lang: Os,
    translateCode: "en-GB",
    dayjsTranslations: $s
  },
  {
    id: "pl",
    lang: Rs,
    translateCode: "pl-PL",
    dayjsTranslations: _s
  },
  {
    id: "lt",
    lang: Ls,
    translateCode: "lt-LT",
    dayjsTranslations: Ds
  },
  {
    id: "de",
    lang: As,
    translateCode: "de-DE",
    dayjsTranslations: Ts
  }
];
class Is {
  constructor() {
    nr(this, "locales", Ys);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(r) {
    this.locales.push(r);
  }
}
const gt = new Is(), dn = Nr({
  localesData: gt.getLocales(),
  currentLocale: gt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Ns = ({ children: e, lang: r, translations: t }) => {
  const [n, o] = me("en"), s = gt.getLocales(), i = we(() => {
    const u = s.find((f) => f.id === n);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && L.locale(u.dayjsTranslations), u || s[0];
  }, [n, s]), [c, l] = me(i()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), l(u);
  };
  pe(() => {
    t == null || t.forEach((u) => {
      s.find((v) => v.id === u.id) || gt.addLocales(u);
    });
  }, [s, t]), pe(() => {
    const u = localStorage.getItem("locale"), f = r ?? u ?? "en";
    localStorage.setItem("locale", f), o(f), l(i());
  }, [i, r]);
  const { Provider: d } = dn;
  return /* @__PURE__ */ D(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, tt = () => Ye(dn).currentLocale.lang, Hs = (e) => /* @__PURE__ */ F.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ F.createElement("defs", null, /* @__PURE__ */ F.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ F.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ F.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ F.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ F.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ F.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ F.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ F.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ F.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ F.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ F.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ F.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ F.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ F.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Zs = W.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Ws = W.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, Fs = () => {
  const { feelingEmpty: e } = tt();
  return /* @__PURE__ */ ae(Zs, { children: [
    /* @__PURE__ */ D(Hs, {}),
    /* @__PURE__ */ D(Ws, { children: e })
  ] });
}, zs = W.div`
  position: relative;
  display: flex;
`, js = W.div`
  position: relative;
  margin-left: ${Se};
  display: flex;
  flex-direction: column;
  contain: paint;
`, Bs = W.div`
  width: calc(${({ width: e }) => e}px - ${Se}px);
  position: sticky;
  top: 0;
  height: 100%;
  left: ${Se}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Er = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, Vs = ({
  data: e,
  onTileClick: r,
  onItemClick: t,
  toggleTheme: n,
  topBarWidth: o
}) => {
  const [s, i] = me(Er), [c, l] = me(e), [a, d] = me(!1), [u, f] = me(""), {
    zoom: v,
    startDate: y,
    config: { includeTakenHoursOnWeekendsInDayView: b, showTooltip: m, showThemeToggle: k }
  } = et(), R = be(null), {
    page: Z,
    projectsPerPerson: O,
    totalRowsPerPage: p,
    rowsPerItem: M,
    currentPageNum: T,
    pagesAmount: z,
    next: j,
    previous: I,
    reset: q
  } = Ss(c), Q = be(
    ze(
      (N, w, Y, B, U) => {
        if (!R.current)
          return;
        const { left: te, top: E } = R.current.getBoundingClientRect(), $ = { x: N.clientX - te, y: N.clientY - E }, {
          coords: { x: S, y: H },
          resourceIndex: h,
          disposition: V
        } = gs(
          w,
          $,
          Y,
          B,
          U,
          b
        );
        i({ coords: { x: S, y: H }, resourceIndex: h, disposition: V }), d(!0);
      },
      300
    )
  ), P = be(
    ze((N, w) => {
      q(), l(
        N.filter(
          (Y) => Y.label.title.toLowerCase().includes(w.toLowerCase())
        )
      );
    }, 500)
  ), _ = (N) => {
    const w = N.target.value;
    f(w), P.current.cancel(), P.current(e, w);
  }, x = we(() => {
    Q.current.cancel(), d(!1), i(Er);
  }, []);
  return pe(() => {
    const N = (Y) => Q.current(Y, y, M, O, v), w = R.current;
    if (w)
      return w.addEventListener("mousemove", N), w.addEventListener("mouseleave", x), () => {
        w.removeEventListener("mousemove", N), w.removeEventListener("mouseleave", x);
      };
  }, [Q, x, O, M, y, v]), pe(() => {
    u || l(e);
  }, [e, u]), /* @__PURE__ */ ae(zs, { children: [
    /* @__PURE__ */ D(
      Oi,
      {
        data: Z,
        pageNum: T,
        pagesAmount: z,
        rows: M,
        onLoadNext: j,
        onLoadPrevious: I,
        searchInputValue: u,
        onSearchInputChange: _,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ ae(js, { children: [
      /* @__PURE__ */ D(
        qi,
        {
          zoom: v,
          topBarWidth: o,
          showThemeToggle: k,
          toggleTheme: n
        }
      ),
      e.length ? /* @__PURE__ */ D(
        fs,
        {
          data: Z,
          zoom: v,
          rows: p,
          ref: R,
          onTileClick: r
        }
      ) : /* @__PURE__ */ D(Bs, { width: o, children: /* @__PURE__ */ D(Fs, {}) }),
      m && a && (s == null ? void 0 : s.resourceIndex) > -1 && /* @__PURE__ */ D(fa, { tooltipData: s, zoom: v })
    ] })
  ] });
}, un = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, Gs = W.div`
  width: calc(${({ width: e }) => e}px - ${Se}px);
  position: sticky;
  top: 0;
  left: ${Se}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Us = W.div`
  display: flex;
  gap: 1.875rem;
`, Tr = W.button`
  ${un};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, Xs = W.button`
  ${un};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;
  color: ${({ theme: e }) => e.colors.textPrimary};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: e }) => e.colors.textPrimary};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`, Js = W.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, qs = W.div`
  display: flex;
`, Ks = W.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, Qs = ({ width: e, showThemeToggle: r, toggleTheme: t }) => {
  const { topbar: n } = tt(), {
    data: o,
    config: s,
    handleGoNext: i,
    handleGoPrev: c,
    handleGoToday: l,
    zoomIn: a,
    zoomOut: d,
    isNextZoom: u,
    isPrevZoom: f,
    handleFilterData: v,
    onClearFilterData: y
  } = et(), { colors: b } = Fe(), { filterButtonState: m = -1 } = s, k = (R) => {
    R.stopPropagation(), y == null || y();
  };
  return /* @__PURE__ */ ae(Gs, { width: e, children: [
    /* @__PURE__ */ D(qs, { children: m >= 0 && /* @__PURE__ */ ae(
      Mt,
      {
        variant: m ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: v,
        children: [
          n.filters,
          !!m && /* @__PURE__ */ D("span", { onClick: k, children: /* @__PURE__ */ D(Ce, { iconName: "close", height: "16", width: "16", fill: b.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ ae(Us, { children: [
      /* @__PURE__ */ ae(Tr, { disabled: !(o != null && o.length), onClick: c, children: [
        /* @__PURE__ */ D(Ce, { iconName: "arrowLeft", height: "15", fill: b.textPrimary }),
        n.prev
      ] }),
      /* @__PURE__ */ D(Xs, { onClick: l, children: n.today }),
      /* @__PURE__ */ ae(Tr, { disabled: !(o != null && o.length), onClick: i, children: [
        n.next,
        /* @__PURE__ */ D(Ce, { iconName: "arrowRight", height: "15", fill: b.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ ae(Ks, { children: [
      r && /* @__PURE__ */ D(ya, { toggleTheme: t }),
      /* @__PURE__ */ ae(Js, { children: [
        n.view,
        /* @__PURE__ */ D(
          Mt,
          {
            isDisabled: !f,
            onClick: d,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ D(
          Mt,
          {
            isDisabled: !u,
            onClick: a,
            isFullRounded: !0,
            iconName: "add",
            width: "14"
          }
        )
      ] })
    ] })
  ] });
}, ei = (e) => /* @__PURE__ */ F.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), ti = (e) => /* @__PURE__ */ F.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), ri = (e) => /* @__PURE__ */ F.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), ni = (e) => /* @__PURE__ */ F.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), oi = (e) => /* @__PURE__ */ F.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), si = (e) => /* @__PURE__ */ F.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), ii = (e) => /* @__PURE__ */ F.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), ai = (e) => /* @__PURE__ */ F.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), ci = (e) => /* @__PURE__ */ F.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), li = (e) => /* @__PURE__ */ F.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), di = (e) => /* @__PURE__ */ F.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), ui = (e) => /* @__PURE__ */ F.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), hi = (e) => /* @__PURE__ */ F.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), fi = (e) => /* @__PURE__ */ F.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ F.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ F.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ F.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ F.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ F.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ F.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ F.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ F.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), pi = {
  add: ei,
  subtract: ti,
  filter: ri,
  arrowLeft: ni,
  arrowRight: oi,
  defaultAvatar: si,
  calendarWarning: ii,
  calendarFree: ai,
  arrowDown: li,
  arrowUp: ci,
  search: di,
  close: ui,
  moon: hi,
  sun: fi
}, Ce = ({ iconName: e, width: r, height: t, fill: n, className: o }) => {
  const { colors: s } = Fe(), i = pi[e];
  return i ? /* @__PURE__ */ D(
    i,
    {
      style: { transition: ".5s ease" },
      fill: n ?? s.accent,
      width: r,
      height: t,
      className: o
    }
  ) : null;
}, mi = (e, r, t) => ({
  outlined: {
    color: t ? e.colors.disabled : e.colors.accent,
    border: `1px solid ${t ? e.colors.disabled : e.colors.accent}`,
    background: "transparent"
  },
  filled: {
    color: t ? e.colors.primary : e.colors.textSecondary,
    background: t ? e.colors.disabled : e.colors.accent,
    border: "1px solid transparent"
  }
})[r], vi = W.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${({ isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: ${({ disabled: e }) => e ? "auto" : "pointer"};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
  ${({ theme: e, variant: r, disabled: t }) => mi(e, r, t)}
`, Mt = ({
  iconName: e,
  width: r,
  height: t,
  fill: n,
  className: o,
  onClick: s,
  children: i,
  isFullRounded: c,
  isDisabled: l,
  variant: a = "outlined"
}) => {
  const { colors: d } = Fe();
  return /* @__PURE__ */ ae(
    vi,
    {
      onClick: s,
      isFullRounded: c,
      hasChildren: !!i,
      disabled: l,
      variant: a,
      children: [
        /* @__PURE__ */ D(
          Ce,
          {
            iconName: e,
            width: r,
            height: t,
            fill: l ? d.disabled : n,
            className: o
          }
        ),
        i
      ]
    }
  );
}, yi = W.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, gi = W.div`
  position: relative;
`, xa = ({
  data: e,
  config: r,
  startDate: t,
  onRangeChange: n,
  onTileClick: o,
  onFilterData: s,
  onClearFilterData: i,
  onItemClick: c,
  isLoading: l
}) => {
  var O;
  const a = Oe(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      translations: void 0,
      ...r
    }),
    [r]
  ), d = be(null), [u, f] = me((O = d.current) == null ? void 0 : O.clientWidth), v = Oe(() => L(t), [t]), [y, b] = me(a.defaultTheme ?? "light"), m = () => {
    b(y === "light" ? "dark" : "light");
  }, k = y === "light" ? go : wo, R = a.theme ? a.theme[k.mode] : {}, Z = {
    ...k,
    colors: {
      ...k.colors,
      ...R
    }
  };
  return pe(() => {
    const p = () => {
      d.current && f(d.current.clientWidth);
    };
    return p(), window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, []), d.current, /* @__PURE__ */ ae(Bt, { children: [
    /* @__PURE__ */ D(yo, {}),
    /* @__PURE__ */ D(fo, { theme: Z, children: /* @__PURE__ */ D(Ns, { lang: a.lang, translations: a.translations, children: /* @__PURE__ */ D(
      ls,
      {
        data: e,
        isLoading: !!l,
        config: a,
        onRangeChange: n,
        defaultStartDate: v,
        onFilterData: s,
        onClearFilterData: i,
        children: /* @__PURE__ */ D(
          yi,
          {
            showScroll: !!e.length,
            id: We,
            ref: d,
            children: /* @__PURE__ */ D(gi, { children: /* @__PURE__ */ D(
              Vs,
              {
                data: e,
                onTileClick: o,
                topBarWidth: u ?? 0,
                onItemClick: c,
                toggleTheme: m
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, wi = W.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: r }) => e === "next" ? `1px solid ${r.colors.border}` : "none"};
`, bi = W.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme: e }) => e.colors.accent};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.accent};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ isVisible: e }) => e ? "1" : "0"};
  pointer-events: ${({ isVisible: e }) => e ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, xi = W.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ci = W.p`
  ${Ke}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Pr = ({
  intent: e,
  onClick: r,
  icon: t,
  isVisible: n,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = tt(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ D(wi, { intent: e, children: /* @__PURE__ */ ae(bi, { onClick: r, isVisible: n, children: [
    t && /* @__PURE__ */ D(xi, { children: t }),
    /* @__PURE__ */ D(Ci, { children: l })
  ] }) });
}, Si = W.div`
  min-width: ${Se + "px"};
  max-width: ${Se + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Mi = W.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Se}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, $i = W.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  color: ${({ theme: e }) => e.colors.textPrimary};
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.placeholder};
  }
`, ki = W.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: e }) => e.colors.primary};
  border: 1px solid
    ${({ theme: e, isFocused: r }) => r ? e.colors.accent : e.colors.border};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`, _i = W.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${xe}px;
  height: calc(${xe}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Ei = W.div`
  display: flex;
  align-items: center;
`, Ti = W.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Pi = W.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Di = W.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Dr = W.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e, theme: r }) => e ? r.colors.textPrimary : r.colors.placeholder};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, Ri = ({ id: e, item: r, rows: t, onItemClick: n }) => /* @__PURE__ */ D(
  _i,
  {
    title: r.title + " | " + r.subtitle,
    clickable: typeof n == "function",
    rows: t,
    onClick: () => n == null ? void 0 : n({ id: e, label: r }),
    children: /* @__PURE__ */ ae(Ei, { children: [
      /* @__PURE__ */ D(Ti, { children: r.icon ? /* @__PURE__ */ D(Pi, { src: r.icon, alt: "Icon" }) : /* @__PURE__ */ D(Ce, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ ae(Di, { children: [
        /* @__PURE__ */ D(Dr, { isMain: !0, children: r.title }),
        /* @__PURE__ */ D(Dr, { children: r.subtitle })
      ] })
    ] })
  }
), Oi = ({
  data: e,
  rows: r,
  onLoadNext: t,
  onLoadPrevious: n,
  pageNum: o,
  pagesAmount: s,
  searchInputValue: i,
  onSearchInputChange: c,
  onItemClick: l
}) => {
  const [a, d] = me(!1), { search: u } = tt(), f = () => d((v) => !v);
  return /* @__PURE__ */ ae(Si, { children: [
    /* @__PURE__ */ ae(Mi, { children: [
      /* @__PURE__ */ ae(ki, { isFocused: a, children: [
        /* @__PURE__ */ D(
          $i,
          {
            placeholder: u,
            value: i,
            onChange: c,
            onFocus: f,
            onBlur: f
          }
        ),
        /* @__PURE__ */ D(Ce, { iconName: "search" })
      ] }),
      /* @__PURE__ */ D(
        Pr,
        {
          intent: "previous",
          isVisible: o !== 0,
          onClick: n,
          icon: /* @__PURE__ */ D(Ce, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: o,
          pagesAmount: s
        }
      )
    ] }),
    e.map((v, y) => /* @__PURE__ */ D(
      Ri,
      {
        id: v.id,
        item: v.label,
        rows: r[y],
        onItemClick: l
      },
      v.id
    )),
    /* @__PURE__ */ D(
      Pr,
      {
        intent: "next",
        isVisible: o !== s - 1,
        onClick: t,
        icon: /* @__PURE__ */ D(Ce, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: o,
        pagesAmount: s
      }
    )
  ] });
}, Ai = W.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
  background-color: ${({ theme: e }) => e.colors.secondary};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, Li = vo`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Yi = W.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Li} 1s infinite;
`, Ii = ({ isLoading: e, position: r }) => e ? /* @__PURE__ */ D(Ai, { position: r, children: /* @__PURE__ */ D(Yi, {}) }) : null, Rr = Ii, Pe = (e, r) => {
  const {
    ctx: t,
    x: n,
    y: o,
    width: s,
    height: i,
    textYPos: c,
    label: l,
    font: a,
    isBottomRow: d,
    fillStyle: u,
    topText: f,
    bottomText: v,
    labelBetweenCells: y
  } = e;
  if (t.beginPath(), t.strokeStyle = r.colors.border, t.setLineDash([]), l && a && c) {
    t.fillStyle = r.colors.gridBackground, t.fillRect(n, o, s, i), y ? (t.moveTo(n, o), t.lineTo(n + s, o), t.stroke(), t.moveTo(n, o + i), t.lineTo(n + s, o + i), t.stroke(), t.moveTo(n + s / 2, o + i), t.lineTo(n + s / 2, o + i - 5), t.stroke()) : t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = a;
    const b = n + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = r.colors.placeholder, t.fillText(l, b, c);
  }
  if (d && u && f && v) {
    t.fillStyle = u, t.fillRect(n, o, s, i), t.strokeRect(n + 0.5, o + 0.5, s, i), t.font = f.font;
    const b = n + s / 2 - t.measureText(f.label).width / 2;
    t.fillStyle = f.color, t.fillText(f.label, b, f.y), t.font = v.font;
    const m = n + s / 2 - t.measureText(v.label).width / 2;
    t.fillStyle = v.color, t.fillText(v.label, m, v.y);
  }
}, hn = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return o === "yearView" ? t ? r.colors.tertiary : r.colors.gridBackground : t || !n ? r.colors.secondary : r.colors.primary;
}, jt = (e, r) => {
  const { isCurrent: t, isBusinessDay: n, variant: o } = e;
  return t ? o === "bottomRow" ? r.colors.placeholder : r.colors.accent : n ? o === "bottomRow" ? r.colors.placeholder : r.colors.textPrimary : r.colors.placeholder;
}, Ni = (e, r, t, n) => {
  const o = Xe - Ne / xo, s = Xe - Ne / Co, i = Te + Qe;
  let c = 0;
  for (let l = 0; l < r; l++) {
    const a = nn(
      L(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(l, "days")
    );
    Pe(
      {
        ctx: e,
        x: c,
        y: i,
        width: ge,
        height: Ne,
        isBottomRow: !0,
        fillStyle: hn(
          {
            isCurrent: a.isCurrentDay,
            isBusinessDay: a.isBusinessDay
          },
          n
        ),
        topText: {
          y: o,
          label: a.dayName.toUpperCase(),
          font: ke.bottomRow.name,
          color: jt(
            { isCurrent: a.isCurrentDay, isBusinessDay: a.isBusinessDay },
            n
          )
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: ke.bottomRow.number,
          color: jt(
            {
              isCurrent: a.isCurrentDay,
              isBusinessDay: a.isBusinessDay,
              variant: "bottomRow"
            },
            n
          )
        }
      },
      n
    ), c += ge;
  }
}, Hi = (e, r, t, n) => {
  let o = -(t.dayOfMonth - 1) * _e;
  const s = Te;
  let c = t.month;
  for (let l = 0; l < r; l++) {
    c >= Ot && (c = 0);
    const a = rn(t, l) * _e;
    Pe(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: Qe,
        textYPos: tn,
        label: L().month(c).format("MMMM").toUpperCase(),
        font: ke.bottomRow.number
      },
      n
    ), o += a, c++;
  }
}, Zi = (e, r, t) => {
  let o = 0, s = 0, i = 0, c = L(
    `${r.year}-${r.month + 1}-${r.dayOfMonth}`
  ).month();
  o = -r.dayOfMonth * ge + ge;
  for (let l = 0; l < Ot; l++)
    c > Ot - 1 && (c = 0, i++), s = L(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(l, "months").daysInMonth() * ge, Pe(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Te,
        textYPos: Kt,
        label: L(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).month(c).format("MMMM").toUpperCase() + ` ${L(`${r.year + i}-${r.month + 1}-${r.dayOfMonth}`).month(c).format("YYYY")}`,
        font: ke.topRow
      },
      t
    ), o += s, c++;
}, Wi = (e, r, t, n) => {
  const o = 7 * ge, s = Te, i = e.canvas.width / o + o, c = r.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const d = L(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).day();
    let u = (c + a) % xr;
    u <= 0 && (u += xr), d !== 1 && a === 0 && (l = -d * ge + ge), Pe(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: Qe,
        textYPos: tn,
        label: `${t.toUpperCase()} ${u}`,
        font: ke.middleRow
      },
      n
    ), l += o;
  }
}, Fi = (e, r, t, n, o) => {
  const s = Xe - Ne / 1.6, i = Xe - Ne / 4.5, c = Te + Qe;
  let l = 0;
  for (let a = 0; a < r; a++) {
    const d = L(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), u = d.isSame(L(), "week");
    Pe(
      {
        ctx: e,
        x: l,
        y: c,
        width: Le,
        height: Ne,
        isBottomRow: !0,
        fillStyle: hn({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: ke.bottomRow.name,
          color: jt({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: n.toUpperCase(),
          font: ke.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Le;
  }
}, zi = (e, r, t, n) => {
  const s = r.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (Mr(s) - t + 1) * _e, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = Mr(s + l) * _e), d + a > i && l > 0 && (a = Math.ceil((i - d) / _e) * _e), Pe(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Te,
        textYPos: Kt,
        label: (s + l).toString(),
        font: ke.topRow
      },
      n
    ), c += a, d += a, l++;
}, ji = (e, r, t, n) => {
  const o = Math.floor(r / yt) + 2, s = yt * ve;
  let l = -L(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * ve + 0.5 * ve;
  for (let a = 0; a < o; a++) {
    const d = L(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD.MM.YYYY").toUpperCase();
    Pe(
      {
        ctx: e,
        x: l,
        y: Je,
        width: s,
        height: at,
        textYPos: Je + at / 2 + 2,
        label: d,
        font: ke.bottomRow.number
      },
      n
    ), l += s;
  }
}, Bi = (e, r, t, n) => {
  const o = Math.ceil(r / yt), s = L(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * ve;
  for (let u = 0; u < a; u++) {
    const f = L(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), y = L(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), b = y.format("MMMM").toUpperCase(), m = y.diff(f, "hour") + 1, k = u === 0 ? m * ve : r * ve;
    Pe(
      {
        ctx: e,
        x: d,
        y: 0,
        width: k,
        height: Je,
        textYPos: Kt,
        label: b,
        font: ke.topRow
      },
      n
    ), d += k;
  }
}, Vi = (e, r, t, n) => {
  let o = 0;
  const s = Je + at, i = L(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = ve;
  for (let l = 0; l < r; l++) {
    const a = i.add(l, "hours").format("HH:00").toUpperCase();
    Pe(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: Rt,
        label: a,
        font: ke.bottomRow.number,
        textYPos: Je + at + Rt / 2 + 2,
        labelBetweenCells: !0
      },
      n
    ), o += ve;
  }
}, Gi = (e, r, t, n, o, s, i) => {
  switch (r) {
    case 0:
      zi(e, n, s, i), Hi(e, t, n, i), Fi(e, t, n, o, i);
      break;
    case 1:
      Zi(e, n, i), Wi(e, n, o, i), Ni(e, t, n, i);
      break;
    case 2:
      Bi(e, t, n, i), ji(e, t, n, i), Vi(e, t, n, i);
      break;
  }
}, Ui = W.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, Xi = W.div`
  height: ${Xe}px;
  display: block;
`, Ji = W.canvas``, qi = ({ zoom: e, topBarWidth: r, showThemeToggle: t, toggleTheme: n }) => {
  const { week: o } = tt(), { date: s, cols: i, dayOfYear: c, startDate: l } = et(), a = be(null), d = Fe(), u = we(
    (f) => {
      const v = rr(), b = (e === 2 ? bo : Xe) + 1;
      sn(f, v, b), Gi(f, e, i, l, o, c, d);
    },
    [i, c, l, o, e, d]
  );
  return pe(() => {
    if (!a.current)
      return;
    const f = a.current.getContext("2d");
    if (!f)
      return;
    const v = () => u(f);
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [u]), pe(() => {
    const f = a.current;
    if (!f)
      return;
    f.style.letterSpacing = "1px";
    const v = f.getContext("2d");
    v && u(v);
  }, [s, e, u]), /* @__PURE__ */ ae(Ui, { children: [
    /* @__PURE__ */ D(Qs, { width: r, showThemeToggle: t, toggleTheme: n }),
    /* @__PURE__ */ D(Xi, { id: So, children: /* @__PURE__ */ D(Ji, { ref: a }) })
  ] });
}, Ki = (e, r, t) => {
  let n;
  switch (t) {
    case 0:
      n = _e;
      break;
    case 2:
      n = ve;
      break;
    default:
      n = ge;
  }
  const o = () => {
    let s;
    switch (t) {
      case 2:
        s = (e.startDate.diff(r.startDate, "minute") / ue + 1) * n - n / 2;
        break;
      default:
        s = (e.startDate.diff(r.startDate, "day") + 1) * n;
    }
    return Math.max(0, s);
  };
  if (e.startDate.isAfter(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = e.endDate.diff(e.startDate, "minute") / ue * n;
        break;
      default:
        s = e.endDate.diff(e.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isBefore(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = e.endDate.diff(r.startDate, "minute") / ue * n + 0.5 * n;
        break;
      default:
        s = e.endDate.diff(r.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isAfter(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = r.endDate.diff(e.startDate, "minute") / ue * n;
        break;
      default:
        s = r.endDate.diff(e.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(r.startDate) && e.endDate.isAfter(r.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = r.endDate.diff(r.startDate, "minute") / ue * n;
        break;
      default:
        s = r.endDate.diff(r.startDate, "day") * n + n;
    }
    return { x: o(), width: s };
  }
  return { x: o(), width: 0 };
}, Qi = (e, r, t, n, o, s) => {
  const i = e * xe + Mo, c = r.hour(), l = t.hour();
  let a, d, u, f;
  switch (s) {
    case 2: {
      a = L(n), d = L(o), u = L(r).hour(c).minute(0), f = L(t).hour(l).minute(0);
      break;
    }
    default: {
      a = L(n).hour(0).minute(0), d = L(o).hour(23).minute(59), u = r, f = t;
      break;
    }
  }
  return {
    ...Ki(
      { startDate: a, endDate: d },
      { startDate: u, endDate: f },
      s
    ),
    y: i
  };
}, ea = (e) => {
  if (!e)
    return "white";
  const r = [];
  for (let o = 1; o < 6; o += 2)
    r.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = r.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, ta = W.button`
  ${Ke}
  height: ${$o}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: e }) => e.colors.textPrimary};
  width: 100%;
  cursor: pointer;
`, ra = W.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Or = W.p`
  ${Ke}
  ${Qr}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, na = W.p`
  ${Ke}
  ${Qr}
`, oa = W.div`
  position: sticky;
  left: ${Se + 16}px;
  overflow: hidden;
`, sa = ({ row: e, data: r, zoom: t, onTileClick: n }) => {
  const { date: o } = et(), s = tr(o, t), { y: i, x: c, width: l } = Qi(
    e,
    s.startDate,
    s.endDate,
    r.startDate,
    r.endDate,
    t
  ), { colors: a } = Fe();
  return l <= 0 ? null : /* @__PURE__ */ D(
    ta,
    {
      style: {
        left: `${c}px`,
        top: `${i}px`,
        backgroundColor: `${r.bgColor ?? a.defaultTile}`,
        width: `${l}px`,
        color: ea(r.bgColor ?? "")
      },
      onClick: () => n == null ? void 0 : n(r),
      children: /* @__PURE__ */ D(ra, { children: /* @__PURE__ */ ae(oa, { children: [
        /* @__PURE__ */ D(Or, { bold: !0, children: r.title }),
        /* @__PURE__ */ D(Or, { children: r.subtitle }),
        /* @__PURE__ */ D(na, { children: r.description })
      ] }) })
    }
  );
}, ia = ({ data: e, zoom: r, onTileClick: t }) => {
  const n = we(() => {
    let o = 0;
    return e.map((s, i) => (i > 0 && (o += Math.max(e[i - 1].data.length, 1)), s.data.map(
      (c, l) => c.map((a) => /* @__PURE__ */ D(
        sa,
        {
          row: l + o,
          data: a,
          zoom: r,
          onTileClick: t
        },
        a.id
      ))
    ))).flat(2);
  }, [e, t, r]);
  return /* @__PURE__ */ D(Bt, { children: n() });
}, aa = ia;
W.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
W.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
W.label`
  font-size: 14px;
`;
W.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
W.input`
  height: 18px;
  width: 18px;
`;
W.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
W.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const ca = W.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.tooltip};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, la = W.div`
  width: 100%;
`, da = W.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: e }) => e.colors.tooltip};
`, ua = W.div``, Ar = W.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, Lr = W.div`
  ${Ke}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSecondary};
  line-height: 12px;
  letter-spacing: 0.5px;
`, Yr = W.p`
  ${Ke}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.textSecondary};
`, ha = W.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.warning};
`, fa = ({ tooltipData: e, zoom: r }) => {
  const { taken: t, free: n, over: o } = tt(), { coords: s, disposition: i } = e, c = be(null);
  let l = Le;
  switch (r) {
    case 0:
      l = Le;
      break;
    case 1:
      l = ge;
      break;
    case 2:
      l = ve;
      break;
  }
  return Ir(() => {
    if (!c.current)
      return;
    const { width: a } = c.current.getBoundingClientRect();
    let d;
    switch (r) {
      case 2:
        d = a / 2 + l;
        break;
      default:
        d = a / 2 + l / 2;
        break;
    }
    c.current.style.left = `${s.x - d}px`, c.current.style.top = `${s.y + 8}px`;
  }, [s.x, l, i.overtime, s.y, r]), /* @__PURE__ */ ae(ca, { ref: c, children: [
    /* @__PURE__ */ D(la, { children: /* @__PURE__ */ ae(ua, { children: [
      /* @__PURE__ */ ae(Ar, { children: [
        /* @__PURE__ */ D(Ce, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ ae(Lr, { children: [
          /* @__PURE__ */ D(Yr, { children: `${t}: ${i.taken.hours}h ${i.taken.minutes}m` }),
          (i.overtime.hours > 0 || i.overtime.minutes > 0) && /* @__PURE__ */ ae(Bt, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ D(ha, { children: `${i.overtime.hours}h ${i.overtime.minutes}m ${o}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ ae(Ar, { children: [
        /* @__PURE__ */ D(Ce, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ D(Lr, { children: /* @__PURE__ */ D(Yr, { children: `${n}: ${i.free.hours}h ${i.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ D(da, {})
  ] });
}, pa = W.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, ma = W.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, va = W.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, ya = ({ toggleTheme: e }) => {
  const r = Fe();
  return /* @__PURE__ */ ae(pa, { onClick: e, children: [
    /* @__PURE__ */ D(ma, {}),
    /* @__PURE__ */ D(va, { children: r.mode === "light" ? /* @__PURE__ */ D(Ce, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ D(Ce, { iconName: "moon", height: "16", width: "16" }) })
  ] });
};
export {
  xa as Scheduler
};
