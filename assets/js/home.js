var _r = !1,
  gr = !1,
  pe = [];
function Ya(e) {
  Xa(e);
}
function Xa(e) {
  pe.includes(e) || pe.push(e), ec();
}
function Bo(e) {
  let t = pe.indexOf(e);
  t !== -1 && pe.splice(t, 1);
}
function ec() {
  !gr && !_r && ((_r = !0), queueMicrotask(tc));
}
function tc() {
  (_r = !1), (gr = !0);
  for (let e = 0; e < pe.length; e++) pe[e]();
  (pe.length = 0), (gr = !1);
}
var Ce,
  at,
  qt,
  Ko,
  yr = !0;
function rc(e) {
  (yr = !1), e(), (yr = !0);
}
function nc(e) {
  (Ce = e.reactive),
    (qt = e.release),
    (at = (t) =>
      e.effect(t, {
        scheduler: (r) => {
          yr ? Ya(r) : r();
        },
      })),
    (Ko = e.raw);
}
function wn(e) {
  at = e;
}
function oc(e) {
  let t = () => {};
  return [
    (n) => {
      let o = at(n);
      return (
        e._x_effects ||
          ((e._x_effects = new Set()),
          (e._x_runEffects = () => {
            e._x_effects.forEach((i) => i());
          })),
        e._x_effects.add(o),
        (t = () => {
          o !== void 0 && (e._x_effects.delete(o), qt(o));
        }),
        o
      );
    },
    () => {
      t();
    },
  ];
}
var $o = [],
  Vo = [],
  Wo = [];
function ic(e) {
  Wo.push(e);
}
function zo(e, t) {
  typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : ((t = e), Vo.push(t));
}
function ac(e) {
  $o.push(e);
}
function cc(e, t, r) {
  e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(r);
}
function Jo(e, t) {
  e._x_attributeCleanups &&
    Object.entries(e._x_attributeCleanups).forEach(([r, n]) => {
      (t === void 0 || t.includes(r)) && (n.forEach((o) => o()), delete e._x_attributeCleanups[r]);
    });
}
var Wr = new MutationObserver(Qr),
  zr = !1;
function Qo() {
  Wr.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), (zr = !0);
}
function uc() {
  lc(), Wr.disconnect(), (zr = !1);
}
var Je = [],
  ir = !1;
function lc() {
  (Je = Je.concat(Wr.takeRecords())),
    Je.length &&
      !ir &&
      ((ir = !0),
      queueMicrotask(() => {
        sc(), (ir = !1);
      }));
}
function sc() {
  Qr(Je), (Je.length = 0);
}
function L(e) {
  if (!zr) return e();
  uc();
  let t = e();
  return Qo(), t;
}
var Jr = !1,
  jt = [];
