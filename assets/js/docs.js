var J = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function X(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var R = { exports: {} };
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */ (function (r, p) {
  (function (y, w) {
    r.exports = w();
  })(J, function () {
    return (function () {
      var g = {
          686: function (s, o, t) {
            t.d(o, {
              default: function () {
                return G;
              },
            });
            var a = t(279),
              u = t.n(a),
              d = t(370),
              E = t.n(d),
              v = t(817),
              S = t.n(v);
            function h(c) {
              try {
                return document.execCommand(c);
              } catch {
                return !1;
              }
            }
            var b = function (n) {
                var e = S()(n);
                return h("cut"), e;
              },
              m = b;
            function C(c) {
              var n = document.documentElement.getAttribute("dir") === "rtl",
                e = document.createElement("textarea");
              (e.style.fontSize = "12pt"), (e.style.border = "0"), (e.style.padding = "0"), (e.style.margin = "0"), (e.style.position = "absolute"), (e.style[n ? "right" : "left"] = "-9999px");
              var l = window.pageYOffset || document.documentElement.scrollTop;
              return (e.style.top = "".concat(l, "px")), e.setAttribute("readonly", ""), (e.value = c), e;
            }
            var q = function (n) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body },
                  l = "";
                if (typeof n == "string") {
                  var i = C(n);
                  e.container.appendChild(i), (l = S()(i)), h("copy"), i.remove();
                } else (l = S()(n)), h("copy");
                return l;
              },
              k = q;
            function L(c) {
              return (
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                  ? (L = function (e) {
                      return typeof e;
                    })
                  : (L = function (e) {
                      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }),
                L(c)
              );
            }
            var j = function () {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                  e = n.action,
                  l = e === void 0 ? "copy" : e,
                  i = n.container,
                  f = n.target,
                  T = n.text;
                if (l !== "copy" && l !== "cut") throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (f !== void 0)
                  if (f && L(f) === "object" && f.nodeType === 1) {
                    if (l === "copy" && f.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if (l === "cut" && (f.hasAttribute("readonly") || f.hasAttribute("disabled"))) throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                  } else throw new Error('Invalid "target" value, use a valid Element');
                if (T) return k(T, { container: i });
                if (f) return l === "cut" ? m(f) : k(f, { container: i });
              },
              B = j;
            function _(c) {
              return (
                typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                  ? (_ = function (e) {
                      return typeof e;
                    })
                  : (_ = function (e) {
                      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }),
                _(c)
              );
            }
            function I(c, n) {
              if (!(c instanceof n)) throw new TypeError("Cannot call a class as a function");
            }
            function D(c, n) {
              for (var e = 0; e < n.length; e++) {
                var l = n[e];
                (l.enumerable = l.enumerable || !1), (l.configurable = !0), "value" in l && (l.writable = !0), Object.defineProperty(c, l.key, l);
              }
            }
            function z(c, n, e) {
              return n && D(c.prototype, n), e && D(c, e), c;
            }
            function $(c, n) {
              if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
              (c.prototype = Object.create(n && n.prototype, { constructor: { value: c, writable: !0, configurable: !0 } })), n && N(c, n);
            }
            function N(c, n) {
              return (
                (N =
                  Object.setPrototypeOf ||
                  function (l, i) {
                    return (l.__proto__ = i), l;
                  }),
                N(c, n)
              );
            }
            function F(c) {
              var n = V();
              return function () {
                var l = x(c),
                  i;
                if (n) {
                  var f = x(this).constructor;
                  i = Reflect.construct(l, arguments, f);
                } else i = l.apply(this, arguments);
                return W(this, i);
              };
            }
            function W(c, n) {
              return n && (_(n) === "object" || typeof n == "function") ? n : U(c);
            }
            function U(c) {
              if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return c;
            }
            function V() {
              if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch {
                return !1;
              }
            }
            function x(c) {
              return (
                (x = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                x(c)
              );
            }
            function O(c, n) {
              var e = "data-clipboard-".concat(c);
              if (n.hasAttribute(e)) return n.getAttribute(e);
            }
            var Y = (function (c) {
                $(e, c);
                var n = F(e);
                function e(l, i) {
                  var f;
                  return I(this, e), (f = n.call(this)), f.resolveOptions(i), f.listenClick(l), f;
                }
                return (
                  z(
                    e,
                    [
                      {
                        key: "resolveOptions",
                        value: function () {
                          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                          (this.action = typeof i.action == "function" ? i.action : this.defaultAction),
                            (this.target = typeof i.target == "function" ? i.target : this.defaultTarget),
                            (this.text = typeof i.text == "function" ? i.text : this.defaultText),
                            (this.container = _(i.container) === "object" ? i.container : document.body);
                        },
                      },
                      {
                        key: "listenClick",
                        value: function (i) {
                          var f = this;
                          this.listener = E()(i, "click", function (T) {
                            return f.onClick(T);
                          });
                        },
                      },
                      {
                        key: "onClick",
                        value: function (i) {
                          var f = i.delegateTarget || i.currentTarget,
                            T = this.action(f) || "copy",
                            A = B({ action: T, container: this.container, target: this.target(f), text: this.text(f) });
                          this.emit(A ? "success" : "error", {
                            action: T,
                            text: A,
                            trigger: f,
                            clearSelection: function () {
                              f && f.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
                            },
                          });
                        },
                      },
                      {
                        key: "defaultAction",
                        value: function (i) {
                          return O("action", i);
                        },
                      },
                      {
                        key: "defaultTarget",
                        value: function (i) {
                          var f = O("target", i);
                          if (f) return document.querySelector(f);
                        },
                      },
                      {
                        key: "defaultText",
                        value: function (i) {
                          return O("text", i);
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.listener.destroy();
                        },
                      },
                    ],
                    [
                      {
                        key: "copy",
                        value: function (i) {
                          var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { container: document.body };
                          return k(i, f);
                        },
                      },
                      {
                        key: "cut",
                        value: function (i) {
                          return m(i);
                        },
                      },
                      {
                        key: "isSupported",
                        value: function () {
                          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"],
                            f = typeof i == "string" ? [i] : i,
                            T = !!document.queryCommandSupported;
                          return (
                            f.forEach(function (A) {
                              T = T && !!document.queryCommandSupported(A);
                            }),
                            T
                          );
                        },
                      },
                    ]
                  ),
                  e
                );
              })(u()),
              G = Y;
          },
          828: function (s) {
            var o = 9;
            if (typeof Element < "u" && !Element.prototype.matches) {
              var t = Element.prototype;
              t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector;
            }
            function a(u, d) {
              for (; u && u.nodeType !== o; ) {
                if (typeof u.matches == "function" && u.matches(d)) return u;
                u = u.parentNode;
              }
            }
            s.exports = a;
          },
          438: function (s, o, t) {
            var a = t(828);
            function u(v, S, h, b, m) {
              var C = E.apply(this, arguments);
              return (
                v.addEventListener(h, C, m),
                {
                  destroy: function () {
                    v.removeEventListener(h, C, m);
                  },
                }
              );
            }
            function d(v, S, h, b, m) {
              return typeof v.addEventListener == "function"
                ? u.apply(null, arguments)
                : typeof h == "function"
                ? u.bind(null, document).apply(null, arguments)
                : (typeof v == "string" && (v = document.querySelectorAll(v)),
                  Array.prototype.map.call(v, function (C) {
                    return u(C, S, h, b, m);
                  }));
            }
            function E(v, S, h, b) {
              return function (m) {
                (m.delegateTarget = a(m.target, S)), m.delegateTarget && b.call(v, m);
              };
            }
            s.exports = d;
          },
          879: function (s, o) {
            (o.node = function (t) {
              return t !== void 0 && t instanceof HTMLElement && t.nodeType === 1;
            }),
              (o.nodeList = function (t) {
                var a = Object.prototype.toString.call(t);
                return t !== void 0 && (a === "[object NodeList]" || a === "[object HTMLCollection]") && "length" in t && (t.length === 0 || o.node(t[0]));
              }),
              (o.string = function (t) {
                return typeof t == "string" || t instanceof String;
              }),
              (o.fn = function (t) {
                var a = Object.prototype.toString.call(t);
                return a === "[object Function]";
              });
          },
          370: function (s, o, t) {
            var a = t(879),
              u = t(438);
            function d(h, b, m) {
              if (!h && !b && !m) throw new Error("Missing required arguments");
              if (!a.string(b)) throw new TypeError("Second argument must be a String");
              if (!a.fn(m)) throw new TypeError("Third argument must be a Function");
              if (a.node(h)) return E(h, b, m);
              if (a.nodeList(h)) return v(h, b, m);
              if (a.string(h)) return S(h, b, m);
              throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            }
            function E(h, b, m) {
              return (
                h.addEventListener(b, m),
                {
                  destroy: function () {
                    h.removeEventListener(b, m);
                  },
                }
              );
            }
            function v(h, b, m) {
              return (
                Array.prototype.forEach.call(h, function (C) {
                  C.addEventListener(b, m);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(h, function (C) {
                      C.removeEventListener(b, m);
                    });
                  },
                }
              );
            }
            function S(h, b, m) {
              return u(document.body, h, b, m);
            }
            s.exports = d;
          },
          817: function (s) {
            function o(t) {
              var a;
              if (t.nodeName === "SELECT") t.focus(), (a = t.value);
              else if (t.nodeName === "INPUT" || t.nodeName === "TEXTAREA") {
                var u = t.hasAttribute("readonly");
                u || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), u || t.removeAttribute("readonly"), (a = t.value);
              } else {
                t.hasAttribute("contenteditable") && t.focus();
                var d = window.getSelection(),
                  E = document.createRange();
                E.selectNodeContents(t), d.removeAllRanges(), d.addRange(E), (a = d.toString());
              }
              return a;
            }
            s.exports = o;
          },
          279: function (s) {
            function o() {}
            (o.prototype = {
              on: function (t, a, u) {
                var d = this.e || (this.e = {});
                return (d[t] || (d[t] = [])).push({ fn: a, ctx: u }), this;
              },
              once: function (t, a, u) {
                var d = this;
                function E() {
                  d.off(t, E), a.apply(u, arguments);
                }
                return (E._ = a), this.on(t, E, u);
              },
              emit: function (t) {
                var a = [].slice.call(arguments, 1),
                  u = ((this.e || (this.e = {}))[t] || []).slice(),
                  d = 0,
                  E = u.length;
                for (d; d < E; d++) u[d].fn.apply(u[d].ctx, a);
                return this;
              },
              off: function (t, a) {
                var u = this.e || (this.e = {}),
                  d = u[t],
                  E = [];
                if (d && a) for (var v = 0, S = d.length; v < S; v++) d[v].fn !== a && d[v].fn._ !== a && E.push(d[v]);
                return E.length ? (u[t] = E) : delete u[t], this;
              },
            }),
              (s.exports = o),
              (s.exports.TinyEmitter = o);
          },
        },
        y = {};
      function w(s) {
        if (y[s]) return y[s].exports;
        var o = (y[s] = { exports: {} });
        return g[s](o, o.exports, w), o.exports;
      }
      return (
        (function () {
          w.n = function (s) {
            var o =
              s && s.__esModule
                ? function () {
                    return s.default;
                  }
                : function () {
                    return s;
                  };
            return w.d(o, { a: o }), o;
          };
        })(),
        (function () {
          w.d = function (s, o) {
            for (var t in o) w.o(o, t) && !w.o(s, t) && Object.defineProperty(s, t, { enumerable: !0, get: o[t] });
          };
        })(),
        (function () {
          w.o = function (s, o) {
            return Object.prototype.hasOwnProperty.call(s, o);
          };
        })(),
        w(686)
      );
    })().default;
  });
})(R);
var K = R.exports;
const Q = X(K),
  P =
    '<svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>',
  Z =
    '<svg fill="currentColor" class="fill-current text-white h-5 w-5" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>';
