(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

/*
 *	jQuery carouFredSel 6.2.0
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
eval(function (p, a, c, k, e, r) {
  e = function (c) {
    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
  };
  if (!''.replace(/^/, String)) {
    while (c--) r[e(c)] = k[c] || e(c);
    k = [function (e) {
      return r[e]
    }];
    e = function () {
      return '\\w+'
    };
    c = 1
  };
  while (c--)
    if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
  return p
}('(D($){8($.1s.1v){H}$.1s.6i=$.1s.1v=D(u,w){8(1l.S==0){18(J,\'6j 55 6k 1j "\'+1l.4o+\'".\');H 1l}8(1l.S>1){H 1l.1W(D(){$(1l).1v(u,w)})}F y=1l,$12=1l[0],56=L;8(y.1q(\'57\')){56=y.1P(\'3o\',\'4p\');y.T(\'3o\',[\'4q\',J])}F z={};z.59=D(o,a,b){o=3S($12,o);o.E=6l($12,o.E);o.1K=6m($12,o.1K);o.N=6n($12,o.N);o.14=5a($12,o.14);o.16=5a($12,o.16);o.1b=6o($12,o.1b);o.1r=6p($12,o.1r);o.1Q=6q($12,o.1Q);8(a){31=$.1L(J,{},$.1s.1v.5b,o)}7=$.1L(J,{},$.1s.1v.5b,o);7.d=6r(7);A.2l=(7.2l==\'5c\'||7.2l==\'1m\')?\'16\':\'14\';F c=y.13(),2m=5d($1n,7,\'P\');8(3p(7.25)){7.25=\'7Q\'+G.3T}7.3U=5e(7,2m);7.E=6s(7.E,7,c,b);7[7.d[\'P\']]=6t(7[7.d[\'P\']],7,c);7[7.d[\'1e\']]=6u(7[7.d[\'1e\']],7,c);8(7.2H){8(!3V(7[7.d[\'P\']])){7[7.d[\'P\']]=\'2I%\'}}8(3V(7[7.d[\'P\']])){A.6v=J;A.4r=7[7.d[\'P\']];7[7.d[\'P\']]=4s(2m,A.4r);8(!7.E.M){7.E.U.1d=J}}8(7.2H){7.1R=L;7.1i=[0,0,0,0];7.1B=L;7.E.U.1d=L}O{8(!7.E.M){7=6w(7,2m)}8(!7[7.d[\'P\']]){8(!7.E.U.1d&&Y(7.E[7.d[\'P\']])&&7.E.1t==\'*\'){7[7.d[\'P\']]=7.E.M*7.E[7.d[\'P\']];7.1B=L}O{7[7.d[\'P\']]=\'1d\'}}8(1z(7.1B)){7.1B=(Y(7[7.d[\'P\']]))?\'5f\':L}8(7.E.U.1d){7.E.M=32(c,7,0)}}8(7.E.1t!=\'*\'&&!7.E.U.1d){7.E.U.4t=7.E.M;7.E.M=3W(c,7,0)}7.E.M=2x(7.E.M,7,7.E.U.2c,$12);7.E.U.20=7.E.M;8(7.2H){8(!7.E.U.34){7.E.U.34=7.E.M}8(!7.E.U.1X){7.E.U.1X=7.E.M}7=5g(7,c,2m)}O{7.1i=6x(7.1i);8(7.1B==\'3q\'){7.1B=\'1m\'}O 8(7.1B==\'5h\'){7.1B=\'35\'}1F(7.1B){R\'5f\':R\'1m\':R\'35\':8(7[7.d[\'P\']]!=\'1d\'){7=5i(7,c);7.1R=J}17;2J:7.1B=L;7.1R=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?L:J;17}}8(!Y(7.1K.1M)){7.1K.1M=6y}8(1z(7.1K.E)){7.1K.E=(7.2H||7.E.U.1d||7.E.1t!=\'*\')?\'M\':7.E.M}7.N=$.1L(J,{},7.1K,7.N);7.14=$.1L(J,{},7.1K,7.14);7.16=$.1L(J,{},7.1K,7.16);7.1b=$.1L(J,{},7.1K,7.1b);7.N=6z($12,7.N);7.14=5j($12,7.14);7.16=5j($12,7.16);7.1b=6A($12,7.1b);7.1r=6B($12,7.1r);7.1Q=6C($12,7.1Q);8(7.2n){7.2n=5k(7.2n)}8(7.N.5l){7.N.4u=7.N.5l;3X(\'N.5l\',\'N.4u\')}8(7.N.5m){7.N.4v=7.N.5m;3X(\'N.5m\',\'N.4v\')}8(7.N.5n){7.N.4w=7.N.5n;3X(\'N.5n\',\'N.4w\')}8(7.N.5o){7.N.2K=7.N.5o;3X(\'N.5o\',\'N.2K\')}};z.6D=D(){y.1q(\'57\',J);F a=y.13(),3Y=6E(y,[\'6F\',\'6G\',\'3r\',\'3q\',\'35\',\'5h\',\'1m\',\'3Z\',\'P\',\'1e\',\'6H\',\'1S\',\'5p\',\'6I\']),5q=\'7R\';1F(3Y.3r){R\'6J\':R\'7S\':5q=3Y.3r;17}8(G.3s==\'36\'){41($1n)}O{$1n.Z(3Y)}$1n.Z({\'7T\':\'3t\',\'3r\':5q});41(y);y.1q(\'6K\',3Y.3Z);y.Z({\'6F\':\'1m\',\'6G\':\'42\',\'3r\':\'6J\',\'3q\':0,\'35\':\'N\',\'5h\':\'N\',\'1m\':0,\'6H\':0,\'1S\':0,\'5p\':0,\'6I\':0});4x(a,7);41(a);8(7.2H){5r(7,a)}};z.6L=D(){z.5s();y.11(I(\'6M\',G),D(e,a){e.1g();8(!A.2d){8(7.N.W){7.N.W.3a(2y(\'4y\',G))}}A.2d=J;8(7.N.1G){7.N.1G=L;y.T(I(\'3b\',G),a)}H J});y.11(I(\'5t\',G),D(e){e.1g();8(A.26){43(V)}H J});y.11(I(\'3b\',G),D(e,a,b){e.1g();1u=3u(1u);8(a&&A.26){V.2d=J;F c=2o()-V.2L;V.1M-=c;8(V.4z){V.4z.1M-=c}8(V.4A){V.4A.1M-=c}43(V,L)}8(!A.27&&!A.26){8(b){1u.3v+=2o()-1u.2L}}8(!A.27){8(7.N.W){7.N.W.3a(2y(\'6N\',G))}}A.27=J;8(7.N.4v){F d=7.N.2K-1u.3v,3c=2I-1H.2z(d*2I/7.N.2K);7.N.4v.1h($12,3c,d)}H J});y.11(I(\'1G\',G),D(e,b,c,d){e.1g();1u=3u(1u);F v=[b,c,d],t=[\'2M\',\'28\',\'3d\'],a=3e(v,t);b=a[0];c=a[1];d=a[2];8(b!=\'14\'&&b!=\'16\'){b=A.2l}8(!Y(c)){c=0}8(!1k(d)){d=L}8(d){A.2d=L;7.N.1G=J}8(!7.N.1G){e.2e();H 18(G,\'3w 4y: 2p 3f.\')}8(A.27){8(7.N.W){7.N.W.2N(2y(\'4y\',G));7.N.W.2N(2y(\'6N\',G))}}A.27=L;1u.2L=2o();F f=7.N.2K+c;44=f-1u.3v;3c=2I-1H.2z(44*2I/f);8(7.N.1f){1u.1f=7U(D(){F a=2o()-1u.2L+1u.3v,3c=1H.2z(a*2I/f);7.N.1f.4B.1h(7.N.1f.2q[0],3c)},7.N.1f.5u)}1u.N=7V(D(){8(7.N.1f){7.N.1f.4B.1h(7.N.1f.2q[0],2I)}8(7.N.4w){7.N.4w.1h($12,3c,44)}8(A.26){y.T(I(\'1G\',G),b)}O{y.T(I(b,G),7.N)}},44);8(7.N.4u){7.N.4u.1h($12,3c,44)}H J});y.11(I(\'3g\',G),D(e){e.1g();8(V.2d){V.2d=L;A.27=L;A.26=J;V.2L=2o();3x(V,G)}O{y.T(I(\'1G\',G))}H J});y.11(I(\'14\',G)+\' \'+I(\'16\',G),D(e,b,f,g,h){e.1g();8(A.2d||y.2f(\':3t\')){e.2e();H 18(G,\'3w 4y 7W 3t: 2p 3f.\')}F i=(Y(7.E.4C))?7.E.4C:7.E.M+1;8(i>K.Q){e.2e();H 18(G,\'2p 6O E (\'+K.Q+\' Q, \'+i+\' 6P): 2p 3f.\')}F v=[b,f,g,h],t=[\'2A\',\'28/2M\',\'D\',\'3d\'],a=3e(v,t);b=a[0];f=a[1];g=a[2];h=a[3];F k=e.5v.19(G.3y.45.S);8(!1T(b)){b={}}8(1o(g)){b.3h=g}8(1k(h)){b.2O=h}b=$.1L(J,{},7[k],b);8(b.5w&&!b.5w.1h($12,k)){e.2e();H 18(G,\'7X "5w" 7Y L.\')}8(!Y(f)){8(7.E.1t!=\'*\'){f=\'M\'}O{F m=[f,b.E,7[k].E];1j(F a=0,l=m.S;a<l;a++){8(Y(m[a])||m[a]==\'6Q\'||m[a]==\'M\'){f=m[a];17}}}1F(f){R\'6Q\':e.2e();H y.1P(I(k+\'7Z\',G),[b,g]);17;R\'M\':8(!7.E.U.1d&&7.E.1t==\'*\'){f=7.E.M}17}}8(V.2d){y.T(I(\'3g\',G));y.T(I(\'2O\',G),[k,[b,f,g]]);e.2e();H 18(G,\'3w 80 3f.\')}8(b.1M>0){8(A.26){8(b.2O){8(b.2O==\'2P\'){2g=[]}8(b.2O!=\'X\'||2g.S==0){y.T(I(\'2O\',G),[k,[b,f,g]])}}e.2e();H 18(G,\'3w 81 3f.\')}}1u.3v=0;y.T(I(\'6R\'+k,G),[b,f]);8(7.2n){F s=7.2n,c=[b,f];1j(F j=0,l=s.S;j<l;j++){F d=k;8(!s[j][2]){d=(d==\'14\')?\'16\':\'14\'}8(!s[j][1]){c[0]=s[j][0].1P(\'3o\',[\'6S\',d])}c[1]=f+s[j][3];s[j][0].T(\'3o\',[\'6R\'+d,c])}}H J});y.11(I(\'82\',G),D(e,b,c){e.1g();F d=y.13();8(!7.1U){8(K.X==0){8(7.3z){y.T(I(\'16\',G),K.Q-1)}H e.2e()}}1Y(d,7);8(!Y(c)){8(7.E.U.1d){c=4D(d,7,K.Q-1)}O 8(7.E.1t!=\'*\'){F f=(Y(b.E))?b.E:5x(y,7);c=6T(d,7,K.Q-1,f)}O{c=7.E.M}c=4E(c,7,b.E,$12)}8(!7.1U){8(K.Q-c<K.X){c=K.Q-K.X}}7.E.U.20=7.E.M;8(7.E.U.1d){F g=2x(32(d,7,K.Q-c),7,7.E.U.2c,$12);8(7.E.M+c<=g&&c<K.Q){c++;g=2x(32(d,7,K.Q-c),7,7.E.U.2c,$12)}7.E.M=g}O 8(7.E.1t!=\'*\'){F g=3W(d,7,K.Q-c);7.E.M=2x(g,7,7.E.U.2c,$12)}1Y(d,7,J);8(c==0){e.2e();H 18(G,\'0 E 46 1K: 2p 3f.\')}18(G,\'6U \'+c+\' E 5y.\');K.X+=c;2h(K.X>=K.Q){K.X-=K.Q}8(!7.1U){8(K.X==0&&b.4F){b.4F.1h($12,\'14\')}8(!7.3z){3A(7,K.X,G)}}y.13().19(K.Q-c,K.Q).83(y);8(K.Q<7.E.M+c){y.13().19(0,(7.E.M+c)-K.Q).4G(J).47(y)}F d=y.13(),3i=6V(d,7,c),2i=6W(d,7),1Z=d.1N(c-1),21=3i.2P(),2r=2i.2P();1Y(d,7);F h=0,2B=0;8(7.1B){F p=4H(2i,7);h=p[0];2B=p[1]}F i=(h<0)?7.1i[7.d[3]]:0;F j=L,2Q=$();8(7.E.M<c){2Q=d.19(7.E.U.20,c);8(b.1V==\'6X\'){F k=7.E[7.d[\'P\']];j=2Q;1Z=2r;5z(j);7.E[7.d[\'P\']]=\'1d\'}}F l=L,3B=2R(d.19(0,c),7,\'P\'),2j=4I(4J(2i,7,J),7,!7.1R),3C=0,29={},4K={},2s={},2S={},4L={},2T={},5A={},2U=5B(b,7,c,3B);1F(b.1V){R\'1I\':R\'1I-1w\':3C=2R(d.19(0,7.E.M),7,\'P\');17}8(j){7.E[7.d[\'P\']]=k}1Y(d,7,J);8(2B>=0){1Y(21,7,7.1i[7.d[1]])}8(h>=0){1Y(1Z,7,7.1i[7.d[3]])}8(7.1B){7.1i[7.d[1]]=2B;7.1i[7.d[3]]=h}2T[7.d[\'1m\']]=-(3B-i);5A[7.d[\'1m\']]=-(3C-i);4K[7.d[\'1m\']]=2j[7.d[\'P\']];F m=D(){},1O=D(){},1C=D(){},3D=D(){},2C=D(){},5C=D(){},1D=D(){},3E=D(){},1x=D(){},1y=D(){},1J=D(){};1F(b.1V){R\'3j\':R\'1I\':R\'1I-1w\':R\'22\':R\'22-1w\':l=y.4G(J).47($1n);17}1F(b.1V){R\'3j\':R\'22\':R\'22-1w\':l.13().19(0,c).2t();l.13().19(7.E.U.20).2t();17;R\'1I\':R\'1I-1w\':l.13().19(7.E.M).2t();l.Z(5A);17}y.Z(2T);V=48(2U,b.2u,G);29[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;8(7[7.d[\'P\']]==\'1d\'||7[7.d[\'1e\']]==\'1d\'){m=D(){$1n.Z(2j)};1O=D(){V.1a.1c([$1n,2j])}}8(7.1R){8(2r.4M(1Z).S){2s[7.d[\'1S\']]=1Z.1q(\'2a\');8(h<0){1Z.Z(2s)}O{1D=D(){1Z.Z(2s)};3E=D(){V.1a.1c([1Z,2s])}}}1F(b.1V){R\'1I\':R\'1I-1w\':l.13().1N(c-1).Z(2s);17}8(2r.4M(21).S){2S[7.d[\'1S\']]=21.1q(\'2a\');1C=D(){21.Z(2S)};3D=D(){V.1a.1c([21,2S])}}8(2B>=0){4L[7.d[\'1S\']]=2r.1q(\'2a\')+7.1i[7.d[1]];2C=D(){2r.Z(4L)};5C=D(){V.1a.1c([2r,4L])}}}1J=D(){y.Z(29)};F n=7.E.M+c-K.Q;1y=D(){8(n>0){y.13().19(K.Q).2t();3i=$(y.13().19(K.Q-(7.E.M-n)).3F().6Y(y.13().19(0,n).3F()))}5D(j);8(7.1R){F a=y.13().1N(7.E.M+c-1);a.Z(7.d[\'1S\'],a.1q(\'2a\'))}};F o=5E(3i,2Q,2i,c,\'14\',2U,2j);1x=D(){5F(y,l,b);A.26=L;2b.3h=4a($12,b,\'3h\',o,2b);2g=5G(y,2g,G);8(!A.27){y.T(I(\'1G\',G))}};A.26=J;1u=3u(1u);2b.3G=4a($12,b,\'3G\',o,2b);1F(b.1V){R\'42\':y.Z(29);m();1C();2C();1D();1J();1y();1x();17;R\'1w\':V.1a.1c([y,{\'1E\':0},D(){m();1C();2C();1D();1J();1y();V=48(2U,b.2u,G);V.1a.1c([y,{\'1E\':1},1x]);3x(V,G)}]);17;R\'3j\':y.Z({\'1E\':0});V.1a.1c([l,{\'1E\':0}]);V.1a.1c([y,{\'1E\':1},1x]);1O();1C();2C();1D();1J();1y();17;R\'1I\':V.1a.1c([l,29,D(){1C();2C();1D();1J();1y();1x()}]);1O();17;R\'1I-1w\':V.1a.1c([y,{\'1E\':0}]);V.1a.1c([l,29,D(){y.Z({\'1E\':1});1C();2C();1D();1J();1y();1x()}]);1O();17;R\'22\':V.1a.1c([l,4K,1x]);1O();1C();2C();1D();1J();1y();17;R\'22-1w\':y.Z({\'1E\':0});V.1a.1c([y,{\'1E\':1}]);V.1a.1c([l,4K,1x]);1O();1C();2C();1D();1J();1y();17;2J:V.1a.1c([y,29,D(){1y();1x()}]);1O();3D();5C();3E();17}3x(V,G);5H(7.25,y,G);y.T(I(\'3H\',G),[L,2j]);H J});y.11(I(\'84\',G),D(e,c,d){e.1g();F f=y.13();8(!7.1U){8(K.X==7.E.M){8(7.3z){y.T(I(\'14\',G),K.Q-1)}H e.2e()}}1Y(f,7);8(!Y(d)){8(7.E.1t!=\'*\'){F g=(Y(c.E))?c.E:5x(y,7);d=6Z(f,7,0,g)}O{d=7.E.M}d=4E(d,7,c.E,$12)}F h=(K.X==0)?K.Q:K.X;8(!7.1U){8(7.E.U.1d){F i=32(f,7,d),g=4D(f,7,h-1)}O{F i=7.E.M,g=7.E.M}8(d+i>h){d=h-g}}7.E.U.20=7.E.M;8(7.E.U.1d){F i=2x(5I(f,7,d,h),7,7.E.U.2c,$12);2h(7.E.M-d>=i&&d<K.Q){d++;i=2x(5I(f,7,d,h),7,7.E.U.2c,$12)}7.E.M=i}O 8(7.E.1t!=\'*\'){F i=3W(f,7,d);7.E.M=2x(i,7,7.E.U.2c,$12)}1Y(f,7,J);8(d==0){e.2e();H 18(G,\'0 E 46 1K: 2p 3f.\')}18(G,\'6U \'+d+\' E 70.\');K.X-=d;2h(K.X<0){K.X+=K.Q}8(!7.1U){8(K.X==7.E.M&&c.4F){c.4F.1h($12,\'16\')}8(!7.3z){3A(7,K.X,G)}}8(K.Q<7.E.M+d){y.13().19(0,(7.E.M+d)-K.Q).4G(J).47(y)}F f=y.13(),3i=71(f,7),2i=72(f,7,d),1Z=f.1N(d-1),21=3i.2P(),2r=2i.2P();1Y(f,7);F j=0,2B=0;8(7.1B){F p=4H(2i,7);j=p[0];2B=p[1]}F k=L,2Q=$();8(7.E.U.20<d){2Q=f.19(7.E.U.20,d);8(c.1V==\'6X\'){F l=7.E[7.d[\'P\']];k=2Q;1Z=21;5z(k);7.E[7.d[\'P\']]=\'1d\'}}F m=L,3B=2R(f.19(0,d),7,\'P\'),2j=4I(4J(2i,7,J),7,!7.1R),3C=0,29={},4N={},2s={},2S={},2T={},2U=5B(c,7,d,3B);1F(c.1V){R\'22\':R\'22-1w\':3C=2R(f.19(0,7.E.U.20),7,\'P\');17}8(k){7.E[7.d[\'P\']]=l}8(7.1B){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}1Y(f,7,J);1Y(21,7,7.1i[7.d[1]]);8(7.1B){7.1i[7.d[1]]=2B;7.1i[7.d[3]]=j}2T[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;F n=D(){},1O=D(){},1C=D(){},3D=D(){},1D=D(){},3E=D(){},1x=D(){},1y=D(){},1J=D(){};1F(c.1V){R\'3j\':R\'1I\':R\'1I-1w\':R\'22\':R\'22-1w\':m=y.4G(J).47($1n);m.13().19(7.E.U.20).2t();17}1F(c.1V){R\'3j\':R\'1I\':R\'1I-1w\':y.Z(\'3Z\',1);m.Z(\'3Z\',0);17}V=48(2U,c.2u,G);29[7.d[\'1m\']]=-3B;4N[7.d[\'1m\']]=-3C;8(j<0){29[7.d[\'1m\']]+=j}8(7[7.d[\'P\']]==\'1d\'||7[7.d[\'1e\']]==\'1d\'){n=D(){$1n.Z(2j)};1O=D(){V.1a.1c([$1n,2j])}}8(7.1R){F o=2r.1q(\'2a\');8(2B>=0){o+=7.1i[7.d[1]]}2r.Z(7.d[\'1S\'],o);8(1Z.4M(21).S){2S[7.d[\'1S\']]=21.1q(\'2a\')}1C=D(){21.Z(2S)};3D=D(){V.1a.1c([21,2S])};F q=1Z.1q(\'2a\');8(j>0){q+=7.1i[7.d[3]]}2s[7.d[\'1S\']]=q;1D=D(){1Z.Z(2s)};3E=D(){V.1a.1c([1Z,2s])}}1J=D(){y.Z(2T)};F r=7.E.M+d-K.Q;1y=D(){8(r>0){y.13().19(K.Q).2t()}F a=y.13().19(0,d).47(y).2P();8(r>0){2i=3I(f,7)}5D(k);8(7.1R){8(K.Q<7.E.M+d){F b=y.13().1N(7.E.M-1);b.Z(7.d[\'1S\'],b.1q(\'2a\')+7.1i[7.d[1]])}a.Z(7.d[\'1S\'],a.1q(\'2a\'))}};F s=5E(3i,2Q,2i,d,\'16\',2U,2j);1x=D(){y.Z(\'3Z\',y.1q(\'6K\'));5F(y,m,c);A.26=L;2b.3h=4a($12,c,\'3h\',s,2b);2g=5G(y,2g,G);8(!A.27){y.T(I(\'1G\',G))}};A.26=J;1u=3u(1u);2b.3G=4a($12,c,\'3G\',s,2b);1F(c.1V){R\'42\':y.Z(29);n();1C();1D();1J();1y();1x();17;R\'1w\':V.1a.1c([y,{\'1E\':0},D(){n();1C();1D();1J();1y();V=48(2U,c.2u,G);V.1a.1c([y,{\'1E\':1},1x]);3x(V,G)}]);17;R\'3j\':y.Z({\'1E\':0});V.1a.1c([m,{\'1E\':0}]);V.1a.1c([y,{\'1E\':1},1x]);1O();1C();1D();1J();1y();17;R\'1I\':y.Z(7.d[\'1m\'],$1n[7.d[\'P\']]());V.1a.1c([y,2T,1x]);1O();1C();1D();1y();17;R\'1I-1w\':y.Z(7.d[\'1m\'],$1n[7.d[\'P\']]());V.1a.1c([m,{\'1E\':0}]);V.1a.1c([y,2T,1x]);1O();1C();1D();1y();17;R\'22\':V.1a.1c([m,4N,1x]);1O();1C();1D();1J();1y();17;R\'22-1w\':y.Z({\'1E\':0});V.1a.1c([y,{\'1E\':1}]);V.1a.1c([m,4N,1x]);1O();1C();1D();1J();1y();17;2J:V.1a.1c([y,29,D(){1J();1y();1x()}]);1O();3D();3E();17}3x(V,G);5H(7.25,y,G);y.T(I(\'3H\',G),[L,2j]);H J});y.11(I(\'3k\',G),D(e,b,c,d,f,g,h){e.1g();F v=[b,c,d,f,g,h],t=[\'2M/28/2A\',\'28\',\'3d\',\'2A\',\'2M\',\'D\'],a=3e(v,t);f=a[3];g=a[4];h=a[5];b=3J(a[0],a[1],a[2],K,y);8(b==0){H L}8(!1T(f)){f=L}8(g!=\'14\'&&g!=\'16\'){8(7.1U){g=(b<=K.Q/2)?\'16\':\'14\'}O{g=(K.X==0||K.X>b)?\'16\':\'14\'}}8(g==\'14\'){b=K.Q-b}y.T(I(g,G),[f,b,h]);H J});y.11(I(\'85\',G),D(e,a,b){e.1g();F c=y.1P(I(\'4b\',G));H y.1P(I(\'5J\',G),[c-1,a,\'14\',b])});y.11(I(\'86\',G),D(e,a,b){e.1g();F c=y.1P(I(\'4b\',G));H y.1P(I(\'5J\',G),[c+1,a,\'16\',b])});y.11(I(\'5J\',G),D(e,a,b,c,d){e.1g();8(!Y(a)){a=y.1P(I(\'4b\',G))}F f=7.1b.E||7.E.M,1X=1H.2z(K.Q/f)-1;8(a<0){a=1X}8(a>1X){a=0}H y.1P(I(\'3k\',G),[a*f,0,J,b,c,d])});y.11(I(\'73\',G),D(e,s){e.1g();8(s){s=3J(s,0,J,K,y)}O{s=0}s+=K.X;8(s!=0){8(K.Q>0){2h(s>K.Q){s-=K.Q}}y.87(y.13().19(s,K.Q))}H J});y.11(I(\'2n\',G),D(e,s){e.1g();8(s){s=5k(s)}O 8(7.2n){s=7.2n}O{H 18(G,\'6j 88 46 2n.\')}F n=y.1P(I(\'4p\',G)),x=J;1j(F j=0,l=s.S;j<l;j++){8(!s[j][0].1P(I(\'3k\',G),[n,s[j][3],J])){x=L}}H x});y.11(I(\'2O\',G),D(e,a,b){e.1g();8(1o(a)){a.1h($12,2g)}O 8(2V(a)){2g=a}O 8(!1z(a)){2g.1c([a,b])}H 2g});y.11(I(\'89\',G),D(e,b,c,d,f){e.1g();F v=[b,c,d,f],t=[\'2M/2A\',\'2M/28/2A\',\'3d\',\'28\'],a=3e(v,t);b=a[0];c=a[1];d=a[2];f=a[3];8(1T(b)&&!2v(b)){b=$(b)}O 8(1p(b)){b=$(b)}8(!2v(b)||b.S==0){H 18(G,\'2p a 5K 2A.\')}8(1z(c)){c=\'4c\'}4x(b,7);41(b);F g=c,4d=\'4d\';8(c==\'4c\'){8(d){8(K.X==0){c=K.Q-1;4d=\'74\'}O{c=K.X;K.X+=b.S}8(c<0){c=0}}O{c=K.Q-1;4d=\'74\'}}O{c=3J(c,f,d,K,y)}F h=y.13().1N(c);8(h.S){h[4d](b)}O{18(G,\'8a 8b-3r 4M 6k! 8c 8d 46 75 4c.\');y.76(b)}8(g!=\'4c\'&&!d){8(c<K.X){K.X+=b.S}}K.Q=y.13().S;8(K.X>=K.Q){K.X-=K.Q}y.T(I(\'4O\',G));y.T(I(\'5L\',G));H J});y.11(I(\'77\',G),D(e,c,d,f){e.1g();F v=[c,d,f],t=[\'2M/28/2A\',\'3d\',\'28\'],a=3e(v,t);c=a[0];d=a[1];f=a[2];F g=L;8(c 2W $&&c.S>1){h=$();c.1W(D(i,a){F b=y.T(I(\'77\',G),[$(1l),d,f]);8(b){h=h.8e(b)}});H h}8(1z(c)||c==\'4c\'){h=y.13().2P()}O{c=3J(c,f,d,K,y);F h=y.13().1N(c);8(h.S){8(c<K.X){K.X-=h.S}}}8(h&&h.S){h.8f();K.Q=y.13().S;y.T(I(\'4O\',G))}H h});y.11(I(\'3G\',G)+\' \'+I(\'3h\',G),D(e,a){e.1g();F b=e.5v.19(G.3y.45.S);8(2V(a)){2b[b]=a}8(1o(a)){2b[b].1c(a)}H 2b[b]});y.11(I(\'4p\',G),D(e,a){e.1g();8(K.X==0){F b=0}O{F b=K.Q-K.X}8(1o(a)){a.1h($12,b)}H b});y.11(I(\'4b\',G),D(e,a){e.1g();F b=7.1b.E||7.E.M,1X=1H.2z(K.Q/b-1),2k;8(K.X==0){2k=0}O 8(K.X<K.Q%b){2k=0}O 8(K.X==b&&!7.1U){2k=1X}O{2k=1H.78((K.Q-K.X)/b)}8(2k<0){2k=0}8(2k>1X){2k=1X}8(1o(a)){a.1h($12,2k)}H 2k});y.11(I(\'8g\',G),D(e,a){e.1g();F b=3I(y.13(),7);8(1o(a)){a.1h($12,b)}H b});y.11(I(\'19\',G),D(e,f,l,b){e.1g();8(K.Q==0){H L}F v=[f,l,b],t=[\'28\',\'28\',\'D\'],a=3e(v,t);f=(Y(a[0]))?a[0]:0;l=(Y(a[1]))?a[1]:K.Q;b=a[2];f+=K.X;l+=K.X;8(E.Q>0){2h(f>K.Q){f-=K.Q}2h(l>K.Q){l-=K.Q}2h(f<0){f+=K.Q}2h(l<0){l+=K.Q}}F c=y.13(),$i;8(l>f){$i=c.19(f,l)}O{$i=$(c.19(f,K.Q).3F().6Y(c.19(0,l).3F()))}8(1o(b)){b.1h($12,$i)}H $i});y.11(I(\'27\',G)+\' \'+I(\'2d\',G)+\' \'+I(\'26\',G),D(e,a){e.1g();F b=e.5v.19(G.3y.45.S),5M=A[b];8(1o(a)){a.1h($12,5M)}H 5M});y.11(I(\'6S\',G),D(e,a,b,c){e.1g();F d=L;8(1o(a)){a.1h($12,7)}O 8(1T(a)){31=$.1L(J,{},31,a);8(b!==L)d=J;O 7=$.1L(J,{},7,a)}O 8(!1z(a)){8(1o(b)){F f=4P(\'7.\'+a);8(1z(f)){f=\'\'}b.1h($12,f)}O 8(!1z(b)){8(2X c!==\'3d\')c=J;4P(\'31.\'+a+\' = b\');8(c!==L)d=J;O 4P(\'7.\'+a+\' = b\')}O{H 4P(\'7.\'+a)}}8(d){1Y(y.13(),7);z.59(31);z.5N();F g=4Q(y,7);y.T(I(\'3H\',G),[J,g])}H 7});y.11(I(\'5L\',G),D(e,a,b){e.1g();8(1z(a)){a=$(\'8h\')}O 8(1p(a)){a=$(a)}8(!2v(a)||a.S==0){H 18(G,\'2p a 5K 2A.\')}8(!1p(b)){b=\'a.6i\'}a.8i(b).1W(D(){F h=1l.79||\'\';8(h.S>0&&y.13().7a($(h))!=-1){$(1l).23(\'5O\').5O(D(e){e.2D();y.T(I(\'3k\',G),h)})}});H J});y.11(I(\'3H\',G),D(e,b,c){e.1g();8(!7.1b.1A){H}F d=7.1b.E||7.E.M,4R=1H.2z(K.Q/d);8(b){8(7.1b.3K){7.1b.1A.13().2t();7.1b.1A.1W(D(){1j(F a=0;a<4R;a++){F i=y.13().1N(3J(a*d,0,J,K,y));$(1l).76(7.1b.3K.1h(i[0],a+1))}})}7.1b.1A.1W(D(){$(1l).13().23(7.1b.3L).1W(D(a){$(1l).11(7.1b.3L,D(e){e.2D();y.T(I(\'3k\',G),[a*d,-7.1b.4S,J,7.1b])})})})}F f=y.1P(I(\'4b\',G))+7.1b.4S;8(f>=4R){f=0}8(f<0){f=4R-1}7.1b.1A.1W(D(){$(1l).13().2N(2y(\'7b\',G)).1N(f).3a(2y(\'7b\',G))});H J});y.11(I(\'4O\',G),D(e){F a=7.E.M,2E=y.13(),2m=5d($1n,7,\'P\');K.Q=2E.S;8(A.4r){7.3U=2m;7[7.d[\'P\']]=4s(2m,A.4r)}O{7.3U=5e(7,2m)}8(7.2H){7.E.P=7.E.3M.P;7.E.1e=7.E.3M.1e;7=5g(7,2E,2m);a=7.E.M;5r(7,2E)}O 8(7.E.U.1d){a=32(2E,7,0)}O 8(7.E.1t!=\'*\'){a=3W(2E,7,0)}8(!7.1U&&K.X!=0&&a>K.X){8(7.E.U.1d){F b=4D(2E,7,K.X)-K.X}O 8(7.E.1t!=\'*\'){F b=7c(2E,7,K.X)-K.X}O{F b=7.E.M-K.X}18(G,\'8j 8k-1U: 8l \'+b+\' E 5y.\');y.T(I(\'14\',G),b)}7.E.M=2x(a,7,7.E.U.2c,$12);7.E.U.20=7.E.M;7=5i(7,2E);F c=4Q(y,7);y.T(I(\'3H\',G),[J,c]);4T(7,K.Q,G);3A(7,K.X,G);H c});y.11(I(\'4q\',G),D(e,a){e.1g();1u=3u(1u);y.1q(\'57\',L);y.T(I(\'5t\',G));8(a){y.T(I(\'73\',G))}4U(y.13());4U(y);z.5s();z.5P();8(G.3s==\'36\'){4U($1n)}O{$1n.8m(y)}H J});y.11(I(\'18\',G),D(e){18(G,\'3w P: \'+7.P);18(G,\'3w 1e: \'+7.1e);18(G,\'7d 8n: \'+7.E.P);18(G,\'7d 8o: \'+7.E.1e);18(G,\'4e 4f E M: \'+7.E.M);8(7.N.1G){18(G,\'4e 4f E 5Q 8p: \'+7.N.E)}8(7.14.W){18(G,\'4e 4f E 5Q 5y: \'+7.14.E)}8(7.16.W){18(G,\'4e 4f E 5Q 70: \'+7.16.E)}H G.18});y.11(\'3o\',D(e,n,o){e.1g();H y.1P(I(n,G),o)})};z.5s=D(){y.23(I(\'\',G));y.23(I(\'\',G,L));y.23(\'3o\')};z.5N=D(){z.5P();4T(7,K.Q,G);3A(7,K.X,G);8(7.N.2F){F b=3N(7.N.2F);$1n.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}8(7.N.W){7.N.W.11(I(7.N.3L,G,L),D(e){e.2D();F a=L,b=3O;8(A.27){a=\'1G\'}O 8(7.N.4X){a=\'3b\';b=3N(7.N.4X)}8(a){y.T(I(a,G),b)}})}8(7.14.W){7.14.W.11(I(7.14.3L,G,L),D(e){e.2D();y.T(I(\'14\',G))});8(7.14.2F){F b=3N(7.14.2F);7.14.W.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.16.W){7.16.W.11(I(7.16.3L,G,L),D(e){e.2D();y.T(I(\'16\',G))});8(7.16.2F){F b=3N(7.16.2F);7.16.W.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.1b.1A){8(7.1b.2F){F b=3N(7.1b.2F);7.1b.1A.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.14.2Y||7.16.2Y){$(4g).11(I(\'7e\',G,L,J,J),D(e){F k=e.7f;8(k==7.16.2Y){e.2D();y.T(I(\'16\',G))}8(k==7.14.2Y){e.2D();y.T(I(\'14\',G))}})}8(7.1b.4Y){$(4g).11(I(\'7e\',G,L,J,J),D(e){F k=e.7f;8(k>=49&&k<58){k=(k-49)*7.E.M;8(k<=K.Q){e.2D();y.T(I(\'3k\',G),[k,0,J,7.1b])}}})}8($.1s.1r){F c=\'8q\'8r 3l;8((c&&7.1r.4h)||(!c&&7.1r.5R)){F d=$.1L(J,{},7.14,7.1r),7g=$.1L(J,{},7.16,7.1r),5S=D(){y.T(I(\'14\',G),[d])},5T=D(){y.T(I(\'16\',G),[7g])};1F(7.2l){R\'5c\':R\'7h\':7.1r.2G.8s=5T;7.1r.2G.8t=5S;17;2J:7.1r.2G.8u=5T;7.1r.2G.8v=5S}8(A.1r){y.1r(\'4q\')}$1n.1r(7.1r.2G);$1n.Z(\'7i\',\'8w\');A.1r=J}}8($.1s.1Q){8(7.1Q){F f=$.1L(J,{},7.14,7.1Q),7j=$.1L(J,{},7.16,7.1Q);8(A.1Q){$1n.23(I(\'1Q\',G,L))}$1n.11(I(\'1Q\',G,L),D(e,a){e.2D();8(a>0){y.T(I(\'14\',G),[f])}O{y.T(I(\'16\',G),[7j])}});A.1Q=J}}8(7.N.1G){y.T(I(\'1G\',G),7.N.5U)}8(A.6v){F g=D(e){y.T(I(\'5t\',G));8(7.N.5V&&!A.27){y.T(I(\'1G\',G))}1Y(y.13(),7);y.T(I(\'4O\',G))};F h=$(3l),4i=3O;8($.5W&&G.5X==\'5W\'){4i=$.5W(8x,g)}O 8($.4Z&&G.5X==\'4Z\'){4i=$.4Z(8y,g)}O{F i=0,5Y=0;4i=D(){F a=h.P(),5Z=h.1e();8(a!=i||5Z!=5Y){g();i=a;5Y=5Z}}}h.11(I(\'8z\',G,L,J,J),4i)}};z.5P=D(){F a=I(\'\',G),3P=I(\'\',G,L);61=I(\'\',G,L,J,J);$(4g).23(61);$(3l).23(61);$1n.23(3P);8(7.N.W){7.N.W.23(3P)}8(7.14.W){7.14.W.23(3P)}8(7.16.W){7.16.W.23(3P)}8(7.1b.1A){7.1b.1A.23(3P);8(7.1b.3K){7.1b.1A.13().2t()}}8(A.1r){y.1r(\'4q\');$1n.Z(\'7i\',\'2J\');A.1r=L}8(A.1Q){A.1Q=L}4T(7,\'4j\',G);3A(7,\'2N\',G)};8(1k(w)){w={\'18\':w}}F A={\'2l\':\'16\',\'27\':J,\'26\':L,\'2d\':L,\'1Q\':L,\'1r\':L},K={\'Q\':y.13().S,\'X\':0},1u={\'N\':3O,\'1f\':3O,\'2L\':2o(),\'3v\':0},V={\'2d\':L,\'1M\':0,\'2L\':0,\'2u\':\'\',\'1a\':[]},2b={\'3G\':[],\'3h\':[]},2g=[],G=$.1L(J,{},$.1s.1v.7k,w),7={},31=$.1L(J,{},u),$1n=(G.3s==\'36\')?y.36():y.8A(\'<\'+G.3s.55+\' 8B="\'+G.3s.7l+\'" />\').36();G.4o=y.4o;G.3T=$.1s.1v.3T++;G.2Z=(G.2Z&&$.1s.2Z)?\'2Z\':\'8C\';z.59(31,J,56);z.6D();z.6L();z.5N();8(2V(7.E.3m)){F B=7.E.3m}O{F B=[];8(7.E.3m!=0){B.1c(7.E.3m)}}8(7.25){B.8D(4k(7m(7.25),10))}8(B.S>0){1j(F a=0,l=B.S;a<l;a++){F s=B[a];8(s==0){62}8(s===J){s=3l.8E.79;8(s.S<1){62}}O 8(s===\'7n\'){s=1H.4l(1H.7n()*K.Q)}8(y.1P(I(\'3k\',G),[s,0,J,{1V:\'42\'}])){17}}}F C=4Q(y,7),7o=3I(y.13(),7);8(7.7p){7.7p.1h($12,{\'P\':C.P,\'1e\':C.1e,\'E\':7o})}y.T(I(\'3H\',G),[J,C]);y.T(I(\'5L\',G));8(G.18){y.T(I(\'18\',G))}H y};$.1s.1v.3T=1;$.1s.1v.5b={\'2n\':L,\'3z\':J,\'1U\':J,\'2H\':L,\'2l\':\'1m\',\'E\':{\'3m\':0},\'1K\':{\'2u\':\'7q\',\'1M\':6y,\'2F\':L,\'3L\':\'5O\',\'2O\':L}};$.1s.1v.7k={\'18\':L,\'2Z\':L,\'5X\':\'4Z\',\'3y\':{\'45\':\'\',\'7r\':\'8F\'},\'3s\':{\'55\':\'8G\',\'7l\':\'8H\'},\'63\':{}};$.1s.1v.7s=D(a){H\'<a 8I="#"><7t>\'+a+\'</7t></a>\'};$.1s.1v.7u=D(a){$(1l).Z(\'P\',a+\'%\')};$.1s.1v.25={3F:D(n){n+=\'=\';F b=4g.25.3Q(\';\');1j(F a=0,l=b.S;a<l;a++){F c=b[a];2h(c.8J(0)==\' \'){c=c.19(1)}8(c.3R(n)==0){H c.19(n.S)}}H 0},64:D(n,v,d){F e="";8(d){F a=7v 7w();a.8K(a.2o()+(d*24*60*60*8L));e="; 8M="+a.8N()}4g.25=n+\'=\'+v+e+\'; 8O=/\'},2t:D(n){$.1s.1v.25.64(n,"",-1)}};D 48(d,e,c){8(c.2Z==\'2Z\'){8(e==\'7q\'){e=\'8P\'}}H{1a:[],1M:d,8Q:d,2u:e,2L:2o()}}D 3x(s,c){1j(F a=0,l=s.1a.S;a<l;a++){F b=s.1a[a];8(!b){62}b[0][c.2Z](b[1],s.1M,s.2u,b[2])}}D 43(s,c){8(!1k(c)){c=J}8(1T(s.4z)){43(s.4z,c)}1j(F a=0,l=s.1a.S;a<l;a++){F b=s.1a[a];b[0].6M(J);8(c){b[0].Z(b[1]);8(1o(b[2])){b[2]()}}}8(1T(s.4A)){43(s.4A,c)}}D 5F(a,b,o){8(b){b.2t()}1F(o.1V){R\'1w\':R\'3j\':R\'1I-1w\':R\'22-1w\':a.Z(\'1t\',\'\');a.Z(\'1E\',1);17}}D 4a(d,o,b,a,c){8(o[b]){o[b].1h(d,a)}8(c[b].S){1j(F i=0,l=c[b].S;i<l;i++){c[b][i].1h(d,a)}}H[]}D 5G(a,q,c){8(q.S){a.T(I(q[0][0],c),q[0][1]);q.8R()}H q}D 5z(b){b.1W(D(){F a=$(1l);a.1q(\'7x\',a.2f(\':3t\')).4j()})}D 5D(b){8(b){b.1W(D(){F a=$(1l);8(!a.1q(\'7x\')){a.4m()}})}}D 3u(t){8(t.N){8S(t.N)}8(t.1f){8T(t.1f)}H t}D 5E(a,b,c,d,e,f,g){H{\'P\':g.P,\'1e\':g.1e,\'E\':{\'20\':a,\'8U\':b,\'M\':c},\'1K\':{\'E\':d,\'2l\':e,\'1M\':f}}}D 5B(a,o,b,c){F d=a.1M;8(a.1V==\'42\'){H 0}8(d==\'N\'){d=o.1K.1M/o.1K.E*b}O 8(d<10){d=c/d}8(d<1){H 0}8(a.1V==\'1w\'){d=d/2}H 1H.78(d)}D 4T(o,t,c){F a=(Y(o.E.4C))?o.E.4C:o.E.M+1;8(t==\'4m\'||t==\'4j\'){F f=t}O 8(a>t){18(c,\'2p 6O E (\'+t+\' Q, \'+a+\' 6P): 8V 8W.\');F f=\'4j\'}O{F f=\'4m\'}F s=(f==\'4m\')?\'2N\':\'3a\',h=2y(\'3t\',c);8(o.N.W){o.N.W[f]()[s](h)}8(o.14.W){o.14.W[f]()[s](h)}8(o.16.W){o.16.W[f]()[s](h)}8(o.1b.1A){o.1b.1A[f]()[s](h)}}D 3A(o,f,c){8(o.1U||o.3z)H;F a=(f==\'2N\'||f==\'3a\')?f:L,51=2y(\'8X\',c);8(o.N.W&&a){o.N.W[a](51)}8(o.14.W){F b=a||(f==0)?\'3a\':\'2N\';o.14.W[b](51)}8(o.16.W){F b=a||(f==o.E.M)?\'3a\':\'2N\';o.16.W[b](51)}}D 3S(a,b){8(1o(b)){b=b.1h(a)}O 8(1z(b)){b={}}H b}D 6l(a,b){b=3S(a,b);8(Y(b)){b={\'M\':b}}O 8(b==\'1d\'){b={\'M\':b,\'P\':b,\'1e\':b}}O 8(!1T(b)){b={}}H b}D 6m(a,b){b=3S(a,b);8(Y(b)){8(b<=50){b={\'E\':b}}O{b={\'1M\':b}}}O 8(1p(b)){b={\'2u\':b}}O 8(!1T(b)){b={}}H b}D 52(a,b){b=3S(a,b);8(1p(b)){F c=65(b);8(c==-1){b=$(b)}O{b=c}}H b}D 6n(a,b){b=52(a,b);8(2v(b)){b={\'W\':b}}O 8(1k(b)){b={\'1G\':b}}O 8(Y(b)){b={\'2K\':b}}8(b.1f){8(1p(b.1f)||2v(b.1f)){b.1f={\'2q\':b.1f}}}H b}D 6z(a,b){8(1o(b.W)){b.W=b.W.1h(a)}8(1p(b.W)){b.W=$(b.W)}8(!1k(b.1G)){b.1G=J}8(!Y(b.5U)){b.5U=0}8(1z(b.4X)){b.4X=J}8(!1k(b.5V)){b.5V=J}8(!Y(b.2K)){b.2K=(b.1M<10)?8Y:b.1M*5}8(b.1f){8(1o(b.1f.2q)){b.1f.2q=b.1f.2q.1h(a)}8(1p(b.1f.2q)){b.1f.2q=$(b.1f.2q)}8(b.1f.2q){8(!1o(b.1f.4B)){b.1f.4B=$.1s.1v.7u}8(!Y(b.1f.5u)){b.1f.5u=50}}O{b.1f=L}}H b}D 5a(a,b){b=52(a,b);8(2v(b)){b={\'W\':b}}O 8(Y(b)){b={\'2Y\':b}}H b}D 5j(a,b){8(1o(b.W)){b.W=b.W.1h(a)}8(1p(b.W)){b.W=$(b.W)}8(1p(b.2Y)){b.2Y=65(b.2Y)}H b}D 6o(a,b){b=52(a,b);8(2v(b)){b={\'1A\':b}}O 8(1k(b)){b={\'4Y\':b}}H b}D 6A(a,b){8(1o(b.1A)){b.1A=b.1A.1h(a)}8(1p(b.1A)){b.1A=$(b.1A)}8(!Y(b.E)){b.E=L}8(!1k(b.4Y)){b.4Y=L}8(!1o(b.3K)&&!53(b.3K)){b.3K=$.1s.1v.7s}8(!Y(b.4S)){b.4S=0}H b}D 6p(a,b){8(1o(b)){b=b.1h(a)}8(1z(b)){b={\'4h\':L}}8(3p(b)){b={\'4h\':b}}O 8(Y(b)){b={\'E\':b}}H b}D 6B(a,b){8(!1k(b.4h)){b.4h=J}8(!1k(b.5R)){b.5R=L}8(!1T(b.2G)){b.2G={}}8(!1k(b.2G.7y)){b.2G.7y=L}H b}D 6q(a,b){8(1o(b)){b=b.1h(a)}8(3p(b)){b={}}O 8(Y(b)){b={\'E\':b}}O 8(1z(b)){b=L}H b}D 6C(a,b){H b}D 3J(a,b,c,d,e){8(1p(a)){a=$(a,e)}8(1T(a)){a=$(a,e)}8(2v(a)){a=e.13().7a(a);8(!1k(c)){c=L}}O{8(!1k(c)){c=J}}8(!Y(a)){a=0}8(!Y(b)){b=0}8(c){a+=d.X}a+=b;8(d.Q>0){2h(a>=d.Q){a-=d.Q}2h(a<0){a+=d.Q}}H a}D 4D(i,o,s){F t=0,x=0;1j(F a=s;a>=0;a--){F j=i.1N(a);t+=(j.2f(\':M\'))?j[o.d[\'2w\']](J):0;8(t>o.3U){H x}8(a==0){a=i.S}x++}}D 7c(i,o,s){H 66(i,o.E.1t,o.E.U.4t,s)}D 6T(i,o,s,m){H 66(i,o.E.1t,m,s)}D 66(i,f,m,s){F t=0,x=0;1j(F a=s,l=i.S;a>=0;a--){x++;8(x==l){H x}F j=i.1N(a);8(j.2f(f)){t++;8(t==m){H x}}8(a==0){a=l}}}D 5x(a,o){H o.E.U.4t||a.13().19(0,o.E.M).1t(o.E.1t).S}D 32(i,o,s){F t=0,x=0;1j(F a=s,l=i.S-1;a<=l;a++){F j=i.1N(a);t+=(j.2f(\':M\'))?j[o.d[\'2w\']](J):0;8(t>o.3U){H x}x++;8(x==l+1){H x}8(a==l){a=-1}}}D 5I(i,o,s,l){F v=32(i,o,s);8(!o.1U){8(s+v>l){v=l-s}}H v}D 3W(i,o,s){H 68(i,o.E.1t,o.E.U.4t,s,o.1U)}D 6Z(i,o,s,m){H 68(i,o.E.1t,m+1,s,o.1U)-1}D 68(i,f,m,s,c){F t=0,x=0;1j(F a=s,l=i.S-1;a<=l;a++){x++;8(x>=l){H x}F j=i.1N(a);8(j.2f(f)){t++;8(t==m){H x}}8(a==l){a=-1}}}D 3I(i,o){H i.19(0,o.E.M)}D 6V(i,o,n){H i.19(n,o.E.U.20+n)}D 6W(i,o){H i.19(0,o.E.M)}D 71(i,o){H i.19(0,o.E.U.20)}D 72(i,o,n){H i.19(n,o.E.M+n)}D 4x(i,o,d){8(o.1R){8(!1p(d)){d=\'2a\'}i.1W(D(){F j=$(1l),m=4k(j.Z(o.d[\'1S\']),10);8(!Y(m)){m=0}j.1q(d,m)})}}D 1Y(i,o,m){8(o.1R){F x=(1k(m))?m:L;8(!Y(m)){m=0}4x(i,o,\'7z\');i.1W(D(){F j=$(1l);j.Z(o.d[\'1S\'],((x)?j.1q(\'7z\'):m+j.1q(\'2a\')))})}}D 41(i){i.1W(D(){F j=$(1l);j.1q(\'7A\',j.7B(\'7C\')||\'\')})}D 4U(i){i.1W(D(){F j=$(1l);j.7B(\'7C\',j.1q(\'7A\')||\'\')})}D 5r(o,b){F c=o.E.M,7D=o.E[o.d[\'P\']],69=o[o.d[\'1e\']],7E=3V(69);b.1W(D(){F a=$(1l),6a=7D-7F(a,o,\'8Z\');a[o.d[\'P\']](6a);8(7E){a[o.d[\'1e\']](4s(6a,69))}})}D 4Q(a,o){F b=a.36(),$i=a.13(),$v=3I($i,o),54=4I(4J($v,o,J),o,L);b.Z(54);8(o.1R){F p=o.1i,r=p[o.d[1]];8(o.1B&&r<0){r=0}F c=$v.2P();c.Z(o.d[\'1S\'],c.1q(\'2a\')+r);a.Z(o.d[\'3q\'],p[o.d[0]]);a.Z(o.d[\'1m\'],p[o.d[3]])}a.Z(o.d[\'P\'],54[o.d[\'P\']]+(2R($i,o,\'P\')*2));a.Z(o.d[\'1e\'],6b($i,o,\'1e\'));H 54}D 4J(i,o,a){H[2R(i,o,\'P\',a),6b(i,o,\'1e\',a)]}D 6b(i,o,a,b){8(!1k(b)){b=L}8(Y(o[o.d[a]])&&b){H o[o.d[a]]}8(Y(o.E[o.d[a]])){H o.E[o.d[a]]}a=(a.6c().3R(\'P\')>-1)?\'2w\':\'3n\';H 4n(i,o,a)}D 4n(i,o,b){F s=0;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);F m=(j.2f(\':M\'))?j[o.d[b]](J):0;8(s<m){s=m}}H s}D 2R(i,o,b,c){8(!1k(c)){c=L}8(Y(o[o.d[b]])&&c){H o[o.d[b]]}8(Y(o.E[o.d[b]])){H o.E[o.d[b]]*i.S}F d=(b.6c().3R(\'P\')>-1)?\'2w\':\'3n\',s=0;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);s+=(j.2f(\':M\'))?j[o.d[d]](J):0}H s}D 5d(a,o,d){F b=a.2f(\':M\');8(b){a.4j()}F s=a.36()[o.d[d]]();8(b){a.4m()}H s}D 5e(o,a){H(Y(o[o.d[\'P\']]))?o[o.d[\'P\']]:a}D 6d(i,o,b){F s=L,v=L;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);F c=(j.2f(\':M\'))?j[o.d[b]](J):0;8(s===L){s=c}O 8(s!=c){v=J}8(s==0){v=J}}H v}D 7F(i,o,d){H i[o.d[\'90\'+d]](J)-i[o.d[d.6c()]]()}D 4s(s,o){8(3V(o)){o=4k(o.19(0,-1),10);8(!Y(o)){H s}s*=o/2I}H s}D I(n,c,a,b,d){8(!1k(a)){a=J}8(!1k(b)){b=J}8(!1k(d)){d=L}8(a){n=c.3y.45+n}8(b){n=n+\'.\'+c.3y.7r}8(b&&d){n+=c.3T}H n}D 2y(n,c){H(1p(c.63[n]))?c.63[n]:n}D 4I(a,o,p){8(!1k(p)){p=J}F b=(o.1R&&p)?o.1i:[0,0,0,0];F c={};c[o.d[\'P\']]=a[0]+b[1]+b[3];c[o.d[\'1e\']]=a[1]+b[0]+b[2];H c}D 3e(c,d){F e=[];1j(F a=0,7G=c.S;a<7G;a++){1j(F b=0,7H=d.S;b<7H;b++){8(d[b].3R(2X c[a])>-1&&1z(e[b])){e[b]=c[a];17}}}H e}D 6x(p){8(1z(p)){H[0,0,0,0]}8(Y(p)){H[p,p,p,p]}8(1p(p)){p=p.3Q(\'91\').7I(\'\').3Q(\'92\').7I(\'\').3Q(\' \')}8(!2V(p)){H[0,0,0,0]}1j(F i=0;i<4;i++){p[i]=4k(p[i],10)}1F(p.S){R 0:H[0,0,0,0];R 1:H[p[0],p[0],p[0],p[0]];R 2:H[p[0],p[1],p[0],p[1]];R 3:H[p[0],p[1],p[2],p[1]];2J:H[p[0],p[1],p[2],p[3]]}}D 4H(a,o){F x=(Y(o[o.d[\'P\']]))?1H.2z(o[o.d[\'P\']]-2R(a,o,\'P\')):0;1F(o.1B){R\'1m\':H[0,x];R\'35\':H[x,0];R\'5f\':2J:H[1H.2z(x/2),1H.4l(x/2)]}}D 6r(o){F a=[[\'P\',\'7J\',\'2w\',\'1e\',\'7K\',\'3n\',\'1m\',\'3q\',\'1S\',0,1,2,3],[\'1e\',\'7K\',\'3n\',\'P\',\'7J\',\'2w\',\'3q\',\'1m\',\'5p\',3,2,1,0]];F b=a[0].S,7L=(o.2l==\'35\'||o.2l==\'1m\')?0:1;F c={};1j(F d=0;d<b;d++){c[a[0][d]]=a[7L][d]}H c}D 4E(x,o,a,b){F v=x;8(1o(a)){v=a.1h(b,v)}O 8(1p(a)){F p=a.3Q(\'+\'),m=a.3Q(\'-\');8(m.S>p.S){F c=J,6e=m[0],30=m[1]}O{F c=L,6e=p[0],30=p[1]}1F(6e){R\'93\':v=(x%2==1)?x-1:x;17;R\'94\':v=(x%2==0)?x-1:x;17;2J:v=x;17}30=4k(30,10);8(Y(30)){8(c){30=-30}v+=30}}8(!Y(v)||v<1){v=1}H v}D 2x(x,o,a,b){H 6f(4E(x,o,a,b),o.E.U)}D 6f(v,i){8(Y(i.34)&&v<i.34){v=i.34}8(Y(i.1X)&&v>i.1X){v=i.1X}8(v<1){v=1}H v}D 5k(s){8(!2V(s)){s=[[s]]}8(!2V(s[0])){s=[s]}1j(F j=0,l=s.S;j<l;j++){8(1p(s[j][0])){s[j][0]=$(s[j][0])}8(!1k(s[j][1])){s[j][1]=J}8(!1k(s[j][2])){s[j][2]=J}8(!Y(s[j][3])){s[j][3]=0}}H s}D 65(k){8(k==\'35\'){H 39}8(k==\'1m\'){H 37}8(k==\'5c\'){H 38}8(k==\'7h\'){H 40}H-1}D 5H(n,a,c){8(n){F v=a.1P(I(\'4p\',c));$.1s.1v.25.64(n,v)}}D 7m(n){F c=$.1s.1v.25.3F(n);H(c==\'\')?0:c}D 6E(a,b){F c={};1j(F p=0,l=b.S;p<l;p++){c[b[p]]=a.Z(b[p])}H c}D 6s(a,b,c,d){8(!1T(a.U)){a.U={}}8(!1T(a.3M)){a.3M={}}8(a.3m==0&&Y(d)){a.3m=d}8(1T(a.M)){a.U.34=a.M.34;a.U.1X=a.M.1X;a.M=L}O 8(1p(a.M)){8(a.M==\'1d\'){a.U.1d=J}O{a.U.2c=a.M}a.M=L}O 8(1o(a.M)){a.U.2c=a.M;a.M=L}8(!1p(a.1t)){a.1t=(c.1t(\':3t\').S>0)?\':M\':\'*\'}8(!a[b.d[\'P\']]){8(b.2H){18(J,\'7M a \'+b.d[\'P\']+\' 1j 75 E!\');a[b.d[\'P\']]=4n(c,b,\'2w\')}O{a[b.d[\'P\']]=(6d(c,b,\'2w\'))?\'1d\':c[b.d[\'2w\']](J)}}8(!a[b.d[\'1e\']]){a[b.d[\'1e\']]=(6d(c,b,\'3n\'))?\'1d\':c[b.d[\'3n\']](J)}a.3M.P=a.P;a.3M.1e=a.1e;H a}D 6w(a,b){8(a.E[a.d[\'P\']]==\'1d\'){a.E.U.1d=J}8(!a.E.U.1d){8(Y(a[a.d[\'P\']])){a.E.M=1H.4l(a[a.d[\'P\']]/a.E[a.d[\'P\']])}O{a.E.M=1H.4l(b/a.E[a.d[\'P\']]);a[a.d[\'P\']]=a.E.M*a.E[a.d[\'P\']];8(!a.E.U.2c){a.1B=L}}8(a.E.M==\'95\'||a.E.M<1){18(J,\'2p a 5K 28 4f M E: 7M 46 "1d".\');a.E.U.1d=J}}H a}D 6t(a,b,c){8(a==\'N\'){a=4n(c,b,\'2w\')}H a}D 6u(a,b,c){8(a==\'N\'){a=4n(c,b,\'3n\')}8(!a){a=b.E[b.d[\'1e\']]}H a}D 5i(o,a){F p=4H(3I(a,o),o);o.1i[o.d[1]]=p[1];o.1i[o.d[3]]=p[0];H o}D 5g(o,a,b){F c=6f(1H.2z(o[o.d[\'P\']]/o.E[o.d[\'P\']]),o.E.U);8(c>a.S){c=a.S}F d=1H.4l(o[o.d[\'P\']]/c);o.E.M=c;o.E[o.d[\'P\']]=d;o[o.d[\'P\']]=c*d;H o}D 3N(p){8(1p(p)){F i=(p.3R(\'96\')>-1)?J:L,r=(p.3R(\'3g\')>-1)?J:L}O{F i=r=L}H[i,r]}D 97(a){H(Y(a))?a:3O}D 6g(a){H(a===3O)}D 1z(a){H(6g(a)||2X a==\'7N\'||a===\'\'||a===\'7N\')}D 2V(a){H(a 2W 98)}D 2v(a){H(a 2W 7O)}D 1T(a){H((a 2W 99||2X a==\'2A\')&&!6g(a)&&!2v(a)&&!2V(a))}D Y(a){H((a 2W 4e||2X a==\'28\')&&!9a(a))}D 1p(a){H((a 2W 9b||2X a==\'2M\')&&!1z(a)&&!3p(a)&&!53(a))}D 1o(a){H(a 2W 9c||2X a==\'D\')}D 1k(a){H(a 2W 9d||2X a==\'3d\'||3p(a)||53(a))}D 3p(a){H(a===J||a===\'J\')}D 53(a){H(a===L||a===\'L\')}D 3V(x){H(1p(x)&&x.19(-1)==\'%\')}D 2o(){H 7v 7w().2o()}D 3X(o,n){18(J,o+\' 2f 9e, 9f 1j 9g 9h 9i 9j. 9k \'+n+\' 9l.\')}D 18(d,m){8(!1z(3l.6h)&&!1z(3l.6h.7P)){8(1T(d)){F s=\' (\'+d.4o+\')\';d=d.18}O{F s=\'\'}8(!d){H L}8(1p(m)){m=\'1v\'+s+\': \'+m}O{m=[\'1v\'+s+\':\',m]}3l.6h.7P(m)}H L}$.1L($.2u,{\'9m\':D(t){F a=t*t;H t*(-a*t+4*a-6*t+4)},\'9n\':D(t){H t*(4*t*t-9*t+6)},\'9o\':D(t){F a=t*t;H t*(33*a*a-9p*a*t+9q*a-67*t+15)}})})(7O);', 62, 585, '|||||||opts|if|||||||||||||||||||||||||||||||function|items|var|conf|return|cf_e|true|itms|false|visible|auto|else|width|total|case|length|trigger|visibleConf|scrl|button|first|is_number|css||bind|tt0|children|prev||next|break|debug|slice|anims|pagination|push|variable|height|progress|stopPropagation|call|padding|for|is_boolean|this|left|wrp|is_function|is_string|data|swipe|fn|filter|tmrs|carouFredSel|fade|_onafter|_moveitems|is_undefined|container|align|_s_paddingold|_s_paddingcur|opacity|switch|play|Math|cover|_position|scroll|extend|duration|eq|_a_wrapper|triggerHandler|mousewheel|usePadding|marginRight|is_object|circular|fx|each|max|sz_resetMargin|i_cur_l|old|i_old_l|uncover|unbind||cookie|isScrolling|isPaused|number|a_cfs|_cfs_origCssMargin|clbk|adjust|isStopped|stopImmediatePropagation|is|queu|while|i_new|w_siz|nr|direction|avail_primary|synchronise|getTime|Not|bar|i_new_l|a_cur|remove|easing|is_jquery|outerWidth|cf_getItemsAdjust|cf_c|ceil|object|pR|_s_paddingnew|preventDefault|a_itm|pauseOnHover|options|responsive|100|default|timeoutDuration|startTime|string|removeClass|queue|last|i_skp|ms_getTotalSize|a_old|a_lef|a_dur|is_array|instanceof|typeof|key|transition|adj|opts_orig|gn_getVisibleItemsNext||min|right|parent||||addClass|pause|perc|boolean|cf_sortParams|scrolling|resume|onAfter|i_old|crossfade|slideTo|window|start|outerHeight|_cfs_triggerEvent|is_true|top|position|wrapper|hidden|sc_clearTimers|timePassed|Carousel|sc_startScroll|events|infinite|nv_enableNavi|i_siz|i_siz_vis|_a_paddingold|_a_paddingcur|get|onBefore|updatePageStatus|gi_getCurrentItems|gn_getItemIndex|anchorBuilder|event|sizesConf|bt_pauseOnHoverConfig|null|ns2|split|indexOf|go_getObject|serialNumber|maxDimension|is_percentage|gn_getVisibleItemsNextFilter|deprecated|orgCSS|zIndex||sz_storeOrigCss|none|sc_stopScroll|dur2|prefix|to|appendTo|sc_setScroll||sc_fireCallbacks|currentPage|end|before|Number|of|document|onTouch|onResize|hide|parseInt|floor|show|ms_getTrueLargestSize|selector|currentPosition|destroy|primarySizePercentage|ms_getPercentage|org|onTimeoutStart|onTimeoutPause|onTimeoutEnd|sz_storeMargin|stopped|pre|post|updater|minimum|gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|cf_getAlignPadding|cf_mapWrapperSizes|ms_getSizes|a_wsz|a_new|not|a_cfs_vis|updateSizes|eval|sz_setSizes|pgs|deviation|nv_showNavi|sz_restoreOrigCss|mouseenter|mouseleave|pauseOnEvent|keys|throttle||di|go_getNaviObject|is_false|sz|element|starting_position|_cfs_isCarousel||_cfs_init|go_getPrevNextObject|defaults|up|ms_getParentSize|ms_getMaxDimension|center|in_getResponsiveValues|bottom|in_getAlignPadding|go_complementPrevNextObject|cf_getSynchArr|onPauseStart|onPausePause|onPauseEnd|pauseDuration|marginBottom|newPosition|sz_setResponsiveSizes|_cfs_unbind_events|finish|interval|type|conditions|gn_getVisibleOrg|backward|sc_hideHiddenItems|a_lef_vis|sc_getDuration|_a_paddingnew|sc_showHiddenItems|sc_mapCallbackArguments|sc_afterScroll|sc_fireQueue|cf_setCookie|gn_getVisibleItemsNextTestCircular|slideToPage|valid|linkAnchors|value|_cfs_bind_buttons|click|_cfs_unbind_buttons|scrolled|onMouse|swP|swN|delay|pauseOnResize|debounce|onWindowResize|_windowHeight|nh||ns3|continue|classnames|set|cf_getKeyCode|gn_getItemsPrevFilter||gn_getItemsNextFilter|seco|nw|ms_getLargestSize|toLowerCase|ms_hasVariableSizes|sta|cf_getItemAdjustMinMax|is_null|console|caroufredsel|No|found|go_getItemsObject|go_getScrollObject|go_getAutoObject|go_getPaginationObject|go_getSwipeObject|go_getMousewheelObject|cf_getDimensions|in_complementItems|in_complementPrimarySize|in_complementSecondarySize|upDateOnWindowResize|in_complementVisibleItems|cf_getPadding|500|go_complementAutoObject|go_complementPaginationObject|go_complementSwipeObject|go_complementMousewheelObject|_cfs_build|in_mapCss|textAlign|float|marginTop|marginLeft|absolute|_cfs_origCssZindex|_cfs_bind_events|stop|paused|enough|needed|page|slide_|configuration|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|gn_getScrollItemsNextFilter|forward|gi_getOldItemsNext|gi_getNewItemsNext|jumpToStart|after|the|append|removeItem|round|hash|index|selected|gn_getVisibleItemsPrevFilter|Item|keyup|keyCode|scN|down|cursor|mcN|configs|classname|cf_getCookie|random|itm|onCreate|swing|namespace|pageAnchorBuilder|span|progressbarUpdater|new|Date|_cfs_isHidden|triggerOnTouchEnd|_cfs_tempCssMargin|_cfs_origCss|attr|style|newS|secp|ms_getPaddingBorderMargin|l1|l2|join|innerWidth|innerHeight|dx|Set|undefined|jQuery|log|caroufredsel_cookie_|relative|fixed|overflow|setInterval|setTimeout|or|Callback|returned|Page|resumed|currently|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|Correct|insert|Appending|item|add|detach|currentVisible|body|find|Preventing|non|sliding|replaceWith|widths|heights|automatically|ontouchstart|in|swipeUp|swipeDown|swipeLeft|swipeRight|move|200|300|resize|wrap|class|animate|unshift|location|cfs|div|caroufredsel_wrapper|href|charAt|setTime|1000|expires|toGMTString|path|ease|orgDuration|shift|clearTimeout|clearInterval|skipped|Hiding|navigation|disabled|2500|Width|outer|px|em|even|odd|Infinity|immediate|bt_mousesheelNumber|Array|Object|isNaN|String|Function|Boolean|DEPRECATED|support|it|will|be|removed|Use|instead|quadratic|cubic|elastic|106|126'.split('|'), 0, {}))
/*!
Jssor Slider (MIT license)
*/
/* eslint-disable */
! function (i, h, m, f, d, k, e) {
  new(function () {});
  var c = {
      E: m.PI,
      m: m.max,
      k: m.min,
      K: m.ceil,
      P: m.floor,
      F: m.abs,
      sb: m.sin,
      dc: m.cos,
      Ee: m.tan,
      yf: m.atan,
      Yb: m.sqrt,
      q: m.pow,
      ke: m.random,
      $Round: m.round
    },
    g = i.$Jease$ = {
      $Swing: function (a) {
        return -c.dc(a * c.E) / 2 + .5
      },
      $Linear: function (a) {
        return a
      },
      $InQuad: function (a) {
        return a * a
      },
      $OutQuad: function (a) {
        return -a * (a - 2)
      },
      $InOutQuad: function (a) {
        return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
      },
      $InCubic: function (a) {
        return a * a * a
      },
      $OutCubic: function (a) {
        return (a -= 1) * a * a + 1
      },
      $InOutCubic: function (a) {
        return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
      },
      $InQuart: function (a) {
        return a * a * a * a
      },
      $OutQuart: function (a) {
        return -((a -= 1) * a * a * a - 1)
      },
      $InOutQuart: function (a) {
        return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
      },
      $InQuint: function (a) {
        return a * a * a * a * a
      },
      $OutQuint: function (a) {
        return (a -= 1) * a * a * a * a + 1
      },
      $InOutQuint: function (a) {
        return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
      },
      $InSine: function (a) {
        return 1 - c.dc(c.E / 2 * a)
      },
      $OutSine: function (a) {
        return c.sb(c.E / 2 * a)
      },
      $InOutSine: function (a) {
        return -1 / 2 * (c.dc(c.E * a) - 1)
      },
      $InExpo: function (a) {
        return a == 0 ? 0 : c.q(2, 10 * (a - 1))
      },
      $OutExpo: function (a) {
        return a == 1 ? 1 : -c.q(2, -10 * a) + 1
      },
      $InOutExpo: function (a) {
        return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.q(2, 10 * (a - 1)) : 1 / 2 * (-c.q(2, -10 * --a) + 2)
      },
      $InCirc: function (a) {
        return -(c.Yb(1 - a * a) - 1)
      },
      $OutCirc: function (a) {
        return c.Yb(1 - (a -= 1) * a)
      },
      $InOutCirc: function (a) {
        return (a *= 2) < 1 ? -1 / 2 * (c.Yb(1 - a * a) - 1) : 1 / 2 * (c.Yb(1 - (a -= 2) * a) + 1)
      },
      $InElastic: function (a) {
        if (!a || a == 1) return a;
        var b = .3,
          d = .075;
        return -(c.q(2, 10 * (a -= 1)) * c.sb((a - d) * 2 * c.E / b))
      },
      $OutElastic: function (a) {
        if (!a || a == 1) return a;
        var b = .3,
          d = .075;
        return c.q(2, -10 * a) * c.sb((a - d) * 2 * c.E / b) + 1
      },
      $InOutElastic: function (a) {
        if (!a || a == 1) return a;
        var b = .45,
          d = .1125;
        return (a *= 2) < 1 ? -.5 * c.q(2, 10 * (a -= 1)) * c.sb((a - d) * 2 * c.E / b) : c.q(2, -10 * (a -= 1)) * c.sb((a - d) * 2 * c.E / b) * .5 + 1
      },
      $InBack: function (a) {
        var b = 1.70158;
        return a * a * ((b + 1) * a - b)
      },
      $OutBack: function (a) {
        var b = 1.70158;
        return (a -= 1) * a * ((b + 1) * a + b) + 1
      },
      $InOutBack: function (a) {
        var b = 1.70158;
        return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
      },
      $InBounce: function (a) {
        return 1 - g.$OutBounce(1 - a)
      },
      $OutBounce: function (a) {
        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
      },
      $InOutBounce: function (a) {
        return a < 1 / 2 ? g.$InBounce(a * 2) * .5 : g.$OutBounce(a * 2 - 1) * .5 + .5
      },
      $GoBack: function (a) {
        return 1 - c.F(2 - 1)
      },
      $InWave: function (a) {
        return 1 - c.dc(a * c.E * 2)
      },
      $OutWave: function (a) {
        return c.sb(a * c.E * 2)
      },
      $OutJump: function (a) {
        return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
      },
      $InJump: function (a) {
        return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
      },
      $Early: c.K,
      $Late: c.P
    };
  var b = i.$Jssor$ = new function () {
    var j = this,
      xb = /\S+/g,
      K = 1,
      eb = 2,
      hb = 3,
      gb = 4,
      kb = 5,
      L, r = 0,
      n = 0,
      B = 0,
      E = navigator,
      qb = E.appName,
      p = E.userAgent,
      q = parseFloat;

    function Gb() {
      if (!L) {
        L = {
          Vc: "ontouchstart" in i || "createTouch" in h
        };
        var a;
        if (E.pointerEnabled || (a = E.msPointerEnabled)) L.ie = a ? "msTouchAction" : "touchAction"
      }
      return L
    }

    function u(g) {
      if (!r) {
        r = -1;
        if (qb == "Microsoft Internet Explorer" && !!i.attachEvent && !!i.ActiveXObject) {
          var e = p.indexOf("MSIE");
          r = K;
          n = q(p.substring(e + 5, p.indexOf(";", e))); /*@cc_on@*/
        } else if (qb == "Netscape" && !!i.addEventListener) {
          var d = p.indexOf("Firefox"),
            b = p.indexOf("Safari"),
            f = p.indexOf("Chrome"),
            c = p.indexOf("AppleWebKit");
          if (d >= 0) {
            r = eb;
            n = q(p.substring(d + 8))
          } else if (b >= 0) {
            var h = p.substring(0, b).lastIndexOf("/");
            r = f >= 0 ? gb : hb;
            n = q(p.substring(h + 1, b))
          } else {
            var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(p);
            if (a) {
              r = K;
              n = q(a[1])
            }
          }
          if (c >= 0) B = q(p.substring(c + 12))
        } else {
          var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(p);
          if (a) {
            r = kb;
            n = q(a[2])
          }
        }
      }
      return g == r
    }

    function v() {
      return u(K)
    }

    function zb() {
      return u(eb)
    }

    function fb() {
      return u(hb)
    }

    function jb() {
      return u(kb)
    }

    function bb() {
      return fb() && B > 534 && B < 535
    }

    function H() {
      u();
      return B > 537 || n > 42 || r == K && n >= 11
    }

    function cb(a) {
      var b, c;
      return function (g) {
        if (!b) {
          b = d;
          var f = a.substr(0, 1).toUpperCase() + a.substr(1);
          l([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function (h, d) {
            var b = a;
            if (d) b = h + f;
            if (g.style[b] != e) return c = b
          })
        }
        return c
      }
    }

    function ab(b) {
      var a;
      return function (c) {
        a = a || cb(b)(c) || b;
        return a
      }
    }
    var M = ab("transform");

    function pb(a) {
      return {}.toString.call(a)
    }
    var mb = {};
    l(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
      mb["[object " + a + "]"] = a.toLowerCase()
    });

    function l(b, d) {
      var a, c;
      if (pb(b) == "[object Array]") {
        for (a = 0; a < b.length; a++)
          if (c = d(b[a], a, b)) return c
      } else
        for (a in b)
          if (c = d(b[a], a, b)) return c
    }

    function G(a) {
      return a == f ? String(a) : mb[pb(a)] || "object"
    }

    function nb(a) {
      for (var b in a) return d
    }

    function C(a) {
      try {
        return G(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
      } catch (b) {}
    }

    function ub(b, a) {
      setTimeout(b, a || 0)
    }

    function lb(b, d, c) {
      var a = !b || b == "inherit" ? "" : b;
      l(d, function (c) {
        var b = c.exec(a);
        if (b) {
          var d = a.substr(0, b.index),
            e = a.substr(b.index + b[0].length + 1, a.length - 1);
          a = d + e
        }
      });
      a && (c += (!a.indexOf(" ") ? "" : " ") + a);
      return c
    }

    function rb(a, b) {
      if (a === e) a = b;
      return a
    }
    j.Sc = Gb;
    j.te = v;
    j.bh = zb;
    j.Vg = fb;
    j.Xg = H;
    cb("transform");
    j.id = function () {
      return n
    };
    j.jg = function () {
      u();
      return B
    };
    j.$Delay = ub;
    j.W = rb;
    j.V = function (a, b) {
      b.call(a);
      return z({}, a)
    };

    function V(a) {
      a.constructor === V.caller && a.A && a.A.apply(a, V.caller.arguments)
    }
    j.A = V;
    j.$GetElement = function (a) {
      if (j.kg(a)) a = h.getElementById(a);
      return a
    };

    function t(a) {
      return a || i.event
    }
    j.Xf = t;
    j.$EvtSrc = function (b) {
      b = t(b);
      var a = b.target || b.srcElement || h;
      if (a.nodeType == 3) a = j.sd(a);
      return a
    };
    j.qe = function (a) {
      a = t(a);
      return a.relatedTarget || a.toElement
    };
    j.re = function (a) {
      a = t(a);
      return a.which || ([0, 1, 3, 0, 2])[a.button] || a.charCode || a.keyCode
    };
    j.jd = function (a) {
      a = t(a);
      return {
        x: a.clientX || 0,
        y: a.clientY || 0
      }
    };
    j.Yf = function (b, a) {
      return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
    };
    j.oe = function (c, e) {
      var a = b.Ig(e),
        d = b.jd(c);
      return j.Yf(d, a)
    };

    function w(c, d, a) {
      if (a !== e) c.style[d] = a == e ? "" : a;
      else {
        var b = c.currentStyle || c.style;
        a = b[d];
        if (a == "" && i.getComputedStyle) {
          b = c.ownerDocument.defaultView.getComputedStyle(c, f);
          b && (a = b.getPropertyValue(d) || b[d])
        }
        return a
      }
    }

    function Y(b, c, a, d) {
      if (a === e) {
        a = q(w(b, c));
        isNaN(a) && (a = f);
        return a
      }
      if (a == f) a = "";
      else d && (a += "px");
      w(b, c, a)
    }

    function m(c, a) {
      var d = a ? Y : w,
        b;
      if (a & 4) b = ab(c);
      return function (e, f) {
        return d(e, b ? b(e) : c, f, a & 2)
      }
    }

    function Bb(a) {
      return q(a.style.opacity || "1")
    }

    function Db(b, a) {
      b.style.opacity = a == 1 ? "" : c.$Round(a * 100) / 100
    }
    var O = {
      $Rotate: ["rotate"],
      $RotateX: ["rotateX"],
      $RotateY: ["rotateY"],
      $SkewX: ["skewX"],
      $SkewY: ["skewY"]
    };
    if (!H()) O = z(O, {
      $ScaleX: ["scaleX", 2],
      $ScaleY: ["scaleY", 2],
      $TranslateZ: ["translateZ", 1]
    });

    function N(c, a) {
      var b = "";
      if (a) {
        if (v() && n && n < 10) {
          delete a.$RotateX;
          delete a.$RotateY;
          delete a.$TranslateZ
        }
        l(a, function (d, c) {
          var a = O[c];
          if (a) {
            var e = a[1] || 0;
            if (P[c] != d) b += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
          }
        });
        if (H()) {
          if (a.$TranslateX || a.$TranslateY || a.$TranslateZ != e) b += " translate3d(" + (a.$TranslateX || 0) + "px," + (a.$TranslateY || 0) + "px," + (a.$TranslateZ || 0) + "px)";
          if (a.$ScaleX == e) a.$ScaleX = 1;
          if (a.$ScaleY == e) a.$ScaleY = 1;
          if (a.$ScaleX != 1 || a.$ScaleY != 1) b += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)"
        }
      }
      c.style[M(c)] = b
    }
    j.Zf = m("transformOrigin", 4);
    j.dg = m("backfaceVisibility", 4);
    m("transformStyle", 4);
    j.bg = m("perspective", 6);
    j.xg = m("perspectiveOrigin", 4);
    j.yg = function (b, a) {
      if (v() && n < 9) b.style.zoom = a == 1 ? "" : a;
      else {
        var c = M(b),
          f = a == 1 ? "" : "scale(" + a + ")",
          e = b.style[c],
          g = new RegExp(/[\s]*scale\(.*?\)/g),
          d = lb(e, [g], f);
        b.style[c] = d
      }
    };
    j.$AddEvent = function (a, c, d, b) {
      a = j.$GetElement(a);
      if (a.addEventListener) {
        c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
        a.addEventListener(c, d, b)
      } else if (a.attachEvent) {
        a.attachEvent("on" + c, d);
        b && a.setCapture && a.setCapture()
      }
    };
    j.$RemoveEvent = function (a, c, d, b) {
      a = j.$GetElement(a);
      if (a.removeEventListener) {
        c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
        a.removeEventListener(c, d, b)
      } else if (a.detachEvent) {
        a.detachEvent("on" + c, d);
        b && a.releaseCapture && a.releaseCapture()
      }
    };
    j.$CancelEvent = function (a) {
      a = t(a);
      a.preventDefault && a.preventDefault();
      a.cancel = d;
      a.returnValue = k
    };
    j.$StopEvent = function (a) {
      a = t(a);
      a.stopPropagation && a.stopPropagation();
      a.cancelBubble = d
    };
    j.S = function (d, c) {
      var a = [].slice.call(arguments, 2),
        b = function () {
          var b = a.concat([].slice.call(arguments, 0));
          return c.apply(d, b)
        };
      return b
    };
    j.Ag = function (a, b) {
      if (b == e) return a.textContent || a.innerText;
      var c = h.createTextNode(b);
      j.Xb(a);
      a.appendChild(c)
    };
    j.Ig = function (b) {
      var a = b.getBoundingClientRect();
      return {
        x: a.left,
        y: a.top,
        w: a.right - a.left,
        h: a.bottom - a.top
      }
    };
    j.Eb = function (d, c) {
      for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
      return b
    };

    function ob(a, c, e, b) {
      b = b || "u";
      for (a = a ? a.firstChild : f; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          if (D(a, b) == c) return a;
          if (!e) {
            var d = ob(a, c, e, b);
            if (d) return d
          }
        }
    }
    j.$FindChild = ob;

    function T(a, d, g, b) {
      b = b || "u";
      var c = [];
      for (a = a ? a.firstChild : f; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          D(a, b) == d && c.push(a);
          if (!g) {
            var e = T(a, d, g, b);
            if (e.length) c = c.concat(e)
          }
        }
      return c
    }
    j.qg = function (b, a) {
      return b.getElementsByTagName(a)
    };
    j.tb = function (a, f, d, g) {
      d = d || "u";
      var e;
      do {
        if (a.nodeType == 1) {
          var c;
          d && (c = D(a, d));
          if (c && c == rb(f, c) || g == a.tagName) {
            e = a;
            break
          }
        }
        a = b.sd(a)
      } while (a && a != h.body);
      return e
    };
    j.ug = function (a) {
      return X(["INPUT", "TEXTAREA", "SELECT"])[a.tagName]
    };

    function z() {
      var f = arguments,
        d, c, b, a, h = 1 & f[0],
        g = 1 + h;
      d = f[g - 1] || {};
      for (; g < f.length; g++)
        if (c = f[g])
          for (b in c) {
            a = c[b];
            if (a !== e) {
              a = c[b];
              var i = d[b];
              d[b] = h && (C(i) || C(a)) ? z(h, {}, i, a) : a
            }
          }
      return d
    }
    j.G = z;

    function W(f, g) {
      var d = {},
        c, a, b;
      for (c in f) {
        a = f[c];
        b = g[c];
        if (a !== b) {
          var e;
          if (C(a) && C(b)) {
            a = W(a, b);
            e = !nb(a)
          }!e && (d[c] = a)
        }
      }
      return d
    }
    j.me = function (a) {
      return G(a) == "function"
    };
    j.ne = function (a) {
      return G(a) == "array"
    };
    j.kg = function (a) {
      return G(a) == "string"
    };
    j.oc = function (a) {
      return !isNaN(q(a)) && isFinite(a)
    };
    j.c = l;
    j.Ae = C;

    function R(a) {
      return h.createElement(a)
    }
    j.Tb = function () {
      return R("DIV")
    };
    j.Cg = function () {
      return R("SPAN")
    };
    j.Vf = function () {};

    function F(b, c, a) {
      if (a == e) return b.getAttribute(c);
      b.setAttribute(c, a)
    }

    function D(a, b) {
      return F(a, b) || F(a, "data-" + b)
    }
    j.z = F;
    j.X = D;
    j.B = function (d, b, c) {
      var a = j.Ce(D(d, b));
      if (isNaN(a)) a = c;
      return a
    };

    function x(b, a) {
      return F(b, "class", a) || ""
    }

    function X(b) {
      var a = {};
      l(b, function (b) {
        if (b != e) a[b] = b
      });
      return a
    }

    function vb(b, a) {
      return b.match(a || xb)
    }

    function Q(b, a) {
      return X(vb(b || "", a))
    }
    j.ye = X;
    j.Tg = vb;
    j.Me = function (a) {
      a && (a = a.toLowerCase());
      return a
    };

    function Z(b, c) {
      var a = "";
      l(c, function (c) {
        a && (a += b);
        a += c
      });
      return a
    }

    function I(a, c, b) {
      x(a, Z(" ", z(W(Q(x(a)), Q(c)), Q(b))))
    }
    j.Be = Z;
    j.sd = function (a) {
      return a.parentNode
    };
    j.Cb = function (a) {
      j.Bb(a, "none")
    };
    j.eb = function (a, b) {
      j.Bb(a, b ? "none" : "")
    };
    j.Gg = function (b, a) {
      b.removeAttribute(a)
    };
    j.Lg = function (d, a) {
      if (a) d.style.clip = "rect(" + c.$Round(a.$Top || a.J || 0) + "px " + c.$Round(a.$Right) + "px " + c.$Round(a.$Bottom) + "px " + c.$Round(a.$Left || a.N || 0) + "px)";
      else if (a !== e) {
        var h = d.style.cssText,
          g = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
          f = lb(h, g, "");
        b.zd(d, f)
      }
    };
    j.ig = function (b, a) {
      if (a) b.style.backgroundColor = "rgba(" + c.$Round(a.xd) + "," + c.$Round(a.wd) + "," + c.$Round(a.Bd) + "," + a.$Opacity + ")"
    };
    j.Ab = function () {
      return +new Date
    };
    j.bb = function (b, a) {
      b.appendChild(a)
    };
    j.sg = function (b, a) {
      l(a, function (a) {
        j.bb(b, a)
      })
    };
    j.Ib = function (b, a, c) {
      (c || a.parentNode).insertBefore(b, a)
    };
    j.rg = function (b, a, c) {
      b.insertAdjacentHTML(a, c)
    };
    j.nb = function (b, a) {
      a = a || b.parentNode;
      a && a.removeChild(b)
    };
    j.tg = function (a, b) {
      l(a, function (a) {
        j.nb(a, b)
      })
    };
    j.Xb = function (a) {
      j.tg(j.Eb(a, d), a)
    };

    function sb() {
      l([].slice.call(arguments, 0), function (a) {
        if (j.ne(a)) sb.apply(f, a);
        else a && a.$Destroy()
      })
    }
    j.$Destroy = sb;
    j.nd = function (a, b) {
      var c = j.sd(a);
      if (b & 1) {
        j.Q(a, (j.C(c) - j.C(a)) / 2);
        j.Xd(a, f)
      }
      if (b & 2) {
        j.ab(a, (j.D(c) - j.D(a)) / 2);
        j.Vd(a, f)
      }
    };
    var S = {
      $Top: f,
      $Right: f,
      $Bottom: f,
      $Left: f,
      H: f,
      I: f
    };
    j.wg = function (a) {
      var b = j.Tb();
      s(b, {
        Sd: "block",
        Ob: j.rb(a),
        $Top: 0,
        $Left: 0,
        H: 0,
        I: 0
      });
      var d = j.Ud(a, S);
      j.Ib(b, a);
      j.bb(b, a);
      var e = j.Ud(a, S),
        c = {};
      l(d, function (b, a) {
        if (b == e[a]) c[a] = b
      });
      s(b, S);
      s(b, c);
      s(a, {
        $Top: 0,
        $Left: 0
      });
      return c
    };
    j.Ce = q;
    j.ve = function (b, a) {
      var c = h.body;
      while (a && b !== a && c !== a) a = a.parentNode;
      return b === a
    };

    function U(d, c, b) {
      var a = d.cloneNode(!c);
      !b && j.Gg(a, "id");
      return a
    }
    j.gb = U;
    j.Nb = function (e, f) {
      var a = new Image;

      function b(e, d) {
        j.$RemoveEvent(a, "load", b);
        j.$RemoveEvent(a, "abort", c);
        j.$RemoveEvent(a, "error", c);
        f && f(a, d)
      }

      function c(a) {
        b(a, d)
      }
      if (jb() && n < 11.6 || !e) b(!e);
      else {
        j.$AddEvent(a, "load", b);
        j.$AddEvent(a, "abort", c);
        j.$AddEvent(a, "error", c);
        a.src = e
      }
    };
    j.cg = function (d, a, e) {
      var c = d.length + 1;

      function b(b) {
        c--;
        if (a && b && b.src == a.src) a = b;
        !c && e && e(a)
      }
      l(d, function (a) {
        j.Nb(a.src, b)
      });
      b()
    };
    j.fe = function (a, g, i, h) {
      if (h) a = U(a);
      var c = T(a, g);
      if (!c.length) c = b.qg(a, g);
      for (var f = c.length - 1; f > -1; f--) {
        var d = c[f],
          e = U(i);
        x(e, x(d));
        b.zd(e, d.style.cssText);
        b.Ib(e, d);
        b.nb(d)
      }
      return a
    };

    function Eb() {
      var a = this;
      b.V(a, o);
      var d, q = "",
        s = ["av", "pv", "ds", "dn"],
        f = [],
        r, n = 0,
        k = 0,
        g = 0;

      function m() {
        I(d, r, (f[g || k & 2 || k] || "") + " " + (f[n] || ""));
        j.zc(d, g ? "none" : "")
      }

      function c() {
        n = 0;
        a.T(i, "mouseup", c);
        a.T(h, "mouseup", c);
        a.T(h, "touchend", c);
        a.T(h, "touchcancel", c);
        a.T(i, "blur", c);
        m()
      }

      function p(b) {
        if (g) j.$CancelEvent(b);
        else {
          n = 4;
          m();
          a.a(i, "mouseup", c);
          a.a(h, "mouseup", c);
          a.a(h, "touchend", c);
          a.a(h, "touchcancel", c);
          a.a(i, "blur", c)
        }
      }
      a.ae = function (a) {
        if (a === e) return k;
        k = a & 2 || a & 1;
        m()
      };
      a.$Enable = function (a) {
        if (a === e) return !g;
        g = a ? 0 : 3;
        m()
      };
      a.A = function (e) {
        a.$Elmt = d = j.$GetElement(e);
        F(d, "data-jssor-button", "1");
        var c = b.Tg(x(d));
        if (c) q = c.shift();
        l(s, function (a) {
          f.push(q + a)
        });
        r = Z(" ", f);
        f.unshift("");
        a.a(d, "mousedown", p);
        a.a(d, "touchstart", p)
      };
      b.A(a)
    }
    j.qc = function (a) {
      return new Eb(a)
    };
    j.Rb = w;
    j.Lb = m("overflow");
    j.zc = m("pointerEvents");
    j.ab = m("top", 2);
    j.Xd = m("right", 2);
    j.Vd = m("bottom", 2);
    j.Q = m("left", 2);
    j.C = m("width", 2);
    j.D = m("height", 2);
    m("marginLeft", 2);
    m("marginTop", 2);
    j.rb = m("position");
    j.Bb = m("display");
    j.Y = m("zIndex", 1);
    j.hg = function (b, a, c) {
      if (a != e) Db(b, a, c);
      else return Bb(b)
    };
    j.zd = function (a, b) {
      if (b != e) a.style.cssText = b;
      else return a.style.cssText
    };
    j.gg = function (b, a) {
      if (a === e) {
        a = w(b, "backgroundImage") || "";
        var c = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a) || [];
        return c[1]
      }
      w(b, "backgroundImage", a ? "url('" + a + "')" : "")
    };
    var J;
    j.Eg = J = {
      $Opacity: j.hg,
      $Top: j.ab,
      $Right: j.Xd,
      $Bottom: j.Vd,
      $Left: j.Q,
      H: j.C,
      I: j.D,
      Ob: j.rb,
      Sd: j.Bb,
      $ZIndex: j.Y
    };
    j.Ud = function (c, b) {
      var a = {};
      l(b, function (d, b) {
        if (J[b]) a[b] = J[b](c)
      });
      return a
    };

    function s(b, i) {
      var a = H(),
        g = bb(),
        h = M(b);

      function d(l, a) {
        a = a || {};
        var g = a.$TranslateZ || 0,
          i = (a.$RotateX || 0) % 360,
          j = (a.$RotateY || 0) % 360,
          k = (a.$Rotate || 0) % 360,
          c = a.$ScaleX,
          d = a.$ScaleY,
          f = a.Mh;
        if (c == e) c = 1;
        if (d == e) d = 1;
        if (f == e) f = 1;
        var b = new Ab(a.$TranslateX, a.$TranslateY, g);
        b.$Scale(c, d, f);
        b.Zg(a.$SkewX, a.$SkewY);
        b.$RotateX(i);
        b.$RotateY(j);
        b.Yg(k);
        b.$Move(a.N, a.J);
        l.style[h] = b.ah()
      }
      s = function (c, b) {
        b = b || {};
        var i = b.N,
          k = b.J,
          h;
        l(J, function (a, d) {
          h = b[d];
          h !== e && a(c, h)
        });
        j.Lg(c, b.$Clip);
        j.ig(c, b.vb);
        if (!a) {
          i != e && j.Q(c, (b.Fd || 0) + i);
          k != e && j.ab(c, (b.Pd || 0) + k)
        }
        if (b.dh)
          if (g) ub(j.S(f, N, c, b));
          else if (a) d(c, b);
        else N(c, b)
      };
      j.Z = s;
      s(b, i)
    }
    j.fh = N;
    j.Z = s;

    function Ab(j, k, o) {
      var d = this,
        b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, o || 0, 1],
        i = c.sb,
        h = c.dc,
        l = c.Ee;

      function g(a) {
        return a * c.E / 180
      }

      function m(b, c, f, g, i, l, n, o, q, t, u, w, y, A, C, F, a, d, e, h, j, k, m, p, r, s, v, x, z, B, D, E) {
        return [b * a + c * j + f * r + g * z, b * d + c * k + f * s + g * B, b * e + c * m + f * v + g * D, b * h + c * p + f * x + g * E, i * a + l * j + n * r + o * z, i * d + l * k + n * s + o * B, i * e + l * m + n * v + o * D, i * h + l * p + n * x + o * E, q * a + t * j + u * r + w * z, q * d + t * k + u * s + w * B, q * e + t * m + u * v + w * D, q * h + t * p + u * x + w * E, y * a + A * j + C * r + F * z, y * d + A * k + C * s + F * B, y * e + A * m + C * v + F * D, y * h + A * p + C * x + F * E]
      }

      function e(c, a) {
        return m.apply(f, (a || b).concat(c))
      }
      d.$Scale = function (a, c, d) {
        if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
      };
      d.$Move = function (a, c, d) {
        b[12] += a || 0;
        b[13] += c || 0;
        b[14] += d || 0
      };
      d.$RotateX = function (c) {
        if (c) {
          a = g(c);
          var d = h(a),
            f = i(a);
          b = e([1, 0, 0, 0, 0, d, f, 0, 0, -f, d, 0, 0, 0, 0, 1])
        }
      };
      d.$RotateY = function (c) {
        if (c) {
          a = g(c);
          var d = h(a),
            f = i(a);
          b = e([d, 0, -f, 0, 0, 1, 0, 0, f, 0, d, 0, 0, 0, 0, 1])
        }
      };
      d.Yg = function (c) {
        if (c) {
          a = g(c);
          var d = h(a),
            f = i(a);
          b = e([d, f, 0, 0, -f, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        }
      };
      d.Zg = function (a, c) {
        if (a || c) {
          j = g(a);
          k = g(c);
          b = e([1, l(k), 0, 0, l(j), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        }
      };
      d.ah = function () {
        return "matrix3d(" + b.join(",") + ")"
      }
    }
    var P = {
      Fd: 0,
      Pd: 0,
      N: 0,
      J: 0,
      $Zoom: 1,
      $ScaleX: 1,
      $ScaleY: 1,
      $Rotate: 0,
      $RotateX: 0,
      $RotateY: 0,
      $TranslateX: 0,
      $TranslateY: 0,
      $TranslateZ: 0,
      $SkewX: 0,
      $SkewY: 0
    };
    j.ad = function (c, d) {
      var a = c || {};
      if (c)
        if (b.me(c)) a = {
          W: a
        };
        else if (b.me(c.$Clip)) a.$Clip = {
        W: c.$Clip
      };
      a.W = a.W || d;
      if (a.$Clip) a.$Clip.W = a.$Clip.W || d;
      if (a.vb) a.vb.W = a.vb.W || d;
      return a
    };

    function tb(c, a) {
      var b = {};
      l(c, function (c, d) {
        var f = c;
        if (a[d] != e)
          if (j.oc(c)) f = c + a[d];
          else f = tb(c, a[d]);
        b[d] = f
      });
      return b
    }
    j.Sg = tb;
    j.Ld = function (o, j, s, t, D, E, p) {
      var a = j;
      if (o) {
        a = {};
        for (var i in j) {
          var F = E[i] || 1,
            B = D[i] || [0, 1],
            h = (s - B[0]) / B[1];
          h = c.k(c.m(h, 0), 1);
          h = h * F;
          var y = c.P(h);
          if (h != y) h -= y;
          var k = t.W || g.$Linear,
            m, G = o[i],
            r = j[i];
          if (b.oc(r)) {
            k = t[i] || k;
            var C = k(h);
            m = G + r * C
          } else {
            m = z({
              kc: {}
            }, o[i]);
            var A = t[i] || {};
            l(r.kc || r, function (d, a) {
              k = A[a] || A.W || k;
              var c = k(h),
                b = d * c;
              m.kc[a] = b;
              m[a] += b
            })
          }
          a[i] = m
        }
        var x = l(j, function (b, a) {
          return P[a] != e
        });
        x && l(P, function (c, b) {
          if (a[b] == e && o[b] !== e) a[b] = o[b]
        });
        if (x) {
          if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom;
          a.$OriginalWidth = p.$OriginalWidth;
          a.$OriginalHeight = p.$OriginalHeight;
          if (v() && n >= 11 && (j.N || j.J) && s != 0 && s != 1) a.$Rotate = a.$Rotate || 1e-8;
          a.dh = d
        }
      }
      if (j.$Clip && p.$Move) {
        var q = a.$Clip.kc,
          w = (q.$Top || 0) + (q.$Bottom || 0),
          u = (q.$Left || 0) + (q.$Right || 0);
        a.$Left = (a.$Left || 0) + u;
        a.$Top = (a.$Top || 0) + w;
        a.$Clip.$Left -= u;
        a.$Clip.$Right -= u;
        a.$Clip.$Top -= w;
        a.$Clip.$Bottom -= w
      }
      if (a.$Clip && !a.$Clip.$Top && !a.$Clip.$Left && !a.$Clip.J && !a.$Clip.N && a.$Clip.$Right == p.$OriginalWidth && a.$Clip.$Bottom == p.$OriginalHeight) a.$Clip = f;
      return a
    }
  };

  function o() {
    var a = this,
      f, e = [],
      c = [];

    function k(a, b) {
      e.push({
        Kb: a,
        gc: b
      })
    }

    function j(a, c) {
      b.c(e, function (b, d) {
        b.Kb == a && b.gc === c && e.splice(d, 1)
      })
    }

    function h() {
      e = []
    }

    function g() {
      b.c(c, function (a) {
        b.$RemoveEvent(a.Nd, a.Kb, a.gc, a.Md)
      });
      c = []
    }
    a.bd = function () {
      return f
    };
    a.a = function (f, d, e, a) {
      b.$AddEvent(f, d, e, a);
      c.push({
        Nd: f,
        Kb: d,
        gc: e,
        Md: a
      })
    };
    a.T = function (f, d, e, a) {
      b.c(c, function (g, h) {
        if (g.Nd === f && g.Kb == d && g.gc === e && g.Md == a) {
          b.$RemoveEvent(f, d, e, a);
          c.splice(h, 1)
        }
      })
    };
    a.Rd = g;
    a.$On = a.addEventListener = k;
    a.$Off = a.removeEventListener = j;
    a.j = function (a) {
      var c = [].slice.call(arguments, 1);
      b.c(e, function (b) {
        b.Kb == a && b.gc.apply(i, c)
      })
    };
    a.$Destroy = function () {
      if (!f) {
        f = d;
        g();
        h()
      }
    }
  }
  var l = function (C, F, h, m, T, O) {
    C = C || 0;
    var a = this,
      p, n, o, t, D = 0,
      Q = 1,
      M, N, L, E, B = 0,
      j = 0,
      r = 0,
      A, l, f, g, s, z, v = [],
      y, I = k,
      J, H = k;

    function U(a) {
      f += a;
      g += a;
      l += a;
      j += a;
      r += a;
      B += a
    }

    function x(x) {
      var k = x;
      if (s)
        if (!z && (k >= g || k < f) || z && k >= f) k = ((k - f) % s + s) % s + f;
      if (!A || t || j != k) {
        var i = c.k(k, g);
        i = c.m(i, f);
        if (h.$Reverse) i = g - i + f;
        if (!A || t || i != r) {
          if (O) {
            var w = (i - l) / (F || 1),
              o = b.Ld(T, O, w, M, L, N, h);
            if (y) b.c(o, function (b, a) {
              y[a] && y[a](m, b)
            });
            else b.Z(m, o);
            var n;
            if (J) {
              toDisablePointerEventsByAnimation = i > f && i < g;
              if (toDisablePointerEventsByAnimation != H) n = H = toDisablePointerEventsByAnimation
            }
            if (!n && o.$Opacity != e) {
              var p = o.$Opacity < .001;
              if (p != I) n = I = p
            }
            if (n != e) {
              n && b.zc(m, "none");
              !n && b.zc(m, b.z(m, "data-events"))
            }
          }
          var u = r,
            q = r = i;
          b.c(v, function (b, c) {
            var a = !A && z || k <= j ? v[v.length - c - 1] : b;
            a.M(i - B)
          });
          j = k;
          A = d;
          a.Tc(u - l, q - l);
          a.ec(u, q)
        }
      }
    }

    function G(a, b, d) {
      b && a.$Shift(g);
      if (!d) {
        f = c.k(f, a.mc() + B);
        g = c.m(g, a.ub() + B)
      }
      v.push(a)
    }
    var u = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || i.msRequestAnimationFrame;
    if (b.Vg() && b.id() < 7 || !u) u = function (a) {
      b.$Delay(a, h.$Interval)
    };

    function P() {
      if (p) {
        var d = b.Ab(),
          e = c.k(d - D, h.Hd),
          a = j + e * o * Q;
        D = d;
        if (a * o >= n * o) a = n;
        x(a);
        if (!t && a * o >= n * o) R(E);
        else u(P)
      }
    }

    function w(e, h, i) {
      if (!p) {
        p = d;
        t = i;
        E = h;
        e = c.m(e, f);
        e = c.k(e, g);
        n = e;
        o = n < j ? -1 : 1;
        a.pd();
        D = b.Ab();
        u(P)
      }
    }

    function R(b) {
      if (p) {
        t = p = E = k;
        a.qd();
        b && b()
      }
    }
    a.$Play = function (a, b, c) {
      w(a ? j + a : g, b, c)
    };
    a.sc = w;
    a.Se = function (a, b) {
      w(g, a, b)
    };
    a.O = R;
    a.Jd = function () {
      return j
    };
    a.Id = function () {
      return n
    };
    a.n = function () {
      return r
    };
    a.M = x;
    a.ef = function () {
      x(g, d)
    };
    a.$IsPlaying = function () {
      return p
    };
    a.Zd = function (a) {
      Q = a
    };
    a.$Shift = U;
    a.Be = G;
    a.U = function (a, b) {
      G(a, 0, b)
    };
    a.Gc = function (a) {
      G(a, 1)
    };
    a.Hc = function (a) {
      g += a
    };
    a.mc = function () {
      return f
    };
    a.ub = function () {
      return g
    };
    a.ec = a.pd = a.qd = a.Tc = b.Vf;
    a.Pc = b.Ab();
    h = b.G({
      $Interval: 16,
      Hd: 50
    }, h);
    m && (J = b.z(m, "data-inactive"));
    s = h.pc;
    z = h.Oe;
    y = h.Ne;
    f = l = C;
    g = C + F;
    N = h.$Round || {};
    L = h.$During || {};
    M = b.ad(h.$Easing)
  };
  var n = {
      Hf: "data-scale",
      yb: "data-autocenter",
      Qc: "data-nofreeze",
      Td: "data-nodrag"
    },
    q = new function () {
      var a = this;
      a.Ac = function (c, a, e, d) {
        (d || !b.z(c, a)) && b.z(c, a, e)
      };
      a.Cc = function (a) {
        var c = b.B(a, n.yb);
        b.nd(a, c)
      }
    },
    s = i.$JssorSlideshowFormations$ = new function () {
      var h = this,
        b = 0,
        a = 1,
        f = 2,
        e = 3,
        s = 1,
        r = 2,
        t = 4,
        q = 8,
        w = 256,
        x = 512,
        v = 1024,
        u = 2048,
        j = u + s,
        i = u + r,
        o = x + s,
        m = x + r,
        n = w + t,
        k = w + q,
        l = v + t,
        p = v + q;

      function y(a) {
        return (a & r) == r
      }

      function z(a) {
        return (a & t) == t
      }

      function g(b, a, c) {
        c.push(a);
        b[a] = b[a] || [];
        b[a].push(c)
      }
      h.$FormationStraight = function (f) {
        for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.Fc, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
          for (a = 0; a < d; a++) {
            switch (s) {
              case j:
                c = h - (a * e + (q - b));
                break;
              case l:
                c = h - (b * d + (p - a));
                break;
              case o:
                c = h - (a * e + b);
              case n:
                c = h - (b * d + a);
                break;
              case i:
                c = a * e + b;
                break;
              case k:
                c = b * d + (p - a);
                break;
              case m:
                c = a * e + (q - b);
                break;
              default:
                c = b * d + a
            }
            g(r, c, [b, a])
          }
        return r
      };
      h.$FormationSwirl = function (q) {
        var x = q.$Cols,
          y = q.$Rows,
          B = q.$Assembly,
          w = q.Fc,
          A = [],
          z = [],
          u = 0,
          c = 0,
          h = 0,
          r = x - 1,
          s = y - 1,
          t, p, v = 0;
        switch (B) {
          case j:
            c = r;
            h = 0;
            p = [f, a, e, b];
            break;
          case l:
            c = 0;
            h = s;
            p = [b, e, a, f];
            break;
          case o:
            c = r;
            h = s;
            p = [e, a, f, b];
            break;
          case n:
            c = r;
            h = s;
            p = [a, e, b, f];
            break;
          case i:
            c = 0;
            h = 0;
            p = [f, b, e, a];
            break;
          case k:
            c = r;
            h = 0;
            p = [a, f, b, e];
            break;
          case m:
            c = 0;
            h = s;
            p = [e, b, f, a];
            break;
          default:
            c = 0;
            h = 0;
            p = [b, f, a, e]
        }
        u = 0;
        while (u < w) {
          t = h + "," + c;
          if (c >= 0 && c < x && h >= 0 && h < y && !z[t]) {
            z[t] = d;
            g(A, u++, [h, c])
          } else switch (p[v++ % p.length]) {
            case b:
              c--;
              break;
            case f:
              h--;
              break;
            case a:
              c++;
              break;
            case e:
              h++
          }
          switch (p[v % p.length]) {
            case b:
              c++;
              break;
            case f:
              h++;
              break;
            case a:
              c--;
              break;
            case e:
              h--
          }
        }
        return A
      };
      h.$FormationZigZag = function (p) {
        var w = p.$Cols,
          x = p.$Rows,
          z = p.$Assembly,
          v = p.Fc,
          t = [],
          u = 0,
          c = 0,
          d = 0,
          q = w - 1,
          r = x - 1,
          y, h, s = 0;
        switch (z) {
          case j:
            c = q;
            d = 0;
            h = [f, a, e, a];
            break;
          case l:
            c = 0;
            d = r;
            h = [b, e, a, e];
            break;
          case o:
            c = q;
            d = r;
            h = [e, a, f, a];
            break;
          case n:
            c = q;
            d = r;
            h = [a, e, b, e];
            break;
          case i:
            c = 0;
            d = 0;
            h = [f, b, e, b];
            break;
          case k:
            c = q;
            d = 0;
            h = [a, f, b, f];
            break;
          case m:
            c = 0;
            d = r;
            h = [e, b, f, b];
            break;
          default:
            c = 0;
            d = 0;
            h = [b, f, a, f]
        }
        u = 0;
        while (u < v) {
          y = d + "," + c;
          if (c >= 0 && c < w && d >= 0 && d < x && typeof t[y] == "undefined") {
            g(t, u++, [d, c]);
            switch (h[s % h.length]) {
              case b:
                c++;
                break;
              case f:
                d++;
                break;
              case a:
                c--;
                break;
              case e:
                d--
            }
          } else {
            switch (h[s++ % h.length]) {
              case b:
                c--;
                break;
              case f:
                d--;
                break;
              case a:
                c++;
                break;
              case e:
                d++
            }
            switch (h[s++ % h.length]) {
              case b:
                c++;
                break;
              case f:
                d++;
                break;
              case a:
                c--;
                break;
              case e:
                d--
            }
          }
        }
        return t
      };
      h.$FormationStraightStairs = function (q) {
        var u = q.$Cols,
          v = q.$Rows,
          e = q.$Assembly,
          t = q.Fc,
          r = [],
          s = 0,
          c = 0,
          d = 0,
          f = u - 1,
          h = v - 1,
          x = t - 1;
        switch (e) {
          case j:
          case m:
          case o:
          case i:
            var a = 0,
              b = 0;
            break;
          case k:
          case l:
          case n:
          case p:
            var a = f,
              b = 0;
            break;
          default:
            e = p;
            var a = f,
              b = 0
        }
        c = a;
        d = b;
        while (s < t) {
          if (z(e) || y(e)) g(r, x - s++, [d, c]);
          else g(r, s++, [d, c]);
          switch (e) {
            case j:
            case m:
              c--;
              d++;
              break;
            case o:
            case i:
              c++;
              d--;
              break;
            case k:
            case l:
              c--;
              d--;
              break;
            case p:
            case n:
            default:
              c++;
              d++
          }
          if (c < 0 || d < 0 || c > f || d > h) {
            switch (e) {
              case j:
              case m:
                a++;
                break;
              case k:
              case l:
              case o:
              case i:
                b++;
                break;
              case p:
              case n:
              default:
                a--
            }
            if (a < 0 || b < 0 || a > f || b > h) {
              switch (e) {
                case j:
                case m:
                  a = f;
                  b++;
                  break;
                case o:
                case i:
                  b = h;
                  a++;
                  break;
                case k:
                case l:
                  b = h;
                  a--;
                  break;
                case p:
                case n:
                default:
                  a = 0;
                  b++
              }
              if (b > h) b = h;
              else if (b < 0) b = 0;
              else if (a > f) a = f;
              else if (a < 0) a = 0
            }
            d = b;
            c = a
          }
        }
        return r
      };
      h.$FormationRectangle = function (f) {
        var d = f.$Cols || 1,
          e = f.$Rows || 1,
          h = [],
          a, b, i;
        i = c.$Round(c.k(d / 2, e / 2)) + 1;
        for (a = 0; a < d; a++)
          for (b = 0; b < e; b++) g(h, i - c.k(a + 1, b + 1, d - a, e - b), [b, a]);
        return h
      };
      h.$FormationRandom = function (d) {
        for (var e = [], a, b = 0; b < d.$Rows; b++)
          for (a = 0; a < d.$Cols; a++) g(e, c.K(1e5 * c.ke()) % 13, [b, a]);
        return e
      };
      h.$FormationCircle = function (d) {
        for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
          for (a = 0; a < f; a++) g(h, c.$Round(c.Yb(c.q(b - i, 2) + c.q(a - j, 2))), [a, b]);
        return h
      };
      h.$FormationCross = function (d) {
        for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
          for (a = 0; a < f; a++) g(h, c.$Round(c.k(c.F(b - i), c.F(a - j))), [a, b]);
        return h
      };
      h.$FormationRectangleCross = function (f) {
        for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = c.m(d, e) + 1, b = 0; b < h; b++)
          for (a = 0; a < i; a++) g(j, c.$Round(k - c.m(d - c.F(b - d), e - c.F(a - e))) - 1, [a, b]);
        return j
      }
    };
  i.$JssorSlideshowRunner$ = function (m, r, p, u, z, A) {
    var a = this,
      v, h, e, y = 0,
      x = u.$TransitionsOrder,
      q, i = 8;

    function t(a) {
      if (a.$Top) a.J = a.$Top;
      if (a.$Left) a.N = a.$Left;
      b.c(a, function (a) {
        b.Ae(a) && t(a)
      })
    }

    function j(h, e, f) {
      var a = {
        $Interval: e,
        $Duration: 1,
        $Delay: 0,
        $Cols: 1,
        $Rows: 1,
        $Opacity: 0,
        $Zoom: 0,
        $Clip: 0,
        $Move: k,
        $SlideOut: k,
        $Reverse: k,
        $Formation: s.$FormationRandom,
        $Assembly: 1032,
        $ChessMode: {
          $Column: 0,
          $Row: 0
        },
        $Easing: g.$Linear,
        $Round: {},
        vc: [],
        $During: {}
      };
      b.G(a, h);
      if (a.$Rows == 0) a.$Rows = c.$Round(a.$Cols * f);
      t(a);
      a.Fc = a.$Cols * a.$Rows;
      a.$Easing = b.ad(a.$Easing, g.$Linear);
      a.mf = c.K(a.$Duration / a.$Interval);
      a.zf = function (c, b) {
        c /= a.$Cols;
        b /= a.$Rows;
        var f = c + "x" + b;
        if (!a.vc[f]) {
          a.vc[f] = {
            H: c,
            I: b
          };
          for (var d = 0; d < a.$Cols; d++)
            for (var e = 0; e < a.$Rows; e++) a.vc[f][e + "," + d] = {
              $Top: e * b,
              $Right: d * c + c,
              $Bottom: e * b + b,
              $Left: d * c
            }
        }
        return a.vc[f]
      };
      if (a.$Brother) {
        a.$Brother = j(a.$Brother, e, f);
        a.$SlideOut = d
      }
      return a
    }

    function n(z, i, a, v, n, l) {
      var y = this,
        t, u = {},
        h = {},
        m = [],
        f, e, r, p = a.$ChessMode.$Column || 0,
        q = a.$ChessMode.$Row || 0,
        g = a.zf(n, l),
        o = B(a),
        C = o.length - 1,
        s = a.$Duration + a.$Delay * C,
        w = v + s,
        j = a.$SlideOut,
        x;
      w += 50;

      function B(a) {
        var b = a.$Formation(a);
        return a.$Reverse ? b.reverse() : b
      }
      y.Cd = w;
      y.rc = function (d) {
        d -= v;
        var e = d < s;
        if (e || x) {
          x = e;
          if (!j) d = s - d;
          var f = c.K(d / a.$Interval);
          b.c(h, function (a, e) {
            var d = c.m(f, a.k);
            d = c.k(d, a.length - 1);
            if (a.yd != d) {
              if (!a.yd && !j) b.eb(m[e]);
              else d == a.m && j && b.Cb(m[e]);
              a.yd = d;
              b.Z(m[e], a[d])
            }
          })
        }
      };
      i = b.gb(i);
      A(i, 0, 0);
      b.c(o, function (i, m) {
        b.c(i, function (G) {
          var I = G[0],
            H = G[1],
            v = I + "," + H,
            o = k,
            s = k,
            x = k;
          if (p && H % 2) {
            if (p & 3) o = !o;
            if (p & 12) s = !s;
            if (p & 16) x = !x
          }
          if (q && I % 2) {
            if (q & 3) o = !o;
            if (q & 12) s = !s;
            if (q & 16) x = !x
          }
          a.$Top = a.$Top || a.$Clip & 4;
          a.$Bottom = a.$Bottom || a.$Clip & 8;
          a.$Left = a.$Left || a.$Clip & 1;
          a.$Right = a.$Right || a.$Clip & 2;
          var C = s ? a.$Bottom : a.$Top,
            z = s ? a.$Top : a.$Bottom,
            B = o ? a.$Right : a.$Left,
            A = o ? a.$Left : a.$Right;
          a.$Clip = C || z || B || A;
          r = {};
          e = {
            J: 0,
            N: 0,
            $Opacity: 1,
            H: n,
            I: l
          };
          f = b.G({}, e);
          t = b.G({}, g[v]);
          if (a.$Opacity) e.$Opacity = 2 - a.$Opacity;
          if (a.$ZIndex) {
            e.$ZIndex = a.$ZIndex;
            f.$ZIndex = 0
          }
          var K = a.$Cols * a.$Rows > 1 || a.$Clip;
          if (a.$Zoom || a.$Rotate) {
            var J = d;
            if (J) {
              e.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
              f.$Zoom = 1;
              var N = a.$Rotate || 0;
              e.$Rotate = N * 360 * (x ? -1 : 1);
              f.$Rotate = 0
            }
          }
          if (K) {
            var i = t.kc = {};
            if (a.$Clip) {
              var w = a.$ScaleClip || 1;
              if (C && z) {
                i.$Top = g.I / 2 * w;
                i.$Bottom = -i.$Top
              } else if (C) i.$Bottom = -g.I * w;
              else if (z) i.$Top = g.I * w;
              if (B && A) {
                i.$Left = g.H / 2 * w;
                i.$Right = -i.$Left
              } else if (B) i.$Right = -g.H * w;
              else if (A) i.$Left = g.H * w
            }
            r.$Clip = t;
            f.$Clip = g[v]
          }
          var L = o ? 1 : -1,
            M = s ? 1 : -1;
          if (a.x) e.N += n * a.x * L;
          if (a.y) e.J += l * a.y * M;
          b.c(e, function (a, c) {
            if (b.oc(a))
              if (a != f[c]) r[c] = a - f[c]
          });
          u[v] = j ? f : e;
          var D = a.mf,
            y = c.$Round(m * a.$Delay / a.$Interval);
          h[v] = new Array(y);
          h[v].k = y;
          h[v].m = y + D - 1;
          for (var F = 0; F <= D; F++) {
            var E = b.Ld(f, r, F / D, a.$Easing, a.$During, a.$Round, {
              $Move: a.$Move,
              $OriginalWidth: n,
              $OriginalHeight: l
            });
            E.$ZIndex = E.$ZIndex || 1;
            h[v].push(E)
          }
        })
      });
      o.reverse();
      b.c(o, function (a) {
        b.c(a, function (c) {
          var f = c[0],
            e = c[1],
            d = f + "," + e,
            a = i;
          if (e || f) a = b.gb(i);
          b.Z(a, u[d]);
          b.Lb(a, "hidden");
          b.rb(a, "absolute");
          z.Af(a);
          m[d] = a;
          b.eb(a, !j)
        })
      })
    }

    function w() {
      var a = this,
        b = 0;
      l.call(a, 0, v);
      a.ec = function (c, a) {
        if (a - b > i) {
          b = a;
          e && e.rc(a);
          h && h.rc(a)
        }
      };
      a.Xc = q
    }
    a.xf = function () {
      var a = 0,
        b = u.$Transitions,
        d = b.length;
      if (x) a = y++ % d;
      else a = c.P(c.ke() * d);
      b[a] && (b[a].Zb = a);
      return b[a]
    };
    a.tf = function (x, y, k, l, b, t) {
      a.zb();
      q = b;
      b = j(b, i, t);
      var g = l.Ad,
        f = k.Ad;
      g["no-image"] = !l.Uc;
      f["no-image"] = !k.Uc;
      var o = g,
        s = f,
        w = b,
        d = b.$Brother || j({}, i, t);
      if (!b.$SlideOut) {
        o = f;
        s = g
      }
      var u = d.$Shift || 0;
      h = new n(m, s, d, c.m(u - d.$Interval, 0), r, p);
      e = new n(m, o, w, c.m(d.$Interval - u, 0), r, p);
      h.rc(0);
      e.rc(0);
      v = c.m(h.Cd, e.Cd);
      a.Zb = x
    };
    a.zb = function () {
      m.zb();
      h = f;
      e = f
    };
    a.Pe = function () {
      var a = f;
      if (e) a = new w;
      return a
    };
    if (z && b.jg() < 537) i = 16;
    o.call(a);
    l.call(a, -1e7, 1e7)
  };
  var r = {
    yc: 1
  };
  i.$JssorBulletNavigator$ = function () {
    var a = this,
      E = b.V(a, o),
      h, v, C, B, m, l = 0,
      g, s, p, z, A, i, k, u, t, x, j;

    function y(a) {
      j[a] && j[a].ae(a == l)
    }

    function w(b) {
      a.j(r.yc, b * s)
    }
    a.cd = function (a) {
      if (a != m) {
        var d = l,
          b = c.P(a / s);
        l = b;
        m = a;
        y(d);
        y(b)
      }
    };
    a.dd = function (a) {
      b.eb(h, a)
    };
    a.hd = function (J) {
      b.$Destroy(j);
      m = e;
      a.Rd();
      x = [];
      j = [];
      b.Xb(h);
      v = c.K(J / s);
      l = 0;
      var F = u + z,
        G = t + A,
        r = c.K(v / p) - 1;
      C = u + F * (!i ? r : p - 1);
      B = t + G * (i ? r : p - 1);
      b.C(h, C);
      b.D(h, B);
      for (var n = 0; n < v; n++) {
        var H = b.Cg();
        b.Ag(H, n + 1);
        var o = b.fe(k, "numbertemplate", H, d);
        b.rb(o, "absolute");
        var E = n % (r + 1),
          I = c.P(n / (r + 1)),
          y = g.cc && !i ? r - E : E;
        b.Q(o, (!i ? y : I) * F);
        b.ab(o, (i ? y : I) * G);
        b.bb(h, o);
        x[n] = o;
        g.$ActionMode & 1 && a.a(o, "click", b.S(f, w, n));
        g.$ActionMode & 2 && a.a(o, "mouseenter", b.S(f, w, n));
        j[n] = b.qc(o)
      }
      q.Cc(h)
    };
    a.A = function (d, c) {
      a.$Elmt = h = b.$GetElement(d);
      a.Jc = g = b.G({
        $SpacingX: 10,
        $SpacingY: 10,
        $ActionMode: 1
      }, c);
      k = b.$FindChild(h, "prototype");
      u = b.C(k);
      t = b.D(k);
      b.nb(k, h);
      s = g.$Steps || 1;
      p = g.$Rows || 1;
      z = g.$SpacingX;
      A = g.$SpacingY;
      i = g.$Orientation & 2;
      g.$AutoCenter && q.Ac(h, n.yb, g.$AutoCenter)
    };
    a.$Destroy = function () {
      b.$Destroy(j, E)
    };
    b.A(a)
  };
  i.$JssorArrowNavigator$ = function () {
    var a = this,
      v = b.V(a, o),
      e, c, g, l, s, k, h, m, j, i;

    function p(b) {
      a.j(r.yc, b, d)
    }

    function u(a) {
      b.eb(e, a);
      b.eb(c, a)
    }

    function t() {
      j.$Enable((g.$Loop || !l.Ef(h)) && k > 1);
      i.$Enable((g.$Loop || !l.Ff(h)) && k > 1)
    }
    a.cd = function (c, a, b) {
      h = a;
      !b && t()
    };
    a.dd = u;
    a.hd = function (g) {
      k = g;
      h = 0;
      if (!s) {
        a.a(e, "click", b.S(f, p, -m));
        a.a(c, "click", b.S(f, p, m));
        j = b.qc(e);
        i = b.qc(c);
        b.z(e, n.Qc, 1);
        b.z(c, n.Qc, 1);
        s = d
      }
    };
    a.A = function (f, d, h, i) {
      a.Jc = g = b.G({
        $Steps: 1
      }, h);
      e = f;
      c = d;
      if (g.cc) {
        e = d;
        c = f
      }
      m = g.$Steps;
      l = i;
      if (g.$AutoCenter) {
        q.Ac(e, n.yb, g.$AutoCenter);
        q.Ac(c, n.yb, g.$AutoCenter)
      }
      q.Cc(e);
      q.Cc(c)
    };
    a.$Destroy = function () {
      b.$Destroy(j, i, v)
    };
    b.A(a)
  };
  i.$JssorThumbnailNavigator$ = function () {
    var i = this,
      E = b.V(i, o),
      h, B, a, y, C, m, l = [],
      A, z, g, p, s, w, v, x, t, u;

    function D() {
      var c = this;
      b.V(c, o);
      var h, e, n, l;

      function p() {
        n.ae(m == h)
      }

      function j(e) {
        if (e || !t.$LastDragSucceeded()) {
          var c = g - h % g,
            a = t.de((h + c) / g - 1),
            b = a * g + g - c;
          if (a < 0) b += y % g;
          if (a >= C) b -= y % g;
          i.j(r.yc, b, k, d)
        }
      }
      c.ce = p;
      c.A = function (g, i) {
        c.Zb = h = i;
        l = g.Fe || g.Uc || b.Tb();
        c.ld = e = b.fe(u, "thumbnailtemplate", l, d);
        n = b.qc(e);
        a.$ActionMode & 1 && c.a(e, "click", b.S(f, j, 0));
        a.$ActionMode & 2 && c.a(e, "mouseenter", b.S(f, j, 1))
      };
      b.A(c)
    }
    i.cd = function (a, e, d) {
      if (a != m) {
        var b = m;
        m = a;
        b != -1 && l[b].ce();
        l[a] && l[a].ce()
      }!d && t.$PlayTo(t.de(c.P(a / g)))
    };
    i.dd = function (a) {
      b.eb(h, a)
    };
    i.hd = function (I, J) {
      b.$Destroy(t, l);
      m = e;
      l = [];
      var K = b.gb(B);
      b.Xb(h);
      a.cc && b.z(h, "dir", "rtl");
      b.sg(h, b.Eb(K));
      var i = b.$FindChild(h, "slides", d);
      y = I;
      C = c.K(y / g);
      m = -1;
      var f = a.$Orientation & 1,
        r = w + (w + p) * (g - 1) * (1 - f),
        o = v + (v + s) * (g - 1) * f,
        E = (f ? c.m : c.k)(A, r),
        u = (f ? c.k : c.m)(z, o);
      x = c.K((A - p) / (w + p) * f + (z - s) / (v + s) * (1 - f));
      var G = r + (r + p) * (x - 1) * f,
        F = o + (o + s) * (x - 1) * (1 - f);
      E = c.k(E, G);
      u = c.k(u, F);
      b.C(i, E);
      b.D(i, u);
      b.nd(i, 3);
      var n = [];
      b.c(J, function (k, e) {
        var h = new D(k, e),
          d = h.ld,
          a = c.P(e / g),
          j = e % g;
        b.Q(d, (w + p) * j * (1 - f));
        b.ab(d, (v + s) * j * f);
        if (!n[a]) {
          n[a] = b.Tb();
          b.bb(i, n[a])
        }
        b.bb(n[a], d);
        l.push(h)
      });
      var H = b.G({
        $AutoPlay: 0,
        $NaviQuitDrag: k,
        $SlideWidth: r,
        $SlideHeight: o,
        $SlideSpacing: p * f + s * (1 - f),
        $MinDragOffsetToSlide: 12,
        $SlideDuration: 200,
        $PauseOnHover: 1,
        $Cols: x,
        $PlayOrientation: a.$Orientation,
        $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation
      }, a);
      t = new j(h, H);
      q.Cc(h)
    };
    i.A = function (j, f, e) {
      h = j;
      i.Jc = a = b.G({
        $SpacingX: 0,
        $SpacingY: 0,
        $Orientation: 1,
        $ActionMode: 1
      }, f);
      A = b.C(h);
      z = b.D(h);
      var c = b.$FindChild(h, "slides", d);
      u = b.$FindChild(c, "prototype");
      e = b.gb(e);
      b.Ib(e, c);
      w = b.C(u);
      v = b.D(u);
      b.nb(u, c);
      b.rb(c, "absolute");
      b.Lb(c, "hidden");
      g = a.$Rows || 1;
      p = a.$SpacingX;
      s = a.$SpacingY;
      a.$AutoCenter &= a.$Orientation;
      a.$AutoCenter && q.Ac(h, n.yb, a.$AutoCenter);
      B = b.gb(h)
    };
    i.$Destroy = function () {
      b.$Destroy(t, l, E)
    };
    b.A(i)
  };

  function p(e, d, c) {
    var a = this;
    b.V(a, o);
    l.call(a, 0, c.$Idle);
    a.jc = 0;
    a.rd = c.$Idle
  }
  p.Rc = 21;
  p.xc = 24;
  var t = i.$JssorCaptionSlideo$ = i.$JssorSlideo$ = function () {
      var a = this,
        gb = b.V(a, o);
      l.call(a, 0, 0);
      var e, u, fb = [g.$Linear, g.$Swing, g.$InQuad, g.$OutQuad, g.$InOutQuad, g.$InCubic, g.$OutCubic, g.$InOutCubic, g.$InQuart, g.$OutQuart, g.$InOutQuart, g.$InQuint, g.$OutQuint, g.$InOutQuint, g.$InSine, g.$OutSine, g.$InOutSine, g.$InExpo, g.$OutExpo, g.$InOutExpo, g.$InCirc, g.$OutCirc, g.$InOutCirc, g.$InElastic, g.$OutElastic, g.$InOutElastic, g.$InBack, g.$OutBack, g.$InOutBack, g.$InBounce, g.$OutBounce, g.$InOutBounce, g.$Early, g.$Late],
        I = {},
        K, E, z = new l(0, 0),
        L = [],
        w = [],
        G, r = 0;

      function N(d, c) {
        var a = {};
        b.c(d, function (d, f) {
          var e = I[f];
          if (e) {
            if (b.Ae(d)) d = N(d, c || f == "e");
            else if (c)
              if (b.oc(d)) d = fb[d];
            a[e] = d
          }
        });
        return a
      }

      function O(c, f) {
        var e = [],
          d = b.B(c, "play");
        if (f && d) {
          var g = new t(c, u, {
            Fg: d
          });
          S.push(g);
          a.a(g, p.Rc, Y);
          a.a(g, p.xc, T)
        } else b.c(b.Eb(c), function (a) {
          e = e.concat(O(a, f + 1))
        });
        if (!f && (!j || j & 16) || f && (!d || !(d & 16))) {
          var h = K[b.B(c, "t")];
          h && e.push({
            $Elmt: c,
            Xc: h
          })
        }
        return e
      }

      function H(c, e) {
        var a = L[c];
        if (a == f) {
          a = L[c] = {
            pb: c,
            gd: [],
            xe: []
          };
          var d = 0;
          !b.c(w, function (a, b) {
            d = b;
            return a.pb > c
          }) && d++;
          w.splice(d, 0, a)
        }
        return a
      }

      function cb(o, p, g) {
        var a, e;
        if (E) {
          var k = E[b.B(o, "c")];
          if (k) {
            a = H(k.r, 0);
            a.eh = k.e || 0
          }
        }
        b.c(p, function (h) {
          var f = b.G(d, {}, N(h)),
            i = b.ad(f.$Easing);
          delete f.$Easing;
          if (f.$Left) {
            f.N = f.$Left;
            i.N = i.$Left;
            delete f.$Left
          }
          if (f.$Top) {
            f.J = f.$Top;
            i.J = i.$Top;
            delete f.$Top
          }
          var m = {
              $Easing: i,
              $OriginalWidth: g.H,
              $OriginalHeight: g.I
            },
            j = new l(h.b, h.d, m, o, g, f);
          r = c.m(r, h.b + h.d);
          if (a) {
            if (!e) e = new l(h.b, 0);
            e.U(j)
          } else {
            var k = H(h.b, h.b + h.d);
            k.gd.push(j)
          }
          if (f.vb) g.vb = {
            xd: 0,
            wd: 0,
            Bd: 0,
            $Opacity: 0
          };
          g = b.Sg(g, f)
        });
        if (a && e) {
          e.ef();
          var h = e,
            j, i = e.mc(),
            m = e.ub(),
            n = c.m(m, a.eh);
          if (a.pb < m) {
            if (a.pb > i) {
              h = new l(i, a.pb - i);
              h.U(e, d)
            } else h = f;
            j = new l(a.pb, n - i, {
              pc: n - a.pb,
              Oe: d
            });
            j.U(e, d)
          }
          h && a.gd.push(h);
          j && a.xe.push(j)
        }
        return g
      }

      function bb(a) {
        b.c(a, function (f) {
          var a = f.$Elmt,
            e = b.C(a),
            d = b.D(a),
            c = {
              $Left: b.Q(a),
              $Top: b.ab(a),
              N: 0,
              J: 0,
              $Opacity: 1,
              $ZIndex: b.Y(a) || 0,
              $Rotate: 0,
              $RotateX: 0,
              $RotateY: 0,
              $ScaleX: 1,
              $ScaleY: 1,
              $TranslateX: 0,
              $TranslateY: 0,
              $TranslateZ: 0,
              $SkewX: 0,
              $SkewY: 0,
              H: e,
              I: d,
              $Clip: {
                $Top: 0,
                $Right: e,
                $Bottom: d,
                $Left: 0
              }
            };
          c.Fd = c.$Left;
          c.Pd = c.$Top;
          cb(a, f.Xc, c)
        })
      }

      function eb(f, e, g) {
        var c = f.b - e;
        if (c) {
          var b = new l(e, c);
          b.U(z, d);
          b.$Shift(g);
          a.U(b)
        }
        a.Hc(f.d);
        return c
      }

      function db(e) {
        var c = z.mc(),
          d = 0;
        b.c(e, function (e, f) {
          e = b.G({
            d: 3e3
          }, e);
          eb(e, c, d);
          c = e.b;
          d += e.d;
          if (!f || e.t == 2) {
            a.jc = c;
            a.rd = c + e.d
          }
        })
      }

      function D(i, d, e) {
        var f = d.length;
        if (f > 4)
          for (var j = c.K(f / 4), a = 0; a < j; a++) {
            var g = d.slice(a * 4, c.k(a * 4 + 4, f)),
              h = new l(g[0].pb, 0);
            D(h, g, e);
            i.U(h)
          } else b.c(d, function (a) {
            b.c(e ? a.xe : a.gd, function (a) {
              e && a.Hc(r - a.ub());
              i.U(a)
            })
          })
      }
      var j, M, B = 0,
        i, A, m, P, C, S = [],
        y = [],
        s, F, n;

      function x(a) {
        return a & 2 || a & 4 && b.Sc().Vc
      }

      function Z() {
        if (!C) {
          i & 8 && a.a(h, "keydown", J);
          if (i & 32) {
            a.a(h, "mousedown", v);
            a.a(h, "touchstart", v)
          }
          C = d
        }
      }

      function X() {
        a.T(h, "keydown", J);
        a.T(h, "mousedown", v);
        a.T(h, "touchstart", v);
        C = k
      }

      function Q(b) {
        if (!s || b) {
          s = d;
          a.O();
          b && B && a.M(0);
          a.Zd(1);
          a.Se();
          Z();
          a.j(p.Rc, a)
        }
      }

      function q() {
        if (!F && (s || a.n())) {
          F = d;
          a.O();
          a.Jd() > a.jc && a.M(a.jc);
          a.Zd(m || 1);
          a.sc(0)
        }
      }

      function U() {
        !n && q()
      }

      function R(c) {
        var b = c;
        if (c < 0 && a.n()) b = 1;
        if (b != B) {
          B = b;
          M && a.j(p.xc, a, B)
        }
      }

      function J(a) {
        i & 8 && b.re(a) == 27 && q()
      }

      function W(a) {
        if (n && b.qe(a) !== f) {
          n = k;
          i & 16 && b.$Delay(U, 160)
        }
      }

      function v(a) {
        i & 32 && !b.ve(e, b.$EvtSrc(a)) && q()
      }

      function V(a) {
        if (!n) {
          n = d;
          if (j & 1) b.oe(a, e) && Q()
        }
      }

      function ab(h) {
        var g = b.$EvtSrc(h),
          a = b.tb(g, f, f, "A"),
          c = a && (b.ug(a) || a === e || b.ve(e, a));
        if (s && x(i)) !c && q();
        else if (x(j)) !c && Q(d)
      }

      function Y(b) {
        var a = b.Wg();
        childSlideoPlaying = y[a];
        childSlideoPlaying !== b && y[a] && y[a].pg();
        y[a] = b
      }

      function T(b, c) {
        a.j(p.xc, b, c)
      }
      a.Wg = function () {
        return P || ""
      };
      a.pg = q;
      a.pd = function () {
        R(1)
      };
      a.qd = function () {
        s = k;
        F = k;
        R(-1);
        !a.n() && X()
      };
      a.ec = function () {
        !n && A && a.Jd() > a.rd && q()
      };
      a.A = function (l, g, f) {
        e = l;
        u = g;
        j = f.Fg;
        G = f.ng;
        K = u.$Transitions;
        E = u.$Controls;
        var k = {
          $Top: "y",
          $Left: "x",
          $Bottom: "m",
          $Right: "t",
          $Rotate: "r",
          $RotateX: "rX",
          $RotateY: "rY",
          $ScaleX: "sX",
          $ScaleY: "sY",
          $TranslateX: "tX",
          $TranslateY: "tY",
          $TranslateZ: "tZ",
          $SkewX: "kX",
          $SkewY: "kY",
          $Opacity: "o",
          $Easing: "e",
          $ZIndex: "i",
          $Clip: "c",
          vb: "bc",
          xd: "re",
          wd: "gr",
          Bd: "bl"
        };
        b.c(k, function (b, a) {
          I[b] = a
        });
        bb(O(e, 0));
        D(z, w);
        if (j) {
          a.U(z);
          G = d;
          A = b.B(e, "idle");
          (x(j) || x(i)) && a.a(e, "click", ab);
          if ((j & 1 || A) && !b.Sc().Vc) {
            a.a(e, "mouseenter", V);
            a.a(e, "mouseleave", W)
          }
          i = b.B(e, "rollback");
          m = b.X(e, "speed") || "";
          if (m.substr(0, 1) == "x") m = m.substr(1);
          m = b.Ce(m);
          P = b.X(e, "group");
          M = b.B(e, "pause")
        }
        var h = u.$Breaks || [],
          c = h[b.B(e, "b")] || [];
        c = c.concat({
          b: r,
          d: c.length ? 0 : f.$Idle || A || 0
        });
        db(c);
        G && a.Hc(1e8);
        r = a.ub();
        D(a, w, d);
        a.M(-1);
        a.M(b.B(e, "begin") || 0)
      };
      a.$Destroy = function () {
        b.$Destroy(gb, S);
        a.O();
        a.M(-1)
      };
      b.A(a)
    },
    j = i.$JssorSlider$ = (i.module || {}).exports = function () {
      var a = this,
        Dc = b.V(a, o),
        Nb = "data-jssor-slider",
        hc = "data-jssor-thumb",
        u, m, S, Bb, db, jb, X, J, O, M, Xb, Ac, Ec = 1,
        zc = 1,
        jc = 1,
        pc = 1,
        lc = {},
        x, R, Lb, Zb, Wb, vb, yb, xb, gb, B = [],
        Rb, s = -1,
        rc, q, I, H, P, nb, ob, F, N, kb, T, y, W, mb, Z = [],
        uc, wc, mc, t, ub, Hb, qb, U, Y, qc, Gb, Pb, sc, G, Kb = 0,
        cb = 0,
        Q = Number.MAX_VALUE,
        K = Number.MIN_VALUE,
        D, lb, eb, V = 1,
        Vb = 0,
        pb, A, Eb, Db, L, zb, Cb, C, ab, rb, z, Ab, ac = b.Sc(),
        Fb = ac.Vc,
        w = [],
        E, hb, bb, Mb, gc, kc, ib;

      function Jb() {
        return !V && Y & 12
      }

      function Fc() {
        return Vb || !V && Y & 3
      }

      function Ib() {
        return !A && !Jb() && !z.$IsPlaying()
      }

      function Xc() {
        return !Fc() && Ib()
      }

      function ic() {
        return y || S
      }

      function Oc() {
        return ic() & 2 ? ob : nb
      }

      function Qb(a, c, d) {
        b.Q(a, c);
        b.ab(a, d)
      }

      function Cc(c, b) {
        var a = ic(),
          d = (nb * b + Kb) * (a & 1),
          e = (ob * b + Kb) * (a & 2) / 2;
        Qb(c, d, e)
      }

      function cc(b, f) {
        if (A && !(D & 1)) {
          var e = b,
            d;
          if (b < K) {
            e = K;
            d = -1
          }
          if (b > Q) {
            e = Q;
            d = 1
          }
          if (d) {
            var a = b - e;
            if (f) {
              a = c.yf(a) * 2 / c.E;
              a = c.q(a * d, 1.6)
            } else {
              a = c.q(a * d, .625);
              a = c.Ee(a * c.E / 2)
            }
            b = e + a * d
          }
        }
        return b
      }

      function Qc(a) {
        return cc(a, d)
      }

      function Lc(a) {
        return cc(a)
      }

      function wb(a, b) {
        if (!(D & 1)) {
          var c = a - Q + (b || 0),
            d = K - a + (b || 0);
          if (c > 0 && c > d) a = Q;
          else if (d > 0) a = K
        }
        return a
      }

      function xc(a) {
        return !(D & 1) && a - K < .0001
      }

      function vc(a) {
        return !(D & 1) && Q - a < .0001
      }

      function sb(a) {
        return !(D & 1) && (a - K < .0001 || Q - a < .0001)
      }

      function Sb(c, a, d) {
        !ib && b.c(Z, function (b) {
          b.cd(c, a, d)
        })
      }

      function dc(b) {
        var a = b,
          d = sb(b);
        if (d) a = wb(a);
        else {
          b = v(b);
          a = b
        }
        a = c.P(a);
        a = c.m(a, 0);
        return a
      }

      function Ic(a) {
        if (a != s) {
          w[s];
          Rb = s;
          s = a;
          rc = w[s]
        }
      }

      function Uc() {
        y = 0;
        var b = C.n(),
          d = dc(b);
        Sb(d, b);
        if (sb(b) || b == c.P(b)) {
          if (t & 2 && (U > 0 && d == q - 1 || U < 0 && !d)) t = 0;
          Ic(d);
          a.j(j.$EVT_PARK, s, Rb)
        }
      }

      function nc(a, b) {
        if (q && (!b || !z.$IsPlaying())) {
          z.O();
          z.Kc(a, a)
        }
      }

      function tb(a) {
        if (q) {
          a = v(a);
          a = wb(a);
          nc(a)
        } else Sb(0, 0)
      }

      function ad() {
        var b = j.je || 0,
          a = lb;
        j.je |= a;
        return W = a & ~b
      }

      function Vc() {
        if (W) {
          j.je &= ~lb;
          W = 0
        }
      }

      function bd() {
        var a = b.Tb();
        b.Z(a, gb);
        return a
      }

      function v(b, a) {
        a = a || q || 1;
        return (b % a + a) % a
      }

      function ec(c, a, b) {
        t & 8 && (t = 0);
        bc(c, Gb, a, b)
      }

      function Tb() {
        b.c(Z, function (a) {
          a.dd(a.Jc.$ChanceToShow <= V)
        })
      }

      function Kc(c) {
        if (!V && (b.qe(c) || !b.oe(c, u))) {
          V = 1;
          Tb();
          if (!A) {
            Y & 12 && Gc();
            w[s] && w[s].uc()
          }
          a.j(j.$EVT_MOUSE_LEAVE)
        }
      }

      function Jc() {
        if (V) {
          V = 0;
          Tb();
          A || !(Y & 12) || Hc()
        }
        a.j(j.$EVT_MOUSE_ENTER)
      }

      function Nc() {
        b.c(B, function (a) {
          b.Z(a, gb);
          b.Lb(a, "hidden");
          b.Cb(a)
        });
        b.Z(R, gb)
      }

      function Ub(b, a) {
        bc(b, a, d)
      }

      function bc(g, h, l, p) {
        if (q && (!A || m.$NaviQuitDrag) && !Jb()) {
          var f = C.n(),
            a = g;
          if (l) {
            a = f + g;
            if (D & 2) {
              if (xc(f) && g < 0) a = Q;
              if (vc(f) && g > 0) a = K
            }
          }
          if (!(D & 1))
            if (p) a = v(a);
            else a = wb(a, .5);
          if (l && !sb(a)) a = c.$Round(a);
          var i = (a - f) % q;
          a = f + i;
          if (h == e) h = Gb;
          var b = c.F(i),
            j = 0;
          if (b) {
            if (b < 1) b = c.q(b, .5);
            if (b > 1) {
              var o = Oc(),
                n = (S & 1 ? yb : xb) / o;
              b = c.k(b, n * 1.5)
            }
            j = h * b
          }
          ib = d;
          z.O();
          ib = k;
          z.Kc(f, a, j)
        }
      }

      function Rc(e, h, o) {
        var l = this,
          i = {
            $Top: 2,
            $Right: 1,
            $Bottom: 2,
            $Left: 1
          },
          m = {
            $Top: "top",
            $Right: "right",
            $Bottom: "bottom",
            $Left: "left"
          },
          g, a, f, j, k = {};
        l.$Elmt = e;
        l.$ScaleSize = function (q, l, u) {
          var p, s = q,
            r = l;
          if (!f) {
            f = b.wg(e);
            g = e.parentNode;
            j = {
              $Scale: b.B(e, n.Hf, 1),
              $AutoCenter: b.B(e, n.yb)
            };
            b.c(m, function (c, a) {
              k[a] = b.B(e, "data-scale-" + c, 1)
            });
            a = e;
            if (h) {
              a = b.gb(g, d);
              b.Z(a, {
                $Top: 0,
                $Left: 0
              });
              b.bb(a, e);
              b.bb(g, a)
            }
          }
          if (o) {
            p = c.m(q, l);
            if (h)
              if (u >= 0 && u < 1) {
                var w = c.k(q, l);
                p = c.k(p / w, 1 / (1 - u)) * w
              }
          } else s = r = p = c.q(O < M ? l : q, j.$Scale);
          var x = h ? 1.001 : 1,
            t = p * x;
          h && (pc = t);
          b.yg(a, t);
          b.C(g, f.H * s);
          b.D(g, f.I * r);
          var v = b.te() && b.id() < 9 ? t : 1,
            y = (s - v) * f.H / 2,
            z = (r - v) * f.I / 2;
          b.Q(a, y);
          b.ab(a, z);
          b.c(f, function (d, a) {
            if (i[a] && d) {
              var e = (i[a] & 1) * c.q(q, k[a]) * d + (i[a] & 2) * c.q(l, k[a]) * d / 2;
              b.Eg[a](g, e)
            }
          });
          b.nd(g, j.$AutoCenter)
        }
      }

      function fd() {
        var a = this;
        l.call(a, 0, 0, {
          pc: q
        });
        b.c(w, function (b) {
          a.Gc(b);
          b.$Shift(G / F)
        })
      }

      function ed() {
        var a = this,
          b = Ab.$Elmt;
        l.call(a, -1, 2, {
          $Easing: g.$Linear,
          Ne: {
            Ob: Cc
          },
          pc: q,
          $Reverse: Hb
        }, b, {
          Ob: 1
        }, {
          Ob: -2
        });
        a.ld = b
      }

      function gd() {
        var b = this;
        l.call(b, -1e8, 2e8);
        b.ec = function (e, b) {
          if (c.F(b - e) > 1e-5) {
            var g = b,
              f = b;
            if (c.P(b) != b && b > e && (D & 1 || b > cb)) f++;
            var h = dc(f);
            Sb(h, g, d);
            a.j(j.$EVT_POSITION_CHANGE, v(g), v(e), b, e)
          }
        }
      }

      function Tc(o, n) {
        var b = this,
          g, i, e, c, h;
        l.call(b, -1e8, 2e8, {
          Hd: 100
        });
        b.pd = function () {
          pb = d;
          a.j(j.$EVT_SWIPE_START, v(C.n()), ab.n())
        };
        b.qd = function () {
          pb = k;
          c = k;
          a.j(j.$EVT_SWIPE_END, v(C.n()), ab.n());
          !A && Uc()
        };
        b.ec = function (f, b) {
          var a = b;
          if (c) a = h;
          else if (e) {
            var d = b / e;
            a = m.$SlideEasing(d) * (i - g) + g
          }
          a = Qc(a);
          ab.M(a)
        };
        b.Kc = function (a, c, h, f) {
          A = k;
          e = h || 1;
          g = a;
          i = c;
          ib = d;
          ab.M(a);
          ib = k;
          b.M(0);
          b.sc(e, f)
        };
        b.Wf = function () {
          c = d;
          c && b.$Play(f, f, d)
        };
        b.lg = function (a) {
          h = a
        };
        ab = new gd;
        ab.U(o);
        ab.U(n)
      }

      function Pc() {
        var c = this,
          a = bd();
        b.Y(a, 0);
        c.$Elmt = a;
        c.Af = function (c) {
          b.bb(a, c);
          b.eb(a)
        };
        c.zb = function () {
          b.Cb(a);
          b.Xb(a)
        }
      }

      function dd(r, h) {
        var g = this,
          ib = b.V(g, o),
          x, B = 0,
          V, jb = r,
          A = b.B(jb, "data-fillmode", m.$FillMode),
          F, u, z = [],
          T, K, P, O, i, n, y, Q;
        l.call(g, -N, N + 1, {
          pc: D & 1 ? q : e,
          $Reverse: Hb
        });

        function G(a) {
          x && x.$Destroy();
          Vb -= B;
          B = 0;
          S(r, a, 0);
          O = d;
          x = new db.$Class(r, db, {
            $Idle: b.B(r, "idle", qc),
            ng: !t
          });
          x.$On(p.xc, X)
        }

        function Y() {
          x.Pc < db.Pc && G()
        }

        function X(b, a) {
          B += a;
          Vb += a;
          if (h == s) !B && g.uc()
        }

        function M(n, p, m) {
          if (!K) {
            K = d;
            if (u && m) {
              var e = m.width,
                c = m.height,
                l = e,
                i = c;
              if (e && c && A) {
                if (A & 3 && (!(A & 4) || e > I || c > H)) {
                  var f = k,
                    o = I / H * c / e;
                  if (A & 1) f = o > 1;
                  else if (A & 2) f = o < 1;
                  l = f ? e * H / c : I;
                  i = f ? H : c * I / e
                }
                b.C(u, l);
                b.D(u, i);
                b.ab(u, (H - i) / 2);
                b.Q(u, (I - l) / 2)
              }
              b.rb(u, "absolute");
              a.j(j.$EVT_LOAD_END, h)
            }
          }
          p.ue(k);
          n && n(g)
        }

        function W(f, b, c, e) {
          if (e == y && s == h && t && Ib() && !g.bd()) {
            var a = v(f);
            E.tf(a, h, b, g, c, H / I);
            b.gh();
            rb.$Shift(a - rb.mc() - 1);
            rb.M(a);
            nc(a, d)
          }
        }

        function ab(b) {
          if (b == y && s == h && Ib() && !g.bd()) {
            if (!i) {
              var a = f;
              if (E)
                if (E.Zb == h) a = E.Pe();
                else E.zb();
              Y();
              i = new cd(r, h, a, x);
              i.ch(n)
            }!i.$IsPlaying() && i.fd()
          }
        }

        function J(a, d, k) {
          if (a == h) {
            if (a != d) w[d] && w[d].he();
            else !k && i && i.Jg();
            n && n.$Enable();
            y = b.Ab();
            g.Nb(b.S(f, ab, y))
          } else {
            var j = c.k(h, a),
              e = c.m(h, a),
              o = c.k(e - j, j + q - e),
              l = N + m.$LazyLoading - 1;
            (!P || o <= l) && g.Nb()
          }
        }

        function bb() {
          if (s == h && i) {
            i.O();
            n && n.$Quit();
            n && n.$Disable();
            i.le()
          }
        }

        function fb() {
          s == h && i && i.O()
        }

        function Z(b) {
          !eb && a.j(j.$EVT_CLICK, h, b)
        }
        g.ue = function (a) {
          if (Q != a) {
            Q = a;
            a && b.bb(r, F);
            !a && b.nb(F)
          }
        };
        g.Nb = function (e, c) {
          c = c || g;
          if (z.length && !K) {
            c.ue(d);
            if (!T) {
              T = d;
              a.j(j.$EVT_LOAD_START, h);
              b.c(z, function (a) {
                if (!b.z(a, "src")) {
                  a.src = b.X(a, "src2") || "";
                  b.Bb(a, b.z(a, "data-display"))
                }
              })
            }
            b.cg(z, u, b.S(f, M, e, c))
          } else M(e, c)
        };
        g.Ng = function () {
          if (Xc())
            if (q == 1) {
              g.he();
              J(h, h)
            } else {
              var a;
              if (E) a = E.xf(q);
              if (a) {
                y = b.Ab();
                var c = h + U,
                  d = w[v(c)];
                return d.Nb(b.S(f, W, c, d, a, y), g)
              } else(D || !sb(C.n()) || !sb(C.n() + U)) && Ub(U)
            }
        };
        g.uc = function () {
          J(h, h, d)
        };
        g.he = function () {
          n && n.$Quit();
          n && n.$Disable();
          g.ze();
          i && i.Og();
          i = f;
          G()
        };
        g.gh = function () {
          b.Cb(r)
        };
        g.ze = function () {
          b.eb(r)
        };

        function S(a, h, c) {
          if (b.z(a, Nb)) return;
          if (!O) {
            b.z(a, "data-events", b.zc(a));
            b.z(a, "data-display", b.Bb(a));
            b.Zf(a, b.X(a, "data-to"));
            b.dg(a, b.X(a, "data-bf"));
            b.bg(a, b.B(a, "data-p"));
            b.xg(a, b.X(a, "po"));
            if (a.tagName == "IMG") {
              z.push(a);
              if (!b.z(a, "src")) {
                P = d;
                b.Cb(a)
              }
            }
            var e = b.gg(a);
            if (e) {
              var f = new Image;
              b.X(f, "src2", e);
              z.push(f)
            }
            c && b.Y(a, (b.Y(a) || 0) + 1)
          }
          var g = b.Eb(a);
          b.c(g, function (d) {
            if (c < 2 && !u)
              if (b.X(d, "u") == "image") {
                u = d;
                u.border = 0;
                b.Z(u, gb);
                b.Z(a, gb)
              }
            S(d, h, c + 1)
          })
        }
        g.Tc = function (c, b) {
          var a = N - b;
          Cc(V, a)
        };
        g.Zb = h;
        var L = b.$FindChild(r, "thumb", d);
        if (L) {
          g.Fe = b.gb(L);
          b.Cb(L)
        }
        b.eb(r);
        F = b.gb(R);
        b.Y(F, 1e3);
        g.a(r, "click", Z);
        G(d);
        g.Uc = u;
        g.Ad = r;
        g.ld = V = r;
        g.a(a, 203, J);
        g.a(a, 28, fb);
        g.a(a, 24, bb);
        g.$Destroy = function () {
          b.$Destroy(ib, x, i)
        }
      }

      function cd(F, h, q, r) {
        var c = this,
          D = b.V(c, o),
          i = 0,
          u = 0,
          g, m, f, e, n, x, v, y = w[h];
        l.call(c, 0, 0);

        function B() {
          c.fd()
        }

        function C(a) {
          v = a;
          c.O();
          c.fd()
        }

        function z() {}
        c.fd = function () {
          if (!A && !pb && !v && s == h && !c.bd()) {
            var k = c.n();
            if (!k)
              if (g && !n) {
                n = d;
                c.le(d);
                a.j(j.$EVT_SLIDESHOW_START, h, u, i, u, g, e)
              }
            a.j(j.$EVT_STATE_CHANGE, h, k, i, m, f, e);
            if (!Jb()) {
              var l;
              if (k == e) t && b.$Delay(y.Ng, 20);
              else {
                if (k == f) l = e;
                else if (!k) l = f;
                else l = c.Id();
                (k != f || !Fc()) && c.sc(l, B)
              }
            }
          }
        };
        c.Jg = function () {
          f == e && f == c.n() && c.M(m)
        };
        c.Og = function () {
          E && E.Zb == h && E.zb();
          var b = c.n();
          b < e && a.j(j.$EVT_STATE_CHANGE, h, -b - 1, i, m, f, e)
        };
        c.le = function (a) {
          q && b.Lb(T, a && q.Xc.$Outside ? "" : "hidden")
        };
        c.Tc = function (c, b) {
          if (n && b >= g) {
            n = k;
            y.ze();
            E.zb();
            a.j(j.$EVT_SLIDESHOW_END, h, g, i, u, g, e)
          }
          a.j(j.$EVT_PROGRESS_CHANGE, h, b, i, m, f, e)
        };
        c.ch = function (a) {
          if (a && !x) {
            x = a;
            a.$On($JssorPlayer$.If, C)
          }
        };
        c.a(r, p.Rc, z);
        q && c.Gc(q);
        g = c.ub();
        c.Gc(r);
        m = g + r.jc;
        e = c.ub();
        f = t ? g + r.rd : e;
        c.$Destroy = function () {
          D.$Destroy();
          c.O()
        }
      }

      function oc() {
        Mb = pb;
        gc = z.Id();
        bb = C.n();
        hb = Lc(bb)
      }

      function Hc() {
        oc();
        if (A || Jb()) {
          z.O();
          a.j(j.hf)
        }
      }

      function Gc(f) {
        if (Ib()) {
          var b = C.n(),
            a = hb,
            e = 0;
          if (f && c.F(L) >= m.$MinDragOffsetToSlide) {
            a = b;
            e = Cb
          }
          a = c.K(a);
          a = wb(a + e, .5);
          var d = c.F(a - b);
          if (d < 1 && m.$SlideEasing != g.$Linear) d = c.q(d, .5);
          if ((!eb || !f) && Mb) z.sc(gc);
          else if (b == a) rc.uc();
          else z.Kc(b, a, d * Gb)
        }
      }

      function fc(a) {
        !b.tb(b.$EvtSrc(a), e, n.Td) && b.$CancelEvent(a)
      }

      function yc(b) {
        Eb = k;
        A = d;
        Hc();
        if (!Mb) y = 0;
        a.j(j.$EVT_DRAG_START, v(bb), bb, b)
      }

      function Zc(a) {
        Bc(a, 1)
      }

      function Bc(c, d) {
        L = 0;
        zb = 0;
        Cb = 0;
        jc = pc;
        if (d) {
          var i = c.touches[0];
          Db = {
            x: i.clientX,
            y: i.clientY
          }
        } else Db = b.jd(c);
        var f = b.$EvtSrc(c),
          g = b.tb(f, "1", hc);
        if ((!g || g === u) && !W && (!d || c.touches.length == 1)) {
          mb = b.tb(f, e, n.Td) || !lb || !ad();
          a.a(h, d ? "touchmove" : "mousemove", Yb);
          Eb = !mb && b.tb(f, e, n.Qc);
          !Eb && !mb && yc(c, d)
        }
      }

      function Yb(a) {
        var e, f;
        a = b.Xf(a);
        if (a.type != "mousemove")
          if (a.touches.length == 1) {
            f = a.touches[0];
            e = {
              x: f.clientX,
              y: f.clientY
            }
          } else fb();
        else e = b.jd(a);
        if (e) {
          var i = e.x - Db.x,
            j = e.y - Db.y,
            g = c.F(i),
            h = c.F(j);
          if (y || g > 1.5 || h > 1.5)
            if (Eb) yc(a, f);
            else {
              if (c.P(hb) != hb) y = y || S & W;
              if ((i || j) && !y) {
                if (W == 3)
                  if (h > g) y = 2;
                  else y = 1;
                else y = W;
                if (Fb && y == 1 && h > g * 2.4) mb = d
              }
              var l = i,
                k = nb;
              if (y == 2) {
                l = j;
                k = ob
              }(L - zb) * qb < -1.5 && (Cb = 0);
              (L - zb) * qb > 1.5 && (Cb = -1);
              zb = L;
              L = l;
              kc = hb - L * qb / k / jc * m.$DragRatio;
              if (L && y && !mb) {
                b.$CancelEvent(a);
                z.Wf(d);
                z.lg(kc)
              }
            }
        }
      }

      function fb() {
        Vc();
        a.T(h, "mousemove", Yb);
        a.T(h, "touchmove", Yb);
        eb = L;
        if (A) {
          eb && t & 8 && (t = 0);
          z.O();
          A = k;
          var b = C.n();
          a.j(j.$EVT_DRAG_END, v(b), b, v(bb), bb);
          Y & 12 && oc();
          Gc(d)
        }
      }

      function Mc(a) {
        var c = b.$EvtSrc(a),
          f = b.tb(c, "1", Nb);
        if (u === f)
          if (eb) {
            b.$StopEvent(a);
            var d = b.tb(c, e, "data-jssor-button", "A");
            d && b.$CancelEvent(a)
          } else t & 4 && (t = 0)
      }
      a.$SlidesCount = function () {
        return B.length
      };
      a.$CurrentIndex = function () {
        return s
      };
      a.$CurrentPosition = function () {
        return C.n()
      };
      a.$AutoPlay = function (a) {
        if (a == e) return t;
        if (a != t) {
          t = a;
          t && w[s] && w[s].uc()
        }
      };
      a.$IsDragging = function () {
        return A
      };
      a.$IsSliding = function () {
        return pb
      };
      a.$IsMouseOver = function () {
        return !V
      };
      a.$LastDragSucceeded = function () {
        return eb
      };
      a.$OriginalWidth = function () {
        return O
      };
      a.$OriginalHeight = function () {
        return M
      };
      a.$ScaleHeight = function (b) {
        if (b == e) return Ac || M;
        a.$ScaleSize(b / M * O, b)
      };
      a.$ScaleWidth = function (b) {
        if (b == e) return Xb || O;
        a.$ScaleSize(b, b / O * M)
      };
      a.$ScaleSize = function (c, a, d) {
        b.C(u, c);
        b.D(u, a);
        Ec = c / O;
        zc = a / M;
        b.c(lc, function (a) {
          a.$ScaleSize(Ec, zc, d)
        });
        if (!Xb) {
          b.Ib(T, x);
          b.ab(T, 0);
          b.Q(T, 0)
        }
        Xb = c;
        Ac = a
      };
      a.Ef = xc;
      a.Ff = vc;
      a.$PlayTo = bc;
      a.$GoTo = tb;
      a.$Next = function () {
        Ub(1)
      };
      a.$Prev = function () {
        Ub(-1)
      };
      a.$Pause = function () {
        t = 0
      };
      a.$Play = function () {
        a.$AutoPlay(t || 1)
      };
      a.$SetSlideshowTransitions = function (a) {
        m.$SlideshowOptions.$Transitions = a
      };
      a.$SetCaptionTransitions = function (a) {
        db.$Transitions = a;
        db.Pc = b.Ab()
      };
      a.de = function (a) {
        a = v(a);
        if (D & 1) {
          var d = G / F,
            b = v(C.n()),
            e = v(a - b + d),
            f = v(c.F(a - b));
          if (e >= N) {
            if (f > q / 2)
              if (a > b) a -= q;
              else a += q
          } else if (a > b && e < d) a -= q;
          else if (a < b && e > d) a += q
        }
        return a
      };

      function Yc() {
        ac.ie && b.Rb(x, ac.ie, ([f, "pan-y", "pan-x", "auto"])[lb] || "");
        a.a(u, "click", Mc, d);
        a.a(u, "mouseleave", Kc);
        a.a(u, "mouseenter", Jc);
        a.a(u, "mousedown", Bc);
        a.a(u, "touchstart", Zc);
        a.a(u, "dragstart", fc);
        a.a(u, "selectstart", fc);
        a.a(i, "mouseup", fb);
        a.a(h, "mouseup", fb);
        a.a(h, "touchend", fb);
        a.a(h, "touchcancel", fb);
        a.a(i, "blur", fb);
        m.$ArrowKeyNavigation && a.a(h, "keydown", function (c) {
          var a = b.re(c);
          if (a == 37 || a == 39) {
            t & 8 && (t = 0);
            ec(m.$ArrowKeyNavigation * (a - 38) * qb, d)
          }
        })
      }

      function tc(f) {
        Dc.Rd();
        B = [];
        w = [];
        var g = b.Eb(x),
          j = b.ye(["DIV", "A", "LI"]);
        b.c(g, function (a) {
          j[a.tagName.toUpperCase()] && !b.X(a, "u") && b.Bb(a) != "none" && B.push(a);
          b.Y(a, (b.Y(a) || 0) + 1)
        });
        q = B.length;
        if (q) {
          var a = S & 1 ? yb : xb;
          Nc();
          G = m.$Align;
          if (G == e) G = (a - F + P) / 2;
          kb = a / F;
          N = c.k(q, m.$Cols || q, c.K(kb));
          D = N < q ? m.$Loop : 0;
          if (q * F - P <= a) {
            kb = q - P / F;
            G = (a - F + P) / 2;
            Kb = (a - F * q + P) / 2
          }
          if (Bb) {
            Pb = Bb.$Class;
            sc = !G && N == 1 && q > 1 && Pb && (!b.te() || b.id() >= 9)
          }
          if (!(D & 1)) {
            cb = G / F;
            if (cb > q - 1) {
              cb = q - 1;
              G = cb * F
            }
            K = cb;
            Q = K + q - kb - P / F
          }
          lb = (N > 1 || G ? S : -1) & m.$DragOrientation;
          if (sc) E = new Pb(Ab, I, H, Bb, Fb, Qb);
          for (var d = 0; d < B.length; d++) {
            var h = B[d],
              i = new dd(h, d);
            w.push(i)
          }
          rb = new ed;
          C = new fd;
          z = new Tc(C, rb);
          Yc()
        }
        b.c(Z, function (a) {
          a.hd(q, w);
          f && a.$On(r.yc, ec)
        })
      }

      function Ob(a, d, g) {
        b.ne(a) && (a = b.Be("", a));
        var c, f;
        if (q) {
          if (d == e) d = q;
          f = "beforebegin";
          c = B[d];
          if (!c) {
            f = "afterend";
            c = B[q - 1]
          }
        }
        b.$Destroy(w);
        a && b.rg(c || x, f || "afterbegin", a);
        b.c(g, function (a) {
          b.nb(a)
        });
        tc()
      }
      a.$AppendSlides = function (f, a) {
        if (a == e) a = s + 1;
        var d = B[s];
        Ob(f, a);
        var c = 0;
        b.c(B, function (a, b) {
          a == d && (c = b)
        });
        tb(c)
      };
      a.$ReloadSlides = function (a) {
        Ob(a, f, B);
        tb(0)
      };
      a.$RemoveSlides = function (e) {
        var a = s,
          d = [];
        b.c(e, function (b) {
          if (b < q && b >= 0) {
            d.push(B[b]);
            b < s && a--
          }
        });
        Ob(f, f, d);
        a = c.k(a, q - 1);
        tb(a)
      };
      a.A = function (i, f) {
        a.$Elmt = u = b.$GetElement(i);
        O = b.C(u);
        M = b.D(u);
        m = b.G({
          $FillMode: 0,
          $LazyLoading: 1,
          $ArrowKeyNavigation: 1,
          $StartIndex: 0,
          $AutoPlay: 0,
          $Loop: 1,
          $HWA: d,
          $NaviQuitDrag: d,
          $AutoPlaySteps: 1,
          $AutoPlayInterval: 3e3,
          $PauseOnHover: 1,
          $SlideDuration: 500,
          $SlideEasing: g.$OutQuad,
          $MinDragOffsetToSlide: 20,
          $DragRatio: 1,
          $SlideSpacing: 0,
          $UISearchMode: 1,
          $PlayOrientation: 1,
          $DragOrientation: 1
        }, f);
        m.$HWA = m.$HWA && b.Xg();
        if (m.$Idle != e) m.$AutoPlayInterval = m.$Idle;
        if (m.$DisplayPieces != e) m.$Cols = m.$DisplayPieces;
        if (m.$ParkingPosition != e) m.$Align = m.$ParkingPosition;
        t = m.$AutoPlay & 63;
        !m.$UISearchMode;
        U = m.$AutoPlaySteps;
        Y = m.$PauseOnHover;
        Y &= Fb ? 10 : 5;
        qc = m.$AutoPlayInterval;
        Gb = m.$SlideDuration;
        S = m.$PlayOrientation & 3;
        ub = b.Me(b.z(u, "dir")) == "rtl";
        Hb = ub && (S == 1 || m.$DragOrientation & 1);
        qb = Hb ? -1 : 1;
        Bb = m.$SlideshowOptions;
        db = b.G({
          $Class: p
        }, m.$CaptionSliderOptions);
        jb = m.$BulletNavigatorOptions;
        X = m.$ArrowNavigatorOptions;
        J = m.$ThumbnailNavigatorOptions;
        var c = b.Eb(u);
        b.c(c, function (a, d) {
          var c = b.X(a, "u");
          if (c == "loading") R = a;
          else {
            if (c == "slides") {
              x = a;
              b.Rb(x, "margin", 0);
              b.Rb(x, "padding", 0)
            }
            if (c == "navigator") Lb = a;
            if (c == "arrowleft") Zb = a;
            if (c == "arrowright") Wb = a;
            if (c == "thumbnavigator") vb = a;
            if (a.tagName != "STYLE" && a.tagName != "SCRIPT") lc[c || d] = new Rc(a, c == "slides", b.ye(["slides", "thumbnavigator"])[c])
          }
        });
        R && b.nb(R);
        R = R || b.Tb(h);
        yb = b.C(x);
        xb = b.D(x);
        I = m.$SlideWidth || yb;
        H = m.$SlideHeight || xb;
        gb = {
          H: I,
          I: H,
          $Top: 0,
          $Left: 0,
          Sd: "block",
          Ob: "absolute"
        };
        P = m.$SlideSpacing;
        nb = I + P;
        ob = H + P;
        F = S & 1 ? nb : ob;
        Ab = new Pc;
        if (m.$HWA && (!b.bh() || Fb)) Qb = function (a, c, d) {
          b.fh(a, {
            $TranslateX: c,
            $TranslateY: d
          })
        };
        b.z(u, Nb, "1");
        b.Y(x, b.Y(x) || 0);
        b.rb(x, "absolute");
        T = b.gb(x, d);
        b.Rb(T, "pointerEvents", "none");
        b.Ib(T, x);
        b.bb(T, Ab.$Elmt);
        b.Lb(x, "hidden");
        if (Lb && jb) {
          jb.cc = ub;
          uc = new jb.$Class(Lb, jb, O, M);
          Z.push(uc)
        }
        if (X && Zb && Wb) {
          X.cc = ub;
          X.$Loop = m.$Loop;
          wc = new X.$Class(Zb, Wb, X, a);
          Z.push(wc)
        }
        if (vb && J) {
          J.$StartIndex = m.$StartIndex;
          J.$ArrowKeyNavigation = J.$ArrowKeyNavigation || 0;
          J.cc = ub;
          mc = new J.$Class(vb, J, R);
          !J.$NoDrag && b.z(vb, hc, "1");
          Z.push(mc)
        }
        tc(d);
        a.$ScaleSize(O, M);
        Tb();
        tb(v(m.$StartIndex));
        b.Rb(u, "visibility", "visible")
      };
      a.$Destroy = function () {
        t = 0;
        b.$Destroy(w, Z, Dc);
        b.Xb(u)
      };
      b.A(a)
    };
  j.$EVT_CLICK = 21;
  j.$EVT_DRAG_START = 22;
  j.$EVT_DRAG_END = 23;
  j.$EVT_SWIPE_START = 24;
  j.$EVT_SWIPE_END = 25;
  j.$EVT_LOAD_START = 26;
  j.$EVT_LOAD_END = 27;
  j.hf = 28;
  j.$EVT_MOUSE_ENTER = 31;
  j.$EVT_MOUSE_LEAVE = 32;
  j.$EVT_POSITION_CHANGE = 202;
  j.$EVT_PARK = 203;
  j.$EVT_SLIDESHOW_START = 206;
  j.$EVT_SLIDESHOW_END = 207;
  j.$EVT_PROGRESS_CHANGE = 208;
  j.$EVT_STATE_CHANGE = 209
}(window, document, Math, null, true, false)

 //карусель клиентов на мыши
 $(function () {
   $('#carousel').carouFredSel({
     responsive: true,
     items: {
       visible: 1,
       width: 900,
       height: 500
     },
     scroll: {
       duration: 500,
       timeoutDuration: 5500, 
     },
     pagination: '#pager'
   });
 });
 (function ($) {
   "use strict";
   var bindToClass = 'carousel',
     containerWidth = 0,
     scrollWidth = 0,
     posFromLeft = 0, // Stripe position from the left of the screen
     stripePos = 0, // When relative mouse position inside the thumbs stripe
     animated = null,
     $indicator, $carousel, el, $el, ratio, scrollPos, nextMore, prevMore, pos, padding;
   // calculate the thumbs container width
   function calc(e) {
     $el = $(this).find(' > .wrap');
     el = $el[0];
     $carousel = $el.parent();
     $indicator = $el.prev('.indicator');
     nextMore = prevMore = false; // reset
     containerWidth = el.clientWidth;
     scrollWidth = el.scrollWidth; // the "<ul>"" width
     padding = 0.2 * containerWidth; // padding in percentage of the area which the mouse movement affects
     posFromLeft = $el.offset().left;
     stripePos = e.pageX - padding - posFromLeft;
     pos = stripePos / (containerWidth - padding * 2);
     scrollPos = (scrollWidth - containerWidth) * pos;
     if (scrollPos < 0) scrollPos = 0;
     if (scrollPos > (scrollWidth - containerWidth)) scrollPos = scrollWidth - containerWidth;
     $el.animate({
       scrollLeft: scrollPos
     }, 200, 'swing');
     if ($indicator.length) $indicator.css({
       width: (containerWidth / scrollWidth) * 100 + '%',
       left: (scrollPos / scrollWidth) * 100 + '%'
     });
     clearTimeout(animated);
     animated = setTimeout(function () {
       animated = null;
     }, 200);
     return this;
   }
   // move the stripe left or right according to mouse position
   function move(e) {
     // don't move anything until inital movement on 'mouseenter' has finished
     if (animated) return;
     ratio = scrollWidth / containerWidth;
     stripePos = e.pageX - padding - posFromLeft; // the mouse X position, "normalized" to the carousel position
     if (stripePos < 0) stripePos = 0;
     pos = stripePos / (containerWidth - padding * 2); // calculated position between 0 to 1
     // calculate the percentage of the mouse position within the carousel
     scrollPos = (scrollWidth - containerWidth) * pos;
     el.scrollLeft = scrollPos;
     if ($indicator[0] && scrollPos < (scrollWidth - containerWidth)) $indicator[0].style.left = (scrollPos / scrollWidth) * 100 + '%';
     // check if element has reached an edge
     prevMore = el.scrollLeft > 0;
     nextMore = el.scrollLeft < (scrollWidth - containerWidth);
     $carousel.toggleClass('left', prevMore);
     $carousel.toggleClass('right', nextMore);
   }
   $.fn.carousel = function (options) {
     $(document).on('mouseenter.carousel', '.' + bindToClass, calc).on('mousemove.carousel', '.' + bindToClass, move);
   };
   // automatic binding to all elements which have the class that is assigned to "bindToClass"
   $.fn.carousel();
 })(jQuery);

 //эффекты наведе7ния на блог
 $(function () {
   $('.b-blog_unit > div').each(function () {
     var $cfs = $(this);
     $cfs.carouFredSel({
       direction: 'up',
       circular: false,
       infinite: false,
       auto: false,
       scroll: {
         queue: 'last'
       },
       items: {
         visible: 1,
         width: 300,
         height: 200
       }
     });
     $cfs.hover(function () {
       $cfs.trigger('next');
     }, function () {
       $cfs.trigger('prev');
     });
   });
 });

 //плавная прокрутка по якорям
 $(document).ready(function () {
   $("#menu").on("click", "a", function (event) {
     //отменяем стандартную обработку нажатия по ссылке
     event.preventDefault();

     //забираем идентификатор бока с атрибута href
     var id = $(this).attr('href'),

       //узнаем высоту от начала страницы до блока на который ссылается якорь
       top = $(id).offset().top;

     //анимируем переход на расстояние - top за 1500 мс
     $('body,html').animate({
       scrollTop: top
     }, 500);
   });
 });

 //дропдаун меню
 /* When the user clicks on the button, 
 toggle between hiding and showing the dropdown content */
 function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }

 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function (event) {
   if (!event.target.matches('.dropbtn')) {

     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }


 //jsor карусель
 newFunction();

 function newFunction() {
   {
     var jssor_1_SlideoTransitions = [
       [{
         b: -1,
         d: 1,
         o: -0.7
       }],
       [{
         b: 900,
         d: 2000,
         x: -379,
         e: {
           x: 7
         }
       }],
       [{
         b: 900,
         d: 2000,
         x: -379,
         e: {
           x: 7
         }
       }],
       [{
         b: -1,
         d: 1,
         o: -1,
         sX: 2,
         sY: 2
       }, {
         b: 0,
         d: 900,
         x: -171,
         y: -341,
         o: 1,
         sX: -2,
         sY: -2,
         e: {
           x: 3,
           y: 3,
           sX: 3,
           sY: 3
         }
       }, {
         b: 900,
         d: 1600,
         x: -283,
         o: -1,
         e: {
           x: 16
         }
       }]
     ];
     var jssor_1_options = {
       $AutoPlay: 1,
       $SlideDuration: 800,
       $SlideEasing: $Jease$.$OutQuint,
       $CaptionSliderOptions: {
         $Class: $JssorCaptionSlideo$,
         $Transitions: jssor_1_SlideoTransitions
       },
       $ArrowNavigatorOptions: {
         $Class: $JssorArrowNavigator$
       },
       $BulletNavigatorOptions: {
         $Class: $JssorBulletNavigator$
       }
     };
     var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
     /*#region responsive code begin*/
     var MAX_WIDTH = 10000;

     function ScaleSlider() {
       var containerElement = jssor_1_slider.$Elmt.parentNode;
       var containerWidth = containerElement.clientWidth;
       if (containerWidth) {
         var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
         jssor_1_slider.$ScaleWidth(expectedWidth);
       } else {
         window.setTimeout(ScaleSlider, 30);
       }
     }
     ScaleSlider();
     $Jssor$.$AddEvent(window, "load", ScaleSlider);
     $Jssor$.$AddEvent(window, "resize", ScaleSlider);
     $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
   };
 }
},{}]},{},[1])