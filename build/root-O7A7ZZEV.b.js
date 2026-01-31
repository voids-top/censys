import "/censys/build/_shared/chunk-URNZPFSF.js";
import {
    a as Wt,
    b as Ht,
    d as zt
} from "/censys/build/_shared/chunk-BSJLYU5L.js";
import {
    c as Yt
} from "/censys/build/_shared/chunk-KA2ES3R2.js";
import {
    a as $t,
    b as Gt
} from "/censys/build/_shared/chunk-RBPDF7CE.js";
import "/censys/build/_shared/chunk-2C6N3S4L.js";
import "/censys/build/_shared/chunk-4NQHWOT6.js";
import {
    b as Mt
} from "/censys/build/_shared/chunk-VDD6BNAJ.js";
import {
    a as Jt
} from "/censys/build/_shared/chunk-ITDGECXQ.js";
import {
    a as Bt,
    c as It,
    n as wt,
    r as Ut
} from "/censys/build/_shared/chunk-B5UNN2SO.js";
import "/censys/build/_shared/chunk-TUDXVIEL.js";
import "/censys/build/_shared/chunk-7C4UGOB7.js";
import "/censys/build/_shared/chunk-EI6HYVQX.js";
import "/censys/build/_shared/chunk-J22KWXE5.js";
import "/censys/build/_shared/chunk-JDWADSGD.js";
import {
    a as Ct
} from "/censys/build/_shared/chunk-EMHGEENV.js";
import "/censys/build/_shared/chunk-4WX73TCZ.js";
import "/censys/build/_shared/chunk-CJIEOTRC.js";
import "/censys/build/_shared/chunk-5OP2ERYU.js";
import "/censys/build/_shared/chunk-LOKTUJJ3.js";
import "/censys/build/_shared/chunk-BU2LL35M.js";
import "/censys/build/_shared/chunk-IRHQADG7.js";
import {
    a as bt,
    b as Lt
} from "/censys/build/_shared/chunk-KSE2ZBRQ.js";
import "/censys/build/_shared/chunk-FP2KPINM.js";
import "/censys/build/_shared/chunk-VKYVKQW2.js";
import "/censys/build/_shared/chunk-HVTNNTFL.js";
import {
    b as Ft
} from "/censys/build/_shared/chunk-5HYWBZZN.js";
import "/censys/build/_shared/chunk-OQUAXVLV.js";
import {
    a as kt
} from "/censys/build/_shared/chunk-BWODHJE6.js";
import "/censys/build/_shared/chunk-RWVGPSU7.js";
import {
    A as z,
    c as Y,
    d as vt,
    w as Pt,
    x as xt
} from "/censys/build/_shared/chunk-4DOFQKLI.js";
import "/censys/build/_shared/chunk-MB47ZWHU.js";
import "/censys/build/_shared/chunk-URNZPFSF.js";
import "/censys/build/_shared/chunk-WK35ORSL.js";
import "/censys/build/_shared/chunk-XTODG4BZ.js";
import {
    a as Ot,
    b as Dt
} from "/censys/build/_shared/chunk-426SZY5O.js";
import "/censys/build/_shared/chunk-HPK4AUA3.js";
import {
    a as E
} from "/censys/build/_shared/chunk-TTVDHAYB.js";
import "/censys/build/_shared/chunk-6EMU7K4F.js";
import "/censys/build/_shared/chunk-M5RKE22T.js";
import {
    a as _t,
    b as k,
    c as St,
    d as yt,
    g as Nt,
    i as ht
} from "/censys/build/_shared/chunk-ZP3FOFQD.js";
import "/censys/build/_shared/chunk-E7FS2ZQL.js";
import {
    b as gt,
    c as At,
    e as U,
    i as Rt
} from "/censys/build/_shared/chunk-ST66DGSY.js";
import "/censys/build/_shared/chunk-QJVHIZ52.js";
import "/censys/build/_shared/chunk-N7X32FEJ.js";
import {
    $ as F,
    A as s,
    B as I,
    jb as R,
    kb as _,
    x as w
} from "/censys/build/_shared/chunk-DN2SN5ZC.js";
import {
    b as Et
} from "/censys/build/_shared/chunk-NTWZCYPV.js";
import {
    b as ft,
    c as B
} from "/censys/build/_shared/chunk-F5K75D4K.js";
import {
    c as Tt
} from "/censys/build/_shared/chunk-44DVAK2X.js";
import "/censys/build/_shared/chunk-OLCKCRUU.js";
import {
    A as mt,
    D as ut,
    F as dt,
    a as nt,
    i as at,
    k as it,
    m as st,
    u as pt,
    v as lt,
    x as ct
} from "/censys/build/_shared/chunk-JMZ2MZXD.js";
import {
    b as i
} from "/censys/build/_shared/chunk-ZST4CTCB.js";
import {
    a as A
} from "/censys/build/_shared/chunk-MOHCJWAV.js";
import {
    c as pe,
    e as r
} from "/censys/build/_shared/chunk-2TWE7TSA.js";
var ie = pe((Cr, ae) => {
    ae.exports = {}
});
var J = "/censys/build/css-bundle-3DATTT5U.css";
var x = r(A(), 1);
var Vt = r(A(), 1);