let tt = document.querySelectorAll("#main-content pre");
tt.forEach((r, p) => {
  var g = document.createElement("div");
  ["relative", "code-block-wrapper"].forEach((o) => {
    g.classList.add(o);
  }),
    r.parentNode.insertBefore(g, r),
    g.appendChild(r);
  let y = document.createElement("button");
  (y.innerHTML = P),
    (y.id = `clipButton-${p}`),
    ["md:block", "hidden"].forEach((o) => {
      y.classList.add(o);
    }),
    y.setAttribute("aria-label", "Copy to Clipboard"),
    y.setAttribute("title", "Copy to Clipboard"),
    y.classList.add("copyBtn"),
    g.appendChild(y),
    new Q(`#${y.id}`).on("success", (o) => {
      (y.innerHTML = Z),
        o.clearSelection(),
        setTimeout(() => {
          y.innerHTML = P;
        }, 1500);
    });
  let s = r.querySelector("code");
  (s.id = `clipText-${p}`), (y.dataset.clipboardTarget = `#${s.id}`);
});
window.toDarkMode = () => {
  (localStorage.theme = "dark"), window.updateTheme();
};
window.toLightMode = () => {
  (localStorage.theme = "light"), window.updateTheme();
};
window.toSystemMode = () => {
  (localStorage.theme = "system"), window.updateTheme();
};
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (r) => {
  localStorage.theme === "system" &&
    (r.matches
      ? (document.documentElement.classList.add("dark"), document.documentElement.setAttribute("data-theme", "dark"))
      : (document.documentElement.classList.remove("dark"), document.documentElement.setAttribute("data-theme", "light"))),
    updateThemeAndSchemeColor();
});
document.addEventListener("DOMContentLoaded", () => {
  et(), nt(), rt(), ot();
  const r = document.querySelector("#skip-to-content-link"),
    p = document.querySelector("#main-content");
  r.addEventListener("click", (g) => {
    g.preventDefault(), p.setAttribute("tabindex", -1), p.focus();
  }),
    p.addEventListener("blur", () => {
      p.removeAttribute("tabindex");
    });
});
function et() {
  [...document.querySelector(".docs_main").querySelectorAll("a[name]")].forEach((r) => {
    const p = r.parentNode.nextElementSibling;
    (p.id = r.name), (r.href = `#${r.name}`), r.removeAttribute("name"), [...p.childNodes].forEach((g) => r.appendChild(g)), p.appendChild(r);
  });
}
function nt() {
  [...document.querySelectorAll(".docs_sidebar ul")].forEach((r) => {
    const p = window.location.pathname.split("/").length,
      g = r.querySelector('li a[href="' + (p === 3 ? window.location.pathname + "/installation" : window.location.pathname) + '"]');
    g && (g.parentNode.parentNode.parentNode.classList.add("sub--on"), g.parentNode.classList.add("active"));
  }),
    [...document.querySelectorAll(".docs_sidebar h2")].forEach((r) => {
      r.addEventListener("click", (p) => {
        p.preventDefault();
        const g = r.parentNode.classList.contains("sub--on");
        [...document.querySelectorAll(".docs_sidebar ul li")].forEach((y) => y.classList.remove("sub--on")), g || r.parentNode.classList.add("sub--on");
      });
    });
}
function rt() {
  [...document.querySelectorAll(".docs_main blockquote p")].forEach((r) => {
    M(r, /\{(.*?)\}/, (p) => {
      switch (p) {
        case "note":
          return ["/img/callouts/exclamation.min.svg", "bg-red-600"];
        case "tip":
          return ["assets/img/callouts/lightbulb.min.svg", "bg-purple-600"];
        case "laracasts":
        case "video":
          return ["/img/callouts/laracast.min.svg", "bg-blue-600"];
        default:
          return [null, null];
      }
    }),
      M(r, /^\[\!(.*?)\](?:<br>\n?)?/, (p) => {
        switch (p) {
          case "WARNING":
            return ["/img/callouts/exclamation.min.svg", "bg-red-600"];
          case "NOTE":
            return ["assets/img/callouts/lightbulb.min.svg", "bg-purple-600"];
          default:
            return [null, null];
        }
      }),
      M(r, /^<strong>(.*?)<\/strong>(?:<br>\n?)?/, (p) => {
        switch (p) {
          case "Warning":
            return ["/img/callouts/exclamation.min.svg", "bg-red-600"];
          case "Note":
            return ["assets/img/callouts/lightbulb.min.svg", "bg-purple-600"];
          default:
            return [null, null];
        }
      });
  });
}
function M(r, p, g) {
  var y = r.innerHTML,
    w = y.match(p),
    s,
    o;
  if (w) var t = w[1] || !1;
  if (t) {
    if ((([s, o] = g(t)), s === null && o === null)) return;
    const a = document.createElement("div");
    a.classList = "mb-10 max-w-2xl mx-auto px-4 py-8 shadow-lg lg:flex lg:items-center";
    const u = document.createElement("div");
    u.classList = `w-20 h-20 mb-6 flex items-center justify-center shrink-0 ${o} lg:mb-0`;
    const d = document.createElement("img");
    (d.src = s), (d.classList = "opacity-75"), u.appendChild(d), a.appendChild(u), r.parentNode.insertBefore(a, r), (r.innerHTML = y.replace(p, "")), (r.classList = "mb-0 lg:ml-6"), a.classList.add("callout"), a.appendChild(r);
  }
}
function ot() {
  function r(y) {
    const w = new Date().valueOf();
    Array.from(y.rows).forEach((s, o) => {
      if (o > 0) {
        const t = s.cells,
          a = t[0],
          u = H(t[t.length - 2]),
          d = H(t[t.length - 1]);
        w > d ? a.classList.add("bg-red-500", "support-policy-highlight") : w <= d && w > u && a.classList.add("bg-orange-600", "support-policy-highlight");
      }
    });
  }
  const p = document.querySelector(".docs_main #support-policy ~ div table:first-of-type");
  if (p) {
    r(p);
    return;
  }
  const g = document.querySelector(".docs_main #support-policy ~ table:first-of-type");
  g && r(g);
}
function H(r) {
  return Date.parse(r.innerHTML.replace(/(\d+)(st|nd|rd|th)/, "$1"));
}
