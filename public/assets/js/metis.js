/*
 * metismenu - v2.7.0
 * A jQuery menu plugin
 * https://github.com/onokumus/metismenu#readme
 *
 * Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
 * Under MIT License
 */

! function(a, b) {
    if ("function" == typeof define && define.amd) define(["jquery"], b);
    else if ("undefined" != typeof exports) b(require("jquery"));
    else {
        var c = {
            exports: {}
        };
        b(a.jquery), a.metisMenu = c.exports
    }
}(this, function(a) {
    "use strict";

    function b(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    var d = (b(a), "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }),
        e = function(a) {
            function b() {
                return {
                    bindType: f.end,
                    delegateType: f.end,
                    handle: function(b) {
                        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
                    }
                }
            }

            function c() {
                if (window.QUnit) return !1;
                var a = document.createElement("mm");
                for (var b in g)
                    if (void 0 !== a.style[b]) return {
                        end: g[b]
                    };
                return !1
            }

            function d(b) {
                var c = this,
                    d = !1;
                return a(this).one(h.TRANSITION_END, function() {
                    d = !0
                }), setTimeout(function() {
                    d || h.triggerTransitionEnd(c)
                }, b), this
            }

            function e() {
                f = c(), a.fn.emulateTransitionEnd = d, h.supportsTransitionEnd() && (a.event.special[h.TRANSITION_END] = b())
            }
            var f = !1,
                g = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                h = {
                    TRANSITION_END: "mmTransitionEnd",
                    triggerTransitionEnd: function(b) {
                        a(b).trigger(f.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(f)
                    }
                };
            return e(), h
        }(jQuery);
    (function(a) {
        var b = "metisMenu",
            f = "metisMenu",
            g = "." + f,
            h = ".data-api",
            i = a.fn[b],
            j = 350,
            k = {
                toggle: !0,
                preventDefault: !0,
                activeClass: "active",
                collapseClass: "collapse",
                collapseInClass: "in",
                collapsingClass: "collapsing",
                triggerElement: "a",
                parentTrigger: "li",
                subMenu: "ul"
            },
            l = {
                SHOW: "show" + g,
                SHOWN: "shown" + g,
                HIDE: "hide" + g,
                HIDDEN: "hidden" + g,
                CLICK_DATA_API: "click" + g + h
            },
            m = function() {
                function b(a, d) {
                    c(this, b), this._element = a, this._config = this._getConfig(d), this._transitioning = null, this.init()
                }
                return b.prototype.init = function() {
                    var b = this;
                    a(this._element).find(this._config.parentTrigger + "." + this._config.activeClass).has(this._config.subMenu).children(this._config.subMenu).attr("aria-expanded", !0).addClass(this._config.collapseClass + " " + this._config.collapseInClass), a(this._element).find(this._config.parentTrigger).not("." + this._config.activeClass).has(this._config.subMenu).children(this._config.subMenu).attr("aria-expanded", !1).addClass(this._config.collapseClass), a(this._element).find(this._config.parentTrigger).has(this._config.subMenu).children(this._config.triggerElement).on(l.CLICK_DATA_API, function(c) {
                        var d = a(this),
                            e = d.parent(b._config.parentTrigger),
                            f = e.siblings(b._config.parentTrigger).children(b._config.triggerElement),
                            g = e.children(b._config.subMenu);
                        b._config.preventDefault && c.preventDefault(), "true" !== d.attr("aria-disabled") && (e.hasClass(b._config.activeClass) ? (d.attr("aria-expanded", !1), b._hide(g)) : (b._show(g), d.attr("aria-expanded", !0), b._config.toggle && f.attr("aria-expanded", !1)), b._config.onTransitionStart && b._config.onTransitionStart(c))
                    })
                }, b.prototype._show = function(b) {
                    if (!this._transitioning && !a(b).hasClass(this._config.collapsingClass)) {
                        var c = this,
                            d = a(b),
                            f = a.Event(l.SHOW);
                        if (d.trigger(f), !f.isDefaultPrevented()) {
                            d.parent(this._config.parentTrigger).addClass(this._config.activeClass), this._config.toggle && this._hide(d.parent(this._config.parentTrigger).siblings().children(this._config.subMenu + "." + this._config.collapseInClass).attr("aria-expanded", !1)), d.removeClass(this._config.collapseClass).addClass(this._config.collapsingClass).height(0), this.setTransitioning(!0);
                            var g = function() {
                                d.removeClass(c._config.collapsingClass).addClass(c._config.collapseClass + " " + c._config.collapseInClass).height("").attr("aria-expanded", !0), c.setTransitioning(!1), d.trigger(l.SHOWN)
                            };
                            return e.supportsTransitionEnd() ? void d.height(d[0].scrollHeight).one(e.TRANSITION_END, g).emulateTransitionEnd(j) : void g()
                        }
                    }
                }, b.prototype._hide = function(b) {
                    if (!this._transitioning && a(b).hasClass(this._config.collapseInClass)) {
                        var c = this,
                            d = a(b),
                            f = a.Event(l.HIDE);
                        if (d.trigger(f), !f.isDefaultPrevented()) {
                            d.parent(this._config.parentTrigger).removeClass(this._config.activeClass), d.height(d.height())[0].offsetHeight, d.addClass(this._config.collapsingClass).removeClass(this._config.collapseClass).removeClass(this._config.collapseInClass), this.setTransitioning(!0);
                            var g = function() {
                                c._transitioning && c._config.onTransitionEnd && c._config.onTransitionEnd(), c.setTransitioning(!1), d.trigger(l.HIDDEN), d.removeClass(c._config.collapsingClass).addClass(c._config.collapseClass).attr("aria-expanded", !1)
                            };
                            return e.supportsTransitionEnd() ? void(0 == d.height() || "none" == d.css("display") ? g() : d.height(0).one(e.TRANSITION_END, g).emulateTransitionEnd(j)) : void g()
                        }
                    }
                }, b.prototype.setTransitioning = function(a) {
                    this._transitioning = a
                }, b.prototype.dispose = function() {
                    a.removeData(this._element, f), a(this._element).find(this._config.parentTrigger).has(this._config.subMenu).children(this._config.triggerElement).off("click"), this._transitioning = null, this._config = null, this._element = null
                }, b.prototype._getConfig = function(b) {
                    return b = a.extend({}, k, b)
                }, b._jQueryInterface = function(c) {
                    return this.each(function() {
                        var e = a(this),
                            g = e.data(f),
                            h = a.extend({}, k, e.data(), "object" === ("undefined" == typeof c ? "undefined" : d(c)) && c);
                        if (!g && /dispose/.test(c) && this.dispose(), g || (g = new b(this, h), e.data(f, g)), "string" == typeof c) {
                            if (void 0 === g[c]) throw new Error('No method named "' + c + '"');
                            g[c]()
                        }
                    })
                }, b
            }();
        return a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function() {
            return a.fn[b] = i, m._jQueryInterface
        }, m
    })(jQuery)
});
//# sourceMappingURL=metisMenu.js.map