function Kt(t) {
    let {
        i18n: e
    } = B();
    Vt.useEffect(() => {
        e.language !== t && e.changeLanguage(t)
    }, [t, e])
}
var D = r(A(), 1);
var qt = "account-staged-to-be-deleted-banner";
var V = {
    broadcastBanner: "Sx74w",
    animatingIn: "_-4d9V",
    animatingOut: "pQ-zB",
    hidden: "UloH7"
};
var Xt = r(i(), 1);

function S({
    testId: t,
    shouldShowBanner: e,
    children: n
}) {
    let {
        animationState: l,
        handleAnimationEnd: p
    } = Bt({
        shouldShowBanner: e
    });
    return l === "hidden" ? null : (0, Xt.jsx)("div", {
        "data-testid": t,
        className: w(V.broadcastBanner, V[l]),
        "aria-hidden": !e,
        ...!e && {
            inert: ""
        },
        onAnimationEnd: p,
        children: n
    })
}
var O = r(i(), 1);

function K() {
    let {
        t
    } = B(), n = U()?.markedForDeletion ?? !1, l = k("ACCOUNTS_SITE_URL"), [p, c] = (0, D.useState)(n), m = (0, D.useCallback)(() => c(!1), []), u = (0, D.useMemo)(() => ({
        l0: (0, O.jsx)(E, {
            href: `${l}/settings`,
            isExternal: !0
        })
    }), [l]);
    if (!n) return null;
    let f = (0, O.jsx)(_, {
        icon: "alarm-warning",
        title: t("Your account is staged to be deleted"),
        variant: R.ERROR,
        onDismiss: m,
        actions: (0, O.jsx)(s, {
            children: (0, O.jsx)(ft, {
                i18nKey: "Go to <l0>Accounts Management</l0> to undo the deletion request.",
                components: u
            })
        })
    });
    return (0, O.jsx)(S, {
        testId: qt,
        shouldShowBanner: p,
        children: f
    })
}
var G = r(A(), 1);
var a = r(i(), 1),
    Zt = "low-credits-broadcast-banner",
    Qt = "no-credits-broadcast-banner",
    T = "You have run out of credits",
    C = "Your credits balance is low",
    me = {
        [0]: {
            [1]: t => ({
                title: `${T}.`,
                actions: (0, a.jsx)(E, {
                    href: `${t}/settings/plan`,
                    isExternal: !0,
                    shouldOmitOrg: !1,
                    children: "Buy credits now!"
                })
            }),
            [0]: t => ({
                title: `${C}. ADMIN`,
                actions: (0, a.jsxs)(s, {
                    children: [(0, a.jsx)(E, {
                        href: `${t}/settings/plan`,
                        isExternal: !0,
                        shouldOmitOrg: !1,
                        children: "Buy more now"
                    }), " ", "before you run out!"]
                })
            })
        },
        [1]: {
            [1]: () => ({
                title: `${T} on your Free account.`,
                actions: (0, a.jsx)(s, {
                    children: "Switch to your Organization account."
                })
            }),
            [0]: () => ({
                title: `${C} on your Free account.`,
                actions: (0, a.jsx)(s, {
                    children: "Switch to your Organization account."
                })
            })
        },
        [2]: {
            [1]: t => ({
                title: `${T}.`,
                actions: (0, a.jsxs)(s, {
                    children: [(0, a.jsx)(E, {
                        href: `${t}/settings/plan`,
                        isExternal: !0,
                        shouldOmitOrg: !1,
                        children: "Buy credits now"
                    }), " ", "and enable", " ", (0, a.jsx)(E, {
                        href: `${t}/settings/billing/auto-replenishment`,
                        isExternal: !0,
                        shouldOmitOrg: !1,
                        children: "auto-replenish"
                    }), "."]
                })
            }),
            [0]: t => ({
                title: `${C}.`,
                actions: (0, a.jsxs)(s, {
                    children: [(0, a.jsx)(E, {
                        href: `${t}/settings/plan`,
                        isExternal: !0,
                        shouldOmitOrg: !1,
                        children: "Buy more now"
                    }), " ", "and enable", " ", (0, a.jsx)(E, {
                        href: `${t}/settings/billing/auto-replenishment`,
                        isExternal: !0,
                        shouldOmitOrg: !1,
                        children: "auto-replenish"
                    }), " ", "before you run out!"]
                })
            })
        },
        [3]: {
            [1]: () => ({
                title: `${T}.`,
                actions: (0, a.jsx)(s, {
                    children: "Contact your Censys Sales Representative."
                })
            }),
            [0]: () => ({
                title: `${C}.`,
                actions: (0, a.jsx)(s, {
                    children: "Contact your Censys Sales Representative."
                })
            })
        }
    },
    ue = {
        [0]: {
            [1]: t => ({
                title: `${T}.`,
                actions: (0, a.jsx)(s, {
                    children: (0, a.jsx)(E, {
                        href: `${t}/settings/plan`,
                        isExternal: !0,
                        shouldOmitOrg: !1,
                        children: "Buy credits now!"
                    })
                })
            }),
            [0]: t => ({
                title: `${C}.`,
                actions: (0, a.jsxs)(s, {
                    children: [(0, a.jsx)(E, {
                        href: `${t}/settings/plan`,
                        isExternal: !0,
                        shouldOmitOrg: !1,
                        children: "Buy more now"
                    }), " ", "before you run out!"]
                })
            })
        },
        [1]: {
            [1]: () => ({
                title: `${T} on your Free account.`,
                actions: (0, a.jsxs)(s, {
                    children: [(0, a.jsx)(z, {
                        buttonVariant: I.GHOST
                    }), " to your Organization account."]
                })
            }),
            [0]: () => ({
                title: `${C} on your Free account.`,
                actions: (0, a.jsxs)(s, {
                    children: [(0, a.jsx)(z, {
                        buttonVariant: I.GHOST
                    }), " to your Organization account."]
                })
            })
        },
        [2]: {
            [1]: () => ({
                title: `${T}.`,
                actions: (0, a.jsx)(s, {
                    children: "Contact your Admin to purchase more."
                })
            }),
            [0]: () => ({
                title: `${C}.`,
                actions: (0, a.jsx)(s, {
                    children: "Contact your Admin to purchase more."
                })
            })
        },
        [3]: {
            [1]: () => ({
                title: `${T}.`,
                actions: (0, a.jsx)(s, {
                    children: "Contact your Censys Sales Representative."
                })
            }),
            [0]: () => ({
                title: `${C}.`,
                actions: (0, a.jsx)(s, {
                    children: "Contact your Censys Sales Representative."
                })
            })
        }
    },
    q = {
        [0]: me,
        [1]: ue
    };