function fc() {
  Jr = !0;
}
function dc() {
  (Jr = !1), Qr(jt), (jt = []);
}
function Qr(e) {
  if (Jr) {
    jt = jt.concat(e);
    return;
  }
  let t = [],
    r = [],
    n = new Map(),
    o = new Map();
  for (let i = 0; i < e.length; i++)
    if (!e[i].target._x_ignoreMutationObserver && (e[i].type === "childList" && (e[i].addedNodes.forEach((a) => a.nodeType === 1 && t.push(a)), e[i].removedNodes.forEach((a) => a.nodeType === 1 && r.push(a))), e[i].type === "attributes")) {
      let a = e[i].target,
        c = e[i].attributeName,
        u = e[i].oldValue,
        l = () => {
          n.has(a) || n.set(a, []), n.get(a).push({ name: c, value: a.getAttribute(c) });
        },
        s = () => {
          o.has(a) || o.set(a, []), o.get(a).push(c);
        };
      a.hasAttribute(c) && u === null ? l() : a.hasAttribute(c) ? (s(), l()) : s();
    }
  o.forEach((i, a) => {
    Jo(a, i);
  }),
    n.forEach((i, a) => {
      $o.forEach((c) => c(a, i));
    });
  for (let i of r) if (!t.includes(i) && (Vo.forEach((a) => a(i)), i._x_cleanups)) for (; i._x_cleanups.length; ) i._x_cleanups.pop()();
  t.forEach((i) => {
    (i._x_ignoreSelf = !0), (i._x_ignore = !0);
  });
  for (let i of t) r.includes(i) || (i.isConnected && (delete i._x_ignoreSelf, delete i._x_ignore, Wo.forEach((a) => a(i)), (i._x_ignore = !0), (i._x_ignoreSelf = !0)));
  t.forEach((i) => {
    delete i._x_ignoreSelf, delete i._x_ignore;
  }),
    (t = null),
    (r = null),
    (n = null),
    (o = null);
}
function Go(e) {
  return ut(je(e));
}
function ct(e, t, r) {
  return (
    (e._x_dataStack = [t, ...je(r || e)]),
    () => {
      e._x_dataStack = e._x_dataStack.filter((n) => n !== t);
    }
  );
}
function Sn(e, t) {
  let r = e._x_dataStack[0];
  Object.entries(t).forEach(([n, o]) => {
    r[n] = o;
  });
}
function je(e) {
  return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? je(e.host) : e.parentNode ? je(e.parentNode) : [];
}
function ut(e) {
  let t = new Proxy(
    {},
    {
      ownKeys: () => Array.from(new Set(e.flatMap((r) => Object.keys(r)))),
      has: (r, n) => e.some((o) => o.hasOwnProperty(n)),
      get: (r, n) =>
        (e.find((o) => {
          if (o.hasOwnProperty(n)) {
            let i = Object.getOwnPropertyDescriptor(o, n);
            if ((i.get && i.get._x_alreadyBound) || (i.set && i.set._x_alreadyBound)) return !0;
            if ((i.get || i.set) && i.enumerable) {
              let a = i.get,
                c = i.set,
                u = i;
              (a = a && a.bind(t)), (c = c && c.bind(t)), a && (a._x_alreadyBound = !0), c && (c._x_alreadyBound = !0), Object.defineProperty(o, n, { ...u, get: a, set: c });
            }
            return !0;
          }
          return !1;
        }) || {})[n],
      set: (r, n, o) => {
        let i = e.find((a) => a.hasOwnProperty(n));
        return i ? (i[n] = o) : (e[e.length - 1][n] = o), !0;
      },
    }
  );
  return t;
}
function Zo(e) {
  let t = (n) => typeof n == "object" && !Array.isArray(n) && n !== null,
    r = (n, o = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([i, { value: a, enumerable: c }]) => {
        if (c === !1 || a === void 0) return;
        let u = o === "" ? i : `${o}.${i}`;
        typeof a == "object" && a !== null && a._x_interceptor ? (n[i] = a.initialize(e, u, i)) : t(a) && a !== n && !(a instanceof Element) && r(a, u);
      });
    };
  return r(e);
}
function Yo(e, t = () => {}) {
  let r = {
    initialValue: void 0,
    _x_interceptor: !0,
    initialize(n, o, i) {
      return e(
        this.initialValue,
        () => pc(n, o),
        (a) => br(n, o, a),
        o,
        i
      );
    },
  };
  return (
    t(r),
    (n) => {
      if (typeof n == "object" && n !== null && n._x_interceptor) {
        let o = r.initialize.bind(r);
        r.initialize = (i, a, c) => {
          let u = n.initialize(i, a, c);
          return (r.initialValue = u), o(i, a, c);
        };
      } else r.initialValue = n;
      return r;
    }
  );
}
function pc(e, t) {
  return t.split(".").reduce((r, n) => r[n], e);
}
function br(e, t, r) {
  if ((typeof t == "string" && (t = t.split(".")), t.length === 1)) e[t[0]] = r;
  else {
    if (t.length === 0) throw error;
    return e[t[0]] || (e[t[0]] = {}), br(e[t[0]], t.slice(1), r);
  }
}
var Xo = {};
function Q(e, t) {
  Xo[e] = t;
}
function Or(e, t) {
  return (
    Object.entries(Xo).forEach(([r, n]) => {
      Object.defineProperty(e, `$${r}`, {
        get() {
          let [o, i] = oi(t);
          return (o = { interceptor: Yo, ...o }), zo(t, i), n(t, o);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
function hc(e, t, r, ...n) {
  try {
    return r(...n);
  } catch (o) {
    tt(o, e, t);
  }
}
function tt(e, t, r = void 0) {
  Object.assign(e, { el: t, expression: r }),
    console.warn(
      `Alpine Expression Error: ${e.message}

${
  r
    ? 'Expression: "' +
      r +
      `"

`
    : ""
}`,
      t
    ),
    setTimeout(() => {
      throw e;
    }, 0);
}
function xe(e, t, r = {}) {
  let n;
  return U(e, t)((o) => (n = o), r), n;
}
function U(...e) {
  return ei(...e);
}
var ei = ti;
function mc(e) {
  ei = e;
}
function ti(e, t) {
  let r = {};
  Or(r, e);
  let n = [r, ...je(e)];
  if (typeof t == "function") return vc(n, t);
  let o = gc(n, t, e);
  return hc.bind(null, e, t, o);
}
function vc(e, t) {
  return (r = () => {}, { scope: n = {}, params: o = [] } = {}) => {
    let i = t.apply(ut([n, ...e]), o);
    It(r, i);
  };
}
var ar = {};
function _c(e, t) {
  if (ar[e]) return ar[e];
  let r = Object.getPrototypeOf(async function () {}).constructor,
    n = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(() => { ${e} })()` : e,
    i = (() => {
      try {
        return new r(["__self", "scope"], `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);
      } catch (a) {
        return tt(a, t, e), Promise.resolve();
      }
    })();
  return (ar[e] = i), i;
}
function gc(e, t, r) {
  let n = _c(t, r);
  return (o = () => {}, { scope: i = {}, params: a = [] } = {}) => {
    (n.result = void 0), (n.finished = !1);
    let c = ut([i, ...e]);
    if (typeof n == "function") {
      let u = n(n, c).catch((l) => tt(l, r, t));
      n.finished
        ? (It(o, n.result, c, a, r), (n.result = void 0))
        : u
            .then((l) => {
              It(o, l, c, a, r);
            })
            .catch((l) => tt(l, r, t))
            .finally(() => (n.result = void 0));
    }
  };
}
function It(e, t, r, n, o) {
  if (typeof t == "function") {
    let i = t.apply(r, n);
    i instanceof Promise ? i.then((a) => It(e, a, r, n)).catch((a) => tt(a, o, t)) : e(i);
  } else e(t);
}
var Gr = "x-";
function ke(e = "") {
  return Gr + e;
}
function yc(e) {
  Gr = e;
}
var ri = {};
function M(e, t) {
  ri[e] = t;
}
function Zr(e, t, r) {
  let n = {};
  return Array.from(t)
    .map(ci((i, a) => (n[i] = a)))
    .filter(li)
    .map(Sc(n, r))
    .sort(Ec)
    .map((i) => wc(e, i));
}
function bc(e) {
  return Array.from(e)
    .map(ci())
    .filter((t) => !li(t));
}
var wr = !1,
  Ve = new Map(),
  ni = Symbol();
function Oc(e) {
  wr = !0;
  let t = Symbol();
  (ni = t), Ve.set(t, []);
  let r = () => {
      for (; Ve.get(t).length; ) Ve.get(t).shift()();
      Ve.delete(t);
    },
    n = () => {
      (wr = !1), r();
    };
  e(r), n();
}
function oi(e) {
  let t = [],
    r = (c) => t.push(c),
    [n, o] = oc(e);
  return t.push(o), [{ Alpine: lt, effect: n, cleanup: r, evaluateLater: U.bind(U, e), evaluate: xe.bind(xe, e) }, () => t.forEach((c) => c())];
}
function wc(e, t) {
  let r = () => {},
    n = ri[t.type] || r,
    [o, i] = oi(e);
  cc(e, t.original, i);
  let a = () => {
    e._x_ignore || e._x_ignoreSelf || (n.inline && n.inline(e, t, o), (n = n.bind(n, e, t, o)), wr ? Ve.get(ni).push(n) : n());
  };
  return (a.runCleanups = i), a;
}
var ii =
    (e, t) =>
    ({ name: r, value: n }) => (r.startsWith(e) && (r = r.replace(e, t)), { name: r, value: n }),
  ai = (e) => e;
function ci(e = () => {}) {
  return ({ name: t, value: r }) => {
    let { name: n, value: o } = ui.reduce((i, a) => a(i), { name: t, value: r });
    return n !== t && e(n, t), { name: n, value: o };
  };
}
var ui = [];
function Yr(e) {
  ui.push(e);
}
function li({ name: e }) {
  return si().test(e);
}
var si = () => new RegExp(`^${Gr}([^:^.]+)\\b`);
function Sc(e, t) {
  return ({ name: r, value: n }) => {
    let o = r.match(si()),
      i = r.match(/:([a-zA-Z0-9\-:]+)/),
      a = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
      c = t || e[r] || r;
    return { type: o ? o[1] : null, value: i ? i[1] : null, modifiers: a.map((u) => u.replace(".", "")), expression: n, original: c };
  };
}
var Sr = "DEFAULT",
  dt = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "modelable", "transition", "show", "if", Sr, "teleport", "element"];
function Ec(e, t) {
  let r = dt.indexOf(e.type) === -1 ? Sr : e.type,
    n = dt.indexOf(t.type) === -1 ? Sr : t.type;
  return dt.indexOf(r) - dt.indexOf(n);
}
function Qe(e, t, r = {}) {
  e.dispatchEvent(new CustomEvent(t, { detail: r, bubbles: !0, composed: !0, cancelable: !0 }));
}
var Er = [],
  Xr = !1;
function fi(e) {
  Er.push(e),
    queueMicrotask(() => {
      Xr ||
        setTimeout(() => {
          xr();
        });
    });
}
function xr() {
  for (Xr = !1; Er.length; ) Er.shift()();
}
function xc() {
  Xr = !0;
}
function ve(e, t) {
  if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
    Array.from(e.children).forEach((o) => ve(o, t));
    return;
  }
  let r = !1;
  if ((t(e, () => (r = !0)), r)) return;
  let n = e.firstElementChild;
  for (; n; ) ve(n, t), (n = n.nextElementSibling);
}
function Ie(e, ...t) {
  console.warn(`Alpine Warning: ${e}`, ...t);
}
function Pc() {
  document.body || Ie("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
    Qe(document, "alpine:init"),
    Qe(document, "alpine:initializing"),
    Qo(),
    ic((t) => ae(t, ve)),
    zo((t) => Ic(t)),
    ac((t, r) => {
      Zr(t, r).forEach((n) => n());
    });
  let e = (t) => !Ht(t.parentElement, !0);
  Array.from(document.querySelectorAll(hi()))
    .filter(e)
    .forEach((t) => {
      ae(t);
    }),
    Qe(document, "alpine:initialized");
}
var en = [],
  di = [];
function pi() {
  return en.map((e) => e());
}
function hi() {
  return en.concat(di).map((e) => e());
}
function mi(e) {
  en.push(e);
}
function vi(e) {
  di.push(e);
}
function Ht(e, t = !1) {
  return Ut(e, (r) => {
    if ((t ? hi() : pi()).some((o) => r.matches(o))) return !0;
  });
}
function Ut(e, t) {
  if (e) {
    if (t(e)) return e;
    if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement)) return Ut(e.parentElement, t);
  }
}
function jc(e) {
  return pi().some((t) => e.matches(t));
}
function ae(e, t = ve) {
  Oc(() => {
    t(e, (r, n) => {
      Zr(r, r.attributes).forEach((o) => o()), r._x_ignore && n();
    });
  });
}
function Ic(e) {
  ve(e, (t) => Jo(t));
}
function tn(e, t) {
  return Array.isArray(t) ? En(e, t.join(" ")) : typeof t == "object" && t !== null ? Ac(e, t) : typeof t == "function" ? tn(e, t()) : En(e, t);
}
function En(e, t) {
  let r = (o) =>
      o
        .split(" ")
        .filter((i) => !e.classList.contains(i))
        .filter(Boolean),
    n = (o) => (
      e.classList.add(...o),
      () => {
        e.classList.remove(...o);
      }
    );
  return (t = t === !0 ? (t = "") : t || ""), n(r(t));
}
function Ac(e, t) {
  let r = (c) => c.split(" ").filter(Boolean),
    n = Object.entries(t)
      .flatMap(([c, u]) => (u ? r(c) : !1))
      .filter(Boolean),
    o = Object.entries(t)
      .flatMap(([c, u]) => (u ? !1 : r(c)))
      .filter(Boolean),
    i = [],
    a = [];
  return (
    o.forEach((c) => {
      e.classList.contains(c) && (e.classList.remove(c), a.push(c));
    }),
    n.forEach((c) => {
      e.classList.contains(c) || (e.classList.add(c), i.push(c));
    }),
    () => {
      a.forEach((c) => e.classList.add(c)), i.forEach((c) => e.classList.remove(c));
    }
  );
}
function Bt(e, t) {
  return typeof t == "object" && t !== null ? Cc(e, t) : kc(e, t);
}
function Cc(e, t) {
  let r = {};
  return (
    Object.entries(t).forEach(([n, o]) => {
      (r[n] = e.style[n]), n.startsWith("--") || (n = Dc(n)), e.style.setProperty(n, o);
    }),
    setTimeout(() => {
      e.style.length === 0 && e.removeAttribute("style");
    }),
    () => {
      Bt(e, r);
    }
  );
}
function kc(e, t) {
  let r = e.getAttribute("style", t);
  return (
    e.setAttribute("style", t),
    () => {
      e.setAttribute("style", r || "");
    }
  );
}
function Dc(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Pr(e, t = () => {}) {
  let r = !1;
  return function () {
    r ? t.apply(this, arguments) : ((r = !0), e.apply(this, arguments));
  };
}
M("transition", (e, { value: t, modifiers: r, expression: n }, { evaluate: o }) => {
  typeof n == "function" && (n = o(n)), n ? Tc(e, n, t) : Nc(e, r, t);
});
function Tc(e, t, r) {
  _i(e, tn, ""),
    {
      enter: (o) => {
        e._x_transition.enter.during = o;
      },
      "enter-start": (o) => {
        e._x_transition.enter.start = o;
      },
      "enter-end": (o) => {
        e._x_transition.enter.end = o;
      },
      leave: (o) => {
        e._x_transition.leave.during = o;
      },
      "leave-start": (o) => {
        e._x_transition.leave.start = o;
      },
      "leave-end": (o) => {
        e._x_transition.leave.end = o;
      },
    }[r](t);
}
function Nc(e, t, r) {
  _i(e, Bt);
  let n = !t.includes("in") && !t.includes("out") && !r,
    o = n || t.includes("in") || ["enter"].includes(r),
    i = n || t.includes("out") || ["leave"].includes(r);
  t.includes("in") && !n && (t = t.filter((_, w) => w < t.indexOf("out"))), t.includes("out") && !n && (t = t.filter((_, w) => w > t.indexOf("out")));
  let a = !t.includes("opacity") && !t.includes("scale"),
    c = a || t.includes("opacity"),
    u = a || t.includes("scale"),
    l = c ? 0 : 1,
    s = u ? qe(t, "scale", 95) / 100 : 1,
    d = qe(t, "delay", 0),
    p = qe(t, "origin", "center"),
    h = "opacity, transform",
    b = qe(t, "duration", 150) / 1e3,
    v = qe(t, "duration", 75) / 1e3,
    m = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  o &&
    ((e._x_transition.enter.during = { transformOrigin: p, transitionDelay: d, transitionProperty: h, transitionDuration: `${b}s`, transitionTimingFunction: m }),
    (e._x_transition.enter.start = { opacity: l, transform: `scale(${s})` }),
    (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
    i &&
      ((e._x_transition.leave.during = { transformOrigin: p, transitionDelay: d, transitionProperty: h, transitionDuration: `${v}s`, transitionTimingFunction: m }),
      (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
      (e._x_transition.leave.end = { opacity: l, transform: `scale(${s})` }));
}
function _i(e, t, r = {}) {
  e._x_transition ||
    (e._x_transition = {
      enter: { during: r, start: r, end: r },
      leave: { during: r, start: r, end: r },
      in(n = () => {}, o = () => {}) {
        jr(e, t, { during: this.enter.during, start: this.enter.start, end: this.enter.end }, n, o);
      },
      out(n = () => {}, o = () => {}) {
        jr(e, t, { during: this.leave.during, start: this.leave.start, end: this.leave.end }, n, o);
      },
    });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (e, t, r, n) {
  let o = () => {
    document.visibilityState === "visible" ? requestAnimationFrame(r) : setTimeout(r);
  };
  if (t) {
    e._x_transition && (e._x_transition.enter || e._x_transition.leave)
      ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length)
        ? e._x_transition.in(r)
        : o()
      : e._x_transition
      ? e._x_transition.in(r)
      : o();
    return;
  }
  (e._x_hidePromise = e._x_transition
    ? new Promise((i, a) => {
        e._x_transition.out(
          () => {},
          () => i(n)
        ),
          e._x_transitioning.beforeCancel(() => a({ isFromCancelledTransition: !0 }));
      })
    : Promise.resolve(n)),
    queueMicrotask(() => {
      let i = gi(e);
      i
        ? (i._x_hideChildren || (i._x_hideChildren = []), i._x_hideChildren.push(e))
        : queueMicrotask(() => {
            let a = (c) => {
              let u = Promise.all([c._x_hidePromise, ...(c._x_hideChildren || []).map(a)]).then(([l]) => l());
              return delete c._x_hidePromise, delete c._x_hideChildren, u;
            };
            a(e).catch((c) => {
              if (!c.isFromCancelledTransition) throw c;
            });
          });
    });
};
function gi(e) {
  let t = e.parentNode;
  if (t) return t._x_hidePromise ? t : gi(t);
}
function jr(e, t, { during: r, start: n, end: o } = {}, i = () => {}, a = () => {}) {
  if ((e._x_transitioning && e._x_transitioning.cancel(), Object.keys(r).length === 0 && Object.keys(n).length === 0 && Object.keys(o).length === 0)) {
    i(), a();
    return;
  }
  let c, u, l;
  Rc(e, {
    start() {
      c = t(e, n);
    },
    during() {
      u = t(e, r);
    },
    before: i,
    end() {
      c(), (l = t(e, o));
    },
    after: a,
    cleanup() {
      u(), l();
    },
  });
}
function Rc(e, t) {
  let r,
    n,
    o,
    i = Pr(() => {
      L(() => {
        (r = !0), n || t.before(), o || (t.end(), xr()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning;
      });
    });
  (e._x_transitioning = {
    beforeCancels: [],
    beforeCancel(a) {
      this.beforeCancels.push(a);
    },
    cancel: Pr(function () {
      for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
      i();
    }),
    finish: i,
  }),
    L(() => {
      t.start(), t.during();
    }),
    xc(),
    requestAnimationFrame(() => {
      if (r) return;
      let a = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3,
        c = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      a === 0 && (a = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
        L(() => {
          t.before();
        }),
        (n = !0),
        requestAnimationFrame(() => {
          r ||
            (L(() => {
              t.end();
            }),
            xr(),
            setTimeout(e._x_transitioning.finish, a + c),
            (o = !0));
        });
    });
}
function qe(e, t, r) {
  if (e.indexOf(t) === -1) return r;
  const n = e[e.indexOf(t) + 1];
  if (!n || (t === "scale" && isNaN(n))) return r;
  if (t === "duration") {
    let o = n.match(/([0-9]+)ms/);
    if (o) return o[1];
  }
  return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [n, e[e.indexOf(t) + 2]].join(" ") : n;
}
var Ir = !1;
function Kt(e, t = () => {}) {
  return (...r) => (Ir ? t(...r) : e(...r));
}
function Mc(e, t) {
  t._x_dataStack || (t._x_dataStack = e._x_dataStack),
    (Ir = !0),
    Fc(() => {
      Lc(t);
    }),
    (Ir = !1);
}
function Lc(e) {
  let t = !1;
  ae(e, (n, o) => {
    ve(n, (i, a) => {
      if (t && jc(i)) return a();
      (t = !0), o(i, a);
    });
  });
}
function Fc(e) {
  let t = at;
  wn((r, n) => {
    let o = t(r);
    return qt(o), () => {};
  }),
    e(),
    wn(t);
}
function yi(e, t, r, n = []) {
  switch ((e._x_bindings || (e._x_bindings = Ce({})), (e._x_bindings[t] = r), (t = n.includes("camel") ? Vc(t) : t), t)) {
    case "value":
      qc(e, r);
      break;
    case "style":
      Uc(e, r);
      break;
    case "class":
      Hc(e, r);
      break;
    default:
      Bc(e, t, r);
      break;
  }
}
function qc(e, t) {
  if (e.type === "radio") e.attributes.value === void 0 && (e.value = t), window.fromModel && (e.checked = xn(e.value, t));
  else if (e.type === "checkbox")
    Number.isInteger(t)
      ? (e.value = t)
      : !Number.isInteger(t) && !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t)
      ? (e.value = String(t))
      : Array.isArray(t)
      ? (e.checked = t.some((r) => xn(r, e.value)))
      : (e.checked = !!t);
  else if (e.tagName === "SELECT") $c(e, t);
  else {
    if (e.value === t) return;
    e.value = t;
  }
}
function Hc(e, t) {
  e._x_undoAddedClasses && e._x_undoAddedClasses(), (e._x_undoAddedClasses = tn(e, t));
}
function Uc(e, t) {
  e._x_undoAddedStyles && e._x_undoAddedStyles(), (e._x_undoAddedStyles = Bt(e, t));
}
function Bc(e, t, r) {
  [null, void 0, !1].includes(r) && Wc(t) ? e.removeAttribute(t) : (bi(t) && (r = t), Kc(e, t, r));
}
function Kc(e, t, r) {
  e.getAttribute(t) != r && e.setAttribute(t, r);
}
function $c(e, t) {
  const r = [].concat(t).map((n) => n + "");
  Array.from(e.options).forEach((n) => {
    n.selected = r.includes(n.value);
  });
}
function Vc(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
}
function xn(e, t) {
  return e == t;
}
function bi(e) {
  return [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule",
  ].includes(e);
}
function Wc(e) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e);
}
function zc(e, t, r) {
  if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
  let n = e.getAttribute(t);
  return n === null ? (typeof r == "function" ? r() : r) : bi(t) ? !![t, "true"].includes(n) : n === "" ? !0 : n;
}
function Oi(e, t) {
  var r;
  return function () {
    var n = this,
      o = arguments,
      i = function () {
        (r = null), e.apply(n, o);
      };
    clearTimeout(r), (r = setTimeout(i, t));
  };
}
function wi(e, t) {
  let r;
  return function () {
    let n = this,
      o = arguments;
    r || (e.apply(n, o), (r = !0), setTimeout(() => (r = !1), t));
  };
}
function Jc(e) {
  e(lt);
}
var de = {},
  Pn = !1;
function Qc(e, t) {
  if ((Pn || ((de = Ce(de)), (Pn = !0)), t === void 0)) return de[e];
  (de[e] = t), typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && de[e].init(), Zo(de[e]);
}
function Gc() {
  return de;
}
var Si = {};
function Zc(e, t) {
  Si[e] = typeof t != "function" ? () => t : t;
}
function Yc(e) {
  return (
    Object.entries(Si).forEach(([t, r]) => {
      Object.defineProperty(e, t, {
        get() {
          return (...n) => r(...n);
        },
      });
    }),
    e
  );
}
var Ei = {};
function Xc(e, t) {
  Ei[e] = t;
}
function eu(e, t) {
  return (
    Object.entries(Ei).forEach(([r, n]) => {
      Object.defineProperty(e, r, {
        get() {
          return (...o) => n.bind(t)(...o);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
var tu = {
    get reactive() {
      return Ce;
    },
    get release() {
      return qt;
    },
    get effect() {
      return at;
    },
    get raw() {
      return Ko;
    },
    version: "3.9.6",
    flushAndStopDeferringMutations: dc,
    disableEffectScheduling: rc,
    setReactivityEngine: nc,
    closestDataStack: je,
    skipDuringClone: Kt,
    addRootSelector: mi,
    addInitSelector: vi,
    addScopeToNode: ct,
    deferMutations: fc,
    mapAttributes: Yr,
    evaluateLater: U,
    setEvaluator: mc,
    mergeProxies: ut,
    findClosest: Ut,
    closestRoot: Ht,
    interceptor: Yo,
    transition: jr,
    setStyles: Bt,
    mutateDom: L,
    directive: M,
    throttle: wi,
    debounce: Oi,
    evaluate: xe,
    initTree: ae,
    nextTick: fi,
    prefixed: ke,
    prefix: yc,
    plugin: Jc,
    magic: Q,
    store: Qc,
    start: Pc,
    clone: Mc,
    bound: zc,
    $data: Go,
    data: Xc,
    bind: Zc,
  },
  lt = tu;
function ru(e, t) {
  const r = Object.create(null),
    n = e.split(",");
  for (let o = 0; o < n.length; o++) r[n[o]] = !0;
  return t ? (o) => !!r[o.toLowerCase()] : (o) => !!r[o];
}
var nu = Object.freeze({}),
  xi = Object.assign,
  ou = Object.prototype.hasOwnProperty,
  $t = (e, t) => ou.call(e, t),
  he = Array.isArray,
  Ge = (e) => Pi(e) === "[object Map]",
  iu = (e) => typeof e == "string",
  rn = (e) => typeof e == "symbol",
  Vt = (e) => e !== null && typeof e == "object",
  au = Object.prototype.toString,
  Pi = (e) => au.call(e),
  ji = (e) => Pi(e).slice(8, -1),
  nn = (e) => iu(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  cu = (e) => {
    const t = Object.create(null);
    return (r) => t[r] || (t[r] = e(r));
  },
  uu = cu((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ii = (e, t) => e !== t && (e === e || t === t),
  Ar = new WeakMap(),
  He = [],
  G,
  me = Symbol("iterate"),
  Cr = Symbol("Map key iterate");
function lu(e) {
  return e && e._isEffect === !0;
}
function su(e, t = nu) {
  lu(e) && (e = e.raw);
  const r = pu(e, t);
  return t.lazy || r(), r;
}
function fu(e) {
  e.active && (Ai(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
var du = 0;
function pu(e, t) {
  const r = function () {
    if (!r.active) return e();
    if (!He.includes(r)) {
      Ai(r);
      try {
        return mu(), He.push(r), (G = r), e();
      } finally {
        He.pop(), Ci(), (G = He[He.length - 1]);
      }
    }
  };
  return (r.id = du++), (r.allowRecurse = !!t.allowRecurse), (r._isEffect = !0), (r.active = !0), (r.raw = e), (r.deps = []), (r.options = t), r;
}
function Ai(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let r = 0; r < t.length; r++) t[r].delete(e);
    t.length = 0;
  }
}
var Ae = !0,
  on = [];
function hu() {
  on.push(Ae), (Ae = !1);
}
function mu() {
  on.push(Ae), (Ae = !0);
}
function Ci() {
  const e = on.pop();
  Ae = e === void 0 ? !0 : e;
}
function J(e, t, r) {
  if (!Ae || G === void 0) return;
  let n = Ar.get(e);
  n || Ar.set(e, (n = new Map()));
  let o = n.get(r);
  o || n.set(r, (o = new Set())), o.has(G) || (o.add(G), G.deps.push(o), G.options.onTrack && G.options.onTrack({ effect: G, target: e, type: t, key: r }));
}
function ce(e, t, r, n, o, i) {
  const a = Ar.get(e);
  if (!a) return;
  const c = new Set(),
    u = (s) => {
      s &&
        s.forEach((d) => {
          (d !== G || d.allowRecurse) && c.add(d);
        });
    };
  if (t === "clear") a.forEach(u);
  else if (r === "length" && he(e))
    a.forEach((s, d) => {
      (d === "length" || d >= n) && u(s);
    });
  else
    switch ((r !== void 0 && u(a.get(r)), t)) {
      case "add":
        he(e) ? nn(r) && u(a.get("length")) : (u(a.get(me)), Ge(e) && u(a.get(Cr)));
        break;
      case "delete":
        he(e) || (u(a.get(me)), Ge(e) && u(a.get(Cr)));
        break;
      case "set":
        Ge(e) && u(a.get(me));
        break;
    }
  const l = (s) => {
    s.options.onTrigger && s.options.onTrigger({ effect: s, target: e, key: r, type: t, newValue: n, oldValue: o, oldTarget: i }), s.options.scheduler ? s.options.scheduler(s) : s();
  };
  c.forEach(l);
}
var vu = ru("__proto__,__v_isRef,__isVue"),
  ki = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(rn)
  ),
  _u = Wt(),
  gu = Wt(!1, !0),
  yu = Wt(!0),
  bu = Wt(!0, !0),
  At = {};
["includes", "indexOf", "lastIndexOf"].forEach((e) => {
  const t = Array.prototype[e];
  At[e] = function (...r) {
    const n = D(this);
    for (let i = 0, a = this.length; i < a; i++) J(n, "get", i + "");
    const o = t.apply(n, r);
    return o === -1 || o === !1 ? t.apply(n, r.map(D)) : o;
  };
});
["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
  const t = Array.prototype[e];
  At[e] = function (...r) {
    hu();
    const n = t.apply(this, r);
    return Ci(), n;
  };
});
function Wt(e = !1, t = !1) {
  return function (n, o, i) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_raw" && i === (e ? (t ? Cu : Wi) : t ? Au : Vi).get(n)) return n;
    const a = he(n);
    if (!e && a && $t(At, o)) return Reflect.get(At, o, i);
    const c = Reflect.get(n, o, i);
    return (rn(o) ? ki.has(o) : vu(o)) || (e || J(n, "get", o), t) ? c : kr(c) ? (!a || !nn(o) ? c.value : c) : Vt(c) ? (e ? zi(c) : ln(c)) : c;
  };
}
var Ou = Di(),
  wu = Di(!0);
function Di(e = !1) {
  return function (r, n, o, i) {
    let a = r[n];
    if (!e && ((o = D(o)), (a = D(a)), !he(r) && kr(a) && !kr(o))) return (a.value = o), !0;
    const c = he(r) && nn(n) ? Number(n) < r.length : $t(r, n),
      u = Reflect.set(r, n, o, i);
    return r === D(i) && (c ? Ii(o, a) && ce(r, "set", n, o, a) : ce(r, "add", n, o)), u;
  };
}
function Su(e, t) {
  const r = $t(e, t),
    n = e[t],
    o = Reflect.deleteProperty(e, t);
  return o && r && ce(e, "delete", t, void 0, n), o;
}
function Eu(e, t) {
  const r = Reflect.has(e, t);
  return (!rn(t) || !ki.has(t)) && J(e, "has", t), r;
}
function xu(e) {
  return J(e, "iterate", he(e) ? "length" : me), Reflect.ownKeys(e);
}
var Ti = { get: _u, set: Ou, deleteProperty: Su, has: Eu, ownKeys: xu },
  Ni = {
    get: yu,
    set(e, t) {
      return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
    },
    deleteProperty(e, t) {
      return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
    },
  };
xi({}, Ti, { get: gu, set: wu });
xi({}, Ni, { get: bu });
var an = (e) => (Vt(e) ? ln(e) : e),
  cn = (e) => (Vt(e) ? zi(e) : e),
  un = (e) => e,
  zt = (e) => Reflect.getPrototypeOf(e);
function Jt(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const o = D(e),
    i = D(t);
  t !== i && !r && J(o, "get", t), !r && J(o, "get", i);
  const { has: a } = zt(o),
    c = n ? un : r ? cn : an;
  if (a.call(o, t)) return c(e.get(t));
  if (a.call(o, i)) return c(e.get(i));
  e !== o && e.get(t);
}
function Qt(e, t = !1) {
  const r = this.__v_raw,
    n = D(r),
    o = D(e);
  return e !== o && !t && J(n, "has", e), !t && J(n, "has", o), e === o ? r.has(e) : r.has(e) || r.has(o);
}
function Gt(e, t = !1) {
  return (e = e.__v_raw), !t && J(D(e), "iterate", me), Reflect.get(e, "size", e);
}
function Ri(e) {
  e = D(e);
  const t = D(this);
  return zt(t).has.call(t, e) || (t.add(e), ce(t, "add", e, e)), this;
}
function Mi(e, t) {
  t = D(t);
  const r = D(this),
    { has: n, get: o } = zt(r);
  let i = n.call(r, e);
  i ? $i(r, n, e) : ((e = D(e)), (i = n.call(r, e)));
  const a = o.call(r, e);
  return r.set(e, t), i ? Ii(t, a) && ce(r, "set", e, t, a) : ce(r, "add", e, t), this;
}
function Li(e) {
  const t = D(this),
    { has: r, get: n } = zt(t);
  let o = r.call(t, e);
  o ? $i(t, r, e) : ((e = D(e)), (o = r.call(t, e)));
  const i = n ? n.call(t, e) : void 0,
    a = t.delete(e);
  return o && ce(t, "delete", e, void 0, i), a;
}
function Fi() {
  const e = D(this),
    t = e.size !== 0,
    r = Ge(e) ? new Map(e) : new Set(e),
    n = e.clear();
  return t && ce(e, "clear", void 0, void 0, r), n;
}
function Zt(e, t) {
  return function (n, o) {
    const i = this,
      a = i.__v_raw,
      c = D(a),
      u = t ? un : e ? cn : an;
    return !e && J(c, "iterate", me), a.forEach((l, s) => n.call(o, u(l), u(s), i));
  };
}
function pt(e, t, r) {
  return function (...n) {
    const o = this.__v_raw,
      i = D(o),
      a = Ge(i),
      c = e === "entries" || (e === Symbol.iterator && a),
      u = e === "keys" && a,
      l = o[e](...n),
      s = r ? un : t ? cn : an;
    return (
      !t && J(i, "iterate", u ? Cr : me),
      {
        next() {
          const { value: d, done: p } = l.next();
          return p ? { value: d, done: p } : { value: c ? [s(d[0]), s(d[1])] : s(d), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ie(e) {
  return function (...t) {
    {
      const r = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${uu(e)} operation ${r}failed: target is readonly.`, D(this));
    }
    return e === "delete" ? !1 : this;
  };
}
var qi = {
    get(e) {
      return Jt(this, e);
    },
    get size() {
      return Gt(this);
    },
    has: Qt,
    add: Ri,
    set: Mi,
    delete: Li,
    clear: Fi,
    forEach: Zt(!1, !1),
  },
  Hi = {
    get(e) {
      return Jt(this, e, !1, !0);
    },
    get size() {
      return Gt(this);
    },
    has: Qt,
    add: Ri,
    set: Mi,
    delete: Li,
    clear: Fi,
    forEach: Zt(!1, !0),
  },
  Ui = {
    get(e) {
      return Jt(this, e, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(e) {
      return Qt.call(this, e, !0);
    },
    add: ie("add"),
    set: ie("set"),
    delete: ie("delete"),
    clear: ie("clear"),
    forEach: Zt(!0, !1),
  },
  Bi = {
    get(e) {
      return Jt(this, e, !0, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(e) {
      return Qt.call(this, e, !0);
    },
    add: ie("add"),
    set: ie("set"),
    delete: ie("delete"),
    clear: ie("clear"),
    forEach: Zt(!0, !0),
  },
  Pu = ["keys", "values", "entries", Symbol.iterator];
Pu.forEach((e) => {
  (qi[e] = pt(e, !1, !1)), (Ui[e] = pt(e, !0, !1)), (Hi[e] = pt(e, !1, !0)), (Bi[e] = pt(e, !0, !0));
});
function Ki(e, t) {
  const r = t ? (e ? Bi : Hi) : e ? Ui : qi;
  return (n, o, i) => (o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get($t(r, o) && o in n ? r : n, o, i));
}
var ju = { get: Ki(!1, !1) },
  Iu = { get: Ki(!0, !1) };
function $i(e, t, r) {
  const n = D(r);
  if (n !== r && t.call(e, n)) {
    const o = ji(e);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${
        o === "Map" ? " as keys" : ""
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
var Vi = new WeakMap(),
  Au = new WeakMap(),
  Wi = new WeakMap(),
  Cu = new WeakMap();
function ku(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Du(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ku(ji(e));
}
function ln(e) {
  return e && e.__v_isReadonly ? e : Ji(e, !1, Ti, ju, Vi);
}
function zi(e) {
  return Ji(e, !0, Ni, Iu, Wi);
}
function Ji(e, t, r, n, o) {
  if (!Vt(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive)) return e;
  const i = o.get(e);
  if (i) return i;
  const a = Du(e);
  if (a === 0) return e;
  const c = new Proxy(e, a === 2 ? n : r);
  return o.set(e, c), c;
}
function D(e) {
  return (e && D(e.__v_raw)) || e;
}
function kr(e) {
  return !!(e && e.__v_isRef === !0);
}
Q("nextTick", () => fi);
Q("dispatch", (e) => Qe.bind(Qe, e));
Q("watch", (e, { evaluateLater: t, effect: r }) => (n, o) => {
  let i = t(n),
    a = !0,
    c,
    u = r(() =>
      i((l) => {
        JSON.stringify(l),
          a
            ? (c = l)
            : queueMicrotask(() => {
                o(l, c), (c = l);
              }),
          (a = !1);
      })
    );
  e._x_effects.delete(u);
});
Q("store", Gc);
Q("data", (e) => Go(e));
Q("root", (e) => Ht(e));
Q("refs", (e) => (e._x_refs_proxy || (e._x_refs_proxy = ut(Tu(e))), e._x_refs_proxy));
function Tu(e) {
  let t = [],
    r = e;
  for (; r; ) r._x_refs && t.push(r._x_refs), (r = r.parentNode);
  return t;
}
var cr = {};
function Qi(e) {
  return cr[e] || (cr[e] = 0), ++cr[e];
}
function Nu(e, t) {
  return Ut(e, (r) => {
    if (r._x_ids && r._x_ids[t]) return !0;
  });
}
function Ru(e, t) {
  e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Qi(t));
}
Q("id", (e) => (t, r = null) => {
  let n = Nu(e, t),
    o = n ? n._x_ids[t] : Qi(t);
  return r ? `${t}-${o}-${r}` : `${t}-${o}`;
});
Q("el", (e) => e);
Gi("Focus", "focus", "focus");
Gi("Persist", "persist", "persist");
function Gi(e, t, r) {
  Q(t, (n) => Ie(`You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpine.dev/plugins/${r}`, n));
}
M("modelable", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
  let o = n(t),
    i = () => {
      let l;
      return o((s) => (l = s)), l;
    },
    a = n(`${t} = __placeholder`),
    c = (l) => a(() => {}, { scope: { __placeholder: l } }),
    u = i();
  c(u),
    queueMicrotask(() => {
      if (!e._x_model) return;
      e._x_removeModelListeners.default();
      let l = e._x_model.get,
        s = e._x_model.set;
      r(() => c(l())), r(() => s(i()));
    });
});
M("teleport", (e, { expression: t }, { cleanup: r }) => {
  e.tagName.toLowerCase() !== "template" && Ie("x-teleport can only be used on a <template> tag", e);
  let n = document.querySelector(t);
  n || Ie(`Cannot find x-teleport element for selector: "${t}"`);
  let o = e.content.cloneNode(!0).firstElementChild;
  (e._x_teleport = o),
    (o._x_teleportBack = e),
    e._x_forwardEvents &&
      e._x_forwardEvents.forEach((i) => {
        o.addEventListener(i, (a) => {
          a.stopPropagation(), e.dispatchEvent(new a.constructor(a.type, a));
        });
      }),
    ct(o, {}, e),
    L(() => {
      n.appendChild(o), ae(o), (o._x_ignore = !0);
    }),
    r(() => o.remove());
});
var Zi = () => {};
Zi.inline = (e, { modifiers: t }, { cleanup: r }) => {
  t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
    r(() => {
      t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
    });
};
M("ignore", Zi);
M("effect", (e, { expression: t }, { effect: r }) => r(U(e, t)));
function Yi(e, t, r, n) {
  let o = e,
    i = (u) => n(u),
    a = {},
    c = (u, l) => (s) => l(u, s);
  if (
    (r.includes("dot") && (t = Mu(t)),
    r.includes("camel") && (t = Lu(t)),
    r.includes("passive") && (a.passive = !0),
    r.includes("capture") && (a.capture = !0),
    r.includes("window") && (o = window),
    r.includes("document") && (o = document),
    r.includes("prevent") &&
      (i = c(i, (u, l) => {
        l.preventDefault(), u(l);
      })),
    r.includes("stop") &&
      (i = c(i, (u, l) => {
        l.stopPropagation(), u(l);
      })),
    r.includes("self") &&
      (i = c(i, (u, l) => {
        l.target === e && u(l);
      })),
    (r.includes("away") || r.includes("outside")) &&
      ((o = document),
      (i = c(i, (u, l) => {
        e.contains(l.target) || (l.target.isConnected !== !1 && ((e.offsetWidth < 1 && e.offsetHeight < 1) || (e._x_isShown !== !1 && u(l))));
      }))),
    r.includes("once") &&
      (i = c(i, (u, l) => {
        u(l), o.removeEventListener(t, i, a);
      })),
    (i = c(i, (u, l) => {
      (qu(t) && Hu(l, r)) || u(l);
    })),
    r.includes("debounce"))
  ) {
    let u = r[r.indexOf("debounce") + 1] || "invalid-wait",
      l = Dr(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
    i = Oi(i, l);
  }
  if (r.includes("throttle")) {
    let u = r[r.indexOf("throttle") + 1] || "invalid-wait",
      l = Dr(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
    i = wi(i, l);
  }
  return (
    o.addEventListener(t, i, a),
    () => {
      o.removeEventListener(t, i, a);
    }
  );
}
function Mu(e) {
  return e.replace(/-/g, ".");
}
function Lu(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
}
function Dr(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Fu(e) {
  return e
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[_\s]/, "-")
    .toLowerCase();
}
function qu(e) {
  return ["keydown", "keyup"].includes(e);
}
function Hu(e, t) {
  let r = t.filter((i) => !["window", "document", "prevent", "stop", "once"].includes(i));
  if (r.includes("debounce")) {
    let i = r.indexOf("debounce");
    r.splice(i, Dr((r[i + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (r.length === 0 || (r.length === 1 && jn(e.key).includes(r[0]))) return !1;
  const o = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((i) => r.includes(i));
  return (r = r.filter((i) => !o.includes(i))), !(o.length > 0 && o.filter((a) => ((a === "cmd" || a === "super") && (a = "meta"), e[`${a}Key`])).length === o.length && jn(e.key).includes(r[0]));
}
function jn(e) {
  if (!e) return [];
  e = Fu(e);
  let t = { ctrl: "control", slash: "/", space: "-", spacebar: "-", cmd: "meta", esc: "escape", up: "arrow-up", down: "arrow-down", left: "arrow-left", right: "arrow-right", period: ".", equal: "=" };
  return (
    (t[e] = e),
    Object.keys(t)
      .map((r) => {
        if (t[r] === e) return r;
      })
      .filter((r) => r)
  );
}
M("model", (e, { modifiers: t, expression: r }, { effect: n, cleanup: o }) => {
  let i = U(e, r),
    a = `${r} = rightSideOfExpression($event, ${r})`,
    c = U(e, a);
  var u = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
  let l = Uu(e, t, r),
    s = Yi(e, u, t, (p) => {
      c(() => {}, { scope: { $event: p, rightSideOfExpression: l } });
    });
  e._x_removeModelListeners || (e._x_removeModelListeners = {}), (e._x_removeModelListeners.default = s), o(() => e._x_removeModelListeners.default());
  let d = U(e, `${r} = __placeholder`);
  (e._x_model = {
    get() {
      let p;
      return i((h) => (p = h)), p;
    },
    set(p) {
      d(() => {}, { scope: { __placeholder: p } });
    },
  }),
    (e._x_forceModelUpdate = () => {
      i((p) => {
        p === void 0 && r.match(/\./) && (p = ""), (window.fromModel = !0), L(() => yi(e, "value", p)), delete window.fromModel;
      });
    }),
    n(() => {
      (t.includes("unintrusive") && document.activeElement.isSameNode(e)) || e._x_forceModelUpdate();
    });
});
function Uu(e, t, r) {
  return (
    e.type === "radio" &&
      L(() => {
        e.hasAttribute("name") || e.setAttribute("name", r);
      }),
    (n, o) =>
      L(() => {
        if (n instanceof CustomEvent && n.detail !== void 0) return n.detail || n.target.value;
        if (e.type === "checkbox")
          if (Array.isArray(o)) {
            let i = t.includes("number") ? ur(n.target.value) : n.target.value;
            return n.target.checked ? o.concat([i]) : o.filter((a) => !Bu(a, i));
          } else return n.target.checked;
        else {
          if (e.tagName.toLowerCase() === "select" && e.multiple)
            return t.includes("number")
              ? Array.from(n.target.selectedOptions).map((i) => {
                  let a = i.value || i.text;
                  return ur(a);
                })
              : Array.from(n.target.selectedOptions).map((i) => i.value || i.text);
          {
            let i = n.target.value;
            return t.includes("number") ? ur(i) : t.includes("trim") ? i.trim() : i;
          }
        }
      })
  );
}
function ur(e) {
  let t = e ? parseFloat(e) : null;
  return Ku(t) ? t : e;
}
function Bu(e, t) {
  return e == t;
}
function Ku(e) {
  return !Array.isArray(e) && !isNaN(e);
}
M("cloak", (e) => queueMicrotask(() => L(() => e.removeAttribute(ke("cloak")))));
vi(() => `[${ke("init")}]`);
M(
  "init",
  Kt((e, { expression: t }, { evaluate: r }) => (typeof t == "string" ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1)))
);
M("text", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
  let o = n(t);
  r(() => {
    o((i) => {
      L(() => {
        e.textContent = i;
      });
    });
  });
});
M("html", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
  let o = n(t);
  r(() => {
    o((i) => {
      L(() => {
        (e.innerHTML = i), (e._x_ignoreSelf = !0), ae(e), delete e._x_ignoreSelf;
      });
    });
  });
});
Yr(ii(":", ai(ke("bind:"))));
M("bind", (e, { value: t, modifiers: r, expression: n, original: o }, { effect: i }) => {
  if (!t) return $u(e, n, o);
  if (t === "key") return Vu(e, n);
  let a = U(e, n);
  i(() =>
    a((c) => {
      c === void 0 && n.match(/\./) && (c = ""), L(() => yi(e, t, c, r));
    })
  );
});
function $u(e, t, r, n) {
  let o = {};
  Yc(o);
  let i = U(e, t),
    a = [];
  for (; a.length; ) a.pop()();
  i(
    (c) => {
      let u = Object.entries(c).map(([s, d]) => ({ name: s, value: d })),
        l = bc(u);
      (u = u.map((s) => (l.find((d) => d.name === s.name) ? { name: `x-bind:${s.name}`, value: `"${s.value}"` } : s))),
        Zr(e, u, r).map((s) => {
          a.push(s.runCleanups), s();
        });
    },
    { scope: o }
  );
}
function Vu(e, t) {
  e._x_keyExpression = t;
}
mi(() => `[${ke("data")}]`);
M(
  "data",
  Kt((e, { expression: t }, { cleanup: r }) => {
    t = t === "" ? "{}" : t;
    let n = {};
    Or(n, e);
    let o = {};
    eu(o, n);
    let i = xe(e, t, { scope: o });
    i === void 0 && (i = {}), Or(i, e);
    let a = Ce(i);
    Zo(a);
    let c = ct(e, a);
    a.init && xe(e, a.init),
      r(() => {
        a.destroy && xe(e, a.destroy), c();
      });
  })
);
M("show", (e, { modifiers: t, expression: r }, { effect: n }) => {
  let o = U(e, r);
  e._x_doHide ||
    (e._x_doHide = () => {
      L(() => (e.style.display = "none"));
    }),
    e._x_doShow ||
      (e._x_doShow = () => {
        L(() => {
          e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display");
        });
      });
  let i = () => {
      e._x_doHide(), (e._x_isShown = !1);
    },
    a = () => {
      e._x_doShow(), (e._x_isShown = !0);
    },
    c = () => setTimeout(a),
    u = Pr(
      (d) => (d ? a() : i()),
      (d) => {
        typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, d, a, i) : d ? c() : i();
      }
    ),
    l,
    s = !0;
  n(() =>
    o((d) => {
      (!s && d === l) || (t.includes("immediate") && (d ? c() : i()), u(d), (l = d), (s = !1));
    })
  );
});
M("for", (e, { expression: t }, { effect: r, cleanup: n }) => {
  let o = zu(t),
    i = U(e, o.items),
    a = U(e, e._x_keyExpression || "index");
  (e._x_prevKeys = []),
    (e._x_lookup = {}),
    r(() => Wu(e, o, i, a)),
    n(() => {
      Object.values(e._x_lookup).forEach((c) => c.remove()), delete e._x_prevKeys, delete e._x_lookup;
    });
});
function Wu(e, t, r, n) {
  let o = (a) => typeof a == "object" && !Array.isArray(a),
    i = e;
  r((a) => {
    Ju(a) && a >= 0 && (a = Array.from(Array(a).keys(), (m) => m + 1)), a === void 0 && (a = []);
    let c = e._x_lookup,
      u = e._x_prevKeys,
      l = [],
      s = [];
    if (o(a))
      a = Object.entries(a).map(([m, _]) => {
        let w = In(t, _, m, a);
        n((S) => s.push(S), { scope: { index: m, ...w } }), l.push(w);
      });
    else
      for (let m = 0; m < a.length; m++) {
        let _ = In(t, a[m], m, a);
        n((w) => s.push(w), { scope: { index: m, ..._ } }), l.push(_);
      }
    let d = [],
      p = [],
      h = [],
      b = [];
    for (let m = 0; m < u.length; m++) {
      let _ = u[m];
      s.indexOf(_) === -1 && h.push(_);
    }
    u = u.filter((m) => !h.includes(m));
    let v = "template";
    for (let m = 0; m < s.length; m++) {
      let _ = s[m],
        w = u.indexOf(_);
      if (w === -1) u.splice(m, 0, _), d.push([v, m]);
      else if (w !== m) {
        let S = u.splice(m, 1)[0],
          y = u.splice(w - 1, 1)[0];
        u.splice(m, 0, y), u.splice(w, 0, S), p.push([S, y]);
      } else b.push(_);
      v = _;
    }
    for (let m = 0; m < h.length; m++) {
      let _ = h[m];
      c[_]._x_effects && c[_]._x_effects.forEach(Bo), c[_].remove(), (c[_] = null), delete c[_];
    }
    for (let m = 0; m < p.length; m++) {
      let [_, w] = p[m],
        S = c[_],
        y = c[w],
        O = document.createElement("div");
      L(() => {
        y.after(O), S.after(y), y._x_currentIfEl && y.after(y._x_currentIfEl), O.before(S), S._x_currentIfEl && S.after(S._x_currentIfEl), O.remove();
      }),
        Sn(y, l[s.indexOf(w)]);
    }
    for (let m = 0; m < d.length; m++) {
      let [_, w] = d[m],
        S = _ === "template" ? i : c[_];
      S._x_currentIfEl && (S = S._x_currentIfEl);
      let y = l[w],
        O = s[w],
        g = document.importNode(i.content, !0).firstElementChild;
      ct(g, Ce(y), i),
        L(() => {
          S.after(g), ae(g);
        }),
        typeof O == "object" && Ie("x-for key cannot be an object, it must be a string or an integer", i),
        (c[O] = g);
    }
    for (let m = 0; m < b.length; m++) Sn(c[b[m]], l[s.indexOf(b[m])]);
    i._x_prevKeys = s;
  });
}
function zu(e) {
  let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    r = /^\s*\(|\)\s*$/g,
    n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
    o = e.match(n);
  if (!o) return;
  let i = {};
  i.items = o[2].trim();
  let a = o[1].replace(r, "").trim(),
    c = a.match(t);
  return c ? ((i.item = a.replace(t, "").trim()), (i.index = c[1].trim()), c[2] && (i.collection = c[2].trim())) : (i.item = a), i;
}
function In(e, t, r, n) {
  let o = {};
  return (
    /^\[.*\]$/.test(e.item) && Array.isArray(t)
      ? e.item
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map((a) => a.trim())
          .forEach((a, c) => {
            o[a] = t[c];
          })
      : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
      ? e.item
          .replace("{", "")
          .replace("}", "")
          .split(",")
          .map((a) => a.trim())
          .forEach((a) => {
            o[a] = t[a];
          })
      : (o[e.item] = t),
    e.index && (o[e.index] = r),
    e.collection && (o[e.collection] = n),
    o
  );
}
function Ju(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Xi() {}
Xi.inline = (e, { expression: t }, { cleanup: r }) => {
  let n = Ht(e);
  n._x_refs || (n._x_refs = {}), (n._x_refs[t] = e), r(() => delete n._x_refs[t]);
};
M("ref", Xi);
M("if", (e, { expression: t }, { effect: r, cleanup: n }) => {
  let o = U(e, t),
    i = () => {
      if (e._x_currentIfEl) return e._x_currentIfEl;
      let c = e.content.cloneNode(!0).firstElementChild;
      return (
        ct(c, {}, e),
        L(() => {
          e.after(c), ae(c);
        }),
        (e._x_currentIfEl = c),
        (e._x_undoIf = () => {
          ve(c, (u) => {
            u._x_effects && u._x_effects.forEach(Bo);
          }),
            c.remove(),
            delete e._x_currentIfEl;
        }),
        c
      );
    },
    a = () => {
      e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
    };
  r(() =>
    o((c) => {
      c ? i() : a();
    })
  ),
    n(() => e._x_undoIf && e._x_undoIf());
});
M("id", (e, { expression: t }, { evaluate: r }) => {
  r(t).forEach((o) => Ru(e, o));
});
Yr(ii("@", ai(ke("on:"))));
M(
  "on",
  Kt((e, { value: t, modifiers: r, expression: n }, { cleanup: o }) => {
    let i = n ? U(e, n) : () => {};
    e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let a = Yi(e, t, r, (c) => {
      i(() => {}, { scope: { $event: c }, params: [c] });
    });
    o(() => a());
  })
);
sn("Collapse", "collapse", "collapse");
sn("Intersect", "intersect", "intersect");
sn("Focus", "trap", "focus");
function sn(e, t, r) {
  M(t, (n) => Ie(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpine.dev/plugins/${r}`, n));
}
lt.setEvaluator(ti);
lt.setReactivityEngine({ reactive: ln, effect: su, release: fu, raw: D });
var Qu = lt,
  fn = Qu;
/*!
 * tabbable 5.2.1
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var ea = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
  An = ea.join(","),
  Ct = typeof Element > "u" ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  ta = function (t, r, n) {
    var o = Array.prototype.slice.apply(t.querySelectorAll(An));
    return r && Ct.call(t, An) && o.unshift(t), (o = o.filter(n)), o;
  },
  Gu = function (t) {
    return t.contentEditable === "true";
  },
  ra = function (t) {
    var r = parseInt(t.getAttribute("tabindex"), 10);
    return isNaN(r) ? (Gu(t) || ((t.nodeName === "AUDIO" || t.nodeName === "VIDEO" || t.nodeName === "DETAILS") && t.getAttribute("tabindex") === null) ? 0 : t.tabIndex) : r;
  },
  Zu = function (t, r) {
    return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex;
  },
  dn = function (t) {
    return t.tagName === "INPUT";
  },
  Yu = function (t) {
    return dn(t) && t.type === "hidden";
  },
  Xu = function (t) {
    var r =
      t.tagName === "DETAILS" &&
      Array.prototype.slice.apply(t.children).some(function (n) {
        return n.tagName === "SUMMARY";
      });
    return r;
  },
  el = function (t, r) {
    for (var n = 0; n < t.length; n++) if (t[n].checked && t[n].form === r) return t[n];
  },
  tl = function (t) {
    if (!t.name) return !0;
    var r = t.form || t.ownerDocument,
      n = function (c) {
        return r.querySelectorAll('input[type="radio"][name="' + c + '"]');
      },
      o;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") o = n(window.CSS.escape(t.name));
    else
      try {
        o = n(t.name);
      } catch (a) {
        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1;
      }
    var i = el(o, t.form);
    return !i || i === t;
  },
  rl = function (t) {
    return dn(t) && t.type === "radio";
  },
  nl = function (t) {
    return rl(t) && !tl(t);
  },
  ol = function (t, r) {
    if (getComputedStyle(t).visibility === "hidden") return !0;
    var n = Ct.call(t, "details>summary:first-of-type"),
      o = n ? t.parentElement : t;
    if (Ct.call(o, "details:not([open]) *")) return !0;
    if (!r || r === "full")
      for (; t; ) {
        if (getComputedStyle(t).display === "none") return !0;
        t = t.parentElement;
      }
    else if (r === "non-zero-area") {
      var i = t.getBoundingClientRect(),
        a = i.width,
        c = i.height;
      return a === 0 && c === 0;
    }
    return !1;
  },
  il = function (t) {
    if (dn(t) || t.tagName === "SELECT" || t.tagName === "TEXTAREA" || t.tagName === "BUTTON")
      for (var r = t.parentElement; r; ) {
        if (r.tagName === "FIELDSET" && r.disabled) {
          for (var n = 0; n < r.children.length; n++) {
            var o = r.children.item(n);
            if (o.tagName === "LEGEND") return !o.contains(t);
          }
          return !0;
        }
        r = r.parentElement;
      }
    return !1;
  },
  pn = function (t, r) {
    return !(r.disabled || Yu(r) || ol(r, t.displayCheck) || Xu(r) || il(r));
  },
  al = function (t, r) {
    return !(!pn(t, r) || nl(r) || ra(r) < 0);
  },
  cl = function (t, r) {
    r = r || {};
    var n = [],
      o = [],
      i = ta(t, r.includeContainer, al.bind(null, r));
    i.forEach(function (c, u) {
      var l = ra(c);
      l === 0 ? n.push(c) : o.push({ documentOrder: u, tabIndex: l, node: c });
    });
    var a = o
      .sort(Zu)
      .map(function (c) {
        return c.node;
      })
      .concat(n);
    return a;
  },
  ul = function (t, r) {
    r = r || {};
    var n = ta(t, r.includeContainer, pn.bind(null, r));
    return n;
  },
  ll = ea.concat("iframe").join(","),
  na = function (t, r) {
    if (((r = r || {}), !t)) throw new Error("No node provided");
    return Ct.call(t, ll) === !1 ? !1 : pn(r, t);
  };
/*!
 * focus-trap 6.6.1
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function Cn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cn(Object(r), !0).forEach(function (n) {
          fl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Cn(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function fl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
var kn = (function () {
    var e = [];
    return {
      activateTrap: function (r) {
        if (e.length > 0) {
          var n = e[e.length - 1];
          n !== r && n.pause();
        }
        var o = e.indexOf(r);
        o === -1 || e.splice(o, 1), e.push(r);
      },
      deactivateTrap: function (r) {
        var n = e.indexOf(r);
        n !== -1 && e.splice(n, 1), e.length > 0 && e[e.length - 1].unpause();
      },
    };
  })(),
  dl = function (t) {
    return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
  },
  pl = function (t) {
    return t.key === "Escape" || t.key === "Esc" || t.keyCode === 27;
  },
  hl = function (t) {
    return t.key === "Tab" || t.keyCode === 9;
  },
  Dn = function (t) {
    return setTimeout(t, 0);
  },
  lr = function (t, r) {
    var n = -1;
    return (
      t.every(function (o, i) {
        return r(o) ? ((n = i), !1) : !0;
      }),
      n
    );
  },
  Ue = function (t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
    return typeof t == "function" ? t.apply(void 0, n) : t;
  },
  ml = function (t, r) {
    var n = document,
      o = sl({ returnFocusOnDeactivate: !0, escapeDeactivates: !0, delayInitialFocus: !0 }, r),
      i = { containers: [], tabbableGroups: [], nodeFocusedBeforeActivation: null, mostRecentlyFocusedNode: null, active: !1, paused: !1, delayInitialFocusTimer: void 0 },
      a,
      c = function (g, E, P) {
        return g && g[E] !== void 0 ? g[E] : o[P || E];
      },
      u = function (g) {
        return i.containers.some(function (E) {
          return E.contains(g);
        });
      },
      l = function (g) {
        var E = o[g];
        if (!E) return null;
        var P = E;
        if (typeof E == "string" && ((P = n.querySelector(E)), !P)) throw new Error("`".concat(g, "` refers to no known node"));
        if (typeof E == "function" && ((P = E()), !P)) throw new Error("`".concat(g, "` did not return a node"));
        return P;
      },
      s = function () {
        var g;
        if (c({}, "initialFocus") === !1) return !1;
        if (l("initialFocus") !== null) g = l("initialFocus");
        else if (u(n.activeElement)) g = n.activeElement;
        else {
          var E = i.tabbableGroups[0],
            P = E && E.firstTabbableNode;
          g = P || l("fallbackFocus");
        }
        if (!g) throw new Error("Your focus-trap needs to have at least one focusable element");
        return g;
      },
      d = function () {
        if (
          ((i.tabbableGroups = i.containers
            .map(function (g) {
              var E = cl(g);
              if (E.length > 0) return { container: g, firstTabbableNode: E[0], lastTabbableNode: E[E.length - 1] };
            })
            .filter(function (g) {
              return !!g;
            })),
          i.tabbableGroups.length <= 0 && !l("fallbackFocus"))
        )
          throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
      },
      p = function O(g) {
        if (g !== !1 && g !== n.activeElement) {
          if (!g || !g.focus) {
            O(s());
            return;
          }
          g.focus({ preventScroll: !!o.preventScroll }), (i.mostRecentlyFocusedNode = g), dl(g) && g.select();
        }
      },
      h = function (g) {
        var E = l("setReturnFocus");
        return E || g;
      },
      b = function (g) {
        if (!u(g.target)) {
          if (Ue(o.clickOutsideDeactivates, g)) {
            a.deactivate({ returnFocus: o.returnFocusOnDeactivate && !na(g.target) });
            return;
          }
          Ue(o.allowOutsideClick, g) || g.preventDefault();
        }
      },
      v = function (g) {
        var E = u(g.target);
        E || g.target instanceof Document ? E && (i.mostRecentlyFocusedNode = g.target) : (g.stopImmediatePropagation(), p(i.mostRecentlyFocusedNode || s()));
      },
      m = function (g) {
        d();
        var E = null;
        if (i.tabbableGroups.length > 0) {
          var P = lr(i.tabbableGroups, function (W) {
            var X = W.container;
            return X.contains(g.target);
          });
          if (P < 0) g.shiftKey ? (E = i.tabbableGroups[i.tabbableGroups.length - 1].lastTabbableNode) : (E = i.tabbableGroups[0].firstTabbableNode);
          else if (g.shiftKey) {
            var j = lr(i.tabbableGroups, function (W) {
              var X = W.firstTabbableNode;
              return g.target === X;
            });
            if ((j < 0 && i.tabbableGroups[P].container === g.target && (j = P), j >= 0)) {
              var k = j === 0 ? i.tabbableGroups.length - 1 : j - 1,
                N = i.tabbableGroups[k];
              E = N.lastTabbableNode;
            }
          } else {
            var F = lr(i.tabbableGroups, function (W) {
              var X = W.lastTabbableNode;
              return g.target === X;
            });
            if ((F < 0 && i.tabbableGroups[P].container === g.target && (F = P), F >= 0)) {
              var q = F === i.tabbableGroups.length - 1 ? 0 : F + 1,
                _e = i.tabbableGroups[q];
              E = _e.firstTabbableNode;
            }
          }
        } else E = l("fallbackFocus");
        E && (g.preventDefault(), p(E));
      },
      _ = function (g) {
        if (pl(g) && Ue(o.escapeDeactivates) !== !1) {
          g.preventDefault(), a.deactivate();
          return;
        }
        if (hl(g)) {
          m(g);
          return;
        }
      },
      w = function (g) {
        Ue(o.clickOutsideDeactivates, g) || u(g.target) || Ue(o.allowOutsideClick, g) || (g.preventDefault(), g.stopImmediatePropagation());
      },
      S = function () {
        if (i.active)
          return (
            kn.activateTrap(a),
            (i.delayInitialFocusTimer = o.delayInitialFocus
              ? Dn(function () {
                  p(s());
                })
              : p(s())),
            n.addEventListener("focusin", v, !0),
            n.addEventListener("mousedown", b, { capture: !0, passive: !1 }),
            n.addEventListener("touchstart", b, { capture: !0, passive: !1 }),
            n.addEventListener("click", w, { capture: !0, passive: !1 }),
            n.addEventListener("keydown", _, { capture: !0, passive: !1 }),
            a
          );
      },
      y = function () {
        if (i.active) return n.removeEventListener("focusin", v, !0), n.removeEventListener("mousedown", b, !0), n.removeEventListener("touchstart", b, !0), n.removeEventListener("click", w, !0), n.removeEventListener("keydown", _, !0), a;
      };
    return (
      (a = {
        activate: function (g) {
          if (i.active) return this;
          var E = c(g, "onActivate"),
            P = c(g, "onPostActivate"),
            j = c(g, "checkCanFocusTrap");
          j || d(), (i.active = !0), (i.paused = !1), (i.nodeFocusedBeforeActivation = n.activeElement), E && E();
          var k = function () {
            j && d(), S(), P && P();
          };
          return j ? (j(i.containers.concat()).then(k, k), this) : (k(), this);
        },
        deactivate: function (g) {
          if (!i.active) return this;
          clearTimeout(i.delayInitialFocusTimer), (i.delayInitialFocusTimer = void 0), y(), (i.active = !1), (i.paused = !1), kn.deactivateTrap(a);
          var E = c(g, "onDeactivate"),
            P = c(g, "onPostDeactivate"),
            j = c(g, "checkCanReturnFocus");
          E && E();
          var k = c(g, "returnFocus", "returnFocusOnDeactivate"),
            N = function () {
              Dn(function () {
                k && p(h(i.nodeFocusedBeforeActivation)), P && P();
              });
            };
          return k && j ? (j(h(i.nodeFocusedBeforeActivation)).then(N, N), this) : (N(), this);
        },
        pause: function () {
          return i.paused || !i.active ? this : ((i.paused = !0), y(), this);
        },
        unpause: function () {
          return !i.paused || !i.active ? this : ((i.paused = !1), d(), S(), this);
        },
        updateContainerElements: function (g) {
          var E = [].concat(g).filter(Boolean);
          return (
            (i.containers = E.map(function (P) {
              return typeof P == "string" ? n.querySelector(P) : P;
            })),
            i.active && d(),
            this
          );
        },
      }),
      a.updateContainerElements(t),
      a
    );
  };
function vl(e) {
  let t, r;
  window.addEventListener("focusin", () => {
    (t = r), (r = document.activeElement);
  }),
    e.magic("focus", (n) => {
      let o = n;
      return {
        __noscroll: !1,
        __wrapAround: !1,
        within(i) {
          return (o = i), this;
        },
        withoutScrolling() {
          return (this.__noscroll = !0), this;
        },
        noscroll() {
          return (this.__noscroll = !0), this;
        },
        withWrapAround() {
          return (this.__wrapAround = !0), this;
        },
        wrap() {
          return this.withWrapAround();
        },
        focusable(i) {
          return na(i);
        },
        previouslyFocused() {
          return t;
        },
        lastFocused() {
          return t;
        },
        focused() {
          return r;
        },
        focusables() {
          return Array.isArray(o) ? o : ul(o, { displayCheck: "none" });
        },
        all() {
          return this.focusables();
        },
        isFirst(i) {
          let a = this.all();
          return a[0] && a[0].isSameNode(i);
        },
        isLast(i) {
          let a = this.all();
          return a.length && a.slice(-1)[0].isSameNode(i);
        },
        getFirst() {
          return this.all()[0];
        },
        getLast() {
          return this.all().slice(-1)[0];
        },
        getNext() {
          let i = this.all(),
            a = document.activeElement;
          if (i.indexOf(a) !== -1) return this.__wrapAround && i.indexOf(a) === i.length - 1 ? i[0] : i[i.indexOf(a) + 1];
        },
        getPrevious() {
          let i = this.all(),
            a = document.activeElement;
          if (i.indexOf(a) !== -1) return this.__wrapAround && i.indexOf(a) === 0 ? i.slice(-1)[0] : i[i.indexOf(a) - 1];
        },
        first() {
          this.focus(this.getFirst());
        },
        last() {
          this.focus(this.getLast());
        },
        next() {
          this.focus(this.getNext());
        },
        previous() {
          this.focus(this.getPrevious());
        },
        prev() {
          return this.previous();
        },
        focus(i) {
          i &&
            setTimeout(() => {
              i.hasAttribute("tabindex") || i.setAttribute("tabindex", "0"), i.focus({ preventScroll: this._noscroll });
            });
        },
      };
    }),
    e.directive(
      "trap",
      e.skipDuringClone(
        (n, { expression: o, modifiers: i }, { effect: a, evaluateLater: c, cleanup: u }) => {
          let l = c(o),
            s = !1,
            d = ml(n, { escapeDeactivates: !1, allowOutsideClick: !0, fallbackFocus: () => n }),
            p = () => {},
            h = () => {};
          const b = () => {
            p(), (p = () => {}), h(), (h = () => {}), d.deactivate({ returnFocus: !i.includes("noreturn") });
          };
          a(() =>
            l((v) => {
              s !== v &&
                (v &&
                  !s &&
                  setTimeout(() => {
                    i.includes("inert") && (p = Tn(n)), i.includes("noscroll") && (h = _l()), d.activate();
                  }),
                !v && s && b(),
                (s = !!v));
            })
          ),
            u(b);
        },
        (n, { expression: o, modifiers: i }, { evaluate: a }) => {
          i.includes("inert") && a(o) && Tn(n);
        }
      )
    );
}
function Tn(e) {
  let t = [];
  return (
    oa(e, (r) => {
      let n = r.hasAttribute("aria-hidden");
      r.setAttribute("aria-hidden", "true"), t.push(() => n || r.removeAttribute("aria-hidden"));
    }),
    () => {
      for (; t.length; ) t.pop()();
    }
  );
}
function oa(e, t) {
  e.isSameNode(document.body) ||
    !e.parentNode ||
    Array.from(e.parentNode.children).forEach((r) => {
      r.isSameNode(e) || t(r), oa(e.parentNode, t);
    });
}
function _l() {
  let e = document.documentElement.style.overflow,
    t = document.documentElement.style.paddingRight,
    r = window.innerWidth - document.documentElement.clientWidth;
  return (
    (document.documentElement.style.overflow = "hidden"),
    (document.documentElement.style.paddingRight = `${r}px`),
    () => {
      (document.documentElement.style.overflow = e), (document.documentElement.style.paddingRight = t);
    }
  );
}
var gl = vl;
/*! @docsearch/js 3.3.3 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */ function Nn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nn(Object(r), !0).forEach(function (n) {
          yl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Nn(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function rt(e) {
  return (
    (rt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }),
    rt(e)
  );
}
function yl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function Tr() {
  return (
    (Tr =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Tr.apply(this, arguments)
  );
}
function bl(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
function kt(e, t) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(e) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
      if (o != null) {
        var i,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          for (o = o.call(r); !(u = (i = o.next()).done) && (c.push(i.value), !n || c.length !== n); u = !0);
        } catch (s) {
          (l = !0), (a = s);
        } finally {
          try {
            u || o.return == null || o.return();
          } finally {
            if (l) throw a;
          }
        }
        return c;
      }
    })(e, t) ||
    ia(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Dt(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return Nr(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < "u" && t[Symbol.iterator] != null) || t["@@iterator"] != null) return Array.from(t);
    })(e) ||
    ia(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function ia(e, t) {
  if (e) {
    if (typeof e == "string") return Nr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Nr(e, t) : void 0;
  }
}
function Nr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var x,
  Ze,
  aa,
  Rn,
  ca,
  Tt = {},
  hn = [],
  Ol = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function te(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function ua(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Z(e, t, r) {
  var n,
    o,
    i,
    a = arguments,
    c = {};
  for (i in t) i == "key" ? (n = t[i]) : i == "ref" ? (o = t[i]) : (c[i] = t[i]);
  if (arguments.length > 3) for (r = [r], i = 3; i < arguments.length; i++) r.push(a[i]);
  if ((r != null && (c.children = r), typeof e == "function" && e.defaultProps != null)) for (i in e.defaultProps) c[i] === void 0 && (c[i] = e.defaultProps[i]);
  return Ye(e, c, n, o, null);
}
function Ye(e, t, r, n, o) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o ?? ++x.__v };
  return x.vnode != null && x.vnode(i), i;
}
function ue(e) {
  return e.children;
}
function Y(e, t) {
  (this.props = e), (this.context = t);
}
function nt(e, t) {
  if (t == null) return e.__ ? nt(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; t < e.__k.length; t++) if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? nt(e) : null;
}
function la(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return la(e);
  }
}
function Rr(e) {
  ((!e.__d && (e.__d = !0) && Ze.push(e) && !Nt.__r++) || Rn !== x.debounceRendering) && ((Rn = x.debounceRendering) || aa)(Nt);
}
function Nt() {
  for (var e; (Nt.__r = Ze.length); )
    (e = Ze.sort(function (t, r) {
      return t.__v.__b - r.__v.__b;
    })),
      (Ze = []),
      e.some(function (t) {
        var r, n, o, i, a, c;
        t.__d && ((a = (i = (r = t).__v).__e), (c = r.__P) && ((n = []), ((o = te({}, i)).__v = i.__v + 1), mn(c, i, o, r.__n, c.ownerSVGElement !== void 0, i.__h != null ? [a] : null, n, a ?? nt(i), i.__h), pa(n, i), i.__e != a && la(i)));
      });
}
function sa(e, t, r, n, o, i, a, c, u, l) {
  var s,
    d,
    p,
    h,
    b,
    v,
    m,
    _ = (n && n.__k) || hn,
    w = _.length;
  for (r.__k = [], s = 0; s < t.length; s++)
    if (
      (h = r.__k[s] =
        (h = t[s]) == null || typeof h == "boolean"
          ? null
          : typeof h == "string" || typeof h == "number"
          ? Ye(null, h, null, null, h)
          : Array.isArray(h)
          ? Ye(ue, { children: h }, null, null, null)
          : h.__b > 0
          ? Ye(h.type, h.props, h.key, null, h.__v)
          : h) != null
    ) {
      if (((h.__ = r), (h.__b = r.__b + 1), (p = _[s]) === null || (p && h.key == p.key && h.type === p.type))) _[s] = void 0;
      else
        for (d = 0; d < w; d++) {
          if ((p = _[d]) && h.key == p.key && h.type === p.type) {
            _[d] = void 0;
            break;
          }
          p = null;
        }
      mn(e, h, (p = p || Tt), o, i, a, c, u, l),
        (b = h.__e),
        (d = h.ref) && p.ref != d && (m || (m = []), p.ref && m.push(p.ref, null, h), m.push(d, h.__c || b, h)),
        b != null
          ? (v == null && (v = b),
            typeof h.type == "function" && h.__k != null && h.__k === p.__k ? (h.__d = u = fa(h, u, e)) : (u = da(e, h, p, _, b, u)),
            l || r.type !== "option" ? typeof r.type == "function" && (r.__d = u) : (e.value = ""))
          : u && p.__e == u && u.parentNode != e && (u = nt(p));
    }
  for (r.__e = v, s = w; s--; ) _[s] != null && (typeof r.type == "function" && _[s].__e != null && _[s].__e == r.__d && (r.__d = nt(n, s + 1)), ma(_[s], _[s]));
  if (m) for (s = 0; s < m.length; s++) ha(m[s], m[++s], m[++s]);
}
function fa(e, t, r) {
  var n, o;
  for (n = 0; n < e.__k.length; n++) (o = e.__k[n]) && ((o.__ = e), (t = typeof o.type == "function" ? fa(o, t, r) : da(r, o, o, e.__k, o.__e, t)));
  return t;
}
function re(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (Array.isArray(e)
        ? e.some(function (r) {
            re(r, t);
          })
        : t.push(e)),
    t
  );
}
function da(e, t, r, n, o, i) {
  var a, c, u;
  if (t.__d !== void 0) (a = t.__d), (t.__d = void 0);
  else if (r == null || o != i || o.parentNode == null)
    e: if (i == null || i.parentNode !== e) e.appendChild(o), (a = null);
    else {
      for (c = i, u = 0; (c = c.nextSibling) && u < n.length; u += 2) if (c == o) break e;
      e.insertBefore(o, i), (a = i);
    }
  return a !== void 0 ? a : o.nextSibling;
}
function Mn(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r) : (e[t] = r == null ? "" : typeof r != "number" || Ol.test(t) ? r : r + "px");
}
function ht(e, t, r, n, o) {
  var i;
  e: if (t === "style")
    if (typeof r == "string") e.style.cssText = r;
    else {
      if ((typeof n == "string" && (e.style.cssText = n = ""), n)) for (t in n) (r && t in r) || Mn(e.style, t, "");
      if (r) for (t in r) (n && r[t] === n[t]) || Mn(e.style, t, r[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (i = t !== (t = t.replace(/Capture$/, ""))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + i] = r),
      r ? n || e.addEventListener(t, i ? Fn : Ln, i) : e.removeEventListener(t, i ? Fn : Ln, i);
  else if (t !== "dangerouslySetInnerHTML") {
    if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
    else if (t !== "href" && t !== "list" && t !== "form" && t !== "download" && t in e)
      try {
        e[t] = r ?? "";
        break e;
      } catch {}
    typeof r == "function" || (r != null && (r !== !1 || (t[0] === "a" && t[1] === "r")) ? e.setAttribute(t, r) : e.removeAttribute(t));
  }
}
function Ln(e) {
  this.l[e.type + !1](x.event ? x.event(e) : e);
}
function Fn(e) {
  this.l[e.type + !0](x.event ? x.event(e) : e);
}
function mn(e, t, r, n, o, i, a, c, u) {
  var l,
    s,
    d,
    p,
    h,
    b,
    v,
    m,
    _,
    w,
    S,
    y = t.type;
  if (t.constructor !== void 0) return null;
  r.__h != null && ((u = r.__h), (c = t.__e = r.__e), (t.__h = null), (i = [c])), (l = x.__b) && l(t);
  try {
    e: if (typeof y == "function") {
      if (
        ((m = t.props),
        (_ = (l = y.contextType) && n[l.__c]),
        (w = l ? (_ ? _.props.value : l.__) : n),
        r.__c
          ? (v = (s = t.__c = r.__c).__ = s.__E)
          : ("prototype" in y && y.prototype.render ? (t.__c = s = new y(m, w)) : ((t.__c = s = new Y(m, w)), (s.constructor = y), (s.render = Sl)),
            _ && _.sub(s),
            (s.props = m),
            s.state || (s.state = {}),
            (s.context = w),
            (s.__n = n),
            (d = s.__d = !0),
            (s.__h = [])),
        s.__s == null && (s.__s = s.state),
        y.getDerivedStateFromProps != null && (s.__s == s.state && (s.__s = te({}, s.__s)), te(s.__s, y.getDerivedStateFromProps(m, s.__s))),
        (p = s.props),
        (h = s.state),
        d)
      )
        y.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(), s.componentDidMount != null && s.__h.push(s.componentDidMount);
      else {
        if (
          (y.getDerivedStateFromProps == null && m !== p && s.componentWillReceiveProps != null && s.componentWillReceiveProps(m, w),
          (!s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(m, s.__s, w) === !1) || t.__v === r.__v)
        ) {
          (s.props = m), (s.state = s.__s), t.__v !== r.__v && (s.__d = !1), (s.__v = t), (t.__e = r.__e), (t.__k = r.__k), s.__h.length && a.push(s);
          break e;
        }
        s.componentWillUpdate != null && s.componentWillUpdate(m, s.__s, w),
          s.componentDidUpdate != null &&
            s.__h.push(function () {
              s.componentDidUpdate(p, h, b);
            });
      }
      (s.context = w),
        (s.props = m),
        (s.state = s.__s),
        (l = x.__r) && l(t),
        (s.__d = !1),
        (s.__v = t),
        (s.__P = e),
        (l = s.render(s.props, s.state, s.context)),
        (s.state = s.__s),
        s.getChildContext != null && (n = te(te({}, n), s.getChildContext())),
        d || s.getSnapshotBeforeUpdate == null || (b = s.getSnapshotBeforeUpdate(p, h)),
        (S = l != null && l.type === ue && l.key == null ? l.props.children : l),
        sa(e, Array.isArray(S) ? S : [S], t, r, n, o, i, a, c, u),
        (s.base = t.__e),
        (t.__h = null),
        s.__h.length && a.push(s),
        v && (s.__E = s.__ = null),
        (s.__e = !1);
    } else i == null && t.__v === r.__v ? ((t.__k = r.__k), (t.__e = r.__e)) : (t.__e = wl(r.__e, t, r, n, o, i, a, u));
    (l = x.diffed) && l(t);
  } catch (O) {
    (t.__v = null), (u || i != null) && ((t.__e = c), (t.__h = !!u), (i[i.indexOf(c)] = null)), x.__e(O, t, r);
  }
}
function pa(e, t) {
  x.__c && x.__c(t, e),
    e.some(function (r) {
      try {
        (e = r.__h),
          (r.__h = []),
          e.some(function (n) {
            n.call(r);
          });
      } catch (n) {
        x.__e(n, r.__v);
      }
    });
}
function wl(e, t, r, n, o, i, a, c) {
  var u,
    l,
    s,
    d,
    p = r.props,
    h = t.props,
    b = t.type,
    v = 0;
  if ((b === "svg" && (o = !0), i != null)) {
    for (; v < i.length; v++)
      if ((u = i[v]) && (u === e || (b ? u.localName == b : u.nodeType == 3))) {
        (e = u), (i[v] = null);
        break;
      }
  }
  if (e == null) {
    if (b === null) return document.createTextNode(h);
    (e = o ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, h.is && h)), (i = null), (c = !1);
  }
  if (b === null) p === h || (c && e.data === h) || (e.data = h);
  else {
    if (((i = i && hn.slice.call(e.childNodes)), (l = (p = r.props || Tt).dangerouslySetInnerHTML), (s = h.dangerouslySetInnerHTML), !c)) {
      if (i != null) for (p = {}, d = 0; d < e.attributes.length; d++) p[e.attributes[d].name] = e.attributes[d].value;
      (s || l) && ((s && ((l && s.__html == l.__html) || s.__html === e.innerHTML)) || (e.innerHTML = (s && s.__html) || ""));
    }
    if (
      ((function (m, _, w, S, y) {
        var O;
        for (O in w) O === "children" || O === "key" || O in _ || ht(m, O, null, w[O], S);
        for (O in _) (y && typeof _[O] != "function") || O === "children" || O === "key" || O === "value" || O === "checked" || w[O] === _[O] || ht(m, O, _[O], w[O], S);
      })(e, h, p, o, c),
      s)
    )
      t.__k = [];
    else if (((v = t.props.children), sa(e, Array.isArray(v) ? v : [v], t, r, n, o && b !== "foreignObject", i, a, e.firstChild, c), i != null)) for (v = i.length; v--; ) i[v] != null && ua(i[v]);
    c || ("value" in h && (v = h.value) !== void 0 && (v !== e.value || (b === "progress" && !v)) && ht(e, "value", v, p.value, !1), "checked" in h && (v = h.checked) !== void 0 && v !== e.checked && ht(e, "checked", v, p.checked, !1));
  }
  return e;
}
function ha(e, t, r) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (n) {
    x.__e(n, r);
  }
}
function ma(e, t, r) {
  var n, o, i;
  if ((x.unmount && x.unmount(e), (n = e.ref) && ((n.current && n.current !== e.__e) || ha(n, null, t)), r || typeof e.type == "function" || (r = (o = e.__e) != null), (e.__e = e.__d = void 0), (n = e.__c) != null)) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (a) {
        x.__e(a, t);
      }
    n.base = n.__P = null;
  }
  if ((n = e.__k)) for (i = 0; i < n.length; i++) n[i] && ma(n[i], t, r);
  o != null && ua(o);
}
function Sl(e, t, r) {
  return this.constructor(e, r);
}
function ot(e, t, r) {
  var n, o, i;
  x.__ && x.__(e, t),
    (o = (n = typeof r == "function") ? null : (r && r.__k) || t.__k),
    (i = []),
    mn(t, (e = ((!n && r) || t).__k = Z(ue, null, [e])), o || Tt, Tt, t.ownerSVGElement !== void 0, !n && r ? [r] : o ? null : t.firstChild ? hn.slice.call(t.childNodes) : null, i, !n && r ? r : o ? o.__e : t.firstChild, n),
    pa(i, e);
}
function va(e, t) {
  ot(e, t, va);
}
function El(e, t, r) {
  var n,
    o,
    i,
    a = arguments,
    c = te({}, e.props);
  for (i in t) i == "key" ? (n = t[i]) : i == "ref" ? (o = t[i]) : (c[i] = t[i]);
  if (arguments.length > 3) for (r = [r], i = 3; i < arguments.length; i++) r.push(a[i]);
  return r != null && (c.children = r), Ye(e.type, c, n || e.key, o || e.ref, null);
}
(x = {
  __e: function (e, t) {
    for (var r, n, o; (t = t.__); )
      if ((r = t.__c) && !r.__)
        try {
          if (((n = r.constructor) && n.getDerivedStateFromError != null && (r.setState(n.getDerivedStateFromError(e)), (o = r.__d)), r.componentDidCatch != null && (r.componentDidCatch(e), (o = r.__d)), o)) return (r.__E = r);
        } catch (i) {
          e = i;
        }
    throw e;
  },
  __v: 0,
}),
  (Y.prototype.setState = function (e, t) {
    var r;
    (r = this.__s != null && this.__s !== this.state ? this.__s : (this.__s = te({}, this.state))), typeof e == "function" && (e = e(te({}, r), this.props)), e && te(r, e), e != null && this.__v && (t && this.__h.push(t), Rr(this));
  }),
  (Y.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), Rr(this));
  }),
  (Y.prototype.render = ue),
  (Ze = []),
  (aa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (Nt.__r = 0),
  (ca = 0);
var De,
  B,
  qn,
  Pe = 0,
  Mr = [],
  Hn = x.__b,
  Un = x.__r,
  Bn = x.diffed,
  Kn = x.__c,
  $n = x.unmount;
function st(e, t) {
  x.__h && x.__h(B, e, Pe || t), (Pe = 0);
  var r = B.__H || (B.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({}), r.__[e];
}
function _a(e) {
  return (Pe = 1), ga(ba, e);
}
function ga(e, t, r) {
  var n = st(De++, 2);
  return (
    (n.t = e),
    n.__c ||
      ((n.__ = [
        r ? r(t) : ba(void 0, t),
        function (o) {
          var i = n.t(n.__[0], o);
          n.__[0] !== i && ((n.__ = [i, n.__[1]]), n.__c.setState({}));
        },
      ]),
      (n.__c = B)),
    n.__
  );
}
function ya(e, t) {
  var r = st(De++, 3);
  !x.__s && vn(r.__H, t) && ((r.__ = e), (r.__H = t), B.__H.__h.push(r));
}
function Vn(e, t) {
  var r = st(De++, 4);
  !x.__s && vn(r.__H, t) && ((r.__ = e), (r.__H = t), B.__h.push(r));
}
function sr(e, t) {
  var r = st(De++, 7);
  return vn(r.__H, t) && ((r.__ = e()), (r.__H = t), (r.__h = e)), r.__;
}
function xl() {
  Mr.forEach(function (e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(wt), e.__H.__h.forEach(Lr), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), x.__e(t, e.__v);
      }
  }),
    (Mr = []);
}
(x.__b = function (e) {
  (B = null), Hn && Hn(e);
}),
  (x.__r = function (e) {
    Un && Un(e), (De = 0);
    var t = (B = e.__c).__H;
    t && (t.__h.forEach(wt), t.__h.forEach(Lr), (t.__h = []));
  }),
  (x.diffed = function (e) {
    Bn && Bn(e);
    var t = e.__c;
    t &&
      t.__H &&
      t.__H.__h.length &&
      ((Mr.push(t) !== 1 && qn === x.requestAnimationFrame) ||
        (
          (qn = x.requestAnimationFrame) ||
          function (r) {
            var n,
              o = function () {
                clearTimeout(i), Wn && cancelAnimationFrame(n), setTimeout(r);
              },
              i = setTimeout(o, 100);
            Wn && (n = requestAnimationFrame(o));
          }
        )(xl)),
      (B = void 0);
  }),
  (x.__c = function (e, t) {
    t.some(function (r) {
      try {
        r.__h.forEach(wt),
          (r.__h = r.__h.filter(function (n) {
            return !n.__ || Lr(n);
          }));
      } catch (n) {
        t.some(function (o) {
          o.__h && (o.__h = []);
        }),
          (t = []),
          x.__e(n, r.__v);
      }
    }),
      Kn && Kn(e, t);
  }),
  (x.unmount = function (e) {
    $n && $n(e);
    var t = e.__c;
    if (t && t.__H)
      try {
        t.__H.__.forEach(wt);
      } catch (r) {
        x.__e(r, t.__v);
      }
  });
var Wn = typeof requestAnimationFrame == "function";
function wt(e) {
  var t = B;
  typeof e.__c == "function" && e.__c(), (B = t);
}
function Lr(e) {
  var t = B;
  (e.__c = e.__()), (B = t);
}
function vn(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (r, n) {
      return r !== e[n];
    })
  );
}
function ba(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oa(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Fr(e, t) {
  for (var r in e) if (r !== "__source" && !(r in t)) return !0;
  for (var n in t) if (n !== "__source" && e[n] !== t[n]) return !0;
  return !1;
}
function qr(e) {
  this.props = e;
}
((qr.prototype = new Y()).isPureReactComponent = !0),
  (qr.prototype.shouldComponentUpdate = function (e, t) {
    return Fr(this.props, e) || Fr(this.state, t);
  });
var zn = x.__b;
x.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), zn && zn(e);
};
var Pl = (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) || 3911,
  Jn = function (e, t) {
    return e == null ? null : re(re(e).map(t));
  },
  jl = {
    map: Jn,
    forEach: Jn,
    count: function (e) {
      return e ? re(e).length : 0;
    },
    only: function (e) {
      var t = re(e);
      if (t.length !== 1) throw "Children.only";
      return t[0];
    },
    toArray: re,
  },
  Il = x.__e;
function St() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function wa(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}
function We() {
  (this.u = null), (this.o = null);
}
(x.__e = function (e, t, r) {
  if (e.then) {
    for (var n, o = t; (o = o.__); ) if ((n = o.__c) && n.__c) return t.__e == null && ((t.__e = r.__e), (t.__k = r.__k)), n.__c(e, t);
  }
  Il(e, t, r);
}),
  ((St.prototype = new Y()).__c = function (e, t) {
    var r = t.__c,
      n = this;
    n.t == null && (n.t = []), n.t.push(r);
    var o = wa(n.__v),
      i = !1,
      a = function () {
        i || ((i = !0), (r.componentWillUnmount = r.__c), o ? o(c) : c());
      };
    (r.__c = r.componentWillUnmount),
      (r.componentWillUnmount = function () {
        a(), r.__c && r.__c();
      });
    var c = function () {
        if (!--n.__u) {
          if (n.state.__e) {
            var l = n.state.__e;
            n.__v.__k[0] = (function d(p, h, b) {
              return (
                p &&
                  ((p.__v = null),
                  (p.__k =
                    p.__k &&
                    p.__k.map(function (v) {
                      return d(v, h, b);
                    })),
                  p.__c && p.__c.__P === h && (p.__e && b.insertBefore(p.__e, p.__d), (p.__c.__e = !0), (p.__c.__P = b))),
                p
              );
            })(l, l.__c.__P, l.__c.__O);
          }
          var s;
          for (n.setState({ __e: (n.__b = null) }); (s = n.t.pop()); ) s.forceUpdate();
        }
      },
      u = t.__h === !0;
    n.__u++ || u || n.setState({ __e: (n.__b = n.__v.__k[0]) }), e.then(a, a);
  }),
  (St.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (St.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var r = document.createElement("div"),
          n = this.__v.__k[0].__c;
        this.__v.__k[0] = (function i(a, c, u) {
          return (
            a &&
              (a.__c &&
                a.__c.__H &&
                (a.__c.__H.__.forEach(function (l) {
                  typeof l.__c == "function" && l.__c();
                }),
                (a.__c.__H = null)),
              (a = Oa({}, a)).__c != null && (a.__c.__P === u && (a.__c.__P = c), (a.__c = null)),
              (a.__k =
                a.__k &&
                a.__k.map(function (l) {
                  return i(l, c, u);
                }))),
            a
          );
        })(this.__b, r, (n.__O = n.__P));
      }
      this.__b = null;
    }
    var o = t.__e && Z(ue, null, e.fallback);
    return o && (o.__h = null), [Z(ue, null, t.__e ? null : e.children), o];
  });
var Qn = function (e, t, r) {
  if ((++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size)))
    for (r = e.u; r; ) {
      for (; r.length > 3; ) r.pop()();
      if (r[1] < r[0]) break;
      e.u = r = r[2];
    }
};
function Al(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function Cl(e) {
  var t = this,
    r = e.i;
  (t.componentWillUnmount = function () {
    ot(null, t.l), (t.l = null), (t.i = null);
  }),
    t.i && t.i !== r && t.componentWillUnmount(),
    e.__v
      ? (t.l ||
          ((t.i = r),
          (t.l = {
            nodeType: 1,
            parentNode: r,
            childNodes: [],
            appendChild: function (n) {
              this.childNodes.push(n), t.i.appendChild(n);
            },
            insertBefore: function (n, o) {
              this.childNodes.push(n), t.i.appendChild(n);
            },
            removeChild: function (n) {
              this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
            },
          })),
        ot(Z(Al, { context: t.context }, e.__v), t.l))
      : t.l && t.componentWillUnmount();
}
function Sa(e, t) {
  return Z(Cl, { __v: e, i: t });
}
((We.prototype = new Y()).__e = function (e) {
  var t = this,
    r = wa(t.__v),
    n = t.o.get(e);
  return (
    n[0]++,
    function (o) {
      var i = function () {
        t.props.revealOrder ? (n.push(o), Qn(t, e, n)) : o();
      };
      r ? r(i) : i();
    }
  );
}),
  (We.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = re(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var r = t.length; r--; ) this.o.set(t[r], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (We.prototype.componentDidUpdate = We.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, r) {
        Qn(e, r, t);
      });
    });
var Ea = (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  kl = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Dl = function (e) {
    return (typeof Symbol < "u" && rt(Symbol()) == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
  };
function xa(e, t, r) {
  return t.__k == null && (t.textContent = ""), ot(e, t), typeof r == "function" && r(), e ? e.__c : null;
}
(Y.prototype.isReactComponent = {}),
  ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
    Object.defineProperty(Y.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
      },
    });
  });
var Gn = x.event;
function Tl() {}
function Nl() {
  return this.cancelBubble;
}
function Rl() {
  return this.defaultPrevented;
}
x.event = function (e) {
  return Gn && (e = Gn(e)), (e.persist = Tl), (e.isPropagationStopped = Nl), (e.isDefaultPrevented = Rl), (e.nativeEvent = e);
};
var Pa,
  Zn = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  Yn = x.vnode;
x.vnode = function (e) {
  var t = e.type,
    r = e.props,
    n = r;
  if (typeof t == "string") {
    for (var o in ((n = {}), r)) {
      var i = r[o];
      (o === "value" && "defaultValue" in r && i == null) ||
        (o === "defaultValue" && "value" in r && r.value == null
          ? (o = "value")
          : o === "download" && i === !0
          ? (i = "")
          : /ondoubleclick/i.test(o)
          ? (o = "ondblclick")
          : /^onchange(textarea|input)/i.test(o + t) && !Dl(r.type)
          ? (o = "oninput")
          : /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
          ? (o = o.toLowerCase())
          : kl.test(o)
          ? (o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase())
          : i === null && (i = void 0),
        (n[o] = i));
    }
    t == "select" &&
      n.multiple &&
      Array.isArray(n.value) &&
      (n.value = re(r.children).forEach(function (a) {
        a.props.selected = n.value.indexOf(a.props.value) != -1;
      })),
      t == "select" &&
        n.defaultValue != null &&
        (n.value = re(r.children).forEach(function (a) {
          a.props.selected = n.multiple ? n.defaultValue.indexOf(a.props.value) != -1 : n.defaultValue == a.props.value;
        })),
      (e.props = n);
  }
  t && r.class != r.className && ((Zn.enumerable = "className" in r), r.className != null && (n.class = r.className), Object.defineProperty(n, "className", Zn)), (e.$$typeof = Ea), Yn && Yn(e);
};
var Xn = x.__r;
x.__r = function (e) {
  Xn && Xn(e), (Pa = e.__c);
};
var Ml = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (e) {
        return Pa.__n[e.__c].props.value;
      },
    },
  },
};
(typeof performance > "u" ? "undefined" : rt(performance)) == "object" && typeof performance.now == "function" && performance.now.bind(performance);
function eo(e) {
  return !!e && e.$$typeof === Ea;
}
var f = {
  useState: _a,
  useReducer: ga,
  useEffect: ya,
  useLayoutEffect: Vn,
  useRef: function (e) {
    return (
      (Pe = 5),
      sr(function () {
        return { current: e };
      }, [])
    );
  },
  useImperativeHandle: function (e, t, r) {
    (Pe = 6),
      Vn(
        function () {
          typeof e == "function" ? e(t()) : e && (e.current = t());
        },
        r == null ? r : r.concat(e)
      );
  },
  useMemo: sr,
  useCallback: function (e, t) {
    return (
      (Pe = 8),
      sr(function () {
        return e;
      }, t)
    );
  },
  useContext: function (e) {
    var t = B.context[e.__c],
      r = st(De++, 9);
    return (r.__c = e), t ? (r.__ == null && ((r.__ = !0), t.sub(B)), t.props.value) : e.__;
  },
  useDebugValue: function (e, t) {
    x.useDebugValue && x.useDebugValue(t ? t(e) : e);
  },
  version: "16.8.0",
  Children: jl,
  render: xa,
  hydrate: function (e, t, r) {
    return va(e, t), typeof r == "function" && r(), e ? e.__c : null;
  },
  unmountComponentAtNode: function (e) {
    return !!e.__k && (ot(null, e), !0);
  },
  createPortal: Sa,
  createElement: Z,
  createContext: function (e, t) {
    var r = {
      __c: (t = "__cC" + ca++),
      __: e,
      Consumer: function (n, o) {
        return n.children(o);
      },
      Provider: function (n) {
        var o, i;
        return (
          this.getChildContext ||
            ((o = []),
            ((i = {})[t] = this),
            (this.getChildContext = function () {
              return i;
            }),
            (this.shouldComponentUpdate = function (a) {
              this.props.value !== a.value && o.some(Rr);
            }),
            (this.sub = function (a) {
              o.push(a);
              var c = a.componentWillUnmount;
              a.componentWillUnmount = function () {
                o.splice(o.indexOf(a), 1), c && c.call(a);
              };
            })),
          n.children
        );
      },
    };
    return (r.Provider.__ = r.Consumer.contextType = r);
  },
  createFactory: function (e) {
    return Z.bind(null, e);
  },
  cloneElement: function (e) {
    return eo(e) ? El.apply(null, arguments) : e;
  },
  createRef: function () {
    return { current: null };
  },
  Fragment: ue,
  isValidElement: eo,
  findDOMNode: function (e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  },
  Component: Y,
  PureComponent: qr,
  memo: function (e, t) {
    function r(o) {
      var i = this.props.ref,
        a = i == o.ref;
      return !a && i && (i.call ? i(null) : (i.current = null)), t ? !t(this.props, o) || !a : Fr(this.props, o);
    }
    function n(o) {
      return (this.shouldComponentUpdate = r), Z(e, o);
    }
    return (n.displayName = "Memo(" + (e.displayName || e.name) + ")"), (n.prototype.isReactComponent = !0), (n.__f = !0), n;
  },
  forwardRef: function (e) {
    function t(r, n) {
      var o = Oa({}, r);
      return delete o.ref, e(o, (n = r.ref || n) && (rt(n) != "object" || "current" in n) ? n : null);
    }
    return (t.$$typeof = Pl), (t.render = t), (t.prototype.isReactComponent = t.__f = !0), (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"), t;
  },
  unstable_batchedUpdates: function (e, t) {
    return e(t);
  },
  StrictMode: ue,
  Suspense: St,
  SuspenseList: We,
  lazy: function (e) {
    var t, r, n;
    function o(i) {
      if (
        (t ||
          (t = e()).then(
            function (a) {
              r = a.default || a;
            },
            function (a) {
              n = a;
            }
          ),
        n)
      )
        throw n;
      if (!r) throw t;
      return Z(r, i);
    }
    return (o.displayName = "Lazy"), (o.__f = !0), o;
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ml,
};
function Ll() {
  return f.createElement(
    "svg",
    { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" },
    f.createElement("path", {
      d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",
      strokeWidth: "1.2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "square",
    })
  );
}
function ja() {
  return f.createElement(
    "svg",
    { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" },
    f.createElement("path", {
      d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
      stroke: "currentColor",
      fill: "none",
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
  );
}
var Fl = ["translations"];
function Hr() {
  return (
    (Hr =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Hr.apply(this, arguments)
  );
}
function ql(e, t) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(e) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
      if (o != null) {
        var i,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          for (o = o.call(r); !(u = (i = o.next()).done) && (c.push(i.value), !n || c.length !== n); u = !0);
        } catch (s) {
          (l = !0), (a = s);
        } finally {
          try {
            u || o.return == null || o.return();
          } finally {
            if (l) throw a;
          }
        }
        return c;
      }
    })(e, t) ||
    (function (r, n) {
      if (r) {
        if (typeof r == "string") return to(r, n);
        var o = Object.prototype.toString.call(r).slice(8, -1);
        if ((o === "Object" && r.constructor && (o = r.constructor.name), o === "Map" || o === "Set")) return Array.from(r);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return to(r, n);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function to(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Hl(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
var Ul = f.forwardRef(function (e, t) {
  var r = e.translations,
    n = r === void 0 ? {} : r,
    o = Hl(e, Fl),
    i = n.buttonText,
    a = i === void 0 ? "Search" : i,
    c = n.buttonAriaLabel,
    u = c === void 0 ? "Search" : c,
    l = ql(_a(null), 2),
    s = l[0],
    d = l[1];
  return (
    ya(function () {
      typeof navigator < "u" && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? d("⌘") : d("Ctrl"));
    }, []),
    f.createElement(
      "button",
      Hr({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u }, o, { ref: t }),
      f.createElement("span", { className: "DocSearch-Button-Container" }, f.createElement(ja, null), f.createElement("span", { className: "DocSearch-Button-Placeholder" }, a)),
      f.createElement(
        "span",
        { className: "DocSearch-Button-Keys" },
        s !== null && f.createElement(f.Fragment, null, f.createElement("kbd", { className: "DocSearch-Button-Key" }, s === "Ctrl" ? f.createElement(Ll, null) : s), f.createElement("kbd", { className: "DocSearch-Button-Key" }, "K"))
      )
    )
  );
});
function it(e) {
  return e.reduce(function (t, r) {
    return t.concat(r);
  }, []);
}
var Bl = 0;
function Ur(e) {
  return e.collections.length === 0
    ? 0
    : e.collections.reduce(function (t, r) {
        return t + r.items.length;
      }, 0);
}
var Ia = function () {},
  Kl = [{ segment: "autocomplete-core", version: "1.7.4" }];
function Et(e, t) {
  var r = t;
  return {
    then: function (n, o) {
      return Et(e.then(mt(n, r, e), mt(o, r, e)), r);
    },
    catch: function (n) {
      return Et(e.catch(mt(n, r, e)), r);
    },
    finally: function (n) {
      return (
        n && r.onCancelList.push(n),
        Et(
          e.finally(
            mt(
              n &&
                function () {
                  return (r.onCancelList = []), n();
                },
              r,
              e
            )
          ),
          r
        )
      );
    },
    cancel: function () {
      r.isCanceled = !0;
      var n = r.onCancelList;
      (r.onCancelList = []),
        n.forEach(function (o) {
          o();
        });
    },
    isCanceled: function () {
      return r.isCanceled === !0;
    },
  };
}
function ro(e) {
  return Et(e, { isCanceled: !1, onCancelList: [] });
}
function mt(e, t, r) {
  return e
    ? function (n) {
        return t.isCanceled ? n : e(n);
      }
    : r;
}
function no(e, t, r, n) {
  if (!r) return null;
  if (e < 0 && (t === null || (n !== null && t === 0))) return r + e;
  var o = (t === null ? -1 : t) + e;
  return o <= -1 || o >= r ? (n === null ? null : 0) : o;
}
function oo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function $l(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function Vl(e, t) {
  var r = [];
  return Promise.resolve(e(t)).then(function (n) {
    return Promise.all(
      n
        .filter(function (o) {
          return !!o;
        })
        .map(function (o) {
          if ((o.sourceId, r.includes(o.sourceId))) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(o.sourceId), " is not unique."));
          r.push(o.sourceId);
          var i = (function (a) {
            for (var c = 1; c < arguments.length; c++) {
              var u = arguments[c] != null ? arguments[c] : {};
              c % 2
                ? oo(Object(u), !0).forEach(function (l) {
                    $l(a, l, u[l]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u))
                : oo(Object(u)).forEach(function (l) {
                    Object.defineProperty(a, l, Object.getOwnPropertyDescriptor(u, l));
                  });
            }
            return a;
          })(
            {
              getItemInputValue: function (a) {
                return a.state.query;
              },
              getItemUrl: function () {},
              onSelect: function (a) {
                (0, a.setIsOpen)(!1);
              },
              onActive: Ia,
            },
            o
          );
          return Promise.resolve(i);
        })
    );
  });
}
function Se(e) {
  var t = (function (o) {
    var i = o.collections
      .map(function (a) {
        return a.items.length;
      })
      .reduce(function (a, c, u) {
        var l = (a[u - 1] || 0) + c;
        return a.push(l), a;
      }, [])
      .reduce(function (a, c) {
        return c <= o.activeItemId ? a + 1 : a;
      }, 0);
    return o.collections[i];
  })(e);
  if (!t) return null;
  var r =
      t.items[
        (function (o) {
          for (var i = o.state, a = o.collection, c = !1, u = 0, l = 0; c === !1; ) {
            var s = i.collections[u];
            if (s === a) {
              c = !0;
              break;
            }
            (l += s.items.length), u++;
          }
          return i.activeItemId - l;
        })({ state: e, collection: t })
      ],
    n = t.source;
  return { item: r, itemInputValue: n.getItemInputValue({ item: r, state: e }), itemUrl: n.getItemUrl({ item: r, state: e }), source: n };
}
var Wl = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function io(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? io(Object(r), !0).forEach(function (n) {
          zl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : io(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function zl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function ao(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Jl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function Ql(e, t, r) {
  var n,
    o = t.initialState;
  return {
    getState: function () {
      return o;
    },
    dispatch: function (i, a) {
      var c = (function (u) {
        for (var l = 1; l < arguments.length; l++) {
          var s = arguments[l] != null ? arguments[l] : {};
          l % 2
            ? ao(Object(s), !0).forEach(function (d) {
                Jl(u, d, s[d]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(s))
            : ao(Object(s)).forEach(function (d) {
                Object.defineProperty(u, d, Object.getOwnPropertyDescriptor(s, d));
              });
        }
        return u;
      })({}, o);
      (o = e(o, { type: i, props: t, payload: a })), r({ state: o, prevState: c });
    },
    pendingRequests:
      ((n = []),
      {
        add: function (i) {
          return (
            n.push(i),
            i.finally(function () {
              n = n.filter(function (a) {
                return a !== i;
              });
            })
          );
        },
        cancelAll: function () {
          n.forEach(function (i) {
            return i.cancel();
          });
        },
        isEmpty: function () {
          return n.length === 0;
        },
      }),
  };
}
function co(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? co(Object(r), !0).forEach(function (n) {
          Gl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : co(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Gl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function Zl(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return fr(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < "u" && t[Symbol.iterator] != null) || t["@@iterator"] != null) return Array.from(t);
    })(e) ||
    (function (t, r) {
      if (t) {
        if (typeof t == "string") return fr(t, r);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        if ((n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")) return Array.from(t);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fr(t, r);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function fr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uo(Object(r), !0).forEach(function (n) {
          Yl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : uo(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Yl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function lo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lo(Object(r), !0).forEach(function (n) {
          Aa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : lo(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Aa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function Xl(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return dr(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < "u" && t[Symbol.iterator] != null) || t["@@iterator"] != null) return Array.from(t);
    })(e) ||
    (function (t, r) {
      if (t) {
        if (typeof t == "string") return dr(t, r);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        if ((n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")) return Array.from(t);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dr(t, r);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function dr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function so(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? so(Object(r), !0).forEach(function (n) {
          es(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : so(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function es(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function yt(e) {
  return !!e.execute;
}
function ts(e, t) {
  return (
    (r = e),
    r != null && r.execute
      ? fo(
          fo({}, e),
          {},
          {
            requests: e.queries.map(function (n) {
              return { query: n, sourceId: t, transformResponse: e.transformResponse };
            }),
          }
        )
      : { items: e, sourceId: t }
  );
  var r;
}
function rs(e) {
  var t = e
    .reduce(function (r, n) {
      if (!yt(n)) return r.push(n), r;
      var o = n.searchClient,
        i = n.execute,
        a = n.requesterId,
        c = n.requests,
        u = r.find(function (d) {
          return yt(n) && yt(d) && d.searchClient === o && !!a && d.requesterId === a;
        });
      if (u) {
        var l;
        (l = u.items).push.apply(l, Xl(c));
      } else {
        var s = { execute: i, requesterId: a, items: c, searchClient: o };
        r.push(s);
      }
      return r;
    }, [])
    .map(function (r) {
      if (!yt(r)) return Promise.resolve(r);
      var n = r,
        o = n.execute,
        i = n.items;
      return o({ searchClient: n.searchClient, requests: i });
    });
  return Promise.all(t).then(function (r) {
    return it(r);
  });
}
function ns(e, t) {
  return t.map(function (r) {
    var n = e.filter(function (c) {
        return c.sourceId === r.sourceId;
      }),
      o = n.map(function (c) {
        return c.items;
      }),
      i = n[0].transformResponse,
      a = i
        ? i(
            (function (c) {
              var u = c.map(function (l) {
                var s;
                return vt(
                  vt({}, l),
                  {},
                  {
                    hits:
                      (s = l.hits) === null || s === void 0
                        ? void 0
                        : s.map(function (d) {
                            return vt(vt({}, d), {}, { __autocomplete_indexName: l.index, __autocomplete_queryID: l.queryID });
                          }),
                  }
                );
              });
              return {
                results: u,
                hits: u
                  .map(function (l) {
                    return l.hits;
                  })
                  .filter(Boolean),
                facetHits: u
                  .map(function (l) {
                    var s;
                    return (s = l.facetHits) === null || s === void 0
                      ? void 0
                      : s.map(function (d) {
                          return { label: d.value, count: d.count, _highlightResult: { label: { value: d.highlighted } } };
                        });
                  })
                  .filter(Boolean),
              };
            })(o)
          )
        : o;
    return (
      a.every(Boolean),
      'The `getItems` function from source "'.concat(r.sourceId, '" must return an array of items but returned ').concat(
        JSON.stringify(void 0),
        `.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`
      ),
      { source: r, items: a }
    );
  });
}
var os = ["event", "nextState", "props", "query", "refresh", "store"];
function po(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? po(Object(r), !0).forEach(function (n) {
          is(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : po(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function is(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function as(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
var ho,
  pr,
  bt,
  Ke = null,
  mo =
    ((ho = -1),
    (pr = -1),
    (bt = void 0),
    function (e) {
      var t = ++ho;
      return Promise.resolve(e).then(function (r) {
        return bt && t < pr ? bt : ((pr = t), (bt = r), r);
      });
    });
function we(e) {
  var t = e.event,
    r = e.nextState,
    n = r === void 0 ? {} : r,
    o = e.props,
    i = e.query,
    a = e.refresh,
    c = e.store,
    u = as(e, os);
  Ke && o.environment.clearTimeout(Ke);
  var l = u.setCollections,
    s = u.setIsOpen,
    d = u.setQuery,
    p = u.setActiveItemId,
    h = u.setStatus;
  if ((d(i), p(o.defaultActiveItemId), !i && o.openOnFocus === !1)) {
    var b,
      v = c.getState().collections.map(function (w) {
        return Be(Be({}, w), {}, { items: [] });
      });
    h("idle"), l(v), s((b = n.isOpen) !== null && b !== void 0 ? b : o.shouldPanelOpen({ state: c.getState() }));
    var m = ro(
      mo(v).then(function () {
        return Promise.resolve();
      })
    );
    return c.pendingRequests.add(m);
  }
  h("loading"),
    (Ke = o.environment.setTimeout(function () {
      h("stalled");
    }, o.stallThreshold));
  var _ = ro(
    mo(
      o.getSources(Be({ query: i, refresh: a, state: c.getState() }, u)).then(function (w) {
        return Promise.all(
          w.map(function (S) {
            return Promise.resolve(S.getItems(Be({ query: i, refresh: a, state: c.getState() }, u))).then(function (y) {
              return ts(y, S.sourceId);
            });
          })
        )
          .then(rs)
          .then(function (S) {
            return ns(S, w);
          })
          .then(function (S) {
            return (function (y) {
              var O = y.collections,
                g = y.props,
                E = y.state,
                P = O.reduce(function (j, k) {
                  return gt(
                    gt({}, j),
                    {},
                    Aa(
                      {},
                      k.source.sourceId,
                      gt(
                        gt({}, k.source),
                        {},
                        {
                          getItems: function () {
                            return it(k.items);
                          },
                        }
                      )
                    )
                  );
                }, {});
              return it(g.reshape({ sources: Object.values(P), sourcesBySourceId: P, state: E }))
                .filter(Boolean)
                .map(function (j) {
                  return { source: j, items: j.getItems() };
                });
            })({ collections: S, props: o, state: c.getState() });
          });
      })
    )
  )
    .then(function (w) {
      var S;
      h("idle"), l(w);
      var y = o.shouldPanelOpen({ state: c.getState() });
      s((S = n.isOpen) !== null && S !== void 0 ? S : (o.openOnFocus && !i && y) || y);
      var O = Se(c.getState());
      if (c.getState().activeItemId !== null && O) {
        var g = O.item,
          E = O.itemInputValue,
          P = O.itemUrl,
          j = O.source;
        j.onActive(Be({ event: t, item: g, itemInputValue: E, itemUrl: P, refresh: a, source: j, state: c.getState() }, u));
      }
    })
    .finally(function () {
      h("idle"), Ke && o.environment.clearTimeout(Ke);
    });
  return c.pendingRequests.add(_);
}
var cs = ["event", "props", "refresh", "store"];
function vo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vo(Object(r), !0).forEach(function (n) {
          us(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : vo(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function us(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function ls(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
var ss = ["props", "refresh", "store"],
  fs = ["inputElement", "formElement", "panelElement"],
  ds = ["inputElement"],
  ps = ["inputElement", "maxLength"],
  hs = ["item", "source"];
function _o(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _o(Object(r), !0).forEach(function (n) {
          ms(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : _o(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ms(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function $e(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
function vs(e) {
  var t = e.props,
    r = e.refresh,
    n = e.store,
    o = $e(e, ss);
  return {
    getEnvironmentProps: function (i) {
      var a = i.inputElement,
        c = i.formElement,
        u = i.panelElement;
      function l(s) {
        (!n.getState().isOpen && n.pendingRequests.isEmpty()) ||
          s.target === a ||
          ([c, u].some(function (d) {
            return (p = d), (h = s.target), p === h || p.contains(h);
            var p, h;
          }) === !1 &&
            (n.dispatch("blur", null), t.debug || n.pendingRequests.cancelAll()));
      }
      return H(
        {
          onTouchStart: l,
          onMouseDown: l,
          onTouchMove: function (s) {
            n.getState().isOpen !== !1 && a === t.environment.document.activeElement && s.target !== a && a.blur();
          },
        },
        $e(i, fs)
      );
    },
    getRootProps: function (i) {
      return H({ role: "combobox", "aria-expanded": n.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": n.getState().isOpen ? "".concat(t.id, "-list") : void 0, "aria-labelledby": "".concat(t.id, "-label") }, i);
    },
    getFormProps: function (i) {
      return (
        i.inputElement,
        H(
          {
            action: "",
            noValidate: !0,
            role: "search",
            onSubmit: function (a) {
              var c;
              a.preventDefault(), t.onSubmit(H({ event: a, refresh: r, state: n.getState() }, o)), n.dispatch("submit", null), (c = i.inputElement) === null || c === void 0 || c.blur();
            },
            onReset: function (a) {
              var c;
              a.preventDefault(), t.onReset(H({ event: a, refresh: r, state: n.getState() }, o)), n.dispatch("reset", null), (c = i.inputElement) === null || c === void 0 || c.focus();
            },
          },
          $e(i, ds)
        )
      );
    },
    getLabelProps: function (i) {
      return H({ htmlFor: "".concat(t.id, "-input"), id: "".concat(t.id, "-label") }, i);
    },
    getInputProps: function (i) {
      var a;
      function c(v) {
        (t.openOnFocus || n.getState().query) && we(H({ event: v, props: t, query: n.getState().completion || n.getState().query, refresh: r, store: n }, o)), n.dispatch("focus", null);
      }
      var u = i || {},
        l = (u.inputElement, u.maxLength),
        s = l === void 0 ? 512 : l,
        d = $e(u, ps),
        p = Se(n.getState()),
        h = (function (v) {
          return !!(v && v.match(Wl));
        })(((a = t.environment.navigator) === null || a === void 0 ? void 0 : a.userAgent) || ""),
        b = p != null && p.itemUrl && !h ? "go" : "search";
      return H(
        {
          "aria-autocomplete": "both",
          "aria-activedescendant": n.getState().isOpen && n.getState().activeItemId !== null ? "".concat(t.id, "-item-").concat(n.getState().activeItemId) : void 0,
          "aria-controls": n.getState().isOpen ? "".concat(t.id, "-list") : void 0,
          "aria-labelledby": "".concat(t.id, "-label"),
          value: n.getState().completion || n.getState().query,
          id: "".concat(t.id, "-input"),
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          enterKeyHint: b,
          spellCheck: "false",
          autoFocus: t.autoFocus,
          placeholder: t.placeholder,
          maxLength: s,
          type: "search",
          onChange: function (v) {
            we(H({ event: v, props: t, query: v.currentTarget.value.slice(0, s), refresh: r, store: n }, o));
          },
          onKeyDown: function (v) {
            (function (m) {
              var _ = m.event,
                w = m.props,
                S = m.refresh,
                y = m.store,
                O = ls(m, cs);
              if (_.key === "ArrowUp" || _.key === "ArrowDown") {
                var g = function () {
                    var q = w.environment.document.getElementById("".concat(w.id, "-item-").concat(y.getState().activeItemId));
                    q && (q.scrollIntoViewIfNeeded ? q.scrollIntoViewIfNeeded(!1) : q.scrollIntoView(!1));
                  },
                  E = function () {
                    var q = Se(y.getState());
                    if (y.getState().activeItemId !== null && q) {
                      var _e = q.item,
                        W = q.itemInputValue,
                        X = q.itemUrl,
                        Te = q.source;
                      Te.onActive(se({ event: _, item: _e, itemInputValue: W, itemUrl: X, refresh: S, source: Te, state: y.getState() }, O));
                    }
                  };
                _.preventDefault(),
                  y.getState().isOpen === !1 && (w.openOnFocus || y.getState().query)
                    ? we(se({ event: _, props: w, query: y.getState().query, refresh: S, store: y }, O)).then(function () {
                        y.dispatch(_.key, { nextActiveItemId: w.defaultActiveItemId }), E(), setTimeout(g, 0);
                      })
                    : (y.dispatch(_.key, {}), E(), g());
              } else if (_.key === "Escape") _.preventDefault(), y.dispatch(_.key, null), y.pendingRequests.cancelAll();
              else if (_.key === "Tab") y.dispatch("blur", null), y.pendingRequests.cancelAll();
              else if (_.key === "Enter") {
                if (
                  y.getState().activeItemId === null ||
                  y.getState().collections.every(function (q) {
                    return q.items.length === 0;
                  })
                )
                  return void (w.debug || y.pendingRequests.cancelAll());
                _.preventDefault();
                var P = Se(y.getState()),
                  j = P.item,
                  k = P.itemInputValue,
                  N = P.itemUrl,
                  F = P.source;
                if (_.metaKey || _.ctrlKey)
                  N !== void 0 && (F.onSelect(se({ event: _, item: j, itemInputValue: k, itemUrl: N, refresh: S, source: F, state: y.getState() }, O)), w.navigator.navigateNewTab({ itemUrl: N, item: j, state: y.getState() }));
                else if (_.shiftKey)
                  N !== void 0 && (F.onSelect(se({ event: _, item: j, itemInputValue: k, itemUrl: N, refresh: S, source: F, state: y.getState() }, O)), w.navigator.navigateNewWindow({ itemUrl: N, item: j, state: y.getState() }));
                else if (!_.altKey) {
                  if (N !== void 0) return F.onSelect(se({ event: _, item: j, itemInputValue: k, itemUrl: N, refresh: S, source: F, state: y.getState() }, O)), void w.navigator.navigate({ itemUrl: N, item: j, state: y.getState() });
                  we(se({ event: _, nextState: { isOpen: !1 }, props: w, query: k, refresh: S, store: y }, O)).then(function () {
                    F.onSelect(se({ event: _, item: j, itemInputValue: k, itemUrl: N, refresh: S, source: F, state: y.getState() }, O));
                  });
                }
              }
            })(H({ event: v, props: t, refresh: r, store: n }, o));
          },
          onFocus: c,
          onBlur: Ia,
          onClick: function (v) {
            i.inputElement !== t.environment.document.activeElement || n.getState().isOpen || c(v);
          },
        },
        d
      );
    },
    getPanelProps: function (i) {
      return H(
        {
          onMouseDown: function (a) {
            a.preventDefault();
          },
          onMouseLeave: function () {
            n.dispatch("mouseleave", null);
          },
        },
        i
      );
    },
    getListProps: function (i) {
      return H({ role: "listbox", "aria-labelledby": "".concat(t.id, "-label"), id: "".concat(t.id, "-list") }, i);
    },
    getItemProps: function (i) {
      var a = i.item,
        c = i.source,
        u = $e(i, hs);
      return H(
        {
          id: "".concat(t.id, "-item-").concat(a.__autocomplete_id),
          role: "option",
          "aria-selected": n.getState().activeItemId === a.__autocomplete_id,
          onMouseMove: function (l) {
            if (a.__autocomplete_id !== n.getState().activeItemId) {
              n.dispatch("mousemove", a.__autocomplete_id);
              var s = Se(n.getState());
              if (n.getState().activeItemId !== null && s) {
                var d = s.item,
                  p = s.itemInputValue,
                  h = s.itemUrl,
                  b = s.source;
                b.onActive(H({ event: l, item: d, itemInputValue: p, itemUrl: h, refresh: r, source: b, state: n.getState() }, o));
              }
            }
          },
          onMouseDown: function (l) {
            l.preventDefault();
          },
          onClick: function (l) {
            var s = c.getItemInputValue({ item: a, state: n.getState() }),
              d = c.getItemUrl({ item: a, state: n.getState() });
            (d ? Promise.resolve() : we(H({ event: l, nextState: { isOpen: !1 }, props: t, query: s, refresh: r, store: n }, o))).then(function () {
              c.onSelect(H({ event: l, item: a, itemInputValue: s, itemUrl: d, refresh: r, source: c, state: n.getState() }, o));
            });
          },
        },
        u
      );
    },
  };
}
function go(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function _s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? go(Object(r), !0).forEach(function (n) {
          Ca(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : go(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Ca(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function gs(e) {
  var t,
    r,
    n,
    o,
    i = e.plugins,
    a = e.options,
    c = (t = (((r = a.__autocomplete_metadata) === null || r === void 0 ? void 0 : r.userAgents) || [])[0]) === null || t === void 0 ? void 0 : t.segment,
    u = c ? Ca({}, c, Object.keys(((n = a.__autocomplete_metadata) === null || n === void 0 ? void 0 : n.options) || {})) : {};
  return {
    plugins: i.map(function (l) {
      return { name: l.name, options: Object.keys(l.__autocomplete_pluginOptions || []) };
    }),
    options: _s({ "autocomplete-core": Object.keys(a) }, u),
    ua: Kl.concat(((o = a.__autocomplete_metadata) === null || o === void 0 ? void 0 : o.userAgents) || []),
  };
}
function yo(e) {
  var t,
    r = e.state;
  return r.isOpen === !1 || r.activeItemId === null ? null : ((t = Se(r)) === null || t === void 0 ? void 0 : t.itemInputValue) || null;
}
function bo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bo(Object(r), !0).forEach(function (n) {
          ys(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : bo(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ys(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
var bs = function (e, t) {
  switch (t.type) {
    case "setActiveItemId":
    case "mousemove":
      return I(I({}, e), {}, { activeItemId: t.payload });
    case "setQuery":
      return I(I({}, e), {}, { query: t.payload, completion: null });
    case "setCollections":
      return I(I({}, e), {}, { collections: t.payload });
    case "setIsOpen":
      return I(I({}, e), {}, { isOpen: t.payload });
    case "setStatus":
      return I(I({}, e), {}, { status: t.payload });
    case "setContext":
      return I(I({}, e), {}, { context: I(I({}, e.context), t.payload) });
    case "ArrowDown":
      var r = I(I({}, e), {}, { activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : no(1, e.activeItemId, Ur(e), t.props.defaultActiveItemId) });
      return I(I({}, r), {}, { completion: yo({ state: r }) });
    case "ArrowUp":
      var n = I(I({}, e), {}, { activeItemId: no(-1, e.activeItemId, Ur(e), t.props.defaultActiveItemId) });
      return I(I({}, n), {}, { completion: yo({ state: n }) });
    case "Escape":
      return e.isOpen ? I(I({}, e), {}, { activeItemId: null, isOpen: !1, completion: null }) : I(I({}, e), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return I(I({}, e), {}, { activeItemId: null, isOpen: !1, status: "idle" });
    case "reset":
      return I(I({}, e), {}, { activeItemId: t.props.openOnFocus === !0 ? t.props.defaultActiveItemId : null, status: "idle", query: "" });
    case "focus":
      return I(I({}, e), {}, { activeItemId: t.props.defaultActiveItemId, isOpen: (t.props.openOnFocus || !!e.query) && t.props.shouldPanelOpen({ state: e }) });
    case "blur":
      return t.props.debug ? e : I(I({}, e), {}, { isOpen: !1, activeItemId: null });
    case "mouseleave":
      return I(I({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
    default:
      return "The reducer action ".concat(JSON.stringify(t.type), " is not supported."), e;
  }
};
function Oo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Oo(Object(r), !0).forEach(function (n) {
          Os(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Oo(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Os(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function ws(e) {
  var t = [],
    r = (function (c, u) {
      var l,
        s = typeof window < "u" ? window : {},
        d = c.plugins || [];
      return be(
        be(
          {
            debug: !1,
            openOnFocus: !1,
            placeholder: "",
            autoFocus: !1,
            defaultActiveItemId: null,
            stallThreshold: 300,
            environment: s,
            shouldPanelOpen: function (p) {
              return Ur(p.state) > 0;
            },
            reshape: function (p) {
              return p.sources;
            },
          },
          c
        ),
        {},
        {
          id: (l = c.id) !== null && l !== void 0 ? l : "autocomplete-".concat(Bl++),
          plugins: d,
          initialState: be({ activeItemId: null, query: "", completion: null, collections: [], isOpen: !1, status: "idle", context: {} }, c.initialState),
          onStateChange: function (p) {
            var h;
            (h = c.onStateChange) === null || h === void 0 || h.call(c, p),
              d.forEach(function (b) {
                var v;
                return (v = b.onStateChange) === null || v === void 0 ? void 0 : v.call(b, p);
              });
          },
          onSubmit: function (p) {
            var h;
            (h = c.onSubmit) === null || h === void 0 || h.call(c, p),
              d.forEach(function (b) {
                var v;
                return (v = b.onSubmit) === null || v === void 0 ? void 0 : v.call(b, p);
              });
          },
          onReset: function (p) {
            var h;
            (h = c.onReset) === null || h === void 0 || h.call(c, p),
              d.forEach(function (b) {
                var v;
                return (v = b.onReset) === null || v === void 0 ? void 0 : v.call(b, p);
              });
          },
          getSources: function (p) {
            return Promise.all(
              []
                .concat(
                  Zl(
                    d.map(function (h) {
                      return h.getSources;
                    })
                  ),
                  [c.getSources]
                )
                .filter(Boolean)
                .map(function (h) {
                  return Vl(h, p);
                })
            )
              .then(function (h) {
                return it(h);
              })
              .then(function (h) {
                return h.map(function (b) {
                  return be(
                    be({}, b),
                    {},
                    {
                      onSelect: function (v) {
                        b.onSelect(v),
                          u.forEach(function (m) {
                            var _;
                            return (_ = m.onSelect) === null || _ === void 0 ? void 0 : _.call(m, v);
                          });
                      },
                      onActive: function (v) {
                        b.onActive(v),
                          u.forEach(function (m) {
                            var _;
                            return (_ = m.onActive) === null || _ === void 0 ? void 0 : _.call(m, v);
                          });
                      },
                    }
                  );
                });
              });
          },
          navigator: be(
            {
              navigate: function (p) {
                var h = p.itemUrl;
                s.location.assign(h);
              },
              navigateNewTab: function (p) {
                var h = p.itemUrl,
                  b = s.open(h, "_blank", "noopener");
                b == null || b.focus();
              },
              navigateNewWindow: function (p) {
                var h = p.itemUrl;
                s.open(h, "_blank", "noopener");
              },
            },
            c.navigator
          ),
        }
      );
    })(e, t),
    n = Ql(bs, r, function (c) {
      var u = c.prevState,
        l = c.state;
      r.onStateChange(fe({ prevState: u, state: l, refresh: a }, o));
    }),
    o = (function (c) {
      var u = c.store;
      return {
        setActiveItemId: function (l) {
          u.dispatch("setActiveItemId", l);
        },
        setQuery: function (l) {
          u.dispatch("setQuery", l);
        },
        setCollections: function (l) {
          var s = 0,
            d = l.map(function (p) {
              return _t(
                _t({}, p),
                {},
                {
                  items: it(p.items).map(function (h) {
                    return _t(_t({}, h), {}, { __autocomplete_id: s++ });
                  }),
                }
              );
            });
          u.dispatch("setCollections", d);
        },
        setIsOpen: function (l) {
          u.dispatch("setIsOpen", l);
        },
        setStatus: function (l) {
          u.dispatch("setStatus", l);
        },
        setContext: function (l) {
          u.dispatch("setContext", l);
        },
      };
    })({ store: n }),
    i = vs(fe({ props: r, refresh: a, store: n }, o));
  function a() {
    return we(fe({ event: new Event("input"), nextState: { isOpen: n.getState().isOpen }, props: r, query: n.getState().query, refresh: a, store: n }, o));
  }
  return (
    r.plugins.forEach(function (c) {
      var u;
      return (u = c.subscribe) === null || u === void 0
        ? void 0
        : u.call(
            c,
            fe(
              fe({}, o),
              {},
              {
                refresh: a,
                onSelect: function (l) {
                  t.push({ onSelect: l });
                },
                onActive: function (l) {
                  t.push({ onActive: l });
                },
              }
            )
          );
    }),
    (function (c) {
      var u,
        l,
        s = c.metadata,
        d = c.environment;
      if (!((u = d.navigator) === null || u === void 0 || (l = u.userAgent) === null || l === void 0) && l.includes("Algolia Crawler")) {
        var p = d.document.createElement("meta"),
          h = d.document.querySelector("head");
        (p.name = "algolia:metadata"),
          setTimeout(function () {
            (p.content = JSON.stringify(s)), h.appendChild(p);
          }, 0);
      }
    })({ metadata: gs({ plugins: r.plugins, options: e }), environment: r.environment }),
    fe(fe({ refresh: a }, i), o)
  );
}
function Ss(e) {
  var t = e.translations,
    r = (t === void 0 ? {} : t).searchByText,
    n = r === void 0 ? "Search by" : r;
  return f.createElement(
    "a",
    { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" },
    f.createElement("span", { className: "DocSearch-Label" }, n),
    f.createElement(
      "svg",
      { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" },
      f.createElement("defs", null, f.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")),
      f.createElement("path", {
        className: "cls-2",
        d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z",
      }),
      f.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }),
      f.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }),
      f.createElement("path", {
        className: "cls-2",
        d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z",
      }),
      f.createElement("path", {
        className: "cls-2",
        d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z",
      }),
      f.createElement("path", {
        className: "cls-2",
        d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z",
      }),
      f.createElement("path", {
        className: "cls-2",
        d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z",
      }),
      f.createElement("path", {
        className: "cls-2",
        d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z",
      }),
      f.createElement("path", {
        className: "cls-1",
        d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z",
      })
    )
  );
}
function Ot(e) {
  return f.createElement(
    "svg",
    { width: "15", height: "15", "aria-label": e.ariaLabel, role: "img" },
    f.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e.children)
  );
}
function Es(e) {
  var t = e.translations,
    r = t === void 0 ? {} : t,
    n = r.selectText,
    o = n === void 0 ? "to select" : n,
    i = r.selectKeyAriaLabel,
    a = i === void 0 ? "Enter key" : i,
    c = r.navigateText,
    u = c === void 0 ? "to navigate" : c,
    l = r.navigateUpKeyAriaLabel,
    s = l === void 0 ? "Arrow up" : l,
    d = r.navigateDownKeyAriaLabel,
    p = d === void 0 ? "Arrow down" : d,
    h = r.closeText,
    b = h === void 0 ? "to close" : h,
    v = r.closeKeyAriaLabel,
    m = v === void 0 ? "Escape key" : v,
    _ = r.searchByText,
    w = _ === void 0 ? "Search by" : _;
  return f.createElement(
    f.Fragment,
    null,
    f.createElement("div", { className: "DocSearch-Logo" }, f.createElement(Ss, { translations: { searchByText: w } })),
    f.createElement(
      "ul",
      { className: "DocSearch-Commands" },
      f.createElement(
        "li",
        null,
        f.createElement("kbd", { className: "DocSearch-Commands-Key" }, f.createElement(Ot, { ariaLabel: a }, f.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))),
        f.createElement("span", { className: "DocSearch-Label" }, o)
      ),
      f.createElement(
        "li",
        null,
        f.createElement("kbd", { className: "DocSearch-Commands-Key" }, f.createElement(Ot, { ariaLabel: p }, f.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))),
        f.createElement("kbd", { className: "DocSearch-Commands-Key" }, f.createElement(Ot, { ariaLabel: s }, f.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))),
        f.createElement("span", { className: "DocSearch-Label" }, u)
      ),
      f.createElement(
        "li",
        null,
        f.createElement(
          "kbd",
          { className: "DocSearch-Commands-Key" },
          f.createElement(
            Ot,
            { ariaLabel: m },
            f.createElement("path", {
              d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956",
            })
          )
        ),
        f.createElement("span", { className: "DocSearch-Label" }, b)
      )
    )
  );
}
function xs(e) {
  var t = e.hit,
    r = e.children;
  return f.createElement("a", { href: t.url }, r);
}
function Ps() {
  return f.createElement(
    "svg",
    { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" },
    f.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      f.createElement(
        "g",
        { transform: "translate(1 1)", strokeWidth: "2" },
        f.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }),
        f.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, f.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" }))
      )
    )
  );
}
function js() {
  return f.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    f.createElement(
      "g",
      { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
      f.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }),
      f.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })
    )
  );
}
function Br() {
  return f.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    f.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" })
  );
}
function Is() {
  return f.createElement(
    "svg",
    { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" },
    f.createElement(
      "g",
      { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
      f.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }),
      f.createElement("path", { d: "M8 17l-6-6 6-6" })
    )
  );
}
var As = function () {
  return f.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    f.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" })
  );
};
function Cs(e) {
  switch (e.type) {
    case "lvl1":
      return f.createElement(As, null);
    case "content":
      return f.createElement(Ds, null);
    default:
      return f.createElement(ks, null);
  }
}
function ks() {
  return f.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    f.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" })
  );
}
function Ds() {
  return f.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, f.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function wo() {
  return f.createElement(
    "svg",
    { width: "20", height: "20", viewBox: "0 0 20 20" },
    f.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" })
  );
}
function Ts() {
  return f.createElement(
    "svg",
    { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" },
    f.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" })
  );
}
function Ns() {
  return f.createElement(
    "svg",
    { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" },
    f.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" })
  );
}
function Rs(e) {
  var t = e.translations,
    r = t === void 0 ? {} : t,
    n = r.titleText,
    o = n === void 0 ? "Unable to fetch results" : n,
    i = r.helpText,
    a = i === void 0 ? "You might want to check your network connection." : i;
  return f.createElement(
    "div",
    { className: "DocSearch-ErrorScreen" },
    f.createElement("div", { className: "DocSearch-Screen-Icon" }, f.createElement(Ts, null)),
    f.createElement("p", { className: "DocSearch-Title" }, o),
    f.createElement("p", { className: "DocSearch-Help" }, a)
  );
}
var Ms = ["translations"];
function Ls(e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return hr(t);
    })(e) ||
    (function (t) {
      if ((typeof Symbol < "u" && t[Symbol.iterator] != null) || t["@@iterator"] != null) return Array.from(t);
    })(e) ||
    (function (t, r) {
      if (t) {
        if (typeof t == "string") return hr(t, r);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        if ((n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")) return Array.from(t);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hr(t, r);
      }
    })(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function hr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fs(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
function qs(e) {
  var t = e.translations,
    r = t === void 0 ? {} : t,
    n = Fs(e, Ms),
    o = r.noResultsText,
    i = o === void 0 ? "No results for" : o,
    a = r.suggestedQueryText,
    c = a === void 0 ? "Try searching for" : a,
    u = r.reportMissingResultsText,
    l = u === void 0 ? "Believe this query should return results?" : u,
    s = r.reportMissingResultsLinkText,
    d = s === void 0 ? "Let us know." : s,
    p = n.state.context.searchSuggestions;
  return f.createElement(
    "div",
    { className: "DocSearch-NoResults" },
    f.createElement("div", { className: "DocSearch-Screen-Icon" }, f.createElement(Ns, null)),
    f.createElement("p", { className: "DocSearch-Title" }, i, ' "', f.createElement("strong", null, n.state.query), '"'),
    p &&
      p.length > 0 &&
      f.createElement(
        "div",
        { className: "DocSearch-NoResults-Prefill-List" },
        f.createElement("p", { className: "DocSearch-Help" }, c, ":"),
        f.createElement(
          "ul",
          null,
          p.slice(0, 3).reduce(function (h, b) {
            return [].concat(Ls(h), [
              f.createElement(
                "li",
                { key: b },
                f.createElement(
                  "button",
                  {
                    className: "DocSearch-Prefill",
                    key: b,
                    type: "button",
                    onClick: function () {
                      n.setQuery(b.toLowerCase() + " "), n.refresh(), n.inputRef.current.focus();
                    },
                  },
                  b
                )
              ),
            ]);
          }, [])
        )
      ),
    n.getMissingResultsUrl && f.createElement("p", { className: "DocSearch-Help" }, "".concat(l, " "), f.createElement("a", { href: n.getMissingResultsUrl({ query: n.state.query }), target: "_blank", rel: "noopener noreferrer" }, d))
  );
}
var Hs = ["hit", "attribute", "tagName"];
function So(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? So(Object(r), !0).forEach(function (n) {
          Us(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : So(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Us(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function Bs(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
function xo(e, t) {
  return t.split(".").reduce(function (r, n) {
    return r != null && r[n] ? r[n] : null;
  }, e);
}
function Oe(e) {
  var t = e.hit,
    r = e.attribute,
    n = e.tagName;
  return Z(n === void 0 ? "span" : n, Eo(Eo({}, Bs(e, Hs)), {}, { dangerouslySetInnerHTML: { __html: xo(t, "_snippetResult.".concat(r, ".value")) || xo(t, r) } }));
}
function Po(e, t) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(e) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
      if (o != null) {
        var i,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          for (o = o.call(r); !(u = (i = o.next()).done) && (c.push(i.value), !n || c.length !== n); u = !0);
        } catch (s) {
          (l = !0), (a = s);
        } finally {
          try {
            u || o.return == null || o.return();
          } finally {
            if (l) throw a;
          }
        }
        return c;
      }
    })(e, t) ||
    (function (r, n) {
      if (r) {
        if (typeof r == "string") return jo(r, n);
        var o = Object.prototype.toString.call(r).slice(8, -1);
        if ((o === "Object" && r.constructor && (o = r.constructor.name), o === "Map" || o === "Set")) return Array.from(r);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return jo(r, n);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function jo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Rt() {
  return (
    (Rt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Rt.apply(this, arguments)
  );
}
function Kr(e) {
  return e.collection && e.collection.items.length !== 0
    ? f.createElement(
        "section",
        { className: "DocSearch-Hits" },
        f.createElement("div", { className: "DocSearch-Hit-source" }, e.title),
        f.createElement(
          "ul",
          e.getListProps(),
          e.collection.items.map(function (t, r) {
            return f.createElement(Ks, Rt({ key: [e.title, t.objectID].join(":"), item: t, index: r }, e));
          })
        )
      )
    : null;
}
function Ks(e) {
  var t = e.item,
    r = e.index,
    n = e.renderIcon,
    o = e.renderAction,
    i = e.getItemProps,
    a = e.onItemClick,
    c = e.collection,
    u = e.hitComponent,
    l = Po(f.useState(!1), 2),
    s = l[0],
    d = l[1],
    p = Po(f.useState(!1), 2),
    h = p[0],
    b = p[1],
    v = f.useRef(null),
    m = u;
  return f.createElement(
    "li",
    Rt(
      {
        className: ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", s && "DocSearch-Hit--deleting", h && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "),
        onTransitionEnd: function () {
          v.current && v.current();
        },
      },
      i({
        item: t,
        source: c.source,
        onClick: function () {
          a(t);
        },
      })
    ),
    f.createElement(
      m,
      { hit: t },
      f.createElement(
        "div",
        { className: "DocSearch-Hit-Container" },
        n({ item: t, index: r }),
        t.hierarchy[t.type] &&
          t.type === "lvl1" &&
          f.createElement(
            "div",
            { className: "DocSearch-Hit-content-wrapper" },
            f.createElement(Oe, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.lvl1" }),
            t.content && f.createElement(Oe, { className: "DocSearch-Hit-path", hit: t, attribute: "content" })
          ),
        t.hierarchy[t.type] &&
          (t.type === "lvl2" || t.type === "lvl3" || t.type === "lvl4" || t.type === "lvl5" || t.type === "lvl6") &&
          f.createElement(
            "div",
            { className: "DocSearch-Hit-content-wrapper" },
            f.createElement(Oe, { className: "DocSearch-Hit-title", hit: t, attribute: "hierarchy.".concat(t.type) }),
            f.createElement(Oe, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })
          ),
        t.type === "content" &&
          f.createElement(
            "div",
            { className: "DocSearch-Hit-content-wrapper" },
            f.createElement(Oe, { className: "DocSearch-Hit-title", hit: t, attribute: "content" }),
            f.createElement(Oe, { className: "DocSearch-Hit-path", hit: t, attribute: "hierarchy.lvl1" })
          ),
        o({
          item: t,
          runDeleteTransition: function (_) {
            d(!0), (v.current = _);
          },
          runFavoriteTransition: function (_) {
            b(!0), (v.current = _);
          },
        })
      )
    )
  );
}
function Io(e, t) {
  return e.reduce(function (r, n) {
    var o = t(n);
    return r.hasOwnProperty(o) || (r[o] = []), r[o].length < 5 && r[o].push(n), r;
  }, {});
}
function Ao(e) {
  return e;
}
function $s() {}
var ka = /(<mark>|<\/mark>)/g,
  Vs = RegExp(ka.source);
function Da(e) {
  var t,
    r,
    n,
    o,
    i,
    a = e;
  if (!a.__docsearch_parent && !e._highlightResult) return e.hierarchy.lvl0;
  var c = (
    (a.__docsearch_parent
      ? (t = a.__docsearch_parent) === null || t === void 0 || (r = t._highlightResult) === null || r === void 0 || (n = r.hierarchy) === null || n === void 0
        ? void 0
        : n.lvl0
      : (o = e._highlightResult) === null || o === void 0 || (i = o.hierarchy) === null || i === void 0
      ? void 0
      : i.lvl0) || {}
  ).value;
  return c && Vs.test(c) ? c.replace(ka, "") : c;
}
function $r() {
  return (
    ($r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    $r.apply(this, arguments)
  );
}
function Ws(e) {
  return f.createElement(
    "div",
    { className: "DocSearch-Dropdown-Container" },
    e.state.collections.map(function (t) {
      if (t.items.length === 0) return null;
      var r = Da(t.items[0]);
      return f.createElement(
        Kr,
        $r({}, e, {
          key: t.source.sourceId,
          title: r,
          collection: t,
          renderIcon: function (n) {
            var o,
              i = n.item,
              a = n.index;
            return f.createElement(
              f.Fragment,
              null,
              i.__docsearch_parent &&
                f.createElement(
                  "svg",
                  { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" },
                  f.createElement(
                    "g",
                    { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" },
                    i.__docsearch_parent !== ((o = t.items[a + 1]) === null || o === void 0 ? void 0 : o.__docsearch_parent) ? f.createElement("path", { d: "M8 6v21M20 27H8.3" }) : f.createElement("path", { d: "M8 6v42M20 27H8.3" })
                  )
                ),
              f.createElement("div", { className: "DocSearch-Hit-icon" }, f.createElement(Cs, { type: i.type }))
            );
          },
          renderAction: function () {
            return f.createElement("div", { className: "DocSearch-Hit-action" }, f.createElement(Is, null));
          },
        })
      );
    }),
    e.resultsFooterComponent && f.createElement("section", { className: "DocSearch-HitsFooter" }, f.createElement(e.resultsFooterComponent, { state: e.state }))
  );
}
var zs = ["translations"];
function Mt() {
  return (
    (Mt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Mt.apply(this, arguments)
  );
}
function Js(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
function Qs(e) {
  var t = e.translations,
    r = t === void 0 ? {} : t,
    n = Js(e, zs),
    o = r.recentSearchesTitle,
    i = o === void 0 ? "Recent" : o,
    a = r.noRecentSearchesText,
    c = a === void 0 ? "No recent searches" : a,
    u = r.saveRecentSearchButtonTitle,
    l = u === void 0 ? "Save this search" : u,
    s = r.removeRecentSearchButtonTitle,
    d = s === void 0 ? "Remove this search from history" : s,
    p = r.favoriteSearchesTitle,
    h = p === void 0 ? "Favorite" : p,
    b = r.removeFavoriteSearchButtonTitle,
    v = b === void 0 ? "Remove this search from favorites" : b;
  return n.state.status === "idle" && n.hasCollections === !1
    ? n.disableUserPersonalization
      ? null
      : f.createElement("div", { className: "DocSearch-StartScreen" }, f.createElement("p", { className: "DocSearch-Help" }, c))
    : n.hasCollections === !1
    ? null
    : f.createElement(
        "div",
        { className: "DocSearch-Dropdown-Container" },
        f.createElement(
          Kr,
          Mt({}, n, {
            title: i,
            collection: n.state.collections[0],
            renderIcon: function () {
              return f.createElement("div", { className: "DocSearch-Hit-icon" }, f.createElement(js, null));
            },
            renderAction: function (m) {
              var _ = m.item,
                w = m.runFavoriteTransition,
                S = m.runDeleteTransition;
              return f.createElement(
                f.Fragment,
                null,
                f.createElement(
                  "div",
                  { className: "DocSearch-Hit-action" },
                  f.createElement(
                    "button",
                    {
                      className: "DocSearch-Hit-action-button",
                      title: l,
                      type: "submit",
                      onClick: function (y) {
                        y.preventDefault(),
                          y.stopPropagation(),
                          w(function () {
                            n.favoriteSearches.add(_), n.recentSearches.remove(_), n.refresh();
                          });
                      },
                    },
                    f.createElement(wo, null)
                  )
                ),
                f.createElement(
                  "div",
                  { className: "DocSearch-Hit-action" },
                  f.createElement(
                    "button",
                    {
                      className: "DocSearch-Hit-action-button",
                      title: d,
                      type: "submit",
                      onClick: function (y) {
                        y.preventDefault(),
                          y.stopPropagation(),
                          S(function () {
                            n.recentSearches.remove(_), n.refresh();
                          });
                      },
                    },
                    f.createElement(Br, null)
                  )
                )
              );
            },
          })
        ),
        f.createElement(
          Kr,
          Mt({}, n, {
            title: h,
            collection: n.state.collections[1],
            renderIcon: function () {
              return f.createElement("div", { className: "DocSearch-Hit-icon" }, f.createElement(wo, null));
            },
            renderAction: function (m) {
              var _ = m.item,
                w = m.runDeleteTransition;
              return f.createElement(
                "div",
                { className: "DocSearch-Hit-action" },
                f.createElement(
                  "button",
                  {
                    className: "DocSearch-Hit-action-button",
                    title: v,
                    type: "submit",
                    onClick: function (S) {
                      S.preventDefault(),
                        S.stopPropagation(),
                        w(function () {
                          n.favoriteSearches.remove(_), n.refresh();
                        });
                    },
                  },
                  f.createElement(Br, null)
                )
              );
            },
          })
        )
      );
}
var Gs = ["translations"];
function Lt() {
  return (
    (Lt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Lt.apply(this, arguments)
  );
}
function Zs(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
var Ys = f.memo(
    function (e) {
      var t = e.translations,
        r = t === void 0 ? {} : t,
        n = Zs(e, Gs);
      if (n.state.status === "error") return f.createElement(Rs, { translations: r == null ? void 0 : r.errorScreen });
      var o = n.state.collections.some(function (i) {
        return i.items.length > 0;
      });
      return n.state.query
        ? o === !1
          ? f.createElement(qs, Lt({}, n, { translations: r == null ? void 0 : r.noResultsScreen }))
          : f.createElement(Ws, n)
        : f.createElement(Qs, Lt({}, n, { hasCollections: o, translations: r == null ? void 0 : r.startScreen }));
    },
    function (e, t) {
      return t.state.status === "loading" || t.state.status === "stalled";
    }
  ),
  Xs = ["translations"];
function Ft() {
  return (
    (Ft =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ft.apply(this, arguments)
  );
}
function ef(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
function tf(e) {
  var t = e.translations,
    r = t === void 0 ? {} : t,
    n = ef(e, Xs),
    o = r.resetButtonTitle,
    i = o === void 0 ? "Clear the query" : o,
    a = r.resetButtonAriaLabel,
    c = a === void 0 ? "Clear the query" : a,
    u = r.cancelButtonText,
    l = u === void 0 ? "Cancel" : u,
    s = r.cancelButtonAriaLabel,
    d = s === void 0 ? "Cancel" : s,
    p = n.getFormProps({ inputElement: n.inputRef.current }).onReset;
  return (
    f.useEffect(
      function () {
        n.autoFocus && n.inputRef.current && n.inputRef.current.focus();
      },
      [n.autoFocus, n.inputRef]
    ),
    f.useEffect(
      function () {
        n.isFromSelection && n.inputRef.current && n.inputRef.current.select();
      },
      [n.isFromSelection, n.inputRef]
    ),
    f.createElement(
      f.Fragment,
      null,
      f.createElement(
        "form",
        {
          className: "DocSearch-Form",
          onSubmit: function (h) {
            h.preventDefault();
          },
          onReset: p,
        },
        f.createElement("label", Ft({ className: "DocSearch-MagnifierLabel" }, n.getLabelProps()), f.createElement(ja, null)),
        f.createElement("div", { className: "DocSearch-LoadingIndicator" }, f.createElement(Ps, null)),
        f.createElement("input", Ft({ className: "DocSearch-Input", ref: n.inputRef }, n.getInputProps({ inputElement: n.inputRef.current, autoFocus: n.autoFocus, maxLength: 64 }))),
        f.createElement("button", { type: "reset", title: i, className: "DocSearch-Reset", "aria-label": c, hidden: !n.state.query }, f.createElement(Br, null))
      ),
      f.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": d, onClick: n.onClose }, l)
    )
  );
}
var rf = ["_highlightResult", "_snippetResult"];
function nf(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
function of(e) {
  return (function () {
    var t = "__TEST_KEY__";
    try {
      return localStorage.setItem(t, ""), localStorage.removeItem(t), !0;
    } catch {
      return !1;
    }
  })() === !1
    ? {
        setItem: function () {},
        getItem: function () {
          return [];
        },
      }
    : {
        setItem: function (t) {
          return window.localStorage.setItem(e, JSON.stringify(t));
        },
        getItem: function () {
          var t = window.localStorage.getItem(e);
          return t ? JSON.parse(t) : [];
        },
      };
}
function Co(e) {
  var t = e.key,
    r = e.limit,
    n = r === void 0 ? 5 : r,
    o = of(t),
    i = o.getItem().slice(0, n);
  return {
    add: function (a) {
      var c = a,
        u = (c._highlightResult, c._snippetResult, nf(c, rf)),
        l = i.findIndex(function (s) {
          return s.objectID === u.objectID;
        });
      l > -1 && i.splice(l, 1), i.unshift(u), (i = i.slice(0, n)), o.setItem(i);
    },
    remove: function (a) {
      (i = i.filter(function (c) {
        return c.objectID !== a.objectID;
      })),
        o.setItem(i);
    },
    getAll: function () {
      return i;
    },
  };
}
var af = ["facetName", "facetQuery"];
function cf(e) {
  var t,
    r = "algoliasearch-client-js-".concat(e.key),
    n = function () {
      return t === void 0 && (t = e.localStorage || window.localStorage), t;
    },
    o = function () {
      return JSON.parse(n().getItem(r) || "{}");
    };
  return {
    get: function (i, a) {
      var c =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : {
              miss: function () {
                return Promise.resolve();
              },
            };
      return Promise.resolve()
        .then(function () {
          var u = JSON.stringify(i),
            l = o()[u];
          return Promise.all([l || a(), l !== void 0]);
        })
        .then(function (u) {
          var l = kt(u, 2),
            s = l[0],
            d = l[1];
          return Promise.all([s, d || c.miss(s)]);
        })
        .then(function (u) {
          return kt(u, 1)[0];
        });
    },
    set: function (i, a) {
      return Promise.resolve().then(function () {
        var c = o();
        return (c[JSON.stringify(i)] = a), n().setItem(r, JSON.stringify(c)), a;
      });
    },
    delete: function (i) {
      return Promise.resolve().then(function () {
        var a = o();
        delete a[JSON.stringify(i)], n().setItem(r, JSON.stringify(a));
      });
    },
    clear: function () {
      return Promise.resolve().then(function () {
        n().removeItem(r);
      });
    },
  };
}
function ze(e) {
  var t = Dt(e.caches),
    r = t.shift();
  return r === void 0
    ? {
        get: function (n, o) {
          var i =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return o()
            .then(function (a) {
              return Promise.all([a, i.miss(a)]);
            })
            .then(function (a) {
              return kt(a, 1)[0];
            });
        },
        set: function (n, o) {
          return Promise.resolve(o);
        },
        delete: function (n) {
          return Promise.resolve();
        },
        clear: function () {
          return Promise.resolve();
        },
      }
    : {
        get: function (n, o) {
          var i =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                };
          return r.get(n, o, i).catch(function () {
            return ze({ caches: t }).get(n, o, i);
          });
        },
        set: function (n, o) {
          return r.set(n, o).catch(function () {
            return ze({ caches: t }).set(n, o);
          });
        },
        delete: function (n) {
          return r.delete(n).catch(function () {
            return ze({ caches: t }).delete(n);
          });
        },
        clear: function () {
          return r.clear().catch(function () {
            return ze({ caches: t }).clear();
          });
        },
      };
}
function mr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 },
    t = {};
  return {
    get: function (r, n) {
      var o =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : {
                miss: function () {
                  return Promise.resolve();
                },
              },
        i = JSON.stringify(r);
      if (i in t) return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
      var a = n(),
        c =
          (o && o.miss) ||
          function () {
            return Promise.resolve();
          };
      return a
        .then(function (u) {
          return c(u);
        })
        .then(function () {
          return a;
        });
    },
    set: function (r, n) {
      return (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n), Promise.resolve(n);
    },
    delete: function (r) {
      return delete t[JSON.stringify(r)], Promise.resolve();
    },
    clear: function () {
      return (t = {}), Promise.resolve();
    },
  };
}
function uf(e) {
  for (var t = e.length - 1; t > 0; t--) {
    var r = Math.floor(Math.random() * (t + 1)),
      n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  return e;
}
function Ta(e, t) {
  return (
    t &&
      Object.keys(t).forEach(function (r) {
        e[r] = t[r](e);
      }),
    e
  );
}
function Yt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  var o = 0;
  return e.replace(/%s/g, function () {
    return encodeURIComponent(r[o++]);
  });
}
var xt = { WithinQueryParameters: 0, WithinHeaders: 1 };
function ko(e, t) {
  var r = e || {},
    n = r.data || {};
  return (
    Object.keys(r).forEach(function (o) {
      ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(o) === -1 && (n[o] = r[o]);
    }),
    { data: Object.entries(n).length > 0 ? n : void 0, timeout: r.timeout || t, headers: r.headers || {}, queryParameters: r.queryParameters || {}, cacheable: r.cacheable }
  );
}
var Ee = { Read: 1, Write: 2, Any: 3 },
  Na = 1,
  lf = 2,
  Ra = 3;
function Ma(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Na;
  return C(C({}, e), {}, { status: t, lastUpdate: Date.now() });
}
function La(e) {
  return typeof e == "string" ? { protocol: "https", url: e, accept: Ee.Any } : { protocol: e.protocol || "https", url: e.url, accept: e.accept || Ee.Any };
}
var Do = "GET",
  Xt = "POST";
function sf(e, t) {
  return Promise.all(
    t.map(function (r) {
      return e.get(r, function () {
        return Promise.resolve(Ma(r));
      });
    })
  ).then(function (r) {
    var n = r.filter(function (a) {
        return (function (c) {
          return c.status === Na || Date.now() - c.lastUpdate > 12e4;
        })(a);
      }),
      o = r.filter(function (a) {
        return (function (c) {
          return c.status === Ra && Date.now() - c.lastUpdate <= 12e4;
        })(a);
      }),
      i = [].concat(Dt(n), Dt(o));
    return {
      getTimeout: function (a, c) {
        return (o.length === 0 && a === 0 ? 1 : o.length + 3 + a) * c;
      },
      statelessHosts:
        i.length > 0
          ? i.map(function (a) {
              return La(a);
            })
          : t,
    };
  });
}
function To(e, t, r, n) {
  var o = [],
    i = (function (p, h) {
      if (!(p.method === Do || (p.data === void 0 && h.data === void 0))) {
        var b = Array.isArray(p.data) ? p.data : C(C({}, p.data), h.data);
        return JSON.stringify(b);
      }
    })(r, n),
    a = (function (p, h) {
      var b = C(C({}, p.headers), h.headers),
        v = {};
      return (
        Object.keys(b).forEach(function (m) {
          var _ = b[m];
          v[m.toLowerCase()] = _;
        }),
        v
      );
    })(e, n),
    c = r.method,
    u = r.method !== Do ? {} : C(C({}, r.data), n.data),
    l = C(C(C({ "x-algolia-agent": e.userAgent.value }, e.queryParameters), u), n.queryParameters),
    s = 0,
    d = function p(h, b) {
      var v = h.pop();
      if (v === void 0) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: No(o) };
      var m = { data: i, headers: a, method: c, url: df(v, r.path, l), connectTimeout: b(s, e.timeouts.connect), responseTimeout: b(s, n.timeout) },
        _ = function (S) {
          var y = { request: m, response: S, host: v, triesLeft: h.length };
          return o.push(y), y;
        },
        w = {
          onSucess: function (S) {
            return (function (y) {
              try {
                return JSON.parse(y.content);
              } catch (O) {
                throw (function (g, E) {
                  return { name: "DeserializationError", message: g, response: E };
                })(O.message, y);
              }
            })(S);
          },
          onRetry: function (S) {
            var y = _(S);
            return (
              S.isTimedOut && s++,
              Promise.all([e.logger.info("Retryable failure", qa(y)), e.hostsCache.set(v, Ma(v, S.isTimedOut ? Ra : lf))]).then(function () {
                return p(h, b);
              })
            );
          },
          onFail: function (S) {
            throw (
              (_(S),
              (function (y, O) {
                var g = y.content,
                  E = y.status,
                  P = g;
                try {
                  P = JSON.parse(g).message;
                } catch {}
                return (function (j, k, N) {
                  return { name: "ApiError", message: j, status: k, transporterStackTrace: N };
                })(P, E, O);
              })(S, No(o)))
            );
          },
        };
      return e.requester.send(m).then(function (S) {
        return (function (y, O) {
          return (function (g) {
            var E = g.status;
            return (
              g.isTimedOut ||
              (function (P) {
                var j = P.isTimedOut,
                  k = P.status;
                return !j && ~~k == 0;
              })(g) ||
              (~~(E / 100) != 2 && ~~(E / 100) != 4)
            );
          })(y)
            ? O.onRetry(y)
            : ~~(y.status / 100) == 2
            ? O.onSucess(y)
            : O.onFail(y);
        })(S, w);
      });
    };
  return sf(e.hostsCache, t).then(function (p) {
    return d(Dt(p.statelessHosts).reverse(), p.getTimeout);
  });
}
function ff(e) {
  var t = {
    value: "Algolia for JavaScript (".concat(e, ")"),
    add: function (r) {
      var n = "; ".concat(r.segment).concat(r.version !== void 0 ? " (".concat(r.version, ")") : "");
      return t.value.indexOf(n) === -1 && (t.value = "".concat(t.value).concat(n)), t;
    },
  };
  return t;
}
function df(e, t, r) {
  var n = Fa(r),
    o = ""
      .concat(e.protocol, "://")
      .concat(e.url, "/")
      .concat(t.charAt(0) === "/" ? t.substr(1) : t);
  return n.length && (o += "?".concat(n)), o;
}
function Fa(e) {
  return Object.keys(e)
    .map(function (t) {
      return Yt("%s=%s", t, ((r = e[t]), Object.prototype.toString.call(r) === "[object Object]" || Object.prototype.toString.call(r) === "[object Array]" ? JSON.stringify(e[t]) : e[t]));
      var r;
    })
    .join("&");
}
function No(e) {
  return e.map(function (t) {
    return qa(t);
  });
}
function qa(e) {
  var t = e.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return C(C({}, e), {}, { request: C(C({}, e.request), {}, { headers: C(C({}, e.request.headers), t) }) });
}
var pf = function (e) {
    var t = e.appId,
      r = (function (i, a, c) {
        var u = { "x-algolia-api-key": c, "x-algolia-application-id": a };
        return {
          headers: function () {
            return i === xt.WithinHeaders ? u : {};
          },
          queryParameters: function () {
            return i === xt.WithinQueryParameters ? u : {};
          },
        };
      })(e.authMode !== void 0 ? e.authMode : xt.WithinHeaders, t, e.apiKey),
      n = (function (i) {
        var a = i.hostsCache,
          c = i.logger,
          u = i.requester,
          l = i.requestsCache,
          s = i.responsesCache,
          d = i.timeouts,
          p = i.userAgent,
          h = i.hosts,
          b = i.queryParameters,
          v = {
            hostsCache: a,
            logger: c,
            requester: u,
            requestsCache: l,
            responsesCache: s,
            timeouts: d,
            userAgent: p,
            headers: i.headers,
            queryParameters: b,
            hosts: h.map(function (m) {
              return La(m);
            }),
            read: function (m, _) {
              var w = ko(_, v.timeouts.read),
                S = function () {
                  return To(
                    v,
                    v.hosts.filter(function (O) {
                      return (O.accept & Ee.Read) != 0;
                    }),
                    m,
                    w
                  );
                };
              if ((w.cacheable !== void 0 ? w.cacheable : m.cacheable) !== !0) return S();
              var y = { request: m, mappedRequestOptions: w, transporter: { queryParameters: v.queryParameters, headers: v.headers } };
              return v.responsesCache.get(
                y,
                function () {
                  return v.requestsCache.get(y, function () {
                    return v.requestsCache
                      .set(y, S())
                      .then(
                        function (O) {
                          return Promise.all([v.requestsCache.delete(y), O]);
                        },
                        function (O) {
                          return Promise.all([v.requestsCache.delete(y), Promise.reject(O)]);
                        }
                      )
                      .then(function (O) {
                        var g = kt(O, 2);
                        return g[0], g[1];
                      });
                  });
                },
                {
                  miss: function (O) {
                    return v.responsesCache.set(y, O);
                  },
                }
              );
            },
            write: function (m, _) {
              return To(
                v,
                v.hosts.filter(function (w) {
                  return (w.accept & Ee.Write) != 0;
                }),
                m,
                ko(_, v.timeouts.write)
              );
            },
          };
        return v;
      })(
        C(
          C(
            {
              hosts: [
                { url: "".concat(t, "-dsn.algolia.net"), accept: Ee.Read },
                { url: "".concat(t, ".algolia.net"), accept: Ee.Write },
              ].concat(uf([{ url: "".concat(t, "-1.algolianet.com") }, { url: "".concat(t, "-2.algolianet.com") }, { url: "".concat(t, "-3.algolianet.com") }])),
            },
            e
          ),
          {},
          { headers: C(C(C({}, r.headers()), { "content-type": "application/x-www-form-urlencoded" }), e.headers), queryParameters: C(C({}, r.queryParameters()), e.queryParameters) }
        )
      ),
      o = {
        transporter: n,
        appId: t,
        addAlgoliaAgent: function (i, a) {
          n.userAgent.add({ segment: i, version: a });
        },
        clearCache: function () {
          return Promise.all([n.requestsCache.clear(), n.responsesCache.clear()]).then(function () {});
        },
      };
    return Ta(o, e.methods);
  },
  Ha = function (e) {
    return function (t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = { transporter: e.transporter, appId: e.appId, indexName: t };
      return Ta(n, r.methods);
    };
  },
  Ro = function (e) {
    return function (t, r) {
      var n = t.map(function (o) {
        return C(C({}, o), {}, { params: Fa(o.params || {}) });
      });
      return e.transporter.read({ method: Xt, path: "1/indexes/*/queries", data: { requests: n }, cacheable: !0 }, r);
    };
  },
  Mo = function (e) {
    return function (t, r) {
      return Promise.all(
        t.map(function (n) {
          var o = n.params,
            i = o.facetName,
            a = o.facetQuery,
            c = bl(o, af);
          return Ha(e)(n.indexName, { methods: { searchForFacetValues: Ua } }).searchForFacetValues(i, a, C(C({}, r), c));
        })
      );
    };
  },
  hf = function (e) {
    return function (t, r, n) {
      return e.transporter.read({ method: Xt, path: Yt("1/answers/%s/prediction", e.indexName), data: { query: t, queryLanguages: r }, cacheable: !0 }, n);
    };
  },
  mf = function (e) {
    return function (t, r) {
      return e.transporter.read({ method: Xt, path: Yt("1/indexes/%s/query", e.indexName), data: { query: t }, cacheable: !0 }, r);
    };
  },
  Ua = function (e) {
    return function (t, r, n) {
      return e.transporter.read({ method: Xt, path: Yt("1/indexes/%s/facets/%s/query", e.indexName, t), data: { facetQuery: r }, cacheable: !0 }, n);
    };
  },
  vf = 1,
  _f = 2,
  gf = 3;
function Ba(e, t, r) {
  var n,
    o = {
      appId: e,
      apiKey: t,
      timeouts: { connect: 1, read: 2, write: 30 },
      requester: {
        send: function (i) {
          return new Promise(function (a) {
            var c = new XMLHttpRequest();
            c.open(i.method, i.url, !0),
              Object.keys(i.headers).forEach(function (d) {
                return c.setRequestHeader(d, i.headers[d]);
              });
            var u,
              l = function (d, p) {
                return setTimeout(function () {
                  c.abort(), a({ status: 0, content: p, isTimedOut: !0 });
                }, 1e3 * d);
              },
              s = l(i.connectTimeout, "Connection timeout");
            (c.onreadystatechange = function () {
              c.readyState > c.OPENED && u === void 0 && (clearTimeout(s), (u = l(i.responseTimeout, "Socket timeout")));
            }),
              (c.onerror = function () {
                c.status === 0 && (clearTimeout(s), clearTimeout(u), a({ content: c.responseText || "Network request failed", status: c.status, isTimedOut: !1 }));
              }),
              (c.onload = function () {
                clearTimeout(s), clearTimeout(u), a({ content: c.responseText, status: c.status, isTimedOut: !1 });
              }),
              c.send(i.data);
          });
        },
      },
      logger:
        ((n = gf),
        {
          debug: function (i, a) {
            return vf >= n && console.debug(i, a), Promise.resolve();
          },
          info: function (i, a) {
            return _f >= n && console.info(i, a), Promise.resolve();
          },
          error: function (i, a) {
            return console.error(i, a), Promise.resolve();
          },
        }),
      responsesCache: mr(),
      requestsCache: mr({ serializable: !1 }),
      hostsCache: ze({ caches: [cf({ key: "".concat("4.8.5", "-").concat(e) }), mr()] }),
      userAgent: ff("4.8.5").add({ segment: "Browser", version: "lite" }),
      authMode: xt.WithinQueryParameters,
    };
  return pf(
    C(
      C(C({}, o), r),
      {},
      {
        methods: {
          search: Ro,
          searchForFacetValues: Mo,
          multipleQueries: Ro,
          multipleSearchForFacetValues: Mo,
          initIndex: function (i) {
            return function (a) {
              return Ha(i)(a, { methods: { search: mf, searchForFacetValues: Ua, findAnswers: hf } });
            };
          },
        },
      }
    )
  );
}
Ba.version = "4.8.5";
var yf = ["footer", "searchBox"];
function Xe() {
  return (
    (Xe =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Xe.apply(this, arguments)
  );
}
function Lo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function vr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lo(Object(r), !0).forEach(function (n) {
          bf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Lo(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function bf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function Of(e, t) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(e) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
      if (o != null) {
        var i,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          for (o = o.call(r); !(u = (i = o.next()).done) && (c.push(i.value), !n || c.length !== n); u = !0);
        } catch (s) {
          (l = !0), (a = s);
        } finally {
          try {
            u || o.return == null || o.return();
          } finally {
            if (l) throw a;
          }
        }
        return c;
      }
    })(e, t) ||
    (function (r, n) {
      if (r) {
        if (typeof r == "string") return Fo(r, n);
        var o = Object.prototype.toString.call(r).slice(8, -1);
        if ((o === "Object" && r.constructor && (o = r.constructor.name), o === "Map" || o === "Set")) return Array.from(r);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Fo(r, n);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Fo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wf(e, t) {
  if (e == null) return {};
  var r,
    n,
    o = (function (a, c) {
      if (a == null) return {};
      var u,
        l,
        s = {},
        d = Object.keys(a);
      for (l = 0; l < d.length; l++) (u = d[l]), c.indexOf(u) >= 0 || (s[u] = a[u]);
      return s;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
  }
  return o;
}
function Sf(e) {
  var t = e.appId,
    r = e.apiKey,
    n = e.indexName,
    o = e.placeholder,
    i = o === void 0 ? "Search docs" : o,
    a = e.searchParameters,
    c = e.onClose,
    u = c === void 0 ? $s : c,
    l = e.transformItems,
    s = l === void 0 ? Ao : l,
    d = e.hitComponent,
    p = d === void 0 ? xs : d,
    h = e.resultsFooterComponent,
    b =
      h === void 0
        ? function () {
            return null;
          }
        : h,
    v = e.navigator,
    m = e.initialScrollY,
    _ = m === void 0 ? 0 : m,
    w = e.transformSearchClient,
    S = w === void 0 ? Ao : w,
    y = e.disableUserPersonalization,
    O = y !== void 0 && y,
    g = e.initialQuery,
    E = g === void 0 ? "" : g,
    P = e.translations,
    j = P === void 0 ? {} : P,
    k = e.getMissingResultsUrl,
    N = j.footer,
    F = j.searchBox,
    q = wf(j, yf),
    _e = Of(f.useState({ query: "", collections: [], completion: null, context: {}, isOpen: !1, activeItemId: null, status: "idle" }), 2),
    W = _e[0],
    X = _e[1],
    Te = f.useRef(null),
    rr = f.useRef(null),
    gn = f.useRef(null),
    ft = f.useRef(null),
    Ne = f.useRef(null),
    ne = f.useRef(10),
    yn = f.useRef(typeof window < "u" ? window.getSelection().toString().slice(0, 64) : "").current,
    le = f.useRef(E || yn).current,
    bn = (function (A, T, K) {
      return f.useMemo(
        function () {
          var $ = Ba(A, T);
          return $.addAlgoliaAgent("docsearch", "3.3.3"), /docsearch.js \(.*\)/.test($.transporter.userAgent.value) === !1 && $.addAlgoliaAgent("docsearch-react", "3.3.3"), K($);
        },
        [A, T, K]
      );
    })(t, r, S),
    ge = f.useRef(Co({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(n), limit: 10 })).current,
    Re = f.useRef(Co({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(n), limit: ge.getAll().length === 0 ? 7 : 4 })).current,
    Me = f.useCallback(
      function (A) {
        if (!O) {
          var T = A.type === "content" ? A.__docsearch_parent : A;
          T &&
            ge.getAll().findIndex(function (K) {
              return K.objectID === T.objectID;
            }) === -1 &&
            Re.add(T);
        }
      },
      [ge, Re, O]
    ),
    Le = f.useMemo(
      function () {
        return ws({
          id: "docsearch",
          defaultActiveItemId: 0,
          placeholder: i,
          openOnFocus: !0,
          initialState: { query: le, context: { searchSuggestions: [] } },
          navigator: v,
          onStateChange: function (A) {
            X(A.state);
          },
          getSources: function (A) {
            var T = A.query,
              K = A.state,
              $ = A.setContext,
              oe = A.setStatus;
            return T
              ? bn
                  .search([
                    {
                      query: T,
                      indexName: n,
                      params: vr(
                        {
                          attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"],
                          attributesToSnippet: [
                            "hierarchy.lvl1:".concat(ne.current),
                            "hierarchy.lvl2:".concat(ne.current),
                            "hierarchy.lvl3:".concat(ne.current),
                            "hierarchy.lvl4:".concat(ne.current),
                            "hierarchy.lvl5:".concat(ne.current),
                            "hierarchy.lvl6:".concat(ne.current),
                            "content:".concat(ne.current),
                          ],
                          snippetEllipsisText: "…",
                          highlightPreTag: "<mark>",
                          highlightPostTag: "</mark>",
                          hitsPerPage: 20,
                        },
                        a
                      ),
                    },
                  ])
                  .catch(function (R) {
                    throw (R.name === "RetryError" && oe("error"), R);
                  })
                  .then(function (R) {
                    var V = R.results[0],
                      z = V.hits,
                      Ga = V.nbHits,
                      nr = Io(z, function (or) {
                        return Da(or);
                      });
                    return (
                      K.context.searchSuggestions.length < Object.keys(nr).length && $({ searchSuggestions: Object.keys(nr) }),
                      $({ nbHits: Ga }),
                      Object.values(nr).map(function (or, Za) {
                        return {
                          sourceId: "hits".concat(Za),
                          onSelect: function (ee) {
                            var Fe = ee.item,
                              ye = ee.event;
                            Me(Fe), ye.shiftKey || ye.ctrlKey || ye.metaKey || u();
                          },
                          getItemUrl: function (ee) {
                            return ee.item.url;
                          },
                          getItems: function () {
                            return Object.values(
                              Io(or, function (ee) {
                                return ee.hierarchy.lvl1;
                              })
                            )
                              .map(s)
                              .map(function (ee) {
                                return ee.map(function (Fe) {
                                  return vr(
                                    vr({}, Fe),
                                    {},
                                    {
                                      __docsearch_parent:
                                        Fe.type !== "lvl1" &&
                                        ee.find(function (ye) {
                                          return ye.type === "lvl1" && ye.hierarchy.lvl1 === Fe.hierarchy.lvl1;
                                        }),
                                    }
                                  );
                                });
                              })
                              .flat();
                          },
                        };
                      })
                    );
                  })
              : O
              ? []
              : [
                  {
                    sourceId: "recentSearches",
                    onSelect: function (R) {
                      var V = R.item,
                        z = R.event;
                      Me(V), z.shiftKey || z.ctrlKey || z.metaKey || u();
                    },
                    getItemUrl: function (R) {
                      return R.item.url;
                    },
                    getItems: function () {
                      return Re.getAll();
                    },
                  },
                  {
                    sourceId: "favoriteSearches",
                    onSelect: function (R) {
                      var V = R.item,
                        z = R.event;
                      Me(V), z.shiftKey || z.ctrlKey || z.metaKey || u();
                    },
                    getItemUrl: function (R) {
                      return R.item.url;
                    },
                    getItems: function () {
                      return ge.getAll();
                    },
                  },
                ];
          },
        });
      },
      [n, a, bn, u, Re, ge, Me, le, i, v, s, O]
    ),
    Ja = Le.getEnvironmentProps,
    Qa = Le.getRootProps,
    On = Le.refresh;
  return (
    (function (A) {
      var T = A.getEnvironmentProps,
        K = A.panelElement,
        $ = A.formElement,
        oe = A.inputElement;
      f.useEffect(
        function () {
          if (K && $ && oe) {
            var R = T({ panelElement: K, formElement: $, inputElement: oe }),
              V = R.onTouchStart,
              z = R.onTouchMove;
            return (
              window.addEventListener("touchstart", V),
              window.addEventListener("touchmove", z),
              function () {
                window.removeEventListener("touchstart", V), window.removeEventListener("touchmove", z);
              }
            );
          }
        },
        [T, K, $, oe]
      );
    })({ getEnvironmentProps: Ja, panelElement: ft.current, formElement: gn.current, inputElement: Ne.current }),
    (function (A) {
      var T = A.container;
      f.useEffect(
        function () {
          if (T) {
            var K = T.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),
              $ = K[0],
              oe = K[K.length - 1];
            return (
              T.addEventListener("keydown", R),
              function () {
                T.removeEventListener("keydown", R);
              }
            );
          }
          function R(V) {
            V.key === "Tab" && (V.shiftKey ? document.activeElement === $ && (V.preventDefault(), oe.focus()) : document.activeElement === oe && (V.preventDefault(), $.focus()));
          }
        },
        [T]
      );
    })({ container: Te.current }),
    f.useEffect(function () {
      return (
        document.body.classList.add("DocSearch--active"),
        function () {
          var A, T;
          document.body.classList.remove("DocSearch--active"), (A = (T = window).scrollTo) === null || A === void 0 || A.call(T, 0, _);
        }
      );
    }, []),
    f.useEffect(function () {
      window.matchMedia("(max-width: 768px)").matches && (ne.current = 5);
    }, []),
    f.useEffect(
      function () {
        ft.current && (ft.current.scrollTop = 0);
      },
      [W.query]
    ),
    f.useEffect(
      function () {
        le.length > 0 && (On(), Ne.current && Ne.current.focus());
      },
      [le, On]
    ),
    f.useEffect(function () {
      function A() {
        if (rr.current) {
          var T = 0.01 * window.innerHeight;
          rr.current.style.setProperty("--docsearch-vh", "".concat(T, "px"));
        }
      }
      return (
        A(),
        window.addEventListener("resize", A),
        function () {
          window.removeEventListener("resize", A);
        }
      );
    }, []),
    f.createElement(
      "div",
      Xe({ ref: Te }, Qa({ "aria-expanded": !0 }), {
        className: ["DocSearch", "DocSearch-Container", W.status === "stalled" && "DocSearch-Container--Stalled", W.status === "error" && "DocSearch-Container--Errored"].filter(Boolean).join(" "),
        role: "button",
        tabIndex: 0,
        onMouseDown: function (A) {
          A.target === A.currentTarget && u();
        },
      }),
      f.createElement(
        "div",
        { className: "DocSearch-Modal", ref: rr },
        f.createElement("header", { className: "DocSearch-SearchBar", ref: gn }, f.createElement(tf, Xe({}, Le, { state: W, autoFocus: le.length === 0, inputRef: Ne, isFromSelection: !!le && le === yn, translations: F, onClose: u }))),
        f.createElement(
          "div",
          { className: "DocSearch-Dropdown", ref: ft },
          f.createElement(
            Ys,
            Xe({}, Le, {
              indexName: n,
              state: W,
              hitComponent: p,
              resultsFooterComponent: b,
              disableUserPersonalization: O,
              recentSearches: Re,
              favoriteSearches: ge,
              inputRef: Ne,
              translations: q,
              getMissingResultsUrl: k,
              onItemClick: function (A) {
                Me(A), u();
              },
            })
          )
        ),
        f.createElement("footer", { className: "DocSearch-Footer" }, f.createElement(Es, { translations: N }))
      )
    )
  );
}
function Vr() {
  return (
    (Vr =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Vr.apply(this, arguments)
  );
}
function qo(e, t) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(e) ||
    (function (r, n) {
      var o = r == null ? null : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
      if (o != null) {
        var i,
          a,
          c = [],
          u = !0,
          l = !1;
        try {
          for (o = o.call(r); !(u = (i = o.next()).done) && (c.push(i.value), !n || c.length !== n); u = !0);
        } catch (s) {
          (l = !0), (a = s);
        } finally {
          try {
            u || o.return == null || o.return();
          } finally {
            if (l) throw a;
          }
        }
        return c;
      }
    })(e, t) ||
    (function (r, n) {
      if (r) {
        if (typeof r == "string") return Ho(r, n);
        var o = Object.prototype.toString.call(r).slice(8, -1);
        if ((o === "Object" && r.constructor && (o = r.constructor.name), o === "Map" || o === "Set")) return Array.from(r);
        if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Ho(r, n);
      }
    })(e, t) ||
    (function () {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Ho(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ef(e) {
  var t,
    r,
    n = f.useRef(null),
    o = qo(f.useState(!1), 2),
    i = o[0],
    a = o[1],
    c = qo(f.useState((e == null ? void 0 : e.initialQuery) || void 0), 2),
    u = c[0],
    l = c[1],
    s = f.useCallback(
      function () {
        a(!0);
      },
      [a]
    ),
    d = f.useCallback(
      function () {
        a(!1);
      },
      [a]
    );
  return (
    (function (p) {
      var h = p.isOpen,
        b = p.onOpen,
        v = p.onClose,
        m = p.onInput,
        _ = p.searchButtonRef;
      f.useEffect(
        function () {
          function w(S) {
            ((S.keyCode === 27 && h) ||
              (S.key.toLowerCase() === "k" && (S.metaKey || S.ctrlKey)) ||
              (!(function (y) {
                var O = y.target,
                  g = O.tagName;
                return O.isContentEditable || g === "INPUT" || g === "SELECT" || g === "TEXTAREA";
              })(S) &&
                S.key === "/" &&
                !h)) &&
              (S.preventDefault(), h ? v() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || b()),
              _ && _.current === document.activeElement && m && /[a-zA-Z0-9]/.test(String.fromCharCode(S.keyCode)) && m(S);
          }
          return (
            window.addEventListener("keydown", w),
            function () {
              window.removeEventListener("keydown", w);
            }
          );
        },
        [h, b, v, m, _]
      );
    })({
      isOpen: i,
      onOpen: s,
      onClose: d,
      onInput: f.useCallback(
        function (p) {
          a(!0), l(p.key);
        },
        [a, l]
      ),
      searchButtonRef: n,
    }),
    f.createElement(
      f.Fragment,
      null,
      f.createElement(Ul, { ref: n, translations: e == null || (t = e.translations) === null || t === void 0 ? void 0 : t.button, onClick: s }),
      i && Sa(f.createElement(Sf, Vr({}, e, { initialScrollY: window.scrollY, initialQuery: u, translations: e == null || (r = e.translations) === null || r === void 0 ? void 0 : r.modal, onClose: d })), document.body)
    )
  );
}
function xf(e) {
  xa(
    f.createElement(
      Ef,
      Tr({}, e, {
        transformSearchClient: function (t) {
          return t.addAlgoliaAgent("docsearch.js", "3.3.3"), e.transformSearchClient ? e.transformSearchClient(t) : t;
        },
      })
    ),
    (function (t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
      return typeof t == "string" ? r.document.querySelector(t) : t;
    })(e.container, e.environment)
  );
}
/*! instant.page v5.2.0 - (C) 2019-2023 Alexandre Dieulot - https://instant.page/license */ let Pt = null,
  Ka,
  $a,
  Va,
  Wa = 65,
  _n,
  et,
  Uo = new Set();
const za = 1111;
Pf();
function Pf() {
  if (!document.createElement("link").relList.supports("prefetch")) return;
  const t = "instantVaryAccept" in document.body.dataset || "Shopify" in window,
    r = navigator.userAgent.indexOf("Chrome/");
  if ((r > -1 && (Pt = parseInt(navigator.userAgent.substring(r + 7))), t && Pt && Pt < 110)) return;
  const n = "instantMousedownShortcut" in document.body.dataset;
  (Ka = "instantAllowQueryString" in document.body.dataset), ($a = "instantAllowExternalLinks" in document.body.dataset), (Va = "instantWhitelist" in document.body.dataset);
  const o = { capture: !0, passive: !0 };
  let i = !1,
    a = !1,
    c = !1;
  if ("instantIntensity" in document.body.dataset) {
    const u = document.body.dataset.instantIntensity;
    if (u.startsWith("mousedown")) (i = !0), u == "mousedown-only" && (a = !0);
    else if (u.startsWith("viewport")) {
      const l = navigator.connection && navigator.connection.saveData,
        s = navigator.connection && navigator.connection.effectiveType && navigator.connection.effectiveType.includes("2g");
      !l && !s && (u == "viewport" ? document.documentElement.clientWidth * document.documentElement.clientHeight < 45e4 && (c = !0) : u == "viewport-all" && (c = !0));
    } else {
      const l = parseInt(u);
      isNaN(l) || (Wa = l);
    }
  }
  if ((a || document.addEventListener("touchstart", jf, o), i ? n || document.addEventListener("mousedown", Af, o) : document.addEventListener("mouseover", If, o), n && document.addEventListener("mousedown", kf, o), c)) {
    let u = window.requestIdleCallback;
    u ||
      (u = (l) => {
        l();
      }),
      u(
        function () {
          const s = new IntersectionObserver((d) => {
            d.forEach((p) => {
              if (p.isIntersecting) {
                const h = p.target;
                s.unobserve(h), tr(h.href);
              }
            });
          });
          document.querySelectorAll("a").forEach((d) => {
            er(d) && s.observe(d);
          });
        },
        { timeout: 1500 }
      );
  }
}
function jf(e) {
  _n = performance.now();
  const t = e.target.closest("a");
  er(t) && tr(t.href, "high");
}
function If(e) {
  if (performance.now() - _n < za || !("closest" in e.target)) return;
  const t = e.target.closest("a");
  er(t) &&
    (t.addEventListener("mouseout", Cf, { passive: !0 }),
    (et = setTimeout(() => {
      tr(t.href, "high"), (et = void 0);
    }, Wa)));
}
function Af(e) {
  const t = e.target.closest("a");
  er(t) && tr(t.href, "high");
}
function Cf(e) {
  (e.relatedTarget && e.target.closest("a") == e.relatedTarget.closest("a")) || (et && (clearTimeout(et), (et = void 0)));
}
function kf(e) {
  if (performance.now() - _n < za) return;
  const t = e.target.closest("a");
  if (e.which > 1 || e.metaKey || e.ctrlKey || !t) return;
  t.addEventListener(
    "click",
    function (n) {
      n.detail != 1337 && n.preventDefault();
    },
    { capture: !0, passive: !1, once: !0 }
  );
  const r = new MouseEvent("click", { view: window, bubbles: !0, cancelable: !1, detail: 1337 });
  t.dispatchEvent(r);
}
function er(e) {
  if (
    !(!e || !e.href) &&
    !(Va && !("instant" in e.dataset)) &&
    !(e.origin != location.origin && (!($a || "instant" in e.dataset) || !Pt)) &&
    ["http:", "https:"].includes(e.protocol) &&
    !(e.protocol == "http:" && location.protocol == "https:") &&
    !(!Ka && e.search && !("instant" in e.dataset)) &&
    !(e.hash && e.pathname + e.search == location.pathname + location.search) &&
    !("noInstant" in e.dataset)
  )
    return !0;
}
function tr(e, t = "auto") {
  if (Uo.has(e)) return;
  const r = document.createElement("link");
  (r.rel = "prefetch"), (r.href = e), (r.fetchPriority = t), (r.as = "document"), document.head.appendChild(r), Uo.add(e);
}
window.Alpine = fn;
fn.plugin(gl);
fn.start();
xf({ container: "#docsearch", appId: algolia_app_id, apiKey: algolia_search_key, indexName: "laravel", searchParameters: { facetFilters: ["version:" + window.version] } });
