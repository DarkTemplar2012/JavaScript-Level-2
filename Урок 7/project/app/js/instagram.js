/*!
 * 
 * 	elfsight.com
 * 	
 * 	Copyright (c) 2018 Elfsight, LLC. ALL RIGHTS RESERVED
 * 
 */
! function (t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var r = i[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
  }
  var i = {};
  return e.m = t, e.c = i, e.p = "/dev/", e(0)
}([function (t, e, i) {
  i(1), i(2)(window)
}, function (t, e, i) {
  t.exports = i.p + "index.html"
}, function (t, e, i) {
  function n(t) {
    if (!t.eapps) {
      var e = !!t.__ELFSIGHT_APPS_DEBUG,
        i = {},
        n = new o,
        a = new r(t, t.document.body, n, e);
      i.platform = a.facade(), i.apps = n.facade(), t.eapps = i
    }
  }
  var r = i(3),
    o = i(10);
  t.exports = n
}, function (t, e, i) {
  var n = i(4),
    r = i(5),
    o = i(8),
    a = i(9),
    c = "eapps.Platform",
    s = function (t, e, i, s) {
      var u, l = this,
        p = [],
        d = [],
        f = [];
      l.initialize = function () {
        l.logError = o.withModule(c), n(function () {
          l.collectWidgets(e), l.boot(l.observe.bind(l))
        })
      }, l.facade = function () {
        return new a(l)
      }, l.requireWidget = function (t) {
        "string" != typeof t && l.logError("Widget Public ID required and should be a string", {
          pid: t
        }), ~d.indexOf(t) || d.push(t)
      }, l.addPlaceholder = function (t) {
        ~f.indexOf(t) || f.push(t)
      }, l.getWidgetIdByElement = function (t) {
        return "div" === t.tagName.toLowerCase() ? t.className.replace("elfsight-app-", "") : t.getAttribute("data-id")
      }, l.getWidgetsElements = function (t) {
        t = t || e;
        var i = Array.prototype.slice.call(t.getElementsByTagName("elfsight-app")),
          n = Array.prototype.slice.call(t.querySelectorAll('*[class^="elfsight-app"]')),
          r = n.concat(i);
        return r
      }, l.collectWidgets = function (t) {
        l.getWidgetsElements(t).forEach(function (t) {
          var e = l.getWidgetIdByElement(t);
          e && (l.requireWidget(e), l.addPlaceholder(t))
        })
      }, l.initWidget = function (t) {
        var e = l.getWidgetIdByElement(t),
          n = p[e];
        return n ? n.status ? void i.initWidget(t, n.data) : void l.logError('Widget "' + e + '" can`t be initialized because ' + n.reason, t) : void l.logError('Widget "' + e + '" isn`t required', t)
      }, l.boot = function (e) {
        var i = (s ? "http://apps.elfhome.ru" : "https://apps.elfsight.com") + "/p/boot/",
          n = "__eappsPlatformBoot" + (new Date).getTime();
        t[n] = function (i) {
          t[n] = void 0, t.document.head.removeChild(o), i.status || l.logError("Boot failed because " + i.reason, i.data), p = i.data.widgets, l.loadAssets(i.data.assets), f && f.length && f.forEach(l.initWidget.bind(l)), e && e()
        };
        var o = t.document.createElement("script"),
          a = r.stringify({
            callback: n,
            w: d.join(",")
          });
        o.src = i + "?" + a, t.document.head.appendChild(o)
      }, l.loadAssets = function (e) {
        e && e.length && e.forEach(function (e) {
          var i = t.document.createElement("script");
          i.src = e, i.setAttribute("defer", "defer"), t.document.head.appendChild(i)
        })
      }, l.observe = function () {
        window.MutationObserver && !u && (u = new MutationObserver(function (t) {
          t.forEach(function (t) {
            t.addedNodes && t.addedNodes.length && Array.prototype.slice.call(t.addedNodes).forEach(function (t) {
              t.tagName && ("elfsight-app" === t.tagName.toLowerCase() ? l.initWidget(t) : "div" === t.tagName.toLowerCase() && t.className.indexOf("elfsight-app") > -1 ? l.initWidget(t) : l.getWidgetsElements(t).forEach(l.initWidget.bind(l)))
            })
          })
        }), u.observe(e, {
          childList: !0,
          subtree: !0
        }))
      }, l.initialize()
    };
  t.exports = s
}, function (t, e, i) {
  /*!
   * domready (c) Dustin Diaz 2014 - License MIT
   */
  ! function (e, i) {
    t.exports = i()
  }("domready", function () {
    var t, e = [],
      i = document,
      n = i.documentElement.doScroll,
      r = "DOMContentLoaded",
      o = (n ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState);
    return o || i.addEventListener(r, t = function () {
        for (i.removeEventListener(r, t), o = 1; t = e.shift();) t()
      }),
      function (t) {
        o ? setTimeout(t, 0) : e.push(t)
      }
  })
}, function (t, e, i) {
  "use strict";

  function n(t) {
    switch (t.arrayFormat) {
      case "index":
        return function (e, i, n) {
          return null === i ? [o(e, t), "[", n, "]"].join("") : [o(e, t), "[", o(n, t), "]=", o(i, t)].join("")
        };
      case "bracket":
        return function (e, i) {
          return null === i ? o(e, t) : [o(e, t), "[]=", o(i, t)].join("")
        };
      default:
        return function (e, i) {
          return null === i ? o(e, t) : [o(e, t), "=", o(i, t)].join("")
        }
    }
  }

  function r(t) {
    var e;
    switch (t.arrayFormat) {
      case "index":
        return function (t, i, n) {
          return e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), e ? (void 0 === n[t] && (n[t] = {}), void(n[t][e[1]] = i)) : void(n[t] = i)
        };
      case "bracket":
        return function (t, i, n) {
          return e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), e && void 0 !== n[t] ? void(n[t] = [].concat(n[t], i)) : void(n[t] = i)
        };
      default:
        return function (t, e, i) {
          return void 0 === i[t] ? void(i[t] = e) : void(i[t] = [].concat(i[t], e))
        }
    }
  }

  function o(t, e) {
    return e.encode ? e.strict ? c(t) : encodeURIComponent(t) : t
  }

  function a(t) {
    return Array.isArray(t) ? t.sort() : "object" == typeof t ? a(Object.keys(t)).sort(function (t, e) {
      return Number(t) - Number(e)
    }).map(function (e) {
      return t[e]
    }) : t
  }
  var c = i(6),
    s = i(7);
  e.extract = function (t) {
    return t.split("?")[1] || ""
  }, e.parse = function (t, e) {
    e = s({
      arrayFormat: "none"
    }, e);
    var i = r(e),
      n = Object.create(null);
    return "string" != typeof t ? n : (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach(function (t) {
      var e = t.replace(/\+/g, " ").split("="),
        r = e.shift(),
        o = e.length > 0 ? e.join("=") : void 0;
      o = void 0 === o ? null : decodeURIComponent(o), i(decodeURIComponent(r), o, n)
    }), Object.keys(n).sort().reduce(function (t, e) {
      var i = n[e];
      return Boolean(i) && "object" == typeof i && !Array.isArray(i) ? t[e] = a(i) : t[e] = i, t
    }, Object.create(null))) : n
  }, e.stringify = function (t, e) {
    var i = {
      encode: !0,
      strict: !0,
      arrayFormat: "none"
    };
    e = s(i, e);
    var r = n(e);
    return t ? Object.keys(t).sort().map(function (i) {
      var n = t[i];
      if (void 0 === n) return "";
      if (null === n) return o(i, e);
      if (Array.isArray(n)) {
        var a = [];
        return n.slice().forEach(function (t) {
          void 0 !== t && a.push(r(i, t, a.length))
        }), a.join("&")
      }
      return o(i, e) + "=" + o(n, e)
    }).filter(function (t) {
      return t.length > 0
    }).join("&") : ""
  }
}, function (t, e) {
  "use strict";
  t.exports = function (t) {
    return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
      return "%" + t.charCodeAt(0).toString(16).toUpperCase()
    })
  }
}, function (t, e) {
  /*
  	object-assign
  	(c) Sindre Sorhus
  	@license MIT
  	*/
  "use strict";

  function i(t) {
    if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t)
  }

  function n() {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
      for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
      var n = Object.getOwnPropertyNames(e).map(function (t) {
        return e[t]
      });
      if ("0123456789" !== n.join("")) return !1;
      var r = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (t) {
        r[t] = t
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
    } catch (t) {
      return !1
    }
  }
  var r = Object.getOwnPropertySymbols,
    o = Object.prototype.hasOwnProperty,
    a = Object.prototype.propertyIsEnumerable;
  t.exports = n() ? Object.assign : function (t, e) {
    for (var n, c, s = i(t), u = 1; u < arguments.length; u++) {
      n = Object(arguments[u]);
      for (var l in n) o.call(n, l) && (s[l] = n[l]);
      if (r) {
        c = r(n);
        for (var p = 0; p < c.length; p++) a.call(n, c[p]) && (s[c[p]] = n[c[p]])
      }
    }
    return s
  }
}, function (t, e) {
  function i(t, e, i) {
    var n = [i + ' throws: "' + t + '"'];
    e && (n.push("with \n\t ->"), n.push(e)), console.error.apply(console, n)
  }
  i.withModule = function (t) {
    return function (e, n) {
      return i(e, n, t)
    }
  }, t.exports = i
}, function (t, e) {
  var i = function (t) {
    var e = this;
    e.initialize = function () {}, e.requireWidget = function (e) {
      return t.requireWidget(e)
    }, e.initialize()
  };
  t.exports = i
}, function (t, e, i) {
  var n = i(8),
    r = i(11),
    o = i(12),
    a = "eapps.AppsManager",
    c = function () {
      var t = this,
        e = {},
        i = [];
      t.initialize = function () {
        t.logError = n.withModule(a)
      }, t.facade = function () {
        return new r(t)
      }, t.register = function (i, n) {
        if (e.name) return void t.logError('Application "' + i + '" is already registered');
        var r = new n;
        e[i] = new o(r), t.initWidgetsFromBuffer(i)
      }, t.app = function (t) {
        return e[t]
      }, t.initWidget = function (e, n) {
        var r = t.app(n.app);
        r ? r.initWidget(e, n) : i.push({
          element: e,
          config: n,
          initialized: !1
        })
      }, t.initWidgetsFromBuffer = function (e) {
        i && i.length && i.forEach(function (i) {
          e !== i.config.app || i.initialized || (i.initialized = !0, t.initWidget(i.element, i.config))
        })
      }, t.initialize()
    };
  t.exports = c
}, function (t, e) {
  var i = function (t) {
    var e = this;
    e.initialize = function () {}, e.register = function (e, i) {
      return t.register(e, i)
    }, e.initialize()
  };
  t.exports = i
}, function (t, e, i) {
  (function (e) {
    var n = i(13),
      r = function (t) {
        var i = this,
          r = !1,
          o = [];
        i.initialize = function () {
          t.whenReady(i.ready.bind(i))
        }, i.ready = function () {
          r = !0, i.initWidgetsFromBuffer()
        }, i.initWidget = function (i, a) {
          if (r) {
            if (t.initWidget(i, a.settings), a.preferences && a.preferences.disable_widget) {
              i.setAttribute("style", "position:relative!important");
              var c = e.document.createElement("a");
              c.innerHTML = "Widget is deactivated<br>Visit Elfsight Apps", c.setAttribute("href", "//apps.elfsight.com/panel/"), c.setAttribute("target", "_blank"), c.setAttribute("style", ["align-content:center!important", "align-items:center!important", "animation:none!important", "background:rgba(251, 251, 251, 0.9)!important", "border:none!important", "border-radius:2px!important", "bottom:0!important", "box-sizing:border-box!important", "color:#333333!important", "display:flex!important", "float:none!important", "font-family:Roboto,Arial,Sans-serif!important", "font-size:13px!important", "height:auto!important", "left:0!important", "line-height:16px!important", "margin:0!important", "opacity:1!important", "padding:0!important", "position:absolute!important", "right:0!important", "text-align:center!important", "text-decoration:none!important", "text-indent:0!important", "top:0!important", "transform:none!important", "justify-content:center!important", "visibility:visible!important", "width:auto!important", "z-index:99998!important", "zoom:1!important"].join(";")), ["blur", "change", "click", "focus", "focusin", "focusout", "hover", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "resize", "scroll", "select", "submit"].forEach(function (t) {
                c.addEventListener(t, function (t) {
                  t.stopPropagation()
                })
              }), i.appendChild(c)
            }
            if (!a.preferences || !a.preferences.hide_elfsight_logo) {
              var s = e.document.createElement("a");
              n[a.app] ? (s.innerHTML = n[a.app].title, s.setAttribute("href", n[a.app].link + "?utm_source=websites&utm_medium=clients&utm_content=" + a.app + "&utm_term=" + e.location.host + "&utm_campaign=free-plan")) : (s.innerHTML = "Free website widgets", s.setAttribute("href", "//elfsight.com/?utm_source=websites&utm_medium=clients&utm_content=" + a.app + "&utm_term=" + e.location.host + "&utm_campaign=free-plan")), s.setAttribute("target", "_blank"), s.setAttribute("style", [].join(";")), i.parentNode.appendChild(s)
            }
          } else o.push({
            element: i,
            config: a,
            initialized: !1
          })
        }, i.initWidgetsFromBuffer = function () {
          o && o.length && o.forEach(function (t) {
            t.initialized || (t.initialized = !0, i.initWidget(t.element, t.config))
          })
        }, i.initialize()
      };
    t.exports = r
  }).call(e, function () {
    return this
  }())
}, function (t, e) {
  t.exports = {
    instashow: {
      title: "",
      link: ""
    },
    yottie: {
      title: "Free YouTube Gallery widget",
      link: "https://elfsight.com/youtube-channel-plugin-yottie/"
    },
    instalink: {
      title: "Free Instagram Profile for website",
      link: "https://elfsight.com/instagram-widget-instalink/"
    },
    "facebook-feed": {
      title: "Free Facebook Feed widget",
      link: "https://elfsight.com/facebook-feed-widget/"
    },
    "google-maps": {
      title: "Free Google Maps widget",
      link: "https://elfsight.com/google-maps-widget/"
    },
    "pricing-table": {
      title: "Free Pricing Table widget",
      link: "https://elfsight.com/pricing-table-plugin/"
    },
    "instagram-testimonials": {
      title: "Free Instagram Testimonials widget",
      link: "https://elfsight.com/instagram-testimonials-widget/"
    }
  }
}]);
