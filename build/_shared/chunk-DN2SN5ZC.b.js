import {
    a as kn,
    b as W
} from "/censys/build/_shared/chunk-ZST4CTCB.js";
import {
    a as M
} from "/censys/build/_shared/chunk-MOHCJWAV.js";
import {
    c as Aw,
    d as ji,
    e as w
} from "/censys/build/_shared/chunk-2TWE7TSA.js";
var V = Aw((gO, Ru) => {
    "use strict";
    var Lw = Object.create,
        Ta = Object.defineProperty,
        Fw = Object.getOwnPropertyDescriptor,
        Bw = Object.getOwnPropertyNames,
        Ww = Object.getPrototypeOf,
        Hw = Object.prototype.hasOwnProperty,
        jw = (t, e) => {
            for (var o in e) Ta(t, o, {
                get: e[o],
                enumerable: !0
            })
        },
        xu = (t, e, o, r) => {
            if (e && typeof e == "object" || typeof e == "function")
                for (let n of Bw(e)) !Hw.call(t, n) && n !== o && Ta(t, n, {
                    get: () => e[n],
                    enumerable: !(r = Fw(e, n)) || r.enumerable
                });
            return t
        },
        zw = (t, e, o) => (o = t != null ? Lw(Ww(t)) : {}, xu(e || !t || !t.__esModule ? Ta(o, "default", {
            value: t,
            enumerable: !0
        }) : o, t)),
        Uw = t => xu(Ta({}, "__esModule", {
            value: !0
        }), t),
        Cu = {};
    jw(Cu, {
        $dispatcherGuard: () => qw,
        $makeReadOnly: () => Kw,
        $reset: () => $w,
        $structuralCheck: () => eb,
        c: () => Vw,
        clearRenderCounterRegistry: () => Xw,
        renderCounterRegistry: () => Ln,
        useRenderCounter: () => Jw
    });
    Ru.exports = Uw(Cu);
    var en = zw(M()),
        {
            useRef: Gw,
            useEffect: Yw,
            isValidElement: Qr
        } = en,
        _u, zi = (_u = en.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) != null ? _u : en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        Ui = Symbol.for("react.memo_cache_sentinel"),
        wu, Vw = typeof((wu = en.__COMPILER_RUNTIME) == null ? void 0 : wu.c) == "function" ? en.__COMPILER_RUNTIME.c : function(e) {
            return en.useMemo(() => {
                let o = new Array(e);
                for (let r = 0; r < e; r++) o[r] = Ui;
                return o[Ui] = !0, o
            }, [])
        },
        Sa = {};
    ["readContext", "useCallback", "useContext", "useEffect", "useImperativeHandle", "useInsertionEffect", "useLayoutEffect", "useMemo", "useReducer", "useRef", "useState", "useDebugValue", "useDeferredValue", "useTransition", "useMutableSource", "useSyncExternalStore", "useId", "unstable_isNewReconciler", "getCacheSignal", "getCacheForType", "useCacheRefresh"].forEach(t => {
        Sa[t] = () => {
            throw new Error(`[React] Unexpected React hook call (${t}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `)
        }
    });
    var An = null;
    Sa.useMemoCache = t => {
        if (An == null) throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");
        return An.useMemoCache(t)
    };

    function Ra(t) {
        return zi.ReactCurrentDispatcher.current = t, zi.ReactCurrentDispatcher.current
    }
    var Jr = [];

    function qw(t) {
        let e = zi.ReactCurrentDispatcher.current;
        if (t === 0) {
            if (Jr.push(e), Jr.length === 1 && (An = e), e === Sa) throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");
            Ra(Sa)
        } else if (t === 1) {
            let o = Jr.pop();
            if (o == null) throw new Error("React Compiler internal error: unexpected null in guard stack");
            Jr.length === 0 && (An = null), Ra(o)
        } else if (t === 2) Jr.push(e), Ra(An);
        else if (t === 3) {
            let o = Jr.pop();
            if (o == null) throw new Error("React Compiler internal error: unexpected null in guard stack");
            Ra(o)
        } else throw new Error("React Compiler internal error: unreachable block" + t)
    }

    function $w(t) {
        for (let e = 0; e < t.length; e++) t[e] = Ui
    }

    function Kw() {
        throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime")
    }
    var Ln = new Map;

    function Xw() {
        for (let t of Ln.values()) t.forEach(e => {
            e.count = 0
        })
    }

    function Zw(t, e) {
        let o = Ln.get(t);
        o == null && (o = new Set, Ln.set(t, o)), o.add(e)
    }

    function Qw(t, e) {
        let o = Ln.get(t);
        o?.delete(e)
    }

    function Jw(t) {
        let e = Gw(null);
        e.current != null && (e.current.count += 1), Yw(() => {
            if (e.current == null) {
                let o = {
                    count: 0
                };
                Zw(t, o), e.current = o
            }
            return () => {
                e.current !== null && Qw(t, e.current)
            }
        })
    }
    var bu = new Set;

    function eb(t, e, o, r, n, a) {
        function s(l, d, u, f) {
            let p = `${r}:${a} [${n}] ${o}${u} changed from ${l} to ${d} at depth ${f}`;
            bu.has(p) || (bu.add(p), console.error(p))
        }
        let i = 2;

        function c(l, d, u, f) {
            if (!(f > i)) {
                if (l === d) return;
                if (typeof l != typeof d) s(`type ${typeof l}`, `type ${typeof d}`, u, f);
                else if (typeof l == "object") {
                    let p = Array.isArray(l),
                        g = Array.isArray(d);
                    if (l === null && d !== null) s("null", `type ${typeof d}`, u, f);
                    else if (d === null) s(`type ${typeof l}`, "null", u, f);
                    else if (l instanceof Map)
                        if (!(d instanceof Map)) s("Map instance", "other value", u, f);
                        else if (l.size !== d.size) s(`Map instance with size ${l.size}`, `Map instance with size ${d.size}`, u, f);
                    else
                        for (let [m, h] of l) d.has(m) ? c(h, d.get(m), `${u}.get(${m})`, f + 1) : s(`Map instance with key ${m}`, `Map instance without key ${m}`, u, f);
                    else if (d instanceof Map) s("other value", "Map instance", u, f);
                    else if (l instanceof Set)
                        if (!(d instanceof Set)) s("Set instance", "other value", u, f);
                        else if (l.size !== d.size) s(`Set instance with size ${l.size}`, `Set instance with size ${d.size}`, u, f);
                    else
                        for (let m of d) l.has(m) || s(`Set instance without element ${m}`, `Set instance with element ${m}`, u, f);
                    else if (d instanceof Set) s("other value", "Set instance", u, f);
                    else if (p || g)
                        if (p !== g) s(`type ${p?"array":"object"}`, `type ${g?"array":"object"}`, u, f);
                        else if (l.length !== d.length) s(`array with length ${l.length}`, `array with length ${d.length}`, u, f);
                    else
                        for (let m = 0; m < l.length; m++) c(l[m], d[m], `${u}[${m}]`, f + 1);
                    else if (Qr(l) || Qr(d)) Qr(l) !== Qr(d) ? s(`type ${Qr(l)?"React element":"object"}`, `type ${Qr(d)?"React element":"object"}`, u, f) : l.type !== d.type ? s(`React element of type ${l.type}`, `React element of type ${d.type}`, u, f) : c(l.props, d.props, `[props of ${u}]`, f + 1);
                    else {
                        for (let m in d) m in l || s(`object without key ${m}`, `object with key ${m}`, u, f);
                        for (let m in l) m in d ? c(l[m], d[m], `${u}.${m}`, f + 1) : s(`object with key ${m}`, `object without key ${m}`, u, f)
                    }
                } else {
                    if (typeof l == "function") return;
                    isNaN(l) || isNaN(d) ? isNaN(l) !== isNaN(d) && s(`${isNaN(l)?"NaN":"non-NaN value"}`, `${isNaN(d)?"NaN":"non-NaN value"}`, u, f) : l !== d && s(l, d, u, f)
                }
            }
        }
        c(t, e, "", 0)
    }
});

function T(...t) {
    let e = "";
    for (let o = 0; o < t.length; o++) {
        let r = t[o];
        r && typeof r == "string" && (e ? e += ` ${r.trim()}` : e = r.trim())
    }
    return e
}
var Su = w(W(), 1);
var wO = w(V(), 1),
    bO = w(M(), 1);
var tb = {
    "size-sm": "_size-sm_1bdti_2",
    "size-md": "_size-md_1bdti_6",
    "size-lg": "_size-lg_1bdti_10",
    "size-xl": "_size-xl_1bdti_14",
    "size-2xl": "_size-2xl_1bdti_18"
};

function Z({
    icon: t,
    name: e,
    size: o = "md",
    mode: r = "fill",
    className: n,
    ["aria-hidden"]: a = !0,
    ...s
}) {
    let i;
    return typeof t < "u" ? i = `ri-${t}` : i = r ? `ri-${e}-${r}` : `ri-${e}`, (0, Su.jsx)("i", {
        className: T(i, tb[`size-${o}`], n),
        "aria-hidden": a,
        ...s
    })
}
var Eu = w(W(), 1),
    Du = w(V(), 1),
    Nu = w(M(), 1);
var ob = "_typographyDefault_80wah_2",
    rb = "_typographyDefaultItalics_80wah_10",
    nb = "_typographyDefaultSemibold_80wah_19",
    ab = "_typographySmall_80wah_27",
    sb = "_typographySmallSemibold_80wah_35",
    ib = "_typographyPageHeadline_80wah_43",
    cb = "_typographySubHeadline_80wah_52",
    lb = "_typographyHeading_80wah_61",
    ub = "_typographySubHeading_80wah_70",
    db = "_typographyCapsHeading_80wah_79",
    fb = "_typographyCaptionHeading_80wah_90",
    mb = "_typographyCategoryHeading_80wah_101",
    pb = "_typographyDefaultSource_80wah_111",
    hb = "_typographySmallSource_80wah_119",
    gb = "_typographySmallNumeral_80wah_128",
    vb = "_typographyDefaultNumeral_80wah_136",
    mt = {
        typographyDefault: ob,
        typographyDefaultItalics: rb,
        typographyDefaultSemibold: nb,
        typographySmall: ab,
        typographySmallSemibold: sb,
        typographyPageHeadline: ib,
        typographySubHeadline: cb,
        typographyHeading: lb,
        typographySubHeading: ub,
        typographyCapsHeading: db,
        typographyCaptionHeading: fb,
        typographyCategoryHeading: mb,
        typographyDefaultSource: pb,
        typographySmallSource: hb,
        typographySmallNumeral: gb,
        typographyDefaultNumeral: vb
    },
    Ue = (t => (t.DEFAULT = "default", t.DEFAULT_ITALICS = "default-italics", t.DEFAULT_SEMIBOLD = "default-semibold", t.SMALL = "small", t.SMALL_SEMIBOLD = "small-semibold", t.H1 = "h1", t.H1_SUB_HEADLINE = "h1-sub-headline", t.H2 = "h2", t.H3 = "h3", t.H4 = "h4", t.H5 = "h5", t.H6 = "h6", t.DEFAULT_SOURCE = "default-source", t.SMALL_SOURCE = "small-source", t.SMALL_NUMERAL = "small-numeral", t.DEFAULT_NUMERAL = "default-numeral", t))(Ue || {}),
    Tu = {
        default: {
            className: mt.typographyDefault,
            tag: "span"
        },
        "default-italics": {
            className: mt.typographyDefaultItalics,
            tag: "span"
        },
        "default-semibold": {
            className: mt.typographyDefaultSemibold,
            tag: "span"
        },
        small: {
            className: mt.typographySmall,
            tag: "span"
        },
        "small-semibold": {
            className: mt.typographySmallSemibold,
            tag: "span"
        },
        "default-source": {
            className: mt.typographyDefaultSource,
            tag: "code"
        },
        "small-source": {
            className: mt.typographySmallSource,
            tag: "code"
        },
        "default-numeral": {
            className: mt.typographyDefaultNumeral,
            tag: "span"
        },
        "small-numeral": {
            className: mt.typographySmallNumeral,
            tag: "span"
        },
        h1: {
            className: mt.typographyPageHeadline,
            tag: "h1"
        },
        "h1-sub-headline": {
            className: mt.typographySubHeadline,
            tag: "h1"
        },
        h2: {
            className: mt.typographyHeading,
            tag: "h2"
        },
        h3: {
            className: mt.typographySubHeading,
            tag: "h3"
        },
        h4: {
            className: mt.typographyCapsHeading,
            tag: "h4"
        },
        h5: {
            className: mt.typographyCaptionHeading,
            tag: "h5"
        },
        h6: {
            className: mt.typographyCategoryHeading,
            tag: "h6"
        }
    },
    he = (0, Nu.forwardRef)(function(t, e) {
        let o = (0, Du.c)(15),
            r, n, a, s, i;
        o[0] !== t ? ({
            variant: i,
            children: n,
            className: a,
            as: r,
            ...s
        } = t, o[0] = t, o[1] = r, o[2] = n, o[3] = a, o[4] = s, o[5] = i) : (r = o[1], n = o[2], a = o[3], s = o[4], i = o[5]);
        let c = i === void 0 ? "default" : i,
            l = r || Tu[c].tag,
            d = e,
            u = Tu[c],
            f;
        o[6] !== a || o[7] !== u.className ? (f = T(u.className, a), o[6] = a, o[7] = u.className, o[8] = f) : f = o[8];
        let p;
        return o[9] !== l || o[10] !== n || o[11] !== s || o[12] !== d || o[13] !== f ? (p = (0, Eu.jsx)(l, {
            ...s,
            ref: d,
            className: f,
            children: n
        }), o[9] = l, o[10] = n, o[11] = s, o[12] = d, o[13] = f, o[14] = p) : p = o[14], p
    });
var Ge = (t => (t.PRIMARY = "primary", t.SECONDARY = "secondary", t.DEFAULT = "default", t.GHOST = "ghost", t.TERTIARY = "tertiary", t.ALERT = "alert", t))(Ge || {});
var tn = w(W(), 1),
    Mu = w(V(), 1),
    Pu = w(M(), 1);
var yb = "_inputContainer_17b5q_2",
    _b = "_inputAreaContainer_17b5q_7",
    wb = "_sharedInputContainer_17b5q_13",
    bb = "_sm_17b5q_45",
    xb = "_md_17b5q_56",
    Cb = "_lg_17b5q_67",
    Rb = "_inputContainerFullWidth_17b5q_78",
    Sb = "_inputContainerInvalid_17b5q_87",
    Tb = "_inputContentLeft_17b5q_139",
    Eb = "_inputContentRight_17b5q_140",
    Lt = {
        inputContainer: yb,
        inputAreaContainer: _b,
        sharedInputContainer: wb,
        sm: bb,
        md: xb,
        lg: Cb,
        inputContainerFullWidth: Rb,
        inputContainerInvalid: Sb,
        inputContentLeft: Tb,
        inputContentRight: Eb
    };
var Db = (0, Pu.forwardRef)((t, e) => {
    let o = (0, Mu.c)(23),
        r, n, a, s, i, c;
    o[0] !== t ? ({
        isFullWidth: s,
        contentLeft: r,
        contentRight: n,
        isValid: i,
        size: c,
        ...a
    } = t, o[0] = t, o[1] = r, o[2] = n, o[3] = a, o[4] = s, o[5] = i, o[6] = c) : (r = o[1], n = o[2], a = o[3], s = o[4], i = o[5], c = o[6]);
    let l = Lt[c === void 0 ? "md" : c],
        d = s && Lt.inputContainerFullWidth,
        u = i === !1 && Lt.inputContainerInvalid,
        f;
    o[7] !== l || o[8] !== d || o[9] !== u ? (f = T(Lt.sharedInputContainer, Lt.inputContainer, l, d, u), o[7] = l, o[8] = d, o[9] = u, o[10] = f) : f = o[10];
    let p;
    o[11] !== r ? (p = r && (0, tn.jsx)("div", {
        className: Lt.inputContentLeft,
        children: r
    }), o[11] = r, o[12] = p) : p = o[12];
    let g;
    o[13] !== a || o[14] !== e ? (g = (0, tn.jsx)("input", {
        ref: e,
        ...a
    }), o[13] = a, o[14] = e, o[15] = g) : g = o[15];
    let m;
    o[16] !== n ? (m = n && (0, tn.jsx)("div", {
        className: Lt.inputContentRight,
        children: n
    }), o[16] = n, o[17] = m) : m = o[17];
    let h;
    return o[18] !== f || o[19] !== p || o[20] !== g || o[21] !== m ? (h = (0, tn.jsxs)("div", {
        className: f,
        children: [p, g, m]
    }), o[18] = f, o[19] = p, o[20] = g, o[21] = m, o[22] = h) : h = o[22], h
});
var jt = w(W(), 1),
    rm = w(V(), 1);
var U = w(M(), 1),
    Sc = w(kn(), 1);

function Gi(t, [e, o]) {
    return Math.min(o, Math.max(e, t))
}

function A(t, e, {
    checkForDefaultPrevented: o = !0
} = {}) {
    return function(n) {
        if (t?.(n), o === !1 || !n.defaultPrevented) return e?.(n)
    }
}
var $o = w(M(), 1);
var Yt = w(M(), 1),
    Yi = w(W(), 1);

function Ou(t, e) {
    let o = Yt.createContext(e),
        r = a => {
            let {
                children: s,
                ...i
            } = a, c = Yt.useMemo(() => i, Object.values(i));
            return (0, Yi.jsx)(o.Provider, {
                value: c,
                children: s
            })
        };
    r.displayName = t + "Provider";

    function n(a) {
        let s = Yt.useContext(o);
        if (s) return s;
        if (e !== void 0) return e;
        throw new Error(`\`${a}\` must be used within \`${t}\``)
    }
    return [r, n]
}

function Se(t, e = []) {
    let o = [];

    function r(a, s) {
        let i = Yt.createContext(s),
            c = o.length;
        o = [...o, s];
        let l = u => {
            let {
                scope: f,
                children: p,
                ...g
            } = u, m = f?.[t]?.[c] || i, h = Yt.useMemo(() => g, Object.values(g));
            return (0, Yi.jsx)(m.Provider, {
                value: h,
                children: p
            })
        };
        l.displayName = a + "Provider";

        function d(u, f) {
            let p = f?.[t]?.[c] || i,
                g = Yt.useContext(p);
            if (g) return g;
            if (s !== void 0) return s;
            throw new Error(`\`${u}\` must be used within \`${a}\``)
        }
        return [l, d]
    }
    let n = () => {
        let a = o.map(s => Yt.createContext(s));
        return function(i) {
            let c = i?.[t] || a;
            return Yt.useMemo(() => ({
                [`__scope${t}`]: {
                    ...i,
                    [t]: c
                }
            }), [i, c])
        }
    };
    return n.scopeName = t, [r, Nb(n, ...e)]
}

function Nb(...t) {
    let e = t[0];
    if (t.length === 1) return e;
    let o = () => {
        let r = t.map(n => ({
            useScope: n(),
            scopeName: n.scopeName
        }));
        return function(a) {
            let s = r.reduce((i, {
                useScope: c,
                scopeName: l
            }) => {
                let u = c(a)[`__scope${l}`];
                return {
                    ...i,
                    ...u
                }
            }, {});
            return Yt.useMemo(() => ({
                [`__scope${e.scopeName}`]: s
            }), [s])
        }
    };
    return o.scopeName = e.scopeName, o
}
var ku = w(M(), 1);

function Iu(t, e) {
    if (typeof t == "function") return t(e);
    t != null && (t.current = e)
}

function _r(...t) {
    return e => {
        let o = !1,
            r = t.map(n => {
                let a = Iu(n, e);
                return !o && typeof a == "function" && (o = !0), a
            });
        if (o) return () => {
            for (let n = 0; n < r.length; n++) {
                let a = r[n];
                typeof a == "function" ? a() : Iu(t[n], null)
            }
        }
    }
}

function X(...t) {
    return ku.useCallback(_r(...t), t)
}
var ot = w(M(), 1);
var on = w(W(), 1);

function Ft(t) {
    let e = Mb(t),
        o = ot.forwardRef((r, n) => {
            let {
                children: a,
                ...s
            } = r, i = ot.Children.toArray(a), c = i.find(Pb);
            if (c) {
                let l = c.props.children,
                    d = i.map(u => u === c ? ot.Children.count(l) > 1 ? ot.Children.only(null) : ot.isValidElement(l) ? l.props.children : null : u);
                return (0, on.jsx)(e, {
                    ...s,
                    ref: n,
                    children: ot.isValidElement(l) ? ot.cloneElement(l, void 0, d) : null
                })
            }
            return (0, on.jsx)(e, {
                ...s,
                ref: n,
                children: a
            })
        });
    return o.displayName = `${t}.Slot`, o
}

function Mb(t) {
    let e = ot.forwardRef((o, r) => {
        let {
            children: n,
            ...a
        } = o;
        if (ot.isValidElement(n)) {
            let s = Ib(n),
                i = Ob(a, n.props);
            return n.type !== ot.Fragment && (i.ref = r ? _r(r, s) : s), ot.cloneElement(n, i)
        }
        return ot.Children.count(n) > 1 ? ot.Children.only(null) : null
    });
    return e.displayName = `${t}.SlotClone`, e
}
var Au = Symbol("radix.slottable");

function Lu(t) {
    let e = ({
        children: o
    }) => (0, on.jsx)(on.Fragment, {
        children: o
    });
    return e.displayName = `${t}.Slottable`, e.__radixId = Au, e
}

function Pb(t) {
    return ot.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Au
}

function Ob(t, e) {
    let o = {
        ...e
    };
    for (let r in e) {
        let n = t[r],
            a = e[r];
        /^on[A-Z]/.test(r) ? n && a ? o[r] = (...i) => {
            let c = a(...i);
            return n(...i), c
        } : n && (o[r] = n) : r === "style" ? o[r] = {
            ...n,
            ...a
        } : r === "className" && (o[r] = [n, a].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...o
    }
}

function Ib(t) {
    let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
        o = e && "isReactWarning" in e && e.isReactWarning;
    return o ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, o = e && "isReactWarning" in e && e.isReactWarning, o ? t.props.ref : t.props.ref || t.ref)
}
var Ea = w(W(), 1),
    kb = w(M(), 1);
var Ab = w(W(), 1);

function Ko(t) {
    let e = t + "CollectionProvider",
        [o, r] = Se(e),
        [n, a] = o(e, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = m => {
            let {
                scope: h,
                children: v
            } = m, _ = $o.default.useRef(null), y = $o.default.useRef(new Map).current;
            return (0, Ea.jsx)(n, {
                scope: h,
                itemMap: y,
                collectionRef: _,
                children: v
            })
        };
    s.displayName = e;
    let i = t + "CollectionSlot",
        c = Ft(i),
        l = $o.default.forwardRef((m, h) => {
            let {
                scope: v,
                children: _
            } = m, y = a(i, v), x = X(h, y.collectionRef);
            return (0, Ea.jsx)(c, {
                ref: x,
                children: _
            })
        });
    l.displayName = i;
    let d = t + "CollectionItemSlot",
        u = "data-radix-collection-item",
        f = Ft(d),
        p = $o.default.forwardRef((m, h) => {
            let {
                scope: v,
                children: _,
                ...y
            } = m, x = $o.default.useRef(null), b = X(h, x), C = a(d, v);
            return $o.default.useEffect(() => (C.itemMap.set(x, {
                ref: x,
                ...y
            }), () => void C.itemMap.delete(x))), (0, Ea.jsx)(f, {
                [u]: "",
                ref: b,
                children: _
            })
        });
    p.displayName = d;

    function g(m) {
        let h = a(t + "CollectionConsumer", m);
        return $o.default.useCallback(() => {
            let _ = h.collectionRef.current;
            if (!_) return [];
            let y = Array.from(_.querySelectorAll(`[${u}]`));
            return Array.from(h.itemMap.values()).sort((C, R) => y.indexOf(C.ref.current) - y.indexOf(R.ref.current))
        }, [h.collectionRef, h.itemMap])
    }
    return [{
        Provider: s,
        Slot: l,
        ItemSlot: p
    }, g, r]
}
var Da = w(M(), 1),
    Lb = w(W(), 1),
    Fb = Da.createContext(void 0);

function mo(t) {
    let e = Da.useContext(Fb);
    return t || e || "ltr"
}
var Ve = w(M(), 1);
var Fu = w(M(), 1),
    Bu = w(kn(), 1);
var Wu = w(W(), 1),
    Bb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    z = Bb.reduce((t, e) => {
        let o = Ft(`Primitive.${e}`),
            r = Fu.forwardRef((n, a) => {
                let {
                    asChild: s,
                    ...i
                } = n, c = s ? o : e;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), (0, Wu.jsx)(c, {
                    ...i,
                    ref: a
                })
            });
        return r.displayName = `Primitive.${e}`, {
            ...t,
            [e]: r
        }
    }, {});

function rn(t, e) {
    t && Bu.flushSync(() => t.dispatchEvent(e))
}
var nn = w(M(), 1);

function Ye(t) {
    let e = nn.useRef(t);
    return nn.useEffect(() => {
        e.current = t
    }), nn.useMemo(() => (...o) => e.current?.(...o), [])
}
var Hu = w(M(), 1);

function ju(t, e = globalThis?.document) {
    let o = Ye(t);
    Hu.useEffect(() => {
        let r = n => {
            n.key === "Escape" && o(n)
        };
        return e.addEventListener("keydown", r, {
            capture: !0
        }), () => e.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [o, e])
}
var qi = w(W(), 1),
    Wb = "DismissableLayer",
    Vi = "dismissableLayer.update",
    Hb = "dismissableLayer.pointerDownOutside",
    jb = "dismissableLayer.focusOutside",
    zu, Gu = Ve.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Vt = Ve.forwardRef((t, e) => {
        let {
            disableOutsidePointerEvents: o = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: n,
            onFocusOutside: a,
            onInteractOutside: s,
            onDismiss: i,
            ...c
        } = t, l = Ve.useContext(Gu), [d, u] = Ve.useState(null), f = d?.ownerDocument ?? globalThis?.document, [, p] = Ve.useState({}), g = X(e, R => u(R)), m = Array.from(l.layers), [h] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), v = m.indexOf(h), _ = d ? m.indexOf(d) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, x = _ >= v, b = Ub(R => {
            let S = R.target,
                E = [...l.branches].some(D => D.contains(S));
            !x || E || (n?.(R), s?.(R), R.defaultPrevented || i?.())
        }, f), C = Gb(R => {
            let S = R.target;
            [...l.branches].some(D => D.contains(S)) || (a?.(R), s?.(R), R.defaultPrevented || i?.())
        }, f);
        return ju(R => {
            _ === l.layers.size - 1 && (r?.(R), !R.defaultPrevented && i && (R.preventDefault(), i()))
        }, f), Ve.useEffect(() => {
            if (d) return o && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (zu = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Uu(), () => {
                o && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = zu)
            }
        }, [d, f, o, l]), Ve.useEffect(() => () => {
            d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Uu())
        }, [d, l]), Ve.useEffect(() => {
            let R = () => p({});
            return document.addEventListener(Vi, R), () => document.removeEventListener(Vi, R)
        }, []), (0, qi.jsx)(z.div, {
            ...c,
            ref: g,
            style: {
                pointerEvents: y ? x ? "auto" : "none" : void 0,
                ...t.style
            },
            onFocusCapture: A(t.onFocusCapture, C.onFocusCapture),
            onBlurCapture: A(t.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: A(t.onPointerDownCapture, b.onPointerDownCapture)
        })
    });
Vt.displayName = Wb;
var zb = "DismissableLayerBranch",
    Yu = Ve.forwardRef((t, e) => {
        let o = Ve.useContext(Gu),
            r = Ve.useRef(null),
            n = X(e, r);
        return Ve.useEffect(() => {
            let a = r.current;
            if (a) return o.branches.add(a), () => {
                o.branches.delete(a)
            }
        }, [o.branches]), (0, qi.jsx)(z.div, {
            ...t,
            ref: n
        })
    });
Yu.displayName = zb;

function Ub(t, e = globalThis?.document) {
    let o = Ye(t),
        r = Ve.useRef(!1),
        n = Ve.useRef(() => {});
    return Ve.useEffect(() => {
        let a = i => {
                if (i.target && !r.current) {
                    let l = function() {
                        Vu(Hb, o, d, {
                            discrete: !0
                        })
                    };
                    var c = l;
                    let d = {
                        originalEvent: i
                    };
                    i.pointerType === "touch" ? (e.removeEventListener("click", n.current), n.current = l, e.addEventListener("click", n.current, {
                        once: !0
                    })) : l()
                } else e.removeEventListener("click", n.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                e.addEventListener("pointerdown", a)
            }, 0);
        return () => {
            window.clearTimeout(s), e.removeEventListener("pointerdown", a), e.removeEventListener("click", n.current)
        }
    }, [e, o]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Gb(t, e = globalThis?.document) {
    let o = Ye(t),
        r = Ve.useRef(!1);
    return Ve.useEffect(() => {
        let n = a => {
            a.target && !r.current && Vu(jb, o, {
                originalEvent: a
            }, {
                discrete: !1
            })
        };
        return e.addEventListener("focusin", n), () => e.removeEventListener("focusin", n)
    }, [e, o]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Uu() {
    let t = new CustomEvent(Vi);
    document.dispatchEvent(t)
}

function Vu(t, e, o, {
    discrete: r
}) {
    let n = o.originalEvent.target,
        a = new CustomEvent(t, {
            bubbles: !1,
            cancelable: !0,
            detail: o
        });
    e && n.addEventListener(t, e, {
        once: !0
    }), r ? rn(n, a) : n.dispatchEvent(a)
}
var qu = Vt,
    $u = Yu;
var Xu = w(M(), 1),
    $i = 0;

function Xo() {
    Xu.useEffect(() => {
        let t = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", t[0] ?? Ku()), document.body.insertAdjacentElement("beforeend", t[1] ?? Ku()), $i++, () => {
            $i === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), $i--
        }
    }, [])
}

function Ku() {
    let t = document.createElement("span");
    return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t
}
var qt = w(M(), 1);
var td = w(W(), 1),
    Ki = "focusScope.autoFocusOnMount",
    Xi = "focusScope.autoFocusOnUnmount",
    Zu = {
        bubbles: !1,
        cancelable: !0
    },
    Vb = "FocusScope",
    So = qt.forwardRef((t, e) => {
        let {
            loop: o = !1,
            trapped: r = !1,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            ...s
        } = t, [i, c] = qt.useState(null), l = Ye(n), d = Ye(a), u = qt.useRef(null), f = X(e, m => c(m)), p = qt.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        qt.useEffect(() => {
            if (r) {
                let _ = function(C) {
                        if (p.paused || !i) return;
                        let R = C.target;
                        i.contains(R) ? u.current = R : Zo(u.current, {
                            select: !0
                        })
                    },
                    y = function(C) {
                        if (p.paused || !i) return;
                        let R = C.relatedTarget;
                        R !== null && (i.contains(R) || Zo(u.current, {
                            select: !0
                        }))
                    },
                    x = function(C) {
                        if (document.activeElement === document.body)
                            for (let S of C) S.removedNodes.length > 0 && Zo(i)
                    };
                var m = _,
                    h = y,
                    v = x;
                document.addEventListener("focusin", _), document.addEventListener("focusout", y);
                let b = new MutationObserver(x);
                return i && b.observe(i, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", _), document.removeEventListener("focusout", y), b.disconnect()
                }
            }
        }, [r, i, p.paused]), qt.useEffect(() => {
            if (i) {
                Ju.add(p);
                let m = document.activeElement;
                if (!i.contains(m)) {
                    let v = new CustomEvent(Ki, Zu);
                    i.addEventListener(Ki, l), i.dispatchEvent(v), v.defaultPrevented || (qb(Qb(od(i)), {
                        select: !0
                    }), document.activeElement === m && Zo(i))
                }
                return () => {
                    i.removeEventListener(Ki, l), setTimeout(() => {
                        let v = new CustomEvent(Xi, Zu);
                        i.addEventListener(Xi, d), i.dispatchEvent(v), v.defaultPrevented || Zo(m ?? document.body, {
                            select: !0
                        }), i.removeEventListener(Xi, d), Ju.remove(p)
                    }, 0)
                }
            }
        }, [i, l, d, p]);
        let g = qt.useCallback(m => {
            if (!o && !r || p.paused) return;
            let h = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
                v = document.activeElement;
            if (h && v) {
                let _ = m.currentTarget,
                    [y, x] = $b(_);
                y && x ? !m.shiftKey && v === x ? (m.preventDefault(), o && Zo(y, {
                    select: !0
                })) : m.shiftKey && v === y && (m.preventDefault(), o && Zo(x, {
                    select: !0
                })) : v === _ && m.preventDefault()
            }
        }, [o, r, p.paused]);
        return (0, td.jsx)(z.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: g
        })
    });
So.displayName = Vb;

function qb(t, {
    select: e = !1
} = {}) {
    let o = document.activeElement;
    for (let r of t)
        if (Zo(r, {
                select: e
            }), document.activeElement !== o) return
}

function $b(t) {
    let e = od(t),
        o = Qu(e, t),
        r = Qu(e.reverse(), t);
    return [o, r]
}

function od(t) {
    let e = [],
        o = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                let n = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || n ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; o.nextNode();) e.push(o.currentNode);
    return e
}

function Qu(t, e) {
    for (let o of t)
        if (!Kb(o, {
                upTo: e
            })) return o
}

function Kb(t, {
    upTo: e
}) {
    if (getComputedStyle(t).visibility === "hidden") return !0;
    for (; t;) {
        if (e !== void 0 && t === e) return !1;
        if (getComputedStyle(t).display === "none") return !0;
        t = t.parentElement
    }
    return !1
}

function Xb(t) {
    return t instanceof HTMLInputElement && "select" in t
}

function Zo(t, {
    select: e = !1
} = {}) {
    if (t && t.focus) {
        let o = document.activeElement;
        t.focus({
            preventScroll: !0
        }), t !== o && Xb(t) && e && t.select()
    }
}
var Ju = Zb();

function Zb() {
    let t = [];
    return {
        add(e) {
            let o = t[0];
            e !== o && o?.pause(), t = ed(t, e), t.unshift(e)
        },
        remove(e) {
            t = ed(t, e), t[0]?.resume()
        }
    }
}

function ed(t, e) {
    let o = [...t],
        r = o.indexOf(e);
    return r !== -1 && o.splice(r, 1), o
}

function Qb(t) {
    return t.filter(e => e.tagName !== "A")
}
var Zi = w(M(), 1);
var rd = w(M(), 1),
    Le = globalThis?.document ? rd.useLayoutEffect : () => {};
var Jb = Zi[" useId ".trim().toString()] || (() => {}),
    e1 = 0;

function $e(t) {
    let [e, o] = Zi.useState(Jb());
    return Le(() => {
        t || o(r => r ?? String(e1++))
    }, [t]), t || (e ? `radix-${e}` : "")
}
var Wt = w(M(), 1);
var nd = ["top", "right", "bottom", "left"];
var po = Math.min,
    Rt = Math.max,
    Bn = Math.round,
    Wn = Math.floor,
    To = t => ({
        x: t,
        y: t
    }),
    t1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    o1 = {
        start: "end",
        end: "start"
    };

function Ma(t, e, o) {
    return Rt(t, po(e, o))
}

function ho(t, e) {
    return typeof t == "function" ? t(e) : t
}

function go(t) {
    return t.split("-")[0]
}

function wr(t) {
    return t.split("-")[1]
}

function Pa(t) {
    return t === "x" ? "y" : "x"
}

function Oa(t) {
    return t === "y" ? "height" : "width"
}

function br(t) {
    return ["top", "bottom"].includes(go(t)) ? "y" : "x"
}

function Ia(t) {
    return Pa(br(t))
}

function ad(t, e, o) {
    o === void 0 && (o = !1);
    let r = wr(t),
        n = Ia(t),
        a = Oa(n),
        s = n === "x" ? r === (o ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return e.reference[a] > e.floating[a] && (s = Fn(s)), [s, Fn(s)]
}

function sd(t) {
    let e = Fn(t);
    return [Na(t), e, Na(e)]
}

function Na(t) {
    return t.replace(/start|end/g, e => o1[e])
}

function r1(t, e, o) {
    let r = ["left", "right"],
        n = ["right", "left"],
        a = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (t) {
        case "top":
        case "bottom":
            return o ? e ? n : r : e ? r : n;
        case "left":
        case "right":
            return e ? a : s;
        default:
            return []
    }
}

function id(t, e, o, r) {
    let n = wr(t),
        a = r1(go(t), o === "start", r);
    return n && (a = a.map(s => s + "-" + n), e && (a = a.concat(a.map(Na)))), a
}

function Fn(t) {
    return t.replace(/left|right|bottom|top/g, e => t1[e])
}

function n1(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}

function Qi(t) {
    return typeof t != "number" ? n1(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}

function xr(t) {
    return {
        ...t,
        top: t.y,
        left: t.x,
        right: t.x + t.width,
        bottom: t.y + t.height
    }
}

function cd(t, e, o) {
    let {
        reference: r,
        floating: n
    } = t, a = br(e), s = Ia(e), i = Oa(s), c = go(e), l = a === "y", d = r.x + r.width / 2 - n.width / 2, u = r.y + r.height / 2 - n.height / 2, f = r[i] / 2 - n[i] / 2, p;
    switch (c) {
        case "top":
            p = {
                x: d,
                y: r.y - n.height
            };
            break;
        case "bottom":
            p = {
                x: d,
                y: r.y + r.height
            };
            break;
        case "right":
            p = {
                x: r.x + r.width,
                y: u
            };
            break;
        case "left":
            p = {
                x: r.x - n.width,
                y: u
            };
            break;
        default:
            p = {
                x: r.x,
                y: r.y
            }
    }
    switch (wr(e)) {
        case "start":
            p[s] -= f * (o && l ? -1 : 1);
            break;
        case "end":
            p[s] += f * (o && l ? -1 : 1);
            break
    }
    return p
}
var dd = async (t, e, o) => {
    let {
        placement: r = "bottom",
        strategy: n = "absolute",
        middleware: a = [],
        platform: s
    } = o, i = a.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(e)), l = await s.getElementRects({
        reference: t,
        floating: e,
        strategy: n
    }), {
        x: d,
        y: u
    } = cd(l, r, c), f = r, p = {}, g = 0;
    for (let m = 0; m < i.length; m++) {
        let {
            name: h,
            fn: v
        } = i[m], {
            x: _,
            y,
            data: x,
            reset: b
        } = await v({
            x: d,
            y: u,
            initialPlacement: r,
            placement: f,
            strategy: n,
            middlewareData: p,
            rects: l,
            platform: s,
            elements: {
                reference: t,
                floating: e
            }
        });
        if (d = _ ?? d, u = y ?? u, p = {
                ...p,
                [h]: {
                    ...p[h],
                    ...x
                }
            }, b && g <= 50) {
            g++, typeof b == "object" && (b.placement && (f = b.placement), b.rects && (l = b.rects === !0 ? await s.getElementRects({
                reference: t,
                floating: e,
                strategy: n
            }) : b.rects), {
                x: d,
                y: u
            } = cd(l, f, c)), m = -1;
            continue
        }
    }
    return {
        x: d,
        y: u,
        placement: f,
        strategy: n,
        middlewareData: p
    }
};
async function Cr(t, e) {
    var o;
    e === void 0 && (e = {});
    let {
        x: r,
        y: n,
        platform: a,
        rects: s,
        elements: i,
        strategy: c
    } = t, {
        boundary: l = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: u = "floating",
        altBoundary: f = !1,
        padding: p = 0
    } = ho(e, t), g = Qi(p), h = i[f ? u === "floating" ? "reference" : "floating" : u], v = xr(await a.getClippingRect({
        element: (o = await (a.isElement == null ? void 0 : a.isElement(h))) == null || o ? h : h.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
        boundary: l,
        rootBoundary: d,
        strategy: c
    })), _ = u === "floating" ? {
        ...s.floating,
        x: r,
        y: n
    } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), x = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, b = xr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: _,
        offsetParent: y,
        strategy: c
    }) : _);
    return {
        top: (v.top - b.top + g.top) / x.y,
        bottom: (b.bottom - v.bottom + g.bottom) / x.y,
        left: (v.left - b.left + g.left) / x.x,
        right: (b.right - v.right + g.right) / x.x
    }
}
var ka = t => ({
    name: "arrow",
    options: t,
    async fn(e) {
        let {
            x: o,
            y: r,
            placement: n,
            rects: a,
            platform: s,
            elements: i,
            middlewareData: c
        } = e, {
            element: l,
            padding: d = 0
        } = ho(t, e) || {};
        if (l == null) return {};
        let u = Qi(d),
            f = {
                x: o,
                y: r
            },
            p = Ia(n),
            g = Oa(p),
            m = await s.getDimensions(l),
            h = p === "y",
            v = h ? "top" : "left",
            _ = h ? "bottom" : "right",
            y = h ? "clientHeight" : "clientWidth",
            x = a.reference[g] + a.reference[p] - f[p] - a.floating[g],
            b = f[p] - a.reference[p],
            C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l)),
            R = C ? C[y] : 0;
        (!R || !await (s.isElement == null ? void 0 : s.isElement(C))) && (R = i.floating[y] || a.floating[g]);
        let S = x / 2 - b / 2,
            E = R / 2 - m[g] / 2 - 1,
            D = po(u[v], E),
            N = po(u[_], E),
            O = D,
            F = R - m[g] - N,
            P = R / 2 - m[g] / 2 + S,
            B = Ma(O, P, F),
            k = !c.arrow && wr(n) != null && P != B && a.reference[g] / 2 - (P < O ? D : N) - m[g] / 2 < 0,
            G = k ? P < O ? P - O : P - F : 0;
        return {
            [p]: f[p] + G,
            data: {
                [p]: B,
                centerOffset: P - B - G,
                ...k && {
                    alignmentOffset: G
                }
            },
            reset: k
        }
    }
});
var Aa = function(t) {
    return t === void 0 && (t = {}), {
        name: "flip",
        options: t,
        async fn(e) {
            var o, r;
            let {
                placement: n,
                middlewareData: a,
                rects: s,
                initialPlacement: i,
                platform: c,
                elements: l
            } = e, {
                mainAxis: d = !0,
                crossAxis: u = !0,
                fallbackPlacements: f,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: g = "none",
                flipAlignment: m = !0,
                ...h
            } = ho(t, e);
            if ((o = a.arrow) != null && o.alignmentOffset) return {};
            let v = go(n),
                _ = go(i) === i,
                y = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
                x = f || (_ || !m ? [Fn(i)] : sd(i));
            !f && g !== "none" && x.push(...id(i, m, g, y));
            let b = [i, ...x],
                C = await Cr(e, h),
                R = [],
                S = ((r = a.flip) == null ? void 0 : r.overflows) || [];
            if (d && R.push(C[v]), u) {
                let O = ad(n, s, y);
                R.push(C[O[0]], C[O[1]])
            }
            if (S = [...S, {
                    placement: n,
                    overflows: R
                }], !R.every(O => O <= 0)) {
                var E, D;
                let O = (((E = a.flip) == null ? void 0 : E.index) || 0) + 1,
                    F = b[O];
                if (F) return {
                    data: {
                        index: O,
                        overflows: S
                    },
                    reset: {
                        placement: F
                    }
                };
                let P = (D = S.filter(B => B.overflows[0] <= 0).sort((B, k) => B.overflows[1] - k.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!P) switch (p) {
                    case "bestFit": {
                        var N;
                        let B = (N = S.map(k => [k.placement, k.overflows.filter(G => G > 0).reduce((G, H) => G + H, 0)]).sort((k, G) => k[1] - G[1])[0]) == null ? void 0 : N[0];
                        B && (P = B);
                        break
                    }
                    case "initialPlacement":
                        P = i;
                        break
                }
                if (n !== P) return {
                    reset: {
                        placement: P
                    }
                }
            }
            return {}
        }
    }
};

function ld(t, e) {
    return {
        top: t.top - e.height,
        right: t.right - e.width,
        bottom: t.bottom - e.height,
        left: t.left - e.width
    }
}

function ud(t) {
    return nd.some(e => t[e] >= 0)
}
var La = function(t) {
    return t === void 0 && (t = {}), {
        name: "hide",
        options: t,
        async fn(e) {
            let {
                rects: o
            } = e, {
                strategy: r = "referenceHidden",
                ...n
            } = ho(t, e);
            switch (r) {
                case "referenceHidden": {
                    let a = await Cr(e, {
                            ...n,
                            elementContext: "reference"
                        }),
                        s = ld(a, o.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: ud(s)
                        }
                    }
                }
                case "escaped": {
                    let a = await Cr(e, {
                            ...n,
                            altBoundary: !0
                        }),
                        s = ld(a, o.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: ud(s)
                        }
                    }
                }
                default:
                    return {}
            }
        }
    }
};
async function a1(t, e) {
    let {
        placement: o,
        platform: r,
        elements: n
    } = t, a = await (r.isRTL == null ? void 0 : r.isRTL(n.floating)), s = go(o), i = wr(o), c = br(o) === "y", l = ["left", "top"].includes(s) ? -1 : 1, d = a && c ? -1 : 1, u = ho(e, t), {
        mainAxis: f,
        crossAxis: p,
        alignmentAxis: g
    } = typeof u == "number" ? {
        mainAxis: u,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...u
    };
    return i && typeof g == "number" && (p = i === "end" ? g * -1 : g), c ? {
        x: p * d,
        y: f * l
    } : {
        x: f * l,
        y: p * d
    }
}
var Fa = function(t) {
        return t === void 0 && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
                var o, r;
                let {
                    x: n,
                    y: a,
                    placement: s,
                    middlewareData: i
                } = e, c = await a1(e, t);
                return s === ((o = i.offset) == null ? void 0 : o.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
                    x: n + c.x,
                    y: a + c.y,
                    data: {
                        ...c,
                        placement: s
                    }
                }
            }
        }
    },
    Ba = function(t) {
        return t === void 0 && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
                let {
                    x: o,
                    y: r,
                    placement: n
                } = e, {
                    mainAxis: a = !0,
                    crossAxis: s = !1,
                    limiter: i = {
                        fn: h => {
                            let {
                                x: v,
                                y: _
                            } = h;
                            return {
                                x: v,
                                y: _
                            }
                        }
                    },
                    ...c
                } = ho(t, e), l = {
                    x: o,
                    y: r
                }, d = await Cr(e, c), u = br(go(n)), f = Pa(u), p = l[f], g = l[u];
                if (a) {
                    let h = f === "y" ? "top" : "left",
                        v = f === "y" ? "bottom" : "right",
                        _ = p + d[h],
                        y = p - d[v];
                    p = Ma(_, p, y)
                }
                if (s) {
                    let h = u === "y" ? "top" : "left",
                        v = u === "y" ? "bottom" : "right",
                        _ = g + d[h],
                        y = g - d[v];
                    g = Ma(_, g, y)
                }
                let m = i.fn({
                    ...e,
                    [f]: p,
                    [u]: g
                });
                return {
                    ...m,
                    data: {
                        x: m.x - o,
                        y: m.y - r
                    }
                }
            }
        }
    },
    Wa = function(t) {
        return t === void 0 && (t = {}), {
            options: t,
            fn(e) {
                let {
                    x: o,
                    y: r,
                    placement: n,
                    rects: a,
                    middlewareData: s
                } = e, {
                    offset: i = 0,
                    mainAxis: c = !0,
                    crossAxis: l = !0
                } = ho(t, e), d = {
                    x: o,
                    y: r
                }, u = br(n), f = Pa(u), p = d[f], g = d[u], m = ho(i, e), h = typeof m == "number" ? {
                    mainAxis: m,
                    crossAxis: 0
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    ...m
                };
                if (c) {
                    let y = f === "y" ? "height" : "width",
                        x = a.reference[f] - a.floating[y] + h.mainAxis,
                        b = a.reference[f] + a.reference[y] - h.mainAxis;
                    p < x ? p = x : p > b && (p = b)
                }
                if (l) {
                    var v, _;
                    let y = f === "y" ? "width" : "height",
                        x = ["top", "left"].includes(go(n)),
                        b = a.reference[u] - a.floating[y] + (x && ((v = s.offset) == null ? void 0 : v[u]) || 0) + (x ? 0 : h.crossAxis),
                        C = a.reference[u] + a.reference[y] + (x ? 0 : ((_ = s.offset) == null ? void 0 : _[u]) || 0) - (x ? h.crossAxis : 0);
                    g < b ? g = b : g > C && (g = C)
                }
                return {
                    [f]: p,
                    [u]: g
                }
            }
        }
    },
    Ha = function(t) {
        return t === void 0 && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
                let {
                    placement: o,
                    rects: r,
                    platform: n,
                    elements: a
                } = e, {
                    apply: s = () => {},
                    ...i
                } = ho(t, e), c = await Cr(e, i), l = go(o), d = wr(o), u = br(o) === "y", {
                    width: f,
                    height: p
                } = r.floating, g, m;
                l === "top" || l === "bottom" ? (g = l, m = d === (await (n.isRTL == null ? void 0 : n.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = l, g = d === "end" ? "top" : "bottom");
                let h = p - c[g],
                    v = f - c[m],
                    _ = !e.middlewareData.shift,
                    y = h,
                    x = v;
                if (u) {
                    let C = f - c.left - c.right;
                    x = d || _ ? po(v, C) : C
                } else {
                    let C = p - c.top - c.bottom;
                    y = d || _ ? po(h, C) : C
                }
                if (_ && !d) {
                    let C = Rt(c.left, 0),
                        R = Rt(c.right, 0),
                        S = Rt(c.top, 0),
                        E = Rt(c.bottom, 0);
                    u ? x = f - 2 * (C !== 0 || R !== 0 ? C + R : Rt(c.left, c.right)) : y = p - 2 * (S !== 0 || E !== 0 ? S + E : Rt(c.top, c.bottom))
                }
                await s({
                    ...e,
                    availableWidth: x,
                    availableHeight: y
                });
                let b = await n.getDimensions(a.floating);
                return f !== b.width || p !== b.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Eo(t) {
    return md(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function Dt(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}

function vo(t) {
    var e;
    return (e = (md(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}

function md(t) {
    return t instanceof Node || t instanceof Dt(t).Node
}

function yo(t) {
    return t instanceof Element || t instanceof Dt(t).Element
}

function eo(t) {
    return t instanceof HTMLElement || t instanceof Dt(t).HTMLElement
}

function fd(t) {
    return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Dt(t).ShadowRoot
}

function an(t) {
    let {
        overflow: e,
        overflowX: o,
        overflowY: r,
        display: n
    } = Bt(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + r + o) && !["inline", "contents"].includes(n)
}

function pd(t) {
    return ["table", "td", "th"].includes(Eo(t))
}

function ja(t) {
    let e = za(),
        o = Bt(t);
    return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !e && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !e && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (o.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (o.contain || "").includes(r))
}

function hd(t) {
    let e = Rr(t);
    for (; eo(e) && !Hn(e);) {
        if (ja(e)) return e;
        e = Rr(e)
    }
    return null
}

function za() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Hn(t) {
    return ["html", "body", "#document"].includes(Eo(t))
}

function Bt(t) {
    return Dt(t).getComputedStyle(t)
}

function jn(t) {
    return yo(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.pageXOffset,
        scrollTop: t.pageYOffset
    }
}

function Rr(t) {
    if (Eo(t) === "html") return t;
    let e = t.assignedSlot || t.parentNode || fd(t) && t.host || vo(t);
    return fd(e) ? e.host : e
}

function gd(t) {
    let e = Rr(t);
    return Hn(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : eo(e) && an(e) ? e : gd(e)
}

function Sr(t, e, o) {
    var r;
    e === void 0 && (e = []), o === void 0 && (o = !0);
    let n = gd(t),
        a = n === ((r = t.ownerDocument) == null ? void 0 : r.body),
        s = Dt(n);
    return a ? e.concat(s, s.visualViewport || [], an(n) ? n : [], s.frameElement && o ? Sr(s.frameElement) : []) : e.concat(n, Sr(n, [], o))
}

function _d(t) {
    let e = Bt(t),
        o = parseFloat(e.width) || 0,
        r = parseFloat(e.height) || 0,
        n = eo(t),
        a = n ? t.offsetWidth : o,
        s = n ? t.offsetHeight : r,
        i = Bn(o) !== a || Bn(r) !== s;
    return i && (o = a, r = s), {
        width: o,
        height: r,
        $: i
    }
}

function Ji(t) {
    return yo(t) ? t : t.contextElement
}

function sn(t) {
    let e = Ji(t);
    if (!eo(e)) return To(1);
    let o = e.getBoundingClientRect(),
        {
            width: r,
            height: n,
            $: a
        } = _d(e),
        s = (a ? Bn(o.width) : o.width) / r,
        i = (a ? Bn(o.height) : o.height) / n;
    return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
        x: s,
        y: i
    }
}
var c1 = To(0);

function wd(t) {
    let e = Dt(t);
    return !za() || !e.visualViewport ? c1 : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}

function l1(t, e, o) {
    return e === void 0 && (e = !1), !o || e && o !== Dt(t) ? !1 : e
}

function Tr(t, e, o, r) {
    e === void 0 && (e = !1), o === void 0 && (o = !1);
    let n = t.getBoundingClientRect(),
        a = Ji(t),
        s = To(1);
    e && (r ? yo(r) && (s = sn(r)) : s = sn(t));
    let i = l1(a, o, r) ? wd(a) : To(0),
        c = (n.left + i.x) / s.x,
        l = (n.top + i.y) / s.y,
        d = n.width / s.x,
        u = n.height / s.y;
    if (a) {
        let f = Dt(a),
            p = r && yo(r) ? Dt(r) : r,
            g = f.frameElement;
        for (; g && r && p !== f;) {
            let m = sn(g),
                h = g.getBoundingClientRect(),
                v = Bt(g),
                _ = h.left + (g.clientLeft + parseFloat(v.paddingLeft)) * m.x,
                y = h.top + (g.clientTop + parseFloat(v.paddingTop)) * m.y;
            c *= m.x, l *= m.y, d *= m.x, u *= m.y, c += _, l += y, g = Dt(g).frameElement
        }
    }
    return xr({
        width: d,
        height: u,
        x: c,
        y: l
    })
}

function u1(t) {
    let {
        rect: e,
        offsetParent: o,
        strategy: r
    } = t, n = eo(o), a = vo(o);
    if (o === a) return e;
    let s = {
            scrollLeft: 0,
            scrollTop: 0
        },
        i = To(1),
        c = To(0);
    if ((n || !n && r !== "fixed") && ((Eo(o) !== "body" || an(a)) && (s = jn(o)), eo(o))) {
        let l = Tr(o);
        i = sn(o), c.x = l.x + o.clientLeft, c.y = l.y + o.clientTop
    }
    return {
        width: e.width * i.x,
        height: e.height * i.y,
        x: e.x * i.x - s.scrollLeft * i.x + c.x,
        y: e.y * i.y - s.scrollTop * i.y + c.y
    }
}

function d1(t) {
    return Array.from(t.getClientRects())
}

function bd(t) {
    return Tr(vo(t)).left + jn(t).scrollLeft
}

function f1(t) {
    let e = vo(t),
        o = jn(t),
        r = t.ownerDocument.body,
        n = Rt(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
        a = Rt(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight),
        s = -o.scrollLeft + bd(t),
        i = -o.scrollTop;
    return Bt(r).direction === "rtl" && (s += Rt(e.clientWidth, r.clientWidth) - n), {
        width: n,
        height: a,
        x: s,
        y: i
    }
}

function m1(t, e) {
    let o = Dt(t),
        r = vo(t),
        n = o.visualViewport,
        a = r.clientWidth,
        s = r.clientHeight,
        i = 0,
        c = 0;
    if (n) {
        a = n.width, s = n.height;
        let l = za();
        (!l || l && e === "fixed") && (i = n.offsetLeft, c = n.offsetTop)
    }
    return {
        width: a,
        height: s,
        x: i,
        y: c
    }
}

function p1(t, e) {
    let o = Tr(t, !0, e === "fixed"),
        r = o.top + t.clientTop,
        n = o.left + t.clientLeft,
        a = eo(t) ? sn(t) : To(1),
        s = t.clientWidth * a.x,
        i = t.clientHeight * a.y,
        c = n * a.x,
        l = r * a.y;
    return {
        width: s,
        height: i,
        x: c,
        y: l
    }
}

function vd(t, e, o) {
    let r;
    if (e === "viewport") r = m1(t, o);
    else if (e === "document") r = f1(vo(t));
    else if (yo(e)) r = p1(e, o);
    else {
        let n = wd(t);
        r = {
            ...e,
            x: e.x - n.x,
            y: e.y - n.y
        }
    }
    return xr(r)
}

function xd(t, e) {
    let o = Rr(t);
    return o === e || !yo(o) || Hn(o) ? !1 : Bt(o).position === "fixed" || xd(o, e)
}

function h1(t, e) {
    let o = e.get(t);
    if (o) return o;
    let r = Sr(t, [], !1).filter(i => yo(i) && Eo(i) !== "body"),
        n = null,
        a = Bt(t).position === "fixed",
        s = a ? Rr(t) : t;
    for (; yo(s) && !Hn(s);) {
        let i = Bt(s),
            c = ja(s);
        !c && i.position === "fixed" && (n = null), (a ? !c && !n : !c && i.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || an(s) && !c && xd(t, s)) ? r = r.filter(d => d !== s) : n = i, s = Rr(s)
    }
    return e.set(t, r), r
}

function g1(t) {
    let {
        element: e,
        boundary: o,
        rootBoundary: r,
        strategy: n
    } = t, s = [...o === "clippingAncestors" ? h1(e, this._c) : [].concat(o), r], i = s[0], c = s.reduce((l, d) => {
        let u = vd(e, d, n);
        return l.top = Rt(u.top, l.top), l.right = po(u.right, l.right), l.bottom = po(u.bottom, l.bottom), l.left = Rt(u.left, l.left), l
    }, vd(e, i, n));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}

function v1(t) {
    return _d(t)
}

function y1(t, e, o) {
    let r = eo(e),
        n = vo(e),
        a = o === "fixed",
        s = Tr(t, !0, a, e),
        i = {
            scrollLeft: 0,
            scrollTop: 0
        },
        c = To(0);
    if (r || !r && !a)
        if ((Eo(e) !== "body" || an(n)) && (i = jn(e)), r) {
            let l = Tr(e, !0, a, e);
            c.x = l.x + e.clientLeft, c.y = l.y + e.clientTop
        } else n && (c.x = bd(n));
    return {
        x: s.left + i.scrollLeft - c.x,
        y: s.top + i.scrollTop - c.y,
        width: s.width,
        height: s.height
    }
}

function yd(t, e) {
    return !eo(t) || Bt(t).position === "fixed" ? null : e ? e(t) : t.offsetParent
}

function Cd(t, e) {
    let o = Dt(t);
    if (!eo(t)) return o;
    let r = yd(t, e);
    for (; r && pd(r) && Bt(r).position === "static";) r = yd(r, e);
    return r && (Eo(r) === "html" || Eo(r) === "body" && Bt(r).position === "static" && !ja(r)) ? o : r || hd(t) || o
}
var _1 = async function(t) {
    let {
        reference: e,
        floating: o,
        strategy: r
    } = t, n = this.getOffsetParent || Cd, a = this.getDimensions;
    return {
        reference: y1(e, await n(o), r),
        floating: {
            x: 0,
            y: 0,
            ...await a(o)
        }
    }
};

function w1(t) {
    return Bt(t).direction === "rtl"
}
var Rd = {
    convertOffsetParentRelativeRectToViewportRelativeRect: u1,
    getDocumentElement: vo,
    getClippingRect: g1,
    getOffsetParent: Cd,
    getElementRects: _1,
    getClientRects: d1,
    getDimensions: v1,
    getScale: sn,
    isElement: yo,
    isRTL: w1
};

function b1(t, e) {
    let o = null,
        r, n = vo(t);

    function a() {
        clearTimeout(r), o && o.disconnect(), o = null
    }

    function s(i, c) {
        i === void 0 && (i = !1), c === void 0 && (c = 1), a();
        let {
            left: l,
            top: d,
            width: u,
            height: f
        } = t.getBoundingClientRect();
        if (i || e(), !u || !f) return;
        let p = Wn(d),
            g = Wn(n.clientWidth - (l + u)),
            m = Wn(n.clientHeight - (d + f)),
            h = Wn(l),
            _ = {
                rootMargin: -p + "px " + -g + "px " + -m + "px " + -h + "px",
                threshold: Rt(0, po(1, c)) || 1
            },
            y = !0;

        function x(b) {
            let C = b[0].intersectionRatio;
            if (C !== c) {
                if (!y) return s();
                C ? s(!1, C) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 100)
            }
            y = !1
        }
        try {
            o = new IntersectionObserver(x, {
                ..._,
                root: n.ownerDocument
            })
        } catch {
            o = new IntersectionObserver(x, _)
        }
        o.observe(t)
    }
    return s(!0), a
}

function ec(t, e, o, r) {
    r === void 0 && (r = {});
    let {
        ancestorScroll: n = !0,
        ancestorResize: a = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: i = typeof IntersectionObserver == "function",
        animationFrame: c = !1
    } = r, l = Ji(t), d = n || a ? [...l ? Sr(l) : [], ...Sr(e)] : [];
    d.forEach(v => {
        n && v.addEventListener("scroll", o, {
            passive: !0
        }), a && v.addEventListener("resize", o)
    });
    let u = l && i ? b1(l, o) : null,
        f = -1,
        p = null;
    s && (p = new ResizeObserver(v => {
        let [_] = v;
        _ && _.target === l && p && (p.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
            p && p.observe(e)
        })), o()
    }), l && !c && p.observe(l), p.observe(e));
    let g, m = c ? Tr(t) : null;
    c && h();

    function h() {
        let v = Tr(t);
        m && (v.x !== m.x || v.y !== m.y || v.width !== m.width || v.height !== m.height) && o(), m = v, g = requestAnimationFrame(h)
    }
    return o(), () => {
        d.forEach(v => {
            n && v.removeEventListener("scroll", o), a && v.removeEventListener("resize", o)
        }), u && u(), p && p.disconnect(), p = null, c && cancelAnimationFrame(g)
    }
}
var tc = (t, e, o) => {
    let r = new Map,
        n = {
            platform: Rd,
            ...o
        },
        a = {
            ...n.platform,
            _c: r
        };
    return dd(t, e, {
        ...n,
        platform: a
    })
};
var Ze = w(M(), 1),
    Ya = w(M(), 1),
    Ed = w(kn(), 1),
    Dd = t => {
        function e(o) {
            return {}.hasOwnProperty.call(o, "current")
        }
        return {
            name: "arrow",
            options: t,
            fn(o) {
                let {
                    element: r,
                    padding: n
                } = typeof t == "function" ? t(o) : t;
                return r && e(r) ? r.current != null ? ka({
                    element: r.current,
                    padding: n
                }).fn(o) : {} : r ? ka({
                    element: r,
                    padding: n
                }).fn(o) : {}
            }
        }
    },
    Ua = typeof document < "u" ? Ya.useLayoutEffect : Ya.useEffect;

function Ga(t, e) {
    if (t === e) return !0;
    if (typeof t != typeof e) return !1;
    if (typeof t == "function" && t.toString() === e.toString()) return !0;
    let o, r, n;
    if (t && e && typeof t == "object") {
        if (Array.isArray(t)) {
            if (o = t.length, o != e.length) return !1;
            for (r = o; r-- !== 0;)
                if (!Ga(t[r], e[r])) return !1;
            return !0
        }
        if (n = Object.keys(t), o = n.length, o !== Object.keys(e).length) return !1;
        for (r = o; r-- !== 0;)
            if (!{}.hasOwnProperty.call(e, n[r])) return !1;
        for (r = o; r-- !== 0;) {
            let a = n[r];
            if (!(a === "_owner" && t.$$typeof) && !Ga(t[a], e[a])) return !1
        }
        return !0
    }
    return t !== t && e !== e
}

function Nd(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Sd(t, e) {
    let o = Nd(t);
    return Math.round(e * o) / o
}

function Td(t) {
    let e = Ze.useRef(t);
    return Ua(() => {
        e.current = t
    }), e
}

function Md(t) {
    t === void 0 && (t = {});
    let {
        placement: e = "bottom",
        strategy: o = "absolute",
        middleware: r = [],
        platform: n,
        elements: {
            reference: a,
            floating: s
        } = {},
        transform: i = !0,
        whileElementsMounted: c,
        open: l
    } = t, [d, u] = Ze.useState({
        x: 0,
        y: 0,
        strategy: o,
        placement: e,
        middlewareData: {},
        isPositioned: !1
    }), [f, p] = Ze.useState(r);
    Ga(f, r) || p(r);
    let [g, m] = Ze.useState(null), [h, v] = Ze.useState(null), _ = Ze.useCallback(k => {
        k != C.current && (C.current = k, m(k))
    }, [m]), y = Ze.useCallback(k => {
        k !== R.current && (R.current = k, v(k))
    }, [v]), x = a || g, b = s || h, C = Ze.useRef(null), R = Ze.useRef(null), S = Ze.useRef(d), E = Td(c), D = Td(n), N = Ze.useCallback(() => {
        if (!C.current || !R.current) return;
        let k = {
            placement: e,
            strategy: o,
            middleware: f
        };
        D.current && (k.platform = D.current), tc(C.current, R.current, k).then(G => {
            let H = {
                ...G,
                isPositioned: !0
            };
            O.current && !Ga(S.current, H) && (S.current = H, Ed.flushSync(() => {
                u(H)
            }))
        })
    }, [f, e, o, D]);
    Ua(() => {
        l === !1 && S.current.isPositioned && (S.current.isPositioned = !1, u(k => ({
            ...k,
            isPositioned: !1
        })))
    }, [l]);
    let O = Ze.useRef(!1);
    Ua(() => (O.current = !0, () => {
        O.current = !1
    }), []), Ua(() => {
        if (x && (C.current = x), b && (R.current = b), x && b) {
            if (E.current) return E.current(x, b, N);
            N()
        }
    }, [x, b, N, E]);
    let F = Ze.useMemo(() => ({
            reference: C,
            floating: R,
            setReference: _,
            setFloating: y
        }), [_, y]),
        P = Ze.useMemo(() => ({
            reference: x,
            floating: b
        }), [x, b]),
        B = Ze.useMemo(() => {
            let k = {
                position: o,
                left: 0,
                top: 0
            };
            if (!P.floating) return k;
            let G = Sd(P.floating, d.x),
                H = Sd(P.floating, d.y);
            return i ? {
                ...k,
                transform: "translate(" + G + "px, " + H + "px)",
                ...Nd(P.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: o,
                left: G,
                top: H
            }
        }, [o, i, P.floating, d.x, d.y]);
    return Ze.useMemo(() => ({
        ...d,
        update: N,
        refs: F,
        elements: P,
        floatingStyles: B
    }), [d, N, F, P, B])
}
var Pd = w(M(), 1);
var oc = w(W(), 1),
    x1 = "Arrow",
    Od = Pd.forwardRef((t, e) => {
        let {
            children: o,
            width: r = 10,
            height: n = 5,
            ...a
        } = t;
        return (0, oc.jsx)(z.svg, {
            ...a,
            ref: e,
            width: r,
            height: n,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: t.asChild ? o : (0, oc.jsx)("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Od.displayName = x1;
var Id = Od;
var kd = w(M(), 1);

function Qo(t) {
    let [e, o] = kd.useState(void 0);
    return Le(() => {
        if (t) {
            o({
                width: t.offsetWidth,
                height: t.offsetHeight
            });
            let r = new ResizeObserver(n => {
                if (!Array.isArray(n) || !n.length) return;
                let a = n[0],
                    s, i;
                if ("borderBoxSize" in a) {
                    let c = a.borderBoxSize,
                        l = Array.isArray(c) ? c[0] : c;
                    s = l.inlineSize, i = l.blockSize
                } else s = t.offsetWidth, i = t.offsetHeight;
                o({
                    width: s,
                    height: i
                })
            });
            return r.observe(t, {
                box: "border-box"
            }), () => r.unobserve(t)
        } else o(void 0)
    }, [t]), e
}
var Jo = w(W(), 1);
var rc = "Popper",
    [Ad, $t] = Se(rc),
    [R1, Ld] = Ad(rc),
    Fd = t => {
        let {
            __scopePopper: e,
            children: o
        } = t, [r, n] = Wt.useState(null);
        return (0, Jo.jsx)(R1, {
            scope: e,
            anchor: r,
            onAnchorChange: n,
            children: o
        })
    };
Fd.displayName = rc;
var Bd = "PopperAnchor",
    Wd = Wt.forwardRef((t, e) => {
        let {
            __scopePopper: o,
            virtualRef: r,
            ...n
        } = t, a = Ld(Bd, o), s = Wt.useRef(null), i = X(e, s);
        return Wt.useEffect(() => {
            a.onAnchorChange(r?.current || s.current)
        }), r ? null : (0, Jo.jsx)(z.div, {
            ...n,
            ref: i
        })
    });
Wd.displayName = Bd;
var nc = "PopperContent",
    [S1, T1] = Ad(nc),
    Hd = Wt.forwardRef((t, e) => {
        let {
            __scopePopper: o,
            side: r = "bottom",
            sideOffset: n = 0,
            align: a = "center",
            alignOffset: s = 0,
            arrowPadding: i = 0,
            avoidCollisions: c = !0,
            collisionBoundary: l = [],
            collisionPadding: d = 0,
            sticky: u = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: g,
            ...m
        } = t, h = Ld(nc, o), [v, _] = Wt.useState(null), y = X(e, j => _(j)), [x, b] = Wt.useState(null), C = Qo(x), R = C?.width ?? 0, S = C?.height ?? 0, E = r + (a !== "center" ? "-" + a : ""), D = typeof d == "number" ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, N = Array.isArray(l) ? l : [l], O = N.length > 0, F = {
            padding: D,
            boundary: N.filter(D1),
            altBoundary: O
        }, {
            refs: P,
            floatingStyles: B,
            placement: k,
            isPositioned: G,
            middlewareData: H
        } = Md({
            strategy: "fixed",
            placement: E,
            whileElementsMounted: (...j) => ec(...j, {
                animationFrame: p === "always"
            }),
            elements: {
                reference: h.anchor
            },
            middleware: [Fa({
                mainAxis: n + S,
                alignmentAxis: s
            }), c && Ba({
                mainAxis: !0,
                crossAxis: !1,
                limiter: u === "partial" ? Wa() : void 0,
                ...F
            }), c && Aa({
                ...F
            }), Ha({
                ...F,
                apply: ({
                    elements: j,
                    rects: ce,
                    availableWidth: ve,
                    availableHeight: ae
                }) => {
                    let {
                        width: Y,
                        height: we
                    } = ce.reference, Ae = j.floating.style;
                    Ae.setProperty("--radix-popper-available-width", `${ve}px`), Ae.setProperty("--radix-popper-available-height", `${ae}px`), Ae.setProperty("--radix-popper-anchor-width", `${Y}px`), Ae.setProperty("--radix-popper-anchor-height", `${we}px`)
                }
            }), x && Dd({
                element: x,
                padding: i
            }), N1({
                arrowWidth: R,
                arrowHeight: S
            }), f && La({
                strategy: "referenceHidden",
                ...F
            })]
        }), [L, re] = Ud(k), ne = Ye(g);
        Le(() => {
            G && ne?.()
        }, [G, ne]);
        let ue = H.arrow?.x,
            de = H.arrow?.y,
            pe = H.arrow?.centerOffset !== 0,
            [_e, be] = Wt.useState();
        return Le(() => {
            v && be(window.getComputedStyle(v).zIndex)
        }, [v]), (0, Jo.jsx)("div", {
            ref: P.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...B,
                transform: G ? B.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: _e,
                ["--radix-popper-transform-origin"]: [H.transformOrigin?.x, H.transformOrigin?.y].join(" "),
                ...H.hide?.referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: t.dir,
            children: (0, Jo.jsx)(S1, {
                scope: o,
                placedSide: L,
                onArrowChange: b,
                arrowX: ue,
                arrowY: de,
                shouldHideArrow: pe,
                children: (0, Jo.jsx)(z.div, {
                    "data-side": L,
                    "data-align": re,
                    ...m,
                    ref: y,
                    style: {
                        ...m.style,
                        animation: G ? void 0 : "none"
                    }
                })
            })
        })
    });
Hd.displayName = nc;
var jd = "PopperArrow",
    E1 = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    zd = Wt.forwardRef(function(e, o) {
        let {
            __scopePopper: r,
            ...n
        } = e, a = T1(jd, r), s = E1[a.placedSide];
        return (0, Jo.jsx)("span", {
            ref: a.onArrowChange,
            style: {
                position: "absolute",
                left: a.arrowX,
                top: a.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                } [a.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                } [a.placedSide],
                visibility: a.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, Jo.jsx)(Id, {
                ...n,
                ref: o,
                style: {
                    ...n.style,
                    display: "block"
                }
            })
        })
    });
zd.displayName = jd;

function D1(t) {
    return t !== null
}
var N1 = t => ({
    name: "transformOrigin",
    options: t,
    fn(e) {
        let {
            placement: o,
            rects: r,
            middlewareData: n
        } = e, s = n.arrow?.centerOffset !== 0, i = s ? 0 : t.arrowWidth, c = s ? 0 : t.arrowHeight, [l, d] = Ud(o), u = {
            start: "0%",
            center: "50%",
            end: "100%"
        } [d], f = (n.arrow?.x ?? 0) + i / 2, p = (n.arrow?.y ?? 0) + c / 2, g = "", m = "";
        return l === "bottom" ? (g = s ? u : `${f}px`, m = `${-c}px`) : l === "top" ? (g = s ? u : `${f}px`, m = `${r.floating.height+c}px`) : l === "right" ? (g = `${-c}px`, m = s ? u : `${p}px`) : l === "left" && (g = `${r.floating.width+c}px`, m = s ? u : `${p}px`), {
            data: {
                x: g,
                y: m
            }
        }
    }
});

function Ud(t) {
    let [e, o = "center"] = t.split("-");
    return [e, o]
}
var Do = Fd,
    No = Wd,
    er = Hd,
    tr = zd;
var qa = w(M(), 1),
    Gd = w(kn(), 1);
var Yd = w(W(), 1),
    M1 = "Portal",
    Ht = qa.forwardRef((t, e) => {
        let {
            container: o,
            ...r
        } = t, [n, a] = qa.useState(!1);
        Le(() => a(!0), []);
        let s = o || n && globalThis?.document?.body;
        return s ? Gd.default.createPortal((0, Yd.jsx)(z.div, {
            ...r,
            ref: e
        }), s) : null
    });
Ht.displayName = M1;
var Kt = w(M(), 1);
var $a = w(M(), 1);
var P1 = Kt[" useInsertionEffect ".trim().toString()] || Le;

function He({
    prop: t,
    defaultProp: e,
    onChange: o = () => {},
    caller: r
}) {
    let [n, a, s] = O1({
        defaultProp: e,
        onChange: o
    }), i = t !== void 0, c = i ? t : n; {
        let d = Kt.useRef(t !== void 0);
        Kt.useEffect(() => {
            let u = d.current;
            u !== i && console.warn(`${r} is changing from ${u?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), d.current = i
        }, [i, r])
    }
    let l = Kt.useCallback(d => {
        if (i) {
            let u = I1(d) ? d(t) : d;
            u !== t && s.current?.(u)
        } else a(d)
    }, [i, t, a, s]);
    return [c, l]
}

function O1({
    defaultProp: t,
    onChange: e
}) {
    let [o, r] = Kt.useState(t), n = Kt.useRef(o), a = Kt.useRef(e);
    return P1(() => {
        a.current = e
    }, [e]), Kt.useEffect(() => {
        n.current !== o && (a.current?.(o), n.current = o)
    }, [o, n]), [o, r, a]
}

function I1(t) {
    return typeof t == "function"
}
var HI = Symbol("RADIX:SYNC_STATE");
var Ka = w(M(), 1);

function or(t) {
    let e = Ka.useRef({
        value: t,
        previous: t
    });
    return Ka.useMemo(() => (e.current.value !== t && (e.current.previous = e.current.value, e.current.value = t), e.current.previous), [t])
}
var Vd = w(M(), 1);
var qd = w(W(), 1),
    ac = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    k1 = "VisuallyHidden",
    zn = Vd.forwardRef((t, e) => (0, qd.jsx)(z.span, {
        ...t,
        ref: e,
        style: {
            ...ac,
            ...t.style
        }
    }));
zn.displayName = k1;
var $d = zn;
var L1 = function(t) {
        if (typeof document > "u") return null;
        var e = Array.isArray(t) ? t[0] : t;
        return e.ownerDocument.body
    },
    cn = new WeakMap,
    Xa = new WeakMap,
    Za = {},
    sc = 0,
    Kd = function(t) {
        return t && (t.host || Kd(t.parentNode))
    },
    F1 = function(t, e) {
        return e.map(function(o) {
            if (t.contains(o)) return o;
            var r = Kd(o);
            return r && t.contains(r) ? r : (console.error("aria-hidden", o, "in not contained inside", t, ". Doing nothing"), null)
        }).filter(function(o) {
            return Boolean(o)
        })
    },
    B1 = function(t, e, o, r) {
        var n = F1(e, Array.isArray(t) ? t : [t]);
        Za[o] || (Za[o] = new WeakMap);
        var a = Za[o],
            s = [],
            i = new Set,
            c = new Set(n),
            l = function(u) {
                !u || i.has(u) || (i.add(u), l(u.parentNode))
            };
        n.forEach(l);
        var d = function(u) {
            !u || c.has(u) || Array.prototype.forEach.call(u.children, function(f) {
                if (i.has(f)) d(f);
                else try {
                    var p = f.getAttribute(r),
                        g = p !== null && p !== "false",
                        m = (cn.get(f) || 0) + 1,
                        h = (a.get(f) || 0) + 1;
                    cn.set(f, m), a.set(f, h), s.push(f), m === 1 && g && Xa.set(f, !0), h === 1 && f.setAttribute(o, "true"), g || f.setAttribute(r, "true")
                } catch (v) {
                    console.error("aria-hidden: cannot operate on ", f, v)
                }
            })
        };
        return d(e), i.clear(), sc++,
            function() {
                s.forEach(function(u) {
                    var f = cn.get(u) - 1,
                        p = a.get(u) - 1;
                    cn.set(u, f), a.set(u, p), f || (Xa.has(u) || u.removeAttribute(r), Xa.delete(u)), p || u.removeAttribute(o)
                }), sc--, sc || (cn = new WeakMap, cn = new WeakMap, Xa = new WeakMap, Za = {})
            }
    },
    rr = function(t, e, o) {
        o === void 0 && (o = "data-aria-hidden");
        var r = Array.from(Array.isArray(t) ? t : [t]),
            n = e || L1(t);
        return n ? (r.push.apply(r, Array.from(n.querySelectorAll("[aria-live]"))), B1(r, n, o, "aria-hidden")) : function() {
            return null
        }
    };
var Nt = function() {
    return Nt = Object.assign || function(e) {
        for (var o, r = 1, n = arguments.length; r < n; r++) {
            o = arguments[r];
            for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
        }
        return e
    }, Nt.apply(this, arguments)
};

function Qa(t, e) {
    var o = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (o[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, r = Object.getOwnPropertySymbols(t); n < r.length; n++) e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[n]) && (o[r[n]] = t[r[n]]);
    return o
}

function Xd(t, e, o) {
    if (o || arguments.length === 2)
        for (var r = 0, n = e.length, a; r < n; r++)(a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
    return t.concat(a || Array.prototype.slice.call(e))
}
var rs = w(M());
var pt = w(M());
var Er = "right-scroll-bar-position",
    Dr = "width-before-scroll-bar",
    ic = "with-scroll-bars-hidden",
    cc = "--removed-body-scroll-bar-size";

function Ja(t, e) {
    return typeof t == "function" ? t(e) : t && (t.current = e), t
}
var Zd = w(M());

function Qd(t, e) {
    var o = (0, Zd.useState)(function() {
        return {
            value: t,
            callback: e,
            facade: {
                get current() {
                    return o.value
                },
                set current(r) {
                    var n = o.value;
                    n !== r && (o.value = r, o.callback(r, n))
                }
            }
        }
    })[0];
    return o.callback = e, o.facade
}
var es = w(M());
var W1 = typeof window < "u" ? es.useLayoutEffect : es.useEffect,
    Jd = new WeakMap;

function lc(t, e) {
    var o = Qd(e || null, function(r) {
        return t.forEach(function(n) {
            return Ja(n, r)
        })
    });
    return W1(function() {
        var r = Jd.get(o);
        if (r) {
            var n = new Set(r),
                a = new Set(t),
                s = o.current;
            n.forEach(function(i) {
                a.has(i) || Ja(i, null)
            }), a.forEach(function(i) {
                n.has(i) || Ja(i, s)
            })
        }
        Jd.set(o, t)
    }, [t]), o
}

function H1(t) {
    return t
}

function j1(t, e) {
    e === void 0 && (e = H1);
    var o = [],
        r = !1,
        n = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return o.length ? o[o.length - 1] : t
            },
            useMedium: function(a) {
                var s = e(a, r);
                return o.push(s),
                    function() {
                        o = o.filter(function(i) {
                            return i !== s
                        })
                    }
            },
            assignSyncMedium: function(a) {
                for (r = !0; o.length;) {
                    var s = o;
                    o = [], s.forEach(a)
                }
                o = {
                    push: function(i) {
                        return a(i)
                    },
                    filter: function() {
                        return o
                    }
                }
            },
            assignMedium: function(a) {
                r = !0;
                var s = [];
                if (o.length) {
                    var i = o;
                    o = [], i.forEach(a), s = o
                }
                var c = function() {
                        var d = s;
                        s = [], d.forEach(a)
                    },
                    l = function() {
                        return Promise.resolve().then(c)
                    };
                l(), o = {
                    push: function(d) {
                        s.push(d), l()
                    },
                    filter: function(d) {
                        return s = s.filter(d), o
                    }
                }
            }
        };
    return n
}

function uc(t) {
    t === void 0 && (t = {});
    var e = j1(null);
    return e.options = Nt({
        async: !0,
        ssr: !1
    }, t), e
}
var ef = w(M()),
    tf = function(t) {
        var e = t.sideCar,
            o = Qa(t, ["sideCar"]);
        if (!e) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = e.read();
        if (!r) throw new Error("Sidecar medium not found");
        return ef.createElement(r, Nt({}, o))
    };
tf.isSideCarExport = !0;

function dc(t, e) {
    return t.useMedium(e), tf
}
var ts = uc();
var fc = function() {},
    Un = pt.forwardRef(function(t, e) {
        var o = pt.useRef(null),
            r = pt.useState({
                onScrollCapture: fc,
                onWheelCapture: fc,
                onTouchMoveCapture: fc
            }),
            n = r[0],
            a = r[1],
            s = t.forwardProps,
            i = t.children,
            c = t.className,
            l = t.removeScrollBar,
            d = t.enabled,
            u = t.shards,
            f = t.sideCar,
            p = t.noIsolation,
            g = t.inert,
            m = t.allowPinchZoom,
            h = t.as,
            v = h === void 0 ? "div" : h,
            _ = t.gapMode,
            y = Qa(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            x = f,
            b = lc([o, e]),
            C = Nt(Nt({}, y), n);
        return pt.createElement(pt.Fragment, null, d && pt.createElement(x, {
            sideCar: ts,
            removeScrollBar: l,
            shards: u,
            noIsolation: p,
            inert: g,
            setCallbacks: a,
            allowPinchZoom: !!m,
            lockRef: o,
            gapMode: _
        }), s ? pt.cloneElement(pt.Children.only(i), Nt(Nt({}, C), {
            ref: b
        })) : pt.createElement(v, Nt({}, C, {
            className: c,
            ref: b
        }), i))
    });
Un.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Un.classNames = {
    fullWidth: Dr,
    zeroRight: Er
};
var Fe = w(M());
var un = w(M());
var nf = w(M());
var of ;
var rf = function() {
    if ( of ) return of;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function z1() {
    if (!document) return null;
    var t = document.createElement("style");
    t.type = "text/css";
    var e = rf();
    return e && t.setAttribute("nonce", e), t
}

function U1(t, e) {
    t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))
}

function G1(t) {
    var e = document.head || document.getElementsByTagName("head")[0];
    e.appendChild(t)
}
var mc = function() {
    var t = 0,
        e = null;
    return {
        add: function(o) {
            t == 0 && (e = z1()) && (U1(e, o), G1(e)), t++
        },
        remove: function() {
            t--, !t && e && (e.parentNode && e.parentNode.removeChild(e), e = null)
        }
    }
};
var pc = function() {
    var t = mc();
    return function(e, o) {
        nf.useEffect(function() {
            return t.add(e),
                function() {
                    t.remove()
                }
        }, [e && o])
    }
};
var Gn = function() {
    var t = pc(),
        e = function(o) {
            var r = o.styles,
                n = o.dynamic;
            return t(r, n), null
        };
    return e
};
var Y1 = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    hc = function(t) {
        return parseInt(t || "", 10) || 0
    },
    V1 = function(t) {
        var e = window.getComputedStyle(document.body),
            o = e[t === "padding" ? "paddingLeft" : "marginLeft"],
            r = e[t === "padding" ? "paddingTop" : "marginTop"],
            n = e[t === "padding" ? "paddingRight" : "marginRight"];
        return [hc(o), hc(r), hc(n)]
    },
    gc = function(t) {
        if (t === void 0 && (t = "margin"), typeof window > "u") return Y1;
        var e = V1(t),
            o = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: e[0],
            top: e[1],
            right: e[2],
            gap: Math.max(0, r - o + e[2] - e[0])
        }
    };
var q1 = Gn(),
    ln = "data-scroll-locked",
    $1 = function(t, e, o, r) {
        var n = t.left,
            a = t.top,
            s = t.right,
            i = t.gap;
        return o === void 0 && (o = "margin"), `
  .`.concat(ic, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(ln, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([e && "position: relative ".concat(r, ";"), o === "margin" && `
    padding-left: `.concat(n, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `), o === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Er, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Dr, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Er, " .").concat(Er, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Dr, " .").concat(Dr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ln, `] {
    `).concat(cc, ": ").concat(i, `px;
  }
`)
    },
    af = function() {
        var t = parseInt(document.body.getAttribute(ln) || "0", 10);
        return isFinite(t) ? t : 0
    },
    K1 = function() {
        un.useEffect(function() {
            return document.body.setAttribute(ln, (af() + 1).toString()),
                function() {
                    var t = af() - 1;
                    t <= 0 ? document.body.removeAttribute(ln) : document.body.setAttribute(ln, t.toString())
                }
        }, [])
    },
    vc = function(t) {
        var e = t.noRelative,
            o = t.noImportant,
            r = t.gapMode,
            n = r === void 0 ? "margin" : r;
        K1();
        var a = un.useMemo(function() {
            return gc(n)
        }, [n]);
        return un.createElement(q1, {
            styles: $1(a, !e, n, o ? "" : "!important")
        })
    };
var yc = !1;
if (typeof window < "u") try {
    Yn = Object.defineProperty({}, "passive", {
        get: function() {
            return yc = !0, !0
        }
    }), window.addEventListener("test", Yn, Yn), window.removeEventListener("test", Yn, Yn)
} catch {
    yc = !1
}
var Yn, Nr = yc ? {
    passive: !1
} : !1;
var X1 = function(t) {
        return t.tagName === "TEXTAREA"
    },
    sf = function(t, e) {
        if (!(t instanceof Element)) return !1;
        var o = window.getComputedStyle(t);
        return o[e] !== "hidden" && !(o.overflowY === o.overflowX && !X1(t) && o[e] === "visible")
    },
    Z1 = function(t) {
        return sf(t, "overflowY")
    },
    Q1 = function(t) {
        return sf(t, "overflowX")
    },
    _c = function(t, e) {
        var o = e.ownerDocument,
            r = e;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var n = cf(t, r);
            if (n) {
                var a = lf(t, r),
                    s = a[1],
                    i = a[2];
                if (s > i) return !0
            }
            r = r.parentNode
        } while (r && r !== o.body);
        return !1
    },
    J1 = function(t) {
        var e = t.scrollTop,
            o = t.scrollHeight,
            r = t.clientHeight;
        return [e, o, r]
    },
    ex = function(t) {
        var e = t.scrollLeft,
            o = t.scrollWidth,
            r = t.clientWidth;
        return [e, o, r]
    },
    cf = function(t, e) {
        return t === "v" ? Z1(e) : Q1(e)
    },
    lf = function(t, e) {
        return t === "v" ? J1(e) : ex(e)
    },
    tx = function(t, e) {
        return t === "h" && e === "rtl" ? -1 : 1
    },
    uf = function(t, e, o, r, n) {
        var a = tx(t, window.getComputedStyle(e).direction),
            s = a * r,
            i = o.target,
            c = e.contains(i),
            l = !1,
            d = s > 0,
            u = 0,
            f = 0;
        do {
            var p = lf(t, i),
                g = p[0],
                m = p[1],
                h = p[2],
                v = m - h - a * g;
            (g || v) && cf(t, i) && (u += v, f += g), i instanceof ShadowRoot ? i = i.host : i = i.parentNode
        } while (!c && i !== document.body || c && (e.contains(i) || e === i));
        return (d && (n && Math.abs(u) < 1 || !n && s > u) || !d && (n && Math.abs(f) < 1 || !n && -s > f)) && (l = !0), l
    };
var os = function(t) {
        return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0]
    },
    df = function(t) {
        return [t.deltaX, t.deltaY]
    },
    ff = function(t) {
        return t && "current" in t ? t.current : t
    },
    ox = function(t, e) {
        return t[0] === e[0] && t[1] === e[1]
    },
    rx = function(t) {
        return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`)
    },
    nx = 0,
    dn = [];

function mf(t) {
    var e = Fe.useRef([]),
        o = Fe.useRef([0, 0]),
        r = Fe.useRef(),
        n = Fe.useState(nx++)[0],
        a = Fe.useState(Gn)[0],
        s = Fe.useRef(t);
    Fe.useEffect(function() {
        s.current = t
    }, [t]), Fe.useEffect(function() {
        if (t.inert) {
            document.body.classList.add("block-interactivity-".concat(n));
            var m = Xd([t.lockRef.current], (t.shards || []).map(ff), !0).filter(Boolean);
            return m.forEach(function(h) {
                    return h.classList.add("allow-interactivity-".concat(n))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(n)), m.forEach(function(h) {
                        return h.classList.remove("allow-interactivity-".concat(n))
                    })
                }
        }
    }, [t.inert, t.lockRef.current, t.shards]);
    var i = Fe.useCallback(function(m, h) {
            if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey) return !s.current.allowPinchZoom;
            var v = os(m),
                _ = o.current,
                y = "deltaX" in m ? m.deltaX : _[0] - v[0],
                x = "deltaY" in m ? m.deltaY : _[1] - v[1],
                b, C = m.target,
                R = Math.abs(y) > Math.abs(x) ? "h" : "v";
            if ("touches" in m && R === "h" && C.type === "range") return !1;
            var S = _c(R, C);
            if (!S) return !0;
            if (S ? b = R : (b = R === "v" ? "h" : "v", S = _c(R, C)), !S) return !1;
            if (!r.current && "changedTouches" in m && (y || x) && (r.current = b), !b) return !0;
            var E = r.current || b;
            return uf(E, h, m, E === "h" ? y : x, !0)
        }, []),
        c = Fe.useCallback(function(m) {
            var h = m;
            if (!(!dn.length || dn[dn.length - 1] !== a)) {
                var v = "deltaY" in h ? df(h) : os(h),
                    _ = e.current.filter(function(b) {
                        return b.name === h.type && (b.target === h.target || h.target === b.shadowParent) && ox(b.delta, v)
                    })[0];
                if (_ && _.should) {
                    h.cancelable && h.preventDefault();
                    return
                }
                if (!_) {
                    var y = (s.current.shards || []).map(ff).filter(Boolean).filter(function(b) {
                            return b.contains(h.target)
                        }),
                        x = y.length > 0 ? i(h, y[0]) : !s.current.noIsolation;
                    x && h.cancelable && h.preventDefault()
                }
            }
        }, []),
        l = Fe.useCallback(function(m, h, v, _) {
            var y = {
                name: m,
                delta: h,
                target: v,
                should: _,
                shadowParent: ax(v)
            };
            e.current.push(y), setTimeout(function() {
                e.current = e.current.filter(function(x) {
                    return x !== y
                })
            }, 1)
        }, []),
        d = Fe.useCallback(function(m) {
            o.current = os(m), r.current = void 0
        }, []),
        u = Fe.useCallback(function(m) {
            l(m.type, df(m), m.target, i(m, t.lockRef.current))
        }, []),
        f = Fe.useCallback(function(m) {
            l(m.type, os(m), m.target, i(m, t.lockRef.current))
        }, []);
    Fe.useEffect(function() {
        return dn.push(a), t.setCallbacks({
                onScrollCapture: u,
                onWheelCapture: u,
                onTouchMoveCapture: f
            }), document.addEventListener("wheel", c, Nr), document.addEventListener("touchmove", c, Nr), document.addEventListener("touchstart", d, Nr),
            function() {
                dn = dn.filter(function(m) {
                    return m !== a
                }), document.removeEventListener("wheel", c, Nr), document.removeEventListener("touchmove", c, Nr), document.removeEventListener("touchstart", d, Nr)
            }
    }, []);
    var p = t.removeScrollBar,
        g = t.inert;
    return Fe.createElement(Fe.Fragment, null, g ? Fe.createElement(a, {
        styles: rx(n)
    }) : null, p ? Fe.createElement(vc, {
        gapMode: t.gapMode
    }) : null)
}

function ax(t) {
    for (var e = null; t !== null;) t instanceof ShadowRoot && (e = t.host, t = t.host), t = t.parentNode;
    return e
}
var pf = dc(ts, mf);
var hf = rs.forwardRef(function(t, e) {
    return rs.createElement(Un, Nt({}, t, {
        ref: e,
        sideCar: pf
    }))
});
hf.classNames = Un.classNames;
var Mo = hf;
var ee = w(W(), 1),
    sx = [" ", "Enter", "ArrowUp", "ArrowDown"],
    ix = [" ", "Enter"],
    Mr = "Select",
    [as, ss, cx] = Ko(Mr),
    [fn, wA] = Se(Mr, [cx, $t]),
    is = $t(),
    [lx, nr] = fn(Mr),
    [ux, dx] = fn(Mr),
    gf = t => {
        let {
            __scopeSelect: e,
            children: o,
            open: r,
            defaultOpen: n,
            onOpenChange: a,
            value: s,
            defaultValue: i,
            onValueChange: c,
            dir: l,
            name: d,
            autoComplete: u,
            disabled: f,
            required: p,
            form: g
        } = t, m = is(e), [h, v] = U.useState(null), [_, y] = U.useState(null), [x, b] = U.useState(!1), C = mo(l), [R, S] = He({
            prop: r,
            defaultProp: n ?? !1,
            onChange: a,
            caller: Mr
        }), [E, D] = He({
            prop: s,
            defaultProp: i,
            onChange: c,
            caller: Mr
        }), N = U.useRef(null), O = h ? g || !!h.closest("form") : !0, [F, P] = U.useState(new Set), B = Array.from(F).map(k => k.props.value).join(";");
        return (0, ee.jsx)(Do, {
            ...m,
            children: (0, ee.jsxs)(lx, {
                required: p,
                scope: e,
                trigger: h,
                onTriggerChange: v,
                valueNode: _,
                onValueNodeChange: y,
                valueNodeHasChildren: x,
                onValueNodeHasChildrenChange: b,
                contentId: $e(),
                value: E,
                onValueChange: D,
                open: R,
                onOpenChange: S,
                dir: C,
                triggerPointerDownPosRef: N,
                disabled: f,
                children: [(0, ee.jsx)(as.Provider, {
                    scope: e,
                    children: (0, ee.jsx)(ux, {
                        scope: t.__scopeSelect,
                        onNativeOptionAdd: U.useCallback(k => {
                            P(G => new Set(G).add(k))
                        }, []),
                        onNativeOptionRemove: U.useCallback(k => {
                            P(G => {
                                let H = new Set(G);
                                return H.delete(k), H
                            })
                        }, []),
                        children: o
                    })
                }), O ? (0, ee.jsxs)(Lf, {
                    "aria-hidden": !0,
                    required: p,
                    tabIndex: -1,
                    name: d,
                    autoComplete: u,
                    value: E,
                    onChange: k => D(k.target.value),
                    disabled: f,
                    form: g,
                    children: [E === void 0 ? (0, ee.jsx)("option", {
                        value: ""
                    }) : null, Array.from(F)]
                }, B) : null]
            })
        })
    };
gf.displayName = Mr;
var vf = "SelectTrigger",
    yf = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            disabled: r = !1,
            ...n
        } = t, a = is(o), s = nr(vf, o), i = s.disabled || r, c = X(e, s.onTriggerChange), l = ss(o), d = U.useRef("touch"), [u, f, p] = Bf(m => {
            let h = l().filter(y => !y.disabled),
                v = h.find(y => y.value === s.value),
                _ = Wf(h, m, v);
            _ !== void 0 && s.onValueChange(_.value)
        }), g = m => {
            i || (s.onOpenChange(!0), p()), m && (s.triggerPointerDownPosRef.current = {
                x: Math.round(m.pageX),
                y: Math.round(m.pageY)
            })
        };
        return (0, ee.jsx)(No, {
            asChild: !0,
            ...a,
            children: (0, ee.jsx)(z.button, {
                type: "button",
                role: "combobox",
                "aria-controls": s.contentId,
                "aria-expanded": s.open,
                "aria-required": s.required,
                "aria-autocomplete": "none",
                dir: s.dir,
                "data-state": s.open ? "open" : "closed",
                disabled: i,
                "data-disabled": i ? "" : void 0,
                "data-placeholder": Ff(s.value) ? "" : void 0,
                ...n,
                ref: c,
                onClick: A(n.onClick, m => {
                    m.currentTarget.focus(), d.current !== "mouse" && g(m)
                }),
                onPointerDown: A(n.onPointerDown, m => {
                    d.current = m.pointerType;
                    let h = m.target;
                    h.hasPointerCapture(m.pointerId) && h.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (g(m), m.preventDefault())
                }),
                onKeyDown: A(n.onKeyDown, m => {
                    let h = u.current !== "";
                    !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && f(m.key), !(h && m.key === " ") && sx.includes(m.key) && (g(), m.preventDefault())
                })
            })
        })
    });
yf.displayName = vf;
var _f = "SelectValue",
    wf = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            className: r,
            style: n,
            children: a,
            placeholder: s = "",
            ...i
        } = t, c = nr(_f, o), {
            onValueNodeHasChildrenChange: l
        } = c, d = a !== void 0, u = X(e, c.onValueNodeChange);
        return Le(() => {
            l(d)
        }, [l, d]), (0, ee.jsx)(z.span, {
            ...i,
            ref: u,
            style: {
                pointerEvents: "none"
            },
            children: Ff(c.value) ? (0, ee.jsx)(ee.Fragment, {
                children: s
            }) : a
        })
    });
wf.displayName = _f;
var fx = "SelectIcon",
    bf = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            children: r,
            ...n
        } = t;
        return (0, ee.jsx)(z.span, {
            "aria-hidden": !0,
            ...n,
            ref: e,
            children: r || "\u25BC"
        })
    });
bf.displayName = fx;
var mx = "SelectPortal",
    xf = t => (0, ee.jsx)(Ht, {
        asChild: !0,
        ...t
    });
xf.displayName = mx;
var Pr = "SelectContent",
    Cf = U.forwardRef((t, e) => {
        let o = nr(Pr, t.__scopeSelect),
            [r, n] = U.useState();
        if (Le(() => {
                n(new DocumentFragment)
            }, []), !o.open) {
            let a = r;
            return a ? Sc.createPortal((0, ee.jsx)(Rf, {
                scope: t.__scopeSelect,
                children: (0, ee.jsx)(as.Slot, {
                    scope: t.__scopeSelect,
                    children: (0, ee.jsx)("div", {
                        children: t.children
                    })
                })
            }), a) : null
        }
        return (0, ee.jsx)(Sf, {
            ...t,
            ref: e
        })
    });
Cf.displayName = Pr;
var to = 10,
    [Rf, ar] = fn(Pr),
    px = "SelectContentImpl",
    hx = Ft("SelectContent.RemoveScroll"),
    Sf = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            position: r = "item-aligned",
            onCloseAutoFocus: n,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            side: i,
            sideOffset: c,
            align: l,
            alignOffset: d,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: g,
            hideWhenDetached: m,
            avoidCollisions: h,
            ...v
        } = t, _ = nr(Pr, o), [y, x] = U.useState(null), [b, C] = U.useState(null), R = X(e, j => x(j)), [S, E] = U.useState(null), [D, N] = U.useState(null), O = ss(o), [F, P] = U.useState(!1), B = U.useRef(!1);
        U.useEffect(() => {
            if (y) return rr(y)
        }, [y]), Xo();
        let k = U.useCallback(j => {
                let [ce, ...ve] = O().map(we => we.ref.current), [ae] = ve.slice(-1), Y = document.activeElement;
                for (let we of j)
                    if (we === Y || (we?.scrollIntoView({
                            block: "nearest"
                        }), we === ce && b && (b.scrollTop = 0), we === ae && b && (b.scrollTop = b.scrollHeight), we?.focus(), document.activeElement !== Y)) return
            }, [O, b]),
            G = U.useCallback(() => k([S, y]), [k, S, y]);
        U.useEffect(() => {
            F && G()
        }, [F, G]);
        let {
            onOpenChange: H,
            triggerPointerDownPosRef: L
        } = _;
        U.useEffect(() => {
            if (y) {
                let j = {
                        x: 0,
                        y: 0
                    },
                    ce = ae => {
                        j = {
                            x: Math.abs(Math.round(ae.pageX) - (L.current?.x ?? 0)),
                            y: Math.abs(Math.round(ae.pageY) - (L.current?.y ?? 0))
                        }
                    },
                    ve = ae => {
                        j.x <= 10 && j.y <= 10 ? ae.preventDefault() : y.contains(ae.target) || H(!1), document.removeEventListener("pointermove", ce), L.current = null
                    };
                return L.current !== null && (document.addEventListener("pointermove", ce), document.addEventListener("pointerup", ve, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", ce), document.removeEventListener("pointerup", ve, {
                        capture: !0
                    })
                }
            }
        }, [y, H, L]), U.useEffect(() => {
            let j = () => H(!1);
            return window.addEventListener("blur", j), window.addEventListener("resize", j), () => {
                window.removeEventListener("blur", j), window.removeEventListener("resize", j)
            }
        }, [H]);
        let [re, ne] = Bf(j => {
            let ce = O().filter(Y => !Y.disabled),
                ve = ce.find(Y => Y.ref.current === document.activeElement),
                ae = Wf(ce, j, ve);
            ae && setTimeout(() => ae.ref.current.focus())
        }), ue = U.useCallback((j, ce, ve) => {
            let ae = !B.current && !ve;
            (_.value !== void 0 && _.value === ce || ae) && (E(j), ae && (B.current = !0))
        }, [_.value]), de = U.useCallback(() => y?.focus(), [y]), pe = U.useCallback((j, ce, ve) => {
            let ae = !B.current && !ve;
            (_.value !== void 0 && _.value === ce || ae) && N(j)
        }, [_.value]), _e = r === "popper" ? wc : Tf, be = _e === wc ? {
            side: i,
            sideOffset: c,
            align: l,
            alignOffset: d,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: g,
            hideWhenDetached: m,
            avoidCollisions: h
        } : {};
        return (0, ee.jsx)(Rf, {
            scope: o,
            content: y,
            viewport: b,
            onViewportChange: C,
            itemRefCallback: ue,
            selectedItem: S,
            onItemLeave: de,
            itemTextRefCallback: pe,
            focusSelectedItem: G,
            selectedItemText: D,
            position: r,
            isPositioned: F,
            searchRef: re,
            children: (0, ee.jsx)(Mo, {
                as: hx,
                allowPinchZoom: !0,
                children: (0, ee.jsx)(So, {
                    asChild: !0,
                    trapped: _.open,
                    onMountAutoFocus: j => {
                        j.preventDefault()
                    },
                    onUnmountAutoFocus: A(n, j => {
                        _.trigger?.focus({
                            preventScroll: !0
                        }), j.preventDefault()
                    }),
                    children: (0, ee.jsx)(Vt, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        onFocusOutside: j => j.preventDefault(),
                        onDismiss: () => _.onOpenChange(!1),
                        children: (0, ee.jsx)(_e, {
                            role: "listbox",
                            id: _.contentId,
                            "data-state": _.open ? "open" : "closed",
                            dir: _.dir,
                            onContextMenu: j => j.preventDefault(),
                            ...v,
                            ...be,
                            onPlaced: () => P(!0),
                            ref: R,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...v.style
                            },
                            onKeyDown: A(v.onKeyDown, j => {
                                let ce = j.ctrlKey || j.altKey || j.metaKey;
                                if (j.key === "Tab" && j.preventDefault(), !ce && j.key.length === 1 && ne(j.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(j.key)) {
                                    let ae = O().filter(Y => !Y.disabled).map(Y => Y.ref.current);
                                    if (["ArrowUp", "End"].includes(j.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(j.key)) {
                                        let Y = j.target,
                                            we = ae.indexOf(Y);
                                        ae = ae.slice(we + 1)
                                    }
                                    setTimeout(() => k(ae)), j.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
Sf.displayName = px;
var gx = "SelectItemAlignedPosition",
    Tf = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            onPlaced: r,
            ...n
        } = t, a = nr(Pr, o), s = ar(Pr, o), [i, c] = U.useState(null), [l, d] = U.useState(null), u = X(e, R => d(R)), f = ss(o), p = U.useRef(!1), g = U.useRef(!0), {
            viewport: m,
            selectedItem: h,
            selectedItemText: v,
            focusSelectedItem: _
        } = s, y = U.useCallback(() => {
            if (a.trigger && a.valueNode && i && l && m && h && v) {
                let R = a.trigger.getBoundingClientRect(),
                    S = l.getBoundingClientRect(),
                    E = a.valueNode.getBoundingClientRect(),
                    D = v.getBoundingClientRect();
                if (a.dir !== "rtl") {
                    let Y = D.left - S.left,
                        we = E.left - Y,
                        Ae = R.left - we,
                        Be = R.width + Ae,
                        ut = Math.max(Be, S.width),
                        dt = window.innerWidth - to,
                        tt = Gi(we, [to, Math.max(to, dt - ut)]);
                    i.style.minWidth = Be + "px", i.style.left = tt + "px"
                } else {
                    let Y = S.right - D.right,
                        we = window.innerWidth - E.right - Y,
                        Ae = window.innerWidth - R.right - we,
                        Be = R.width + Ae,
                        ut = Math.max(Be, S.width),
                        dt = window.innerWidth - to,
                        tt = Gi(we, [to, Math.max(to, dt - ut)]);
                    i.style.minWidth = Be + "px", i.style.right = tt + "px"
                }
                let N = f(),
                    O = window.innerHeight - to * 2,
                    F = m.scrollHeight,
                    P = window.getComputedStyle(l),
                    B = parseInt(P.borderTopWidth, 10),
                    k = parseInt(P.paddingTop, 10),
                    G = parseInt(P.borderBottomWidth, 10),
                    H = parseInt(P.paddingBottom, 10),
                    L = B + k + F + H + G,
                    re = Math.min(h.offsetHeight * 5, L),
                    ne = window.getComputedStyle(m),
                    ue = parseInt(ne.paddingTop, 10),
                    de = parseInt(ne.paddingBottom, 10),
                    pe = R.top + R.height / 2 - to,
                    _e = O - pe,
                    be = h.offsetHeight / 2,
                    j = h.offsetTop + be,
                    ce = B + k + j,
                    ve = L - ce;
                if (ce <= pe) {
                    let Y = N.length > 0 && h === N[N.length - 1].ref.current;
                    i.style.bottom = "0px";
                    let we = l.clientHeight - m.offsetTop - m.offsetHeight,
                        Ae = Math.max(_e, be + (Y ? de : 0) + we + G),
                        Be = ce + Ae;
                    i.style.height = Be + "px"
                } else {
                    let Y = N.length > 0 && h === N[0].ref.current;
                    i.style.top = "0px";
                    let Ae = Math.max(pe, B + m.offsetTop + (Y ? ue : 0) + be) + ve;
                    i.style.height = Ae + "px", m.scrollTop = ce - pe + m.offsetTop
                }
                i.style.margin = `${to}px 0`, i.style.minHeight = re + "px", i.style.maxHeight = O + "px", r?.(), requestAnimationFrame(() => p.current = !0)
            }
        }, [f, a.trigger, a.valueNode, i, l, m, h, v, a.dir, r]);
        Le(() => y(), [y]);
        let [x, b] = U.useState();
        Le(() => {
            l && b(window.getComputedStyle(l).zIndex)
        }, [l]);
        let C = U.useCallback(R => {
            R && g.current === !0 && (y(), _?.(), g.current = !1)
        }, [y, _]);
        return (0, ee.jsx)(yx, {
            scope: o,
            contentWrapper: i,
            shouldExpandOnScrollRef: p,
            onScrollButtonChange: C,
            children: (0, ee.jsx)("div", {
                ref: c,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: x
                },
                children: (0, ee.jsx)(z.div, {
                    ...n,
                    ref: u,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...n.style
                    }
                })
            })
        })
    });
Tf.displayName = gx;
var vx = "SelectPopperPosition",
    wc = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            align: r = "start",
            collisionPadding: n = to,
            ...a
        } = t, s = is(o);
        return (0, ee.jsx)(er, {
            ...s,
            ...a,
            ref: e,
            align: r,
            collisionPadding: n,
            style: {
                boxSizing: "border-box",
                ...a.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
wc.displayName = vx;
var [yx, Tc] = fn(Pr, {}), bc = "SelectViewport", Ef = U.forwardRef((t, e) => {
    let {
        __scopeSelect: o,
        nonce: r,
        ...n
    } = t, a = ar(bc, o), s = Tc(bc, o), i = X(e, a.onViewportChange), c = U.useRef(0);
    return (0, ee.jsxs)(ee.Fragment, {
        children: [(0, ee.jsx)("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), (0, ee.jsx)(as.Slot, {
            scope: o,
            children: (0, ee.jsx)(z.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...n,
                ref: i,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...n.style
                },
                onScroll: A(n.onScroll, l => {
                    let d = l.currentTarget,
                        {
                            contentWrapper: u,
                            shouldExpandOnScrollRef: f
                        } = s;
                    if (f?.current && u) {
                        let p = Math.abs(c.current - d.scrollTop);
                        if (p > 0) {
                            let g = window.innerHeight - to * 2,
                                m = parseFloat(u.style.minHeight),
                                h = parseFloat(u.style.height),
                                v = Math.max(m, h);
                            if (v < g) {
                                let _ = v + p,
                                    y = Math.min(g, _),
                                    x = _ - y;
                                u.style.height = y + "px", u.style.bottom === "0px" && (d.scrollTop = x > 0 ? x : 0, u.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    c.current = d.scrollTop
                })
            })
        })]
    })
});
Ef.displayName = bc;
var Df = "SelectGroup",
    [_x, wx] = fn(Df),
    bx = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            ...r
        } = t, n = $e();
        return (0, ee.jsx)(_x, {
            scope: o,
            id: n,
            children: (0, ee.jsx)(z.div, {
                role: "group",
                "aria-labelledby": n,
                ...r,
                ref: e
            })
        })
    });
bx.displayName = Df;
var Nf = "SelectLabel",
    xx = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            ...r
        } = t, n = wx(Nf, o);
        return (0, ee.jsx)(z.div, {
            id: n.id,
            ...r,
            ref: e
        })
    });
xx.displayName = Nf;
var ns = "SelectItem",
    [Cx, Mf] = fn(ns),
    Pf = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            value: r,
            disabled: n = !1,
            textValue: a,
            ...s
        } = t, i = nr(ns, o), c = ar(ns, o), l = i.value === r, [d, u] = U.useState(a ?? ""), [f, p] = U.useState(!1), g = X(e, _ => c.itemRefCallback?.(_, r, n)), m = $e(), h = U.useRef("touch"), v = () => {
            n || (i.onValueChange(r), i.onOpenChange(!1))
        };
        if (r === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return (0, ee.jsx)(Cx, {
            scope: o,
            value: r,
            disabled: n,
            textId: m,
            isSelected: l,
            onItemTextChange: U.useCallback(_ => {
                u(y => y || (_?.textContent ?? "").trim())
            }, []),
            children: (0, ee.jsx)(as.ItemSlot, {
                scope: o,
                value: r,
                disabled: n,
                textValue: d,
                children: (0, ee.jsx)(z.div, {
                    role: "option",
                    "aria-labelledby": m,
                    "data-highlighted": f ? "" : void 0,
                    "aria-selected": l && f,
                    "data-state": l ? "checked" : "unchecked",
                    "aria-disabled": n || void 0,
                    "data-disabled": n ? "" : void 0,
                    tabIndex: n ? void 0 : -1,
                    ...s,
                    ref: g,
                    onFocus: A(s.onFocus, () => p(!0)),
                    onBlur: A(s.onBlur, () => p(!1)),
                    onClick: A(s.onClick, () => {
                        h.current !== "mouse" && v()
                    }),
                    onPointerUp: A(s.onPointerUp, () => {
                        h.current === "mouse" && v()
                    }),
                    onPointerDown: A(s.onPointerDown, _ => {
                        h.current = _.pointerType
                    }),
                    onPointerMove: A(s.onPointerMove, _ => {
                        h.current = _.pointerType, n ? c.onItemLeave?.() : h.current === "mouse" && _.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: A(s.onPointerLeave, _ => {
                        _.currentTarget === document.activeElement && c.onItemLeave?.()
                    }),
                    onKeyDown: A(s.onKeyDown, _ => {
                        c.searchRef?.current !== "" && _.key === " " || (ix.includes(_.key) && v(), _.key === " " && _.preventDefault())
                    })
                })
            })
        })
    });
Pf.displayName = ns;
var Vn = "SelectItemText",
    Of = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            className: r,
            style: n,
            ...a
        } = t, s = nr(Vn, o), i = ar(Vn, o), c = Mf(Vn, o), l = dx(Vn, o), [d, u] = U.useState(null), f = X(e, v => u(v), c.onItemTextChange, v => i.itemTextRefCallback?.(v, c.value, c.disabled)), p = d?.textContent, g = U.useMemo(() => (0, ee.jsx)("option", {
            value: c.value,
            disabled: c.disabled,
            children: p
        }, c.value), [c.disabled, c.value, p]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: h
        } = l;
        return Le(() => (m(g), () => h(g)), [m, h, g]), (0, ee.jsxs)(ee.Fragment, {
            children: [(0, ee.jsx)(z.span, {
                id: c.textId,
                ...a,
                ref: f
            }), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? Sc.createPortal(a.children, s.valueNode) : null]
        })
    });
Of.displayName = Vn;
var If = "SelectItemIndicator",
    kf = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            ...r
        } = t;
        return Mf(If, o).isSelected ? (0, ee.jsx)(z.span, {
            "aria-hidden": !0,
            ...r,
            ref: e
        }) : null
    });
kf.displayName = If;
var xc = "SelectScrollUpButton",
    Rx = U.forwardRef((t, e) => {
        let o = ar(xc, t.__scopeSelect),
            r = Tc(xc, t.__scopeSelect),
            [n, a] = U.useState(!1),
            s = X(e, r.onScrollButtonChange);
        return Le(() => {
            if (o.viewport && o.isPositioned) {
                let c = function() {
                    let d = l.scrollTop > 0;
                    a(d)
                };
                var i = c;
                let l = o.viewport;
                return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c)
            }
        }, [o.viewport, o.isPositioned]), n ? (0, ee.jsx)(Af, {
            ...t,
            ref: s,
            onAutoScroll: () => {
                let {
                    viewport: i,
                    selectedItem: c
                } = o;
                i && c && (i.scrollTop = i.scrollTop - c.offsetHeight)
            }
        }) : null
    });
Rx.displayName = xc;
var Cc = "SelectScrollDownButton",
    Sx = U.forwardRef((t, e) => {
        let o = ar(Cc, t.__scopeSelect),
            r = Tc(Cc, t.__scopeSelect),
            [n, a] = U.useState(!1),
            s = X(e, r.onScrollButtonChange);
        return Le(() => {
            if (o.viewport && o.isPositioned) {
                let c = function() {
                    let d = l.scrollHeight - l.clientHeight,
                        u = Math.ceil(l.scrollTop) < d;
                    a(u)
                };
                var i = c;
                let l = o.viewport;
                return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c)
            }
        }, [o.viewport, o.isPositioned]), n ? (0, ee.jsx)(Af, {
            ...t,
            ref: s,
            onAutoScroll: () => {
                let {
                    viewport: i,
                    selectedItem: c
                } = o;
                i && c && (i.scrollTop = i.scrollTop + c.offsetHeight)
            }
        }) : null
    });
Sx.displayName = Cc;
var Af = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            onAutoScroll: r,
            ...n
        } = t, a = ar("SelectScrollButton", o), s = U.useRef(null), i = ss(o), c = U.useCallback(() => {
            s.current !== null && (window.clearInterval(s.current), s.current = null)
        }, []);
        return U.useEffect(() => () => c(), [c]), Le(() => {
            i().find(d => d.ref.current === document.activeElement)?.ref.current?.scrollIntoView({
                block: "nearest"
            })
        }, [i]), (0, ee.jsx)(z.div, {
            "aria-hidden": !0,
            ...n,
            ref: e,
            style: {
                flexShrink: 0,
                ...n.style
            },
            onPointerDown: A(n.onPointerDown, () => {
                s.current === null && (s.current = window.setInterval(r, 50))
            }),
            onPointerMove: A(n.onPointerMove, () => {
                a.onItemLeave?.(), s.current === null && (s.current = window.setInterval(r, 50))
            }),
            onPointerLeave: A(n.onPointerLeave, () => {
                c()
            })
        })
    }),
    Tx = "SelectSeparator",
    Ex = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            ...r
        } = t;
        return (0, ee.jsx)(z.div, {
            "aria-hidden": !0,
            ...r,
            ref: e
        })
    });
Ex.displayName = Tx;
var Rc = "SelectArrow",
    Dx = U.forwardRef((t, e) => {
        let {
            __scopeSelect: o,
            ...r
        } = t, n = is(o), a = nr(Rc, o), s = ar(Rc, o);
        return a.open && s.position === "popper" ? (0, ee.jsx)(tr, {
            ...n,
            ...r,
            ref: e
        }) : null
    });
Dx.displayName = Rc;
var Nx = "SelectBubbleInput",
    Lf = U.forwardRef(({
        __scopeSelect: t,
        value: e,
        ...o
    }, r) => {
        let n = U.useRef(null),
            a = X(r, n),
            s = or(e);
        return U.useEffect(() => {
            let i = n.current;
            if (!i) return;
            let c = window.HTMLSelectElement.prototype,
                d = Object.getOwnPropertyDescriptor(c, "value").set;
            if (s !== e && d) {
                let u = new Event("change", {
                    bubbles: !0
                });
                d.call(i, e), i.dispatchEvent(u)
            }
        }, [s, e]), (0, ee.jsx)(z.select, {
            ...o,
            style: {
                ...ac,
                ...o.style
            },
            ref: a,
            defaultValue: e
        })
    });
Lf.displayName = Nx;

function Ff(t) {
    return t === "" || t === void 0
}

function Bf(t) {
    let e = Ye(t),
        o = U.useRef(""),
        r = U.useRef(0),
        n = U.useCallback(s => {
            let i = o.current + s;
            e(i),
                function c(l) {
                    o.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3))
                }(i)
        }, [e]),
        a = U.useCallback(() => {
            o.current = "", window.clearTimeout(r.current)
        }, []);
    return U.useEffect(() => () => window.clearTimeout(r.current), []), [o, n, a]
}

function Wf(t, e, o) {
    let n = e.length > 1 && Array.from(e).every(l => l === e[0]) ? e[0] : e,
        a = o ? t.indexOf(o) : -1,
        s = Mx(t, Math.max(a, 0));
    n.length === 1 && (s = s.filter(l => l !== o));
    let c = s.find(l => l.textValue.toLowerCase().startsWith(n.toLowerCase()));
    return c !== o ? c : void 0
}

function Mx(t, e) {
    return t.map((o, r) => t[(e + r) % t.length])
}
var Hf = gf,
    jf = yf,
    zf = wf,
    Uf = bf,
    Gf = xf,
    Yf = Cf,
    Vf = Ef;
var qf = Pf,
    $f = Of,
    Kf = kf;
var nm = w(M(), 1);
var te = w(M(), 1),
    oe = Object.assign({
        "../../../assets/spot-icons/arch-with-dot-cresting.svg": () => import("/censys/build/_shared/arch-with-dot-cresting-D0WMK9iB-RVQIOXXI.js"),
        "../../../assets/spot-icons/arch-with-focus-lines.svg": () => import("/censys/build/_shared/arch-with-focus-lines-CXXidocq-JHQ22PWQ.js"),
        "../../../assets/spot-icons/chart-bar-with-dots.svg": () => import("/censys/build/_shared/chart-bar-with-dots-Dfn9ZJbm-GLOOQMO3.js"),
        "../../../assets/spot-icons/chart-horizontal-with-dots.svg": () => import("/censys/build/_shared/chart-horizontal-with-dots-ByelYWuP-CQGTBGLP.js"),
        "../../../assets/spot-icons/chart-line-with-dots.svg": () => import("/censys/build/_shared/chart-line-with-dots-Cs-ajPMt-BWYN4VLN.js"),
        "../../../assets/spot-icons/chevrons-growing-top-right.svg": () => import("/censys/build/_shared/chevrons-growing-top-right-BT2nvL91-FAEQIFXD.js"),
        "../../../assets/spot-icons/circle-dense-dots-with-center-dot.svg": () => import("/censys/build/_shared/circle-dense-dots-with-center-dot-BwQ0IkyC-KYLRIJ2T.js"),
        "../../../assets/spot-icons/circle-dots-with-check.svg": () => import("/censys/build/_shared/circle-dots-with-check-Bkfxc6ef-H65X5CO4.js"),
        "../../../assets/spot-icons/circle-dots-with-dot.svg": () => import("/censys/build/_shared/circle-dots-with-dot-B5V5UGFc-RMCRI537.js"),
        "../../../assets/spot-icons/circle-dots-with-plus.svg": () => import("/censys/build/_shared/circle-dots-with-plus-CCOshh1v-5MOTJJ4F.js"),
        "../../../assets/spot-icons/circle-dots-with-sparkle.svg": () => import("/censys/build/_shared/circle-dots-with-sparkle-BzbTgpAf-AVPJXKGA.js"),
        "../../../assets/spot-icons/circle-dots-with-x.svg": () => import("/censys/build/_shared/circle-dots-with-x-tTuBLfVh-JESOBPB4.js"),
        "../../../assets/spot-icons/circle-with-dots.svg": () => import("/censys/build/_shared/circle-with-dots-pOfRzIhr-3XFE2RHI.js"),
        "../../../assets/spot-icons/dashed-arrow.svg": () => import("/censys/build/_shared/dashed-arrow-C14Rs5Nk-GICXGUKE.js"),
        "../../../assets/spot-icons/dashed-bowtie-with-dots.svg": () => import("/censys/build/_shared/dashed-bowtie-with-dots-DbeKrMt1-25CJ3T5Z.js"),
        "../../../assets/spot-icons/dashed-bowtie-with-half-moons.svg": () => import("/censys/build/_shared/dashed-bowtie-with-half-moons-pStIurJR-EOJCLAOV.js"),
        "../../../assets/spot-icons/dashed-bowtie.svg": () => import("/censys/build/_shared/dashed-bowtie-BXSEB_qV-E4NT3VXC.js"),
        "../../../assets/spot-icons/dashed-corner.svg": () => import("/censys/build/_shared/dashed-corner-jniZ0s64-MKGL3QVX.js"),
        "../../../assets/spot-icons/dashed-hourglass-with-dots.svg": () => import("/censys/build/_shared/dashed-hourglass-with-dots-BjiVhhiq-PTOSZ4SN.js"),
        "../../../assets/spot-icons/dashed-hourglass-with-sparkle.svg": () => import("/censys/build/_shared/dashed-hourglass-with-sparkle-CvQPMX-S-3QJDRT22.js"),
        "../../../assets/spot-icons/dashed-lines-filters-with-dots.svg": () => import("/censys/build/_shared/dashed-lines-filters-with-dots-BMdw5zZB-NQEZN3DR.js"),
        "../../../assets/spot-icons/dashed-maltese-cross-with-dot-and-circle.svg": () => import("/censys/build/_shared/dashed-maltese-cross-with-dot-and-circle-B3EZ1p4J-XZOW5SYS.js"),
        "../../../assets/spot-icons/dashed-maltese-cross-with-dot.svg": () => import("/censys/build/_shared/dashed-maltese-cross-with-dot-BChFrKuP-L422GVUH.js"),
        "../../../assets/spot-icons/dashed-square-with-dot-lower-right.svg": () => import("/censys/build/_shared/dashed-square-with-dot-lower-right-DW3WVvdX-476R5EI6.js"),
        "../../../assets/spot-icons/dashed-square-with-dot-upper-right.svg": () => import("/censys/build/_shared/dashed-square-with-dot-upper-right-BX0x-l-c-YD2Y5CYQ.js"),
        "../../../assets/spot-icons/dashed-square-with-sparkle-upper-right.svg": () => import("/censys/build/_shared/dashed-square-with-sparkle-upper-right-CNSAMEeH-UDZZKDKK.js"),
        "../../../assets/spot-icons/dashed-tunnel.svg": () => import("/censys/build/_shared/dashed-tunnel-CEVygwPw-AKNONZED.js"),
        "../../../assets/spot-icons/dots-around-a-circle.svg": () => import("/censys/build/_shared/dots-around-a-circle-CjvcUnKm-2ZUH4NV5.js"),
        "../../../assets/spot-icons/dots-in-a-maze.svg": () => import("/censys/build/_shared/dots-in-a-maze-Br-TTvdC-URERQKDM.js"),
        "../../../assets/spot-icons/dots-surrounded-by-dashed-lines.svg": () => import("/censys/build/_shared/dots-surrounded-by-dashed-lines-B-6hbJtU-L3I56CIJ.js"),
        "../../../assets/spot-icons/envelope.svg": () => import("/censys/build/_shared/envelope-BWO3BxgQ-CYKQSRI5.js"),
        "../../../assets/spot-icons/flow-three-nodes.svg": () => import("/censys/build/_shared/flow-three-nodes-CtyvgVZ7-SXFRVATE.js"),
        "../../../assets/spot-icons/logo-focus-section-1.svg": () => import("/censys/build/_shared/logo-focus-section-1-BJ42Y0IN-4B4ZTOPA.js"),
        "../../../assets/spot-icons/logo-focus-section-2.svg": () => import("/censys/build/_shared/logo-focus-section-2-jaCpdxFI-ST46AKV2.js"),
        "../../../assets/spot-icons/phone.svg": () => import("/censys/build/_shared/phone-B_90uvMw-YLFYZXV5.js"),
        "../../../assets/spot-icons/scan-circles-dashes-scanning.svg": () => import("/censys/build/_shared/scan-circles-dashes-scanning-DbwdqvQD-7LCSU4FI.js"),
        "../../../assets/spot-icons/scan-circles-dashes-with-centerline.svg": () => import("/censys/build/_shared/scan-circles-dashes-with-centerline-A4AM_fx3-BT7LKJEU.js"),
        "../../../assets/spot-icons/scan-circles-dashes.svg": () => import("/censys/build/_shared/scan-circles-dashes-DE04bP6k-C56SNYCK.js"),
        "../../../assets/spot-icons/scan-circles-magnifyer.svg": () => import("/censys/build/_shared/scan-circles-magnifyer-DYykk3zh-YI7FSJIH.js"),
        "../../../assets/spot-icons/scan-circles-wavy-lines-with-center-dot.svg": () => import("/censys/build/_shared/scan-circles-wavy-lines-with-center-dot-Cpu-1V4R-A56C6OEZ.js"),
        "../../../assets/spot-icons/scan-circles-with-center-sparkle.svg": () => import("/censys/build/_shared/scan-circles-with-center-sparkle-C42RxTQd-Z3JLNXAC.js"),
        "../../../assets/spot-icons/scan-circles-with-dashes-grouped-lower-right.svg": () => import("/censys/build/_shared/scan-circles-with-dashes-grouped-lower-right-Cyb8t_XT-HMKNBDU4.js"),
        "../../../assets/spot-icons/scan-circles-with-square-in-center.svg": () => import("/censys/build/_shared/scan-circles-with-square-in-center-B22BQ8EA-NFKJ4I4A.js"),
        "../../../assets/spot-icons/small-sparkle-with-plus.svg": () => import("/censys/build/_shared/small-sparkle-with-plus-ucntD5Ay-IRMFCDTZ.js"),
        "../../../assets/spot-icons/sparkle.svg": () => import("/censys/build/_shared/sparkle-n132rsTF-BQVR7RRS.js"),
        "../../../assets/spot-icons/sparkles-made-with-dashed-lines.svg": () => import("/censys/build/_shared/sparkles-made-with-dashed-lines-Bh9bycTv-NWAEZ2DR.js"),
        "../../../assets/spot-icons/square-with-sparkle-exponent-and-dots.svg": () => import("/censys/build/_shared/square-with-sparkle-exponent-and-dots-CbftZlPa-JICIZKP2.js"),
        "../../../assets/spot-icons/square-with-sparkle-in-center-with-dots.svg": () => import("/censys/build/_shared/square-with-sparkle-in-center-with-dots-B3C0LvdE-AWI6IKX3.js"),
        "../../../assets/spot-icons/stacked-layers-with-dots.svg": () => import("/censys/build/_shared/stacked-layers-with-dots-2JzGZ0pI-ZXOEUUYQ.js"),
        "../../../assets/spot-icons/three-dots-thinking.svg": () => import("/censys/build/_shared/three-dots-thinking-BIJwRWVA-LAZQZYWV.js")
    }),
    Zf = {
        "arch-with-dot-cresting": (0, te.lazy)(() => oe["../../../assets/spot-icons/arch-with-dot-cresting.svg"]().then(t => ({
            default: t.default
        }))),
        "arch-with-focus-lines": (0, te.lazy)(() => oe["../../../assets/spot-icons/arch-with-focus-lines.svg"]().then(t => ({
            default: t.default
        }))),
        "chart-bar-with-dots": (0, te.lazy)(() => oe["../../../assets/spot-icons/chart-bar-with-dots.svg"]().then(t => ({
            default: t.default
        }))),
        "chart-horizontal-with-dots": (0, te.lazy)(() => oe["../../../assets/spot-icons/chart-horizontal-with-dots.svg"]().then(t => ({
            default: t.default
        }))),
        "chart-line-with-dots": (0, te.lazy)(() => oe["../../../assets/spot-icons/chart-line-with-dots.svg"]().then(t => ({
            default: t.default
        }))),
        "chevrons-growing-top-right": (0, te.lazy)(() => oe["../../../assets/spot-icons/chevrons-growing-top-right.svg"]().then(t => ({
            default: t.default
        }))),
        "circle-dense-dots-with-center-dot": (0, te.lazy)(() => oe["../../../assets/spot-icons/circle-dense-dots-with-center-dot.svg"]().then(t => ({
            default: t.default
        }))),
        "circle-dots-with-check": (0, te.lazy)(() => oe["../../../assets/spot-icons/circle-dots-with-check.svg"]().then(t => ({
            default: t.default
        }))),
        "circle-dots-with-dot": (0, te.lazy)(() => oe["../../../assets/spot-icons/circle-dots-with-dot.svg"]().then(t => ({
            default: t.default
        }))),
        "circle-dots-with-plus": (0, te.lazy)(() => oe["../../../assets/spot-icons/circle-dots-with-plus.svg"]().then(t => ({
            default: t.default
        }))),
        "circle-dots-with-sparkle": (0, te.lazy)(() => oe["../../../assets/spot-icons/circle-dots-with-sparkle.svg"]().then(t => ({
            default: t.default
        }))),
        "circle-dots-with-x": (0, te.lazy)(() => oe["../../../assets/spot-icons/circle-dots-with-x.svg"]().then(t => ({
            default: t.default
        }))),
        "circle-with-dots": (0, te.lazy)(() => oe["../../../assets/spot-icons/circle-with-dots.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-arrow": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-arrow.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-bowtie": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-bowtie.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-bowtie-with-dots": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-bowtie-with-dots.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-bowtie-with-half-moons": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-bowtie-with-half-moons.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-corner": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-corner.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-hourglass-with-dots": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-hourglass-with-dots.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-hourglass-with-sparkle": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-hourglass-with-sparkle.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-lines-filters-with-dots": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-lines-filters-with-dots.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-maltese-cross-with-dot": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-maltese-cross-with-dot.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-maltese-cross-with-dot-and-circle": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-maltese-cross-with-dot-and-circle.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-square-with-dot-lower-right": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-square-with-dot-lower-right.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-square-with-dot-upper-right": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-square-with-dot-upper-right.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-square-with-sparkle-upper-right": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-square-with-sparkle-upper-right.svg"]().then(t => ({
            default: t.default
        }))),
        "dashed-tunnel": (0, te.lazy)(() => oe["../../../assets/spot-icons/dashed-tunnel.svg"]().then(t => ({
            default: t.default
        }))),
        "dots-around-a-circle": (0, te.lazy)(() => oe["../../../assets/spot-icons/dots-around-a-circle.svg"]().then(t => ({
            default: t.default
        }))),
        "dots-in-a-maze": (0, te.lazy)(() => oe["../../../assets/spot-icons/dots-in-a-maze.svg"]().then(t => ({
            default: t.default
        }))),
        "dots-surrounded-by-dashed-lines": (0, te.lazy)(() => oe["../../../assets/spot-icons/dots-surrounded-by-dashed-lines.svg"]().then(t => ({
            default: t.default
        }))),
        envelope: (0, te.lazy)(() => oe["../../../assets/spot-icons/envelope.svg"]().then(t => ({
            default: t.default
        }))),
        "flow-three-nodes": (0, te.lazy)(() => oe["../../../assets/spot-icons/flow-three-nodes.svg"]().then(t => ({
            default: t.default
        }))),
        "logo-focus-section-1": (0, te.lazy)(() => oe["../../../assets/spot-icons/logo-focus-section-1.svg"]().then(t => ({
            default: t.default
        }))),
        "logo-focus-section-2": (0, te.lazy)(() => oe["../../../assets/spot-icons/logo-focus-section-2.svg"]().then(t => ({
            default: t.default
        }))),
        phone: (0, te.lazy)(() => oe["../../../assets/spot-icons/phone.svg"]().then(t => ({
            default: t.default
        }))),
        "scan-circles-dashes": (0, te.lazy)(() => oe["../../../assets/spot-icons/scan-circles-dashes.svg"]().then(t => ({
            default: t.default
        }))),
        "scan-circles-dashes-scanning": (0, te.lazy)(() => oe["../../../assets/spot-icons/scan-circles-dashes-scanning.svg"]().then(t => ({
            default: t.default
        }))),
        "scan-circles-dashes-with-centerline": (0, te.lazy)(() => oe["../../../assets/spot-icons/scan-circles-dashes-with-centerline.svg"]().then(t => ({
            default: t.default
        }))),
        "scan-circles-magnifyer": (0, te.lazy)(() => oe["../../../assets/spot-icons/scan-circles-magnifyer.svg"]().then(t => ({
            default: t.default
        }))),
        "scan-circles-wavy-lines-with-center-dot": (0, te.lazy)(() => oe["../../../assets/spot-icons/scan-circles-wavy-lines-with-center-dot.svg"]().then(t => ({
            default: t.default
        }))),
        "scan-circles-with-center-sparkle": (0, te.lazy)(() => oe["../../../assets/spot-icons/scan-circles-with-center-sparkle.svg"]().then(t => ({
            default: t.default
        }))),
        "scan-circles-with-dashes-grouped-lower-right": (0, te.lazy)(() => oe["../../../assets/spot-icons/scan-circles-with-dashes-grouped-lower-right.svg"]().then(t => ({
            default: t.default
        }))),
        "scan-circles-with-square-in-center": (0, te.lazy)(() => oe["../../../assets/spot-icons/scan-circles-with-square-in-center.svg"]().then(t => ({
            default: t.default
        }))),
        "small-sparkle-with-plus": (0, te.lazy)(() => oe["../../../assets/spot-icons/small-sparkle-with-plus.svg"]().then(t => ({
            default: t.default
        }))),
        sparkle: (0, te.lazy)(() => oe["../../../assets/spot-icons/sparkle.svg"]().then(t => ({
            default: t.default
        }))),
        "sparkles-made-with-dashed-lines": (0, te.lazy)(() => oe["../../../assets/spot-icons/sparkles-made-with-dashed-lines.svg"]().then(t => ({
            default: t.default
        }))),
        "square-with-sparkle-exponent-and-dots": (0, te.lazy)(() => oe["../../../assets/spot-icons/square-with-sparkle-exponent-and-dots.svg"]().then(t => ({
            default: t.default
        }))),
        "square-with-sparkle-in-center-with-dots": (0, te.lazy)(() => oe["../../../assets/spot-icons/square-with-sparkle-in-center-with-dots.svg"]().then(t => ({
            default: t.default
        }))),
        "stacked-layers-with-dots": (0, te.lazy)(() => oe["../../../assets/spot-icons/stacked-layers-with-dots.svg"]().then(t => ({
            default: t.default
        }))),
        "three-dots-thinking": (0, te.lazy)(() => oe["../../../assets/spot-icons/three-dots-thinking.svg"]().then(t => ({
            default: t.default
        })))
    };
var Qf = w(W(), 1),
    Jf = w(V(), 1);
var SA = w(M(), 1);
var Px = "_selectSpinner_1n9nx_2",
    Ox = {
        selectSpinner: Px
    };

function qn() {
    let t = (0, Jf.c)(1),
        e;
    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, Qf.jsx)(Z, {
        "aria-label": "Loading options",
        "aria-live": "polite",
        role: "status",
        name: "loader-4",
        mode: "line",
        className: Ox.selectSpinner
    }), t[0] = e) : e = t[0], e
}
var mn = w(W(), 1),
    em = w(V(), 1);
var tm = w(M(), 1);
var Ix = "_trigger_2zjep_14",
    kx = "_triggerInvalid_2zjep_40",
    Ax = "_icon_2zjep_50",
    Lx = "_md_2zjep_58",
    Fx = "_lg_2zjep_62",
    Bx = "_triggerValue_2zjep_67",
    Wx = "_content_2zjep_77",
    Hx = "_viewport_2zjep_103",
    jx = "_selectItem_2zjep_107",
    zx = "_label_2zjep_138",
    Ux = "_itemIndicator_2zjep_146",
    _o = {
        trigger: Ix,
        triggerInvalid: kx,
        icon: Ax,
        md: Lx,
        lg: Fx,
        triggerValue: Bx,
        content: Wx,
        "menu-show": "_menu-show_2zjep_1",
        viewport: Hx,
        selectItem: jx,
        label: zx,
        itemIndicator: Ux
    },
    om = (0, tm.forwardRef)((t, e) => {
        let o = (0, em.c)(14),
            r, n, a;
        o[0] !== t ? ({
            children: r,
            className: n,
            ...a
        } = t, o[0] = t, o[1] = r, o[2] = n, o[3] = a) : (r = o[1], n = o[2], a = o[3]);
        let s;
        o[4] !== n ? (s = T(_o.selectItem, n), o[4] = n, o[5] = s) : s = o[5];
        let i;
        o[6] !== r ? (i = (0, mn.jsx)($f, {
            children: r
        }), o[6] = r, o[7] = i) : i = o[7];
        let c;
        o[8] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, mn.jsx)(Kf, {
            className: _o.itemIndicator,
            children: (0, mn.jsx)(Z, {
                "aria-hidden": !0,
                name: "check"
            })
        }), o[8] = c) : c = o[8];
        let l;
        return o[9] !== e || o[10] !== a || o[11] !== s || o[12] !== i ? (l = (0, mn.jsxs)(qf, {
            className: s,
            ...a,
            ref: e,
            children: [i, c]
        }), o[9] = e, o[10] = a, o[11] = s, o[12] = i, o[13] = l) : l = o[13], l
    });
var Gx = (0, nm.forwardRef)(function(t, e) {
    let o = (0, rm.c)(41),
        r, n, a, s, i, c, l, d, u;
    o[0] !== t ? ({
        options: c,
        isLoading: s,
        isInvalid: a,
        valueProps: d,
        contentLeft: r,
        size: u,
        id: n,
        listClassName: i,
        ...l
    } = t, o[0] = t, o[1] = r, o[2] = n, o[3] = a, o[4] = s, o[5] = i, o[6] = c, o[7] = l, o[8] = d, o[9] = u) : (r = o[1], n = o[2], a = o[3], s = o[4], i = o[5], c = o[6], l = o[7], d = o[8], u = o[9]);
    let f;
    o[10] !== d ? (f = d === void 0 ? {} : d, o[10] = d, o[11] = f) : f = o[11];
    let p = f,
        g = u === void 0 ? "md" : u,
        m = `Open ${p.placeholder}`,
        h = _o[g],
        v = a && _o.triggerInvalid,
        _;
    o[12] !== h || o[13] !== v ? (_ = T(_o.trigger, h, v), o[12] = h, o[13] = v, o[14] = _) : _ = o[14];
    let y;
    o[15] !== p ? (y = (0, jt.jsx)("span", {
        className: _o.triggerValue,
        children: (0, jt.jsx)(zf, {
            ...p
        })
    }), o[15] = p, o[16] = y) : y = o[16];
    let x;
    o[17] !== s ? (x = s && (0, jt.jsx)(qn, {}), o[17] = s, o[18] = x) : x = o[18];
    let b;
    o[19] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, jt.jsx)(Uf, {
        className: _o.icon,
        children: (0, jt.jsx)(Z, {
            "aria-hidden": !0,
            icon: "arrow-down-s-line"
        })
    }), o[19] = b) : b = o[19];
    let C;
    o[20] !== r || o[21] !== n || o[22] !== e || o[23] !== m || o[24] !== _ || o[25] !== y || o[26] !== x ? (C = (0, jt.jsxs)(jf, {
        id: n,
        "aria-label": m,
        className: _,
        ref: e,
        children: [r, y, x, b]
    }), o[20] = r, o[21] = n, o[22] = e, o[23] = m, o[24] = _, o[25] = y, o[26] = x, o[27] = C) : C = o[27];
    let R;
    o[28] !== i ? (R = T(_o.content, i), o[28] = i, o[29] = R) : R = o[29];
    let S;
    o[30] !== c ? (S = c.map(Yx), o[30] = c, o[31] = S) : S = o[31];
    let E;
    o[32] !== S ? (E = (0, jt.jsx)(Vf, {
        className: _o.viewport,
        children: S
    }), o[32] = S, o[33] = E) : E = o[33];
    let D;
    o[34] !== R || o[35] !== E ? (D = (0, jt.jsx)(Gf, {
        children: (0, jt.jsx)(Yf, {
            className: R,
            position: "popper",
            sideOffset: 5,
            children: E
        })
    }), o[34] = R, o[35] = E, o[36] = D) : D = o[36];
    let N;
    return o[37] !== l || o[38] !== C || o[39] !== D ? (N = (0, jt.jsxs)(Hf, {
        ...l,
        children: [C, D]
    }), o[37] = l, o[38] = C, o[39] = D, o[40] = N) : N = o[40], N
});

function Yx(t) {
    let {
        label: e,
        ...o
    } = t;
    return (0, jt.jsx)(om, {
        ...o,
        children: e
    }, o.value)
}
var am = w(W(), 1),
    sm = w(V(), 1);
var zA = w(M(), 1);
var Vx = "_spinner_eetca_2",
    qx = "_rotation_eetca_1",
    $x = "_smSize_eetca_11",
    Kx = "_mdSize_eetca_17",
    Xx = "_lgSize_eetca_23",
    Zx = "_xlSize_eetca_29",
    Qx = "_darkVariant_eetca_35",
    Jx = "_defaultVariant_eetca_40",
    eC = "_systemVariant_eetca_45",
    Ec = {
        spinner: Vx,
        rotation: qx,
        smSize: $x,
        mdSize: Kx,
        lgSize: Xx,
        xlSize: Zx,
        darkVariant: Qx,
        defaultVariant: Jx,
        systemVariant: eC
    },
    cs = (t => (t.SMALL = "sm", t.MEDIUM = "md", t.LARGE = "lg", t.EXTRA_LARGE = "xl", t))(cs || {}),
    ls = (t => (t.DARK = "dark", t.DEFAULT = "default", t.SYSTEM = "system", t))(ls || {});

function us(t) {
    let e = (0, sm.c)(5),
        {
            size: o,
            variant: r
        } = t,
        n = o === void 0 ? "md" : o,
        a = r === void 0 ? "default" : r,
        s = Ec[`${n}Size`],
        i = Ec[`${a}Variant`],
        c;
    e[0] !== s || e[1] !== i ? (c = T(Ec.spinner, s, i), e[0] = s, e[1] = i, e[2] = c) : c = e[2];
    let l;
    return e[3] !== c ? (l = (0, am.jsx)("div", {
        "aria-busy": "true",
        "aria-label": "Loading",
        "aria-live": "polite",
        className: c,
        role: "status"
    }), e[3] = c, e[4] = l) : l = e[4], l
}
var vn = w(W(), 1),
    Qn = w(V(), 1),
    ko = w(M(), 1);
var Kn = w(W(), 1),
    Xn = w(V(), 1);
var Io = w(M(), 1);
var st = w(M(), 1);
var sr = w(W(), 1),
    Dc = "rovingFocusGroup.onEntryFocus",
    tC = {
        bubbles: !1,
        cancelable: !0
    },
    $n = "RovingFocusGroup",
    [Nc, im, oC] = Ko($n),
    [rC, Po] = Se($n, [oC]),
    [nC, aC] = rC($n),
    cm = st.forwardRef((t, e) => (0, sr.jsx)(Nc.Provider, {
        scope: t.__scopeRovingFocusGroup,
        children: (0, sr.jsx)(Nc.Slot, {
            scope: t.__scopeRovingFocusGroup,
            children: (0, sr.jsx)(sC, {
                ...t,
                ref: e
            })
        })
    }));
cm.displayName = $n;
var sC = st.forwardRef((t, e) => {
        let {
            __scopeRovingFocusGroup: o,
            orientation: r,
            loop: n = !1,
            dir: a,
            currentTabStopId: s,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: c,
            onEntryFocus: l,
            preventScrollOnEntryFocus: d = !1,
            ...u
        } = t, f = st.useRef(null), p = X(e, f), g = mo(a), [m, h] = He({
            prop: s,
            defaultProp: i ?? null,
            onChange: c,
            caller: $n
        }), [v, _] = st.useState(!1), y = Ye(l), x = im(o), b = st.useRef(!1), [C, R] = st.useState(0);
        return st.useEffect(() => {
            let S = f.current;
            if (S) return S.addEventListener(Dc, y), () => S.removeEventListener(Dc, y)
        }, [y]), (0, sr.jsx)(nC, {
            scope: o,
            orientation: r,
            dir: g,
            loop: n,
            currentTabStopId: m,
            onItemFocus: st.useCallback(S => h(S), [h]),
            onItemShiftTab: st.useCallback(() => _(!0), []),
            onFocusableItemAdd: st.useCallback(() => R(S => S + 1), []),
            onFocusableItemRemove: st.useCallback(() => R(S => S - 1), []),
            children: (0, sr.jsx)(z.div, {
                tabIndex: v || C === 0 ? -1 : 0,
                "data-orientation": r,
                ...u,
                ref: p,
                style: {
                    outline: "none",
                    ...t.style
                },
                onMouseDown: A(t.onMouseDown, () => {
                    b.current = !0
                }),
                onFocus: A(t.onFocus, S => {
                    let E = !b.current;
                    if (S.target === S.currentTarget && E && !v) {
                        let D = new CustomEvent(Dc, tC);
                        if (S.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                            let N = x().filter(k => k.focusable),
                                O = N.find(k => k.active),
                                F = N.find(k => k.id === m),
                                B = [O, F, ...N].filter(Boolean).map(k => k.ref.current);
                            dm(B, d)
                        }
                    }
                    b.current = !1
                }),
                onBlur: A(t.onBlur, () => _(!1))
            })
        })
    }),
    lm = "RovingFocusGroupItem",
    um = st.forwardRef((t, e) => {
        let {
            __scopeRovingFocusGroup: o,
            focusable: r = !0,
            active: n = !1,
            tabStopId: a,
            children: s,
            ...i
        } = t, c = $e(), l = a || c, d = aC(lm, o), u = d.currentTabStopId === l, f = im(o), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: g,
            currentTabStopId: m
        } = d;
        return st.useEffect(() => {
            if (r) return p(), () => g()
        }, [r, p, g]), (0, sr.jsx)(Nc.ItemSlot, {
            scope: o,
            id: l,
            focusable: r,
            active: n,
            children: (0, sr.jsx)(z.span, {
                tabIndex: u ? 0 : -1,
                "data-orientation": d.orientation,
                ...i,
                ref: e,
                onMouseDown: A(t.onMouseDown, h => {
                    r ? d.onItemFocus(l) : h.preventDefault()
                }),
                onFocus: A(t.onFocus, () => d.onItemFocus(l)),
                onKeyDown: A(t.onKeyDown, h => {
                    if (h.key === "Tab" && h.shiftKey) {
                        d.onItemShiftTab();
                        return
                    }
                    if (h.target !== h.currentTarget) return;
                    let v = lC(h, d.orientation, d.dir);
                    if (v !== void 0) {
                        if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
                        h.preventDefault();
                        let y = f().filter(x => x.focusable).map(x => x.ref.current);
                        if (v === "last") y.reverse();
                        else if (v === "prev" || v === "next") {
                            v === "prev" && y.reverse();
                            let x = y.indexOf(h.currentTarget);
                            y = d.loop ? uC(y, x + 1) : y.slice(x + 1)
                        }
                        setTimeout(() => dm(y))
                    }
                }),
                children: typeof s == "function" ? s({
                    isCurrentTabStop: u,
                    hasTabStop: m != null
                }) : s
            })
        })
    });
um.displayName = lm;
var iC = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};

function cC(t, e) {
    return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t
}

function lC(t, e, o) {
    let r = cC(t.key, o);
    if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return iC[r]
}

function dm(t, e = !1) {
    let o = document.activeElement;
    for (let r of t)
        if (r === o || (r.focus({
                preventScroll: e
            }), document.activeElement !== o)) return
}

function uC(t, e) {
    return t.map((o, r) => t[(e + r) % t.length])
}
var pn = cm,
    hn = um;
var Mt = w(M(), 1);
var fm = w(M(), 1);

function dC(t, e) {
    return fm.useReducer((o, r) => e[o][r] ?? o, t)
}
var je = t => {
    let {
        present: e,
        children: o
    } = t, r = fC(e), n = typeof o == "function" ? o({
        present: r.isPresent
    }) : Mt.Children.only(o), a = X(r.ref, mC(n));
    return typeof o == "function" || r.isPresent ? Mt.cloneElement(n, {
        ref: a
    }) : null
};
je.displayName = "Presence";

function fC(t) {
    let [e, o] = Mt.useState(), r = Mt.useRef(null), n = Mt.useRef(t), a = Mt.useRef("none"), s = t ? "mounted" : "unmounted", [i, c] = dC(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return Mt.useEffect(() => {
        let l = ds(r.current);
        a.current = i === "mounted" ? l : "none"
    }, [i]), Le(() => {
        let l = r.current,
            d = n.current;
        if (d !== t) {
            let f = a.current,
                p = ds(l);
            t ? c("MOUNT") : p === "none" || l?.display === "none" ? c("UNMOUNT") : c(d && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), n.current = t
        }
    }, [t, c]), Le(() => {
        if (e) {
            let l, d = e.ownerDocument.defaultView ?? window,
                u = p => {
                    let m = ds(r.current).includes(p.animationName);
                    if (p.target === e && m && (c("ANIMATION_END"), !n.current)) {
                        let h = e.style.animationFillMode;
                        e.style.animationFillMode = "forwards", l = d.setTimeout(() => {
                            e.style.animationFillMode === "forwards" && (e.style.animationFillMode = h)
                        })
                    }
                },
                f = p => {
                    p.target === e && (a.current = ds(r.current))
                };
            return e.addEventListener("animationstart", f), e.addEventListener("animationcancel", u), e.addEventListener("animationend", u), () => {
                d.clearTimeout(l), e.removeEventListener("animationstart", f), e.removeEventListener("animationcancel", u), e.removeEventListener("animationend", u)
            }
        } else c("ANIMATION_END")
    }, [e, c]), {
        isPresent: ["mounted", "unmountSuspended"].includes(i),
        ref: Mt.useCallback(l => {
            r.current = l ? getComputedStyle(l) : null, o(l)
        }, [])
    }
}

function ds(t) {
    return t?.animationName || "none"
}

function mC(t) {
    let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
        o = e && "isReactWarning" in e && e.isReactWarning;
    return o ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, o = e && "isReactWarning" in e && e.isReactWarning, o ? t.props.ref : t.props.ref || t.ref)
}
var Oo = w(W(), 1),
    fs = "Tabs",
    [pC, dL] = Se(fs, [Po]),
    mm = Po(),
    [hC, Pc] = pC(fs),
    pm = Io.forwardRef((t, e) => {
        let {
            __scopeTabs: o,
            value: r,
            onValueChange: n,
            defaultValue: a,
            orientation: s = "horizontal",
            dir: i,
            activationMode: c = "automatic",
            ...l
        } = t, d = mo(i), [u, f] = He({
            prop: r,
            onChange: n,
            defaultProp: a ?? "",
            caller: fs
        });
        return (0, Oo.jsx)(hC, {
            scope: o,
            baseId: $e(),
            value: u,
            onValueChange: f,
            orientation: s,
            dir: d,
            activationMode: c,
            children: (0, Oo.jsx)(z.div, {
                dir: d,
                "data-orientation": s,
                ...l,
                ref: e
            })
        })
    });
pm.displayName = fs;
var hm = "TabsList",
    gm = Io.forwardRef((t, e) => {
        let {
            __scopeTabs: o,
            loop: r = !0,
            ...n
        } = t, a = Pc(hm, o), s = mm(o);
        return (0, Oo.jsx)(pn, {
            asChild: !0,
            ...s,
            orientation: a.orientation,
            dir: a.dir,
            loop: r,
            children: (0, Oo.jsx)(z.div, {
                role: "tablist",
                "aria-orientation": a.orientation,
                ...n,
                ref: e
            })
        })
    });
gm.displayName = hm;
var vm = "TabsTrigger",
    ym = Io.forwardRef((t, e) => {
        let {
            __scopeTabs: o,
            value: r,
            disabled: n = !1,
            ...a
        } = t, s = Pc(vm, o), i = mm(o), c = bm(s.baseId, r), l = xm(s.baseId, r), d = r === s.value;
        return (0, Oo.jsx)(hn, {
            asChild: !0,
            ...i,
            focusable: !n,
            active: d,
            children: (0, Oo.jsx)(z.button, {
                type: "button",
                role: "tab",
                "aria-selected": d,
                "aria-controls": l,
                "data-state": d ? "active" : "inactive",
                "data-disabled": n ? "" : void 0,
                disabled: n,
                id: c,
                ...a,
                ref: e,
                onMouseDown: A(t.onMouseDown, u => {
                    !n && u.button === 0 && u.ctrlKey === !1 ? s.onValueChange(r) : u.preventDefault()
                }),
                onKeyDown: A(t.onKeyDown, u => {
                    [" ", "Enter"].includes(u.key) && s.onValueChange(r)
                }),
                onFocus: A(t.onFocus, () => {
                    let u = s.activationMode !== "manual";
                    !d && !n && u && s.onValueChange(r)
                })
            })
        })
    });
ym.displayName = vm;
var _m = "TabsContent",
    wm = Io.forwardRef((t, e) => {
        let {
            __scopeTabs: o,
            value: r,
            forceMount: n,
            children: a,
            ...s
        } = t, i = Pc(_m, o), c = bm(i.baseId, r), l = xm(i.baseId, r), d = r === i.value, u = Io.useRef(d);
        return Io.useEffect(() => {
            let f = requestAnimationFrame(() => u.current = !1);
            return () => cancelAnimationFrame(f)
        }, []), (0, Oo.jsx)(je, {
            present: n || d,
            children: ({
                present: f
            }) => (0, Oo.jsx)(z.div, {
                "data-state": d ? "active" : "inactive",
                "data-orientation": i.orientation,
                role: "tabpanel",
                "aria-labelledby": c,
                hidden: !f,
                id: l,
                tabIndex: 0,
                ...s,
                ref: e,
                style: {
                    ...t.style,
                    animationDuration: u.current ? "0s" : void 0
                },
                children: f && a
            })
        })
    });
wm.displayName = _m;

function bm(t, e) {
    return `${t}-trigger-${e}`
}

function xm(t, e) {
    return `${t}-content-${e}`
}
var Oc = pm,
    Ic = gm,
    kc = ym,
    Ac = wm;
var Zn = w(M(), 1),
    Lc = (0, Zn.forwardRef)((t, e) => {
        let o = (0, Xn.c)(3),
            r;
        return o[0] !== t || o[1] !== e ? (r = (0, Kn.jsx)(Oc, {
            ref: e,
            ...t
        }), o[0] = t, o[1] = e, o[2] = r) : r = o[2], r
    });
Lc.displayName = Oc.displayName;
var Fc = (0, Zn.forwardRef)((t, e) => {
    let o = (0, Xn.c)(3),
        r;
    return o[0] !== t || o[1] !== e ? (r = (0, Kn.jsx)(Ic, {
        ref: e,
        ...t
    }), o[0] = t, o[1] = e, o[2] = r) : r = o[2], r
});
Fc.displayName = Ic.displayName;
var Bc = (0, Zn.forwardRef)((t, e) => {
    let o = (0, Xn.c)(3),
        r;
    return o[0] !== t || o[1] !== e ? (r = (0, Kn.jsx)(kc, {
        ref: e,
        ...t
    }), o[0] = t, o[1] = e, o[2] = r) : r = o[2], r
});
Bc.displayName = kc.displayName;
var Wc = (0, Zn.forwardRef)((t, e) => {
    let o = (0, Xn.c)(3),
        r;
    return o[0] !== t || o[1] !== e ? (r = (0, Kn.jsx)(Ac, {
        ref: e,
        ...t
    }), o[0] = t, o[1] = e, o[2] = r) : r = o[2], r
});
Wc.displayName = Ac.displayName;
var vC = "_tabTrigger_ywhum_3",
    yC = "_tabsListHorizontal_ywhum_43",
    _C = "_verticalTabs_ywhum_69",
    wC = "_tabsListVertical_ywhum_75",
    gn = {
        tabTrigger: vC,
        tabsListHorizontal: yC,
        verticalTabs: _C,
        tabsListVertical: wC
    },
    Cm = (0, ko.createContext)("horizontal"),
    bC = (0, ko.forwardRef)((t, e) => {
        let o = (0, Qn.c)(14),
            r, n, a;
        o[0] !== t ? ({
            className: r,
            orientation: a,
            ...n
        } = t, o[0] = t, o[1] = r, o[2] = n, o[3] = a) : (r = o[1], n = o[2], a = o[3]);
        let s = a === void 0 ? "horizontal" : a,
            i = s === "vertical" ? gn.verticalTabs : gn.horizontalTabs,
            c;
        o[4] !== r || o[5] !== i ? (c = T(i, r), o[4] = r, o[5] = i, o[6] = c) : c = o[6];
        let l;
        o[7] !== n || o[8] !== e || o[9] !== c ? (l = (0, vn.jsx)(Lc, {
            ref: e,
            className: c,
            ...n
        }), o[7] = n, o[8] = e, o[9] = c, o[10] = l) : l = o[10];
        let d;
        return o[11] !== s || o[12] !== l ? (d = (0, vn.jsx)(Cm.Provider, {
            value: s,
            children: l
        }), o[11] = s, o[12] = l, o[13] = d) : d = o[13], d
    }),
    xC = (0, ko.forwardRef)((t, e) => {
        let o = (0, Qn.c)(10),
            r, n;
        o[0] !== t ? ({
            className: r,
            ...n
        } = t, o[0] = t, o[1] = r, o[2] = n) : (r = o[1], n = o[2]);
        let a = (0, ko.useContext)(Cm) === "horizontal" ? gn.tabsListHorizontal : gn.tabsListVertical,
            s;
        o[3] !== r || o[4] !== a ? (s = T(gn.tabsList, a, r), o[3] = r, o[4] = a, o[5] = s) : s = o[5];
        let i;
        return o[6] !== n || o[7] !== e || o[8] !== s ? (i = (0, vn.jsx)(Fc, {
            ref: e,
            className: s,
            ...n
        }), o[6] = n, o[7] = e, o[8] = s, o[9] = i) : i = o[9], i
    }),
    CC = (0, ko.forwardRef)((t, e) => {
        let o = (0, Qn.c)(9),
            r, n;
        o[0] !== t ? ({
            className: r,
            ...n
        } = t, o[0] = t, o[1] = r, o[2] = n) : (r = o[1], n = o[2]);
        let a;
        o[3] !== r ? (a = T(gn.tabTrigger, r), o[3] = r, o[4] = a) : a = o[4];
        let s;
        return o[5] !== n || o[6] !== e || o[7] !== a ? (s = (0, vn.jsx)(Bc, {
            ref: e,
            className: a,
            ...n
        }), o[5] = n, o[6] = e, o[7] = a, o[8] = s) : s = o[8], s
    }),
    RC = (0, ko.forwardRef)((t, e) => {
        let o = (0, Qn.c)(3),
            r;
        return o[0] !== t || o[1] !== e ? (r = (0, vn.jsx)(Wc, {
            ref: e,
            ...t
        }), o[0] = t, o[1] = e, o[2] = r) : r = o[2], r
    });
var I = w(W(), 1),
    ct = w(V(), 1);
var nt = w(M(), 1);
var K = w(M(), 1);
var se = w(W(), 1),
    Hc = ["Enter", " "],
    SC = ["ArrowDown", "PageUp", "Home"],
    Sm = ["ArrowUp", "PageDown", "End"],
    TC = [...SC, ...Sm],
    EC = {
        ltr: [...Hc, "ArrowRight"],
        rtl: [...Hc, "ArrowLeft"]
    },
    DC = {
        ltr: ["ArrowLeft"],
        rtl: ["ArrowRight"]
    },
    oa = "Menu",
    [ea, NC, MC] = Ko(oa),
    [Or, jc] = Se(oa, [MC, $t, Po]),
    ra = $t(),
    Tm = Po(),
    [Em, ir] = Or(oa),
    [PC, na] = Or(oa),
    Dm = t => {
        let {
            __scopeMenu: e,
            open: o = !1,
            children: r,
            dir: n,
            onOpenChange: a,
            modal: s = !0
        } = t, i = ra(e), [c, l] = K.useState(null), d = K.useRef(!1), u = Ye(a), f = mo(n);
        return K.useEffect(() => {
            let p = () => {
                    d.current = !0, document.addEventListener("pointerdown", g, {
                        capture: !0,
                        once: !0
                    }), document.addEventListener("pointermove", g, {
                        capture: !0,
                        once: !0
                    })
                },
                g = () => d.current = !1;
            return document.addEventListener("keydown", p, {
                capture: !0
            }), () => {
                document.removeEventListener("keydown", p, {
                    capture: !0
                }), document.removeEventListener("pointerdown", g, {
                    capture: !0
                }), document.removeEventListener("pointermove", g, {
                    capture: !0
                })
            }
        }, []), (0, se.jsx)(Do, {
            ...i,
            children: (0, se.jsx)(Em, {
                scope: e,
                open: o,
                onOpenChange: u,
                content: c,
                onContentChange: l,
                children: (0, se.jsx)(PC, {
                    scope: e,
                    onClose: K.useCallback(() => u(!1), [u]),
                    isUsingKeyboardRef: d,
                    dir: f,
                    modal: s,
                    children: r
                })
            })
        })
    };
Dm.displayName = oa;
var OC = "MenuAnchor",
    zc = K.forwardRef((t, e) => {
        let {
            __scopeMenu: o,
            ...r
        } = t, n = ra(o);
        return (0, se.jsx)(No, {
            ...n,
            ...r,
            ref: e
        })
    });
zc.displayName = OC;
var Uc = "MenuPortal",
    [IC, Nm] = Or(Uc, {
        forceMount: void 0
    }),
    Mm = t => {
        let {
            __scopeMenu: e,
            forceMount: o,
            children: r,
            container: n
        } = t, a = ir(Uc, e);
        return (0, se.jsx)(IC, {
            scope: e,
            forceMount: o,
            children: (0, se.jsx)(je, {
                present: o || a.open,
                children: (0, se.jsx)(Ht, {
                    asChild: !0,
                    container: n,
                    children: r
                })
            })
        })
    };
Mm.displayName = Uc;
var Xt = "MenuContent",
    [kC, Gc] = Or(Xt),
    Pm = K.forwardRef((t, e) => {
        let o = Nm(Xt, t.__scopeMenu),
            {
                forceMount: r = o.forceMount,
                ...n
            } = t,
            a = ir(Xt, t.__scopeMenu),
            s = na(Xt, t.__scopeMenu);
        return (0, se.jsx)(ea.Provider, {
            scope: t.__scopeMenu,
            children: (0, se.jsx)(je, {
                present: r || a.open,
                children: (0, se.jsx)(ea.Slot, {
                    scope: t.__scopeMenu,
                    children: s.modal ? (0, se.jsx)(AC, {
                        ...n,
                        ref: e
                    }) : (0, se.jsx)(LC, {
                        ...n,
                        ref: e
                    })
                })
            })
        })
    }),
    AC = K.forwardRef((t, e) => {
        let o = ir(Xt, t.__scopeMenu),
            r = K.useRef(null),
            n = X(e, r);
        return K.useEffect(() => {
            let a = r.current;
            if (a) return rr(a)
        }, []), (0, se.jsx)(Yc, {
            ...t,
            ref: n,
            trapFocus: o.open,
            disableOutsidePointerEvents: o.open,
            disableOutsideScroll: !0,
            onFocusOutside: A(t.onFocusOutside, a => a.preventDefault(), {
                checkForDefaultPrevented: !1
            }),
            onDismiss: () => o.onOpenChange(!1)
        })
    }),
    LC = K.forwardRef((t, e) => {
        let o = ir(Xt, t.__scopeMenu);
        return (0, se.jsx)(Yc, {
            ...t,
            ref: e,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => o.onOpenChange(!1)
        })
    }),
    FC = Ft("MenuContent.ScrollLock"),
    Yc = K.forwardRef((t, e) => {
        let {
            __scopeMenu: o,
            loop: r = !1,
            trapFocus: n,
            onOpenAutoFocus: a,
            onCloseAutoFocus: s,
            disableOutsidePointerEvents: i,
            onEntryFocus: c,
            onEscapeKeyDown: l,
            onPointerDownOutside: d,
            onFocusOutside: u,
            onInteractOutside: f,
            onDismiss: p,
            disableOutsideScroll: g,
            ...m
        } = t, h = ir(Xt, o), v = na(Xt, o), _ = ra(o), y = Tm(o), x = NC(o), [b, C] = K.useState(null), R = K.useRef(null), S = X(e, R, h.onContentChange), E = K.useRef(0), D = K.useRef(""), N = K.useRef(0), O = K.useRef(null), F = K.useRef("right"), P = K.useRef(0), B = g ? Mo : K.Fragment, k = g ? {
            as: FC,
            allowPinchZoom: !0
        } : void 0, G = L => {
            let re = D.current + L,
                ne = x().filter(j => !j.disabled),
                ue = document.activeElement,
                de = ne.find(j => j.ref.current === ue)?.textValue,
                pe = ne.map(j => j.textValue),
                _e = KC(pe, re, de),
                be = ne.find(j => j.textValue === _e)?.ref.current;
            (function j(ce) {
                D.current = ce, window.clearTimeout(E.current), ce !== "" && (E.current = window.setTimeout(() => j(""), 1e3))
            })(re), be && setTimeout(() => be.focus())
        };
        K.useEffect(() => () => window.clearTimeout(E.current), []), Xo();
        let H = K.useCallback(L => F.current === O.current?.side && ZC(L, O.current?.area), []);
        return (0, se.jsx)(kC, {
            scope: o,
            searchRef: D,
            onItemEnter: K.useCallback(L => {
                H(L) && L.preventDefault()
            }, [H]),
            onItemLeave: K.useCallback(L => {
                H(L) || (R.current?.focus(), C(null))
            }, [H]),
            onTriggerLeave: K.useCallback(L => {
                H(L) && L.preventDefault()
            }, [H]),
            pointerGraceTimerRef: N,
            onPointerGraceIntentChange: K.useCallback(L => {
                O.current = L
            }, []),
            children: (0, se.jsx)(B, {
                ...k,
                children: (0, se.jsx)(So, {
                    asChild: !0,
                    trapped: n,
                    onMountAutoFocus: A(a, L => {
                        L.preventDefault(), R.current?.focus({
                            preventScroll: !0
                        })
                    }),
                    onUnmountAutoFocus: s,
                    children: (0, se.jsx)(Vt, {
                        asChild: !0,
                        disableOutsidePointerEvents: i,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: d,
                        onFocusOutside: u,
                        onInteractOutside: f,
                        onDismiss: p,
                        children: (0, se.jsx)(pn, {
                            asChild: !0,
                            ...y,
                            dir: v.dir,
                            orientation: "vertical",
                            loop: r,
                            currentTabStopId: b,
                            onCurrentTabStopIdChange: C,
                            onEntryFocus: A(c, L => {
                                v.isUsingKeyboardRef.current || L.preventDefault()
                            }),
                            preventScrollOnEntryFocus: !0,
                            children: (0, se.jsx)(er, {
                                role: "menu",
                                "aria-orientation": "vertical",
                                "data-state": $m(h.open),
                                "data-radix-menu-content": "",
                                dir: v.dir,
                                ..._,
                                ...m,
                                ref: S,
                                style: {
                                    outline: "none",
                                    ...m.style
                                },
                                onKeyDown: A(m.onKeyDown, L => {
                                    let ne = L.target.closest("[data-radix-menu-content]") === L.currentTarget,
                                        ue = L.ctrlKey || L.altKey || L.metaKey,
                                        de = L.key.length === 1;
                                    ne && (L.key === "Tab" && L.preventDefault(), !ue && de && G(L.key));
                                    let pe = R.current;
                                    if (L.target !== pe || !TC.includes(L.key)) return;
                                    L.preventDefault();
                                    let be = x().filter(j => !j.disabled).map(j => j.ref.current);
                                    Sm.includes(L.key) && be.reverse(), qC(be)
                                }),
                                onBlur: A(t.onBlur, L => {
                                    L.currentTarget.contains(L.target) || (window.clearTimeout(E.current), D.current = "")
                                }),
                                onPointerMove: A(t.onPointerMove, ta(L => {
                                    let re = L.target,
                                        ne = P.current !== L.clientX;
                                    if (L.currentTarget.contains(re) && ne) {
                                        let ue = L.clientX > P.current ? "right" : "left";
                                        F.current = ue, P.current = L.clientX
                                    }
                                }))
                            })
                        })
                    })
                })
            })
        })
    });
Pm.displayName = Xt;
var BC = "MenuGroup",
    Vc = K.forwardRef((t, e) => {
        let {
            __scopeMenu: o,
            ...r
        } = t;
        return (0, se.jsx)(z.div, {
            role: "group",
            ...r,
            ref: e
        })
    });
Vc.displayName = BC;
var WC = "MenuLabel",
    Om = K.forwardRef((t, e) => {
        let {
            __scopeMenu: o,
            ...r
        } = t;
        return (0, se.jsx)(z.div, {
            ...r,
            ref: e
        })
    });
Om.displayName = WC;
var ms = "MenuItem",
    Rm = "menu.itemSelect",
    hs = K.forwardRef((t, e) => {
        let {
            disabled: o = !1,
            onSelect: r,
            ...n
        } = t, a = K.useRef(null), s = na(ms, t.__scopeMenu), i = Gc(ms, t.__scopeMenu), c = X(e, a), l = K.useRef(!1), d = () => {
            let u = a.current;
            if (!o && u) {
                let f = new CustomEvent(Rm, {
                    bubbles: !0,
                    cancelable: !0
                });
                u.addEventListener(Rm, p => r?.(p), {
                    once: !0
                }), rn(u, f), f.defaultPrevented ? l.current = !1 : s.onClose()
            }
        };
        return (0, se.jsx)(Im, {
            ...n,
            ref: c,
            disabled: o,
            onClick: A(t.onClick, d),
            onPointerDown: u => {
                t.onPointerDown?.(u), l.current = !0
            },
            onPointerUp: A(t.onPointerUp, u => {
                l.current || u.currentTarget?.click()
            }),
            onKeyDown: A(t.onKeyDown, u => {
                let f = i.searchRef.current !== "";
                o || f && u.key === " " || Hc.includes(u.key) && (u.currentTarget.click(), u.preventDefault())
            })
        })
    });
hs.displayName = ms;
var Im = K.forwardRef((t, e) => {
        let {
            __scopeMenu: o,
            disabled: r = !1,
            textValue: n,
            ...a
        } = t, s = Gc(ms, o), i = Tm(o), c = K.useRef(null), l = X(e, c), [d, u] = K.useState(!1), [f, p] = K.useState("");
        return K.useEffect(() => {
            let g = c.current;
            g && p((g.textContent ?? "").trim())
        }, [a.children]), (0, se.jsx)(ea.ItemSlot, {
            scope: o,
            disabled: r,
            textValue: n ?? f,
            children: (0, se.jsx)(hn, {
                asChild: !0,
                ...i,
                focusable: !r,
                children: (0, se.jsx)(z.div, {
                    role: "menuitem",
                    "data-highlighted": d ? "" : void 0,
                    "aria-disabled": r || void 0,
                    "data-disabled": r ? "" : void 0,
                    ...a,
                    ref: l,
                    onPointerMove: A(t.onPointerMove, ta(g => {
                        r ? s.onItemLeave(g) : (s.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({
                            preventScroll: !0
                        }))
                    })),
                    onPointerLeave: A(t.onPointerLeave, ta(g => s.onItemLeave(g))),
                    onFocus: A(t.onFocus, () => u(!0)),
                    onBlur: A(t.onBlur, () => u(!1))
                })
            })
        })
    }),
    HC = "MenuCheckboxItem",
    km = K.forwardRef((t, e) => {
        let {
            checked: o = !1,
            onCheckedChange: r,
            ...n
        } = t;
        return (0, se.jsx)(Wm, {
            scope: t.__scopeMenu,
            checked: o,
            children: (0, se.jsx)(hs, {
                role: "menuitemcheckbox",
                "aria-checked": ps(o) ? "mixed" : o,
                ...n,
                ref: e,
                "data-state": Kc(o),
                onSelect: A(n.onSelect, () => r?.(ps(o) ? !0 : !o), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
km.displayName = HC;
var Am = "MenuRadioGroup",
    [jC, zC] = Or(Am, {
        value: void 0,
        onValueChange: () => {}
    }),
    Lm = K.forwardRef((t, e) => {
        let {
            value: o,
            onValueChange: r,
            ...n
        } = t, a = Ye(r);
        return (0, se.jsx)(jC, {
            scope: t.__scopeMenu,
            value: o,
            onValueChange: a,
            children: (0, se.jsx)(Vc, {
                ...n,
                ref: e
            })
        })
    });
Lm.displayName = Am;
var Fm = "MenuRadioItem",
    Bm = K.forwardRef((t, e) => {
        let {
            value: o,
            ...r
        } = t, n = zC(Fm, t.__scopeMenu), a = o === n.value;
        return (0, se.jsx)(Wm, {
            scope: t.__scopeMenu,
            checked: a,
            children: (0, se.jsx)(hs, {
                role: "menuitemradio",
                "aria-checked": a,
                ...r,
                ref: e,
                "data-state": Kc(a),
                onSelect: A(r.onSelect, () => n.onValueChange?.(o), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
Bm.displayName = Fm;
var qc = "MenuItemIndicator",
    [Wm, UC] = Or(qc, {
        checked: !1
    }),
    Hm = K.forwardRef((t, e) => {
        let {
            __scopeMenu: o,
            forceMount: r,
            ...n
        } = t, a = UC(qc, o);
        return (0, se.jsx)(je, {
            present: r || ps(a.checked) || a.checked === !0,
            children: (0, se.jsx)(z.span, {
                ...n,
                ref: e,
                "data-state": Kc(a.checked)
            })
        })
    });
Hm.displayName = qc;
var GC = "MenuSeparator",
    jm = K.forwardRef((t, e) => {
        let {
            __scopeMenu: o,
            ...r
        } = t;
        return (0, se.jsx)(z.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...r,
            ref: e
        })
    });
jm.displayName = GC;
var YC = "MenuArrow",
    zm = K.forwardRef((t, e) => {
        let {
            __scopeMenu: o,
            ...r
        } = t, n = ra(o);
        return (0, se.jsx)(tr, {
            ...n,
            ...r,
            ref: e
        })
    });
zm.displayName = YC;
var $c = "MenuSub",
    [VC, Um] = Or($c),
    Gm = t => {
        let {
            __scopeMenu: e,
            children: o,
            open: r = !1,
            onOpenChange: n
        } = t, a = ir($c, e), s = ra(e), [i, c] = K.useState(null), [l, d] = K.useState(null), u = Ye(n);
        return K.useEffect(() => (a.open === !1 && u(!1), () => u(!1)), [a.open, u]), (0, se.jsx)(Do, {
            ...s,
            children: (0, se.jsx)(Em, {
                scope: e,
                open: r,
                onOpenChange: u,
                content: l,
                onContentChange: d,
                children: (0, se.jsx)(VC, {
                    scope: e,
                    contentId: $e(),
                    triggerId: $e(),
                    trigger: i,
                    onTriggerChange: c,
                    children: o
                })
            })
        })
    };
Gm.displayName = $c;
var Jn = "MenuSubTrigger",
    Ym = K.forwardRef((t, e) => {
        let o = ir(Jn, t.__scopeMenu),
            r = na(Jn, t.__scopeMenu),
            n = Um(Jn, t.__scopeMenu),
            a = Gc(Jn, t.__scopeMenu),
            s = K.useRef(null),
            {
                pointerGraceTimerRef: i,
                onPointerGraceIntentChange: c
            } = a,
            l = {
                __scopeMenu: t.__scopeMenu
            },
            d = K.useCallback(() => {
                s.current && window.clearTimeout(s.current), s.current = null
            }, []);
        return K.useEffect(() => d, [d]), K.useEffect(() => {
            let u = i.current;
            return () => {
                window.clearTimeout(u), c(null)
            }
        }, [i, c]), (0, se.jsx)(zc, {
            asChild: !0,
            ...l,
            children: (0, se.jsx)(Im, {
                id: n.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": o.open,
                "aria-controls": n.contentId,
                "data-state": $m(o.open),
                ...t,
                ref: _r(e, n.onTriggerChange),
                onClick: u => {
                    t.onClick?.(u), !(t.disabled || u.defaultPrevented) && (u.currentTarget.focus(), o.open || o.onOpenChange(!0))
                },
                onPointerMove: A(t.onPointerMove, ta(u => {
                    a.onItemEnter(u), !u.defaultPrevented && !t.disabled && !o.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
                        o.onOpenChange(!0), d()
                    }, 100))
                })),
                onPointerLeave: A(t.onPointerLeave, ta(u => {
                    d();
                    let f = o.content?.getBoundingClientRect();
                    if (f) {
                        let p = o.content?.dataset.side,
                            g = p === "right",
                            m = g ? -5 : 5,
                            h = f[g ? "left" : "right"],
                            v = f[g ? "right" : "left"];
                        a.onPointerGraceIntentChange({
                            area: [{
                                x: u.clientX + m,
                                y: u.clientY
                            }, {
                                x: h,
                                y: f.top
                            }, {
                                x: v,
                                y: f.top
                            }, {
                                x: v,
                                y: f.bottom
                            }, {
                                x: h,
                                y: f.bottom
                            }],
                            side: p
                        }), window.clearTimeout(i.current), i.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (a.onTriggerLeave(u), u.defaultPrevented) return;
                        a.onPointerGraceIntentChange(null)
                    }
                })),
                onKeyDown: A(t.onKeyDown, u => {
                    let f = a.searchRef.current !== "";
                    t.disabled || f && u.key === " " || EC[r.dir].includes(u.key) && (o.onOpenChange(!0), o.content?.focus(), u.preventDefault())
                })
            })
        })
    });
Ym.displayName = Jn;
var Vm = "MenuSubContent",
    qm = K.forwardRef((t, e) => {
        let o = Nm(Xt, t.__scopeMenu),
            {
                forceMount: r = o.forceMount,
                ...n
            } = t,
            a = ir(Xt, t.__scopeMenu),
            s = na(Xt, t.__scopeMenu),
            i = Um(Vm, t.__scopeMenu),
            c = K.useRef(null),
            l = X(e, c);
        return (0, se.jsx)(ea.Provider, {
            scope: t.__scopeMenu,
            children: (0, se.jsx)(je, {
                present: r || a.open,
                children: (0, se.jsx)(ea.Slot, {
                    scope: t.__scopeMenu,
                    children: (0, se.jsx)(Yc, {
                        id: i.contentId,
                        "aria-labelledby": i.triggerId,
                        ...n,
                        ref: l,
                        align: "start",
                        side: s.dir === "rtl" ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: d => {
                            s.isUsingKeyboardRef.current && c.current?.focus(), d.preventDefault()
                        },
                        onCloseAutoFocus: d => d.preventDefault(),
                        onFocusOutside: A(t.onFocusOutside, d => {
                            d.target !== i.trigger && a.onOpenChange(!1)
                        }),
                        onEscapeKeyDown: A(t.onEscapeKeyDown, d => {
                            s.onClose(), d.preventDefault()
                        }),
                        onKeyDown: A(t.onKeyDown, d => {
                            let u = d.currentTarget.contains(d.target),
                                f = DC[s.dir].includes(d.key);
                            u && f && (a.onOpenChange(!1), i.trigger?.focus(), d.preventDefault())
                        })
                    })
                })
            })
        })
    });
qm.displayName = Vm;

function $m(t) {
    return t ? "open" : "closed"
}

function ps(t) {
    return t === "indeterminate"
}

function Kc(t) {
    return ps(t) ? "indeterminate" : t ? "checked" : "unchecked"
}

function qC(t) {
    let e = document.activeElement;
    for (let o of t)
        if (o === e || (o.focus(), document.activeElement !== e)) return
}

function $C(t, e) {
    return t.map((o, r) => t[(e + r) % t.length])
}

function KC(t, e, o) {
    let n = e.length > 1 && Array.from(e).every(l => l === e[0]) ? e[0] : e,
        a = o ? t.indexOf(o) : -1,
        s = $C(t, Math.max(a, 0));
    n.length === 1 && (s = s.filter(l => l !== o));
    let c = s.find(l => l.toLowerCase().startsWith(n.toLowerCase()));
    return c !== o ? c : void 0
}

function XC(t, e) {
    let {
        x: o,
        y: r
    } = t, n = !1;
    for (let a = 0, s = e.length - 1; a < e.length; s = a++) {
        let i = e[a],
            c = e[s],
            l = i.x,
            d = i.y,
            u = c.x,
            f = c.y;
        d > r != f > r && o < (u - l) * (r - d) / (f - d) + l && (n = !n)
    }
    return n
}

function ZC(t, e) {
    if (!e) return !1;
    let o = {
        x: t.clientX,
        y: t.clientY
    };
    return XC(o, e)
}

function ta(t) {
    return e => e.pointerType === "mouse" ? t(e) : void 0
}
var Km = Dm,
    Xm = zc,
    Zm = Mm,
    Qm = Pm,
    Jm = Vc,
    ep = Om,
    tp = hs,
    op = km,
    rp = Lm,
    np = Bm,
    ap = Hm,
    sp = jm,
    ip = zm,
    cp = Gm,
    lp = Ym,
    up = qm;
var rt = w(W(), 1),
    gs = "DropdownMenu",
    [JC, GL] = Se(gs, [jc]),
    ht = jc(),
    [eR, dp] = JC(gs),
    fp = t => {
        let {
            __scopeDropdownMenu: e,
            children: o,
            dir: r,
            open: n,
            defaultOpen: a,
            onOpenChange: s,
            modal: i = !0
        } = t, c = ht(e), l = nt.useRef(null), [d, u] = He({
            prop: n,
            defaultProp: a ?? !1,
            onChange: s,
            caller: gs
        });
        return (0, rt.jsx)(eR, {
            scope: e,
            triggerId: $e(),
            triggerRef: l,
            contentId: $e(),
            open: d,
            onOpenChange: u,
            onOpenToggle: nt.useCallback(() => u(f => !f), [u]),
            modal: i,
            children: (0, rt.jsx)(Km, {
                ...c,
                open: d,
                onOpenChange: u,
                dir: r,
                modal: i,
                children: o
            })
        })
    };
fp.displayName = gs;
var mp = "DropdownMenuTrigger",
    pp = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            disabled: r = !1,
            ...n
        } = t, a = dp(mp, o), s = ht(o);
        return (0, rt.jsx)(Xm, {
            asChild: !0,
            ...s,
            children: (0, rt.jsx)(z.button, {
                type: "button",
                id: a.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": a.open,
                "aria-controls": a.open ? a.contentId : void 0,
                "data-state": a.open ? "open" : "closed",
                "data-disabled": r ? "" : void 0,
                disabled: r,
                ...n,
                ref: _r(e, a.triggerRef),
                onPointerDown: A(t.onPointerDown, i => {
                    !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault())
                }),
                onKeyDown: A(t.onKeyDown, i => {
                    r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault())
                })
            })
        })
    });
pp.displayName = mp;
var tR = "DropdownMenuPortal",
    hp = t => {
        let {
            __scopeDropdownMenu: e,
            ...o
        } = t, r = ht(e);
        return (0, rt.jsx)(Zm, {
            ...r,
            ...o
        })
    };
hp.displayName = tR;
var gp = "DropdownMenuContent",
    vp = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = dp(gp, o), a = ht(o), s = nt.useRef(!1);
        return (0, rt.jsx)(Qm, {
            id: n.contentId,
            "aria-labelledby": n.triggerId,
            ...a,
            ...r,
            ref: e,
            onCloseAutoFocus: A(t.onCloseAutoFocus, i => {
                s.current || n.triggerRef.current?.focus(), s.current = !1, i.preventDefault()
            }),
            onInteractOutside: A(t.onInteractOutside, i => {
                let c = i.detail.originalEvent,
                    l = c.button === 0 && c.ctrlKey === !0,
                    d = c.button === 2 || l;
                (!n.modal || d) && (s.current = !0)
            }),
            style: {
                ...t.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
vp.displayName = gp;
var oR = "DropdownMenuGroup",
    yp = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(Jm, {
            ...n,
            ...r,
            ref: e
        })
    });
yp.displayName = oR;
var rR = "DropdownMenuLabel",
    _p = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(ep, {
            ...n,
            ...r,
            ref: e
        })
    });
_p.displayName = rR;
var nR = "DropdownMenuItem",
    wp = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(tp, {
            ...n,
            ...r,
            ref: e
        })
    });
wp.displayName = nR;
var aR = "DropdownMenuCheckboxItem",
    bp = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(op, {
            ...n,
            ...r,
            ref: e
        })
    });
bp.displayName = aR;
var sR = "DropdownMenuRadioGroup",
    xp = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(rp, {
            ...n,
            ...r,
            ref: e
        })
    });
xp.displayName = sR;
var iR = "DropdownMenuRadioItem",
    Cp = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(np, {
            ...n,
            ...r,
            ref: e
        })
    });
Cp.displayName = iR;
var cR = "DropdownMenuItemIndicator",
    Rp = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(ap, {
            ...n,
            ...r,
            ref: e
        })
    });
Rp.displayName = cR;
var lR = "DropdownMenuSeparator",
    Sp = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(sp, {
            ...n,
            ...r,
            ref: e
        })
    });
Sp.displayName = lR;
var uR = "DropdownMenuArrow",
    dR = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(ip, {
            ...n,
            ...r,
            ref: e
        })
    });
dR.displayName = uR;
var fR = t => {
        let {
            __scopeDropdownMenu: e,
            children: o,
            open: r,
            onOpenChange: n,
            defaultOpen: a
        } = t, s = ht(e), [i, c] = He({
            prop: r,
            defaultProp: a ?? !1,
            onChange: n,
            caller: "DropdownMenuSub"
        });
        return (0, rt.jsx)(cp, {
            ...s,
            open: i,
            onOpenChange: c,
            children: o
        })
    },
    mR = "DropdownMenuSubTrigger",
    Tp = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(lp, {
            ...n,
            ...r,
            ref: e
        })
    });
Tp.displayName = mR;
var pR = "DropdownMenuSubContent",
    Ep = nt.forwardRef((t, e) => {
        let {
            __scopeDropdownMenu: o,
            ...r
        } = t, n = ht(o);
        return (0, rt.jsx)(up, {
            ...n,
            ...r,
            ref: e,
            style: {
                ...t.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Ep.displayName = pR;
var vs = fp,
    ys = pp,
    aa = hp,
    _s = vp,
    Dp = yp,
    Np = _p,
    Mp = wp,
    Pp = bp,
    hR = xp,
    gR = Cp,
    Op = Rp,
    Ip = Sp;
var kp = fR,
    Ap = Tp,
    Lp = Ep;
var Me = w(M(), 1);

function Xc(t, e) {
    return t.slice().sort((o, r) => {
        let n = e.has(o.value),
            a = e.has(r.value);
        return n && !a ? -1 : !n && a ? 1 : o.label.localeCompare(r.label)
    })
}
var Fp = w(M(), 1);

function Zc(t) {
    try {
        return Fp.Children.only(t)
    } catch (e) {
        return console.error("Children prop was provided but the children could not be rendered as a single child.", e), null
    }
}
var zp = w(M(), 1);
var cr = "en-US";

function Hp(t) {
    return {
        "MMMM DD, YYYY": new Intl.DateTimeFormat(t, {
            month: "long",
            day: "2-digit",
            year: "numeric",
            timeStyle: void 0
        }),
        "MMMM DD, YYYY UTC": new Intl.DateTimeFormat(t, {
            month: "long",
            day: "2-digit",
            year: "numeric",
            timeStyle: void 0,
            timeZone: "UTC"
        }),
        "MMM DD, YYYY": new Intl.DateTimeFormat(t, {
            month: "short",
            day: "2-digit",
            year: "numeric",
            timeStyle: void 0
        }),
        "MMM DD, YYYY UTC": new Intl.DateTimeFormat(t, {
            month: "short",
            day: "2-digit",
            year: "numeric",
            timeStyle: void 0,
            timeZone: "UTC"
        }),
        "YYYY-DD-MM": new Intl.DateTimeFormat("en-CA", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            timeStyle: void 0
        }),
        "YYYY-DD-MM UTC": new Intl.DateTimeFormat("en-CA", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            timeStyle: void 0,
            timeZone: "UTC"
        }),
        "MMM DD": new Intl.DateTimeFormat(t, {
            month: "short",
            day: "2-digit",
            year: void 0,
            timeStyle: void 0
        }),
        "MMM DD UTC": new Intl.DateTimeFormat(t, {
            month: "short",
            day: "2-digit",
            year: void 0,
            timeStyle: void 0,
            timeZone: "UTC"
        })
    }
}

function jp(t) {
    return {
        "HH:MM": Intl.DateTimeFormat(t, {
            timeStyle: "short",
            hourCycle: "h23"
        }),
        "HH:MM:SS": Intl.DateTimeFormat(t, {
            timeStyle: "medium",
            hourCycle: "h23"
        }),
        "HH:MM UTC": Intl.DateTimeFormat(t, {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "UTC",
            timeZoneName: "short",
            hourCycle: "h23"
        }),
        "HH:MM:SS UTC": Intl.DateTimeFormat(t, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "UTC",
            timeZoneName: "short",
            hourCycle: "h23"
        }),
        "H:MM A UTC": Intl.DateTimeFormat(t, {
            hour: "numeric",
            minute: "2-digit",
            hour12: !0,
            timeZone: "UTC",
            timeZoneName: "short"
        })
    }
}
var Bp = new Map([
        [cr, Hp(cr)]
    ]),
    Wp = new Map([
        [cr, jp(cr)]
    ]);

function Qc(t, e = cr) {
    let o = Bp.get(e);
    return o || (o = Hp(e), Bp.set(e, o)), o[t]
}

function Jc(t, e = cr) {
    let o = Wp.get(e);
    return o || (o = jp(e), Wp.set(e, o)), o[t]
}

function sa() {
    return (0, zp.useSyncExternalStore)(wR, _R, yR)
}

function yR() {
    return cr
}

function _R() {
    return navigator.language
}

function wR(t) {
    return window.addEventListener("languagechange", t), () => {
        window.removeEventListener("languagechange", t)
    }
}
var me = w(M(), 1);
var Qe = w(W(), 1),
    [ws, i3] = Se("Tooltip", [$t]),
    bs = $t(),
    Up = "TooltipProvider",
    bR = 700,
    el = "tooltip.open",
    [xR, ol] = ws(Up),
    Gp = t => {
        let {
            __scopeTooltip: e,
            delayDuration: o = bR,
            skipDelayDuration: r = 300,
            disableHoverableContent: n = !1,
            children: a
        } = t, s = me.useRef(!0), i = me.useRef(!1), c = me.useRef(0);
        return me.useEffect(() => {
            let l = c.current;
            return () => window.clearTimeout(l)
        }, []), (0, Qe.jsx)(xR, {
            scope: e,
            isOpenDelayedRef: s,
            delayDuration: o,
            onOpen: me.useCallback(() => {
                window.clearTimeout(c.current), s.current = !1
            }, []),
            onClose: me.useCallback(() => {
                window.clearTimeout(c.current), c.current = window.setTimeout(() => s.current = !0, r)
            }, [r]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: me.useCallback(l => {
                i.current = l
            }, []),
            disableHoverableContent: n,
            children: a
        })
    };
Gp.displayName = Up;
var ia = "Tooltip",
    [CR, ca] = ws(ia),
    Yp = t => {
        let {
            __scopeTooltip: e,
            children: o,
            open: r,
            defaultOpen: n,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
        } = t, c = ol(ia, t.__scopeTooltip), l = bs(e), [d, u] = me.useState(null), f = $e(), p = me.useRef(0), g = s ?? c.disableHoverableContent, m = i ?? c.delayDuration, h = me.useRef(!1), [v, _] = He({
            prop: r,
            defaultProp: n ?? !1,
            onChange: R => {
                R ? (c.onOpen(), document.dispatchEvent(new CustomEvent(el))) : c.onClose(), a?.(R)
            },
            caller: ia
        }), y = me.useMemo(() => v ? h.current ? "delayed-open" : "instant-open" : "closed", [v]), x = me.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, h.current = !1, _(!0)
        }, [_]), b = me.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, _(!1)
        }, [_]), C = me.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
                h.current = !0, _(!0), p.current = 0
            }, m)
        }, [m, _]);
        return me.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
        }, []), (0, Qe.jsx)(Do, {
            ...l,
            children: (0, Qe.jsx)(CR, {
                scope: e,
                contentId: f,
                open: v,
                stateAttribute: y,
                trigger: d,
                onTriggerChange: u,
                onTriggerEnter: me.useCallback(() => {
                    c.isOpenDelayedRef.current ? C() : x()
                }, [c.isOpenDelayedRef, C, x]),
                onTriggerLeave: me.useCallback(() => {
                    g ? b() : (window.clearTimeout(p.current), p.current = 0)
                }, [b, g]),
                onOpen: x,
                onClose: b,
                disableHoverableContent: g,
                children: o
            })
        })
    };
Yp.displayName = ia;
var tl = "TooltipTrigger",
    Vp = me.forwardRef((t, e) => {
        let {
            __scopeTooltip: o,
            ...r
        } = t, n = ca(tl, o), a = ol(tl, o), s = bs(o), i = me.useRef(null), c = X(e, i, n.onTriggerChange), l = me.useRef(!1), d = me.useRef(!1), u = me.useCallback(() => l.current = !1, []);
        return me.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, Qe.jsx)(No, {
            asChild: !0,
            ...s,
            children: (0, Qe.jsx)(z.button, {
                "aria-describedby": n.open ? n.contentId : void 0,
                "data-state": n.stateAttribute,
                ...r,
                ref: c,
                onPointerMove: A(t.onPointerMove, f => {
                    f.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (n.onTriggerEnter(), d.current = !0)
                }),
                onPointerLeave: A(t.onPointerLeave, () => {
                    n.onTriggerLeave(), d.current = !1
                }),
                onPointerDown: A(t.onPointerDown, () => {
                    n.open && n.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                        once: !0
                    })
                }),
                onFocus: A(t.onFocus, () => {
                    l.current || n.onOpen()
                }),
                onBlur: A(t.onBlur, n.onClose),
                onClick: A(t.onClick, n.onClose)
            })
        })
    });
Vp.displayName = tl;
var rl = "TooltipPortal",
    [RR, SR] = ws(rl, {
        forceMount: void 0
    }),
    qp = t => {
        let {
            __scopeTooltip: e,
            forceMount: o,
            children: r,
            container: n
        } = t, a = ca(rl, e);
        return (0, Qe.jsx)(RR, {
            scope: e,
            forceMount: o,
            children: (0, Qe.jsx)(je, {
                present: o || a.open,
                children: (0, Qe.jsx)(Ht, {
                    asChild: !0,
                    container: n,
                    children: r
                })
            })
        })
    };
qp.displayName = rl;
var yn = "TooltipContent",
    $p = me.forwardRef((t, e) => {
        let o = SR(yn, t.__scopeTooltip),
            {
                forceMount: r = o.forceMount,
                side: n = "top",
                ...a
            } = t,
            s = ca(yn, t.__scopeTooltip);
        return (0, Qe.jsx)(je, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, Qe.jsx)(Kp, {
                side: n,
                ...a,
                ref: e
            }) : (0, Qe.jsx)(TR, {
                side: n,
                ...a,
                ref: e
            })
        })
    }),
    TR = me.forwardRef((t, e) => {
        let o = ca(yn, t.__scopeTooltip),
            r = ol(yn, t.__scopeTooltip),
            n = me.useRef(null),
            a = X(e, n),
            [s, i] = me.useState(null),
            {
                trigger: c,
                onClose: l
            } = o,
            d = n.current,
            {
                onPointerInTransitChange: u
            } = r,
            f = me.useCallback(() => {
                i(null), u(!1)
            }, [u]),
            p = me.useCallback((g, m) => {
                let h = g.currentTarget,
                    v = {
                        x: g.clientX,
                        y: g.clientY
                    },
                    _ = MR(v, h.getBoundingClientRect()),
                    y = PR(v, _),
                    x = OR(m.getBoundingClientRect()),
                    b = kR([...y, ...x]);
                i(b), u(!0)
            }, [u]);
        return me.useEffect(() => () => f(), [f]), me.useEffect(() => {
            if (c && d) {
                let g = h => p(h, d),
                    m = h => p(h, c);
                return c.addEventListener("pointerleave", g), d.addEventListener("pointerleave", m), () => {
                    c.removeEventListener("pointerleave", g), d.removeEventListener("pointerleave", m)
                }
            }
        }, [c, d, p, f]), me.useEffect(() => {
            if (s) {
                let g = m => {
                    let h = m.target,
                        v = {
                            x: m.clientX,
                            y: m.clientY
                        },
                        _ = c?.contains(h) || d?.contains(h),
                        y = !IR(v, s);
                    _ ? f() : y && (f(), l())
                };
                return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g)
            }
        }, [c, d, s, l, f]), (0, Qe.jsx)(Kp, {
            ...t,
            ref: a
        })
    }),
    [ER, DR] = ws(ia, {
        isInside: !1
    }),
    NR = Lu("TooltipContent"),
    Kp = me.forwardRef((t, e) => {
        let {
            __scopeTooltip: o,
            children: r,
            "aria-label": n,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
        } = t, c = ca(yn, o), l = bs(o), {
            onClose: d
        } = c;
        return me.useEffect(() => (document.addEventListener(el, d), () => document.removeEventListener(el, d)), [d]), me.useEffect(() => {
            if (c.trigger) {
                let u = f => {
                    f.target?.contains(c.trigger) && d()
                };
                return window.addEventListener("scroll", u, {
                    capture: !0
                }), () => window.removeEventListener("scroll", u, {
                    capture: !0
                })
            }
        }, [c.trigger, d]), (0, Qe.jsx)(Vt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: u => u.preventDefault(),
            onDismiss: d,
            children: (0, Qe.jsxs)(er, {
                "data-state": c.stateAttribute,
                ...l,
                ...i,
                ref: e,
                style: {
                    ...i.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [(0, Qe.jsx)(NR, {
                    children: r
                }), (0, Qe.jsx)(ER, {
                    scope: o,
                    isInside: !0,
                    children: (0, Qe.jsx)($d, {
                        id: c.contentId,
                        role: "tooltip",
                        children: n || r
                    })
                })]
            })
        })
    });
$p.displayName = yn;
var Xp = "TooltipArrow",
    Zp = me.forwardRef((t, e) => {
        let {
            __scopeTooltip: o,
            ...r
        } = t, n = bs(o);
        return DR(Xp, o).isInside ? null : (0, Qe.jsx)(tr, {
            ...n,
            ...r,
            ref: e
        })
    });
Zp.displayName = Xp;

function MR(t, e) {
    let o = Math.abs(e.top - t.y),
        r = Math.abs(e.bottom - t.y),
        n = Math.abs(e.right - t.x),
        a = Math.abs(e.left - t.x);
    switch (Math.min(o, r, n, a)) {
        case a:
            return "left";
        case n:
            return "right";
        case o:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function PR(t, e, o = 5) {
    let r = [];
    switch (e) {
        case "top":
            r.push({
                x: t.x - o,
                y: t.y + o
            }, {
                x: t.x + o,
                y: t.y + o
            });
            break;
        case "bottom":
            r.push({
                x: t.x - o,
                y: t.y - o
            }, {
                x: t.x + o,
                y: t.y - o
            });
            break;
        case "left":
            r.push({
                x: t.x + o,
                y: t.y - o
            }, {
                x: t.x + o,
                y: t.y + o
            });
            break;
        case "right":
            r.push({
                x: t.x - o,
                y: t.y - o
            }, {
                x: t.x - o,
                y: t.y + o
            });
            break
    }
    return r
}

function OR(t) {
    let {
        top: e,
        right: o,
        bottom: r,
        left: n
    } = t;
    return [{
        x: n,
        y: e
    }, {
        x: o,
        y: e
    }, {
        x: o,
        y: r
    }, {
        x: n,
        y: r
    }]
}

function IR(t, e) {
    let {
        x: o,
        y: r
    } = t, n = !1;
    for (let a = 0, s = e.length - 1; a < e.length; s = a++) {
        let i = e[a],
            c = e[s],
            l = i.x,
            d = i.y,
            u = c.x,
            f = c.y;
        d > r != f > r && o < (u - l) * (r - d) / (f - d) + l && (n = !n)
    }
    return n
}

function kR(t) {
    let e = t.slice();
    return e.sort((o, r) => o.x < r.x ? -1 : o.x > r.x ? 1 : o.y < r.y ? -1 : o.y > r.y ? 1 : 0), AR(e)
}

function AR(t) {
    if (t.length <= 1) return t.slice();
    let e = [];
    for (let r = 0; r < t.length; r++) {
        let n = t[r];
        for (; e.length >= 2;) {
            let a = e[e.length - 1],
                s = e[e.length - 2];
            if ((a.x - s.x) * (n.y - s.y) >= (a.y - s.y) * (n.x - s.x)) e.pop();
            else break
        }
        e.push(n)
    }
    e.pop();
    let o = [];
    for (let r = t.length - 1; r >= 0; r--) {
        let n = t[r];
        for (; o.length >= 2;) {
            let a = o[o.length - 1],
                s = o[o.length - 2];
            if ((a.x - s.x) * (n.y - s.y) >= (a.y - s.y) * (n.x - s.x)) o.pop();
            else break
        }
        o.push(n)
    }
    return o.pop(), e.length === 1 && o.length === 1 && e[0].x === o[0].x && e[0].y === o[0].y ? e : e.concat(o)
}
var Qp = Gp,
    Jp = Yp,
    eh = Vp,
    th = qp,
    oh = $p,
    rh = Zp;
var St = w(M(), 1);
var zt = w(W(), 1),
    xs = "Checkbox",
    [FR, g3] = Se(xs),
    [BR, nl] = FR(xs);

function WR(t) {
    let {
        __scopeCheckbox: e,
        checked: o,
        children: r,
        defaultChecked: n,
        disabled: a,
        form: s,
        name: i,
        onCheckedChange: c,
        required: l,
        value: d = "on",
        internal_do_not_use_render: u
    } = t, [f, p] = He({
        prop: o,
        defaultProp: n ?? !1,
        onChange: c,
        caller: xs
    }), [g, m] = St.useState(null), [h, v] = St.useState(null), _ = St.useRef(!1), y = g ? !!s || !!g.closest("form") : !0, x = {
        checked: f,
        disabled: a,
        setChecked: p,
        control: g,
        setControl: m,
        name: i,
        form: s,
        value: d,
        hasConsumerStoppedPropagationRef: _,
        required: l,
        defaultChecked: lr(n) ? !1 : n,
        isFormControl: y,
        bubbleInput: h,
        setBubbleInput: v
    };
    return (0, zt.jsx)(BR, {
        scope: e,
        ...x,
        children: HR(u) ? u(x) : r
    })
}
var nh = "CheckboxTrigger",
    ah = St.forwardRef(({
        __scopeCheckbox: t,
        onKeyDown: e,
        onClick: o,
        ...r
    }, n) => {
        let {
            control: a,
            value: s,
            disabled: i,
            checked: c,
            required: l,
            setControl: d,
            setChecked: u,
            hasConsumerStoppedPropagationRef: f,
            isFormControl: p,
            bubbleInput: g
        } = nl(nh, t), m = X(n, d), h = St.useRef(c);
        return St.useEffect(() => {
            let v = a?.form;
            if (v) {
                let _ = () => u(h.current);
                return v.addEventListener("reset", _), () => v.removeEventListener("reset", _)
            }
        }, [a, u]), (0, zt.jsx)(z.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": lr(c) ? "mixed" : c,
            "aria-required": l,
            "data-state": lh(c),
            "data-disabled": i ? "" : void 0,
            disabled: i,
            value: s,
            ...r,
            ref: m,
            onKeyDown: A(e, v => {
                v.key === "Enter" && v.preventDefault()
            }),
            onClick: A(o, v => {
                u(_ => lr(_) ? !0 : !_), g && p && (f.current = v.isPropagationStopped(), f.current || v.stopPropagation())
            })
        })
    });
ah.displayName = nh;
var al = St.forwardRef((t, e) => {
    let {
        __scopeCheckbox: o,
        name: r,
        checked: n,
        defaultChecked: a,
        required: s,
        disabled: i,
        value: c,
        onCheckedChange: l,
        form: d,
        ...u
    } = t;
    return (0, zt.jsx)(WR, {
        __scopeCheckbox: o,
        checked: n,
        defaultChecked: a,
        disabled: i,
        required: s,
        onCheckedChange: l,
        name: r,
        form: d,
        value: c,
        internal_do_not_use_render: ({
            isFormControl: f
        }) => (0, zt.jsxs)(zt.Fragment, {
            children: [(0, zt.jsx)(ah, {
                ...u,
                ref: e,
                __scopeCheckbox: o
            }), f && (0, zt.jsx)(ch, {
                __scopeCheckbox: o
            })]
        })
    })
});
al.displayName = xs;
var sh = "CheckboxIndicator",
    sl = St.forwardRef((t, e) => {
        let {
            __scopeCheckbox: o,
            forceMount: r,
            ...n
        } = t, a = nl(sh, o);
        return (0, zt.jsx)(je, {
            present: r || lr(a.checked) || a.checked === !0,
            children: (0, zt.jsx)(z.span, {
                "data-state": lh(a.checked),
                "data-disabled": a.disabled ? "" : void 0,
                ...n,
                ref: e,
                style: {
                    pointerEvents: "none",
                    ...t.style
                }
            })
        })
    });
sl.displayName = sh;
var ih = "CheckboxBubbleInput",
    ch = St.forwardRef(({
        __scopeCheckbox: t,
        ...e
    }, o) => {
        let {
            control: r,
            hasConsumerStoppedPropagationRef: n,
            checked: a,
            defaultChecked: s,
            required: i,
            disabled: c,
            name: l,
            value: d,
            form: u,
            bubbleInput: f,
            setBubbleInput: p
        } = nl(ih, t), g = X(o, p), m = or(a), h = Qo(r);
        St.useEffect(() => {
            let _ = f;
            if (!_) return;
            let y = window.HTMLInputElement.prototype,
                b = Object.getOwnPropertyDescriptor(y, "checked").set,
                C = !n.current;
            if (m !== a && b) {
                let R = new Event("click", {
                    bubbles: C
                });
                _.indeterminate = lr(a), b.call(_, lr(a) ? !1 : a), _.dispatchEvent(R)
            }
        }, [f, m, a, n]);
        let v = St.useRef(lr(a) ? !1 : a);
        return (0, zt.jsx)(z.input, {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: s ?? v.current,
            required: i,
            disabled: c,
            name: l,
            value: d,
            form: u,
            ...e,
            tabIndex: -1,
            ref: g,
            style: {
                ...e.style,
                ...h,
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: 0,
                transform: "translateX(-100%)"
            }
        })
    });
ch.displayName = ih;

function HR(t) {
    return typeof t == "function"
}

function lr(t) {
    return t === "indeterminate"
}

function lh(t) {
    return lr(t) ? "indeterminate" : t ? "checked" : "unchecked"
}
var il = w(W(), 1),
    dh = w(V(), 1),
    fh = w(M(), 1);
var uh = 12,
    zR = (0, fh.forwardRef)((t, e) => {
        let o = (0, dh.c)(23),
            r, n, a, s, i, c, l;
        o[0] !== t ? ({
            isFullWidth: a,
            isValid: s,
            rows: l,
            autoGrow: r,
            maxHeight: i,
            onInput: c,
            ...n
        } = t, o[0] = t, o[1] = r, o[2] = n, o[3] = a, o[4] = s, o[5] = i, o[6] = c, o[7] = l) : (r = o[1], n = o[2], a = o[3], s = o[4], i = o[5], c = o[6], l = o[7]);
        let d = l === void 0 ? 3 : l,
            u;
        o[8] !== r || o[9] !== i || o[10] !== c ? (u = _ => {
            let y = _.currentTarget;
            r && (y.style.height = "auto", y.style.height = `${y.scrollHeight-uh}px`, i && y.scrollHeight > i && (y.style.height = `${i-uh}px`)), c && c(_)
        }, o[8] = r, o[9] = i, o[10] = c, o[11] = u) : u = o[11];
        let f = u,
            p = a && Lt.inputContainerFullWidth,
            g = s === !1 && Lt.inputContainerInvalid,
            m;
        o[12] !== p || o[13] !== g ? (m = T(Lt.sharedInputContainer, Lt.inputAreaContainer, p, g), o[12] = p, o[13] = g, o[14] = m) : m = o[14];
        let h;
        o[15] !== f || o[16] !== n || o[17] !== e || o[18] !== d ? (h = (0, il.jsx)("textarea", {
            ref: e,
            rows: d,
            onInput: f,
            ...n
        }), o[15] = f, o[16] = n, o[17] = e, o[18] = d, o[19] = h) : h = o[19];
        let v;
        return o[20] !== m || o[21] !== h ? (v = (0, il.jsx)("div", {
            className: m,
            children: h
        }), o[20] = m, o[21] = h, o[22] = v) : v = o[22], v
    });
var Ao = w(M(), 1);
var oo = w(M(), 1);
var ur = w(W(), 1),
    Ir = w(W(), 1),
    cl = "Radio",
    [UR, mh] = Se(cl),
    [GR, YR] = UR(cl),
    ph = oo.forwardRef((t, e) => {
        let {
            __scopeRadio: o,
            name: r,
            checked: n = !1,
            required: a,
            disabled: s,
            value: i = "on",
            onCheck: c,
            form: l,
            ...d
        } = t, [u, f] = oo.useState(null), p = X(e, h => f(h)), g = oo.useRef(!1), m = u ? l || !!u.closest("form") : !0;
        return (0, ur.jsxs)(GR, {
            scope: o,
            checked: n,
            disabled: s,
            children: [(0, ur.jsx)(z.button, {
                type: "button",
                role: "radio",
                "aria-checked": n,
                "data-state": yh(n),
                "data-disabled": s ? "" : void 0,
                disabled: s,
                value: i,
                ...d,
                ref: p,
                onClick: A(t.onClick, h => {
                    n || c?.(), m && (g.current = h.isPropagationStopped(), g.current || h.stopPropagation())
                })
            }), m && (0, ur.jsx)(vh, {
                control: u,
                bubbles: !g.current,
                name: r,
                value: i,
                checked: n,
                required: a,
                disabled: s,
                form: l,
                style: {
                    transform: "translateX(-100%)"
                }
            })]
        })
    });
ph.displayName = cl;
var hh = "RadioIndicator",
    gh = oo.forwardRef((t, e) => {
        let {
            __scopeRadio: o,
            forceMount: r,
            ...n
        } = t, a = YR(hh, o);
        return (0, ur.jsx)(je, {
            present: r || a.checked,
            children: (0, ur.jsx)(z.span, {
                "data-state": yh(a.checked),
                "data-disabled": a.disabled ? "" : void 0,
                ...n,
                ref: e
            })
        })
    });
gh.displayName = hh;
var VR = "RadioBubbleInput",
    vh = oo.forwardRef(({
        __scopeRadio: t,
        control: e,
        checked: o,
        bubbles: r = !0,
        ...n
    }, a) => {
        let s = oo.useRef(null),
            i = X(s, a),
            c = or(o),
            l = Qo(e);
        return oo.useEffect(() => {
            let d = s.current;
            if (!d) return;
            let u = window.HTMLInputElement.prototype,
                p = Object.getOwnPropertyDescriptor(u, "checked").set;
            if (c !== o && p) {
                let g = new Event("click", {
                    bubbles: r
                });
                p.call(d, o), d.dispatchEvent(g)
            }
        }, [c, o, r]), (0, ur.jsx)(z.input, {
            type: "radio",
            "aria-hidden": !0,
            defaultChecked: o,
            ...n,
            tabIndex: -1,
            ref: i,
            style: {
                ...n.style,
                ...l,
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: 0
            }
        })
    });
vh.displayName = VR;

function yh(t) {
    return t ? "checked" : "unchecked"
}
var qR = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    Cs = "RadioGroup",
    [$R, k3] = Se(Cs, [Po, mh]),
    _h = Po(),
    wh = mh(),
    [KR, XR] = $R(Cs),
    bh = Ao.forwardRef((t, e) => {
        let {
            __scopeRadioGroup: o,
            name: r,
            defaultValue: n,
            value: a,
            required: s = !1,
            disabled: i = !1,
            orientation: c,
            dir: l,
            loop: d = !0,
            onValueChange: u,
            ...f
        } = t, p = _h(o), g = mo(l), [m, h] = He({
            prop: a,
            defaultProp: n ?? null,
            onChange: u,
            caller: Cs
        });
        return (0, Ir.jsx)(KR, {
            scope: o,
            name: r,
            required: s,
            disabled: i,
            value: m,
            onValueChange: h,
            children: (0, Ir.jsx)(pn, {
                asChild: !0,
                ...p,
                orientation: c,
                dir: g,
                loop: d,
                children: (0, Ir.jsx)(z.div, {
                    role: "radiogroup",
                    "aria-required": s,
                    "aria-orientation": c,
                    "data-disabled": i ? "" : void 0,
                    dir: g,
                    ...f,
                    ref: e
                })
            })
        })
    });
bh.displayName = Cs;
var xh = "RadioGroupItem",
    Ch = Ao.forwardRef((t, e) => {
        let {
            __scopeRadioGroup: o,
            disabled: r,
            ...n
        } = t, a = XR(xh, o), s = a.disabled || r, i = _h(o), c = wh(o), l = Ao.useRef(null), d = X(e, l), u = a.value === n.value, f = Ao.useRef(!1);
        return Ao.useEffect(() => {
            let p = m => {
                    qR.includes(m.key) && (f.current = !0)
                },
                g = () => f.current = !1;
            return document.addEventListener("keydown", p), document.addEventListener("keyup", g), () => {
                document.removeEventListener("keydown", p), document.removeEventListener("keyup", g)
            }
        }, []), (0, Ir.jsx)(hn, {
            asChild: !0,
            ...i,
            focusable: !s,
            active: u,
            children: (0, Ir.jsx)(ph, {
                disabled: s,
                required: a.required,
                checked: u,
                ...c,
                ...n,
                name: a.name,
                ref: d,
                onCheck: () => a.onValueChange(n.value),
                onKeyDown: A(p => {
                    p.key === "Enter" && p.preventDefault()
                }),
                onFocus: A(n.onFocus, () => {
                    f.current && l.current?.click()
                })
            })
        })
    });
Ch.displayName = xh;
var ZR = "RadioGroupIndicator",
    Rh = Ao.forwardRef((t, e) => {
        let {
            __scopeRadioGroup: o,
            ...r
        } = t, n = wh(o);
        return (0, Ir.jsx)(gh, {
            ...n,
            ...r,
            ref: e
        })
    });
Rh.displayName = ZR;
var Rs = bh,
    Sh = Ch,
    Ss = Rh;
var ro = w(M(), 1);
var kr = w(W(), 1),
    Ts = "Switch",
    [QR, z3] = Se(Ts),
    [JR, eS] = QR(Ts),
    Th = ro.forwardRef((t, e) => {
        let {
            __scopeSwitch: o,
            name: r,
            checked: n,
            defaultChecked: a,
            required: s,
            disabled: i,
            value: c = "on",
            onCheckedChange: l,
            form: d,
            ...u
        } = t, [f, p] = ro.useState(null), g = X(e, y => p(y)), m = ro.useRef(!1), h = f ? d || !!f.closest("form") : !0, [v, _] = He({
            prop: n,
            defaultProp: a ?? !1,
            onChange: l,
            caller: Ts
        });
        return (0, kr.jsxs)(JR, {
            scope: o,
            checked: v,
            disabled: i,
            children: [(0, kr.jsx)(z.button, {
                type: "button",
                role: "switch",
                "aria-checked": v,
                "aria-required": s,
                "data-state": Mh(v),
                "data-disabled": i ? "" : void 0,
                disabled: i,
                value: c,
                ...u,
                ref: g,
                onClick: A(t.onClick, y => {
                    _(x => !x), h && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation())
                })
            }), h && (0, kr.jsx)(Nh, {
                control: f,
                bubbles: !m.current,
                name: r,
                value: c,
                checked: v,
                required: s,
                disabled: i,
                form: d,
                style: {
                    transform: "translateX(-100%)"
                }
            })]
        })
    });
Th.displayName = Ts;
var Eh = "SwitchThumb",
    Dh = ro.forwardRef((t, e) => {
        let {
            __scopeSwitch: o,
            ...r
        } = t, n = eS(Eh, o);
        return (0, kr.jsx)(z.span, {
            "data-state": Mh(n.checked),
            "data-disabled": n.disabled ? "" : void 0,
            ...r,
            ref: e
        })
    });
Dh.displayName = Eh;
var tS = "SwitchBubbleInput",
    Nh = ro.forwardRef(({
        __scopeSwitch: t,
        control: e,
        checked: o,
        bubbles: r = !0,
        ...n
    }, a) => {
        let s = ro.useRef(null),
            i = X(s, a),
            c = or(o),
            l = Qo(e);
        return ro.useEffect(() => {
            let d = s.current;
            if (!d) return;
            let u = window.HTMLInputElement.prototype,
                p = Object.getOwnPropertyDescriptor(u, "checked").set;
            if (c !== o && p) {
                let g = new Event("click", {
                    bubbles: r
                });
                p.call(d, o), d.dispatchEvent(g)
            }
        }, [c, o, r]), (0, kr.jsx)("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: o,
            ...n,
            tabIndex: -1,
            ref: i,
            style: {
                ...n.style,
                ...l,
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: 0
            }
        })
    });
Nh.displayName = tS;

function Mh(t) {
    return t ? "checked" : "unchecked"
}
var Ph = Th,
    Oh = Dh;
var it = (t => (t.ARROW_DOWN = "ArrowDown", t.ARROW_LEFT = "ArrowLeft", t.ARROW_RIGHT = "ArrowRight", t.ARROW_UP = "ArrowUp", t.END = "End", t.ENTER = "Enter", t.ESCAPE = "Escape", t.HOME = "Home", t.SPACE = " ", t.SPACEBAR = "Spacebar", t.TAB = "Tab", t))(it || {});
var G3 = Symbol.for("constructDateFrom");

function Ih(t, e, o = "long") {
    return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        timeZone: t,
        timeZoneName: o
    }).format(e).split(/\s/g).slice(2).join(" ")
}
var rS = {},
    ua = {};

function Lo(t, e) {
    try {
        let r = (rS[t] || = new Intl.DateTimeFormat("en-US", {
            timeZone: t,
            timeZoneName: "longOffset"
        }).format)(e).split("GMT")[1];
        return r in ua ? ua[r] : kh(r, r.split(":"))
    } catch {
        if (t in ua) return ua[t];
        let o = t?.match(nS);
        return o ? kh(t, o.slice(1)) : NaN
    }
}
var nS = /([+-]\d\d):?(\d\d)?/;

function kh(t, e) {
    let o = +(e[0] || 0),
        r = +(e[1] || 0),
        n = +(e[2] || 0) / 60;
    return ua[t] = o * 60 + r > 0 ? o * 60 + r + n : o * 60 - r - n
}
var Ut = class extends Date {
        constructor(...e) {
            super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = new Date, isNaN(Lo(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), Lh(this, NaN), ll(this)) : this.setTime(Date.now())
        }
        static tz(e, ...o) {
            return o.length ? new Ut(...o, e) : new Ut(Date.now(), e)
        }
        withTimeZone(e) {
            return new Ut(+this, e)
        }
        getTimezoneOffset() {
            let e = -Lo(this.timeZone, this);
            return e > 0 ? Math.floor(e) : Math.ceil(e)
        }
        setTime(e) {
            return Date.prototype.setTime.apply(this, arguments), ll(this), +this
        } [Symbol.for("constructDateFrom")](e) {
            return new Ut(+new Date(e), this.timeZone)
        }
    },
    Ah = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach(t => {
    if (!Ah.test(t)) return;
    let e = t.replace(Ah, "$1UTC");
    Ut.prototype[e] && (t.startsWith("get") ? Ut.prototype[t] = function() {
        return this.internal[e]()
    } : (Ut.prototype[t] = function() {
        return Date.prototype[e].apply(this.internal, arguments), aS(this), +this
    }, Ut.prototype[e] = function() {
        return Date.prototype[e].apply(this, arguments), ll(this), +this
    }))
});

function ll(t) {
    t.internal.setTime(+t), t.internal.setUTCSeconds(t.internal.getUTCSeconds() - Math.round(-Lo(t.timeZone, t) * 60))
}

function aS(t) {
    Date.prototype.setFullYear.call(t, t.internal.getUTCFullYear(), t.internal.getUTCMonth(), t.internal.getUTCDate()), Date.prototype.setHours.call(t, t.internal.getUTCHours(), t.internal.getUTCMinutes(), t.internal.getUTCSeconds(), t.internal.getUTCMilliseconds()), Lh(t)
}

function Lh(t) {
    let e = Lo(t.timeZone, t),
        o = e > 0 ? Math.floor(e) : Math.ceil(e),
        r = new Date(+t);
    r.setUTCHours(r.getUTCHours() - 1);
    let n = -new Date(+t).getTimezoneOffset(),
        a = -new Date(+r).getTimezoneOffset(),
        s = n - a,
        i = Date.prototype.getHours.apply(t) !== t.internal.getUTCHours();
    s && i && t.internal.setUTCMinutes(t.internal.getUTCMinutes() + s);
    let c = n - o;
    c && Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + c);
    let l = new Date(+t);
    l.setUTCSeconds(0);
    let d = n > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60,
        u = Math.round(-(Lo(t.timeZone, t) * 60)) % 60;
    (u || d) && (t.internal.setUTCSeconds(t.internal.getUTCSeconds() + u), Date.prototype.setUTCSeconds.call(t, Date.prototype.getUTCSeconds.call(t) + u + d));
    let f = Lo(t.timeZone, t),
        p = f > 0 ? Math.floor(f) : Math.ceil(f),
        m = -new Date(+t).getTimezoneOffset() - p,
        h = p !== o,
        v = m - c;
    if (h && v) {
        Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + v);
        let _ = Lo(t.timeZone, t),
            y = _ > 0 ? Math.floor(_) : Math.ceil(_),
            x = p - y;
        x && (t.internal.setUTCMinutes(t.internal.getUTCMinutes() + x), Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + x))
    }
}
var Xe = class extends Ut {
    static tz(e, ...o) {
        return o.length ? new Xe(...o, e) : new Xe(Date.now(), e)
    }
    toISOString() {
        let [e, o, r] = this.tzComponents(), n = `${e}${o}:${r}`;
        return this.internal.toISOString().slice(0, -1) + n
    }
    toString() {
        return `${this.toDateString()} ${this.toTimeString()}`
    }
    toDateString() {
        let [e, o, r, n] = this.internal.toUTCString().split(" ");
        return `${e?.slice(0,-1)} ${r} ${o} ${n}`
    }
    toTimeString() {
        let e = this.internal.toUTCString().split(" ")[4],
            [o, r, n] = this.tzComponents();
        return `${e} GMT${o}${r}${n} (${Ih(this.timeZone,this)})`
    }
    toLocaleString(e, o) {
        return Date.prototype.toLocaleString.call(this, e, {
            ...o,
            timeZone: o?.timeZone || this.timeZone
        })
    }
    toLocaleDateString(e, o) {
        return Date.prototype.toLocaleDateString.call(this, e, {
            ...o,
            timeZone: o?.timeZone || this.timeZone
        })
    }
    toLocaleTimeString(e, o) {
        return Date.prototype.toLocaleTimeString.call(this, e, {
            ...o,
            timeZone: o?.timeZone || this.timeZone
        })
    }
    tzComponents() {
        let e = this.getTimezoneOffset(),
            o = e > 0 ? "-" : "+",
            r = String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"),
            n = String(Math.abs(e) % 60).padStart(2, "0");
        return [o, r, n]
    }
    withTimeZone(e) {
        return new Xe(+this, e)
    } [Symbol.for("constructDateFrom")](e) {
        return new Xe(+new Date(e), this.timeZone)
    }
};
var sS = Math.pow(10, 8) * 24 * 60 * 60 * 1e3,
    dF = -sS,
    Es = 6048e5,
    Fh = 864e5;
var iS = 3600;
var Bh = iS * 24,
    fF = Bh * 7,
    cS = Bh * 365.2425,
    lS = cS / 12,
    mF = lS * 3,
    ul = Symbol.for("constructDateFrom");

function ye(t, e) {
    return typeof t == "function" ? t(e) : t && typeof t == "object" && ul in t ? t[ul](e) : t instanceof Date ? new t.constructor(e) : new Date(e)
}

function Q(t, e) {
    return ye(e || t, t)
}

function Ds(t, e, o) {
    let r = Q(t, o?.in);
    return isNaN(e) ? ye(o?.in || t, NaN) : (e && r.setDate(r.getDate() + e), r)
}

function Ns(t, e, o) {
    let r = Q(t, o?.in);
    if (isNaN(e)) return ye(o?.in || t, NaN);
    if (!e) return r;
    let n = r.getDate(),
        a = ye(o?.in || t, r.getTime());
    a.setMonth(r.getMonth() + e + 1, 0);
    let s = a.getDate();
    return n >= s ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), n), r)
}
var uS = {};

function wo() {
    return uS
}

function no(t, e) {
    let o = wo(),
        r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0,
        n = Q(t, e?.in),
        a = n.getDay(),
        s = (a < r ? 7 : 0) + a - r;
    return n.setDate(n.getDate() - s), n.setHours(0, 0, 0, 0), n
}

function Fo(t, e) {
    return no(t, {
        ...e,
        weekStartsOn: 1
    })
}

function Ms(t, e) {
    let o = Q(t, e?.in),
        r = o.getFullYear(),
        n = ye(o, 0);
    n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
    let a = Fo(n),
        s = ye(o, 0);
    s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
    let i = Fo(s);
    return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= i.getTime() ? r : r - 1
}

function dl(t) {
    let e = Q(t),
        o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return o.setUTCFullYear(e.getFullYear()), +t - +o
}

function Zt(t, ...e) {
    let o = ye.bind(null, t || e.find(r => typeof r == "object"));
    return e.map(o)
}

function dr(t, e) {
    let o = Q(t, e?.in);
    return o.setHours(0, 0, 0, 0), o
}

function Ps(t, e, o) {
    let [r, n] = Zt(o?.in, t, e), a = dr(r), s = dr(n), i = +a - dl(a), c = +s - dl(s);
    return Math.round((i - c) / Fh)
}

function Wh(t, e) {
    let o = Ms(t, e),
        r = ye(e?.in || t, 0);
    return r.setFullYear(o, 0, 4), r.setHours(0, 0, 0, 0), Fo(r)
}

function Hh(t, e, o) {
    return Ds(t, e * 7, o)
}

function jh(t, e, o) {
    return Ns(t, e * 12, o)
}

function zh(t, e) {
    let o, r = e?.in;
    return t.forEach(n => {
        !r && typeof n == "object" && (r = ye.bind(null, n));
        let a = Q(n, r);
        (!o || o < a || isNaN(+a)) && (o = a)
    }), ye(r, o || NaN)
}

function Uh(t, e) {
    let o, r = e?.in;
    return t.forEach(n => {
        !r && typeof n == "object" && (r = ye.bind(null, n));
        let a = Q(n, r);
        (!o || o > a || isNaN(+a)) && (o = a)
    }), ye(r, o || NaN)
}

function Gh(t, e, o) {
    let [r, n] = Zt(o?.in, t, e);
    return +dr(r) == +dr(n)
}

function Os(t) {
    return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]"
}

function Yh(t) {
    return !(!Os(t) && typeof t != "number" || isNaN(+Q(t)))
}

function Vh(t, e, o) {
    let [r, n] = Zt(o?.in, t, e), a = r.getFullYear() - n.getFullYear(), s = r.getMonth() - n.getMonth();
    return a * 12 + s
}

function qh(t, e) {
    let o = Q(t, e?.in),
        r = o.getMonth();
    return o.setFullYear(o.getFullYear(), r + 1, 0), o.setHours(23, 59, 59, 999), o
}

function Is(t, e) {
    let [o, r] = Zt(t, e.start, e.end);
    return {
        start: o,
        end: r
    }
}

function $h(t, e) {
    let {
        start: o,
        end: r
    } = Is(e?.in, t), n = +o > +r, a = n ? +o : +r, s = n ? r : o;
    s.setHours(0, 0, 0, 0), s.setDate(1);
    let i = e?.step ?? 1;
    if (!i) return [];
    i < 0 && (i = -i, n = !n);
    let c = [];
    for (; + s <= a;) c.push(ye(o, s)), s.setMonth(s.getMonth() + i);
    return n ? c.reverse() : c
}

function Kh(t, e) {
    let o = Q(t, e?.in);
    return o.setDate(1), o.setHours(0, 0, 0, 0), o
}

function Xh(t, e) {
    let o = Q(t, e?.in),
        r = o.getFullYear();
    return o.setFullYear(r + 1, 0, 0), o.setHours(23, 59, 59, 999), o
}

function ks(t, e) {
    let o = Q(t, e?.in);
    return o.setFullYear(o.getFullYear(), 0, 1), o.setHours(0, 0, 0, 0), o
}

function Zh(t, e) {
    let {
        start: o,
        end: r
    } = Is(e?.in, t), n = +o > +r, a = n ? +o : +r, s = n ? r : o;
    s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
    let i = e?.step ?? 1;
    if (!i) return [];
    i < 0 && (i = -i, n = !n);
    let c = [];
    for (; + s <= a;) c.push(ye(o, s)), s.setFullYear(s.getFullYear() + i);
    return n ? c.reverse() : c
}

function As(t, e) {
    let o = wo(),
        r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0,
        n = Q(t, e?.in),
        a = n.getDay(),
        s = (a < r ? -7 : 0) + 6 - (a - r);
    return n.setDate(n.getDate() + s), n.setHours(23, 59, 59, 999), n
}

function Qh(t, e) {
    return As(t, {
        ...e,
        weekStartsOn: 1
    })
}
var dS = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks"
        },
        xWeeks: {
            one: "1 week",
            other: "{{count}} weeks"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    },
    Jh = (t, e, o) => {
        let r, n = dS[t];
        return typeof n == "string" ? r = n : e === 1 ? r = n.one : r = n.other.replace("{{count}}", e.toString()), o?.addSuffix ? o.comparison && o.comparison > 0 ? "in " + r : r + " ago" : r
    };

function Ls(t) {
    return (e = {}) => {
        let o = e.width ? String(e.width) : t.defaultWidth;
        return t.formats[o] || t.formats[t.defaultWidth]
    }
}
var fS = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    },
    mS = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    },
    pS = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    eg = {
        date: Ls({
            formats: fS,
            defaultWidth: "full"
        }),
        time: Ls({
            formats: mS,
            defaultWidth: "full"
        }),
        dateTime: Ls({
            formats: pS,
            defaultWidth: "full"
        })
    };
var hS = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    },
    tg = (t, e, o, r) => hS[t];

function _n(t) {
    return (e, o) => {
        let r = o?.context ? String(o.context) : "standalone",
            n;
        if (r === "formatting" && t.formattingValues) {
            let s = t.defaultFormattingWidth || t.defaultWidth,
                i = o?.width ? String(o.width) : s;
            n = t.formattingValues[i] || t.formattingValues[s]
        } else {
            let s = t.defaultWidth,
                i = o?.width ? String(o.width) : t.defaultWidth;
            n = t.values[i] || t.values[s]
        }
        let a = t.argumentCallback ? t.argumentCallback(e) : e;
        return n[a]
    }
}
var gS = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
    },
    vS = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    },
    yS = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    _S = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    wS = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        }
    },
    bS = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        }
    },
    xS = (t, e) => {
        let o = Number(t),
            r = o % 100;
        if (r > 20 || r < 10) switch (r % 10) {
            case 1:
                return o + "st";
            case 2:
                return o + "nd";
            case 3:
                return o + "rd"
        }
        return o + "th"
    },
    og = {
        ordinalNumber: xS,
        era: _n({
            values: gS,
            defaultWidth: "wide"
        }),
        quarter: _n({
            values: vS,
            defaultWidth: "wide",
            argumentCallback: t => t - 1
        }),
        month: _n({
            values: yS,
            defaultWidth: "wide"
        }),
        day: _n({
            values: _S,
            defaultWidth: "wide"
        }),
        dayPeriod: _n({
            values: wS,
            defaultWidth: "wide",
            formattingValues: bS,
            defaultFormattingWidth: "wide"
        })
    };

function wn(t) {
    return (e, o = {}) => {
        let r = o.width,
            n = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth],
            a = e.match(n);
        if (!a) return null;
        let s = a[0],
            i = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth],
            c = Array.isArray(i) ? RS(i, u => u.test(s)) : CS(i, u => u.test(s)),
            l;
        l = t.valueCallback ? t.valueCallback(c) : c, l = o.valueCallback ? o.valueCallback(l) : l;
        let d = e.slice(s.length);
        return {
            value: l,
            rest: d
        }
    }
}

function CS(t, e) {
    for (let o in t)
        if (Object.prototype.hasOwnProperty.call(t, o) && e(t[o])) return o
}

function RS(t, e) {
    for (let o = 0; o < t.length; o++)
        if (e(t[o])) return o
}

function rg(t) {
    return (e, o = {}) => {
        let r = e.match(t.matchPattern);
        if (!r) return null;
        let n = r[0],
            a = e.match(t.parsePattern);
        if (!a) return null;
        let s = t.valueCallback ? t.valueCallback(a[0]) : a[0];
        s = o.valueCallback ? o.valueCallback(s) : s;
        let i = e.slice(n.length);
        return {
            value: s,
            rest: i
        }
    }
}
var SS = /^(\d+)(th|st|nd|rd)?/i,
    TS = /\d+/i,
    ES = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
    },
    DS = {
        any: [/^b/i, /^(a|c)/i]
    },
    NS = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
    },
    MS = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    PS = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    },
    OS = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    },
    IS = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    },
    kS = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    },
    AS = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    LS = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
        }
    },
    ng = {
        ordinalNumber: rg({
            matchPattern: SS,
            parsePattern: TS,
            valueCallback: t => parseInt(t, 10)
        }),
        era: wn({
            matchPatterns: ES,
            defaultMatchWidth: "wide",
            parsePatterns: DS,
            defaultParseWidth: "any"
        }),
        quarter: wn({
            matchPatterns: NS,
            defaultMatchWidth: "wide",
            parsePatterns: MS,
            defaultParseWidth: "any",
            valueCallback: t => t + 1
        }),
        month: wn({
            matchPatterns: PS,
            defaultMatchWidth: "wide",
            parsePatterns: OS,
            defaultParseWidth: "any"
        }),
        day: wn({
            matchPatterns: IS,
            defaultMatchWidth: "wide",
            parsePatterns: kS,
            defaultParseWidth: "any"
        }),
        dayPeriod: wn({
            matchPatterns: AS,
            defaultMatchWidth: "any",
            parsePatterns: LS,
            defaultParseWidth: "any"
        })
    };
var fr = {
    code: "en-US",
    formatDistance: Jh,
    formatLong: eg,
    formatRelative: tg,
    localize: og,
    match: ng,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};

function ag(t, e) {
    let o = Q(t, e?.in);
    return Ps(o, ks(o)) + 1
}

function Fs(t, e) {
    let o = Q(t, e?.in),
        r = +Fo(o) - +Wh(o);
    return Math.round(r / Es) + 1
}

function Bs(t, e) {
    let o = Q(t, e?.in),
        r = o.getFullYear(),
        n = wo(),
        a = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1,
        s = ye(e?.in || t, 0);
    s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
    let i = no(s, e),
        c = ye(e?.in || t, 0);
    c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
    let l = no(c, e);
    return +o >= +i ? r + 1 : +o >= +l ? r : r - 1
}

function sg(t, e) {
    let o = wo(),
        r = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1,
        n = Bs(t, e),
        a = ye(e?.in || t, 0);
    return a.setFullYear(n, 0, r), a.setHours(0, 0, 0, 0), no(a, e)
}

function Ws(t, e) {
    let o = Q(t, e?.in),
        r = +no(o, e) - +sg(o, e);
    return Math.round(r / Es) + 1
}

function Ce(t, e) {
    let o = t < 0 ? "-" : "",
        r = Math.abs(t).toString().padStart(e, "0");
    return o + r
}
var Bo = {
    y(t, e) {
        let o = t.getFullYear(),
            r = o > 0 ? o : 1 - o;
        return Ce(e === "yy" ? r % 100 : r, e.length)
    },
    M(t, e) {
        let o = t.getMonth();
        return e === "M" ? String(o + 1) : Ce(o + 1, 2)
    },
    d(t, e) {
        return Ce(t.getDate(), e.length)
    },
    a(t, e) {
        let o = t.getHours() / 12 >= 1 ? "pm" : "am";
        switch (e) {
            case "a":
            case "aa":
                return o.toUpperCase();
            case "aaa":
                return o;
            case "aaaaa":
                return o[0];
            case "aaaa":
            default:
                return o === "am" ? "a.m." : "p.m."
        }
    },
    h(t, e) {
        return Ce(t.getHours() % 12 || 12, e.length)
    },
    H(t, e) {
        return Ce(t.getHours(), e.length)
    },
    m(t, e) {
        return Ce(t.getMinutes(), e.length)
    },
    s(t, e) {
        return Ce(t.getSeconds(), e.length)
    },
    S(t, e) {
        let o = e.length,
            r = t.getMilliseconds(),
            n = Math.trunc(r * Math.pow(10, o - 3));
        return Ce(n, e.length)
    }
};
var bn = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    fl = {
        G: function(t, e, o) {
            let r = t.getFullYear() > 0 ? 1 : 0;
            switch (e) {
                case "G":
                case "GG":
                case "GGG":
                    return o.era(r, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return o.era(r, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return o.era(r, {
                        width: "wide"
                    })
            }
        },
        y: function(t, e, o) {
            if (e === "yo") {
                let r = t.getFullYear(),
                    n = r > 0 ? r : 1 - r;
                return o.ordinalNumber(n, {
                    unit: "year"
                })
            }
            return Bo.y(t, e)
        },
        Y: function(t, e, o, r) {
            let n = Bs(t, r),
                a = n > 0 ? n : 1 - n;
            if (e === "YY") {
                let s = a % 100;
                return Ce(s, 2)
            }
            return e === "Yo" ? o.ordinalNumber(a, {
                unit: "year"
            }) : Ce(a, e.length)
        },
        R: function(t, e) {
            let o = Ms(t);
            return Ce(o, e.length)
        },
        u: function(t, e) {
            let o = t.getFullYear();
            return Ce(o, e.length)
        },
        Q: function(t, e, o) {
            let r = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
                case "Q":
                    return String(r);
                case "QQ":
                    return Ce(r, 2);
                case "Qo":
                    return o.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return o.quarter(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return o.quarter(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return o.quarter(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function(t, e, o) {
            let r = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
                case "q":
                    return String(r);
                case "qq":
                    return Ce(r, 2);
                case "qo":
                    return o.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "qqq":
                    return o.quarter(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return o.quarter(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return o.quarter(r, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function(t, e, o) {
            let r = t.getMonth();
            switch (e) {
                case "M":
                case "MM":
                    return Bo.M(t, e);
                case "Mo":
                    return o.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return o.month(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return o.month(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return o.month(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function(t, e, o) {
            let r = t.getMonth();
            switch (e) {
                case "L":
                    return String(r + 1);
                case "LL":
                    return Ce(r + 1, 2);
                case "Lo":
                    return o.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return o.month(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return o.month(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return o.month(r, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function(t, e, o, r) {
            let n = Ws(t, r);
            return e === "wo" ? o.ordinalNumber(n, {
                unit: "week"
            }) : Ce(n, e.length)
        },
        I: function(t, e, o) {
            let r = Fs(t);
            return e === "Io" ? o.ordinalNumber(r, {
                unit: "week"
            }) : Ce(r, e.length)
        },
        d: function(t, e, o) {
            return e === "do" ? o.ordinalNumber(t.getDate(), {
                unit: "date"
            }) : Bo.d(t, e)
        },
        D: function(t, e, o) {
            let r = ag(t);
            return e === "Do" ? o.ordinalNumber(r, {
                unit: "dayOfYear"
            }) : Ce(r, e.length)
        },
        E: function(t, e, o) {
            let r = t.getDay();
            switch (e) {
                case "E":
                case "EE":
                case "EEE":
                    return o.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return o.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return o.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return o.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function(t, e, o, r) {
            let n = t.getDay(),
                a = (n - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case "e":
                    return String(a);
                case "ee":
                    return Ce(a, 2);
                case "eo":
                    return o.ordinalNumber(a, {
                        unit: "day"
                    });
                case "eee":
                    return o.day(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return o.day(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return o.day(n, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return o.day(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function(t, e, o, r) {
            let n = t.getDay(),
                a = (n - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case "c":
                    return String(a);
                case "cc":
                    return Ce(a, e.length);
                case "co":
                    return o.ordinalNumber(a, {
                        unit: "day"
                    });
                case "ccc":
                    return o.day(n, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return o.day(n, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return o.day(n, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return o.day(n, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function(t, e, o) {
            let r = t.getDay(),
                n = r === 0 ? 7 : r;
            switch (e) {
                case "i":
                    return String(n);
                case "ii":
                    return Ce(n, e.length);
                case "io":
                    return o.ordinalNumber(n, {
                        unit: "day"
                    });
                case "iii":
                    return o.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return o.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return o.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return o.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function(t, e, o) {
            let n = t.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
                case "a":
                case "aa":
                    return o.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return o.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return o.dayPeriod(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return o.dayPeriod(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function(t, e, o) {
            let r = t.getHours(),
                n;
            switch (r === 12 ? n = bn.noon : r === 0 ? n = bn.midnight : n = r / 12 >= 1 ? "pm" : "am", e) {
                case "b":
                case "bb":
                    return o.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return o.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return o.dayPeriod(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return o.dayPeriod(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function(t, e, o) {
            let r = t.getHours(),
                n;
            switch (r >= 17 ? n = bn.evening : r >= 12 ? n = bn.afternoon : r >= 4 ? n = bn.morning : n = bn.night, e) {
                case "B":
                case "BB":
                case "BBB":
                    return o.dayPeriod(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return o.dayPeriod(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return o.dayPeriod(n, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function(t, e, o) {
            if (e === "ho") {
                let r = t.getHours() % 12;
                return r === 0 && (r = 12), o.ordinalNumber(r, {
                    unit: "hour"
                })
            }
            return Bo.h(t, e)
        },
        H: function(t, e, o) {
            return e === "Ho" ? o.ordinalNumber(t.getHours(), {
                unit: "hour"
            }) : Bo.H(t, e)
        },
        K: function(t, e, o) {
            let r = t.getHours() % 12;
            return e === "Ko" ? o.ordinalNumber(r, {
                unit: "hour"
            }) : Ce(r, e.length)
        },
        k: function(t, e, o) {
            let r = t.getHours();
            return r === 0 && (r = 24), e === "ko" ? o.ordinalNumber(r, {
                unit: "hour"
            }) : Ce(r, e.length)
        },
        m: function(t, e, o) {
            return e === "mo" ? o.ordinalNumber(t.getMinutes(), {
                unit: "minute"
            }) : Bo.m(t, e)
        },
        s: function(t, e, o) {
            return e === "so" ? o.ordinalNumber(t.getSeconds(), {
                unit: "second"
            }) : Bo.s(t, e)
        },
        S: function(t, e) {
            return Bo.S(t, e)
        },
        X: function(t, e, o) {
            let r = t.getTimezoneOffset();
            if (r === 0) return "Z";
            switch (e) {
                case "X":
                    return cg(r);
                case "XXXX":
                case "XX":
                    return Ar(r);
                case "XXXXX":
                case "XXX":
                default:
                    return Ar(r, ":")
            }
        },
        x: function(t, e, o) {
            let r = t.getTimezoneOffset();
            switch (e) {
                case "x":
                    return cg(r);
                case "xxxx":
                case "xx":
                    return Ar(r);
                case "xxxxx":
                case "xxx":
                default:
                    return Ar(r, ":")
            }
        },
        O: function(t, e, o) {
            let r = t.getTimezoneOffset();
            switch (e) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + ig(r, ":");
                case "OOOO":
                default:
                    return "GMT" + Ar(r, ":")
            }
        },
        z: function(t, e, o) {
            let r = t.getTimezoneOffset();
            switch (e) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + ig(r, ":");
                case "zzzz":
                default:
                    return "GMT" + Ar(r, ":")
            }
        },
        t: function(t, e, o) {
            let r = Math.trunc(+t / 1e3);
            return Ce(r, e.length)
        },
        T: function(t, e, o) {
            return Ce(+t, e.length)
        }
    };

function ig(t, e = "") {
    let o = t > 0 ? "-" : "+",
        r = Math.abs(t),
        n = Math.trunc(r / 60),
        a = r % 60;
    return a === 0 ? o + String(n) : o + String(n) + e + Ce(a, 2)
}

function cg(t, e) {
    return t % 60 === 0 ? (t > 0 ? "-" : "+") + Ce(Math.abs(t) / 60, 2) : Ar(t, e)
}

function Ar(t, e = "") {
    let o = t > 0 ? "-" : "+",
        r = Math.abs(t),
        n = Ce(Math.trunc(r / 60), 2),
        a = Ce(r % 60, 2);
    return o + n + e + a
}
var lg = (t, e) => {
        switch (t) {
            case "P":
                return e.date({
                    width: "short"
                });
            case "PP":
                return e.date({
                    width: "medium"
                });
            case "PPP":
                return e.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return e.date({
                    width: "full"
                })
        }
    },
    ug = (t, e) => {
        switch (t) {
            case "p":
                return e.time({
                    width: "short"
                });
            case "pp":
                return e.time({
                    width: "medium"
                });
            case "ppp":
                return e.time({
                    width: "long"
                });
            case "pppp":
            default:
                return e.time({
                    width: "full"
                })
        }
    },
    FS = (t, e) => {
        let o = t.match(/(P+)(p+)?/) || [],
            r = o[1],
            n = o[2];
        if (!n) return lg(t, e);
        let a;
        switch (r) {
            case "P":
                a = e.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                a = e.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                a = e.dateTime({
                    width: "long"
                });
                break;
            case "PPPP":
            default:
                a = e.dateTime({
                    width: "full"
                });
                break
        }
        return a.replace("{{date}}", lg(r, e)).replace("{{time}}", ug(n, e))
    },
    dg = {
        p: ug,
        P: FS
    };
var BS = /^D+$/,
    WS = /^Y+$/,
    HS = ["D", "DD", "YY", "YYYY"];

function fg(t) {
    return BS.test(t)
}

function mg(t) {
    return WS.test(t)
}

function pg(t, e, o) {
    let r = jS(t, e, o);
    if (console.warn(r), HS.includes(t)) throw new RangeError(r)
}

function jS(t, e, o) {
    let r = t[0] === "Y" ? "years" : "days of the month";
    return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${o}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
var zS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    US = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    GS = /^'([^]*?)'?$/,
    YS = /''/g,
    VS = /[a-zA-Z]/;

function hg(t, e, o) {
    let r = wo(),
        n = o?.locale ?? r.locale ?? fr,
        a = o?.firstWeekContainsDate ?? o?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1,
        s = o?.weekStartsOn ?? o?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
        i = Q(t, o?.in);
    if (!Yh(i)) throw new RangeError("Invalid time value");
    let c = e.match(US).map(d => {
        let u = d[0];
        if (u === "p" || u === "P") {
            let f = dg[u];
            return f(d, n.formatLong)
        }
        return d
    }).join("").match(zS).map(d => {
        if (d === "''") return {
            isToken: !1,
            value: "'"
        };
        let u = d[0];
        if (u === "'") return {
            isToken: !1,
            value: qS(d)
        };
        if (fl[u]) return {
            isToken: !0,
            value: d
        };
        if (u.match(VS)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + u + "`");
        return {
            isToken: !1,
            value: d
        }
    });
    n.localize.preprocessor && (c = n.localize.preprocessor(i, c));
    let l = {
        firstWeekContainsDate: a,
        weekStartsOn: s,
        locale: n
    };
    return c.map(d => {
        if (!d.isToken) return d.value;
        let u = d.value;
        (!o?.useAdditionalWeekYearTokens && mg(u) || !o?.useAdditionalDayOfYearTokens && fg(u)) && pg(u, e, String(t));
        let f = fl[u[0]];
        return f(i, u, n.localize, l)
    }).join("")
}

function qS(t) {
    let e = t.match(GS);
    return e ? e[1].replace(YS, "'") : t
}

function gg(t, e) {
    let o = Q(t, e?.in),
        r = o.getFullYear(),
        n = o.getMonth(),
        a = ye(o, 0);
    return a.setFullYear(r, n + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
}

function vg(t, e) {
    return Q(t, e?.in).getMonth()
}

function yg(t, e) {
    return Q(t, e?.in).getFullYear()
}

function _g(t, e) {
    return +Q(t) > +Q(e)
}

function wg(t, e) {
    return +Q(t) < +Q(e)
}

function bg(t, e, o) {
    let [r, n] = Zt(o?.in, t, e);
    return r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth()
}

function xg(t, e, o) {
    let [r, n] = Zt(o?.in, t, e);
    return r.getFullYear() === n.getFullYear()
}

function Cg(t, e, o) {
    let r = Q(t, o?.in),
        n = r.getFullYear(),
        a = r.getDate(),
        s = ye(o?.in || t, 0);
    s.setFullYear(n, e, 15), s.setHours(0, 0, 0, 0);
    let i = gg(s);
    return r.setMonth(e, Math.min(a, i)), r
}

function Rg(t, e, o) {
    let r = Q(t, o?.in);
    return isNaN(+r) ? ye(o?.in || t, NaN) : (r.setFullYear(e), r)
}

function Sg(t, e) {
    let o = e.startOfMonth(t),
        r = o.getDay() > 0 ? o.getDay() : 7,
        n = e.addDays(t, -r + 1),
        a = e.addDays(n, 5 * 7 - 1);
    return e.getMonth(t) === e.getMonth(a) ? 5 : 4
}

function Hs(t, e) {
    let o = e.startOfMonth(t),
        r = o.getDay();
    return r === 1 ? o : r === 0 ? e.addDays(o, -1 * 6) : e.addDays(o, -1 * (r - 1))
}

function Tg(t, e) {
    let o = Hs(t, e),
        r = Sg(t, e);
    return e.addDays(o, r * 7 - 1)
}
var qe = class {
    constructor(e, o) {
        this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Xe.tz(this.options.timeZone) : new this.Date, this.newDate = (r, n, a) => this.overrides?.newDate ? this.overrides.newDate(r, n, a) : this.options.timeZone ? new Xe(r, n, a, this.options.timeZone) : new Date(r, n, a), this.addDays = (r, n) => this.overrides?.addDays ? this.overrides.addDays(r, n) : Ds(r, n), this.addMonths = (r, n) => this.overrides?.addMonths ? this.overrides.addMonths(r, n) : Ns(r, n), this.addWeeks = (r, n) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, n) : Hh(r, n), this.addYears = (r, n) => this.overrides?.addYears ? this.overrides.addYears(r, n) : jh(r, n), this.differenceInCalendarDays = (r, n) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, n) : Ps(r, n), this.differenceInCalendarMonths = (r, n) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, n) : Vh(r, n), this.eachMonthOfInterval = r => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : $h(r), this.eachYearOfInterval = r => {
            let n = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Zh(r),
                a = new Set(n.map(i => this.getYear(i)));
            if (a.size === n.length) return n;
            let s = [];
            return a.forEach(i => {
                s.push(new Date(i, 0, 1))
            }), s
        }, this.endOfBroadcastWeek = r => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Tg(r, this), this.endOfISOWeek = r => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Qh(r), this.endOfMonth = r => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : qh(r), this.endOfWeek = (r, n) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, n) : As(r, this.options), this.endOfYear = r => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Xh(r), this.format = (r, n, a) => {
            let s = this.overrides?.format ? this.overrides.format(r, n, this.options) : hg(r, n, this.options);
            return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s
        }, this.getISOWeek = r => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : Fs(r), this.getMonth = (r, n) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : vg(r, this.options), this.getYear = (r, n) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : yg(r, this.options), this.getWeek = (r, n) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : Ws(r, this.options), this.isAfter = (r, n) => this.overrides?.isAfter ? this.overrides.isAfter(r, n) : _g(r, n), this.isBefore = (r, n) => this.overrides?.isBefore ? this.overrides.isBefore(r, n) : wg(r, n), this.isDate = r => this.overrides?.isDate ? this.overrides.isDate(r) : Os(r), this.isSameDay = (r, n) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, n) : Gh(r, n), this.isSameMonth = (r, n) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, n) : bg(r, n), this.isSameYear = (r, n) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, n) : xg(r, n), this.max = r => this.overrides?.max ? this.overrides.max(r) : zh(r), this.min = r => this.overrides?.min ? this.overrides.min(r) : Uh(r), this.setMonth = (r, n) => this.overrides?.setMonth ? this.overrides.setMonth(r, n) : Cg(r, n), this.setYear = (r, n) => this.overrides?.setYear ? this.overrides.setYear(r, n) : Rg(r, n), this.startOfBroadcastWeek = (r, n) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Hs(r, this), this.startOfDay = r => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : dr(r), this.startOfISOWeek = r => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Fo(r), this.startOfMonth = r => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Kh(r), this.startOfWeek = (r, n) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : no(r, this.options), this.startOfYear = r => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : ks(r), this.options = {
            locale: fr,
            ...e
        }, this.overrides = o
    }
    getDigitMap() {
        let {
            numerals: e = "latn"
        } = this.options, o = new Intl.NumberFormat("en-US", {
            numberingSystem: e
        }), r = {};
        for (let n = 0; n < 10; n++) r[n.toString()] = o.format(n);
        return r
    }
    replaceDigits(e) {
        let o = this.getDigitMap();
        return e.replace(/\d/g, r => o[r] || r)
    }
    formatNumber(e) {
        return this.replaceDigits(e.toString())
    }
    getMonthYearOrder() {
        let e = this.options.locale?.code;
        return e && qe.yearFirstLocales.has(e) ? "year-first" : "month-first"
    }
    formatMonthYear(e) {
        let {
            locale: o,
            timeZone: r,
            numerals: n
        } = this.options, a = o?.code;
        if (a && qe.yearFirstLocales.has(a)) try {
            return new Intl.DateTimeFormat(a, {
                month: "long",
                year: "numeric",
                timeZone: r,
                numberingSystem: n
            }).format(e)
        } catch {}
        let s = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
        return this.format(e, s)
    }
};
qe.yearFirstLocales = new Set(["eu", "hu", "ja", "ja-Hira", "ja-JP", "ko", "ko-KR", "lt", "lt-LT", "lv", "lv-LV", "mn", "mn-MN", "zh", "zh-CN", "zh-HK", "zh-TW"]);
var Je = new qe;
var xn = class {
    constructor(e, o, r = Je) {
        this.date = e, this.displayMonth = o, this.outside = Boolean(o && !r.isSameMonth(e, o)), this.dateLib = r
    }
    isEqualTo(e) {
        return this.dateLib.isSameDay(e.date, this.date) && this.dateLib.isSameMonth(e.displayMonth, this.displayMonth)
    }
};
var js = class {
    constructor(e, o) {
        this.date = e, this.weeks = o
    }
};
var zs = class {
    constructor(e, o) {
        this.days = o, this.weekNumber = e
    }
};
var hl = {};
ji(hl, {
    Button: () => $S,
    CaptionLabel: () => KS,
    Chevron: () => XS,
    Day: () => ZS,
    DayButton: () => QS,
    Dropdown: () => JS,
    DropdownNav: () => e0,
    Footer: () => t0,
    Month: () => o0,
    MonthCaption: () => r0,
    MonthGrid: () => n0,
    Months: () => a0,
    MonthsDropdown: () => s0,
    Nav: () => i0,
    NextMonthButton: () => c0,
    Option: () => l0,
    PreviousMonthButton: () => u0,
    Root: () => d0,
    Select: () => f0,
    Week: () => m0,
    WeekNumber: () => g0,
    WeekNumberHeader: () => v0,
    Weekday: () => p0,
    Weekdays: () => h0,
    Weeks: () => y0,
    YearsDropdown: () => _0
});
var Eg = w(M(), 1);

function $S(t) {
    return Eg.default.createElement("button", {
        ...t
    })
}
var Dg = w(M(), 1);

function KS(t) {
    return Dg.default.createElement("span", {
        ...t
    })
}
var Cn = w(M(), 1);

function XS(t) {
    let {
        size: e = 24,
        orientation: o = "left",
        className: r
    } = t;
    return Cn.default.createElement("svg", {
        className: r,
        width: e,
        height: e,
        viewBox: "0 0 24 24"
    }, o === "up" && Cn.default.createElement("polygon", {
        points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"
    }), o === "down" && Cn.default.createElement("polygon", {
        points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"
    }), o === "left" && Cn.default.createElement("polygon", {
        points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"
    }), o === "right" && Cn.default.createElement("polygon", {
        points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"
    }))
}
var Ng = w(M(), 1);

function ZS(t) {
    let {
        day: e,
        modifiers: o,
        ...r
    } = t;
    return Ng.default.createElement("td", {
        ...r
    })
}
var Us = w(M(), 1);

function QS(t) {
    let {
        day: e,
        modifiers: o,
        ...r
    } = t, n = Us.default.useRef(null);
    return Us.default.useEffect(() => {
        o.focused && n.current?.focus()
    }, [o.focused]), Us.default.createElement("button", {
        ref: n,
        ...r
    })
}
var Rn = w(M(), 1);
var q;
(function(t) {
    t.Root = "root", t.Chevron = "chevron", t.Day = "day", t.DayButton = "day_button", t.CaptionLabel = "caption_label", t.Dropdowns = "dropdowns", t.Dropdown = "dropdown", t.DropdownRoot = "dropdown_root", t.Footer = "footer", t.MonthGrid = "month_grid", t.MonthCaption = "month_caption", t.MonthsDropdown = "months_dropdown", t.Month = "month", t.Months = "months", t.Nav = "nav", t.NextMonthButton = "button_next", t.PreviousMonthButton = "button_previous", t.Week = "week", t.Weeks = "weeks", t.Weekday = "weekday", t.Weekdays = "weekdays", t.WeekNumber = "week_number", t.WeekNumberHeader = "week_number_header", t.YearsDropdown = "years_dropdown"
})(q || (q = {}));
var De;
(function(t) {
    t.disabled = "disabled", t.hidden = "hidden", t.outside = "outside", t.focused = "focused", t.today = "today"
})(De || (De = {}));
var Pt;
(function(t) {
    t.range_end = "range_end", t.range_middle = "range_middle", t.range_start = "range_start", t.selected = "selected"
})(Pt || (Pt = {}));
var Tt;
(function(t) {
    t.weeks_before_enter = "weeks_before_enter", t.weeks_before_exit = "weeks_before_exit", t.weeks_after_enter = "weeks_after_enter", t.weeks_after_exit = "weeks_after_exit", t.caption_after_enter = "caption_after_enter", t.caption_after_exit = "caption_after_exit", t.caption_before_enter = "caption_before_enter", t.caption_before_exit = "caption_before_exit"
})(Tt || (Tt = {}));

function JS(t) {
    let {
        options: e,
        className: o,
        components: r,
        classNames: n,
        ...a
    } = t, s = [n[q.Dropdown], o].join(" "), i = e?.find(({
        value: c
    }) => c === a.value);
    return Rn.default.createElement("span", {
        "data-disabled": a.disabled,
        className: n[q.DropdownRoot]
    }, Rn.default.createElement(r.Select, {
        className: s,
        ...a
    }, e?.map(({
        value: c,
        label: l,
        disabled: d
    }) => Rn.default.createElement(r.Option, {
        key: c,
        value: c,
        disabled: d
    }, l))), Rn.default.createElement("span", {
        className: n[q.CaptionLabel],
        "aria-hidden": !0
    }, i?.label, Rn.default.createElement(r.Chevron, {
        orientation: "down",
        size: 18,
        className: n[q.Chevron]
    })))
}
var Mg = w(M(), 1);

function e0(t) {
    return Mg.default.createElement("div", {
        ...t
    })
}
var Pg = w(M(), 1);

function t0(t) {
    return Pg.default.createElement("div", {
        ...t
    })
}
var Og = w(M(), 1);

function o0(t) {
    let {
        calendarMonth: e,
        displayIndex: o,
        ...r
    } = t;
    return Og.default.createElement("div", {
        ...r
    }, t.children)
}
var Ig = w(M(), 1);

function r0(t) {
    let {
        calendarMonth: e,
        displayIndex: o,
        ...r
    } = t;
    return Ig.default.createElement("div", {
        ...r
    })
}
var kg = w(M(), 1);

function n0(t) {
    return kg.default.createElement("table", {
        ...t
    })
}
var Ag = w(M(), 1);

function a0(t) {
    return Ag.default.createElement("div", {
        ...t
    })
}
var Lg = w(M(), 1);
var Gs = w(M(), 1),
    ml = (0, Gs.createContext)(void 0);

function bo() {
    let t = (0, Gs.useContext)(ml);
    if (t === void 0) throw new Error("useDayPicker() must be used within a custom component.");
    return t
}

function s0(t) {
    let {
        components: e
    } = bo();
    return Lg.default.createElement(e.Dropdown, {
        ...t
    })
}
var Wo = w(M(), 1);

function i0(t) {
    let {
        onPreviousClick: e,
        onNextClick: o,
        previousMonth: r,
        nextMonth: n,
        ...a
    } = t, {
        components: s,
        classNames: i,
        labels: {
            labelPrevious: c,
            labelNext: l
        }
    } = bo(), d = (0, Wo.useCallback)(f => {
        n && o?.(f)
    }, [n, o]), u = (0, Wo.useCallback)(f => {
        r && e?.(f)
    }, [r, e]);
    return Wo.default.createElement("nav", {
        ...a
    }, Wo.default.createElement(s.PreviousMonthButton, {
        type: "button",
        className: i[q.PreviousMonthButton],
        tabIndex: r ? void 0 : -1,
        "aria-disabled": r ? void 0 : !0,
        "aria-label": c(r),
        onClick: u
    }, Wo.default.createElement(s.Chevron, {
        disabled: r ? void 0 : !0,
        className: i[q.Chevron],
        orientation: "left"
    })), Wo.default.createElement(s.NextMonthButton, {
        type: "button",
        className: i[q.NextMonthButton],
        tabIndex: n ? void 0 : -1,
        "aria-disabled": n ? void 0 : !0,
        "aria-label": l(n),
        onClick: d
    }, Wo.default.createElement(s.Chevron, {
        disabled: n ? void 0 : !0,
        orientation: "right",
        className: i[q.Chevron]
    })))
}
var Fg = w(M(), 1);

function c0(t) {
    let {
        components: e
    } = bo();
    return Fg.default.createElement(e.Button, {
        ...t
    })
}
var Bg = w(M(), 1);

function l0(t) {
    return Bg.default.createElement("option", {
        ...t
    })
}
var Wg = w(M(), 1);

function u0(t) {
    let {
        components: e
    } = bo();
    return Wg.default.createElement(e.Button, {
        ...t
    })
}
var Hg = w(M(), 1);

function d0(t) {
    let {
        rootRef: e,
        ...o
    } = t;
    return Hg.default.createElement("div", {
        ...o,
        ref: e
    })
}
var jg = w(M(), 1);

function f0(t) {
    return jg.default.createElement("select", {
        ...t
    })
}
var zg = w(M(), 1);

function m0(t) {
    let {
        week: e,
        ...o
    } = t;
    return zg.default.createElement("tr", {
        ...o
    })
}
var Ug = w(M(), 1);

function p0(t) {
    return Ug.default.createElement("th", {
        ...t
    })
}
var pl = w(M(), 1);

function h0(t) {
    return pl.default.createElement("thead", {
        "aria-hidden": !0
    }, pl.default.createElement("tr", {
        ...t
    }))
}
var Gg = w(M(), 1);

function g0(t) {
    let {
        week: e,
        ...o
    } = t;
    return Gg.default.createElement("th", {
        ...o
    })
}
var Yg = w(M(), 1);

function v0(t) {
    return Yg.default.createElement("th", {
        ...t
    })
}
var Vg = w(M(), 1);

function y0(t) {
    return Vg.default.createElement("tbody", {
        ...t
    })
}
var qg = w(M(), 1);

function _0(t) {
    let {
        components: e
    } = bo();
    return qg.default.createElement(e.Dropdown, {
        ...t
    })
}
var ie = w(M(), 1);

function Ot(t, e, o = !1, r = Je) {
    let {
        from: n,
        to: a
    } = t, {
        differenceInCalendarDays: s,
        isSameDay: i
    } = r;
    return n && a ? (s(a, n) < 0 && ([n, a] = [a, n]), s(e, n) >= (o ? 1 : 0) && s(a, e) >= (o ? 1 : 0)) : !o && a ? i(a, e) : !o && n ? i(n, e) : !1
}

function Ys(t) {
    return Boolean(t && typeof t == "object" && "before" in t && "after" in t)
}

function Sn(t) {
    return Boolean(t && typeof t == "object" && "from" in t)
}

function Vs(t) {
    return Boolean(t && typeof t == "object" && "after" in t)
}

function qs(t) {
    return Boolean(t && typeof t == "object" && "before" in t)
}

function $s(t) {
    return Boolean(t && typeof t == "object" && "dayOfWeek" in t)
}

function Ks(t, e) {
    return Array.isArray(t) && t.every(e.isDate)
}

function Qt(t, e, o = Je) {
    let r = Array.isArray(e) ? e : [e],
        {
            isSameDay: n,
            differenceInCalendarDays: a,
            isAfter: s
        } = o;
    return r.some(i => {
        if (typeof i == "boolean") return i;
        if (o.isDate(i)) return n(t, i);
        if (Ks(i, o)) return i.includes(t);
        if (Sn(i)) return Ot(i, t, !1, o);
        if ($s(i)) return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(t.getDay()) : i.dayOfWeek === t.getDay();
        if (Ys(i)) {
            let c = a(i.before, t),
                l = a(i.after, t),
                d = c > 0,
                u = l < 0;
            return s(i.before, i.after) ? u && d : d || u
        }
        return Vs(i) ? a(t, i.after) > 0 : qs(i) ? a(i.before, t) > 0 : typeof i == "function" ? i(t) : !1
    })
}

function $g(t, e, o, r, n) {
    let {
        disabled: a,
        hidden: s,
        modifiers: i,
        showOutsideDays: c,
        broadcastCalendar: l,
        today: d
    } = e, {
        isSameDay: u,
        isSameMonth: f,
        startOfMonth: p,
        isBefore: g,
        endOfMonth: m,
        isAfter: h
    } = n, v = o && p(o), _ = r && m(r), y = {
        [De.focused]: [],
        [De.outside]: [],
        [De.disabled]: [],
        [De.hidden]: [],
        [De.today]: []
    }, x = {};
    for (let b of t) {
        let {
            date: C,
            displayMonth: R
        } = b, S = Boolean(R && !f(C, R)), E = Boolean(v && g(C, v)), D = Boolean(_ && h(C, _)), N = Boolean(a && Qt(C, a, n)), O = Boolean(s && Qt(C, s, n)) || E || D || !l && !c && S || l && c === !1 && S, F = u(C, d ?? n.today());
        S && y.outside.push(b), N && y.disabled.push(b), O && y.hidden.push(b), F && y.today.push(b), i && Object.keys(i).forEach(P => {
            let B = i?.[P];
            B && Qt(C, B, n) && (x[P] ? x[P].push(b) : x[P] = [b])
        })
    }
    return b => {
        let C = {
                [De.focused]: !1,
                [De.disabled]: !1,
                [De.hidden]: !1,
                [De.outside]: !1,
                [De.today]: !1
            },
            R = {};
        for (let S in y) {
            let E = y[S];
            C[S] = E.some(D => D === b)
        }
        for (let S in x) R[S] = x[S].some(E => E === b);
        return {
            ...C,
            ...R
        }
    }
}

function Kg(t, e, o = {}) {
    return Object.entries(t).filter(([, n]) => n === !0).reduce((n, [a]) => (o[a] ? n.push(o[a]) : e[De[a]] ? n.push(e[De[a]]) : e[Pt[a]] && n.push(e[Pt[a]]), n), [e[q.Day]])
}

function Xg(t) {
    return {
        ...hl,
        ...t
    }
}

function Zg(t) {
    let e = {
        "data-mode": t.mode ?? void 0,
        "data-required": "required" in t ? t.required : void 0,
        "data-multiple-months": t.numberOfMonths && t.numberOfMonths > 1 || void 0,
        "data-week-numbers": t.showWeekNumber || void 0,
        "data-broadcast-calendar": t.broadcastCalendar || void 0,
        "data-nav-layout": t.navLayout || void 0
    };
    return Object.entries(t).forEach(([o, r]) => {
        o.startsWith("data-") && (e[o] = r)
    }), e
}

function Xs() {
    let t = {};
    for (let e in q) t[q[e]] = `rdp-${q[e]}`;
    for (let e in De) t[De[e]] = `rdp-${De[e]}`;
    for (let e in Pt) t[Pt[e]] = `rdp-${Pt[e]}`;
    for (let e in Tt) t[Tt[e]] = `rdp-${Tt[e]}`;
    return t
}
var gl = {};
ji(gl, {
    formatCaption: () => Qg,
    formatDay: () => b0,
    formatMonthCaption: () => w0,
    formatMonthDropdown: () => x0,
    formatWeekNumber: () => R0,
    formatWeekNumberHeader: () => S0,
    formatWeekdayName: () => C0,
    formatYearCaption: () => T0,
    formatYearDropdown: () => Jg
});

function Qg(t, e, o) {
    return (o ?? new qe(e)).formatMonthYear(t)
}
var w0 = Qg;

function b0(t, e, o) {
    return (o ?? new qe(e)).format(t, "d")
}

function x0(t, e = Je) {
    return e.format(t, "LLLL")
}

function C0(t, e, o) {
    return (o ?? new qe(e)).format(t, "cccccc")
}

function R0(t, e = Je) {
    return t < 10 ? e.formatNumber(`0${t.toLocaleString()}`) : e.formatNumber(`${t.toLocaleString()}`)
}

function S0() {
    return ""
}

function Jg(t, e = Je) {
    return e.format(t, "yyyy")
}
var T0 = Jg;

function ev(t) {
    return t?.formatMonthCaption && !t.formatCaption && (t.formatCaption = t.formatMonthCaption), t?.formatYearCaption && !t.formatYearDropdown && (t.formatYearDropdown = t.formatYearCaption), {
        ...gl,
        ...t
    }
}

function tv(t, e, o, r, n) {
    let {
        startOfMonth: a,
        startOfYear: s,
        endOfYear: i,
        eachMonthOfInterval: c,
        getMonth: l
    } = n;
    return c({
        start: s(t),
        end: i(t)
    }).map(f => {
        let p = r.formatMonthDropdown(f, n),
            g = l(f),
            m = e && f < a(e) || o && f > a(o) || !1;
        return {
            value: g,
            label: p,
            disabled: m
        }
    })
}

function ov(t, e = {}, o = {}) {
    let r = {
        ...e?.[q.Day]
    };
    return Object.entries(t).filter(([, n]) => n === !0).forEach(([n]) => {
        r = {
            ...r,
            ...o?.[n]
        }
    }), r
}

function rv(t, e, o) {
    let r = t.today(),
        n = o ? t.startOfBroadcastWeek(r, t) : e ? t.startOfISOWeek(r) : t.startOfWeek(r),
        a = [];
    for (let s = 0; s < 7; s++) {
        let i = t.addDays(n, s);
        a.push(i)
    }
    return a
}

function nv(t, e, o, r, n = !1) {
    if (!t || !e) return;
    let {
        startOfYear: a,
        endOfYear: s,
        eachYearOfInterval: i,
        getYear: c
    } = r, l = a(t), d = s(e), u = i({
        start: l,
        end: d
    });
    return n && u.reverse(), u.map(f => {
        let p = o.formatYearDropdown(f, r);
        return {
            value: c(f),
            label: p,
            disabled: !1
        }
    })
}
var vl = {};
ji(vl, {
    labelCaption: () => D0,
    labelDay: () => E0,
    labelDayButton: () => av,
    labelGrid: () => sv,
    labelGridcell: () => N0,
    labelMonthDropdown: () => M0,
    labelNav: () => P0,
    labelNext: () => O0,
    labelPrevious: () => I0,
    labelWeekNumber: () => A0,
    labelWeekNumberHeader: () => L0,
    labelWeekday: () => k0,
    labelYearDropdown: () => F0
});

function av(t, e, o, r) {
    let n = (r ?? new qe(o)).format(t, "PPPP");
    return e.today && (n = `Today, ${n}`), e.selected && (n = `${n}, selected`), n
}
var E0 = av;

function sv(t, e, o) {
    return (o ?? new qe(e)).formatMonthYear(t)
}
var D0 = sv;

function N0(t, e, o, r) {
    let n = (r ?? new qe(o)).format(t, "PPPP");
    return e?.today && (n = `Today, ${n}`), n
}

function M0(t) {
    return "Choose the Month"
}

function P0() {
    return ""
}

function O0(t) {
    return "Go to the Next Month"
}

function I0(t) {
    return "Go to the Previous Month"
}

function k0(t, e, o) {
    return (o ?? new qe(e)).format(t, "cccc")
}

function A0(t, e) {
    return `Week ${t}`
}

function L0(t) {
    return "Week Number"
}

function F0(t) {
    return "Choose the Year"
}
var Tn = w(M(), 1);
var da = t => t instanceof HTMLElement ? t : null,
    yl = t => [...t.querySelectorAll("[data-animated-month]") ?? []],
    B0 = t => da(t.querySelector("[data-animated-month]")),
    _l = t => da(t.querySelector("[data-animated-caption]")),
    wl = t => da(t.querySelector("[data-animated-weeks]")),
    W0 = t => da(t.querySelector("[data-animated-nav]")),
    H0 = t => da(t.querySelector("[data-animated-weekdays]"));

function iv(t, e, {
    classNames: o,
    months: r,
    focused: n,
    dateLib: a
}) {
    let s = (0, Tn.useRef)(null),
        i = (0, Tn.useRef)(r),
        c = (0, Tn.useRef)(!1);
    (0, Tn.useLayoutEffect)(() => {
        let l = i.current;
        if (i.current = r, !e || !t.current || !(t.current instanceof HTMLElement) || r.length === 0 || l.length === 0 || r.length !== l.length) return;
        let d = a.isSameMonth(r[0].date, l[0].date),
            u = a.isAfter(r[0].date, l[0].date),
            f = u ? o[Tt.caption_after_enter] : o[Tt.caption_before_enter],
            p = u ? o[Tt.weeks_after_enter] : o[Tt.weeks_before_enter],
            g = s.current,
            m = t.current.cloneNode(!0);
        if (m instanceof HTMLElement ? (yl(m).forEach(y => {
                if (!(y instanceof HTMLElement)) return;
                let x = B0(y);
                x && y.contains(x) && y.removeChild(x);
                let b = _l(y);
                b && b.classList.remove(f);
                let C = wl(y);
                C && C.classList.remove(p)
            }), s.current = m) : s.current = null, c.current || d || n) return;
        let h = g instanceof HTMLElement ? yl(g) : [],
            v = yl(t.current);
        if (v?.every(_ => _ instanceof HTMLElement) && h && h.every(_ => _ instanceof HTMLElement)) {
            c.current = !0;
            let _ = [];
            t.current.style.isolation = "isolate";
            let y = W0(t.current);
            y && (y.style.zIndex = "1"), v.forEach((x, b) => {
                let C = h[b];
                if (!C) return;
                x.style.position = "relative", x.style.overflow = "hidden";
                let R = _l(x);
                R && R.classList.add(f);
                let S = wl(x);
                S && S.classList.add(p);
                let E = () => {
                    c.current = !1, t.current && (t.current.style.isolation = ""), y && (y.style.zIndex = ""), R && R.classList.remove(f), S && S.classList.remove(p), x.style.position = "", x.style.overflow = "", x.contains(C) && x.removeChild(C)
                };
                _.push(E), C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
                let D = H0(C);
                D && (D.style.opacity = "0");
                let N = _l(C);
                N && (N.classList.add(u ? o[Tt.caption_before_exit] : o[Tt.caption_after_exit]), N.addEventListener("animationend", E));
                let O = wl(C);
                O && O.classList.add(u ? o[Tt.weeks_before_exit] : o[Tt.weeks_after_exit]), x.insertBefore(C, x.firstChild)
            })
        }
    })
}
var vv = w(M(), 1);

function cv(t, e, o, r) {
    let n = t[0],
        a = t[t.length - 1],
        {
            ISOWeek: s,
            fixedWeeks: i,
            broadcastCalendar: c
        } = o ?? {},
        {
            addDays: l,
            differenceInCalendarDays: d,
            differenceInCalendarMonths: u,
            endOfBroadcastWeek: f,
            endOfISOWeek: p,
            endOfMonth: g,
            endOfWeek: m,
            isAfter: h,
            startOfBroadcastWeek: v,
            startOfISOWeek: _,
            startOfWeek: y
        } = r,
        x = c ? v(n, r) : s ? _(n) : y(n),
        b = c ? f(a) : s ? p(g(a)) : m(g(a)),
        C = d(b, x),
        R = u(a, n) + 1,
        S = [];
    for (let N = 0; N <= C; N++) {
        let O = l(x, N);
        if (e && h(O, e)) break;
        S.push(O)
    }
    let D = (c ? 35 : 42) * R;
    if (i && S.length < D) {
        let N = D - S.length;
        for (let O = 0; O < N; O++) {
            let F = l(S[S.length - 1], 1);
            S.push(F)
        }
    }
    return S
}

function lv(t) {
    let e = [];
    return t.reduce((o, r) => {
        let n = r.weeks.reduce((a, s) => a.concat(s.days.slice()), e.slice());
        return o.concat(n.slice())
    }, e.slice())
}

function uv(t, e, o, r) {
    let {
        numberOfMonths: n = 1
    } = o, a = [];
    for (let s = 0; s < n; s++) {
        let i = r.addMonths(t, s);
        if (e && i > e) break;
        a.push(i)
    }
    return a
}

function bl(t, e, o, r) {
    let {
        month: n,
        defaultMonth: a,
        today: s = r.today(),
        numberOfMonths: i = 1
    } = t, c = n || a || s, {
        differenceInCalendarMonths: l,
        addMonths: d,
        startOfMonth: u
    } = r;
    if (o && l(o, c) < i - 1) {
        let f = -1 * (i - 1);
        c = d(o, f)
    }
    return e && l(c, e) < 0 && (c = e), u(c)
}

function dv(t, e, o, r) {
    let {
        addDays: n,
        endOfBroadcastWeek: a,
        endOfISOWeek: s,
        endOfMonth: i,
        endOfWeek: c,
        getISOWeek: l,
        getWeek: d,
        startOfBroadcastWeek: u,
        startOfISOWeek: f,
        startOfWeek: p
    } = r, g = t.reduce((m, h) => {
        let v = o.broadcastCalendar ? u(h, r) : o.ISOWeek ? f(h) : p(h),
            _ = o.broadcastCalendar ? a(h) : o.ISOWeek ? s(i(h)) : c(i(h)),
            y = e.filter(R => R >= v && R <= _),
            x = o.broadcastCalendar ? 35 : 42;
        if (o.fixedWeeks && y.length < x) {
            let R = e.filter(S => {
                let E = x - y.length;
                return S > _ && S <= n(_, E)
            });
            y.push(...R)
        }
        let b = y.reduce((R, S) => {
                let E = o.ISOWeek ? l(S) : d(S),
                    D = R.find(O => O.weekNumber === E),
                    N = new xn(S, h, r);
                return D ? D.days.push(N) : R.push(new zs(E, [N])), R
            }, []),
            C = new js(h, b);
        return m.push(C), m
    }, []);
    return o.reverseMonths ? g.reverse() : g
}

function fv(t, e) {
    let {
        startMonth: o,
        endMonth: r
    } = t, {
        startOfYear: n,
        startOfDay: a,
        startOfMonth: s,
        endOfMonth: i,
        addYears: c,
        endOfYear: l,
        newDate: d,
        today: u
    } = e, {
        fromYear: f,
        toYear: p,
        fromMonth: g,
        toMonth: m
    } = t;
    !o && g && (o = g), !o && f && (o = e.newDate(f, 0, 1)), !r && m && (r = m), !r && p && (r = d(p, 11, 31));
    let h = t.captionLayout === "dropdown" || t.captionLayout === "dropdown-years";
    return o ? o = s(o) : f ? o = d(f, 0, 1) : !o && h && (o = n(c(t.today ?? u(), -100))), r ? r = i(r) : p ? r = d(p, 11, 31) : !r && h && (r = l(t.today ?? u())), [o && a(o), r && a(r)]
}

function mv(t, e, o, r) {
    if (o.disableNavigation) return;
    let {
        pagedNavigation: n,
        numberOfMonths: a = 1
    } = o, {
        startOfMonth: s,
        addMonths: i,
        differenceInCalendarMonths: c
    } = r, l = n ? a : 1, d = s(t);
    if (!e) return i(d, l);
    if (!(c(e, t) < a)) return i(d, l)
}

function pv(t, e, o, r) {
    if (o.disableNavigation) return;
    let {
        pagedNavigation: n,
        numberOfMonths: a
    } = o, {
        startOfMonth: s,
        addMonths: i,
        differenceInCalendarMonths: c
    } = r, l = n ? a ?? 1 : 1, d = s(t);
    if (!e) return i(d, -l);
    if (!(c(d, e) <= 0)) return i(d, -l)
}

function hv(t) {
    let e = [];
    return t.reduce((o, r) => o.concat(r.weeks.slice()), e.slice())
}
var gv = w(M(), 1);

function mr(t, e) {
    let [o, r] = (0, gv.useState)(t);
    return [e === void 0 ? o : e, r]
}

function yv(t, e) {
    let [o, r] = fv(t, e), {
        startOfMonth: n,
        endOfMonth: a
    } = e, s = bl(t, o, r, e), [i, c] = mr(s, t.month ? s : void 0);
    (0, vv.useEffect)(() => {
        let C = bl(t, o, r, e);
        c(C)
    }, [t.timeZone]);
    let l = uv(i, r, t, e),
        d = cv(l, t.endMonth ? a(t.endMonth) : void 0, t, e),
        u = dv(l, d, t, e),
        f = hv(u),
        p = lv(u),
        g = pv(i, o, t, e),
        m = mv(i, r, t, e),
        {
            disableNavigation: h,
            onMonthChange: v
        } = t,
        _ = C => f.some(R => R.days.some(S => S.isEqualTo(C))),
        y = C => {
            if (h) return;
            let R = n(C);
            o && R < n(o) && (R = n(o)), r && R > n(r) && (R = n(r)), c(R), v?.(R)
        };
    return {
        months: u,
        weeks: f,
        days: p,
        navStart: o,
        navEnd: r,
        previousMonth: g,
        nextMonth: m,
        goToMonth: y,
        goToDay: C => {
            _(C) || y(C.date)
        }
    }
}
var Cl = w(M(), 1);
var xo;
(function(t) {
    t[t.Today = 0] = "Today", t[t.Selected = 1] = "Selected", t[t.LastFocused = 2] = "LastFocused", t[t.FocusedModifier = 3] = "FocusedModifier"
})(xo || (xo = {}));

function _v(t) {
    return !t[De.disabled] && !t[De.hidden] && !t[De.outside]
}

function wv(t, e, o, r) {
    let n, a = -1;
    for (let s of t) {
        let i = e(s);
        _v(i) && (i[De.focused] && a < xo.FocusedModifier ? (n = s, a = xo.FocusedModifier) : r?.isEqualTo(s) && a < xo.LastFocused ? (n = s, a = xo.LastFocused) : o(s.date) && a < xo.Selected ? (n = s, a = xo.Selected) : i[De.today] && a < xo.Today && (n = s, a = xo.Today))
    }
    return n || (n = t.find(s => _v(e(s)))), n
}

function bv(t, e, o, r, n, a, s) {
    let {
        ISOWeek: i,
        broadcastCalendar: c
    } = a, {
        addDays: l,
        addMonths: d,
        addWeeks: u,
        addYears: f,
        endOfBroadcastWeek: p,
        endOfISOWeek: g,
        endOfWeek: m,
        max: h,
        min: v,
        startOfBroadcastWeek: _,
        startOfISOWeek: y,
        startOfWeek: x
    } = s, C = {
        day: l,
        week: u,
        month: d,
        year: f,
        startOfWeek: R => c ? _(R, s) : i ? y(R) : x(R),
        endOfWeek: R => c ? p(R) : i ? g(R) : m(R)
    } [t](o, e === "after" ? 1 : -1);
    return e === "before" && r ? C = h([r, C]) : e === "after" && n && (C = v([n, C])), C
}

function xl(t, e, o, r, n, a, s, i = 0) {
    if (i > 365) return;
    let c = bv(t, e, o.date, r, n, a, s),
        l = Boolean(a.disabled && Qt(c, a.disabled, s)),
        d = Boolean(a.hidden && Qt(c, a.hidden, s)),
        u = c,
        f = new xn(c, u, s);
    return !l && !d ? f : xl(t, e, f, r, n, a, s, i + 1)
}

function xv(t, e, o, r, n) {
    let {
        autoFocus: a
    } = t, [s, i] = (0, Cl.useState)(), c = wv(e.days, o, r || (() => !1), s), [l, d] = (0, Cl.useState)(a ? c : void 0);
    return {
        isFocusTarget: m => Boolean(c?.isEqualTo(m)),
        setFocused: d,
        focused: l,
        blur: () => {
            i(l), d(void 0)
        },
        moveFocus: (m, h) => {
            if (!l) return;
            let v = xl(m, h, l, e.navStart, e.navEnd, t, n);
            v && (t.disableNavigation && !e.days.some(y => y.isEqualTo(v)) || (e.goToDay(v), d(v)))
        }
    }
}

function Cv(t, e) {
    let {
        selected: o,
        required: r,
        onSelect: n
    } = t, [a, s] = mr(o, n ? o : void 0), i = n ? o : a, {
        isSameDay: c
    } = e, l = p => i?.some(g => c(g, p)) ?? !1, {
        min: d,
        max: u
    } = t;
    return {
        selected: i,
        select: (p, g, m) => {
            let h = [...i ?? []];
            if (l(p)) {
                if (i?.length === d || r && i?.length === 1) return;
                h = i?.filter(v => !c(v, p))
            } else i?.length === u ? h = [p] : h = [...h, p];
            return n || s(h), n?.(h, p, g, m), h
        },
        isSelected: l
    }
}

function Rv(t, e, o = 0, r = 0, n = !1, a = Je) {
    let {
        from: s,
        to: i
    } = e || {}, {
        isSameDay: c,
        isAfter: l,
        isBefore: d
    } = a, u;
    if (!s && !i) u = {
        from: t,
        to: o > 0 ? void 0 : t
    };
    else if (s && !i) c(s, t) ? o === 0 ? u = {
        from: s,
        to: t
    } : n ? u = {
        from: s,
        to: void 0
    } : u = void 0 : d(t, s) ? u = {
        from: t,
        to: s
    } : u = {
        from: s,
        to: t
    };
    else if (s && i)
        if (c(s, t) && c(i, t)) n ? u = {
            from: s,
            to: i
        } : u = void 0;
        else if (c(s, t)) u = {
        from: s,
        to: o > 0 ? void 0 : t
    };
    else if (c(i, t)) u = {
        from: t,
        to: o > 0 ? void 0 : t
    };
    else if (d(t, s)) u = {
        from: t,
        to: i
    };
    else if (l(t, s)) u = {
        from: s,
        to: t
    };
    else if (l(t, i)) u = {
        from: s,
        to: t
    };
    else throw new Error("Invalid range");
    if (u?.from && u?.to) {
        let f = a.differenceInCalendarDays(u.to, u.from);
        r > 0 && f > r ? u = {
            from: t,
            to: void 0
        } : o > 1 && f < o && (u = {
            from: t,
            to: void 0
        })
    }
    return u
}

function Sv(t, e, o = Je) {
    let r = Array.isArray(e) ? e : [e],
        n = t.from,
        a = o.differenceInCalendarDays(t.to, t.from),
        s = Math.min(a, 6);
    for (let i = 0; i <= s; i++) {
        if (r.includes(n.getDay())) return !0;
        n = o.addDays(n, 1)
    }
    return !1
}

function Rl(t, e, o = Je) {
    return Ot(t, e.from, !1, o) || Ot(t, e.to, !1, o) || Ot(e, t.from, !1, o) || Ot(e, t.to, !1, o)
}

function Tv(t, e, o = Je) {
    let r = Array.isArray(e) ? e : [e];
    if (r.filter(i => typeof i != "function").some(i => typeof i == "boolean" ? i : o.isDate(i) ? Ot(t, i, !1, o) : Ks(i, o) ? i.some(c => Ot(t, c, !1, o)) : Sn(i) ? i.from && i.to ? Rl(t, {
            from: i.from,
            to: i.to
        }, o) : !1 : $s(i) ? Sv(t, i.dayOfWeek, o) : Ys(i) ? o.isAfter(i.before, i.after) ? Rl(t, {
            from: o.addDays(i.after, 1),
            to: o.addDays(i.before, -1)
        }, o) : Qt(t.from, i, o) || Qt(t.to, i, o) : Vs(i) || qs(i) ? Qt(t.from, i, o) || Qt(t.to, i, o) : !1)) return !0;
    let s = r.filter(i => typeof i == "function");
    if (s.length) {
        let i = t.from,
            c = o.differenceInCalendarDays(t.to, t.from);
        for (let l = 0; l <= c; l++) {
            if (s.some(d => d(i))) return !0;
            i = o.addDays(i, 1)
        }
    }
    return !1
}

function Ev(t, e) {
    let {
        disabled: o,
        excludeDisabled: r,
        selected: n,
        required: a,
        onSelect: s
    } = t, [i, c] = mr(n, s ? n : void 0), l = s ? n : i;
    return {
        selected: l,
        select: (f, p, g) => {
            let {
                min: m,
                max: h
            } = t, v = f ? Rv(f, l, m, h, a, e) : void 0;
            return r && o && v?.from && v.to && Tv({
                from: v.from,
                to: v.to
            }, o, e) && (v.from = f, v.to = void 0), s || c(v), s?.(v, f, p, g), v
        },
        isSelected: f => l && Ot(l, f, !1, e)
    }
}

function Dv(t, e) {
    let {
        selected: o,
        required: r,
        onSelect: n
    } = t, [a, s] = mr(o, n ? o : void 0), i = n ? o : a, {
        isSameDay: c
    } = e;
    return {
        selected: i,
        select: (u, f, p) => {
            let g = u;
            return !r && i && i && c(u, i) && (g = void 0), n || s(g), n?.(g, u, f, p), g
        },
        isSelected: u => i ? c(i, u) : !1
    }
}

function Nv(t, e) {
    let o = Dv(t, e),
        r = Cv(t, e),
        n = Ev(t, e);
    switch (t.mode) {
        case "single":
            return o;
        case "multiple":
            return r;
        case "range":
            return n;
        default:
            return
    }
}

function Mv(t) {
    let e = t;
    e.timeZone && (e = {
        ...t
    }, e.today && (e.today = new Xe(e.today, e.timeZone)), e.month && (e.month = new Xe(e.month, e.timeZone)), e.defaultMonth && (e.defaultMonth = new Xe(e.defaultMonth, e.timeZone)), e.startMonth && (e.startMonth = new Xe(e.startMonth, e.timeZone)), e.endMonth && (e.endMonth = new Xe(e.endMonth, e.timeZone)), e.mode === "single" && e.selected ? e.selected = new Xe(e.selected, e.timeZone) : e.mode === "multiple" && e.selected ? e.selected = e.selected?.map(ge => new Xe(ge, e.timeZone)) : e.mode === "range" && e.selected && (e.selected = {
        from: e.selected.from ? new Xe(e.selected.from, e.timeZone) : void 0,
        to: e.selected.to ? new Xe(e.selected.to, e.timeZone) : void 0
    }));
    let {
        components: o,
        formatters: r,
        labels: n,
        dateLib: a,
        locale: s,
        classNames: i
    } = (0, ie.useMemo)(() => {
        let ge = {
            ...fr,
            ...e.locale
        };
        return {
            dateLib: new qe({
                locale: ge,
                weekStartsOn: e.broadcastCalendar ? 1 : e.weekStartsOn,
                firstWeekContainsDate: e.firstWeekContainsDate,
                useAdditionalWeekYearTokens: e.useAdditionalWeekYearTokens,
                useAdditionalDayOfYearTokens: e.useAdditionalDayOfYearTokens,
                timeZone: e.timeZone,
                numerals: e.numerals
            }, e.dateLib),
            components: Xg(e.components),
            formatters: ev(e.formatters),
            labels: {
                ...vl,
                ...e.labels
            },
            locale: ge,
            classNames: {
                ...Xs(),
                ...e.classNames
            }
        }
    }, [e.locale, e.broadcastCalendar, e.weekStartsOn, e.firstWeekContainsDate, e.useAdditionalWeekYearTokens, e.useAdditionalDayOfYearTokens, e.timeZone, e.numerals, e.dateLib, e.components, e.formatters, e.labels, e.classNames]), {
        captionLayout: c,
        mode: l,
        navLayout: d,
        numberOfMonths: u = 1,
        onDayBlur: f,
        onDayClick: p,
        onDayFocus: g,
        onDayKeyDown: m,
        onDayMouseEnter: h,
        onDayMouseLeave: v,
        onNextClick: _,
        onPrevClick: y,
        showWeekNumber: x,
        styles: b
    } = e, {
        formatCaption: C,
        formatDay: R,
        formatMonthDropdown: S,
        formatWeekNumber: E,
        formatWeekNumberHeader: D,
        formatWeekdayName: N,
        formatYearDropdown: O
    } = r, F = yv(e, a), {
        days: P,
        months: B,
        navStart: k,
        navEnd: G,
        previousMonth: H,
        nextMonth: L,
        goToMonth: re
    } = F, ne = $g(P, e, k, G, a), {
        isSelected: ue,
        select: de,
        selected: pe
    } = Nv(e, a) ?? {}, {
        blur: _e,
        focused: be,
        isFocusTarget: j,
        moveFocus: ce,
        setFocused: ve
    } = xv(e, F, ne, ue ?? (() => !1), a), {
        labelDayButton: ae,
        labelGridcell: Y,
        labelGrid: we,
        labelMonthDropdown: Ae,
        labelNav: Be,
        labelPrevious: ut,
        labelNext: dt,
        labelWeekday: tt,
        labelWeekNumber: _t,
        labelWeekNumberHeader: wt,
        labelYearDropdown: bt
    } = n, xt = (0, ie.useMemo)(() => rv(a, e.ISOWeek), [a, e.ISOWeek]), Et = l !== void 0 || p !== void 0, $ = (0, ie.useCallback)(() => {
        H && (re(H), y?.(H))
    }, [H, re, y]), J = (0, ie.useCallback)(() => {
        L && (re(L), _?.(L))
    }, [re, L, _]), Pe = (0, ie.useCallback)((ge, We) => fe => {
        fe.preventDefault(), fe.stopPropagation(), ve(ge), de?.(ge.date, We, fe), p?.(ge.date, We, fe)
    }, [de, p, ve]), Ct = (0, ie.useCallback)((ge, We) => fe => {
        ve(ge), g?.(ge.date, We, fe)
    }, [g, ve]), fo = (0, ie.useCallback)((ge, We) => fe => {
        _e(), f?.(ge.date, We, fe)
    }, [_e, f]), Zr = (0, ie.useCallback)((ge, We) => fe => {
        let Ie = {
            ArrowLeft: [fe.shiftKey ? "month" : "day", e.dir === "rtl" ? "after" : "before"],
            ArrowRight: [fe.shiftKey ? "month" : "day", e.dir === "rtl" ? "before" : "after"],
            ArrowDown: [fe.shiftKey ? "year" : "week", "after"],
            ArrowUp: [fe.shiftKey ? "year" : "week", "before"],
            PageUp: [fe.shiftKey ? "year" : "month", "before"],
            PageDown: [fe.shiftKey ? "year" : "month", "after"],
            Home: ["startOfWeek", "before"],
            End: ["endOfWeek", "after"]
        };
        if (Ie[fe.key]) {
            fe.preventDefault(), fe.stopPropagation();
            let [At, xe] = Ie[fe.key];
            ce(At, xe)
        }
        m?.(ge.date, We, fe)
    }, [ce, m, e.dir]), Oe = (0, ie.useCallback)((ge, We) => fe => {
        h?.(ge.date, We, fe)
    }, [h]), ft = (0, ie.useCallback)((ge, We) => fe => {
        v?.(ge.date, We, fe)
    }, [v]), qo = (0, ie.useCallback)(ge => We => {
        let fe = Number(We.target.value),
            Ie = a.setMonth(a.startOfMonth(ge), fe);
        re(Ie)
    }, [a, re]), Ew = (0, ie.useCallback)(ge => We => {
        let fe = Number(We.target.value),
            Ie = a.setYear(a.startOfMonth(ge), fe);
        re(Ie)
    }, [a, re]), {
        className: Dw,
        style: Nw
    } = (0, ie.useMemo)(() => ({
        className: [i[q.Root], e.className].filter(Boolean).join(" "),
        style: {
            ...b?.[q.Root],
            ...e.style
        }
    }), [i, e.className, e.style, b]), Mw = Zg(e), yu = (0, ie.useRef)(null);
    iv(yu, Boolean(e.animate), {
        classNames: i,
        months: B,
        focused: be,
        dateLib: a
    });
    let Pw = {
        dayPickerProps: e,
        selected: pe,
        select: de,
        isSelected: ue,
        months: B,
        nextMonth: L,
        previousMonth: H,
        goToMonth: re,
        getModifiers: ne,
        components: o,
        classNames: i,
        styles: b,
        labels: n,
        formatters: r
    };
    return ie.default.createElement(ml.Provider, {
        value: Pw
    }, ie.default.createElement(o.Root, {
        rootRef: e.animate ? yu : void 0,
        className: Dw,
        style: Nw,
        dir: e.dir,
        id: e.id,
        lang: e.lang,
        nonce: e.nonce,
        title: e.title,
        role: e.role,
        "aria-label": e["aria-label"],
        "aria-labelledby": e["aria-labelledby"],
        ...Mw
    }, ie.default.createElement(o.Months, {
        className: i[q.Months],
        style: b?.[q.Months]
    }, !e.hideNavigation && !d && ie.default.createElement(o.Nav, {
        "data-animated-nav": e.animate ? "true" : void 0,
        className: i[q.Nav],
        style: b?.[q.Nav],
        "aria-label": Be(),
        onPreviousClick: $,
        onNextClick: J,
        previousMonth: H,
        nextMonth: L
    }), B.map((ge, We) => ie.default.createElement(o.Month, {
        "data-animated-month": e.animate ? "true" : void 0,
        className: i[q.Month],
        style: b?.[q.Month],
        key: We,
        displayIndex: We,
        calendarMonth: ge
    }, d === "around" && !e.hideNavigation && We === 0 && ie.default.createElement(o.PreviousMonthButton, {
        type: "button",
        className: i[q.PreviousMonthButton],
        tabIndex: H ? void 0 : -1,
        "aria-disabled": H ? void 0 : !0,
        "aria-label": ut(H),
        onClick: $,
        "data-animated-button": e.animate ? "true" : void 0
    }, ie.default.createElement(o.Chevron, {
        disabled: H ? void 0 : !0,
        className: i[q.Chevron],
        orientation: e.dir === "rtl" ? "right" : "left"
    })), ie.default.createElement(o.MonthCaption, {
        "data-animated-caption": e.animate ? "true" : void 0,
        className: i[q.MonthCaption],
        style: b?.[q.MonthCaption],
        calendarMonth: ge,
        displayIndex: We
    }, c?.startsWith("dropdown") ? ie.default.createElement(o.DropdownNav, {
        className: i[q.Dropdowns],
        style: b?.[q.Dropdowns]
    }, (() => {
        let fe = c === "dropdown" || c === "dropdown-months" ? ie.default.createElement(o.MonthsDropdown, {
                key: "month",
                className: i[q.MonthsDropdown],
                "aria-label": Ae(),
                classNames: i,
                components: o,
                disabled: Boolean(e.disableNavigation),
                onChange: qo(ge.date),
                options: tv(ge.date, k, G, r, a),
                style: b?.[q.Dropdown],
                value: a.getMonth(ge.date)
            }) : ie.default.createElement("span", {
                key: "month"
            }, S(ge.date, a)),
            Ie = c === "dropdown" || c === "dropdown-years" ? ie.default.createElement(o.YearsDropdown, {
                key: "year",
                className: i[q.YearsDropdown],
                "aria-label": bt(a.options),
                classNames: i,
                components: o,
                disabled: Boolean(e.disableNavigation),
                onChange: Ew(ge.date),
                options: nv(k, G, r, a, Boolean(e.reverseYears)),
                style: b?.[q.Dropdown],
                value: a.getYear(ge.date)
            }) : ie.default.createElement("span", {
                key: "year"
            }, O(ge.date, a));
        return a.getMonthYearOrder() === "year-first" ? [Ie, fe] : [fe, Ie]
    })(), ie.default.createElement("span", {
        role: "status",
        "aria-live": "polite",
        style: {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            width: "1px",
            whiteSpace: "nowrap",
            wordWrap: "normal"
        }
    }, C(ge.date, a.options, a))) : ie.default.createElement(o.CaptionLabel, {
        className: i[q.CaptionLabel],
        role: "status",
        "aria-live": "polite"
    }, C(ge.date, a.options, a))), d === "around" && !e.hideNavigation && We === u - 1 && ie.default.createElement(o.NextMonthButton, {
        type: "button",
        className: i[q.NextMonthButton],
        tabIndex: L ? void 0 : -1,
        "aria-disabled": L ? void 0 : !0,
        "aria-label": dt(L),
        onClick: J,
        "data-animated-button": e.animate ? "true" : void 0
    }, ie.default.createElement(o.Chevron, {
        disabled: L ? void 0 : !0,
        className: i[q.Chevron],
        orientation: e.dir === "rtl" ? "left" : "right"
    })), We === u - 1 && d === "after" && !e.hideNavigation && ie.default.createElement(o.Nav, {
        "data-animated-nav": e.animate ? "true" : void 0,
        className: i[q.Nav],
        style: b?.[q.Nav],
        "aria-label": Be(),
        onPreviousClick: $,
        onNextClick: J,
        previousMonth: H,
        nextMonth: L
    }), ie.default.createElement(o.MonthGrid, {
        role: "grid",
        "aria-multiselectable": l === "multiple" || l === "range",
        "aria-label": we(ge.date, a.options, a) || void 0,
        className: i[q.MonthGrid],
        style: b?.[q.MonthGrid]
    }, !e.hideWeekdays && ie.default.createElement(o.Weekdays, {
        "data-animated-weekdays": e.animate ? "true" : void 0,
        className: i[q.Weekdays],
        style: b?.[q.Weekdays]
    }, x && ie.default.createElement(o.WeekNumberHeader, {
        "aria-label": wt(a.options),
        className: i[q.WeekNumberHeader],
        style: b?.[q.WeekNumberHeader],
        scope: "col"
    }, D()), xt.map(fe => ie.default.createElement(o.Weekday, {
        "aria-label": tt(fe, a.options, a),
        className: i[q.Weekday],
        key: String(fe),
        style: b?.[q.Weekday],
        scope: "col"
    }, N(fe, a.options, a)))), ie.default.createElement(o.Weeks, {
        "data-animated-weeks": e.animate ? "true" : void 0,
        className: i[q.Weeks],
        style: b?.[q.Weeks]
    }, ge.weeks.map(fe => ie.default.createElement(o.Week, {
        className: i[q.Week],
        key: fe.weekNumber,
        style: b?.[q.Week],
        week: fe
    }, x && ie.default.createElement(o.WeekNumber, {
        week: fe,
        style: b?.[q.WeekNumber],
        "aria-label": _t(fe.weekNumber, {
            locale: s
        }),
        className: i[q.WeekNumber],
        scope: "row",
        role: "rowheader"
    }, E(fe.weekNumber, a)), fe.days.map(Ie => {
        let {
            date: At
        } = Ie, xe = ne(Ie);
        if (xe[De.focused] = !xe.hidden && Boolean(be?.isEqualTo(Ie)), xe[Pt.selected] = ue?.(At) || xe.selected, Sn(pe)) {
            let {
                from: Wi,
                to: Hi
            } = pe;
            xe[Pt.range_start] = Boolean(Wi && Hi && a.isSameDay(At, Wi)), xe[Pt.range_end] = Boolean(Wi && Hi && a.isSameDay(At, Hi)), xe[Pt.range_middle] = Ot(pe, At, !0, a)
        }
        let Ow = ov(xe, b, e.modifiersStyles),
            Iw = Kg(xe, i, e.modifiersClassNames),
            kw = !Et && !xe.hidden ? Y(At, xe, a.options, a) : void 0;
        return ie.default.createElement(o.Day, {
            key: `${a.format(At,"yyyy-MM-dd")}_${a.format(Ie.displayMonth,"yyyy-MM")}`,
            day: Ie,
            modifiers: xe,
            className: Iw.join(" "),
            style: Ow,
            role: "gridcell",
            "aria-selected": xe.selected || void 0,
            "aria-label": kw,
            "data-day": a.format(At, "yyyy-MM-dd"),
            "data-month": Ie.outside ? a.format(At, "yyyy-MM") : void 0,
            "data-selected": xe.selected || void 0,
            "data-disabled": xe.disabled || void 0,
            "data-hidden": xe.hidden || void 0,
            "data-outside": Ie.outside || void 0,
            "data-focused": xe.focused || void 0,
            "data-today": xe.today || void 0
        }, !xe.hidden && Et ? ie.default.createElement(o.DayButton, {
            className: i[q.DayButton],
            style: b?.[q.DayButton],
            type: "button",
            day: Ie,
            modifiers: xe,
            disabled: xe.disabled || void 0,
            tabIndex: j(Ie) ? 0 : -1,
            "aria-label": ae(At, xe, a.options, a),
            onClick: Pe(Ie, xe),
            onBlur: fo(Ie, xe),
            onFocus: Ct(Ie, xe),
            onKeyDown: Zr(Ie, xe),
            onMouseEnter: Oe(Ie, xe),
            onMouseLeave: ft(Ie, xe)
        }, R(At, a.options, a)) : !xe.hidden && R(Ie.date, a.options, a))
    })))))))), e.footer && ie.default.createElement(o.Footer, {
        className: i[q.Footer],
        style: b?.[q.Footer],
        role: "status",
        "aria-live": "polite"
    }, e.footer)))
}
var ze = w(M(), 1);
var et = w(W(), 1),
    Zs = "Popover",
    [Pv, z7] = Se(Zs, [$t]),
    fa = $t(),
    [j0, pr] = Pv(Zs),
    Qs = t => {
        let {
            __scopePopover: e,
            children: o,
            open: r,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !1
        } = t, i = fa(e), c = ze.useRef(null), [l, d] = ze.useState(!1), [u, f] = He({
            prop: r,
            defaultProp: n ?? !1,
            onChange: a,
            caller: Zs
        });
        return (0, et.jsx)(Do, {
            ...i,
            children: (0, et.jsx)(j0, {
                scope: e,
                contentId: $e(),
                triggerRef: c,
                open: u,
                onOpenChange: f,
                onOpenToggle: ze.useCallback(() => f(p => !p), [f]),
                hasCustomAnchor: l,
                onCustomAnchorAdd: ze.useCallback(() => d(!0), []),
                onCustomAnchorRemove: ze.useCallback(() => d(!1), []),
                modal: s,
                children: o
            })
        })
    };
Qs.displayName = Zs;
var Ov = "PopoverAnchor",
    Iv = ze.forwardRef((t, e) => {
        let {
            __scopePopover: o,
            ...r
        } = t, n = pr(Ov, o), a = fa(o), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
        } = n;
        return ze.useEffect(() => (s(), () => i()), [s, i]), (0, et.jsx)(No, {
            ...a,
            ...r,
            ref: e
        })
    });
Iv.displayName = Ov;
var kv = "PopoverTrigger",
    Js = ze.forwardRef((t, e) => {
        let {
            __scopePopover: o,
            ...r
        } = t, n = pr(kv, o), a = fa(o), s = X(e, n.triggerRef), i = (0, et.jsx)(z.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.contentId,
            "data-state": Hv(n.open),
            ...r,
            ref: s,
            onClick: A(t.onClick, n.onOpenToggle)
        });
        return n.hasCustomAnchor ? i : (0, et.jsx)(No, {
            asChild: !0,
            ...a,
            children: i
        })
    });
Js.displayName = kv;
var Sl = "PopoverPortal",
    [z0, U0] = Pv(Sl, {
        forceMount: void 0
    }),
    Av = t => {
        let {
            __scopePopover: e,
            forceMount: o,
            children: r,
            container: n
        } = t, a = pr(Sl, e);
        return (0, et.jsx)(z0, {
            scope: e,
            forceMount: o,
            children: (0, et.jsx)(je, {
                present: o || a.open,
                children: (0, et.jsx)(Ht, {
                    asChild: !0,
                    container: n,
                    children: r
                })
            })
        })
    };
Av.displayName = Sl;
var En = "PopoverContent",
    ei = ze.forwardRef((t, e) => {
        let o = U0(En, t.__scopePopover),
            {
                forceMount: r = o.forceMount,
                ...n
            } = t,
            a = pr(En, t.__scopePopover);
        return (0, et.jsx)(je, {
            present: r || a.open,
            children: a.modal ? (0, et.jsx)(Y0, {
                ...n,
                ref: e
            }) : (0, et.jsx)(V0, {
                ...n,
                ref: e
            })
        })
    });
ei.displayName = En;
var G0 = Ft("PopoverContent.RemoveScroll"),
    Y0 = ze.forwardRef((t, e) => {
        let o = pr(En, t.__scopePopover),
            r = ze.useRef(null),
            n = X(e, r),
            a = ze.useRef(!1);
        return ze.useEffect(() => {
            let s = r.current;
            if (s) return rr(s)
        }, []), (0, et.jsx)(Mo, {
            as: G0,
            allowPinchZoom: !0,
            children: (0, et.jsx)(Lv, {
                ...t,
                ref: n,
                trapFocus: o.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: A(t.onCloseAutoFocus, s => {
                    s.preventDefault(), a.current || o.triggerRef.current?.focus()
                }),
                onPointerDownOutside: A(t.onPointerDownOutside, s => {
                    let i = s.detail.originalEvent,
                        c = i.button === 0 && i.ctrlKey === !0,
                        l = i.button === 2 || c;
                    a.current = l
                }, {
                    checkForDefaultPrevented: !1
                }),
                onFocusOutside: A(t.onFocusOutside, s => s.preventDefault(), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    }),
    V0 = ze.forwardRef((t, e) => {
        let o = pr(En, t.__scopePopover),
            r = ze.useRef(!1),
            n = ze.useRef(!1);
        return (0, et.jsx)(Lv, {
            ...t,
            ref: e,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: a => {
                t.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || o.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, n.current = !1
            },
            onInteractOutside: a => {
                t.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (n.current = !0));
                let s = a.target;
                o.triggerRef.current?.contains(s) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && n.current && a.preventDefault()
            }
        })
    }),
    Lv = ze.forwardRef((t, e) => {
        let {
            __scopePopover: o,
            trapFocus: r,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onInteractOutside: d,
            ...u
        } = t, f = pr(En, o), p = fa(o);
        return Xo(), (0, et.jsx)(So, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: n,
            onUnmountAutoFocus: a,
            children: (0, et.jsx)(Vt, {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onInteractOutside: d,
                onEscapeKeyDown: i,
                onPointerDownOutside: c,
                onFocusOutside: l,
                onDismiss: () => f.onOpenChange(!1),
                children: (0, et.jsx)(er, {
                    "data-state": Hv(f.open),
                    role: "dialog",
                    id: f.contentId,
                    ...p,
                    ...u,
                    ref: e,
                    style: {
                        ...u.style,
                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            })
        })
    }),
    Fv = "PopoverClose",
    Bv = ze.forwardRef((t, e) => {
        let {
            __scopePopover: o,
            ...r
        } = t, n = pr(Fv, o);
        return (0, et.jsx)(z.button, {
            type: "button",
            ...r,
            ref: e,
            onClick: A(t.onClick, () => n.onOpenChange(!1))
        })
    });
Bv.displayName = Fv;
var q0 = "PopoverArrow",
    Wv = ze.forwardRef((t, e) => {
        let {
            __scopePopover: o,
            ...r
        } = t, n = fa(o);
        return (0, et.jsx)(tr, {
            ...n,
            ...r,
            ref: e
        })
    });
Wv.displayName = q0;

function Hv(t) {
    return t ? "open" : "closed"
}
var jv = Qs,
    U7 = Iv,
    zv = Js,
    Uv = Av,
    Gv = ei,
    Yv = Bv,
    Vv = Wv;
var le = w(M(), 1),
    $v = w(kn(), 1);
var Re = w(W(), 1),
    Ml = "ToastProvider",
    [Pl, K0, X0] = Ko("Toast"),
    [Kv, t9] = Se("Toast", [X0]),
    [Z0, oi] = Kv(Ml),
    Xv = t => {
        let {
            __scopeToast: e,
            label: o = "Notification",
            duration: r = 5e3,
            swipeDirection: n = "right",
            swipeThreshold: a = 50,
            children: s
        } = t, [i, c] = le.useState(null), [l, d] = le.useState(0), u = le.useRef(!1), f = le.useRef(!1);
        return o.trim() || console.error(`Invalid prop \`label\` supplied to \`${Ml}\`. Expected non-empty \`string\`.`), (0, Re.jsx)(Pl.Provider, {
            scope: e,
            children: (0, Re.jsx)(Z0, {
                scope: e,
                label: o,
                duration: r,
                swipeDirection: n,
                swipeThreshold: a,
                toastCount: l,
                viewport: i,
                onViewportChange: c,
                onToastAdd: le.useCallback(() => d(p => p + 1), []),
                onToastRemove: le.useCallback(() => d(p => p - 1), []),
                isFocusedToastEscapeKeyDownRef: u,
                isClosePausedRef: f,
                children: s
            })
        })
    };
Xv.displayName = Ml;
var Zv = "ToastViewport",
    Q0 = ["F8"],
    El = "toast.viewportPause",
    Dl = "toast.viewportResume",
    Qv = le.forwardRef((t, e) => {
        let {
            __scopeToast: o,
            hotkey: r = Q0,
            label: n = "Notifications ({hotkey})",
            ...a
        } = t, s = oi(Zv, o), i = K0(o), c = le.useRef(null), l = le.useRef(null), d = le.useRef(null), u = le.useRef(null), f = X(e, u, s.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = s.toastCount > 0;
        le.useEffect(() => {
            let h = v => {
                r.length !== 0 && r.every(y => v[y] || v.code === y) && u.current?.focus()
            };
            return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h)
        }, [r]), le.useEffect(() => {
            let h = c.current,
                v = u.current;
            if (g && h && v) {
                let _ = () => {
                        if (!s.isClosePausedRef.current) {
                            let C = new CustomEvent(El);
                            v.dispatchEvent(C), s.isClosePausedRef.current = !0
                        }
                    },
                    y = () => {
                        if (s.isClosePausedRef.current) {
                            let C = new CustomEvent(Dl);
                            v.dispatchEvent(C), s.isClosePausedRef.current = !1
                        }
                    },
                    x = C => {
                        !h.contains(C.relatedTarget) && y()
                    },
                    b = () => {
                        h.contains(document.activeElement) || y()
                    };
                return h.addEventListener("focusin", _), h.addEventListener("focusout", x), h.addEventListener("pointermove", _), h.addEventListener("pointerleave", b), window.addEventListener("blur", _), window.addEventListener("focus", y), () => {
                    h.removeEventListener("focusin", _), h.removeEventListener("focusout", x), h.removeEventListener("pointermove", _), h.removeEventListener("pointerleave", b), window.removeEventListener("blur", _), window.removeEventListener("focus", y)
                }
            }
        }, [g, s.isClosePausedRef]);
        let m = le.useCallback(({
            tabbingDirection: h
        }) => {
            let _ = i().map(y => {
                let x = y.ref.current,
                    b = [x, ...dT(x)];
                return h === "forwards" ? b : b.reverse()
            });
            return (h === "forwards" ? _.reverse() : _).flat()
        }, [i]);
        return le.useEffect(() => {
            let h = u.current;
            if (h) {
                let v = _ => {
                    let y = _.altKey || _.ctrlKey || _.metaKey;
                    if (_.key === "Tab" && !y) {
                        let b = document.activeElement,
                            C = _.shiftKey;
                        if (_.target === h && C) {
                            l.current?.focus();
                            return
                        }
                        let E = m({
                                tabbingDirection: C ? "backwards" : "forwards"
                            }),
                            D = E.findIndex(N => N === b);
                        Tl(E.slice(D + 1)) ? _.preventDefault() : C ? l.current?.focus() : d.current?.focus()
                    }
                };
                return h.addEventListener("keydown", v), () => h.removeEventListener("keydown", v)
            }
        }, [i, m]), (0, Re.jsxs)($u, {
            ref: c,
            role: "region",
            "aria-label": n.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
                pointerEvents: g ? void 0 : "none"
            },
            children: [g && (0, Re.jsx)(Nl, {
                ref: l,
                onFocusFromOutsideViewport: () => {
                    let h = m({
                        tabbingDirection: "forwards"
                    });
                    Tl(h)
                }
            }), (0, Re.jsx)(Pl.Slot, {
                scope: o,
                children: (0, Re.jsx)(z.ol, {
                    tabIndex: -1,
                    ...a,
                    ref: f
                })
            }), g && (0, Re.jsx)(Nl, {
                ref: d,
                onFocusFromOutsideViewport: () => {
                    let h = m({
                        tabbingDirection: "backwards"
                    });
                    Tl(h)
                }
            })]
        })
    });
Qv.displayName = Zv;
var Jv = "ToastFocusProxy",
    Nl = le.forwardRef((t, e) => {
        let {
            __scopeToast: o,
            onFocusFromOutsideViewport: r,
            ...n
        } = t, a = oi(Jv, o);
        return (0, Re.jsx)(zn, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...n,
            ref: e,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                let i = s.relatedTarget;
                !a.viewport?.contains(i) && r()
            }
        })
    });
Nl.displayName = Jv;
var ma = "Toast",
    J0 = "toast.swipeStart",
    eT = "toast.swipeMove",
    tT = "toast.swipeCancel",
    oT = "toast.swipeEnd",
    ey = le.forwardRef((t, e) => {
        let {
            forceMount: o,
            open: r,
            defaultOpen: n,
            onOpenChange: a,
            ...s
        } = t, [i, c] = He({
            prop: r,
            defaultProp: n ?? !0,
            onChange: a,
            caller: ma
        });
        return (0, Re.jsx)(je, {
            present: o || i,
            children: (0, Re.jsx)(aT, {
                open: i,
                ...s,
                ref: e,
                onClose: () => c(!1),
                onPause: Ye(t.onPause),
                onResume: Ye(t.onResume),
                onSwipeStart: A(t.onSwipeStart, l => {
                    l.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: A(t.onSwipeMove, l => {
                    let {
                        x: d,
                        y: u
                    } = l.detail.delta;
                    l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${u}px`)
                }),
                onSwipeCancel: A(t.onSwipeCancel, l => {
                    l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: A(t.onSwipeEnd, l => {
                    let {
                        x: d,
                        y: u
                    } = l.detail.delta;
                    l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${u}px`), c(!1)
                })
            })
        })
    });
ey.displayName = ma;
var [rT, nT] = Kv(ma, {
    onClose() {}
}), aT = le.forwardRef((t, e) => {
    let {
        __scopeToast: o,
        type: r = "foreground",
        duration: n,
        open: a,
        onClose: s,
        onEscapeKeyDown: i,
        onPause: c,
        onResume: l,
        onSwipeStart: d,
        onSwipeMove: u,
        onSwipeCancel: f,
        onSwipeEnd: p,
        ...g
    } = t, m = oi(ma, o), [h, v] = le.useState(null), _ = X(e, P => v(P)), y = le.useRef(null), x = le.useRef(null), b = n || m.duration, C = le.useRef(0), R = le.useRef(b), S = le.useRef(0), {
        onToastAdd: E,
        onToastRemove: D
    } = m, N = Ye(() => {
        h?.contains(document.activeElement) && m.viewport?.focus(), s()
    }), O = le.useCallback(P => {
        !P || P === 1 / 0 || (window.clearTimeout(S.current), C.current = new Date().getTime(), S.current = window.setTimeout(N, P))
    }, [N]);
    le.useEffect(() => {
        let P = m.viewport;
        if (P) {
            let B = () => {
                    O(R.current), l?.()
                },
                k = () => {
                    let G = new Date().getTime() - C.current;
                    R.current = R.current - G, window.clearTimeout(S.current), c?.()
                };
            return P.addEventListener(El, k), P.addEventListener(Dl, B), () => {
                P.removeEventListener(El, k), P.removeEventListener(Dl, B)
            }
        }
    }, [m.viewport, b, c, l, O]), le.useEffect(() => {
        a && !m.isClosePausedRef.current && O(b)
    }, [a, b, m.isClosePausedRef, O]), le.useEffect(() => (E(), () => D()), [E, D]);
    let F = le.useMemo(() => h ? iy(h) : null, [h]);
    return m.viewport ? (0, Re.jsxs)(Re.Fragment, {
        children: [F && (0, Re.jsx)(sT, {
            __scopeToast: o,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: F
        }), (0, Re.jsx)(rT, {
            scope: o,
            onClose: N,
            children: $v.createPortal((0, Re.jsx)(Pl.ItemSlot, {
                scope: o,
                children: (0, Re.jsx)(qu, {
                    asChild: !0,
                    onEscapeKeyDown: A(i, () => {
                        m.isFocusedToastEscapeKeyDownRef.current || N(), m.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: (0, Re.jsx)(z.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": a ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...g,
                        ref: _,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...t.style
                        },
                        onKeyDown: A(t.onKeyDown, P => {
                            P.key === "Escape" && (i?.(P.nativeEvent), P.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, N()))
                        }),
                        onPointerDown: A(t.onPointerDown, P => {
                            P.button === 0 && (y.current = {
                                x: P.clientX,
                                y: P.clientY
                            })
                        }),
                        onPointerMove: A(t.onPointerMove, P => {
                            if (!y.current) return;
                            let B = P.clientX - y.current.x,
                                k = P.clientY - y.current.y,
                                G = Boolean(x.current),
                                H = ["left", "right"].includes(m.swipeDirection),
                                L = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                                re = H ? L(0, B) : 0,
                                ne = H ? 0 : L(0, k),
                                ue = P.pointerType === "touch" ? 10 : 2,
                                de = {
                                    x: re,
                                    y: ne
                                },
                                pe = {
                                    originalEvent: P,
                                    delta: de
                                };
                            G ? (x.current = de, ti(eT, u, pe, {
                                discrete: !1
                            })) : qv(de, m.swipeDirection, ue) ? (x.current = de, ti(J0, d, pe, {
                                discrete: !1
                            }), P.target.setPointerCapture(P.pointerId)) : (Math.abs(B) > ue || Math.abs(k) > ue) && (y.current = null)
                        }),
                        onPointerUp: A(t.onPointerUp, P => {
                            let B = x.current,
                                k = P.target;
                            if (k.hasPointerCapture(P.pointerId) && k.releasePointerCapture(P.pointerId), x.current = null, y.current = null, B) {
                                let G = P.currentTarget,
                                    H = {
                                        originalEvent: P,
                                        delta: B
                                    };
                                qv(B, m.swipeDirection, m.swipeThreshold) ? ti(oT, p, H, {
                                    discrete: !0
                                }) : ti(tT, f, H, {
                                    discrete: !0
                                }), G.addEventListener("click", L => L.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), m.viewport)
        })]
    }) : null
}), sT = t => {
    let {
        __scopeToast: e,
        children: o,
        ...r
    } = t, n = oi(ma, e), [a, s] = le.useState(!1), [i, c] = le.useState(!1);
    return lT(() => s(!0)), le.useEffect(() => {
        let l = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(l)
    }, []), i ? null : (0, Re.jsx)(Ht, {
        asChild: !0,
        children: (0, Re.jsx)(zn, {
            ...r,
            children: a && (0, Re.jsxs)(Re.Fragment, {
                children: [n.label, " ", o]
            })
        })
    })
}, iT = "ToastTitle", ty = le.forwardRef((t, e) => {
    let {
        __scopeToast: o,
        ...r
    } = t;
    return (0, Re.jsx)(z.div, {
        ...r,
        ref: e
    })
});
ty.displayName = iT;
var cT = "ToastDescription",
    oy = le.forwardRef((t, e) => {
        let {
            __scopeToast: o,
            ...r
        } = t;
        return (0, Re.jsx)(z.div, {
            ...r,
            ref: e
        })
    });
oy.displayName = cT;
var ry = "ToastAction",
    ny = le.forwardRef((t, e) => {
        let {
            altText: o,
            ...r
        } = t;
        return o.trim() ? (0, Re.jsx)(sy, {
            altText: o,
            asChild: !0,
            children: (0, Re.jsx)(Ol, {
                ...r,
                ref: e
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${ry}\`. Expected non-empty \`string\`.`), null)
    });
ny.displayName = ry;
var ay = "ToastClose",
    Ol = le.forwardRef((t, e) => {
        let {
            __scopeToast: o,
            ...r
        } = t, n = nT(ay, o);
        return (0, Re.jsx)(sy, {
            asChild: !0,
            children: (0, Re.jsx)(z.button, {
                type: "button",
                ...r,
                ref: e,
                onClick: A(t.onClick, n.onClose)
            })
        })
    });
Ol.displayName = ay;
var sy = le.forwardRef((t, e) => {
    let {
        __scopeToast: o,
        altText: r,
        ...n
    } = t;
    return (0, Re.jsx)(z.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...n,
        ref: e
    })
});

function iy(t) {
    let e = [];
    return Array.from(t.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && e.push(r.textContent), uT(r)) {
            let n = r.ariaHidden || r.hidden || r.style.display === "none",
                a = r.dataset.radixToastAnnounceExclude === "";
            if (!n)
                if (a) {
                    let s = r.dataset.radixToastAnnounceAlt;
                    s && e.push(s)
                } else e.push(...iy(r))
        }
    }), e
}

function ti(t, e, o, {
    discrete: r
}) {
    let n = o.originalEvent.currentTarget,
        a = new CustomEvent(t, {
            bubbles: !0,
            cancelable: !0,
            detail: o
        });
    e && n.addEventListener(t, e, {
        once: !0
    }), r ? rn(n, a) : n.dispatchEvent(a)
}
var qv = (t, e, o = 0) => {
    let r = Math.abs(t.x),
        n = Math.abs(t.y),
        a = r > n;
    return e === "left" || e === "right" ? a && r > o : !a && n > o
};

function lT(t = () => {}) {
    let e = Ye(t);
    Le(() => {
        let o = 0,
            r = 0;
        return o = window.requestAnimationFrame(() => r = window.requestAnimationFrame(e)), () => {
            window.cancelAnimationFrame(o), window.cancelAnimationFrame(r)
        }
    }, [e])
}

function uT(t) {
    return t.nodeType === t.ELEMENT_NODE
}

function dT(t) {
    let e = [],
        o = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                let n = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || n ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; o.nextNode();) e.push(o.currentNode);
    return e
}

function Tl(t) {
    let e = document.activeElement;
    return t.some(o => o === e ? !0 : (o.focus(), document.activeElement !== e))
}
var cy = Xv,
    ly = Qv,
    uy = ey,
    dy = ty,
    fy = oy,
    my = ny,
    py = Ol;
var ke = w(M(), 1);
var Ne = w(W(), 1),
    ni = "Dialog",
    [gy, g9] = Se(ni),
    [fT, ao] = gy(ni),
    ai = t => {
        let {
            __scopeDialog: e,
            children: o,
            open: r,
            defaultOpen: n,
            onOpenChange: a,
            modal: s = !0
        } = t, i = ke.useRef(null), c = ke.useRef(null), [l, d] = He({
            prop: r,
            defaultProp: n ?? !1,
            onChange: a,
            caller: ni
        });
        return (0, Ne.jsx)(fT, {
            scope: e,
            triggerRef: i,
            contentRef: c,
            contentId: $e(),
            titleId: $e(),
            descriptionId: $e(),
            open: l,
            onOpenChange: d,
            onOpenToggle: ke.useCallback(() => d(u => !u), [d]),
            modal: s,
            children: o
        })
    };
ai.displayName = ni;
var vy = "DialogTrigger",
    yy = ke.forwardRef((t, e) => {
        let {
            __scopeDialog: o,
            ...r
        } = t, n = ao(vy, o), a = X(e, n.triggerRef);
        return (0, Ne.jsx)(z.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": n.open,
            "aria-controls": n.contentId,
            "data-state": Al(n.open),
            ...r,
            ref: a,
            onClick: A(t.onClick, n.onOpenToggle)
        })
    });
yy.displayName = vy;
var Il = "DialogPortal",
    [mT, _y] = gy(Il, {
        forceMount: void 0
    }),
    wy = t => {
        let {
            __scopeDialog: e,
            forceMount: o,
            children: r,
            container: n
        } = t, a = ao(Il, e);
        return (0, Ne.jsx)(mT, {
            scope: e,
            forceMount: o,
            children: ke.Children.map(r, s => (0, Ne.jsx)(je, {
                present: o || a.open,
                children: (0, Ne.jsx)(Ht, {
                    asChild: !0,
                    container: n,
                    children: s
                })
            }))
        })
    };
wy.displayName = Il;
var ri = "DialogOverlay",
    by = ke.forwardRef((t, e) => {
        let o = _y(ri, t.__scopeDialog),
            {
                forceMount: r = o.forceMount,
                ...n
            } = t,
            a = ao(ri, t.__scopeDialog);
        return a.modal ? (0, Ne.jsx)(je, {
            present: r || a.open,
            children: (0, Ne.jsx)(hT, {
                ...n,
                ref: e
            })
        }) : null
    });
by.displayName = ri;
var pT = Ft("DialogOverlay.RemoveScroll"),
    hT = ke.forwardRef((t, e) => {
        let {
            __scopeDialog: o,
            ...r
        } = t, n = ao(ri, o);
        return (0, Ne.jsx)(Mo, {
            as: pT,
            allowPinchZoom: !0,
            shards: [n.contentRef],
            children: (0, Ne.jsx)(z.div, {
                "data-state": Al(n.open),
                ...r,
                ref: e,
                style: {
                    pointerEvents: "auto",
                    ...r.style
                }
            })
        })
    }),
    Lr = "DialogContent",
    xy = ke.forwardRef((t, e) => {
        let o = _y(Lr, t.__scopeDialog),
            {
                forceMount: r = o.forceMount,
                ...n
            } = t,
            a = ao(Lr, t.__scopeDialog);
        return (0, Ne.jsx)(je, {
            present: r || a.open,
            children: a.modal ? (0, Ne.jsx)(gT, {
                ...n,
                ref: e
            }) : (0, Ne.jsx)(vT, {
                ...n,
                ref: e
            })
        })
    });
xy.displayName = Lr;
var gT = ke.forwardRef((t, e) => {
        let o = ao(Lr, t.__scopeDialog),
            r = ke.useRef(null),
            n = X(e, o.contentRef, r);
        return ke.useEffect(() => {
            let a = r.current;
            if (a) return rr(a)
        }, []), (0, Ne.jsx)(Cy, {
            ...t,
            ref: n,
            trapFocus: o.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: A(t.onCloseAutoFocus, a => {
                a.preventDefault(), o.triggerRef.current?.focus()
            }),
            onPointerDownOutside: A(t.onPointerDownOutside, a => {
                let s = a.detail.originalEvent,
                    i = s.button === 0 && s.ctrlKey === !0;
                (s.button === 2 || i) && a.preventDefault()
            }),
            onFocusOutside: A(t.onFocusOutside, a => a.preventDefault())
        })
    }),
    vT = ke.forwardRef((t, e) => {
        let o = ao(Lr, t.__scopeDialog),
            r = ke.useRef(!1),
            n = ke.useRef(!1);
        return (0, Ne.jsx)(Cy, {
            ...t,
            ref: e,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: a => {
                t.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || o.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, n.current = !1
            },
            onInteractOutside: a => {
                t.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (n.current = !0));
                let s = a.target;
                o.triggerRef.current?.contains(s) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && n.current && a.preventDefault()
            }
        })
    }),
    Cy = ke.forwardRef((t, e) => {
        let {
            __scopeDialog: o,
            trapFocus: r,
            onOpenAutoFocus: n,
            onCloseAutoFocus: a,
            ...s
        } = t, i = ao(Lr, o), c = ke.useRef(null), l = X(e, c);
        return Xo(), (0, Ne.jsxs)(Ne.Fragment, {
            children: [(0, Ne.jsx)(So, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: n,
                onUnmountAutoFocus: a,
                children: (0, Ne.jsx)(Vt, {
                    role: "dialog",
                    id: i.contentId,
                    "aria-describedby": i.descriptionId,
                    "aria-labelledby": i.titleId,
                    "data-state": Al(i.open),
                    ...s,
                    ref: l,
                    onDismiss: () => i.onOpenChange(!1)
                })
            }), (0, Ne.jsxs)(Ne.Fragment, {
                children: [(0, Ne.jsx)(yT, {
                    titleId: i.titleId
                }), (0, Ne.jsx)(wT, {
                    contentRef: c,
                    descriptionId: i.descriptionId
                })]
            })]
        })
    }),
    kl = "DialogTitle",
    Ry = ke.forwardRef((t, e) => {
        let {
            __scopeDialog: o,
            ...r
        } = t, n = ao(kl, o);
        return (0, Ne.jsx)(z.h2, {
            id: n.titleId,
            ...r,
            ref: e
        })
    });
Ry.displayName = kl;
var Sy = "DialogDescription",
    Ty = ke.forwardRef((t, e) => {
        let {
            __scopeDialog: o,
            ...r
        } = t, n = ao(Sy, o);
        return (0, Ne.jsx)(z.p, {
            id: n.descriptionId,
            ...r,
            ref: e
        })
    });
Ty.displayName = Sy;
var Ey = "DialogClose",
    Dy = ke.forwardRef((t, e) => {
        let {
            __scopeDialog: o,
            ...r
        } = t, n = ao(Ey, o);
        return (0, Ne.jsx)(z.button, {
            type: "button",
            ...r,
            ref: e,
            onClick: A(t.onClick, () => n.onOpenChange(!1))
        })
    });
Dy.displayName = Ey;

function Al(t) {
    return t ? "open" : "closed"
}
var Ny = "DialogTitleWarning",
    [v9, My] = Ou(Ny, {
        contentName: Lr,
        titleName: kl,
        docsSlug: "dialog"
    }),
    yT = ({
        titleId: t
    }) => {
        let e = My(Ny),
            o = `\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;
        return ke.useEffect(() => {
            t && (document.getElementById(t) || console.error(o))
        }, [o, t]), null
    },
    _T = "DialogDescriptionWarning",
    wT = ({
        contentRef: t,
        descriptionId: e
    }) => {
        let r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${My(_T).contentName}}.`;
        return ke.useEffect(() => {
            let n = t.current?.getAttribute("aria-describedby");
            e && n && (document.getElementById(e) || console.warn(r))
        }, [r, t, e]), null
    },
    Py = ai,
    si = yy,
    ii = wy,
    ci = by,
    li = xy,
    ui = Ry,
    di = Ty,
    fi = Dy;
var mi = w(M(), 1),
    Iy = (0, mi.createContext)({
        isExpanded: !1,
        setIsExpanded: () => {}
    }),
    Fr = () => (0, mi.useContext)(Iy);
var ky = w(V(), 1),
    Ay = w(M(), 1);

function Ly(t, e) {
    let o = (0, ky.c)(5),
        [r, n] = (0, Ay.useState)(e),
        a = t !== void 0,
        s = a ? t : r,
        i;
    o[0] !== a ? (i = d => {
        a || n(d)
    }, o[0] = a, o[1] = i) : i = o[1];
    let c = i,
        l;
    return o[2] !== c || o[3] !== s ? (l = [s, c], o[2] = c, o[3] = s, o[4] = l) : l = o[4], l
}
var Fy = "Select items",
    By = "No options found",
    Wy = "Filter options";
var Hy = w(W(), 1),
    jy = w(V(), 1);

function Ll(t) {
    let e = (0, jy.c)(2),
        o;
    return e[0] !== t ? (o = (0, Hy.jsx)("tbody", {
        ...t
    }), e[0] = t, e[1] = o) : o = e[1], o
}
var zy = w(W(), 1),
    Uy = w(V(), 1);
var P9 = w(M(), 1);
var bT = "_tableRoot_1xdd9_2",
    xT = "_tableHeader_1xdd9_6",
    CT = "_tableHeaderCell_1xdd9_15",
    RT = "_tableFooter_1xdd9_19",
    ST = "_tableRow_1xdd9_20",
    TT = "_tableCell_1xdd9_32",
    It = {
        tableRoot: bT,
        tableHeader: xT,
        tableHeaderCell: CT,
        tableFooter: RT,
        tableRow: ST,
        tableCell: TT
    };

function Fl(t) {
    let e = (0, Uy.c)(8),
        o, r;
    e[0] !== t ? ({
        className: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let n;
    e[3] !== o ? (n = T(o, It.tableCell), e[3] = o, e[4] = n) : n = e[4];
    let a;
    return e[5] !== r || e[6] !== n ? (a = (0, zy.jsx)("td", {
        className: n,
        ...r
    }), e[5] = r, e[6] = n, e[7] = a) : a = e[7], a
}
var Gy = w(W(), 1),
    Yy = w(V(), 1);
var A9 = w(M(), 1);

function Vy(t) {
    let e = (0, Yy.c)(10),
        o, r, n;
    e[0] !== t ? ({
        className: r,
        children: o,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n) : (o = e[1], r = e[2], n = e[3]);
    let a;
    e[4] !== r ? (a = T(r), e[4] = r, e[5] = a) : a = e[5];
    let s;
    return e[6] !== o || e[7] !== n || e[8] !== a ? (s = (0, Gy.jsx)("tfoot", {
        className: a,
        ...n,
        children: o
    }), e[6] = o, e[7] = n, e[8] = a, e[9] = s) : s = e[9], s
}
var qy = w(W(), 1),
    $y = w(V(), 1);
var B9 = w(M(), 1);

function Ky(t) {
    let e = (0, $y.c)(10),
        o, r, n;
    e[0] !== t ? ({
        className: r,
        children: o,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n) : (o = e[1], r = e[2], n = e[3]);
    let a;
    e[4] !== r ? (a = T(r, It.tableCell), e[4] = r, e[5] = a) : a = e[5];
    let s;
    return e[6] !== o || e[7] !== n || e[8] !== a ? (s = (0, qy.jsx)("td", {
        className: a,
        ...n,
        children: o
    }), e[6] = o, e[7] = n, e[8] = a, e[9] = s) : s = e[9], s
}
var Xy = w(W(), 1),
    Zy = w(V(), 1);
var z9 = w(M(), 1);

function Qy(t) {
    let e = (0, Zy.c)(10),
        o, r, n;
    e[0] !== t ? ({
        className: r,
        children: o,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n) : (o = e[1], r = e[2], n = e[3]);
    let a;
    e[4] !== r ? (a = T(r, It.tableFooter), e[4] = r, e[5] = a) : a = e[5];
    let s;
    return e[6] !== o || e[7] !== n || e[8] !== a ? (s = (0, Xy.jsx)("tr", {
        className: a,
        ...n,
        children: o
    }), e[6] = o, e[7] = n, e[8] = a, e[9] = s) : s = e[9], s
}
var Jy = w(W(), 1),
    e_ = w(V(), 1);
var V9 = w(M(), 1);

function Bl(t) {
    let e = (0, e_.c)(8),
        o, r;
    e[0] !== t ? ({
        className: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let n;
    e[3] !== o ? (n = T(o, It.tableHeader), e[3] = o, e[4] = n) : n = e[4];
    let a;
    return e[5] !== r || e[6] !== n ? (a = (0, Jy.jsx)("thead", {
        className: n,
        ...r
    }), e[5] = r, e[6] = n, e[7] = a) : a = e[7], a
}
var t_ = w(W(), 1),
    o_ = w(V(), 1);
var X9 = w(M(), 1);

function Wl(t) {
    let e = (0, o_.c)(8),
        o, r;
    e[0] !== t ? ({
        className: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let n;
    e[3] !== o ? (n = T(o, It.tableHeaderCell), e[3] = o, e[4] = n) : n = e[4];
    let a;
    return e[5] !== r || e[6] !== n ? (a = (0, t_.jsx)("th", {
        className: n,
        ...r
    }), e[5] = r, e[6] = n, e[7] = a) : a = e[7], a
}
var r_ = w(W(), 1),
    n_ = w(V(), 1);

function Hl(t) {
    let e = (0, n_.c)(2),
        o;
    return e[0] !== t ? (o = (0, r_.jsx)("tr", {
        ...t
    }), e[0] = t, e[1] = o) : o = e[1], o
}
var a_ = w(W(), 1),
    s_ = w(V(), 1);
var tH = w(M(), 1);

function jl(t) {
    let e = (0, s_.c)(8),
        o, r;
    e[0] !== t ? ({
        className: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let n;
    e[3] !== o ? (n = T(o, It.tableRoot), e[3] = o, e[4] = n) : n = e[4];
    let a;
    return e[5] !== r || e[6] !== n ? (a = (0, a_.jsx)("table", {
        className: n,
        ...r
    }), e[5] = r, e[6] = n, e[7] = a) : a = e[7], a
}
var i_ = w(W(), 1),
    c_ = w(V(), 1);
var aH = w(M(), 1);

function zl(t) {
    let e = (0, c_.c)(8),
        o, r;
    e[0] !== t ? ({
        className: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let n;
    e[3] !== o ? (n = T(It.tableRow, o), e[3] = o, e[4] = n) : n = e[4];
    let a;
    return e[5] !== r || e[6] !== n ? (a = (0, i_.jsx)("tr", {
        ...r,
        className: n
    }), e[5] = r, e[6] = n, e[7] = a) : a = e[7], a
}
var Dn = (t => (t.LEFT = "left", t.CENTER = "center", t.RIGHT = "right", t))(Dn || {});

function Ul(t, e) {
    return typeof t == "function" ? t(e) : t
}
var Br = w(W(), 1),
    d_ = w(V(), 1),
    f_ = w(M(), 1);
var ET = "_rippleContainer_1q9c1_2",
    Gl = {
        rippleContainer: ET
    };

function l_(t, e) {
    if (typeof window > "u") return;
    let o = t.currentTarget;
    e.classList.remove(Gl.rippleContainer), window.requestAnimationFrame(() => {
        let r = Math.max(o.clientWidth, o.clientHeight),
            n = r / 2,
            a = o.getBoundingClientRect(),
            s = {
                height: e.style.height,
                width: e.style.width,
                left: e.style.left,
                top: e.style.top
            };
        e.style.height = `${r}px`, e.style.width = `${r}px`, e.style.left = `${t.clientX-a.left-n}px`, e.style.top = `${t.clientY-a.top-n}px`, e.classList.add(Gl.rippleContainer), window.requestAnimationFrame(() => {
            Promise.allSettled(e.getAnimations().map(({
                finished: i
            }) => i)).then(() => {
                for (let i in s) {
                    let c = i;
                    e.style[c] = s[c]
                }
                e.classList.remove(Gl.rippleContainer)
            })
        })
    })
}
var DT = "_clickTarget_kr3m2_2",
    NT = "_rippleTarget_kr3m2_9",
    u_ = {
        clickTarget: DT,
        rippleTarget: NT
    };

function m_(t) {
    let e = (0, d_.c)(7),
        {
            disabled: o
        } = t,
        r = (0, f_.useRef)(null),
        n;
    e[0] !== o ? (n = l => {
        r.current && !o && l_(l, r.current)
    }, e[0] = o, e[1] = n) : n = e[1];
    let a = n,
        s;
    e[2] !== a ? (s = (0, Br.jsx)("span", {
        className: u_.clickTarget,
        onClick: a,
        "aria-hidden": "true"
    }), e[2] = a, e[3] = s) : s = e[3];
    let i;
    e[4] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, Br.jsx)("span", {
        ref: r,
        className: u_.rippleTarget,
        "aria-hidden": "true"
    }), e[4] = i) : i = e[4];
    let c;
    return e[5] !== s ? (c = (0, Br.jsxs)(Br.Fragment, {
        children: [s, i]
    }), e[5] = s, e[6] = c) : c = e[6], c
}
var MT = "_btn_1je2v_2",
    PT = "_wrapper_1je2v_6",
    OT = "_loading_1je2v_12",
    IT = "_spin_1je2v_1",
    kT = "_icon_1je2v_33",
    Wr = {
        btn: MT,
        wrapper: PT,
        loading: OT,
        spin: IT,
        "size-sm": "_size-sm_1je2v_28",
        icon: kT,
        "size-md": "_size-md_1je2v_39",
        "size-lg": "_size-lg_1je2v_48",
        "variant-default": "_variant-default_1je2v_62",
        "variant-secondary": "_variant-secondary_1je2v_63",
        "variant-primary": "_variant-primary_1je2v_64",
        "variant-alert": "_variant-alert_1je2v_65",
        "variant-tertiary": "_variant-tertiary_1je2v_74",
        "variant-ghost": "_variant-ghost_1je2v_75"
    },
    AT = "_btn_1n6b6_2",
    LT = "_wrapper_1n6b6_3",
    FT = "_loading_1n6b6_63",
    pi = {
        btn: AT,
        wrapper: LT,
        loading: FT,
        "variant-primary": "_variant-primary_1n6b6_82",
        "variant-secondary": "_variant-secondary_1n6b6_92",
        "variant-ghost": "_variant-ghost_1n6b6_99",
        "variant-tertiary": "_variant-tertiary_1n6b6_108",
        "variant-alert": "_variant-alert_1n6b6_118"
    },
    h_ = (0, Me.forwardRef)(function(t, e) {
        let o = (0, ct.c)(13),
            r;
        if (o[0] !== e || o[1] !== t) {
            let {
                children: n,
                className: a,
                disabled: s,
                isLoading: i,
                onClick: c,
                variant: l,
                renderChild: d,
                ...u
            } = t, f = l === void 0 ? Ge.PRIMARY : l, p = s ? [Ge.TERTIARY, Ge.GHOST].includes(f) ? f : Ge.DEFAULT : f, g;
            o[3] !== i || o[4] !== c ? (g = b => {
                i ? (b.stopPropagation(), b.preventDefault()) : c?.(b)
            }, o[3] = i, o[4] = c, o[5] = g) : g = o[5];
            let m = g,
                h = i || s,
                v;
            o[6] !== h ? (v = (0, I.jsx)(m_, {
                disabled: h
            }), o[6] = h, o[7] = v) : v = o[7];
            let _;
            o[8] !== n ? (_ = (0, I.jsx)("span", {
                className: pi.wrapper,
                role: "presentation",
                children: n
            }), o[8] = n, o[9] = _) : _ = o[9];
            let y;
            o[10] !== v || o[11] !== _ ? (y = (0, I.jsxs)(I.Fragment, {
                children: [v, _]
            }), o[10] = v, o[11] = _, o[12] = y) : y = o[12];
            let x = {
                ...u,
                className: T(pi.btn, i && pi.loading, pi[`variant-${p}`], a),
                disabled: s,
                "aria-busy": i,
                onClick: m,
                children: y
            };
            r = d ? (0, Me.cloneElement)(d, {
                ...d.props,
                ...x
            }) : (0, I.jsx)("button", {
                ...x,
                ref: e
            }), o[0] = e, o[1] = t, o[2] = r
        } else r = o[2];
        return r
    }),
    yi = (t => (t.SMALL = "sm", t.MEDIUM = "md", t.LARGE = "lg", t))(yi || {}),
    jr = (0, Me.forwardRef)(function(t, e) {
        let o = (0, ct.c)(45),
            r, n, a, s, i, c, l, d, u, f, p, g;
        o[0] !== t ? ({
            asChild: r,
            children: n,
            className: a,
            disabled: s,
            iconLeft: i,
            iconLeftMode: c,
            iconRight: d,
            iconRightMode: l,
            isLoading: u,
            size: p,
            variant: g,
            ...f
        } = t, o[0] = t, o[1] = r, o[2] = n, o[3] = a, o[4] = s, o[5] = i, o[6] = c, o[7] = l, o[8] = d, o[9] = u, o[10] = f, o[11] = p, o[12] = g) : (r = o[1], n = o[2], a = o[3], s = o[4], i = o[5], c = o[6], l = o[7], d = o[8], u = o[9], f = o[10], p = o[11], g = o[12]);
        let m = p === void 0 ? "md" : p,
            h = g === void 0 ? Ge.PRIMARY : g,
            v = d,
            _ = l;
        u && (v = "loader-4", _ = "fill");
        let y = s ? [Ge.TERTIARY, Ge.GHOST].includes(h) ? h : Ge.DEFAULT : h,
            x;
        o[13] !== r || o[14] !== n ? (x = r && n ? Zc(n) : void 0, o[13] = r, o[14] = n, o[15] = x) : x = o[15];
        let b = x,
            C = Wr[`size-${m}`],
            R = Wr[`variant-${y}`],
            S;
        o[16] !== a || o[17] !== C || o[18] !== R ? (S = T(Wr.btn, C, R, a), o[16] = a, o[17] = C, o[18] = R, o[19] = S) : S = o[19];
        let E = b || void 0,
            D;
        o[20] !== i || o[21] !== c || o[22] !== u || o[23] !== m ? (D = i && !u && (0, I.jsx)(Z, {
            mode: c,
            size: m,
            className: Wr.icon,
            name: i
        }), o[20] = i, o[21] = c, o[22] = u, o[23] = m, o[24] = D) : D = o[24];
        let N;
        o[25] !== r || o[26] !== b?.props || o[27] !== n ? (N = n && (0, I.jsx)("span", {
            className: Wr.wrapper,
            role: "presentation",
            children: r ? b?.props.children : n
        }), o[25] = r, o[26] = b?.props, o[27] = n, o[28] = N) : N = o[28];
        let O;
        o[29] !== v || o[30] !== _ || o[31] !== u || o[32] !== m ? (O = v && (0, I.jsx)(Z, {
            mode: _,
            size: m,
            className: T(Wr.icon, u && Wr.loading),
            name: v
        }), o[29] = v, o[30] = _, o[31] = u, o[32] = m, o[33] = O) : O = o[33];
        let F;
        return o[34] !== s || o[35] !== u || o[36] !== f || o[37] !== e || o[38] !== O || o[39] !== S || o[40] !== E || o[41] !== D || o[42] !== N || o[43] !== y ? (F = (0, I.jsxs)(h_, {
            ...f,
            ref: e,
            isLoading: u,
            className: S,
            disabled: s,
            variant: y,
            renderChild: E,
            children: [D, N, O]
        }), o[34] = s, o[35] = u, o[36] = f, o[37] = e, o[38] = O, o[39] = S, o[40] = E, o[41] = D, o[42] = N, o[43] = y, o[44] = F) : F = o[44], F
    }),
    BT = "_btn_1ihqj_2",
    WT = "_loading_1ihqj_13",
    HT = "_spin_1ihqj_1",
    pa = {
        btn: BT,
        loading: WT,
        spin: HT,
        "size-sm": "_size-sm_1ihqj_28",
        "size-md": "_size-md_1ihqj_32",
        "size-lg": "_size-lg_1ihqj_36",
        "size-xl": "_size-xl_1ihqj_40",
        "shape-round": "_shape-round_1ihqj_46",
        "shape-square": "_shape-square_1ihqj_51"
    },
    Mn = (t => (t.SMALL = "sm", t.MEDIUM = "md", t.LARGE = "lg", t.EXTRA_LARGE = "xl", t))(Mn || {}),
    g_ = (t => (t.ROUND = "round", t.SQUARE = "square", t))(g_ || {}),
    zr = (0, Me.forwardRef)(function(t, e) {
        let o = (0, ct.c)(35),
            r, n, a, s, i, c, l, d, u;
        if (o[0] !== t) {
            let {
                children: N,
                asChild: O,
                className: F,
                disabled: P,
                icon: B,
                iconMode: k,
                iconName: G,
                isLoading: H,
                shape: L,
                size: re,
                "aria-label": ne,
                ...ue
            } = t;
            a = N, n = O, s = F, i = P, l = H, d = L, u = re, r = ne, c = ue, o[0] = t, o[1] = r, o[2] = n, o[3] = a, o[4] = s, o[5] = i, o[6] = c, o[7] = l, o[8] = d, o[9] = u
        } else r = o[1], n = o[2], a = o[3], s = o[4], i = o[5], c = o[6], l = o[7], d = o[8], u = o[9];
        let f = l === void 0 ? !1 : l,
            p = d === void 0 ? "round" : d,
            g = u === void 0 ? "md" : u,
            m;
        o[10] !== f || o[11] !== t ? (m = jT(f, t), o[10] = f, o[11] = t, o[12] = m) : m = o[12];
        let h = m,
            v;
        o[13] !== n || o[14] !== a ? (v = n && a ? Zc(a) : void 0, o[13] = n, o[14] = a, o[15] = v) : v = o[15];
        let _ = v,
            y = pa[`size-${g}`],
            x = pa[`shape-${p}`],
            b;
        o[16] !== s || o[17] !== y || o[18] !== x ? (b = T(pa.btn, y, x, s), o[16] = s, o[17] = y, o[18] = x, o[19] = b) : b = o[19];
        let C = _ || void 0,
            R = f && pa.loading,
            S;
        o[20] !== R ? (S = T(pa.icon, R), o[20] = R, o[21] = S) : S = o[21];
        let E;
        o[22] !== h || o[23] !== g || o[24] !== S ? (E = (0, I.jsx)(Z, {
            className: S,
            size: g,
            ...h
        }), o[22] = h, o[23] = g, o[24] = S, o[25] = E) : E = o[25];
        let D;
        return o[26] !== r || o[27] !== i || o[28] !== f || o[29] !== e || o[30] !== c || o[31] !== E || o[32] !== b || o[33] !== C ? (D = (0, I.jsx)(h_, {
            ...c,
            ref: e,
            className: b,
            disabled: i,
            isLoading: f,
            renderChild: C,
            "aria-label": r,
            children: E
        }), o[26] = r, o[27] = i, o[28] = f, o[29] = e, o[30] = c, o[31] = E, o[32] = b, o[33] = C, o[34] = D) : D = o[34], D
    });

function jT(t, e) {
    return t ? {
        icon: "loader-4-fill"
    } : "icon" in e && e.icon !== void 0 ? {
        icon: e.icon
    } : e.iconName && e.iconMode ? {
        name: e.iconName,
        mode: e.iconMode
    } : {
        icon: "loader-4-fill"
    }
}
var zT = (0, Me.createContext)({
    locale: null
});

function ha() {
    let t = (0, Me.useContext)(zT),
        e = sa();
    return t.locale ?? e
}
var v_ = t => {
    let e = (0, ct.c)(7),
        o = ha(),
        r;
    e[0] !== o ? (r = new Intl.NumberFormat(o), e[0] = o, e[1] = r) : r = e[1];
    let n = r,
        a;
    e: {
        if (typeof t == "bigint") {
            a = t;
            break e
        }
        if (typeof t == "string") try {
            let c;
            e[2] !== t ? (c = BigInt(t), e[2] = t, e[3] = c) : c = e[3], a = c;
            break e
        } catch {
            a = Number(t);
            break e
        }
        a = t
    }
    let s = a,
        i;
    return e[4] !== s || e[5] !== n ? (i = n.format(s), e[4] = s, e[5] = n, e[6] = i) : i = e[6], i
};

function _i(t) {
    let e = (0, ct.c)(2),
        {
            value: o
        } = t,
        r = v_(o),
        n;
    return e[0] !== r ? (n = (0, I.jsx)(I.Fragment, {
        children: r
    }), e[0] = r, e[1] = n) : n = e[1], n
}
var UT = "_switchTextContainer_1x641_3",
    GT = "_switchText_1x641_3",
    Yl = {
        switchTextContainer: UT,
        switchText: GT
    },
    YT = (0, Me.forwardRef)(function(t, e) {
        let o = (0, ct.c)(48),
            {
                leftText: r,
                rightText: n,
                checked: a,
                initialState: s,
                onToggle: i,
                leftClassName: c,
                rightClassName: l,
                disabled: d,
                isLoading: u,
                showLeftLoading: f,
                spinnerProps: p
            } = t,
            g = s === void 0 ? !0 : s,
            m = f === void 0 ? !1 : f,
            h;
        o[0] !== p ? (h = p === void 0 ? {
            size: cs.SMALL,
            variant: ls.DEFAULT
        } : p, o[0] = p, o[1] = h) : h = o[1];
        let v = h,
            [_, y] = (0, Me.useState)(a !== void 0 ? a : g),
            x = a !== void 0,
            b = x ? a : _,
            C;
        o[2] !== b || o[3] !== x || o[4] !== i ? (C = () => {
            x || y(VT), i?.(!b)
        }, o[2] = b, o[3] = x, o[4] = i, o[5] = C) : C = o[5];
        let R = C,
            S = b,
            E = !b,
            D;
        o[6] !== R ? (D = _e => {
            (_e.key === it.ARROW_LEFT || _e.key === it.ARROW_RIGHT || _e.key === it.SPACE || _e.key === it.ENTER) && (_e.preventDefault(), R())
        }, o[6] = R, o[7] = D) : D = o[7];
        let N = D,
            O;
        o[8] !== u || o[9] !== m || o[10] !== v ? (O = m && u && (0, I.jsx)(us, {
            ...v
        }), o[8] = u, o[9] = m, o[10] = v, o[11] = O) : O = o[11];
        let F = `Choose between ${r} and ${n}`,
            P = d && Yl.disabled,
            B;
        o[12] !== P ? (B = T(Yl.switchText, P), o[12] = P, o[13] = B) : B = o[13];
        let k;
        o[14] !== R || o[15] !== S ? (k = S ? qT : R, o[14] = R, o[15] = S, o[16] = k) : k = o[16];
        let G = d || u,
            H;
        o[17] !== S || o[18] !== c || o[19] !== r || o[20] !== k || o[21] !== G ? (H = (0, I.jsx)(jr, {
            role: "radio",
            type: "button",
            variant: Ge.GHOST,
            size: yi.SMALL,
            onClick: k,
            "aria-checked": S,
            "aria-label": r,
            className: c,
            disabled: G,
            tabIndex: -1,
            children: r
        }), o[17] = S, o[18] = c, o[19] = r, o[20] = k, o[21] = G, o[22] = H) : H = o[22];
        let L;
        o[23] !== R || o[24] !== E ? (L = E ? $T : R, o[23] = R, o[24] = E, o[25] = L) : L = o[25];
        let re = d || u,
            ne;
        o[26] !== E || o[27] !== l || o[28] !== n || o[29] !== L || o[30] !== re ? (ne = (0, I.jsx)(jr, {
            role: "radio",
            type: "button",
            variant: Ge.GHOST,
            size: yi.SMALL,
            onClick: L,
            "aria-checked": E,
            "aria-label": n,
            className: l,
            disabled: re,
            tabIndex: -1,
            children: n
        }), o[26] = E, o[27] = l, o[28] = n, o[29] = L, o[30] = re, o[31] = ne) : ne = o[31];
        let ue;
        o[32] !== N || o[33] !== e || o[34] !== B || o[35] !== H || o[36] !== ne || o[37] !== F ? (ue = (0, I.jsxs)("div", {
            role: "radiogroup",
            "aria-label": F,
            "aria-orientation": "horizontal",
            className: B,
            onKeyDown: N,
            ref: e,
            tabIndex: 0,
            children: [H, ne]
        }), o[32] = N, o[33] = e, o[34] = B, o[35] = H, o[36] = ne, o[37] = F, o[38] = ue) : ue = o[38];
        let de;
        o[39] !== u || o[40] !== m || o[41] !== v ? (de = !m && u && (0, I.jsx)(us, {
            ...v
        }), o[39] = u, o[40] = m, o[41] = v, o[42] = de) : de = o[42];
        let pe;
        return o[43] !== u || o[44] !== ue || o[45] !== de || o[46] !== O ? (pe = (0, I.jsxs)("div", {
            className: Yl.switchTextContainer,
            "aria-busy": u,
            children: [O, ue, de]
        }), o[43] = u, o[44] = ue, o[45] = de, o[46] = O, o[47] = pe) : pe = o[47], pe
    });

function VT(t) {
    return !t
}

function qT() {}

function $T() {}
var KT = "_formattedDate_1bk91_2",
    XT = "_formattedDateSingle_1bk91_8",
    ZT = "_formattedDateRange_1bk91_12",
    QT = "_formattedDatePlaceholder_1bk91_16",
    vi = {
        formattedDate: KT,
        formattedDateSingle: XT,
        formattedDateRange: ZT,
        formattedDatePlaceholder: QT
    },
    Vl = (t, e = "UTC", o = "en-US") => t.toLocaleDateString(o, {
        month: "short",
        day: "2-digit",
        year: "numeric",
        timeZone: e
    }),
    JT = t => t instanceof Date,
    eE = t => !!t && typeof t == "object" && t !== null && "from" in t && "to" in t;

function tE(t) {
    return Object.prototype.hasOwnProperty.call(t, "selected")
}

function hi(t) {
    let e = (0, ct.c)(5),
        {
            localeCode: o
        } = t,
        r = o === void 0 ? "en-US" : o,
        n;
    if (e[0] !== r) {
        let i = new Date(2024, 0, 15).toLocaleDateString(r, {
                month: "short",
                day: "2-digit",
                year: "numeric"
            }),
            c;
        e[2] === Symbol.for("react.memo_cache_sentinel") ? (c = /Jan(uary)?/i, e[2] = c) : c = e[2], n = i.replace(/2024/, "YYYY").replace(/24/, "YY").replace(/15/, "DD").replace(c, "MMM"), e[0] = r, e[1] = n
    } else n = e[1];
    let a = n,
        s;
    return e[3] !== a ? (s = (0, I.jsx)("span", {
        className: vi.formattedDatePlaceholder,
        children: a
    }), e[3] = a, e[4] = s) : s = e[4], s
}
var y_ = (0, Me.forwardRef)((t, e) => {
        let o = (0, ct.c)(31),
            r, n, a, s;
        o[0] !== t ? ({
            dayPickerProps: n,
            isLoading: a,
            isDisabled: s,
            ...r
        } = t, o[0] = t, o[1] = r, o[2] = n, o[3] = a, o[4] = s) : (r = o[1], n = o[2], a = o[3], s = o[4]);
        let i = a === void 0 ? !1 : a,
            c = s === void 0 ? !1 : s,
            {
                mode: l,
                locale: d
            } = n,
            u = l === void 0 ? "single" : l,
            f = tE(n) ? n.selected : void 0,
            p;
        e: {
            let y = d?.code ?? "en-US";
            if (u === "single") {
                let b = JT(f) ? f : void 0,
                    C;
                o[5] !== b || o[6] !== n.timeZone || o[7] !== y ? (C = b ? Vl(b, n.timeZone, y) : (0, I.jsx)(hi, {
                    localeCode: y
                }), o[5] = b, o[6] = n.timeZone, o[7] = y, o[8] = C) : C = o[8], p = C;
                break e
            }
            if (u === "range") {
                let b = eE(f) ? f : void 0,
                    C;
                o[9] !== y || o[10] !== b ? (C = b != null && b.from ? Vl(b.from, void 0, y) : (0, I.jsx)(hi, {
                    localeCode: y
                }), o[9] = y, o[10] = b, o[11] = C) : C = o[11];
                let R = C,
                    S;
                o[12] !== y || o[13] !== b ? (S = b != null && b.to ? Vl(b.to, void 0, y) : (0, I.jsx)(hi, {
                    localeCode: y
                }), o[12] = y, o[13] = b, o[14] = S) : S = o[14];
                let E = S,
                    D;
                o[15] !== R || o[16] !== E ? (D = (0, I.jsxs)(I.Fragment, {
                    children: [R, " \u2014 ", E]
                }), o[15] = R, o[16] = E, o[17] = D) : D = o[17], p = D;
                break e
            }
            let x;o[18] !== y ? (x = (0, I.jsx)(hi, {
                localeCode: y
            }), o[18] = y, o[19] = x) : x = o[19],
            p = x
        }
        let g = p,
            m = u === "single" ? vi.formattedDateSingle : vi.formattedDateRange,
            h;
        o[20] !== m ? (h = T(vi.formattedDate, m), o[20] = m, o[21] = h) : h = o[21];
        let v;
        o[22] !== g || o[23] !== h ? (v = (0, I.jsx)("span", {
            className: h,
            children: g
        }), o[22] = g, o[23] = h, o[24] = v) : v = o[24];
        let _;
        return o[25] !== r || o[26] !== c || o[27] !== i || o[28] !== e || o[29] !== v ? (_ = (0, I.jsx)(jr, {
            ...r,
            ref: e,
            variant: Ge.DEFAULT,
            iconLeft: "calendar-event",
            iconLeftMode: "line",
            iconRight: "arrow-down-s",
            iconRightMode: "line",
            isLoading: i,
            disabled: c,
            children: v
        }), o[25] = r, o[26] = c, o[27] = i, o[28] = e, o[29] = v, o[30] = _) : _ = o[30], _
    }),
    oE = "_message_qlqpe_2",
    rE = "_messageIconContainer_qlqpe_19",
    nE = "_messageIcon_qlqpe_19",
    aE = "_content_qlqpe_35",
    sE = "_title_qlqpe_44",
    iE = "_dismissButton_qlqpe_50",
    cE = "_actions_qlqpe_55",
    lE = "_success_qlqpe_88",
    uE = "_caution_qlqpe_95",
    dE = "_error_qlqpe_102",
    fE = "_info_qlqpe_109",
    mE = "_hint_qlqpe_116",
    Gt = {
        message: oE,
        messageIconContainer: rE,
        messageIcon: nE,
        content: aE,
        title: sE,
        dismissButton: iE,
        actions: cE,
        default: "_default_qlqpe_75",
        success: lE,
        caution: uE,
        error: dE,
        info: fE,
        hint: mE
    },
    Nn = (t => (t.DEFAULT = "DEFAULT", t.SUCCESS = "SUCCESS", t.CAUTION = "CAUTION", t.ERROR = "ERROR", t.INFO = "INFO", t.HINT = "HINT", t))(Nn || {}),
    p_ = {
        DEFAULT: {
            className: Gt.default
        },
        SUCCESS: {
            className: Gt.success,
            iconName: "checkbox-circle"
        },
        CAUTION: {
            className: Gt.caution,
            iconName: "error-warning"
        },
        ERROR: {
            className: Gt.error,
            iconName: "prohibited"
        },
        INFO: {
            className: Gt.info,
            iconName: "information"
        },
        HINT: {
            className: Gt.hint,
            iconName: "lightbulb"
        }
    };

function __(t) {
    let e = (0, ct.c)(22),
        {
            variant: o,
            title: r,
            onDismiss: n,
            closeComponent: a,
            actions: s,
            children: i
        } = t,
        c = o === void 0 ? "DEFAULT" : o,
        l, d;
    if (n || a) {
        let x;
        e[0] !== n ? (x = (0, I.jsx)(zr, {
            iconName: "close",
            iconMode: "line",
            size: Mn.SMALL,
            variant: Ge.GHOST,
            className: Gt.dismissButton,
            onClick: n,
            "aria-label": "Close"
        }), e[0] = n, e[1] = x) : x = e[1];
        let b = x,
            C;
        e[2] !== a || e[3] !== b ? (C = a ? (0, I.jsx)(a, {
            children: b
        }) : b, e[2] = a, e[3] = b, e[4] = C) : C = e[4], l = C
    }
    if (s) {
        let x;
        e[5] !== s ? (x = (0, I.jsx)("div", {
            className: Gt.actions,
            children: s
        }), e[5] = s, e[6] = x) : x = e[6], d = x
    }
    let u = p_[c].iconName,
        f = s && l ? d : null,
        p = l || d,
        g = p_[c],
        m;
    e[7] !== g.className ? (m = T(Gt.message, g.className), e[7] = g.className, e[8] = m) : m = e[8];
    let h;
    e[9] !== u ? (h = u && (0, I.jsx)("div", {
        className: Gt.messageIconContainer,
        children: (0, I.jsx)(Z, {
            name: u,
            mode: "line",
            size: "xl",
            className: Gt.messageIcon
        })
    }), e[9] = u, e[10] = h) : h = e[10];
    let v;
    e[11] !== r ? (v = r && (0, I.jsx)("div", {
        className: Gt.title,
        children: r
    }), e[11] = r, e[12] = v) : v = e[12];
    let _;
    e[13] !== i || e[14] !== f || e[15] !== v ? (_ = (0, I.jsxs)("div", {
        className: Gt.content,
        "data-testid": "message-content-container",
        children: [v, i, f]
    }), e[13] = i, e[14] = f, e[15] = v, e[16] = _) : _ = e[16];
    let y;
    return e[17] !== p || e[18] !== m || e[19] !== h || e[20] !== _ ? (y = (0, I.jsxs)("div", {
        className: m,
        children: [h, _, p]
    }), e[17] = p, e[18] = m, e[19] = h, e[20] = _, e[21] = y) : y = e[21], y
}
var pE = "_toastContainer_7b056_2",
    hE = {
        toastContainer: pE
    },
    gE = 5e3,
    $l = (t => (t[t.DEFAULT = Nn.DEFAULT] = "DEFAULT", t[t.SUCCESS = Nn.SUCCESS] = "SUCCESS", t[t.CAUTION = Nn.CAUTION] = "CAUTION", t))($l || {}),
    w_ = (t => (t.DISMISSIVE = "DISMISSIVE", t.ACTIONABLE = "ACTIONABLE", t))(w_ || {});

function vE(t) {
    let e = (0, ct.c)(33),
        o, r, n, a, s, i, c, l;
    e[0] !== t ? ({
        title: c,
        children: r,
        variant: a,
        action: o,
        behavior: s,
        toastContainerClassName: l,
        hasCloseButton: i,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c, e[8] = l) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7], l = e[8]);
    let d = a === void 0 ? $l.DEFAULT : a,
        u = s === void 0 ? "DISMISSIVE" : s,
        f = i === void 0 ? !0 : i,
        [p, g] = (0, Me.useState)(!0),
        m = u === "DISMISSIVE",
        h;
    e[9] === Symbol.for("react.memo_cache_sentinel") ? (h = () => {
        g(!1)
    }, e[9] = h) : h = e[9];
    let v = h,
        _;
    e: {
        if (n.open !== void 0) {
            _ = n.open;
            break e
        } else if (!m) {
            _ = p;
            break e
        }
        _ = void 0
    }
    let y = _,
        x = m ? gE : void 0,
        b = n.onOpenChange,
        C;
    e[10] !== l ? (C = T(hE.toastContainer, l), e[10] = l, e[11] = C) : C = e[11];
    let R;
    e[12] !== c ? (R = (0, I.jsx)(dy, {
        children: c
    }), e[12] = c, e[13] = R) : R = e[13];
    let S = Nn[d],
        E;
    e[14] !== f || e[15] !== m ? (E = f ? P => {
        let {
            children: B
        } = P;
        return (0, I.jsx)(py, {
            asChild: !0,
            onClick: m ? void 0 : v,
            children: B
        })
    } : void 0, e[14] = f, e[15] = m, e[16] = E) : E = e[16];
    let D;
    e[17] !== o ? (D = o && (0, I.jsx)(my, {
        asChild: !0,
        altText: o.altText,
        onClick: v,
        children: o.node
    }), e[17] = o, e[18] = D) : D = e[18];
    let N;
    e[19] !== r ? (N = r && (0, I.jsx)(fy, {
        children: r
    }), e[19] = r, e[20] = N) : N = e[20];
    let O;
    e[21] !== S || e[22] !== E || e[23] !== D || e[24] !== N || e[25] !== R ? (O = (0, I.jsx)(__, {
        title: R,
        variant: S,
        closeComponent: E,
        actions: D,
        children: N
    }), e[21] = S, e[22] = E, e[23] = D, e[24] = N, e[25] = R, e[26] = O) : O = e[26];
    let F;
    return e[27] !== y || e[28] !== n || e[29] !== O || e[30] !== x || e[31] !== C ? (F = (0, I.jsx)(uy, {
        ...n,
        duration: x,
        open: y,
        onOpenChange: b,
        className: C,
        children: O
    }), e[27] = y, e[28] = n, e[29] = O, e[30] = x, e[31] = C, e[32] = F) : F = e[32], F
}
var yE = "_sm_rsf61_2",
    _E = "_md_rsf61_6",
    wE = "_lg_rsf61_10",
    bE = "_overlay_rsf61_14",
    xE = "_content_rsf61_23",
    CE = "_header_rsf61_44",
    RE = "_headerBorderLight_rsf61_48",
    SE = "_body_rsf61_52",
    TE = "_close_rsf61_57",
    EE = "_footer_rsf61_63",
    DE = "_footerBorderLight_rsf61_70",
    Ho = {
        sm: yE,
        md: _E,
        lg: wE,
        overlay: bE,
        "overlay-show": "_overlay-show_rsf61_1",
        content: xE,
        "content-show": "_content-show_rsf61_1",
        header: CE,
        headerBorderLight: RE,
        body: SE,
        close: TE,
        footer: EE,
        footerBorderLight: DE
    },
    b_ = (t => (t.SMALL = "sm", t.MEDIUM = "md", t.LARGE = "lg", t))(b_ || {}),
    x_ = (t => (t.NONE = "headerBorderNone", t.LIGHT = "headerBorderLight", t))(x_ || {}),
    C_ = (t => (t.NONE = "footerBorderNone", t.LIGHT = "footerBorderLight", t))(C_ || {}),
    NE = (0, Me.forwardRef)((t, e) => {
        let o = (0, ct.c)(51),
            r, n, a, s, i, c, l, d, u, f, p;
        o[0] !== t ? ({
            size: i,
            headerBorder: c,
            footerBorder: l,
            trigger: p,
            header: a,
            children: r,
            footerActions: n,
            includeCloseButton: d,
            contentProps: u,
            overlayProps: f,
            ...s
        } = t, o[0] = t, o[1] = r, o[2] = n, o[3] = a, o[4] = s, o[5] = i, o[6] = c, o[7] = l, o[8] = d, o[9] = u, o[10] = f, o[11] = p) : (r = o[1], n = o[2], a = o[3], s = o[4], i = o[5], c = o[6], l = o[7], d = o[8], u = o[9], f = o[10], p = o[11]);
        let g = i === void 0 ? "md" : i,
            m = c === void 0 ? "headerBorderLight" : c,
            h = l === void 0 ? "footerBorderLight" : l,
            v = d === void 0 ? !0 : d,
            _;
        o[12] !== u ? (_ = u === void 0 ? {} : u, o[12] = u, o[13] = _) : _ = o[13];
        let y = _,
            x;
        o[14] !== f ? (x = f === void 0 ? {} : f, o[14] = f, o[15] = x) : x = o[15];
        let b = x,
            C;
        o[16] !== p ? (C = (0, I.jsx)(si, {
            asChild: !0,
            children: p
        }), o[16] = p, o[17] = C) : C = o[17];
        let R;
        o[18] !== b.className ? (R = T(Ho.overlay, b.className), o[18] = b.className, o[19] = R) : R = o[19];
        let S;
        o[20] !== b || o[21] !== R ? (S = (0, I.jsx)(ci, {
            ...b,
            className: R
        }), o[20] = b, o[21] = R, o[22] = S) : S = o[22];
        let E = Ho[g],
            D;
        o[23] !== y.className || o[24] !== E ? (D = T(E, Ho.content, y.className), o[23] = y.className, o[24] = E, o[25] = D) : D = o[25];
        let N;
        o[26] !== a || o[27] !== m ? (N = a && (0, I.jsx)(ui, {
            className: T(Ho[m], Ho.header),
            asChild: !0,
            children: a
        }), o[26] = a, o[27] = m, o[28] = N) : N = o[28];
        let O;
        o[29] !== r ? (O = (0, I.jsx)(di, {
            asChild: !0,
            children: (0, I.jsx)("div", {
                className: Ho.body,
                children: r
            })
        }), o[29] = r, o[30] = O) : O = o[30];
        let F;
        o[31] !== n || o[32] !== h ? (F = n && (0, I.jsx)("div", {
            className: T(Ho[h], Ho.footer),
            children: n
        }), o[31] = n, o[32] = h, o[33] = F) : F = o[33];
        let P;
        o[34] !== v ? (P = v && (0, I.jsx)(fi, {
            className: Ho.close,
            asChild: !0,
            children: (0, I.jsx)(zr, {
                "aria-label": "Close modal",
                variant: Ge.GHOST,
                iconName: "close",
                iconMode: "line",
                size: Mn.LARGE
            })
        }), o[34] = v, o[35] = P) : P = o[35];
        let B;
        o[36] !== y || o[37] !== e || o[38] !== D || o[39] !== N || o[40] !== O || o[41] !== F || o[42] !== P ? (B = (0, I.jsxs)(li, {
            ...y,
            className: D,
            ref: e,
            children: [N, O, F, P]
        }), o[36] = y, o[37] = e, o[38] = D, o[39] = N, o[40] = O, o[41] = F, o[42] = P, o[43] = B) : B = o[43];
        let k;
        o[44] !== S || o[45] !== B ? (k = (0, I.jsxs)(ii, {
            children: [S, B]
        }), o[44] = S, o[45] = B, o[46] = k) : k = o[46];
        let G;
        return o[47] !== s || o[48] !== k || o[49] !== C ? (G = (0, I.jsxs)(ai, {
            ...s,
            children: [C, k]
        }), o[47] = s, o[48] = k, o[49] = C, o[50] = G) : G = o[50], G
    }),
    ME = "_sortArrowContainerButton_cclom_2",
    PE = "_sortArrow_cclom_2",
    OE = "_sortArrowInactive_cclom_16",
    IE = "_sortArrowActive_cclom_20",
    Hr = {
        sortArrowContainerButton: ME,
        sortArrow: PE,
        sortArrowInactive: OE,
        sortArrowActive: IE
    },
    gr = (t => (t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t))(gr || {});

function R_(t) {
    let e = (0, ct.c)(20),
        o, r;
    e[0] !== t ? ({
        onChange: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let [n, a] = Ly(r.value, "none"), s;
    e[3] !== n || e[4] !== o || e[5] !== a ? (s = () => {
        let h;
        e: switch (n) {
            case "none": {
                h = "descending";
                break e
            }
            case "descending": {
                h = "ascending";
                break e
            }
            case "ascending":
                h = "none"
        }
        a(h), o?.(h)
    }, e[3] = n, e[4] = o, e[5] = a, e[6] = s) : s = e[6];
    let i = s,
        c = n === "ascending" ? "Sort ascending" : n === "descending" ? "Sort descending" : "Sort none",
        l = n === "ascending" ? Hr.sortArrowActive : Hr.sortArrowInactive,
        d;
    e[7] !== l ? (d = T(Hr.sortArrow, l), e[7] = l, e[8] = d) : d = e[8];
    let u;
    e[9] !== d ? (u = (0, I.jsx)(Z, {
        name: "arrow-up-s",
        mode: "fill",
        size: "xl",
        className: d
    }), e[9] = d, e[10] = u) : u = e[10];
    let f = n === "descending" ? Hr.sortArrowActive : Hr.sortArrowInactive,
        p;
    e[11] !== f ? (p = T(Hr.sortArrow, f), e[11] = f, e[12] = p) : p = e[12];
    let g;
    e[13] !== p ? (g = (0, I.jsx)(Z, {
        name: "arrow-down-s",
        mode: "fill",
        size: "xl",
        className: p
    }), e[13] = p, e[14] = g) : g = e[14];
    let m;
    return e[15] !== i || e[16] !== c || e[17] !== u || e[18] !== g ? (m = (0, I.jsxs)(jr, {
        variant: Ge.TERTIARY,
        className: Hr.sortArrowContainerButton,
        onClick: i,
        "aria-label": c,
        children: [u, g]
    }), e[15] = i, e[16] = c, e[17] = u, e[18] = g, e[19] = m) : m = e[19], m
}
var kE = t => t.replace(/\b\w/g, e => e.toUpperCase()),
    AE = t => t.replace(/_/g, " "),
    LE = t => t.replace(/([A-Z])/g, " $1"),
    FE = t => ({
        header: kE(LE(AE(t.toString()).trim())),
        align: e => typeof e == "number" ? Dn.RIGHT : Dn.LEFT,
        render: e => typeof e == "number" ? (0, I.jsx)(he, {
            children: (0, I.jsx)(_i, {
                value: e
            })
        }) : e == null ? null : (0, I.jsx)(he, {
            children: e.toString()
        }),
        internalSort: null
    });

function BE(t, e, o) {
    let r = (0, ct.c)(19),
        n;
    r[0] !== o ? (n = () => Object.fromEntries(o.map(jE)), r[0] = o, r[1] = n) : n = r[1];
    let [a, s] = (0, Me.useState)(n), i;
    if (r[2] !== e || r[3] !== t || r[4] !== a) {
        e: {
            let f;r[6] !== a ? (f = Object.entries(a).find(HE), r[6] = a, r[7] = f) : f = r[7];
            let p = f;
            if (p) {
                let g = [...t],
                    [m, h] = p,
                    v = e?.[m];
                if (!v) {
                    i = g;
                    break e
                }
                if ("internalSort" in v && v.internalSort) {
                    let _;
                    r[8] !== v || r[9] !== m || r[10] !== h ? (_ = (y, x) => {
                        var b, C;
                        return h === gr.DESCENDING ? ((b = v.internalSort) == null ? void 0 : b.call(v, y[m], x[m])) ?? 0 : ((C = v.internalSort) == null ? void 0 : C.call(v, x[m], y[m])) ?? 0
                    }, r[8] = v, r[9] = m, r[10] = h, r[11] = _) : _ = r[11], g.sort(_)
                }
                i = g
            } else i = t
        }
        r[2] = e,
        r[3] = t,
        r[4] = a,
        r[5] = i
    }
    else i = r[5];
    let c = i,
        l;
    r[12] !== o || r[13] !== e ? (l = f => {
        let p = e?.[f];
        if (p) {
            if ("internalSort" in p && p.internalSort) return g => {
                s({
                    ...Object.fromEntries(o.map(WE)),
                    [f]: g
                })
            };
            if ("externalSort" in p && p.externalSort) return g => {
                var m;
                (m = p.externalSort) == null || m.call(p, g)
            }
        }
    }, r[12] = o, r[13] = e, r[14] = l) : l = r[14];
    let d = l,
        u;
    return r[15] !== d || r[16] !== a || r[17] !== c ? (u = {
        sortedData: c,
        sortSettings: a,
        getSortCallback: d
    }, r[15] = d, r[16] = a, r[17] = c, r[18] = u) : u = r[18], u
}

function WE(t) {
    return [t, gr.NONE]
}

function HE(t) {
    let [, e] = t;
    return e !== gr.NONE
}

function jE(t) {
    return [t, gr.NONE]
}
var zE = "_leftAligned_13tqi_2",
    UE = "_rightAligned_13tqi_8",
    gi = {
        leftAligned: zE,
        rightAligned: UE
    };

function so(t) {
    let e = (0, ct.c)(29),
        o, r, n;
    e[0] !== t ? ({
        data: o,
        columns: r,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n) : (o = e[1], r = e[2], n = e[3]);
    let a;
    e[4] !== r ? (a = Object.fromEntries(Object.entries(r || {}).map(GE)), e[4] = r, e[5] = a) : a = e[5];
    let s = a,
        i;
    e: {
        if (!s) {
            let v;
            e[6] !== o[0] ? (v = Object.keys(o[0]), e[6] = o[0], e[7] = v) : v = e[7], i = v;
            break e
        }
        let h;e[8] !== s ? (h = Object.keys(s), e[8] = s, e[9] = h) : h = e[9],
        i = h
    }
    let c = i,
        {
            sortedData: l,
            sortSettings: d,
            getSortCallback: u
        } = BE(o, s, c),
        f;
    e[10] !== c || e[11] !== s || e[12] !== o || e[13] !== u || e[14] !== d ? (f = (0, I.jsx)(Bl, {
        children: (0, I.jsx)(Hl, {
            children: c.map(h => (0, I.jsx)(Wl, {
                "aria-sort": d[h] === gr.ASCENDING ? "ascending" : d[h] === gr.DESCENDING ? "descending" : "none",
                children: (0, I.jsxs)("div", {
                    className: Ul(s[h].align, o[0][h]) === Dn.LEFT ? gi.leftAligned : gi.rightAligned,
                    children: [(0, I.jsx)(he, {
                        variant: Ue.DEFAULT_SEMIBOLD,
                        children: s[h].header
                    }), u(h) && (0, I.jsx)(R_, {
                        onChange: u(h)
                    })]
                })
            }, h.toString()))
        })
    }), e[10] = c, e[11] = s, e[12] = o, e[13] = u, e[14] = d, e[15] = f) : f = e[15];
    let p;
    if (e[16] !== c || e[17] !== s || e[18] !== l) {
        let h;
        e[20] !== c || e[21] !== s ? (h = v => (0, I.jsx)(zl, {
            children: c.map(_ => (0, I.jsx)(Fl, {
                children: (0, I.jsx)("div", {
                    className: Ul(s[_].align, v[_]) === Dn.LEFT ? gi.leftAligned : gi.rightAligned,
                    children: s[_].render(v[_])
                })
            }, _.toString()))
        }, v.id), e[20] = c, e[21] = s, e[22] = h) : h = e[22], p = l.map(h), e[16] = c, e[17] = s, e[18] = l, e[19] = p
    } else p = e[19];
    let g;
    e[23] !== p ? (g = (0, I.jsx)(Ll, {
        children: p
    }), e[23] = p, e[24] = g) : g = e[24];
    let m;
    return e[25] !== n || e[26] !== f || e[27] !== g ? (m = (0, I.jsxs)(jl, {
        ...n,
        children: [f, g]
    }), e[25] = n, e[26] = f, e[27] = g, e[28] = m) : m = e[28], m
}

function GE(t) {
    let [e, o] = t;
    return [e, {
        ...FE(e),
        ...o
    }]
}
so.Root = jl;
so.Header = Bl;
so.HeaderRow = Hl;
so.HeaderCell = Wl;
so.Body = Ll;
so.Row = zl;
so.Cell = Fl;
so.Footer = Vy;
so.FooterRow = Qy;
so.FooterCell = Ky;
var YE = "_listBox_1gbxk_2",
    VE = "_listBoxOptions_1gbxk_19",
    qE = "_listBoxInput_1gbxk_27",
    $E = "_listBoxEmpty_1gbxk_44",
    KE = "_loadingContainer_1gbxk_51",
    XE = "_optionGroup_1gbxk_58",
    ZE = "_optionGroupLabel_1gbxk_66",
    QE = "_multiselectItem_1gbxk_72",
    hr = {
        listBox: YE,
        listBoxOptions: VE,
        listBoxInput: qE,
        listBoxEmpty: $E,
        loadingContainer: KE,
        optionGroup: XE,
        optionGroupLabel: ZE,
        multiselectItem: QE
    },
    JE = "_multiselectItem_xhgbe_2",
    eD = "_label_xhgbe_9",
    ql = {
        multiselectItem: JE,
        label: eD
    };

function tD(t) {
    let e = (0, ct.c)(14),
        o, r, n, a;
    if (e[0] !== t) {
        let {
            option: l,
            isSelected: d,
            ...u
        } = t;
        r = l, o = d, n = u, a = T(u.className, ql.multiselectItem), e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a
    } else o = e[1], r = e[2], n = e[3], a = e[4];
    let s;
    e[5] !== r.label ? (s = (0, I.jsx)("div", {
        className: ql.label,
        children: r.label
    }), e[5] = r.label, e[6] = s) : s = e[6];
    let i;
    e[7] !== o ? (i = o && (0, I.jsx)(Z, {
        icon: "check-line",
        className: ql.indicator
    }), e[7] = o, e[8] = i) : i = e[8];
    let c;
    return e[9] !== n || e[10] !== a || e[11] !== s || e[12] !== i ? (c = (0, I.jsxs)("div", {
        ...n,
        className: a,
        children: [s, i]
    }), e[9] = n, e[10] = a, e[11] = s, e[12] = i, e[13] = c) : c = e[13], c
}

function oD(t, e) {
    return t.label.toLowerCase().includes(e.toLowerCase())
}

function rD(t) {
    let e = (0, ct.c)(70),
        {
            emptyStateText: o,
            filter: r,
            filterFn: n,
            filterPlaceholder: a,
            isLoading: s,
            name: i,
            onChange: c,
            onFilterChange: l,
            optionGroups: d,
            options: u,
            selectedOptions: f,
            MultiselectItem: p,
            className: g,
            optionsClassName: m
        } = t,
        h = o === void 0 ? By : o,
        v = n === void 0 ? oD : n,
        _ = a === void 0 ? Wy : a,
        y = p === void 0 ? tD : p,
        [x, b] = (0, Me.useState)(""),
        [C, R] = (0, Me.useState)(""),
        S = (0, Me.useRef)(null),
        E = (0, Me.useRef)(null),
        D = (0, Me.useRef)(-1),
        N = `listbox-${i}`,
        O = r ?? x,
        F;
    e[0] !== f ? (F = new Set(f.map(sD)), e[0] = f, e[1] = F) : F = e[1];
    let P = F,
        B;
    e: {
        if (!u) {
            let J;
            e[2] === Symbol.for("react.memo_cache_sentinel") ? (J = [], e[2] = J) : J = e[2], B = J;
            break e
        }
        let $;
        if (e[3] !== O || e[4] !== v || e[5] !== u || e[6] !== P) {
            let J;
            e[8] !== O || e[9] !== v ? (J = Ct => v(Ct, O), e[8] = O, e[9] = v, e[10] = J) : J = e[10];
            let Pe = u.filter(J);
            $ = Xc(Pe, P), e[3] = O, e[4] = v, e[5] = u, e[6] = P, e[7] = $
        } else $ = e[7];B = $
    }
    let k = B,
        G;
    e: {
        if (!d) {
            let J;
            e[11] === Symbol.for("react.memo_cache_sentinel") ? (J = [], e[11] = J) : J = e[11], G = J;
            break e
        }
        let $;
        if (e[12] !== O || e[13] !== v || e[14] !== d || e[15] !== P) {
            let J;
            e[17] !== O || e[18] !== v || e[19] !== P ? (J = Pe => ({
                ...Pe,
                options: Xc(Pe.options.filter(Ct => v(Ct, O)), P)
            }), e[17] = O, e[18] = v, e[19] = P, e[20] = J) : J = e[20], $ = d.map(J).filter(aD), e[12] = O, e[13] = v, e[14] = d, e[15] = P, e[16] = $
        } else $ = e[16];G = $
    }
    let H = G,
        L;
    e: {
        if (H.length) {
            let $;
            e[21] !== H ? ($ = H.reduce(nD, 0), e[21] = H, e[22] = $) : $ = e[22], L = $;
            break e
        }
        if (k.length) {
            L = k.length;
            break e
        }
        L = 0
    }
    let re = L,
        ne;
    e[23] === Symbol.for("react.memo_cache_sentinel") ? (ne = () => {
        var $;
        let J = ($ = E.current) == null ? void 0 : $.querySelectorAll('[role="option"]'),
            Pe = J?.[D.current];
        Pe?.scrollIntoView({
            behavior: "smooth"
        }), Pe?.focus()
    }, e[23] = ne) : ne = e[23];
    let ue = ne,
        de;
    e[24] === Symbol.for("react.memo_cache_sentinel") ? (de = $ => {
        var J;
        $.preventDefault(), $.stopPropagation(), !(D.current <= -1) && (D.current = D.current - 1, D.current === -1 ? (J = S.current) == null || J.select() : ue())
    }, e[24] = de) : de = e[24];
    let pe = de,
        _e;
    e[25] !== re ? (_e = $ => {
        $.preventDefault(), $.stopPropagation(), D.current = Math.min(D.current + 1, re), ue()
    }, e[25] = re, e[26] = _e) : _e = e[26];
    let be = _e,
        j;
    e[27] !== be ? (j = $ => {
        e: switch ($.key) {
            case "ArrowDown": {
                be($);
                break e
            }
            case "ArrowUp":
                pe($)
        }
    }, e[27] = be, e[28] = j) : j = e[28];
    let ce = j,
        ve;
    e[29] !== c || e[30] !== P || e[31] !== f ? (ve = $ => {
        $.disabled || (P.has($.value) ? c(f.filter(J => J.value !== $.value)) : c([...f, $]))
    }, e[29] = c, e[30] = P, e[31] = f, e[32] = ve) : ve = e[32];
    let ae = ve,
        Y;
    e[33] !== l ? (Y = $ => {
        D.current = -1;
        let {
            value: J
        } = $.target;
        l?.(J) ?? b(J)
    }, e[33] = l, e[34] = Y) : Y = e[34];
    let we = Y,
        Ae;
    e[35] !== ae ? (Ae = ($, J) => {
        ($.key === "Enter" || $.key === " ") && ($.preventDefault(), $.stopPropagation(), ae(J))
    }, e[35] = ae, e[36] = Ae) : Ae = e[36];
    let Be = Ae,
        ut;
    e[37] !== y || e[38] !== Be || e[39] !== ae ? (ut = ($, J, Pe) => {
        let Ct = `${$}-${Pe.value}`;
        return (0, I.jsx)(y, {
            id: Ct,
            tabIndex: -1,
            className: hr.multiselectItem,
            onClick: () => ae(Pe),
            onKeyDown: fo => Be(fo, Pe),
            role: "option",
            "aria-disabled": Pe.disabled,
            "aria-selected": J,
            isSelected: J,
            option: Pe,
            onFocus: () => R(Ct),
            onBlur: () => R("")
        }, Pe.value)
    }, e[37] = y, e[38] = Be, e[39] = ae, e[40] = ut) : ut = e[40];
    let dt = ut,
        tt;
    e[41] !== g ? (tt = T(hr.listBox, g), e[41] = g, e[42] = tt) : tt = e[42];
    let _t;
    e[43] !== C || e[44] !== O || e[45] !== _ || e[46] !== we || e[47] !== N ? (_t = (0, I.jsx)("input", {
        role: "combobox",
        "aria-expanded": !0,
        "aria-haspopup": "listbox",
        "aria-controls": N,
        "aria-activedescendant": C,
        autoFocus: !0,
        placeholder: _,
        ref: S,
        value: O,
        className: hr.listBoxInput,
        onChange: we
    }), e[43] = C, e[44] = O, e[45] = _, e[46] = we, e[47] = N, e[48] = _t) : _t = e[48];
    let wt;
    e[49] !== m ? (wt = T(hr.listBoxOptions, m), e[49] = m, e[50] = wt) : wt = e[50];
    let bt;
    e[51] !== h || e[52] !== H || e[53] !== k || e[54] !== dt || e[55] !== s || e[56] !== N || e[57] !== d || e[58] !== u || e[59] !== P ? (bt = s ? (0, I.jsx)("div", {
        className: hr.loadingContainer,
        children: (0, I.jsx)(qn, {})
    }) : (0, I.jsxs)(I.Fragment, {
        children: [!H.length && !k.length ? (0, I.jsx)("div", {
            className: hr.listBoxEmpty,
            children: h
        }) : null, u && k.map($ => {
            let J = P.has($.value);
            return dt(N, J, $)
        }), d && H.map($ => (0, I.jsxs)("div", {
            className: hr.optionGroup,
            role: "group",
            "aria-label": $.label,
            children: [(0, I.jsx)(he, {
                variant: Ue.H5,
                className: hr.optionGroupLabel,
                children: $.label
            }), $.options.map(J => {
                let Pe = P.has(J.value);
                return dt(N, Pe, J)
            })]
        }, $.label))]
    }), e[51] = h, e[52] = H, e[53] = k, e[54] = dt, e[55] = s, e[56] = N, e[57] = d, e[58] = u, e[59] = P, e[60] = bt) : bt = e[60];
    let xt;
    e[61] !== N || e[62] !== wt || e[63] !== bt ? (xt = (0, I.jsx)("div", {
        id: N,
        ref: E,
        className: wt,
        role: "listbox",
        "aria-multiselectable": "true",
        children: bt
    }), e[61] = N, e[62] = wt, e[63] = bt, e[64] = xt) : xt = e[64];
    let Et;
    return e[65] !== ce || e[66] !== tt || e[67] !== _t || e[68] !== xt ? (Et = (0, I.jsxs)("div", {
        className: tt,
        onKeyDown: ce,
        children: [_t, xt]
    }), e[65] = ce, e[66] = tt, e[67] = _t, e[68] = xt, e[69] = Et) : Et = e[69], Et
}

function nD(t, e) {
    return t + e.options.length
}

function aD(t) {
    return t.options.length > 0
}

function sD(t) {
    return t.value
}
var iD = "_triggerContainer_1w1wp_2",
    cD = "_md_1w1wp_12",
    lD = "_lg_1w1wp_16",
    uD = "_trigger_1w1wp_2",
    dD = "_contentLeft_1w1wp_55",
    fD = "_placeholder_1w1wp_64",
    mD = "_triggerContent_1w1wp_73",
    pD = "_content_1w1wp_55",
    hD = "_selectedValues_1w1wp_84",
    gD = "_selectedValue_1w1wp_84",
    vD = "_additionalSelections_1w1wp_93",
    yD = "_selectedValueDisabled_1w1wp_108",
    _D = "_removeValue_1w1wp_114",
    wD = "_actions_1w1wp_141",
    bD = "_clearButton_1w1wp_155",
    xD = "_arrow_1w1wp_183",
    gt = {
        triggerContainer: iD,
        md: cD,
        lg: lD,
        trigger: uD,
        contentLeft: dD,
        placeholder: fD,
        triggerContent: mD,
        content: pD,
        selectedValues: hD,
        selectedValue: gD,
        additionalSelections: vD,
        selectedValueDisabled: yD,
        removeValue: _D,
        actions: wD,
        clearButton: bD,
        arrow: xD
    },
    S_ = (t => (t.MEDIUM = "md", t.LARGE = "lg", t))(S_ || {});

function T_(t) {
    let e = (0, ct.c)(91),
        {
            className: o,
            listClassName: r,
            listOptionsClassName: n,
            contentLeft: a,
            disabled: s,
            emptyStateText: i,
            filter: c,
            filterFn: l,
            filterPlaceholder: d,
            isInvalid: u,
            isLoading: f,
            name: p,
            onChange: g,
            onFilterChange: m,
            optionGroups: h,
            options: v,
            placeholder: _,
            selectedOptions: y,
            visibleSelectionsLimit: x,
            MultiselectItem: b,
            size: C
        } = t,
        R = _ === void 0 ? Fy : _,
        S = C === void 0 ? "md" : C,
        E = (0, Me.useRef)(null),
        D = (0, Me.useRef)(-1),
        [N, O] = (0, Me.useState)(!1),
        F;
    e[0] !== y ? (F = y.map(CD).join(", ") || "None", e[0] = y, e[1] = F) : F = e[1];
    let P = F,
        B;
    e: {
        if (x) {
            let Oe;
            e[2] !== y || e[3] !== x ? (Oe = y.slice(0, x), e[2] = y, e[3] = x, e[4] = Oe) : Oe = e[4], B = Oe;
            break e
        }
        B = y
    }
    let k = B,
        G;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (G = () => {
        D.current = -1
    }, e[5] = G) : G = e[5];
    let H;
    e[6] !== N ? (H = [N], e[6] = N, e[7] = H) : H = e[7], (0, Me.useEffect)(G, H);
    let L;
    e[8] !== g || e[9] !== y ? (L = Oe => {
        var ft;
        g(y.filter(qo => qo.value !== Oe.value)), (ft = E.current) == null || ft.focus()
    }, e[8] = g, e[9] = y, e[10] = L) : L = e[10];
    let re = L,
        ne;
    e[11] !== g ? (ne = () => {
        var Oe;
        g([]), (Oe = E.current) == null || Oe.focus()
    }, e[11] = g, e[12] = ne) : ne = e[12];
    let ue = ne,
        de;
    if (e[13] !== s || e[14] !== re || e[15] !== k) {
        let Oe;
        e[17] !== s || e[18] !== re ? (Oe = ft => (0, I.jsxs)("div", {
            className: T(gt.selectedValue, s && gt.selectedValueDisabled),
            children: [ft.label, (0, I.jsx)("button", {
                "aria-label": `Remove option "${ft.value}"`,
                className: gt.removeValue,
                onClick: () => re(ft),
                disabled: s,
                children: (0, I.jsx)(Z, {
                    icon: "close-line",
                    "aria-hidden": !0
                })
            })]
        }, ft.value), e[17] = s, e[18] = re, e[19] = Oe) : Oe = e[19], de = k.map(Oe), e[13] = s, e[14] = re, e[15] = k, e[16] = de
    } else de = e[16];
    let pe = de,
        _e;
    e: {
        if (x && y.length > x) {
            let Oe;
            e[20] === Symbol.for("react.memo_cache_sentinel") ? (Oe = T(gt.additionalSelections), e[20] = Oe) : Oe = e[20];
            let ft = y.length - x,
                qo;
            e[21] !== ft ? (qo = (0, I.jsxs)("span", {
                className: Oe,
                children: ["+", ft]
            }), e[21] = ft, e[22] = qo) : qo = e[22], _e = qo;
            break e
        }
        _e = void 0
    }
    let be = _e,
        j;
    if (e[23] !== p || e[24] !== y) {
        let Oe;
        e[26] !== p ? (Oe = ft => (0, I.jsx)("input", {
            type: "hidden",
            name: p,
            value: ft.value
        }, ft.value), e[26] = p, e[27] = Oe) : Oe = e[27], j = y.map(Oe), e[23] = p, e[24] = y, e[25] = j
    } else j = e[25];
    let ce = j,
        ve = gt[S],
        ae;
    e[28] !== o || e[29] !== ve ? (ae = T(gt.triggerContainer, ve, o), e[28] = o, e[29] = ve, e[30] = ae) : ae = e[30];
    let Y = `${p} multiselect. Selected items: ${P}. Press down arrow for options.`,
        we;
    e[31] === Symbol.for("react.memo_cache_sentinel") ? (we = T(gt.trigger), e[31] = we) : we = e[31];
    let Ae = s && gt.arrowDisabled,
        Be;
    e[32] !== Ae ? (Be = T(gt.arrow, Ae), e[32] = Ae, e[33] = Be) : Be = e[33];
    let ut;
    e[34] !== Be ? (ut = (0, I.jsx)(Z, {
        icon: "arrow-down-s-line",
        className: Be
    }), e[34] = Be, e[35] = ut) : ut = e[35];
    let dt;
    e[36] !== s || e[37] !== u || e[38] !== Y || e[39] !== ut ? (dt = (0, I.jsx)("button", {
        "aria-label": Y,
        className: we,
        "aria-invalid": u,
        disabled: s,
        ref: E,
        children: ut
    }), e[36] = s, e[37] = u, e[38] = Y, e[39] = ut, e[40] = dt) : dt = e[40];
    let tt;
    e[41] !== s || e[42] !== dt ? (tt = (0, I.jsx)(ys, {
        asChild: !0,
        disabled: s,
        children: dt
    }), e[41] = s, e[42] = dt, e[43] = tt) : tt = e[43];
    let _t;
    e[44] !== a ? (_t = a && (0, I.jsx)("div", {
        className: gt.contentLeft,
        children: a
    }), e[44] = a, e[45] = _t) : _t = e[45];
    let wt;
    e[46] !== R || e[47] !== y.length ? (wt = y.length ? null : (0, I.jsx)("span", {
        className: gt.placeholder,
        children: R
    }), e[46] = R, e[47] = y.length, e[48] = wt) : wt = e[48];
    let bt;
    e[49] !== be || e[50] !== pe ? (bt = (0, I.jsxs)("div", {
        className: gt.selectedValues,
        children: [pe, be]
    }), e[49] = be, e[50] = pe, e[51] = bt) : bt = e[51];
    let xt;
    e[52] !== f ? (xt = f && (0, I.jsx)(qn, {}), e[52] = f, e[53] = xt) : xt = e[53];
    let Et;
    e[54] !== s || e[55] !== ue || e[56] !== y.length ? (Et = y != null && y.length ? (0, I.jsx)("button", {
        "aria-label": "Clear all options",
        className: gt.clearButton,
        onClick: ue,
        disabled: s,
        children: (0, I.jsx)(Z, {
            icon: "close-circle-line",
            "aria-hidden": !0
        })
    }) : null, e[54] = s, e[55] = ue, e[56] = y.length, e[57] = Et) : Et = e[57];
    let $;
    e[58] !== xt || e[59] !== Et ? ($ = (0, I.jsxs)("div", {
        className: gt.actions,
        children: [xt, Et]
    }), e[58] = xt, e[59] = Et, e[60] = $) : $ = e[60];
    let J;
    e[61] !== _t || e[62] !== wt || e[63] !== bt || e[64] !== $ ? (J = (0, I.jsxs)("div", {
        className: gt.triggerContent,
        children: [_t, wt, bt, $]
    }), e[61] = _t, e[62] = wt, e[63] = bt, e[64] = $, e[65] = J) : J = e[65];
    let Pe;
    e[66] !== ae || e[67] !== tt || e[68] !== J ? (Pe = (0, I.jsxs)("div", {
        className: ae,
        children: [tt, J]
    }), e[66] = ae, e[67] = tt, e[68] = J, e[69] = Pe) : Pe = e[69];
    let Ct;
    e[70] !== b || e[71] !== i || e[72] !== c || e[73] !== l || e[74] !== d || e[75] !== f || e[76] !== r || e[77] !== n || e[78] !== p || e[79] !== g || e[80] !== m || e[81] !== h || e[82] !== v || e[83] !== y ? (Ct = (0, I.jsx)(aa, {
        children: (0, I.jsx)(_s, {
            sideOffset: 5,
            className: gt.content,
            align: "start",
            children: (0, I.jsx)(rD, {
                emptyStateText: i,
                name: p,
                onChange: g,
                selectedOptions: y,
                MultiselectItem: b,
                filter: c,
                filterFn: l,
                filterPlaceholder: d,
                isLoading: f,
                onFilterChange: m,
                optionGroups: h,
                options: v,
                className: r,
                optionsClassName: n
            })
        })
    }), e[70] = b, e[71] = i, e[72] = c, e[73] = l, e[74] = d, e[75] = f, e[76] = r, e[77] = n, e[78] = p, e[79] = g, e[80] = m, e[81] = h, e[82] = v, e[83] = y, e[84] = Ct) : Ct = e[84];
    let fo;
    e[85] !== Pe || e[86] !== Ct ? (fo = (0, I.jsxs)(vs, {
        onOpenChange: O,
        children: [Pe, Ct]
    }), e[85] = Pe, e[86] = Ct, e[87] = fo) : fo = e[87];
    let Zr;
    return e[88] !== ce || e[89] !== fo ? (Zr = (0, I.jsxs)(I.Fragment, {
        children: [fo, ce]
    }), e[88] = ce, e[89] = fo, e[90] = Zr) : Zr = e[90], Zr
}

function CD(t) {
    return t.label
}
T_.displayName = "Multiselect";
var ga = w(W(), 1),
    E_ = w(V(), 1);
var XH = w(M(), 1);
var RD = "_card_154bo_2",
    SD = "_borderNoTop_154bo_8",
    TD = "_borderNoTopLight_154bo_9",
    ED = "_cardHeader_154bo_16",
    DD = "_cardBody_154bo_23",
    ND = "_paddingNone_154bo_29",
    MD = "_paddingLarge_154bo_33",
    PD = "_paddingNoneHeaderPadding_154bo_37",
    OD = "_paddingLargeHeaderPadding_154bo_41",
    ID = "_borderDefault_154bo_46",
    kD = "_borderLight_154bo_55",
    AD = "_defaultCard_154bo_72",
    LD = "_linkCard_154bo_73",
    FD = "_lightCard_154bo_77",
    BD = "_interactiveCard_154bo_81",
    Ur = {
        card: RD,
        borderNoTop: SD,
        borderNoTopLight: TD,
        cardHeader: ED,
        cardBody: DD,
        paddingNone: ND,
        paddingLarge: MD,
        paddingNoneHeaderPadding: PD,
        paddingLargeHeaderPadding: OD,
        borderDefault: ID,
        borderLight: kD,
        defaultCard: AD,
        linkCard: LD,
        lightCard: FD,
        interactiveCard: BD
    },
    D_ = (t => (t.DEFAULT = "defaultCard", t.LIGHT = "lightCard", t.INTERACTIVE = "interactiveCard", t.LINK = "linkCard", t))(D_ || {}),
    N_ = (t => (t.DEFAULT = "borderDefault", t.LIGHT = "borderLight", t.NO_TOP = "borderNoTop", t.NO_TOP_LIGHT = "borderNoTopLight", t))(N_ || {}),
    M_ = (t => (t.NONE = "paddingNone", t.DEFAULT = "paddingDefault", t.LARGE = "paddingLarge", t))(M_ || {});

function WD(t) {
    let e = (0, E_.c)(26),
        o, r, n, a, s, i, c, l;
    e[0] !== t ? ({
        header: n,
        headerPadding: s,
        bodyPadding: i,
        variant: c,
        borderVariant: l,
        className: r,
        children: o,
        ...a
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c, e[8] = l) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7], l = e[8]);
    let d = s === void 0 ? "paddingDefault" : s,
        u = i === void 0 ? "paddingDefault" : i,
        f = c === void 0 ? "defaultCard" : c,
        p = l === void 0 ? "borderDefault" : l,
        g = Ur[f],
        m = Ur[p],
        h;
    e[9] !== r || e[10] !== g || e[11] !== m ? (h = T(Ur.card, g, m, r), e[9] = r, e[10] = g, e[11] = m, e[12] = h) : h = e[12];
    let v;
    e[13] !== n || e[14] !== d ? (v = n && (0, ga.jsx)("div", {
        className: T(Ur.cardHeader, Ur[`${d}HeaderPadding`]),
        children: n
    }), e[13] = n, e[14] = d, e[15] = v) : v = e[15];
    let _ = Ur[u],
        y;
    e[16] !== _ ? (y = T(Ur.cardBody, _), e[16] = _, e[17] = y) : y = e[17];
    let x;
    e[18] !== o || e[19] !== y ? (x = (0, ga.jsx)("div", {
        className: y,
        children: o
    }), e[18] = o, e[19] = y, e[20] = x) : x = e[20];
    let b;
    return e[21] !== a || e[22] !== x || e[23] !== h || e[24] !== v ? (b = (0, ga.jsxs)("div", {
        className: h,
        ...a,
        children: [v, x]
    }), e[21] = a, e[22] = x, e[23] = h, e[24] = v, e[25] = b) : b = e[25], b
}
var I_ = w(W(), 1),
    k_ = w(V(), 1);
var O_ = w(V(), 1);
var P_ = w(V(), 1),
    wi = (t, e) => {
        let o = (0, P_.c)(6),
            r;
        try {
            let n;
            if (o[0] !== e || o[1] !== t) {
                let i = new Date(t);
                n = e.format(i), o[0] = e, o[1] = t, o[2] = n
            } else n = o[2];
            let a = n,
                s;
            o[3] !== a ? (s = {
                formattedTimestamp: a
            }, o[3] = a, o[4] = s) : s = o[4], r = s
        } catch (n) {
            let a = n,
                s = "";
            typeof a == "string" ? s = a : a instanceof Error && (s = a.message);
            let i;
            o[5] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                error: s
            }, o[5] = i) : i = o[5], r = i
        }
        return r
    };

function Kl(t, e, o) {
    let r = (0, O_.c)(5),
        n = e === void 0 ? "MMM DD, YYYY UTC" : e,
        a = sa(),
        s = o ?? a,
        i;
    r[0] !== n || r[1] !== s ? (i = Qc(n, s), r[0] = n, r[1] = s, r[2] = i) : i = r[2];
    let c = i,
        {
            formattedTimestamp: l
        } = wi(t, c),
        d;
    return r[3] !== l ? (d = {
        formattedDate: l
    }, r[3] = l, r[4] = d) : d = r[4], d
}

function HD(t) {
    let e = (0, k_.c)(3),
        {
            timestamp: o,
            format: r,
            className: n
        } = t,
        a = r === void 0 ? "MMM DD, YYYY UTC" : r,
        s = ha(),
        {
            formattedDate: i
        } = Kl(o, a, s),
        c;
    return e[0] !== n || e[1] !== i ? (c = i && (0, I_.jsx)("span", {
        role: "presentation",
        className: n,
        "data-testid": "fmt-timestamp-date",
        children: i
    }), e[0] = n, e[1] = i, e[2] = c) : c = e[2], c
}
var bi = (t => (t.SYSTEM = "system", t.NEUTRAL = "neutral", t.BRAND = "brand", t.ALERT = "alert", t))(bi || {}),
    xi = (t => (t.MEDIUM = "medium", t.SMALL = "small", t))(xi || {}),
    Ci = (t => (t.SQUARE = "square", t.ROUND = "round", t))(Ci || {});
var Xl = w(W(), 1),
    A_ = w(V(), 1),
    uj = w(M(), 1);
var jD = "_countBadge_7c5bo_2",
    zD = "_neutral_7c5bo_26",
    UD = "_brand_7c5bo_31",
    GD = "_alert_7c5bo_35",
    YD = "_small_7c5bo_40",
    VD = "_round_7c5bo_48",
    Ri = {
        countBadge: jD,
        neutral: zD,
        brand: UD,
        alert: GD,
        small: YD,
        round: VD
    };

function qD(t) {
    let e = (0, A_.c)(10),
        {
            count: o,
            variant: r,
            size: n,
            shape: a,
            isDisabled: s
        } = t,
        i = r === void 0 ? bi.SYSTEM : r,
        c = n === void 0 ? xi.MEDIUM : n,
        l = a === void 0 ? Ci.SQUARE : a,
        d = Ri[i],
        u = Ri[c],
        f = Ri[l],
        p;
    e[0] !== d || e[1] !== u || e[2] !== f ? (p = T(Ri.countBadge, d, u, f), e[0] = d, e[1] = u, e[2] = f, e[3] = p) : p = e[3];
    let g;
    e[4] !== o ? (g = (0, Xl.jsx)(_i, {
        value: o
    }), e[4] = o, e[5] = g) : g = e[5];
    let m;
    return e[6] !== s || e[7] !== p || e[8] !== g ? (m = (0, Xl.jsx)("span", {
        className: p,
        "aria-disabled": s,
        children: g
    }), e[6] = s, e[7] = p, e[8] = g, e[9] = m) : m = e[9], m
}
var io = w(W(), 1),
    L_ = w(V(), 1);
var wj = w(M(), 1);
var $D = "_trigger_1h03h_3",
    KD = "_tooltipArrow_1h03h_14",
    XD = "_whiteText_1h03h_18",
    ZD = "_content_1h03h_22",
    Si = {
        trigger: $D,
        tooltipArrow: KD,
        whiteText: XD,
        content: ZD
    },
    QD = 8;

function Zl(t) {
    let e = (0, L_.c)(26),
        {
            content: o,
            contentClassName: r,
            triggerClassName: n,
            children: a,
            side: s,
            offset: i,
            hasArrow: c,
            delayDuration: l,
            tabIndex: d
        } = t,
        u = s === void 0 ? "top" : s,
        f = i === void 0 ? 0 : i,
        p = c === void 0 ? !0 : c,
        g = l === void 0 ? 400 : l,
        m = d === void 0 ? 0 : d,
        h = f + (p ? 0 : QD),
        v;
    e[0] !== n ? (v = T(Si.trigger, n), e[0] = n, e[1] = v) : v = e[1];
    let _;
    e[2] !== a ? (_ = typeof a == "string" ? (0, io.jsx)(he, {
        children: a
    }) : (0, io.jsx)("span", {
        children: a
    }), e[2] = a, e[3] = _) : _ = e[3];
    let y;
    e[4] !== v || e[5] !== _ || e[6] !== m ? (y = (0, io.jsx)(eh, {
        className: v,
        "data-testid": "tooltip-anchor",
        asChild: !0,
        tabIndex: m,
        children: _
    }), e[4] = v, e[5] = _, e[6] = m, e[7] = y) : y = e[7];
    let x;
    e[8] !== r ? (x = T(Si.content, r), e[8] = r, e[9] = x) : x = e[9];
    let b;
    e[10] !== o ? (b = typeof o == "string" ? (0, io.jsx)(he, {
        className: Si.whiteText,
        variant: Ue.SMALL,
        children: o
    }) : o, e[10] = o, e[11] = b) : b = e[11];
    let C;
    e[12] !== p ? (C = p && (0, io.jsx)(rh, {
        className: Si.tooltipArrow,
        "data-testid": "tooltip-arrow",
        "aria-hidden": !0
    }), e[12] = p, e[13] = C) : C = e[13];
    let R;
    e[14] !== u || e[15] !== h || e[16] !== b || e[17] !== C || e[18] !== x ? (R = (0, io.jsx)(th, {
        children: (0, io.jsxs)(oh, {
            className: x,
            "data-testid": "tooltip-content",
            side: u,
            sideOffset: h,
            children: [b, C]
        })
    }), e[14] = u, e[15] = h, e[16] = b, e[17] = C, e[18] = x, e[19] = R) : R = e[19];
    let S;
    e[20] !== R || e[21] !== y ? (S = (0, io.jsxs)(Jp, {
        children: [y, R]
    }), e[20] = R, e[21] = y, e[22] = S) : S = e[22];
    let E;
    return e[23] !== g || e[24] !== S ? (E = (0, io.jsx)(Qp, {
        delayDuration: g,
        children: S
    }), e[23] = g, e[24] = S, e[25] = E) : E = e[25], E
}
var va = w(W(), 1),
    F_ = w(V(), 1);
var Tj = w(M(), 1);
var JD = "_selectLabel_303c5_2",
    eN = {
        selectLabel: JD
    };

function tN(t) {
    let e = (0, F_.c)(8),
        {
            icon: o,
            iconName: r,
            iconMode: n,
            iconSize: a,
            label: s
        } = t,
        i;
    e[0] !== o || e[1] !== n || e[2] !== r || e[3] !== a ? (i = o ? (0, va.jsx)(Z, {
        icon: o,
        size: a
    }) : r ? (0, va.jsx)(Z, {
        name: r,
        mode: n,
        size: a
    }) : null, e[0] = o, e[1] = n, e[2] = r, e[3] = a, e[4] = i) : i = e[4];
    let c = i,
        l = s && `${s}:`,
        d;
    return e[5] !== c || e[6] !== l ? (d = (0, va.jsxs)(he, {
        variant: Ue.DEFAULT,
        className: eN.selectLabel,
        children: [c, l]
    }), e[5] = c, e[6] = l, e[7] = d) : d = e[7], d
}
var Ke = w(W(), 1),
    B_ = w(V(), 1);
var Wj = w(M(), 1);
var lt = w(W(), 1),
    kt = w(V(), 1);
var kj = w(M(), 1);
var oN = "_content_11pzh_2",
    rN = "_item_11pzh_24",
    nN = "_indicator_11pzh_65",
    aN = "_label_11pzh_70",
    sN = "_separator_11pzh_81",
    iN = "_subTriggerArrow_11pzh_87",
    jo = {
        content: oN,
        item: rN,
        indicator: nN,
        label: aN,
        separator: sN,
        subTriggerArrow: iN
    };

function Ql(t) {
    let e = (0, kt.c)(4),
        o;
    e[0] !== t ? ({
        ...o
    } = t, e[0] = t, e[1] = o) : o = e[1];
    let r;
    return e[2] !== o ? (r = (0, lt.jsx)(vs, {
        ...o
    }), e[2] = o, e[3] = r) : r = e[3], r
}

function cN(t) {
    let e = (0, kt.c)(4),
        o;
    e[0] !== t ? ({
        ...o
    } = t, e[0] = t, e[1] = o) : o = e[1];
    let r;
    return e[2] !== o ? (r = (0, lt.jsx)(aa, {
        ...o
    }), e[2] = o, e[3] = r) : r = e[3], r
}

function Jl(t) {
    let e = (0, kt.c)(4),
        o;
    e[0] !== t ? ({
        ...o
    } = t, e[0] = t, e[1] = o) : o = e[1];
    let r;
    return e[2] !== o ? (r = (0, lt.jsx)(ys, {
        ...o
    }), e[2] = o, e[3] = r) : r = e[3], r
}

function eu(t) {
    let e = (0, kt.c)(10),
        o, r, n;
    e[0] !== t ? ({
        className: o,
        sideOffset: n,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n) : (o = e[1], r = e[2], n = e[3]);
    let a = n === void 0 ? 8 : n,
        s;
    e[4] !== o ? (s = T(jo.content, o), e[4] = o, e[5] = s) : s = e[5];
    let i;
    return e[6] !== r || e[7] !== a || e[8] !== s ? (i = (0, lt.jsx)(aa, {
        children: (0, lt.jsx)(_s, {
            className: s,
            sideOffset: a,
            ...r
        })
    }), e[6] = r, e[7] = a, e[8] = s, e[9] = i) : i = e[9], i
}

function tu(t) {
    let e = (0, kt.c)(4),
        o;
    e[0] !== t ? ({
        ...o
    } = t, e[0] = t, e[1] = o) : o = e[1];
    let r;
    return e[2] !== o ? (r = (0, lt.jsx)(Dp, {
        ...o
    }), e[2] = o, e[3] = r) : r = e[3], r
}

function Ti(t) {
    let e = (0, kt.c)(8),
        o, r;
    e[0] !== t ? ({
        className: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let n;
    e[3] !== o ? (n = T(jo.item, o), e[3] = o, e[4] = n) : n = e[4];
    let a;
    return e[5] !== r || e[6] !== n ? (a = (0, lt.jsx)(Mp, {
        className: n,
        ...r
    }), e[5] = r, e[6] = n, e[7] = a) : a = e[7], a
}

function ou(t) {
    let e = (0, kt.c)(10),
        o, r, n;
    e[0] !== t ? ({
        className: r,
        children: o,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n) : (o = e[1], r = e[2], n = e[3]);
    let a;
    e[4] !== r ? (a = T(jo.item, r), e[4] = r, e[5] = a) : a = e[5];
    let s;
    return e[6] !== o || e[7] !== n || e[8] !== a ? (s = (0, lt.jsx)(Pp, {
        className: a,
        ...n,
        children: o
    }), e[6] = o, e[7] = n, e[8] = a, e[9] = s) : s = e[9], s
}

function ru(t) {
    let e = (0, kt.c)(8),
        o, r;
    e[0] !== t ? ({
        className: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let n;
    e[3] !== o ? (n = T(jo.label, o), e[3] = o, e[4] = n) : n = e[4];
    let a;
    return e[5] !== r || e[6] !== n ? (a = (0, lt.jsx)(Np, {
        className: n,
        ...r
    }), e[5] = r, e[6] = n, e[7] = a) : a = e[7], a
}

function nu(t) {
    let e = (0, kt.c)(8),
        o, r;
    e[0] !== t ? ({
        className: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let n;
    e[3] !== o ? (n = T(jo.separator, o), e[3] = o, e[4] = n) : n = e[4];
    let a;
    return e[5] !== r || e[6] !== n ? (a = (0, lt.jsx)(Ip, {
        className: n,
        ...r
    }), e[5] = r, e[6] = n, e[7] = a) : a = e[7], a
}

function au(t) {
    let e = (0, kt.c)(12),
        o, r, n;
    e[0] !== t ? ({
        className: r,
        children: o,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n) : (o = e[1], r = e[2], n = e[3]);
    let a;
    e[4] !== r ? (a = T(jo.indicator, r), e[4] = r, e[5] = a) : a = e[5];
    let s;
    e[6] !== o ? (s = o ?? (0, lt.jsx)(Z, {
        icon: "check-line"
    }), e[6] = o, e[7] = s) : s = e[7];
    let i;
    return e[8] !== n || e[9] !== a || e[10] !== s ? (i = (0, lt.jsx)(Op, {
        className: a,
        ...n,
        children: s
    }), e[8] = n, e[9] = a, e[10] = s, e[11] = i) : i = e[11], i
}

function su(t) {
    let e = (0, kt.c)(4),
        o;
    e[0] !== t ? ({
        ...o
    } = t, e[0] = t, e[1] = o) : o = e[1];
    let r;
    return e[2] !== o ? (r = (0, lt.jsx)(kp, {
        ...o
    }), e[2] = o, e[3] = r) : r = e[3], r
}

function iu(t) {
    let e = (0, kt.c)(11),
        o, r, n;
    e[0] !== t ? ({
        className: r,
        children: o,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n) : (o = e[1], r = e[2], n = e[3]);
    let a;
    e[4] !== r ? (a = T(jo.item, r), e[4] = r, e[5] = a) : a = e[5];
    let s;
    e[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, lt.jsx)(Z, {
        icon: "arrow-right-s-line",
        className: jo.subTriggerArrow
    }), e[6] = s) : s = e[6];
    let i;
    return e[7] !== o || e[8] !== n || e[9] !== a ? (i = (0, lt.jsxs)(Ap, {
        className: a,
        ...n,
        children: [o, s]
    }), e[7] = o, e[8] = n, e[9] = a, e[10] = i) : i = e[10], i
}

function cu(t) {
    let e = (0, kt.c)(8),
        o, r;
    e[0] !== t ? ({
        className: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let n;
    e[3] !== o ? (n = T(jo.content, o), e[3] = o, e[4] = n) : n = e[4];
    let a;
    return e[5] !== r || e[6] !== n ? (a = (0, lt.jsx)(Lp, {
        className: n,
        ...r
    }), e[5] = r, e[6] = n, e[7] = a) : a = e[7], a
}

function W_(t, e) {
    let o = t.id ?? `item-${e}`;
    switch (t.type) {
        case "button":
            return (0, Ke.jsxs)(Ti, {
                disabled: t.disabled,
                className: t.className,
                onClick: t.onClick,
                children: [t.icon && (0, Ke.jsx)(Z, {
                    icon: t.icon,
                    size: "lg"
                }), t.label]
            }, o);
        case "link":
            return (0, Ke.jsx)(Ti, {
                disabled: t.disabled,
                className: t.className,
                asChild: !0,
                children: (0, Ke.jsxs)("a", {
                    href: t.href,
                    target: t.target,
                    children: [t.icon && (0, Ke.jsx)(Z, {
                        icon: t.icon,
                        size: "lg"
                    }), t.label]
                })
            }, o);
        case "checkbox":
            return (0, Ke.jsxs)(ou, {
                disabled: t.disabled,
                className: t.className,
                checked: t.checked,
                onCheckedChange: t.onCheckedChange,
                onSelect: t.onSelect,
                children: [t.icon && (0, Ke.jsx)(Z, {
                    icon: t.icon
                }), t.label, (0, Ke.jsx)(au, {})]
            }, o);
        case "label":
            return (0, Ke.jsx)(ru, {
                className: t.className,
                children: t.label
            }, o);
        case "separator":
            return (0, Ke.jsx)(nu, {
                className: t.className
            }, o);
        case "submenu":
            return (0, Ke.jsxs)(su, {
                children: [(0, Ke.jsxs)(iu, {
                    disabled: t.disabled,
                    className: t.className,
                    children: [t.icon && (0, Ke.jsx)(Z, {
                        icon: t.icon
                    }), t.label]
                }), (0, Ke.jsx)(cu, {
                    children: t.items.map(W_)
                })]
            }, o);
        case "custom":
            return (0, Ke.jsx)("div", {
                children: t.content
            }, o);
        default:
            return (0, Ke.jsx)("div", {
                children: "Unknown item type"
            }, o)
    }
}

function lN(t) {
    let e = (0, B_.c)(17),
        {
            trigger: o,
            items: r,
            open: n,
            onOpenChange: a,
            side: s,
            align: i,
            sideOffset: c,
            className: l
        } = t,
        d = s === void 0 ? "bottom" : s,
        u = i === void 0 ? "center" : i,
        f = c === void 0 ? 8 : c,
        p;
    e[0] !== o ? (p = (0, Ke.jsx)(Jl, {
        asChild: !0,
        children: o
    }), e[0] = o, e[1] = p) : p = e[1];
    let g;
    e[2] !== r ? (g = r.map(W_), e[2] = r, e[3] = g) : g = e[3];
    let m;
    e[4] !== g ? (m = (0, Ke.jsx)(tu, {
        children: g
    }), e[4] = g, e[5] = m) : m = e[5];
    let h;
    e[6] !== u || e[7] !== l || e[8] !== d || e[9] !== f || e[10] !== m ? (h = (0, Ke.jsx)(eu, {
        side: d,
        align: u,
        sideOffset: f,
        className: l,
        children: m
    }), e[6] = u, e[7] = l, e[8] = d, e[9] = f, e[10] = m, e[11] = h) : h = e[11];
    let v;
    return e[12] !== a || e[13] !== n || e[14] !== p || e[15] !== h ? (v = (0, Ke.jsxs)(Ql, {
        open: n,
        onOpenChange: a,
        children: [p, h]
    }), e[12] = a, e[13] = n, e[14] = p, e[15] = h, e[16] = v) : v = e[16], v
}
var j_ = w(W(), 1),
    z_ = w(V(), 1);
var H_ = w(V(), 1);

function lu(t, e) {
    let o = (0, H_.c)(5),
        r = e === void 0 ? "HH:MM UTC" : e,
        n = ha(),
        a;
    o[0] !== r || o[1] !== n ? (a = Jc(r, n), o[0] = r, o[1] = n, o[2] = a) : a = o[2];
    let s = a,
        {
            formattedTimestamp: i
        } = wi(t, s),
        c;
    return o[3] !== i ? (c = {
        formattedTime: i
    }, o[3] = i, o[4] = c) : c = o[4], c
}

function uN(t) {
    let e = (0, z_.c)(3),
        {
            timestamp: o,
            format: r,
            className: n
        } = t,
        a = r === void 0 ? "HH:MM UTC" : r,
        {
            formattedTime: s
        } = lu(o, a),
        i;
    return e[0] !== n || e[1] !== s ? (i = s && (0, j_.jsx)("span", {
        role: "presentation",
        className: n,
        "data-testid": "fmt-timestamp-time",
        children: s
    }), e[0] = n, e[1] = s, e[2] = i) : i = e[2], i
}
var ya = w(W(), 1),
    U_ = w(V(), 1),
    G_ = w(M(), 1);
var uu = (t => (t.SMALL = "small", t.MEDIUM = "medium", t))(uu || {});
var dN = "_spotIcon_2lrai_2",
    fN = "_small_2lrai_3",
    mN = "_placeholder_2lrai_5",
    pN = "_medium_2lrai_11",
    du = {
        spotIcon: dN,
        small: fN,
        placeholder: mN,
        medium: pN
    };

function hN(t) {
    let e = (0, U_.c)(8),
        {
            name: o,
            size: r
        } = t,
        n = r === void 0 ? uu.MEDIUM : r,
        a = Zf[o],
        s = du[n],
        i;
    e[0] !== s ? (i = T(du.spotIcon, s), e[0] = s, e[1] = i) : i = e[1];
    let c;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, ya.jsx)("div", {
        className: du.placeholder
    }), e[2] = c) : c = e[2];
    let l;
    e[3] !== a ? (l = (0, ya.jsx)(G_.Suspense, {
        fallback: c,
        children: (0, ya.jsx)(a, {})
    }), e[3] = a, e[4] = l) : l = e[4];
    let d;
    return e[5] !== i || e[6] !== l ? (d = (0, ya.jsx)("div", {
        className: i,
        "aria-hidden": !0,
        children: l
    }), e[5] = i, e[6] = l, e[7] = d) : d = e[7], d
}
var fu = w(W(), 1),
    Y_ = w(V(), 1);
var sz = w(M(), 1);
var _a = (t => (t.SMALL = "sm", t.MEDIUM = "md", t))(_a || {});
var gN = "_avatar_aqq8p_2",
    vN = "_monogram_aqq8p_15",
    yN = "_isActive_aqq8p_19",
    _N = "_sm_aqq8p_25",
    wN = "_md_aqq8p_34",
    Ei = {
        avatar: gN,
        monogram: vN,
        isActive: yN,
        sm: _N,
        md: wN
    };

function bN(t) {
    let e = (0, Y_.c)(12),
        {
            ariaLabel: o,
            label: r,
            isActive: n,
            size: a
        } = t,
        s = a === void 0 ? _a.MEDIUM : a,
        i;
    e: {
        let m;
        if (e[0] !== r) {
            let _ = r.trim(),
                y;
            e[2] === Symbol.for("react.memo_cache_sentinel") ? (y = /\s+/, e[2] = y) : y = e[2], m = _.split(y, 2), e[0] = r, e[1] = m
        } else m = e[1];
        let [h, v] = m;
        if (s === _a.SMALL) {
            i = h[0];
            break e
        }
        i = `${h[0]??""}${v?.[0]??""}`
    }
    let c = i,
        l = Ei[s],
        d = n && Ei.isActive,
        u;
    e[3] !== l || e[4] !== d ? (u = T(Ei.avatar, l, d), e[3] = l, e[4] = d, e[5] = u) : u = e[5];
    let f = o ?? `Avatar for ${r}`,
        p;
    e[6] !== c ? (p = (0, fu.jsx)(he, {
        className: Ei.monogram,
        "data-testid": "avatar-monogram",
        children: c
    }), e[6] = c, e[7] = p) : p = e[7];
    let g;
    return e[8] !== u || e[9] !== f || e[10] !== p ? (g = (0, fu.jsx)("div", {
        className: u,
        role: "img",
        "aria-label": f,
        children: p
    }), e[8] = u, e[9] = f, e[10] = p, e[11] = g) : g = e[11], g
}
var Di = w(W(), 1),
    $_ = w(V(), 1);
var xz = w(M(), 1);
var wa = w(W(), 1);
var gz = w(V(), 1),
    vz = w(M(), 1);
var Ee = (t => (t.FEEDBACK_NEGATIVE_DEFAULT = "Negative Default", t.FEEDBACK_NEGATIVE_SOLID = "Negative Solid", t.FEEDBACK_NEGATIVE_ICON = "Negative Icon", t.FEEDBACK_NEGATIVE_GHOST = "Negative Ghost", t.FEEDBACK_CAUTION_DEFAULT = "Caution Default", t.FEEDBACK_CAUTION_SOLID = "Caution Solid", t.FEEDBACK_CAUTION_ICON = "Caution Icon", t.FEEDBACK_CAUTION_GHOST = "Caution Ghost", t.FEEDBACK_POSITIVE_DEFAULT = "Positive Default", t.FEEDBACK_POSITIVE_SOLID = "Positive Solid", t.FEEDBACK_POSITIVE_ICON = "Positive Icon", t.FEEDBACK_POSITIVE_GHOST = "Positive Ghost", t.FEEDBACK_NEUTRAL_DEFAULT = "Neutral Default", t.FEEDBACK_NEUTRAL_SOLID = "Neutral Solid", t.FEEDBACK_NEUTRAL_ICON = "Neutral Icon", t.FEEDBACK_NEUTRAL_GHOST = "Neutral Ghost", t.DEFAULT = "Default", t))(Ee || {});
var xN = "_pill_14h7f_2",
    CN = "_sizeSmall_14h7f_23",
    RN = "_sizeLarge_14h7f_28",
    SN = "_feedbackNegativeDefault_14h7f_33",
    TN = "_feedbackNegativeSolid_14h7f_39",
    EN = "_feedbackNegativeGhost_14h7f_45",
    DN = "_feedbackCautionDefault_14h7f_51",
    NN = "_feedbackCautionSolid_14h7f_57",
    MN = "_feedbackCautionGhost_14h7f_63",
    PN = "_feedbackPositiveDefault_14h7f_69",
    ON = "_feedbackPositiveSolid_14h7f_75",
    IN = "_feedbackPositiveGhost_14h7f_81",
    kN = "_feedbackNeutralDefault_14h7f_87",
    AN = "_feedbackNeutralSolid_14h7f_93",
    LN = "_feedbackNeutralGhost_14h7f_99",
    vt = {
        pill: xN,
        sizeSmall: CN,
        sizeLarge: RN,
        feedbackNegativeDefault: SN,
        feedbackNegativeSolid: TN,
        feedbackNegativeGhost: EN,
        feedbackCautionDefault: DN,
        feedbackCautionSolid: NN,
        feedbackCautionGhost: MN,
        feedbackPositiveDefault: PN,
        feedbackPositiveSolid: ON,
        feedbackPositiveGhost: IN,
        feedbackNeutralDefault: kN,
        feedbackNeutralSolid: AN,
        feedbackNeutralGhost: LN
    };

function V_(t) {
    switch (t) {
        case Ee.FEEDBACK_NEGATIVE_DEFAULT:
        case Ee.FEEDBACK_NEGATIVE_ICON:
            return vt.feedbackNegativeDefault;
        case Ee.FEEDBACK_NEGATIVE_SOLID:
            return vt.feedbackNegativeSolid;
        case Ee.FEEDBACK_NEGATIVE_GHOST:
            return vt.feedbackNegativeGhost;
        case Ee.FEEDBACK_CAUTION_DEFAULT:
        case Ee.FEEDBACK_CAUTION_ICON:
            return vt.feedbackCautionDefault;
        case Ee.FEEDBACK_CAUTION_SOLID:
            return vt.feedbackCautionSolid;
        case Ee.FEEDBACK_CAUTION_GHOST:
            return vt.feedbackCautionGhost;
        case Ee.FEEDBACK_POSITIVE_DEFAULT:
        case Ee.FEEDBACK_POSITIVE_ICON:
            return vt.feedbackPositiveDefault;
        case Ee.FEEDBACK_POSITIVE_SOLID:
            return vt.feedbackPositiveSolid;
        case Ee.FEEDBACK_POSITIVE_GHOST:
            return vt.feedbackPositiveGhost;
        case Ee.FEEDBACK_NEUTRAL_DEFAULT:
        case Ee.FEEDBACK_NEUTRAL_ICON:
            return vt.feedbackNeutralDefault;
        case Ee.FEEDBACK_NEUTRAL_SOLID:
            return vt.feedbackNeutralSolid;
        case Ee.FEEDBACK_NEUTRAL_GHOST:
            return vt.feedbackNeutralGhost;
        default:
            return
    }
}

function q_(t) {
    switch (t) {
        case Ee.FEEDBACK_NEGATIVE_ICON:
        case Ee.FEEDBACK_NEGATIVE_GHOST:
            return (0, wa.jsx)(Z, {
                name: "close",
                mode: "line"
            });
        case Ee.FEEDBACK_CAUTION_ICON:
        case Ee.FEEDBACK_CAUTION_GHOST:
            return (0, wa.jsx)(Z, {
                name: "alert",
                mode: "line"
            });
        case Ee.FEEDBACK_POSITIVE_ICON:
        case Ee.FEEDBACK_POSITIVE_GHOST:
            return (0, wa.jsx)(Z, {
                name: "check",
                mode: "line"
            });
        case Ee.FEEDBACK_NEUTRAL_ICON:
        case Ee.FEEDBACK_NEUTRAL_GHOST:
            return (0, wa.jsx)(Z, {
                name: "prohibited",
                mode: "line"
            });
        default:
            return
    }
}

function FN(t) {
    let e = (0, $_.c)(13),
        {
            children: o,
            className: r,
            contentLeft: n,
            size: a,
            variant: s
        } = t,
        i = a === void 0 ? "sm" : a,
        c = s === void 0 ? Ee.DEFAULT : s,
        l = i === "lg",
        d;
    e[0] !== c ? (d = q_(c), e[0] = c, e[1] = d) : d = e[1];
    let u = d,
        f = l ? vt.sizeLarge : vt.sizeSmall,
        p;
    e[2] !== r || e[3] !== f || e[4] !== c ? (p = T(vt.pill, f, V_(c), r), e[2] = r, e[3] = f, e[4] = c, e[5] = p) : p = e[5];
    let g;
    e[6] !== n || e[7] !== u ? (g = (n || u) && (0, Di.jsx)("div", {
        children: n || u
    }), e[6] = n, e[7] = u, e[8] = g) : g = e[8];
    let m;
    return e[9] !== o || e[10] !== p || e[11] !== g ? (m = (0, Di.jsxs)("div", {
        className: p,
        children: [g, o]
    }), e[9] = o, e[10] = p, e[11] = g, e[12] = m) : m = e[12], m
}
var On = w(W(), 1),
    K_ = w(V(), 1);
var ba = (t => (t.SMALL = "sm", t.MEDIUM = "md", t))(ba || {}),
    Ni = (t => (t.LIGHT = "light", t.GOLD = "gold", t.DARK_RED = "darkred", t.RED = "red", t.ORANGE = "orange", t.GRAY = "gray", t.AQUA = "aqua", t.YELLOW = "yellow", t.DARK_GRAY = "darkgray", t))(Ni || {});
var BN = "_tag_r9r80_2",
    WN = "_label_r9r80_24",
    HN = "_sideContent_r9r80_28",
    jN = "_grayTagLevels_r9r80_62",
    zN = "_darkgrayTagLevels_r9r80_71",
    UN = "_goldTagLevels_r9r80_85",
    GN = "_orangeTagLevels_r9r80_94",
    YN = "_yellowTagLevels_r9r80_103",
    VN = "_redTagLevels_r9r80_115",
    qN = "_darkredTagLevels_r9r80_124",
    $N = "_aquaTagLevels_r9r80_135",
    Pn = {
        tag: BN,
        label: WN,
        sideContent: HN,
        "size-sm": "_size-sm_r9r80_40",
        "size-md": "_size-md_r9r80_51",
        grayTagLevels: jN,
        darkgrayTagLevels: zN,
        goldTagLevels: UN,
        orangeTagLevels: GN,
        yellowTagLevels: YN,
        redTagLevels: VN,
        darkredTagLevels: qN,
        aquaTagLevels: $N
    };

function KN(t) {
    let e = (0, K_.c)(25),
        o, r, n, a, s, i, c;
    e[0] !== t ? ({
        children: o,
        variant: i,
        size: c,
        contentLeft: n,
        contentRight: a,
        className: r,
        ...s
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7]);
    let l = i === void 0 ? Ni.LIGHT : i,
        d = c === void 0 ? ba.SMALL : c,
        u = Pn[`${l}TagLevels`],
        f = Pn[`size-${d}`],
        p;
    e[8] !== r || e[9] !== u || e[10] !== f ? (p = T(Pn.tag, u, f, r), e[8] = r, e[9] = u, e[10] = f, e[11] = p) : p = e[11];
    let g;
    e[12] !== n ? (g = n && (0, On.jsx)("div", {
        className: Pn.sideContent,
        children: n
    }), e[12] = n, e[13] = g) : g = e[13];
    let m = d === ba.SMALL ? Ue.SMALL : Ue.DEFAULT,
        h;
    e[14] !== o || e[15] !== m ? (h = (0, On.jsx)(he, {
        variant: m,
        className: Pn.label,
        children: o
    }), e[14] = o, e[15] = m, e[16] = h) : h = e[16];
    let v;
    e[17] !== a ? (v = a && (0, On.jsx)("div", {
        className: Pn.sideContent,
        children: a
    }), e[17] = a, e[18] = v) : v = e[18];
    let _;
    return e[19] !== s || e[20] !== p || e[21] !== g || e[22] !== h || e[23] !== v ? (_ = (0, On.jsxs)("span", {
        ...s,
        className: p,
        children: [g, h, v]
    }), e[19] = s, e[20] = p, e[21] = g, e[22] = h, e[23] = v, e[24] = _) : _ = e[24], _
}
var X_ = w(W(), 1),
    Z_ = w(V(), 1);
var Fz = w(M(), 1);
var XN = "_divider_36g4d_2",
    ZN = "_primary_36g4d_9",
    QN = "_secondary_36g4d_13",
    JN = "_none_36g4d_17",
    eM = "_xs_36g4d_22",
    tM = "_sm_36g4d_27",
    oM = "_md_36g4d_32",
    rM = "_lg_36g4d_37",
    nM = "_dot_36g4d_42",
    aM = "_pipe_36g4d_48",
    sM = "_dash_36g4d_53",
    iM = "_forwardSlash_36g4d_58",
    cM = "_backwardSlash_36g4d_64",
    Mi = {
        divider: XN,
        primary: ZN,
        secondary: QN,
        none: JN,
        xs: eM,
        sm: tM,
        md: oM,
        lg: rM,
        dot: nM,
        pipe: aM,
        dash: sM,
        forwardSlash: iM,
        backwardSlash: cM
    },
    Q_ = (t => (t.DOT = "dot", t.PIPE = "pipe", t.DASH = "dash", t.FORWARD_SLASH = "forwardSlash", t.BACKWARD_SLASH = "backwardSlash", t))(Q_ || {}),
    lM = ["pipe", "forwardSlash", "backwardSlash"],
    uM = ["dash"];
var J_ = (t => (t.NONE = "none", t.XS = "xs", t.SM = "sm", t.MD = "md", t.LG = "lg", t))(J_ || {});

function dM(t) {
    let e = (0, Z_.c)(12),
        {
            variant: o,
            as: r,
            className: n,
            color: a,
            size: s,
            spacing: i
        } = t,
        c = r === void 0 ? "span" : r,
        l = a === void 0 ? "primary" : a,
        d = i === void 0 ? "none" : i,
        u = c,
        f = Mi[o],
        p = Mi[l],
        g = Mi[d],
        m;
    e[0] !== n || e[1] !== f || e[2] !== p || e[3] !== g ? (m = T(n, Mi.divider, f, p, g), e[0] = n, e[1] = f, e[2] = p, e[3] = g, e[4] = m) : m = e[4];
    let h;
    e[5] !== s || e[6] !== o ? (h = {
        ...s ? {
            height: lM.includes(o) ? s : void 0,
            width: uM.includes(o) ? s : void 0,
            marginBottom: 0
        } : {}
    }, e[5] = s, e[6] = o, e[7] = h) : h = e[7];
    let v;
    return e[8] !== u || e[9] !== m || e[10] !== h ? (v = (0, X_.jsx)(u, {
        role: "none",
        className: m,
        style: h
    }), e[8] = u, e[9] = m, e[10] = h, e[11] = v) : v = e[11], v
}
var yt = w(W(), 1),
    ew = w(V(), 1);
var Uz = w(M(), 1);
var fM = "_alert_m4ryu_2",
    mM = "_checkboxIndicator_m4ryu_6",
    pM = "_checkboxLabel_m4ryu_13",
    hM = "_checkboxRoot_m4ryu_19",
    gM = "_container_m4ryu_44",
    vM = "_error_m4ryu_50",
    yM = "_readOnly_m4ryu_94",
    Gr = {
        alert: fM,
        checkboxIndicator: mM,
        checkboxLabel: pM,
        checkboxRoot: hM,
        container: gM,
        error: vM,
        default: "_default_m4ryu_71",
        readOnly: yM
    };

function _M(t) {
    let e = (0, ew.c)(32),
        o, r, n, a, s, i, c;
    e[0] !== t ? ({
        checked: r,
        onCheckedChange: s,
        id: n,
        label: a,
        required: i,
        variant: c,
        ...o
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7]);
    let l = c === void 0 ? "default" : c,
        d = l !== "readOnly" ? s : void 0,
        u = Gr[l],
        f;
    e[8] !== u ? (f = T(Gr.checkboxRoot, u), e[8] = u, e[9] = f) : f = e[9];
    let p;
    e[10] !== r ? (p = r === "indeterminate" && (0, yt.jsx)(Z, {
        name: "subtract",
        size: "md"
    }), e[10] = r, e[11] = p) : p = e[11];
    let g;
    e[12] !== r ? (g = r === !0 && (0, yt.jsx)(Z, {
        name: "check",
        size: "md"
    }), e[12] = r, e[13] = g) : g = e[13];
    let m;
    e[14] !== p || e[15] !== g ? (m = (0, yt.jsxs)(sl, {
        className: Gr.checkboxIndicator,
        children: [p, g]
    }), e[14] = p, e[15] = g, e[16] = m) : m = e[16];
    let h;
    e[17] !== o || e[18] !== r || e[19] !== n || e[20] !== d || e[21] !== f || e[22] !== m ? (h = (0, yt.jsx)(al, {
        ...o,
        tabIndex: 0,
        checked: r,
        onCheckedChange: d,
        className: f,
        id: n,
        children: m
    }), e[17] = o, e[18] = r, e[19] = n, e[20] = d, e[21] = f, e[22] = m, e[23] = h) : h = e[23];
    let v;
    e[24] !== n || e[25] !== a || e[26] !== i || e[27] !== l ? (v = a && n && (0, yt.jsxs)(yt.Fragment, {
        children: [l === "error" && (0, yt.jsx)(Z, {
            name: "error-warning",
            size: "sm",
            mode: "line",
            className: Gr.alert
        }), (0, yt.jsxs)("label", {
            htmlFor: n,
            className: Gr.checkboxLabel,
            children: [(0, yt.jsx)(he, {
                children: a
            }), i && (0, yt.jsxs)(yt.Fragment, {
                children: [" ", (0, yt.jsx)(he, {
                    className: Gr.alert,
                    children: "*"
                })]
            })]
        })]
    }), e[24] = n, e[25] = a, e[26] = i, e[27] = l, e[28] = v) : v = e[28];
    let _;
    return e[29] !== h || e[30] !== v ? (_ = (0, yt.jsxs)("div", {
        className: Gr.container,
        children: [h, v]
    }), e[29] = h, e[30] = v, e[31] = _) : _ = e[31], _
}
var zo = w(W(), 1),
    tw = w(V(), 1);
var wM = "_formField_1iqqh_2",
    bM = "_formFieldLabel_1iqqh_7",
    xM = "_formFieldDescription_1iqqh_14",
    CM = "_formFieldContent_1iqqh_19",
    RM = "_formFieldErrorText_1iqqh_24",
    SM = "_formFieldHintText_1iqqh_32",
    TM = "_formFieldRequired_1iqqh_36",
    Yr = {
        formField: wM,
        formFieldLabel: bM,
        formFieldDescription: xM,
        formFieldContent: CM,
        formFieldErrorText: RM,
        formFieldHintText: SM,
        formFieldRequired: TM
    };

function EM(t) {
    let e = (0, tw.c)(21),
        {
            label: o,
            labelFor: r,
            description: n,
            errorText: a,
            hintText: s,
            required: i,
            children: c,
            className: l
        } = t,
        d;
    e[0] !== l ? (d = T(Yr.formField, l), e[0] = l, e[1] = d) : d = e[1];
    let u;
    e[2] !== o || e[3] !== r || e[4] !== i ? (u = o && (0, zo.jsxs)("label", {
        htmlFor: r,
        className: Yr.formFieldLabel,
        children: [o, i && (0, zo.jsx)("span", {
            className: Yr.formFieldRequired,
            children: " *"
        })]
    }), e[2] = o, e[3] = r, e[4] = i, e[5] = u) : u = e[5];
    let f;
    e[6] !== n ? (f = n && (0, zo.jsx)("div", {
        className: Yr.formFieldDescription,
        children: n
    }), e[6] = n, e[7] = f) : f = e[7];
    let p;
    e[8] !== c ? (p = (0, zo.jsx)("div", {
        className: Yr.formFieldContent,
        children: c
    }), e[8] = c, e[9] = p) : p = e[9];
    let g;
    e[10] !== a ? (g = a && (0, zo.jsx)("div", {
        className: Yr.formFieldErrorText,
        children: a
    }), e[10] = a, e[11] = g) : g = e[11];
    let m;
    e[12] !== s ? (m = s && (0, zo.jsx)("div", {
        className: Yr.formFieldHintText,
        children: s
    }), e[12] = s, e[13] = m) : m = e[13];
    let h;
    return e[14] !== d || e[15] !== u || e[16] !== f || e[17] !== p || e[18] !== g || e[19] !== m ? (h = (0, zo.jsxs)("div", {
        className: d,
        children: [u, f, p, g, m]
    }), e[14] = d, e[15] = u, e[16] = f, e[17] = p, e[18] = g, e[19] = m, e[20] = h) : h = e[20], h
}
var qr = w(W(), 1),
    nw = w(V(), 1);
var sU = w(M(), 1);
var ow = w(W(), 1),
    rw = w(V(), 1);

function Pi(t) {
    let e = (0, rw.c)(6),
        o, r;
    e[0] !== t ? ({
        children: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let n;
    return e[3] !== o || e[4] !== r ? (n = (0, ow.jsx)(Sh, {
        ...r,
        children: o
    }), e[3] = o, e[4] = r, e[5] = n) : n = e[5], n
}
var DM = "_radioWrapper_1lzs8_2",
    NM = "_labelText_1lzs8_7",
    MM = "_radio_1lzs8_2",
    PM = "_radioCard_1lzs8_59",
    OM = "_radioGroup_1lzs8_107",
    Vr = {
        radioWrapper: DM,
        labelText: NM,
        radio: MM,
        default: "_default_1lzs8_22",
        radioCard: PM,
        radioGroup: OM
    };

function IM(t) {
    let e = (0, nw.c)(28),
        o, r, n, a, s, i, c, l;
    e[0] !== t ? ({
        "aria-label": o,
        value: c,
        className: r,
        id: n,
        label: a,
        variant: i,
        wrapperClassName: l,
        ...s
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c, e[8] = l) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7], l = e[8]);
    let d = i === void 0 ? "default" : i,
        u = n || c,
        f;
    e[9] !== l ? (f = T(Vr.radioWrapper, l), e[9] = l, e[10] = f) : f = e[10];
    let p = Vr[d],
        g;
    e[11] !== r || e[12] !== p ? (g = T(Vr.radio, p, r), e[11] = r, e[12] = p, e[13] = g) : g = e[13];
    let m;
    e[14] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, qr.jsx)(Ss, {}), e[14] = m) : m = e[14];
    let h;
    e[15] !== o || e[16] !== u || e[17] !== s || e[18] !== g || e[19] !== c ? (h = (0, qr.jsx)(Pi, {
        ...s,
        "aria-label": o,
        value: c,
        id: u,
        className: g,
        children: m
    }), e[15] = o, e[16] = u, e[17] = s, e[18] = g, e[19] = c, e[20] = h) : h = e[20];
    let v;
    e[21] !== u || e[22] !== a ? (v = a && (0, qr.jsx)("label", {
        htmlFor: u,
        children: (0, qr.jsx)(he, {
            className: Vr.labelText,
            children: a
        })
    }), e[21] = u, e[22] = a, e[23] = v) : v = e[23];
    let _;
    return e[24] !== f || e[25] !== h || e[26] !== v ? (_ = (0, qr.jsxs)("div", {
        className: f,
        children: [h, v]
    }), e[24] = f, e[25] = h, e[26] = v, e[27] = _) : _ = e[27], _
}
var In = w(W(), 1),
    aw = w(V(), 1);
var gU = w(M(), 1);
var kM = "_toggleButtons_1t0oz_3",
    AM = "_radio_1t0oz_10",
    LM = "_radioWrapper_1t0oz_16",
    FM = "_label_1t0oz_48",
    BM = "_secondary_1t0oz_96",
    $r = {
        toggleButtons: kM,
        radio: AM,
        radioWrapper: LM,
        default: "_default_1t0oz_40",
        label: FM,
        secondary: BM
    };

function WM(t) {
    let e = (0, aw.c)(25),
        o, r, n, a, s, i, c;
    e[0] !== t ? ({
        "aria-label": o,
        value: i,
        className: r,
        id: n,
        label: a,
        wrapperClassName: c,
        ...s
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7]);
    let l = n || i,
        d;
    e[8] !== c ? (d = T($r.radioWrapper, c), e[8] = c, e[9] = d) : d = e[9];
    let u;
    e[10] !== r ? (u = T($r.radio, r), e[10] = r, e[11] = u) : u = e[11];
    let f;
    e[12] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, In.jsx)(Ss, {}), e[12] = f) : f = e[12];
    let p;
    e[13] !== a ? (p = (0, In.jsx)(he, {
        className: $r.label,
        children: a
    }), e[13] = a, e[14] = p) : p = e[14];
    let g;
    e[15] !== o || e[16] !== l || e[17] !== s || e[18] !== u || e[19] !== p || e[20] !== i ? (g = (0, In.jsxs)(Pi, {
        ...s,
        "aria-label": o,
        value: i,
        id: l,
        className: u,
        children: [f, p]
    }), e[15] = o, e[16] = l, e[17] = s, e[18] = u, e[19] = p, e[20] = i, e[21] = g) : g = e[21];
    let m;
    return e[22] !== d || e[23] !== g ? (m = (0, In.jsx)("div", {
        className: d,
        children: g
    }), e[22] = d, e[23] = g, e[24] = m) : m = e[24], m
}
var sw = w(W(), 1),
    iw = w(V(), 1);
var bU = w(M(), 1);
var cw = (t => (t.SECONDARY = "secondary", t.DEFAULT = "default", t))(cw || {});

function HM(t) {
    let e = (0, iw.c)(12),
        o, r, n, a;
    e[0] !== t ? ({
        children: o,
        className: r,
        variant: a,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a) : (o = e[1], r = e[2], n = e[3], a = e[4]);
    let s = $r[a === void 0 ? "default" : a],
        i;
    e[5] !== r || e[6] !== s ? (i = T($r.toggleButtons, s, r), e[5] = r, e[6] = s, e[7] = i) : i = e[7];
    let c;
    return e[8] !== o || e[9] !== n || e[10] !== i ? (c = (0, sw.jsx)(Rs, {
        ...n,
        className: i,
        children: o
    }), e[8] = o, e[9] = n, e[10] = i, e[11] = c) : c = e[11], c
}
var lw = w(W(), 1),
    uw = w(V(), 1);
var SU = w(M(), 1);

function jM(t) {
    let e = (0, uw.c)(10),
        o, r, n;
    e[0] !== t ? ({
        children: o,
        className: r,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n) : (o = e[1], r = e[2], n = e[3]);
    let a;
    e[4] !== r ? (a = T(Vr.radioGroup, r), e[4] = r, e[5] = a) : a = e[5];
    let s;
    return e[6] !== o || e[7] !== n || e[8] !== a ? (s = (0, lw.jsx)(Rs, {
        ...n,
        className: a,
        children: o
    }), e[6] = o, e[7] = n, e[8] = a, e[9] = s) : s = e[9], s
}
var co = w(W(), 1),
    dw = w(V(), 1);
var fw = w(M(), 1);
var zM = "_switchContainer_616za_3",
    UM = "_switchRoot_616za_11",
    GM = "_switchRootTextPadding_616za_32",
    YM = "_switchRootDefaultPadding_616za_36",
    VM = "_switchThumb_616za_60",
    qM = "_switchRootReadOnly_616za_95",
    $M = "_thumbWithoutText_616za_106",
    KM = "_readOnlyThumb_616za_107",
    XM = "_readOnlyText_616za_126",
    ZM = "_readOnlyColor_616za_127",
    QM = "_label_616za_135",
    JM = "_iconColor_616za_139",
    eP = "_switchText_616za_140",
    tP = "_disabledIconColor_616za_144",
    oP = "_disabledSwitchText_616za_145",
    at = {
        switchContainer: zM,
        switchRoot: UM,
        switchRootTextPadding: GM,
        switchRootDefaultPadding: YM,
        switchThumb: VM,
        switchRootReadOnly: qM,
        thumbWithoutText: $M,
        readOnlyThumb: KM,
        readOnlyText: XM,
        readOnlyColor: ZM,
        label: QM,
        iconColor: JM,
        switchText: eP,
        disabledIconColor: tP,
        disabledSwitchText: oP
    };

function rP(t) {
    let e = (0, dw.c)(57),
        o, r, n, a, s, i, c, l, d, u;
    e[0] !== t ? ({
        text: u,
        label: a,
        disabled: r,
        readOnly: c,
        variant: l,
        checked: o,
        onCheckedChange: s,
        labelPosition: d,
        id: n,
        ...i
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c, e[8] = l, e[9] = d, e[10] = u) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7], l = e[8], d = e[9], u = e[10]);
    let f = c === void 0 ? !1 : c,
        p = l === void 0 ? "default" : l,
        g = d === void 0 ? "right" : d,
        m = p === "withText",
        h = (0, fw.useId)(),
        v = n ?? h,
        _;
    e[11] !== a || e[12] !== v ? (_ = () => (0, co.jsx)("label", {
        htmlFor: v,
        children: (0, co.jsx)(he, {
            variant: Ue.DEFAULT,
            className: at.label,
            children: a
        })
    }), e[11] = a, e[12] = v, e[13] = _) : _ = e[13];
    let y = _,
        x;
    e[14] !== a || e[15] !== g || e[16] !== y ? (x = g === "left" && a && y(), e[14] = a, e[15] = g, e[16] = y, e[17] = x) : x = e[17];
    let b = m ? at.switchRootTextPadding : at.switchRootDefaultPadding,
        C = f && at.switchRootReadOnly,
        R;
    e[18] !== b || e[19] !== C ? (R = T(at.switchRoot, b, C), e[18] = b, e[19] = C, e[20] = R) : R = e[20];
    let S = o ? u?.enabled : u?.disabled,
        E;
    e[21] !== m || e[22] !== f ? (E = m ? at.switchThumb : f ? T(at.switchThumb, at.readOnlyThumb) : T(at.switchThumb, at.thumbWithoutText), e[21] = m, e[22] = f, e[23] = E) : E = e[23];
    let D;
    e[24] !== o || e[25] !== r || e[26] !== m || e[27] !== f ? (D = m && !r && (0, co.jsx)(Z, {
        name: o ? "checkbox-circle" : "close-circle",
        mode: "fill",
        className: f ? at.readOnlyColor : at.iconColor,
        size: "md"
    }), e[24] = o, e[25] = r, e[26] = m, e[27] = f, e[28] = D) : D = e[28];
    let N;
    e[29] !== E || e[30] !== D ? (N = (0, co.jsx)(Oh, {
        className: E,
        children: D
    }), e[29] = E, e[30] = D, e[31] = N) : N = e[31];
    let O;
    e[32] !== o || e[33] !== r || e[34] !== m || e[35] !== f || e[36] !== u?.disabled || e[37] !== u?.enabled ? (O = m ? (0, co.jsx)("span", {
        children: (0, co.jsx)(he, {
            variant: Ue.DEFAULT,
            className: f ? at.readOnlyText : r ? at.disabledSwitchText : at.switchText,
            children: o ? u?.enabled : u?.disabled
        })
    }) : (0, co.jsx)(Z, {
        name: o ? "check" : "close",
        mode: "line",
        size: "lg",
        className: f ? at.readOnlyColor : r ? at.disabledIconColor : at.iconColor
    }), e[32] = o, e[33] = r, e[34] = m, e[35] = f, e[36] = u?.disabled, e[37] = u?.enabled, e[38] = O) : O = e[38];
    let F;
    e[39] !== o || e[40] !== r || e[41] !== s || e[42] !== i || e[43] !== v || e[44] !== N || e[45] !== O || e[46] !== R || e[47] !== S ? (F = (0, co.jsxs)(Ph, {
        id: v,
        disabled: r,
        className: R,
        checked: o,
        onCheckedChange: s,
        "aria-label": S,
        ...i,
        children: [N, O]
    }), e[39] = o, e[40] = r, e[41] = s, e[42] = i, e[43] = v, e[44] = N, e[45] = O, e[46] = R, e[47] = S, e[48] = F) : F = e[48];
    let P;
    e[49] !== a || e[50] !== g || e[51] !== y ? (P = g === "right" && a && y(), e[49] = a, e[50] = g, e[51] = y, e[52] = P) : P = e[52];
    let B;
    return e[53] !== F || e[54] !== P || e[55] !== x ? (B = (0, co.jsxs)("div", {
        className: at.switchContainer,
        children: [x, F, P]
    }), e[53] = F, e[54] = P, e[55] = x, e[56] = B) : B = e[56], B
}
var vr = w(W(), 1),
    mw = w(V(), 1);
var WU = w(M(), 1);
var nP = "_calendar_a09mm_2",
    aP = "_months_a09mm_11",
    sP = "_month_a09mm_11",
    iP = "_nav_a09mm_31",
    cP = "_buttonPrev_a09mm_41",
    lP = "_buttonNext_a09mm_42",
    uP = "_monthCaption_a09mm_62",
    dP = "_dropdowns_a09mm_70",
    fP = "_dropdownRoot_a09mm_81",
    mP = "_dropdown_a09mm_70",
    pP = "_captionLabel_a09mm_94",
    hP = "_captionLabelDropdown_a09mm_99",
    gP = "_table_a09mm_110",
    vP = "_weekdays_a09mm_115",
    yP = "_weekday_a09mm_115",
    _P = "_week_a09mm_115",
    wP = "_weekNumberHeader_a09mm_136",
    bP = "_weekNumber_a09mm_136",
    xP = "_day_a09mm_147",
    CP = "_hidden_a09mm_151",
    RP = "_dayButton_a09mm_157",
    SP = "_outside_a09mm_182",
    TP = "_disabled_a09mm_183",
    EP = "_selected_a09mm_187",
    DP = "_rangeMiddle_a09mm_194",
    NP = "_rangeStart_a09mm_201",
    MP = "_rangeEnd_a09mm_208",
    PP = "_disabledTooltip_a09mm_219",
    Te = {
        calendar: nP,
        months: aP,
        month: sP,
        nav: iP,
        buttonPrev: cP,
        buttonNext: lP,
        monthCaption: uP,
        dropdowns: dP,
        dropdownRoot: fP,
        dropdown: mP,
        captionLabel: pP,
        captionLabelDropdown: hP,
        table: gP,
        weekdays: vP,
        weekday: yP,
        week: _P,
        weekNumberHeader: wP,
        weekNumber: bP,
        day: xP,
        hidden: CP,
        dayButton: RP,
        outside: SP,
        disabled: TP,
        selected: EP,
        rangeMiddle: DP,
        rangeStart: NP,
        rangeEnd: MP,
        disabledTooltip: PP
    };

function pw(t) {
    let e = (0, mw.c)(89),
        o, r, n, a, s, i, c;
    e[0] !== t ? ({
        classNames: o,
        showOutsideDays: i,
        captionLayout: c,
        formatters: a,
        components: r,
        disabledTooltip: n,
        ...s
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7]);
    let l = i === void 0 ? !0 : i,
        d = c === void 0 ? "label" : c,
        u, f, p, g, m, h, v, _, y, x, b, C, R, S, E, D, N, O, F, P, B, k, G, H, L, re, ne, ue, de, pe, _e, be;
    if (e[8] !== d || e[9] !== a || e[10] !== l) {
        let Y = Xs();
        u = Mv, G = l, H = Te.calendar, L = d, e[43] !== a ? (re = {
            formatMonthDropdown: IP,
            ...a
        }, e[43] = a, e[44] = re) : re = e[44], k = T(Te.root, Y.root), ne = T(Te.months, Y.months), ue = T(Te.month, Y.month), de = T(Te.nav, Y.nav), pe = T(Te.buttonPrev, Y.button_previous), _e = T(Te.buttonNext, Y.button_next), be = T(Te.monthCaption, Y.month_caption), f = T(Te.dropdowns, Y.dropdowns), p = T(Te.dropdownRoot, Y.dropdown_root), g = T(Te.dropdown, Y.dropdown), m = T(d === "label" ? Te.captionLabel : Te.captionLabelDropdown, Y.caption_label), e[45] === Symbol.for("react.memo_cache_sentinel") ? (h = T(Te.table), e[45] = h) : h = e[45], v = T(Te.weekdays, Y.weekdays), _ = T(Te.weekday, Y.weekday), y = T(Te.week, Y.week), x = T(Te.weekNumberHeader, Y.week_number_header), b = T(Te.weekNumber, Y.week_number), C = T(Te.day, Y.day), R = T(Te.dayButton, Y.day_button), S = T(Te.selected, Y.selected), E = T(Te.rangeStart, Y.range_start), D = T(Te.rangeMiddle, Y.range_middle), N = T(Te.rangeEnd, Y.range_end), O = T(Te.today, Y.today), F = T(Te.outside, Y.outside), P = T(Te.disabled, Y.disabled), B = T(Te.hidden, Y.hidden), e[8] = d, e[9] = a, e[10] = l, e[11] = u, e[12] = f, e[13] = p, e[14] = g, e[15] = m, e[16] = h, e[17] = v, e[18] = _, e[19] = y, e[20] = x, e[21] = b, e[22] = C, e[23] = R, e[24] = S, e[25] = E, e[26] = D, e[27] = N, e[28] = O, e[29] = F, e[30] = P, e[31] = B, e[32] = k, e[33] = G, e[34] = H, e[35] = L, e[36] = re, e[37] = ne, e[38] = ue, e[39] = de, e[40] = pe, e[41] = _e, e[42] = be
    } else u = e[11], f = e[12], p = e[13], g = e[14], m = e[15], h = e[16], v = e[17], _ = e[18], y = e[19], x = e[20], b = e[21], C = e[22], R = e[23], S = e[24], E = e[25], D = e[26], N = e[27], O = e[28], F = e[29], P = e[30], B = e[31], k = e[32], G = e[33], H = e[34], L = e[35], re = e[36], ne = e[37], ue = e[38], de = e[39], pe = e[40], _e = e[41], be = e[42];
    let j;
    e[46] !== o || e[47] !== f || e[48] !== p || e[49] !== g || e[50] !== m || e[51] !== h || e[52] !== v || e[53] !== _ || e[54] !== y || e[55] !== x || e[56] !== b || e[57] !== C || e[58] !== R || e[59] !== S || e[60] !== E || e[61] !== D || e[62] !== N || e[63] !== O || e[64] !== F || e[65] !== P || e[66] !== B || e[67] !== k || e[68] !== ne || e[69] !== ue || e[70] !== de || e[71] !== pe || e[72] !== _e || e[73] !== be ? (j = {
        root: k,
        months: ne,
        month: ue,
        nav: de,
        button_previous: pe,
        button_next: _e,
        month_caption: be,
        dropdowns: f,
        dropdown_root: p,
        dropdown: g,
        caption_label: m,
        table: h,
        weekdays: v,
        weekday: _,
        week: y,
        week_number_header: x,
        week_number: b,
        day: C,
        day_button: R,
        selected: S,
        range_start: E,
        range_middle: D,
        range_end: N,
        today: O,
        outside: F,
        disabled: P,
        hidden: B,
        ...o
    }, e[46] = o, e[47] = f, e[48] = p, e[49] = g, e[50] = m, e[51] = h, e[52] = v, e[53] = _, e[54] = y, e[55] = x, e[56] = b, e[57] = C, e[58] = R, e[59] = S, e[60] = E, e[61] = D, e[62] = N, e[63] = O, e[64] = F, e[65] = P, e[66] = B, e[67] = k, e[68] = ne, e[69] = ue, e[70] = de, e[71] = pe, e[72] = _e, e[73] = be, e[74] = j) : j = e[74];
    let ce;
    e[75] !== n ? (ce = Y => {
        let {
            day: we,
            modifiers: Ae,
            ...Be
        } = Y;
        return Ae.disabled && n ? (0, vr.jsx)(Zl, {
            tabIndex: -1,
            content: typeof n == "function" ? n(we.date) : n,
            contentClassName: Te.disabledTooltip,
            children: (0, vr.jsx)("button", {
                ...Be
            })
        }) : (0, vr.jsx)("button", {
            ...Be
        })
    }, e[75] = n, e[76] = ce) : ce = e[76];
    let ve;
    e[77] !== r || e[78] !== ce ? (ve = {
        Chevron: OP,
        DayButton: ce,
        ...r
    }, e[77] = r, e[78] = ce, e[79] = ve) : ve = e[79];
    let ae;
    return e[80] !== u || e[81] !== s || e[82] !== G || e[83] !== H || e[84] !== L || e[85] !== re || e[86] !== j || e[87] !== ve ? (ae = (0, vr.jsx)(u, {
        showOutsideDays: G,
        className: H,
        captionLayout: L,
        formatters: re,
        classNames: j,
        components: ve,
        ...s
    }), e[80] = u, e[81] = s, e[82] = G, e[83] = H, e[84] = L, e[85] = re, e[86] = j, e[87] = ve, e[88] = ae) : ae = e[88], ae
}

function OP(t) {
    let {
        orientation: e
    } = t;
    return e === "left" ? (0, vr.jsx)(Z, {
        name: "arrow-left-s",
        mode: "line"
    }) : e === "right" ? (0, vr.jsx)(Z, {
        name: "arrow-right-s",
        mode: "line"
    }) : (0, vr.jsx)(Z, {
        name: "arrow-down-s",
        mode: "line"
    })
}

function IP(t) {
    return t.toLocaleString("default", {
        month: "short"
    })
}
var Kr = w(W(), 1),
    hw = w(V(), 1);
var $U = w(M(), 1);
var kP = "_popoverContent_1prje_2",
    AP = {
        popoverContent: kP
    };

function LP(t) {
    let e = (0, hw.c)(25),
        {
            dayPickerProps: o,
            popoverProps: r,
            popoverContentProps: n,
            popoverContentFooter: a,
            isLoading: s,
            isDisabled: i,
            disabledTooltip: c
        } = t,
        l;
    e[0] !== n ? (l = n ?? {}, e[0] = n, e[1] = l) : l = e[1];
    let d, u, f;
    e[2] !== l ? ({
        className: d,
        sideOffset: f,
        ...u
    } = l, e[2] = l, e[3] = d, e[4] = u, e[5] = f) : (d = e[3], u = e[4], f = e[5]);
    let p = f === void 0 ? 8 : f,
        g;
    e[6] !== o || e[7] !== i || e[8] !== s ? (g = (0, Kr.jsx)(Js, {
        asChild: !0,
        children: (0, Kr.jsx)(y_, {
            dayPickerProps: o,
            isLoading: s,
            isDisabled: i
        })
    }), e[6] = o, e[7] = i, e[8] = s, e[9] = g) : g = e[9];
    let m;
    e[10] !== d ? (m = T(AP.popoverContent, d), e[10] = d, e[11] = m) : m = e[11];
    let h;
    e[12] !== o || e[13] !== c ? (h = (0, Kr.jsx)(pw, {
        ...o,
        disabledTooltip: c
    }), e[12] = o, e[13] = c, e[14] = h) : h = e[14];
    let v;
    e[15] !== a || e[16] !== u || e[17] !== p || e[18] !== m || e[19] !== h ? (v = (0, Kr.jsxs)(ei, {
        className: m,
        sideOffset: p,
        ...u,
        children: [h, a]
    }), e[15] = a, e[16] = u, e[17] = p, e[18] = m, e[19] = h, e[20] = v) : v = e[20];
    let _;
    return e[21] !== r || e[22] !== g || e[23] !== v ? (_ = (0, Kr.jsxs)(Qs, {
        ...r,
        children: [g, v]
    }), e[21] = r, e[22] = g, e[23] = v, e[24] = _) : _ = e[24], _
}
var Co = w(W(), 1);
var aG = w(V(), 1),
    sG = w(M(), 1);
var Oi = (t => (t.DEFAULT = "default", t.BRAND = "brand", t.SUCCESS = "success", t.INFO = "info", t.CAUTION = "caution", t.ERROR = "error", t))(Oi || {});
var FP = "_broadcastBanner_xku2k_2",
    BP = "_titleContainer_xku2k_19",
    WP = "_title_xku2k_19",
    HP = "_icon_xku2k_30",
    jP = "_contentContainer_xku2k_36",
    zP = "_text_xku2k_43",
    UP = "_actions_xku2k_48",
    GP = "_closeButton_xku2k_55",
    YP = "_brand_xku2k_66",
    VP = "_success_xku2k_70",
    qP = "_info_xku2k_74",
    $P = "_caution_xku2k_78",
    KP = "_error_xku2k_82",
    Uo = {
        broadcastBanner: FP,
        titleContainer: BP,
        title: WP,
        icon: HP,
        contentContainer: jP,
        text: zP,
        actions: UP,
        closeButton: GP,
        brand: YP,
        success: VP,
        info: qP,
        caution: $P,
        error: KP
    };

function XP({
    children: t,
    variant: e = Oi.DEFAULT,
    icon: o,
    title: r,
    onDismiss: n,
    actions: a,
    ["aria-live"]: s = "assertive"
}) {
    return (0, Co.jsxs)("div", {
        className: T(Uo.broadcastBanner, Uo[e]),
        role: "alert",
        "aria-live": s,
        children: [(o || r) && (0, Co.jsxs)("div", {
            className: Uo.titleContainer,
            children: [o && (0, Co.jsx)(Z, {
                className: Uo.icon,
                name: o,
                mode: "line",
                role: "img"
            }), r && (0, Co.jsx)(he, {
                className: Uo.title,
                variant: Ue.H2,
                children: r
            })]
        }), (t || a) && (0, Co.jsxs)("div", {
            className: Uo.contentContainer,
            children: [t && (0, Co.jsx)(he, {
                className: Uo.text,
                children: t
            }), a && (0, Co.jsx)("div", {
                className: Uo.actions,
                children: a
            })]
        }), n && (0, Co.jsx)(zr, {
            className: Uo.closeButton,
            variant: Ge.GHOST,
            iconName: "close",
            iconMode: "line",
            "aria-label": "Dismiss",
            onClick: n
        })]
    })
}
var Ii = w(W(), 1),
    gw = w(V(), 1);
var hG = w(M(), 1);
var ZP = "_toastViewport_z15g8_2",
    QP = {
        toastViewport: ZP
    };

function JP(t) {
    let e = (0, gw.c)(7),
        {
            children: o,
            viewportClassName: r
        } = t,
        n;
    e[0] !== r ? (n = T(QP.toastViewport, r), e[0] = r, e[1] = n) : n = e[1];
    let a;
    e[2] !== n ? (a = (0, Ii.jsx)(ly, {
        className: n
    }), e[2] = n, e[3] = a) : a = e[3];
    let s;
    return e[4] !== o || e[5] !== a ? (s = (0, Ii.jsxs)(cy, {
        children: [o, a]
    }), e[4] = o, e[5] = a, e[6] = s) : s = e[6], s
}
var yr = w(W(), 1),
    vw = w(V(), 1);
var RG = w(M(), 1);
var e2 = "_breadcrumb_phclj_2",
    t2 = "_rightSlot_phclj_8",
    o2 = "_breadcrumbsList_phclj_16",
    r2 = "_breadcrumbsContainer_phclj_17",
    n2 = "_breadcrumbText_phclj_23",
    a2 = "_breadcrumbLink_phclj_28",
    s2 = "_breadcrumbLinkSmall_phclj_34",
    i2 = "_breadcrumbLinkMedium_phclj_38",
    c2 = "_breadcrumbLinkLarge_phclj_42",
    l2 = "_pipeDivider_phclj_54",
    u2 = "_slashDivider_phclj_62",
    lo = {
        breadcrumb: e2,
        rightSlot: t2,
        breadcrumbsList: o2,
        breadcrumbsContainer: r2,
        breadcrumbText: n2,
        breadcrumbLink: a2,
        breadcrumbLinkSmall: s2,
        breadcrumbLinkMedium: i2,
        breadcrumbLinkLarge: c2,
        pipeDivider: l2,
        slashDivider: u2
    };
var yw = (t => (t.SMALL = "sm", t.MEDIUM = "md", t.LARGE = "lg", t))(yw || {});

function d2(t) {
    let e = (0, vw.c)(12),
        {
            breadcrumbs: o,
            initialDividerVariant: r,
            size: n
        } = t,
        a = n === void 0 ? "lg" : n,
        s;
    e: switch (a) {
        case "sm": {
            s = Ue.SMALL;
            break e
        }
        case "lg": {
            s = Ue.H3;
            break e
        }
        default:
            s = Ue.DEFAULT
    }
    let i = s,
        c;
    e: switch (a) {
        case "sm": {
            c = lo.breadcrumbLinkSmall;
            break e
        }
        case "lg": {
            c = lo.breadcrumbLinkLarge;
            break e
        }
        default:
            c = lo.breadcrumbLinkMedium
    }
    let l = c,
        d;
    if (e[0] !== l || e[1] !== o || e[2] !== r || e[3] !== i) {
        let f;
        e[5] !== l || e[6] !== o.length || e[7] !== r || e[8] !== i ? (f = (p, g) => (0, yr.jsxs)("li", {
            className: T(r === "pipe" && g === 0 ? lo.pipeDivider : lo.slashDivider, lo.breadcrumb),
            "aria-current": g === o.length - 1 ? "page" : void 0,
            children: ["linkElement" in p ? (0, yr.jsx)(jr, {
                variant: Ge.TERTIARY,
                asChild: !0,
                className: T(lo.breadcrumbLink, l),
                children: p.linkElement
            }) : (0, yr.jsx)(he, {
                variant: i,
                className: lo.breadcrumbText,
                children: p.pathName
            }), p.rightSlot ? (0, yr.jsx)("div", {
                className: lo.rightSlot,
                children: p.rightSlot
            }) : null]
        }, `breadcrumb-${g}`), e[5] = l, e[6] = o.length, e[7] = r, e[8] = i, e[9] = f) : f = e[9], d = o.map(f), e[0] = l, e[1] = o, e[2] = r, e[3] = i, e[4] = d
    } else d = e[4];
    let u;
    return e[10] !== d ? (u = (0, yr.jsx)("nav", {
        "aria-label": "Breadcrumb",
        className: lo.breadcrumbsContainer,
        children: (0, yr.jsx)("ol", {
            className: lo.breadcrumbsList,
            children: d
        })
    }), e[10] = d, e[11] = u) : u = e[11], u
}
var pu = w(W(), 1),
    ww = w(V(), 1),
    Go = w(M(), 1);

function _w(t, e, o, r) {
    var n;
    let a = Array.from(t.currentTarget.querySelectorAll("a[role='menuitem'], button[role='menuitem']")),
        s = a[e ?? 0];
    e === null && s.focus();
    let i = e;
    switch (t.key) {
        case it.ARROW_DOWN:
            i = ((e ?? -1) + 1) % a.length;
            break;
        case it.ARROW_UP:
            i = ((e ?? 0) - 1 + a.length) % a.length;
            break;
        case it.ARROW_RIGHT:
            if (s.tagName === "BUTTON") {
                s.click(), t.preventDefault();
                return
            } else if (e !== null) {
                let c = a.slice(0, e).reverse(),
                    l = c.findIndex(d => d.tagName === "BUTTON");
                if (l !== -1) {
                    let d = c[l];
                    d.click(), o(e - 1 - l), d.focus(), t.preventDefault();
                    return
                }
            }
            break;
        case it.ARROW_LEFT:
            if (e !== null) {
                let c = a.slice(0, e + 1).reverse(),
                    l = c.findIndex(d => d.tagName === "BUTTON");
                if (l !== -1) {
                    let d = c[l];
                    d.getAttribute("aria-expanded") === "true" && d.click(), o(e - l), d.focus(), t.preventDefault();
                    return
                }
            }
            break;
        case it.ENTER:
        case it.SPACE:
        case it.SPACEBAR:
            s.click(), t.preventDefault();
            return;
        case it.TAB:
            o(0);
            return;
        case it.HOME:
            i = 0;
            break;
        case it.END:
            i = a.length - 1;
            break;
        case it.ESCAPE:
            o(null), (n = r.current) == null || n.focus(), t.preventDefault();
            return;
        default:
            return
    }
    o(i), i !== null && a[i].focus(), t.preventDefault()
}
var f2 = "_container_nnwhs_5",
    m2 = "_closeAnimation_nnwhs_26",
    p2 = "_containerExpanded_nnwhs_30",
    mu = {
        container: f2,
        closeAnimation: m2,
        containerExpanded: p2
    };

function h2(t) {
    let e = (0, ww.c)(25),
        o, r;
    e[0] !== t ? ({
        children: o,
        ...r
    } = t, e[0] = t, e[1] = o, e[2] = r) : (o = e[1], r = e[2]);
    let {
        isExpanded: n,
        setIsExpanded: a
    } = Fr(), s = (0, Go.useRef)(null), [i, c] = (0, Go.useState)(!1), l = (0, Go.useRef)(), d;
    e[3] !== a ? (d = () => {
        l.current && clearTimeout(l.current), l.current = setTimeout(() => {
            a(!0), c(!0)
        }, 500)
    }, e[3] = a, e[4] = d) : d = e[4];
    let u = d,
        f;
    e[5] !== a ? (f = () => {
        l.current && clearTimeout(l.current), l.current = setTimeout(() => {
            var D;
            (D = s.current) != null && D.contains(document.activeElement) || a(!1)
        }, 100)
    }, e[5] = a, e[6] = f) : f = e[6];
    let p = f,
        g, m;
    e[7] === Symbol.for("react.memo_cache_sentinel") ? (g = () => () => {
        l.current && clearTimeout(l.current)
    }, m = [], e[7] = g, e[8] = m) : (g = e[7], m = e[8]), (0, Go.useEffect)(g, m);
    let [h, v] = (0, Go.useState)(0), _;
    e[9] !== h ? (_ = D => {
        _w(D, h, v, s)
    }, e[9] = h, e[10] = _) : _ = e[10];
    let y = _,
        x, b;
    e[11] !== h || e[12] !== a ? (x = () => {
        h === null && a(!1)
    }, b = [h, a], e[11] = h, e[12] = a, e[13] = x, e[14] = b) : (x = e[13], b = e[14]), (0, Go.useEffect)(x, b);
    let C = n && mu.containerExpanded,
        R = i && mu.closeAnimation,
        S;
    e[15] !== C || e[16] !== R ? (S = T(mu.container, C, R), e[15] = C, e[16] = R, e[17] = S) : S = e[17];
    let E;
    return e[18] !== o || e[19] !== p || e[20] !== y || e[21] !== u || e[22] !== r || e[23] !== S ? (E = (0, pu.jsx)("nav", {
        "aria-label": "Main Navigation",
        children: (0, pu.jsx)("ul", {
            ...r,
            ref: s,
            className: S,
            onMouseEnter: u,
            onMouseLeave: p,
            onFocus: u,
            onBlur: p,
            onKeyDown: y,
            role: "menubar",
            "aria-label": "Main navigation",
            tabIndex: -1,
            children: o
        })
    }), e[18] = o, e[19] = p, e[20] = y, e[21] = u, e[22] = r, e[23] = S, e[24] = E) : E = e[24], E
}
var Xr = w(W(), 1),
    bw = w(V(), 1);
var zG = w(M(), 1);
var g2 = "_closedListItem_1iadv_2",
    v2 = "_link_1iadv_6",
    y2 = "_icon_1iadv_14",
    _2 = "_navItem_1iadv_23",
    w2 = "_sharedListItem_1iadv_30",
    b2 = "_closedActiveListItem_1iadv_36",
    x2 = "_expandedActiveListItem_1iadv_48",
    C2 = "_navItemTitle_1iadv_74",
    R2 = "_expandedListItem_1iadv_86",
    S2 = "_linkActive_1iadv_119",
    Ro = {
        closedListItem: g2,
        link: v2,
        icon: y2,
        navItem: _2,
        sharedListItem: w2,
        closedActiveListItem: b2,
        expandedActiveListItem: x2,
        navItemTitle: C2,
        expandedListItem: R2,
        linkActive: S2
    };

function T2(t) {
    let e = (0, bw.c)(41),
        o, r, n, a, s, i, c, l, d, u;
    e[0] !== t ? ({
        className: o,
        title: u,
        href: r,
        iconName: n,
        iconMode: c,
        rightSlot: i,
        isActive: l,
        anchorProps: d,
        linkComponent: s,
        ...a
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c, e[8] = l, e[9] = d, e[10] = u) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7], l = e[8], d = e[9], u = e[10]);
    let f = c === void 0 ? "line" : c,
        p = l === void 0 ? !1 : l,
        g;
    e[11] !== d ? (g = d === void 0 ? {} : d, e[11] = d, e[12] = g) : g = e[12];
    let m = g,
        {
            isExpanded: h
        } = Fr(),
        v = s || "a",
        _ = h ? p ? Ro.expandedActiveListItem : Ro.expandedListItem : p ? Ro.closedActiveListItem : Ro.closedListItem,
        y;
    e[13] !== o || e[14] !== _ ? (y = T(Ro.sharedListItem, _, o), e[13] = o, e[14] = _, e[15] = y) : y = e[15];
    let x = `Link to ${u}`,
        b = p && Ro.linkActive,
        C;
    e[16] !== m.className || e[17] !== b ? (C = T(Ro.link, b, m.className), e[16] = m.className, e[17] = b, e[18] = C) : C = e[18];
    let R = p ? "page" : void 0,
        S;
    e[19] !== f || e[20] !== n ? (S = (0, Xr.jsx)(Z, {
        name: n,
        mode: f,
        size: "2xl",
        className: Ro.icon
    }), e[19] = f, e[20] = n, e[21] = S) : S = e[21];
    let E;
    e[22] !== h || e[23] !== i || e[24] !== u ? (E = h && (0, Xr.jsxs)(he, {
        className: Ro.navItemTitle,
        as: "div",
        children: [u, i]
    }), e[22] = h, e[23] = i, e[24] = u, e[25] = E) : E = e[25];
    let D;
    e[26] !== S || e[27] !== E ? (D = (0, Xr.jsxs)("div", {
        className: Ro.navItem,
        children: [S, E]
    }), e[26] = S, e[27] = E, e[28] = D) : D = e[28];
    let N;
    e[29] !== v || e[30] !== m || e[31] !== r || e[32] !== R || e[33] !== D || e[34] !== x || e[35] !== C ? (N = (0, Xr.jsx)(v, {
        "aria-label": x,
        ...m,
        href: r,
        className: C,
        tabIndex: -1,
        "aria-current": R,
        role: "menuitem",
        children: D
    }), e[29] = v, e[30] = m, e[31] = r, e[32] = R, e[33] = D, e[34] = x, e[35] = C, e[36] = N) : N = e[36];
    let O;
    return e[37] !== a || e[38] !== N || e[39] !== y ? (O = (0, Xr.jsx)("li", {
        ...a,
        className: y,
        role: "none",
        children: N
    }), e[37] = a, e[38] = N, e[39] = y, e[40] = O) : O = e[40], O
}
var Yo = w(W(), 1),
    xw = w(V(), 1),
    ki = w(M(), 1);
var E2 = "_container_2po3d_2",
    D2 = "_chevron_2po3d_13",
    N2 = "_chevronActive_2po3d_19",
    M2 = "_icon_2po3d_23",
    P2 = "_navItemTitle_2po3d_32",
    O2 = "_closedActiveListItem_2po3d_42",
    I2 = "_navItem_2po3d_32",
    k2 = "_sharedListItem_2po3d_62",
    A2 = "_subMenu_2po3d_67",
    L2 = "_closedListItem_2po3d_76",
    F2 = "_expandedListItem_2po3d_81",
    B2 = "_expandedActiveListItem_2po3d_102",
    Jt = {
        container: E2,
        chevron: D2,
        chevronActive: N2,
        icon: M2,
        navItemTitle: P2,
        closedActiveListItem: O2,
        navItem: I2,
        sharedListItem: k2,
        subMenu: A2,
        closedListItem: L2,
        expandedListItem: F2,
        expandedActiveListItem: B2
    };

function W2(t) {
    let e = (0, xw.c)(33),
        {
            title: o,
            iconName: r,
            isActive: n,
            children: a
        } = t,
        s = n === void 0 ? !1 : n,
        {
            isExpanded: i,
            setIsExpanded: c
        } = Fr(),
        l = (0, ki.useRef)(null),
        [d, u] = (0, ki.useState)(!1),
        f = i && d,
        p;
    e[0] !== d || e[1] !== c ? (p = () => {
        var B;
        if (c(!0), l.current) {
            let k = [],
                G = (B = l.current.parentNode) == null ? void 0 : B.firstChild;
            for (; G = G?.nextSibling;) k.push(G);
            k.map(z2).filter(j2).flat().forEach(H2)
        }
        u(!d)
    }, e[0] = d, e[1] = c, e[2] = p) : p = e[2];
    let g = p,
        m = i ? s ? Jt.expandedActiveListItem : Jt.expandedListItem : s ? Jt.closedActiveListItem : Jt.closedListItem,
        h;
    e[3] !== m ? (h = T(Jt.sharedListItem, m), e[3] = m, e[4] = h) : h = e[4];
    let v = `Toggle submenu for ${o}`,
        _ = a ? "true" : void 0,
        y = f ? "true" : "false",
        x = s ? "Contains current page link" : void 0,
        b;
    e[5] !== r ? (b = (0, Yo.jsx)(Z, {
        name: r,
        mode: "line",
        size: "2xl",
        className: Jt.icon
    }), e[5] = r, e[6] = b) : b = e[6];
    let C;
    e[7] !== i || e[8] !== o ? (C = i && (0, Yo.jsx)(he, {
        className: Jt.navItemTitle,
        children: o
    }), e[7] = i, e[8] = o, e[9] = C) : C = e[9];
    let R;
    e[10] !== C || e[11] !== b ? (R = (0, Yo.jsxs)("div", {
        className: Jt.navItem,
        children: [b, C]
    }), e[10] = C, e[11] = b, e[12] = R) : R = e[12];
    let S = s && !f ? "arrow-left-s" : f ? "arrow-up-s" : "arrow-right-s",
        E = s && Jt.chevronActive,
        D;
    e[13] !== E ? (D = T(Jt.chevron, E), e[13] = E, e[14] = D) : D = e[14];
    let N;
    e[15] !== S || e[16] !== D ? (N = (0, Yo.jsx)(Z, {
        name: S,
        mode: "fill",
        size: "lg",
        className: D
    }), e[15] = S, e[16] = D, e[17] = N) : N = e[17];
    let O;
    e[18] !== g || e[19] !== R || e[20] !== N || e[21] !== v || e[22] !== _ || e[23] !== y || e[24] !== x ? (O = (0, Yo.jsxs)("button", {
        className: Jt.container,
        onClick: g,
        tabIndex: -1,
        "aria-label": v,
        "aria-haspopup": _,
        "aria-expanded": y,
        title: x,
        role: "menuitem",
        children: [R, N]
    }), e[18] = g, e[19] = R, e[20] = N, e[21] = v, e[22] = _, e[23] = y, e[24] = x, e[25] = O) : O = e[25];
    let F;
    e[26] !== a || e[27] !== f ? (F = f && a && (0, Yo.jsx)("ul", {
        className: Jt.subMenu,
        children: a
    }), e[26] = a, e[27] = f, e[28] = F) : F = e[28];
    let P;
    return e[29] !== O || e[30] !== F || e[31] !== h ? (P = (0, Yo.jsxs)("li", {
        className: h,
        role: "none",
        ref: l,
        children: [O, F]
    }), e[29] = O, e[30] = F, e[31] = h, e[32] = P) : P = e[32], P
}

function H2(t) {
    t.click()
}

function j2(t) {
    return !!t
}

function z2(t) {
    var e;
    if (t.hasChildNodes()) {
        let o = (e = t.firstChild) == null ? void 0 : e.parentElement;
        if (o) return Array.from(o.querySelectorAll("button[role='menuitem'][aria-expanded='true']"))
    }
    return !1
}
var Ai = w(W(), 1),
    Cw = w(V(), 1);
var sY = w(M(), 1);
var U2 = "_container_1atkf_2",
    G2 = "_containerActive_1atkf_11",
    Y2 = "_link_1atkf_15",
    V2 = "_title_1atkf_22",
    q2 = "_titleActive_1atkf_31",
    xa = {
        container: U2,
        containerActive: G2,
        link: Y2,
        title: V2,
        titleActive: q2
    };

function $2(t) {
    let e = (0, Cw.c)(32),
        o, r, n, a, s, i, c;
    e[0] !== t ? ({
        className: o,
        title: c,
        href: r,
        anchorProps: s,
        isActive: i,
        linkComponent: a,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7]);
    let l;
    e[8] !== s ? (l = s === void 0 ? {} : s, e[8] = s, e[9] = l) : l = e[9];
    let d = l,
        u = i === void 0 ? !1 : i,
        f = a || "a",
        p = u && xa.containerActive,
        g;
    e[10] !== o || e[11] !== p ? (g = T(xa.container, p, o), e[10] = o, e[11] = p, e[12] = g) : g = e[12];
    let m = `Link to ${c}`,
        h;
    e[13] !== d.className ? (h = T(xa.link, d.className), e[13] = d.className, e[14] = h) : h = e[14];
    let v = u ? "page" : void 0,
        _ = u && xa.titleActive,
        y;
    e[15] !== _ ? (y = T(xa.title, _), e[15] = _, e[16] = y) : y = e[16];
    let x;
    e[17] !== y || e[18] !== c ? (x = (0, Ai.jsx)(he, {
        className: y,
        children: c
    }), e[17] = y, e[18] = c, e[19] = x) : x = e[19];
    let b;
    e[20] !== f || e[21] !== d || e[22] !== r || e[23] !== x || e[24] !== m || e[25] !== h || e[26] !== v ? (b = (0, Ai.jsx)(f, {
        "aria-label": m,
        ...d,
        href: r,
        className: h,
        tabIndex: -1,
        "aria-current": v,
        role: "menuitem",
        children: x
    }), e[20] = f, e[21] = d, e[22] = r, e[23] = x, e[24] = m, e[25] = h, e[26] = v, e[27] = b) : b = e[27];
    let C;
    return e[28] !== n || e[29] !== b || e[30] !== g ? (C = (0, Ai.jsx)("li", {
        ...n,
        className: g,
        role: "none",
        children: b
    }), e[28] = n, e[29] = b, e[30] = g, e[31] = C) : C = e[31], C
}
var uo = w(W(), 1),
    Rw = w(V(), 1);
var fY = w(M(), 1);
var K2 = "_popoverContent_utjl4_2",
    X2 = "_extraContentPadding_utjl4_14",
    Z2 = "_popoverArrow_utjl4_18",
    Q2 = "_popoverClose_utjl4_23",
    Li = {
        popoverContent: K2,
        extraContentPadding: X2,
        popoverArrow: Z2,
        popoverClose: Q2
    };

function hu(t) {
    let e = (0, Rw.c)(46),
        o, r, n, a, s, i, c, l, d, u, f;
    e[0] !== t ? ({
        arrowClassName: o,
        children: r,
        className: n,
        customClassNames: c,
        hasArrow: a,
        isDismissible: s,
        contentProps: l,
        side: d,
        title: u,
        trigger: f,
        ...i
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i, e[7] = c, e[8] = l, e[9] = d, e[10] = u, e[11] = f) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6], c = e[7], l = e[8], d = e[9], u = e[10], f = e[11]);
    let p;
    e[12] !== c ? (p = c === void 0 ? {} : c, e[12] = c, e[13] = p) : p = e[13];
    let g = p,
        m;
    e[14] !== l ? (m = l === void 0 ? {} : l, e[14] = l, e[15] = m) : m = e[15];
    let h = m,
        v = d === void 0 ? "bottom" : d,
        _;
    e[16] !== f ? (_ = (0, uo.jsx)(zv, {
        asChild: !0,
        children: f
    }), e[16] = f, e[17] = _) : _ = e[17];
    let y = g.popover,
        x;
    e[18] !== o || e[19] !== g.arrow || e[20] !== a ? (x = a && (0, uo.jsx)(Vv, {
        className: T(Li.popoverArrow, o, g.arrow)
    }), e[18] = o, e[19] = g.arrow, e[20] = a, e[21] = x) : x = e[21];
    let b = s && !u && Li.extraContentPadding,
        C;
    e[22] !== n || e[23] !== g.contentWrapper || e[24] !== b ? (C = T(Li.popoverContent, b, n, g.contentWrapper), e[22] = n, e[23] = g.contentWrapper, e[24] = b, e[25] = C) : C = e[25];
    let R;
    e[26] !== u ? (R = u && (0, uo.jsx)(he, {
        variant: Ue.DEFAULT_SEMIBOLD,
        children: u
    }), e[26] = u, e[27] = R) : R = e[27];
    let S;
    e[28] !== g.dismissButton || e[29] !== s ? (S = s && (0, uo.jsx)(Yv, {
        className: T(Li.popoverClose, g.dismissButton),
        children: (0, uo.jsx)(Z, {
            name: "close"
        })
    }), e[28] = g.dismissButton, e[29] = s, e[30] = S) : S = e[30];
    let E;
    e[31] !== r || e[32] !== C || e[33] !== R || e[34] !== S ? (E = (0, uo.jsxs)("div", {
        className: C,
        children: [R, S, r]
    }), e[31] = r, e[32] = C, e[33] = R, e[34] = S, e[35] = E) : E = e[35];
    let D;
    e[36] !== h || e[37] !== g.popover || e[38] !== v || e[39] !== E || e[40] !== x ? (D = (0, uo.jsx)(Uv, {
        children: (0, uo.jsxs)(Gv, {
            className: y,
            side: v,
            sideOffset: 12,
            arrowPadding: 12,
            ...h,
            children: [x, E]
        })
    }), e[36] = h, e[37] = g.popover, e[38] = v, e[39] = E, e[40] = x, e[41] = D) : D = e[41];
    let N;
    return e[42] !== i || e[43] !== D || e[44] !== _ ? (N = (0, uo.jsxs)(jv, {
        ...i,
        children: [_, D]
    }), e[42] = i, e[43] = D, e[44] = _, e[45] = N) : N = e[45], N
}
var gu = w(W(), 1),
    Sw = w(V(), 1),
    Bi = w(M(), 1);
var J2 = "_contentWrapper_kee89_7",
    eO = "_popover_kee89_13",
    tO = "_menuContent_kee89_21",
    oO = "_dismissButton_kee89_35",
    Fi = {
        contentWrapper: J2,
        popover: eO,
        menuContent: tO,
        dismissButton: oO
    },
    rO = {
        contentWrapper: Fi.menuContent,
        dismissButton: Fi.dismissButton,
        popover: Fi.popover
    },
    nO = {
        align: "center",
        arrowPadding: 0,
        alignOffset: 0,
        sideOffset: 0
    };

function aO(t) {
    let e = (0, Sw.c)(11),
        {
            children: o,
            className: r,
            side: n,
            trigger: a
        } = t,
        s = n === void 0 ? "left" : n,
        i = (0, Bi.useRef)(null),
        [c, l] = (0, Bi.useState)(!1),
        d;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = m => {
        m.target !== i.current && l(!1)
    }, e[0] = d) : d = e[0];
    let u = d,
        f;
    e[1] !== r ? (f = T(Fi.contentWrapper, r), e[1] = r, e[2] = f) : f = e[2];
    let p;
    e[3] !== o || e[4] !== f ? (p = (0, gu.jsx)("div", {
        className: f,
        onClick: u,
        ref: i,
        children: o
    }), e[3] = o, e[4] = f, e[5] = p) : p = e[5];
    let g;
    return e[6] !== c || e[7] !== s || e[8] !== p || e[9] !== a ? (g = (0, gu.jsx)(hu, {
        isDismissible: !0,
        customClassNames: rO,
        contentProps: nO,
        side: s,
        trigger: a,
        open: c,
        onOpenChange: l,
        children: p
    }), e[6] = c, e[7] = s, e[8] = p, e[9] = a, e[10] = g) : g = e[10], g
}
var Vo = w(W(), 1),
    Tw = w(V(), 1);
var NY = w(M(), 1);
var vu = (t => (t.LEFT = "left", t.RIGHT = "right", t))(vu || {});
var sO = "_overlay_1hsqe_2",
    iO = "_content_1hsqe_10",
    cO = "_rightContent_1hsqe_22",
    lO = "_leftContent_1hsqe_32",
    uO = "_rightClose_1hsqe_42",
    dO = "_leftClose_1hsqe_48",
    Ca = {
        overlay: sO,
        "overlay-show": "_overlay-show_1hsqe_1",
        content: iO,
        rightContent: cO,
        "content-show-right": "_content-show-right_1hsqe_1",
        leftContent: lO,
        "content-show-left": "_content-show-left_1hsqe_1",
        rightClose: uO,
        leftClose: dO
    },
    fO = ui,
    mO = di;

function pO(t) {
    let e = (0, Tw.c)(24),
        o, r, n, a, s, i;
    e[0] !== t ? ({
        children: o,
        className: r,
        hasCloseButton: a,
        trigger: i,
        variant: s,
        ...n
    } = t, e[0] = t, e[1] = o, e[2] = r, e[3] = n, e[4] = a, e[5] = s, e[6] = i) : (o = e[1], r = e[2], n = e[3], a = e[4], s = e[5], i = e[6]);
    let c = a === void 0 ? !0 : a,
        l = s === void 0 ? vu.RIGHT : s,
        d;
    e[7] !== i ? (d = (0, Vo.jsx)(si, {
        asChild: !0,
        children: i
    }), e[7] = i, e[8] = d) : d = e[8];
    let u;
    e[9] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, Vo.jsx)(ci, {
        className: Ca.overlay
    }), e[9] = u) : u = e[9];
    let f = Ca[`${l}Content`],
        p;
    e[10] !== r || e[11] !== f ? (p = T(f, Ca.content, r), e[10] = r, e[11] = f, e[12] = p) : p = e[12];
    let g;
    e[13] !== c || e[14] !== l ? (g = c && (0, Vo.jsx)(fi, {
        className: T(Ca[`${l}Close`], Ca.close),
        "aria-label": "close",
        asChild: !0,
        children: (0, Vo.jsx)(zr, {
            iconName: "close",
            iconMode: "line",
            size: Mn.LARGE,
            variant: Ge.GHOST,
            "aria-label": "Close"
        })
    }), e[13] = c, e[14] = l, e[15] = g) : g = e[15];
    let m;
    e[16] !== o || e[17] !== p || e[18] !== g ? (m = (0, Vo.jsxs)(ii, {
        children: [u, (0, Vo.jsxs)(li, {
            className: p,
            children: [o, g]
        })]
    }), e[16] = o, e[17] = p, e[18] = g, e[19] = m) : m = e[19];
    let h;
    return e[20] !== n || e[21] !== d || e[22] !== m ? (h = (0, Vo.jsxs)(Py, {
        ...n,
        children: [d, m]
    }), e[20] = n, e[21] = d, e[22] = m, e[23] = h) : h = e[23], h
}
var WV = w(V(), 1),
    HV = w(M(), 1);
export {
    A as a, X as b, Se as c, Le as d, He as e, z as f, Ko as g, mo as h, $e as i, je as j, Po as k, pn as l, hn as m, vs as n, ys as o, _s as p, Dp as q, Np as r, Mp as s, hR as t, gR as u, Op as v, Ip as w, T as x, Z as y, Ue as z, he as A, Ge as B, Qc as C, sa as D, Db as E, zR as F, Gx as G, cs as H, ls as I, us as J, jv as K, U7 as L, zv as M, Uv as N, Gv as O, Yv as P, Py as Q, ii as R, li as S, ui as T, Iy as U, Fr as V, bC as W, xC as X, CC as Y, RC as Z, yi as _, jr as $, Mn as aa, g_ as ba, zr as ca, v_ as da, _i as ea, YT as fa, Nn as ga, __ as ha, $l as ia, w_ as ja, vE as ka, b_ as la, x_ as ma, C_ as na, NE as oa, gr as pa, R_ as qa, so as ra, S_ as sa, T_ as ta, D_ as ua, N_ as va, M_ as wa, WD as xa, Ql as ya, cN as za, Jl as Aa, eu as Ba, tu as Ca, Ti as Da, ou as Ea, ru as Fa, nu as Ga, au as Ha, lN as Ia, Kl as Ja, HD as Ka, lu as La, uN as Ma, hN as Na, _a as Oa, bN as Pa, bi as Qa, qD as Ra, Ee as Sa, FN as Ta, ba as Ua, Ni as Va, KN as Wa, Zl as Xa, Q_ as Ya, J_ as Za, dM as _a, _M as $a, EM as ab, IM as bb, WM as cb, cw as db, HM as eb, jM as fb, tN as gb, rP as hb, LP as ib, Oi as jb, XP as kb, JP as lb, yw as mb, d2 as nb, h2 as ob, T2 as pb, W2 as qb, $2 as rb, hu as sb, aO as tb, fO as ub, mO as vb, pO as wb
};
/*! Bundled license information:

react-compiler-runtime/dist/index.js:
  (**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @lightSyntaxTransform
   * @noflow
   * @nolint
   * @preventMunge
   * @preserve-invariant-messages
   *)
*/