var $ = r(i(), 1);

function X() {
    let {
        consumptionState: t,
        accessState: e
    } = (0, G.useContext)(At), n = k("ACCOUNTS_SITE_URL"), [l, p] = (0, G.useState)(!0);
    if (!t || !e) return null;
    let c = Dt(e),
        m = 1;
    e?.organization && (m = Ot(e, 1) ? 0 : 1);
    let u = Pt(t),
        f, y;
    if (u === 0) {
        let {
            title: L,
            actions: N,
            message: h
        } = q[m][c][1](n);
        y = Qt, f = (0, $.jsx)(_, {
            icon: "alert",
            title: L,
            variant: R.ERROR,
            actions: N,
            children: h
        })
    } else if (xt(u, t.limit)) {
        let {
            title: L,
            actions: N,
            message: h
        } = q[m][c][0](n);
        y = Zt, f = (0, $.jsx)(_, {
            icon: "alert",
            title: L,
            variant: R.CAUTION,
            onDismiss: () => p(!1),
            actions: N,
            children: h
        })
    }
    return f ? (0, $.jsx)(S, {
        testId: y,
        shouldShowBanner: l,
        children: f
    }) : null
}
var jt = "upgrade-cta-broadcast-banner";
var Z = r(i(), 1);

function Q() {
    return U() !== null ? null : (0, Z.jsx)(S, {
        testId: jt,
        shouldShowBanner: !0,
        children: (0, Z.jsx)(_, {
            icon: "lock-star",
            title: "Login or register to access additional Platform features!",
            variant: R.SUCCESS,
            "aria-live": "polite"
        })
    })
}
var g = r(i(), 1);

function j() {
    return (0, g.jsxs)(g.Fragment, {
        children: [(0, g.jsx)(X, {}), (0, g.jsx)(Q, {}), (0, g.jsx)(K, {})]
    })
}
var M = {
    layout: "_6-SEE",
    wrapper: "b5Uob"
};
var d = r(i(), 1);

function tt() {
    let t = it(),
        e = vt(),
        n = (0, d.jsx)(Y, {
            iconName: "file-damage",
            title: "Something went wrong",
            children: (0, d.jsxs)("div", {
                className: M.wrapper,
                children: [(0, d.jsx)(s, {
                    children: "An unknown error has occurred"
                }), (0, d.jsx)(F, {
                    role: "link",
                    "aria-label": "Attempt to refresh the page",
                    onClick: () => e(0),
                    variant: I.SECONDARY,
                    children: "Refresh"
                })]
            })
        });
    return nt(t) ? n = (0, d.jsx)(Y, {
        iconName: "pulse",
        title: "Something went wrong",
        children: (0, d.jsxs)("div", {
            className: M.wrapper,
            children: [(0, d.jsx)(s, {
                children: "Hang tight. We're looking into it! "
            }), (0, d.jsx)(F, {
                role: "link",
                "aria-label": "Attempt to refresh the page",
                onClick: () => e(0),
                variant: I.SECONDARY,
                children: "Refresh"
            })]
        })
    }) : t instanceof Error && (n = (0, d.jsx)(kt, {
        error: t
    })), (0, d.jsx)("main", {
        className: M.layout,
        children: n
    })
}
var W = r(A(), 1);
var te = r(i(), 1);

function de(t, e, n) {
    switch (t) {
        case "host":
            return `/hosts/${e}/pivots?jobId=${n}`;
        case "web":
            return `/web/${e}/pivots?jobId=${n}`;
        case "certificate":
            return `/certificates/${e}/pivots?jobId=${n}`;
        default:
            return null
    }
}

function et() {
    let {
        job: t,
        error: e
    } = Gt(), n = (0, W.useMemo)(() => t?.name ? bt(t.name) : null, [t?.name]), l = (0, W.useMemo)(() => t?.asset ? Lt(t.asset) : null, [t?.asset]), p = (0, W.useMemo)(() => t?.asset ? Mt(t.asset) : "unknown", [t?.asset]);
    if (!t && !e) return null;
    let c = "LOADING",
        m = null;
    switch (t?.state) {
        case "STATE_STARTED":
            c = "LOADING";
            break;
        case "STATE_COMPLETED":
            c = "SUCCESS";
            break;
        case "STATE_FAILED":
        case "STATE_UNRECOGNIZED":
        case "UNRECOGNIZED_ENUM_KEY":
            c = "ERROR", m = [{
                title: "CensEye Error",
                description: t?.error ?? "CensEye encountered an unexpected error."
            }];
            break
    }
    e && (c = "ERROR", m = [{
        title: "CensEye Error",
        description: e
    }]);
    let u = l && n ? de(p, l, n) : null;
    return (0, te.jsx)(Ht, {
        status: c,
        backgroundActions: u ? [{
            scannedAssetHref: u
        }] : null,
        errors: m,
        messages: Wt,
        localStateKey: "app/censeye-background-actions-dialog"
    })
}
var b = r(A(), 1);
var v = {
    bar: "XYok7",
    barShimmer: "L908J",
    gradientShimmer: "_26mkX",
    idle: "KhY80",
    complete: "ADlTH",
    submitting: "OGMei",
    loading: "_3n9vv",
    grow: "msnfb"
};
var ot = r(i(), 1);

function rt({
    nav: t
}) {
    let e = (0, b.useRef)(null),
        [n, l] = (0, b.useState)(!0),
        p = t.state !== "idle";
    return (0, b.useEffect)(() => {
        p && l(!1);
        async function c() {
            e.current && (await Promise.allSettled(e.current.getAnimations().map(({
                finished: m
            }) => m)), p || l(!0))
        }
        c()
    }, [p]), (0, ot.jsx)("div", {
        ref: e,
        role: "progressbar",
        "aria-label": "Page loading progress",
        "aria-hidden": !p,
        "aria-valuetext": p ? "Loading" : void 0,
        className: w(v.bar, v[t.state], n && v.complete),
        children: (0, ot.jsx)("div", {
            className: v.barShimmer,
            role: "presentation"
        })
    })
}
var H = r(A(), 1);
var oe = r(i(), 1),
    fe = ["soc_analyst", "incident_responder", "threat_hunter", "threat_analyst", "detection_engineer", "vuln_manager", "pen_tester", "industry_researcher", "academic_researcher", "student", "other", "prefer_no_answer"],
    Ee = ["alert_triage", "incident_investigation", "adversary_fingerprinting", "threat_intelligence", "vuln_identification", "attack_surface_analysis", "academic_research", "exploring", "other", "prefer_no_answer"];

function ee({
    accessState: t,
    apiKey: e,
    nonce: n
}) {
    let l = (0, H.useMemo)(() => ({
        __html: `
      function bootstrapPendo(apiKey) {
        (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
        v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
            o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
            y=e.createElement(n);y.async=!0;y.src='https://content.pendo.platform.censys.io/agent/static/'+apiKey+'/pendo.js';y.crossOrigin="true";
            z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
      }
    `
    }), []);
    return (0, H.useEffect)(() => {
        if (typeof e == "string" && window.bootstrapPendo?.(e), window && window.pendo) {
            let p = null,
                c = null;
            if (t?.jobRoles) {
                let m = new Set(t.jobRoles);
                p = fe.find(u => m.has(u)) ?? [...t.jobRoles].sort()[0]
            }
            if (t?.platformUseCases) {
                let m = new Set(t.platformUseCases);
                c = Ee.find(u => m.has(u)) ?? [...t.platformUseCases].sort()[0]
            }
            window.pendo.initialize({
                visitor: {
                    id: `${t?.userId}`,
                    email: `${t?.email}`,
                    createdAt: `${t?.createdTime}`,
                    lastLogin: `${t?.latestLoginTime}`,
                    primaryJobRole: p,
                    primaryUseCase: c,
                    roles: t?.jobRoles?.length ? t.jobRoles : null,
                    useCases: t?.platformUseCases?.length ? t.platformUseCases : null
                },
                account: {
                    id: `${t?.organization?.organizationId}`,
                    name: `${t?.organization?.displayName}`,
                    tier: `${t?.highestPlanType}`
                }
            })
        }
    }, []), e ? (0, oe.jsx)("script", {
        suppressHydrationWarning: !0,
        nonce: n,
        dangerouslySetInnerHTML: l
    }) : null
}
var P = r(i(), 1);

function re({
    nonce: t
}) {
    return (0, P.jsx)(P.Fragment, {
        children: (0, P.jsx)("script", {
            suppressHydrationWarning: !0,
            nonce: t,
            src: "/scripts/polyfills/global.min.js"
        })
    })
}
var ne = {
    toastViewport: "_15mGY"
};
var _e = r(ie(), 1),
    o = r(i(), 1),
    Te = () => [...J ? [{
        rel: "stylesheet",
        href: J
    }] : []];

function Ce() {
    return !1
}
var ge = () => [{
    title: "Censys"
}];

function se() {
    return (0, o.jsx)(st, {})
}

function Ae({
    children: t
}) {
    let e = mt("root"),
        n = Et(),
        l = at(),
        p = (0, x.useContext)(Tt),
        c = e?.capabilities[10] || e?.capabilities[9],
        m = e?.featureFlags["th-censeye-historical"],
        u = e?.capabilities[13],
        f = e?.locale ?? "en",
        {
            i18n: y
        } = B(),
        L = (0, x.useMemo)(() => y.dir(f), [y, f]);
    Kt(f);
    let N = (0, x.useMemo)(() => e?.i18n ? `window.__INITIAL_I18N_STORE__ = ${JSON.stringify(e.i18n.initialI18nStore)};
      window.__INITIAL_LANGUAGE__ = ${JSON.stringify(e.i18n.initialLanguage)};` : "", [e]),
        h = e?.accessState?.organization?.organizationId;
    return (0, o.jsx)(Rt, {
        value: e ? {
            ...e,
            setAppTheme: () => {}
        } : gt,
        children: (0, o.jsxs)("html", {
            lang: f,
            dir: L,
            children: [(0, o.jsxs)("head", {
                children: [(0, o.jsx)("link", {
                    rel: "icon",
                    href: "/favicon.ico",
                    type: "image/x-icon"
                }), (0, o.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }), (0, o.jsx)("meta", {
                    httpEquiv: "Content-Type",
                    content: "text/html;charset=utf-8"
                }), N ? (0, o.jsx)("script", {
                    suppressHydrationWarning: !0,
                    nonce: n,
                    dangerouslySetInnerHTML: {
                        __html: N
                    }
                }) : null, (0, o.jsx)(lt, {}), (0, o.jsx)(pt, {})]
            }), (0, o.jsx)(Nt, {
                children: (0, o.jsx)(yt, {
                    value: e?.capabilities ?? St,
                    children: (0, o.jsx)(Jt, {
                        viewportClassName: ne.toastViewport,
                        children: (0, o.jsx)(ht, {
                            children: (0, o.jsx)($t, {
                                pollingEnabled: m && u,
                                children: (0, o.jsx)(Yt, {
                                    pollingEnabled: c,
                                    apiEndpoint: `${Ft}${h?`?org=${h}`:""}`,
                                    children: (0, o.jsx)(wt, {
                                        children: (0, o.jsxs)(Ct, {
                                            token: e?.csrf ?? "",
                                            children: [(0, o.jsx)(j, {}), (0, o.jsx)(rt, {
                                                nav: l
                                            }), t, (0, o.jsx)(re, {
                                                nonce: n
                                            }), (0, o.jsx)(dt, {
                                                nonce: n
                                            }), (0, o.jsx)(ct, {
                                                nonce: n
                                            }), (0, o.jsx)(ut, {
                                                nonce: n
                                            }), (0, o.jsx)(_t, {
                                                env: p,
                                                nonce: n
                                            }), e && (0, o.jsx)(ee, {
                                                accessState: e.accessState,
                                                apiKey: p.PENDO_API_KEY,
                                                nonce: n
                                            }), (0, o.jsx)(zt, {}), (0, o.jsx)(et, {})]
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })]
        })
    })
}

function Re() {
    return (0, o.jsx)(Ut, {
        breadcrumbs: [],
        children: (0, o.jsx)(It, {
            children: (0, o.jsx)(tt, {})
        })
    })
}
export {
    Re as ErrorBoundary, Ae as Layout, se as
    default, Te as links, ge as meta, Ce as shouldRevalidate
};