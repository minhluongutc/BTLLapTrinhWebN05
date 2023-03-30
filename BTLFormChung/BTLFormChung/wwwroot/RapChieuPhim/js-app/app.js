! function(t) {
    var o = {};

    function i(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = t, i.c = o, i.d = function(e, n, t) {
        i.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(n, e) {
        if (1 & e && (n = i(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: n
            }), 2 & e && "string" != typeof n)
            for (var o in n) i.d(t, o, function(e) {
                return n[e]
            }.bind(null, o));
        return t
    }, i.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(n, "a", n), n
    }, i.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, i.p = "", i(i.s = 4)
}([, , , , function(e, n, t) {
    var o, i;
    angular.module("appweb", ["ngMessageFormat", "ngSanitize", "angularFileUpload", "pascalprecht.translate", "angularSpinner", "ngCookies", "ngMd5"]), (o = function(e, n, t) {
        return e.defaults.withCredentials = !0, delete sessionStorage.galaxyCountTime, e = $("html").attr("lang"), $.ajax({
            url: "/language/en.json"
        }).done(function(e) {
            return n.translations("en", e)
        }), $.ajax({
            url: "/language/vi.json"
        }).done(function(e) {
            return n.translations("vi", e)
        }), n.preferredLanguage(e || "vi"), t.setDefaults({
            color: "white",
            position: "fixed"
        })
    }).$inject = ["$httpProvider", "$translateProvider", "usSpinnerConfigProvider"], (i = function(e, n, t) {
        var o, i;
        return n.startSpinner = function() {
            return t.spin("spinner-1"), $("#overlay").show()
        }, n.stopSpinner = function() {
            return t.stop("spinner-1"), $("#overlay").hide()
        }, n.isMobile = !1, (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (n.isMobile = !0), n.showLogin = !0, n.showForget = !1, n.showSuccess = !1, i = 0, (o = function() {
            if (!(60 < i)) return window.ga && window.ga.getAll ? window.ga.getAll().forEach(function(e) {
                return window.gacid = e.get("clientId")
            }) : (i++, setTimeout(o, 500))
        })()
    }).$inject = ["UtitService", "$rootScope", "usSpinnerService"], angular.module("appweb").config(o).run(i), angular.element(document).ready(function() {}), t(5), t(6), t(7), t(8), t(9), t(10), t(11), t(12), t(13), t(14), t(15), t(16), t(17), t(18), t(19), t(20), t(21), t(22), t(23)
}, function(e, n) {
    var t = function(t, o) {
        return this.requestSuccess = function(e, n) {
            return t.stopSpinner(), e(null, n.data)
        }, this.requestError = function(e, n) {
            return t.stopSpinner(), null === n.data && (n.data = {
                message: "Unknown error"
            }), e(n.data, null)
        }, this.request = function(e, n) {
            return null == e && (e = {}), "GET" === (e = _.extend(e, {
                headers: {
                    clientid: window.clientid
                }
            })).method && e.data && (e.url = e.url + "?" + $.param(e.data), delete e.data), t.startSpinner(), o(e).then(this.requestSuccess.bind(this, n), this.requestError.bind(this, n))
        }, null
    };
    t.$inject = ["$rootScope", "$http"], angular.module("appweb").service("ApiService", t)
}, function(e, n) {
    var t = function(a, o, i) {
        var r, c, u, s, l, d, m, p, f;
        return this.pageTracking = function(e, n) {
            var e = c(e, n),
                n = window.dataLayer = window.dataLayer || [],
                t = {
                    Page: {
                        pageType: e
                    }
                };
            return null != a.userInfo && (t.Customer = u(a.userInfo)), "NowShowing" === e && (t.Movies = l(a.movieShowing)), "ComingSoon" === e && (t.Movies = l(a.movieComingSoon)), "Actor" === e && (t.Actor = d(a.people)), "Director" === e && (t.Director = d(a.people)), "MovieBooking" !== e && "MovieDetail" !== e || (t.Movie = s(a.movieDetail)), n.push(t)
        }, this.checkoutTracking = function(e, n, t) {
            var o = window.dataLayer = window.dataLayer || [],
                i = {};
            return null != a.userInfo && (i.Customer = u(a.userInfo)), i.Movie = s(a.movieDetail), "add" === e && (i.event = "addToCart", i.ecommerce = {
                currencyCode: "VND",
                subTotal: a.cartSubTotal,
                add: {
                    products: m(n, t, a.movieDetail.name)
                }
            }), "remove" === e && (i.event = "removeFromCart", i.ecommerce = {
                currencyCode: "VND",
                subTotal: a.cartSubTotal,
                remove: {
                    products: m(n, t, a.movieDetail.name)
                }
            }), o.push(i)
        }, this.purchaseTracking = function(e) {
            var n = window.dataLayer = window.dataLayer || [],
                t = {},
                o = e.cinemaId + "-" + e.vistaTransNumber;
            if (r(o)) return null != a.userInfo && (t.Customer = u(a.userInfo)), t.Movie = {
                title: e.movieName,
                titleID: e.movieId
            }, t.Cinema = {
                cinemaName: e.cinemaName,
                screenName: e.screenNumber
            }, t.ecommerce = {
                purchase: {
                    actionField: {
                        id: o,
                        affiliation: "Galaxy Cinema",
                        revenue: e.price,
                        tax: 0,
                        shipping: 0,
                        coupon: ""
                    },
                    products: f(e)
                }
            }, n.push(t), console.log("purchaseTracking", t, n)
        }, c = function(e, n) {
            var t;
            switch (e) {
                case "trang-chu":
                    t = "Home";
                    break;
                case "phim-dang-chieu":
                    t = "NowShowing";
                    break;
                case "phim-sap-chieu":
                    t = "ComingSoon";
                    break;
                case "dat-ve":
                    t = "MovieBooking";
                    break;
                case "dien-anh":
                    t = "MovieListing";
                    break;
                case "phim":
                    t = "MovieDetail";
                    break;
                case "rap-gia-ve":
                    t = "Cinema";
                    break;
                case "khuyen-mai":
                    t = "Promotion";
                    break;
                case "phim-hay":
                    t = "MovieNews";
                    break;
                case "dien-vien":
                    t = "undefined" !== n ? "Actor" : "ActorListing";
                    break;
                case "dao-dien":
                    t = "undefined" !== n ? "Director" : "DirectorListing";
                    break;
                case "binh-luan-phim":
                    t = "undefined" !== n ? "MovieReview" : "MovieReviewListing";
                    break;
                case "movie-blog":
                    t = "undefined" !== n ? "MovieBlog" : "MovieBlogListing"
            }
            return t
        }, u = function(e) {
            var n = {
                customerId: e.memberId,
                customerGender: e.gender,
                customerCity: e.city
            };
            return null !== e.balanceList ? (n.customerPoint = e.balanceList[0].pointsRemaining, n.customerLifePoint = e.balanceList[0].lifetimePointsBalanceDisplay) : (n.customerPoint = 0, n.customerLifePoint = 0), n
        }, l = function(e) {
            for (var n, t = [], o = 0, i = e.length; o < i; o++) n = e[o], t.push({
                title: n.name,
                titleID: n.id
            });
            return t
        }, s = function(e) {
            var n, t, o, i, a, r, c, u, s, l, d, m, p, f, g, h, v, b, w, y, S, k, C = {};
            if (C.title = e.name, C.titleID = e.id, null != e.metadata.country && (C.country = e.metadata.country[0].name), y = new Date(e.startdate), C.releaseDate = y.getFullYear() + "/" + (y.getMonth() + 1) + "/" + y.getDate(), null != e.metadata.category) {
                for (c = [], u = 0, m = (h = e.metadata.category).length; u < m; u++) r = h[u], c.push(r.name);
                C.genre = c
            }
            if (null != e.metadata.cast) {
                for (o = [], s = 0, p = (v = e.metadata.cast).length; s < p; s++) t = v[s], n = new Date(t.birthday), o.push({
                    name: t.name,
                    birthDate: n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate()
                });
                C.cast = o
            }
            if (null != e.metadata.director) {
                for (a = [], l = 0, f = (b = e.metadata.director).length; l < f; l++) i = b[l], n = new Date(i.birthday), a.push({
                    name: i.name,
                    birthDate: n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate()
                });
                C.director = a
            }
            if (null != e.metadata.studio) {
                for (k = [], d = 0, g = (w = e.metadata.studio).length; d < g; d++) S = w[d], k.push(S.name);
                C.studio = k
            }
            return C
        }, d = function(e) {
            var n = new Date(e.birthday);
            return {
                name: e.name,
                birthDate: n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate(),
                bornCountry: e.country
            }
        }, m = function(e, n, t) {
            var o = "",
                i = "";
            return "ticket" === e ? (o = t + "/" + n.name + " - " + n.description, i = n.ticketTypeCode) : "concession" === e && (o = t + "/" + n.description + " - " + n.extendedDescription, i = n.vistaConcessionId), t = {
                name: o,
                id: i,
                price: n.displayPrice,
                brand: "",
                category: e,
                variant: "",
                quantity: 1
            }, (o = []).push(t), o
        }, f = function(e) {
            for (var n, t, o, i, a, r, c = e.movieName, u = e.cinemaName, s = [], l = e.tickets, d = 0, m = l.length; d < m; d++) i = {
                name: u + "/" + c + "/" + (r = l[d]).description,
                id: r.ticketTypeCode,
                price: r.priceInCents,
                brand: "",
                category: "ticket",
                variant: "",
                quantity: r.totalItem,
                ticketType: r.description,
                seats: p(e.seats)
            }, s.push(i);
            for (t = 0, o = (a = e.concessions).length; t < o; t++) i = {
                name: u + "/" + c + "/" + (n = a[t]).description,
                id: n.itemId,
                price: n.priceInCents,
                brand: "",
                category: "concession",
                variant: "",
                quantity: n.totalItem
            }, s.push(i);
            return s
        }, p = function(e) {
            for (var n, t = [], o = 0, i = e.length; o < i; o++) n = {
                rowID: (n = e[o]).substr(0, 1),
                seatNumber: n.substr(1, n.length)
            }, t.push(n);
            return t
        }, r = function(e) {
            var n, t;
            return e = i.createHash(e), t = !1, "undefined" !== (n = o.get("glx_tx")) && n === e || (o.put("glx_tx", e), t = !0), t
        }, null
    };
    t.$inject = ["$rootScope", "$cookies", "md5"], angular.module("appweb").service("GTMService", t)
}, function(e, n) {
    var t = function(o, e) {
        var n = this;
        return n.lang = function() {
            return $("html").attr("lang")
        }, n.apply = function(e) {
            return setTimeout(function() {
                return e.$apply()
            }, 1)
        }, n.notify = function(e, n, t) {
            return o.$broadcast("show-dialog", {
                message: n,
                title: t
            }, e)
        }, n.formatSessionDate = function(e) {
            var n = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
                t = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
                o = new Date(e.replace(".000Z", ""));
            return {
                dayOfWeekLabel: n[o.getDay()],
                dayOfWeekKey: t[o.getDay()],
                showDate: o.getDate() + "/" + (o.getMonth() + 1) + "/" + o.getFullYear(),
                showTime: o.getHours() + ":" + o.getMinutes(),
                originDate: e
            }
        }, n.getHrefSearch = function(e) {
            var n = "phim";
            switch (e.modelType) {
                case "post":
                    switch (e.type) {
                        case "review":
                            n = "binh-luan-phim";
                            break;
                        case "promotion":
                            n = "khuyen-mai"
                    }
                    break;
                case "metadata":
                    switch (e.type) {
                        case "cast":
                            n = "dien-vien";
                            break;
                        case "directore":
                            n = "dao-dien"
                    }
                    break;
                case "cinema":
                    n = "rap-gia-ve"
            }
            return "/" + n + "/" + e.slug
        }, n.disableRedirectBooking = function() {
            return localStorage.setItem("disableRedirectBooking", !0)
        }, n.resetRedirectBooking = function() {
            return localStorage.removeItem("disableRedirectBooking")
        }, n.isDisableRedirectBooking = function() {
            return localStorage.getItem("disableRedirectBooking") || !1
        }, n.setBookingTicketUrl = function(e) {
            if ("undefined" != typeof Storage) return localStorage.setItem("bookingTicketUrl", e)
        }, n.redirectBookingTicketUrl = function() {
            var e;
            if ("undefined" != typeof Storage && (e = localStorage.getItem("bookingTicketUrl"))) return localStorage.removeItem("bookingTicketUrl"), window.location.href = e
        }, n.removeBookingTicketUrl = function() {
            if ("undefined" != typeof Storage && localStorage.getItem("bookingTicketUrl")) return localStorage.removeItem("bookingTicketUrl")
        }, n.createUUID = function() {
            var t = (new Date).getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var n = (t + 16 * Math.random()) % 16 | 0;
                return t = Math.floor(t / 16), ("x" === e ? n : 3 & n | 8).toString(16)
            })
        }, null
    };
    t.$inject = ["$rootScope", "$http"], angular.module("appweb").service("UtitService", t)
}, function(e, n) {
    var t = function(e, t, n, o) {
        return e.request({
            url: "/api/movie/showAndComming",
            method: "GET",
            data: {}
        }, function(e, n) {
            if (!e) return t.item = n
        }), t.openLinkVIG = function(e) {
            return "taptap" === e ? window.open("https://taptap.com.vn") : "android" === e ? window.open("https://play.google.com/store/apps/details?id=com.vui.taptapandroid&hl=en") : "ios" === e ? window.open("https://apps.apple.com/vn/app/taptap-by-vui-vietnam/id1487758263") : void 0
        }
    };
    t.$inject = ["ApiService", "$scope", "UtitService", "$rootScope"], angular.module("appweb").controller("navbarController", t)
}, function(e, n) {
    var t = function(n, u, t, s, o, a) {
        var l, e, i, r = null;
        u.init = function(e, n, t, o, i, a, r, c) {
            return u.slug = e, u.slugQuery = n, u.userSessionId = t, s.movieShowing = o, s.movieComingSoon = i, s.movieDetail = a, s.people = r, c && (u.transactionInfo = c), l()
        }, e = function() {
            var e, n, o, i;
            try {
                return i = window.popupService, o = i.client, (e = new i.MemberData).setPlatform(""), n = {
                    token: a.get("sessionId"),
                    "x-api-key": window.grpApiKey
                }, (r = o.join(e, n, function(e, n) {})).on("data", function(e) {
                    var n = e.toObject().msgId,
                        n = new i.MessageData([n]),
                        t = {
                            token: a.get("sessionId"),
                            "x-api-key": window.grpApiKey
                        };
                    return o.received(n, t, function(e) {}), "undefined" != typeof Storage && localStorage.setItem("gp-popup", JSON.stringify(e.toObject())), $("#gp-service-modal").modal()
                }), r.on("error", function(e) {
                    return console.error("[Error] Stream e", e)
                })
            } catch (e) {
                return console.error("[Error] Join e", e)
            }
        };
        try {
            e()
        } catch (e) {
            i = e, console.log(i)
        }
        return $("#gp-service-modal").on("shown.bs.modal", function() {
            var e;
            if ("undefined" != typeof Storage) {
                e = null;
                try {
                    e = JSON.parse(localStorage.getItem("gp-popup"))
                } catch (e) {
                    i = e, console.log(i)
                }
                if (e) return u.gpPopup = e, t.apply(u)
            }
        }), u.closeGPModal = function() {
            return $("#gp-service-modal").modal("hide")
        }, u.clickButton = function(e) {
            var n;
            return 1 === e.action ? $("#gp-service-modal").modal("hide") : 2 === (n = e.action) || 3 === n || 4 === n ? (window.open(e.webLink), $("#gp-service-modal").modal("hide")) : void 0
        }, u.logout = function() {
            return n.request({
                url: "/api/auth/logout",
                method: "POST",
                data: {}
            }, function(e, n) {
                return e ? t.notify(null, e.message) : (s.userInfo = {}, s.$broadcast("$logoutSuccess", n), 1 === window.location.pathname.indexOf("thanh-vien") && (window.location.href = "/"), 1 === window.location.pathname.indexOf("book-ticket") ? window.location.reload() : void 0)
            })
        }, u.openLogin = function() {
            return s.$broadcast("$openLogin"), $("#login-modal").modal("show")
        }, l = function() {
            var e = {
                url: "/api/user/info",
                method: "GET",
                data: {
                    userSessionId: u.userSessionId
                }
            };
            return n.request(e, function(e, n) {
                if (e || (s.userInfo = n), s.$broadcast("getUserInfo", n), o.pageTracking(u.slug, u.slugQuery), u.transactionInfo) return o.purchaseTracking(u.transactionInfo)
            })
        }
    };
    t.$inject = ["ApiService", "$scope", "UtitService", "$rootScope", "GTMService", "$cookies"], angular.module("appweb").controller("headerController", t)
}, function(e, n) {
    var t = function(e, n, t, o) {
        return n.closeModel = function() {
            return $("#popupPolicies").modal("hide")
        }
    };
    t.$inject = ["ApiService", "$scope", "$rootScope", "$location"], angular.module("appweb").controller("policiesPopupController", t)
}, function(e, n) {
    var t = function(e, t, n, o) {
        return t.info, n.$on("$openPolicy", function() {
            return e.request({
                url: "/api/policy/info",
                method: "GET"
            }, function(e, n) {
                return t.info = n
            })
        })
    };
    t.$inject = ["ApiService", "$scope", "$rootScope", "$location"], angular.module("appweb").controller("policyController", t)
}, function(e, n) {
    var t = function(n, t, o) {
        return t.getHref = o.getHrefSearch, t.$watch("keyword", function(e) {
            if (t.dataSearch = [], e) return n.request({
                url: "/api/search/find",
                method: "GET",
                data: {
                    keyword: e,
                    limit: 10
                }
            }, function(e, n) {
                return e ? o.notify(null, e.message) : n ? t.dataSearch = n : void 0
            })
        })
    };
    t.$inject = ["ApiService", "$scope", "UtitService"], angular.module("appweb").controller("searchController", t)
}, function(e, n) {
    var t = function(t, n, f, o, i, a) {
        var e, r, c, u, s = void 0,
            l = void 0,
            d = "";
        return f.activeTab = "byMovie", f.flagShowBlockTicket = !1, f.clickTabNavTicket = function(e) {
                return f.activeTab = e, a(function() {
                    return d === e ? (f.flagShowBlockTicket = !1, void(d = "")) : (d = e, f.flagShowBlockTicket = !0)
                }, 500)
            }, r = function(e) {
                var t = [];
                return _.map(e, function(n) {
                    return _.map(n.sessions, function(e) {
                        return e.name = e.showTime + ", " + i("translate")(n.version.toUpperCase()) + " - " + i("translate")(n.caption), t.push(e)
                    })
                }), t
            }, f.$watch("activeTab", function(e) {
                if (void 0 !== e) {
                    switch (e) {
                        case "byMovie":
                            f.cinemaConfig.options = [], f.dateConfig.options = [];
                            break;
                        case "byDate":
                            f.cinemaConfig.options = [], f.movieConfig.options = [];
                            break;
                        case "byCinema":
                            f.movieConfig.options = [], f.dateConfig.options = []
                    }
                    return f[e].currentValue = "all", f.sessionConfig.options = []
                }
            }), f.byMovie = {
                class: "btn-select-light",
                currentValue: "all",
                options: [],
                placeholder: {
                    name: "Chọn phim",
                    id: "all"
                },
                keyValue: "id",
                keyName: "name",
                disablePlaceholder: !0,
                onChange: function(e) {
                    if (void 0 !== e) return s = e.slug, u(e.id)
                }
            }, f.byDate = {
                class: "btn-select-light",
                currentValue: "all",
                options: [],
                placeholder: {
                    name: "Chọn ngày",
                    id: "all"
                },
                keyValue: "id",
                keyName: "name",
                disablePlaceholder: !0,
                onChange: function(e) {
                    if (void 0 !== e) return f.getCinemaByDate(e)
                }
            }, f.byCinema = {
                class: "btn-select-light",
                currentValue: "all",
                options: [],
                placeholder: {
                    name: "Chọn rạp",
                    id: "all"
                },
                keyValue: "id",
                keyName: "name",
                disablePlaceholder: !0,
                onChange: function(e) {
                    if (void 0 !== e) return c(e.code)
                }
            }, f.movieConfig = {
                class: "btn-select-light",
                currentValue: "all",
                options: [],
                placeholder: {
                    name: "Chọn phim",
                    id: "all"
                },
                keyValue: "id",
                keyName: "name",
                disablePlaceholder: !0,
                onChange: function(e) {
                    var n, t;
                    if (void 0 !== e)
                        if (s = e.slug, "byCinema" === f.activeTab) f.setDates(e.dates);
                        else if ((n = _.find(f.byDate.options, function(e) {
                            return e.id === f.byDate.currentValue
                        })) && (t = n.showDate, n = _.find(e.dates, function(e) {
                            return e.showDate === t
                        }))) return f.sessionConfig.options = r(n.bundles)
                }
            }, f.cinemaConfig = {
                class: "btn-select-light",
                currentValue: "all",
                options: [],
                placeholder: {
                    name: "Chọn rạp",
                    id: "all"
                },
                keyValue: "id",
                keyName: "name",
                disablePlaceholder: !0,
                onChange: function(e) {
                    if (void 0 !== e) return f.movieConfig.options = e.movies, f.setDates(e.dates)
                }
            }, f.dateConfig = {
                class: "btn-select-light",
                currentValue: "all",
                options: [],
                placeholder: {
                    name: "Chọn ngày",
                    id: "all"
                },
                keyValue: "id",
                keyName: "name",
                disablePlaceholder: !0,
                onChange: function(e) {
                    if (void 0 !== e) return f.sessionConfig.options = r(e.data)
                }
            }, f.sessionConfig = {
                class: "btn-select-light",
                currentValue: "all",
                options: [],
                placeholder: {
                    name: "Chọn suất",
                    sessionId: "all"
                },
                keyValue: "sessionId",
                keyName: "name",
                disablePlaceholder: !0,
                onChange: function(e) {
                    if (void 0 !== e) return l = e, f.triggerBuy ? f.buyTicket() : void 0
                }
            }, u = function(e) {
                if (void 0 !== e) return n.request({
                    url: "/api/session/movie/" + e,
                    method: "GET",
                    data: {}
                }, function(e, n) {
                    var t, o, i, a, r, c, u, s, l, d, m, p;
                    if (e) return console.error(e);
                    for (a = [], r = 0, s = n.length; r < s; r++) {
                        if (t = !1, 0 < (o = n[r]).dates.length)
                            for (c = 0, l = (m = o.dates).length; c < l; c++)
                                if (0 < (i = m[c]).bundles.length)
                                    for (u = 0, d = (p = i.bundles).length; u < d; u++) 0 < p[u].sessions.length && (t = !0);
                        t && a.push(o)
                    }
                    return f.cinemaConfig.options = a
                })
            }, c = function(e) {
                if (void 0 !== e) return n.request({
                    url: "/api/session/cinema/" + e,
                    method: "GET",
                    data: {}
                }, function(e, n) {
                    return e ? console.error(e) : f.movieConfig.options = n
                })
            }, f.getCinemaByDate = function(e) {
                e = {
                    url: "/api/session/date",
                    method: "GET",
                    data: {
                        movieIds: e.movieIds,
                        cinemaIds: e.cinemaIds
                    }
                };
                return n.request(e, function(e, n) {
                    return e ? console.error(e) : f.cinemaConfig.options = n
                })
            }, f.buyTicket = function() {
                var e, n;
                return void 0 === l ? alert("Bạn chưa chọn suất chiếu") : (e = "/book-ticket/" + s + "?cinemaId=" + l.cinemaId + "&sessionId=" + l.sessionId, null != (n = t.userInfo) && n.memberId ? location.href = e : (o.setBookingTicketUrl(e), void t.$broadcast("open-login", null, {
                    enableSkip: !1
                })))
            }, f.setDates = function(e, n) {
                var t = [];
                return _.map(e, function(e) {
                    return t.push({
                        id: e.showDate,
                        name: e.dayOfWeekLabel + ", " + e.showDate,
                        data: e.bundles
                    })
                }), f.dateConfig.options = t
            }, e = function(e, n) {
                return e ? o.notify(null, e.message) : (f.items = n, f.byMovie.options = n.movies, f.byDate.options = n.dates, f.byCinema.options = n.cinemas, f.reviewId && (e = _.findWhere(n.movies, {
                    reviewId: f.reviewId
                }), !_.isEmpty(e)) ? f.byMovie.currentValue = e.id : void 0)
            },
            function() {
                return n.request({
                    url: "/api/booking/list",
                    method: "GET",
                    data: {}
                }, e)
            }()
    };
    t.$inject = ["$rootScope", "ApiService", "$scope", "UtitService", "$filter", "$timeout"], angular.module("appweb").controller("quickBuyTicket", t)
}, function(e, n) {
    var t = function(n, t, o) {
        return t.init = function(e) {
            return t.item = e, t.item.point = Math.round(100 * t.item.point) / 100
        }, t.showRating = function(e) {
            return null == e && (e = !0), console.log(t.item.activeRating), t.item.activeRating = e
        }, t.submit = function(e) {
            return t.showRating(!1), e = {
                url: "/api/post/rating/" + t.item.id,
                method: "GET",
                data: {
                    point: e
                }
            }, n.request(e, function(e, n) {
                return e ? o.notify(null, e.message) : (console.log(e, n), t.item.point = Math.round(100 * n.point) / 100, t.item.totalVotes = n.totalVotes)
            })
        }
    };
    t.$inject = ["ApiService", "$scope", "UtitService"], angular.module("appweb").controller("postController", t)
}, function(e, n) {
    var t = function(e, n) {};
    t.$inject = ["$scope", "$rootScope"], angular.module("appweb").controller("contentMovieController", t)
}, function(e, n) {
    var t = function(t, n, o, i, e) {
        var a;
        return o.isSubmit = !1, o.enableSkip = !1, o.callbackBuyTicket = void 0, o.userNotActive = !1, o.openLogin = !1, i.$on("$openLogin", function() {
                return o.openLogin = !0
            }), o.openForgetPass = function() {
                return $(".modal").modal("hide"), setTimeout(function() {
                    return $("#forgetpass-modal").modal("show")
                }, 500)
            }, o.closeModel = function() {
                return $("#login-modal").modal("hide")
            }, o.openModel = function() {
                return $("#login-modal").modal("show")
            },
            function() {
                if ($("#login-modal").on("hidden.bs.modal", function() {
                        return t.removeBookingTicketUrl(), o.enableSkip = !1, _.isFunction(o.callbackBuyTicket) && o.callbackBuyTicket(), o.callbackBuyTicket = void 0, o.$apply()
                    }), i.$on("open-login", function(e, n, t) {
                        return t.enableSkip && (o.callbackBuyTicket = n), o.enableSkip = t.enableSkip, i.$broadcast("$openLogin"), o.openModel()
                    }), -1 === e.absUrl().indexOf("#tab_login_1") && -1 === e.absUrl().indexOf("qac=login") || (i.$broadcast("$openLogin"), o.openModel(), setTimeout(function() {
                        return angular.element(document.querySelector("#tab_login_2")).removeClass("active"), angular.element(document.querySelector("#tab_login_1")).addClass("active"), angular.element(document.querySelector("#a_tab_login_2")).parent().removeClass("active"), angular.element(document.querySelector("#a_tab_login_1")).parent().addClass("active")
                    }, 250)), -1 !== e.absUrl().indexOf("#tab_login_2") || -1 !== e.absUrl().indexOf("qac=register")) return i.$broadcast("$openLogin"), o.openModel(), setTimeout(function() {
                    return angular.element(document.querySelector("#tab_login_2")).addClass("active"), angular.element(document.querySelector("#tab_login_1")).removeClass("active"), angular.element(document.querySelector("#a_tab_login_2")).parent().addClass("active"), angular.element(document.querySelector("#a_tab_login_1")).parent().removeClass("active")
                }, 250)
            }(), o.userInfo = {
                email: "",
                password: "",
                fullName: "",
                mobielPhone: "",
                confirmPassword: "",
                city: "",
                suburb: "",
                remember: !1
            }, o.submit = function() {
                var e;
                if (o.message = null, !o.isSubmit) return o.isSubmit = !0, o.userNotActive = !1, e = {
                    url: "/api/auth/login",
                    method: "POST",
                    data: o.userInfo
                }, n.request(e, a)
            }, a = function(e, n) {
                return o.isSubmit = !1, e ? (4001 === e.code && (o.userNotActive = !0), void(o.message = e.message)) : (i.userInfo = n, i.$broadcast("$loginSuccess", n), o.closeModel(), 0 < window.location.href.indexOf("book-ticket") || 0 < window.location.href.indexOf("thanh-toan-goi-dang-ky") ? window.location.reload() : t.redirectBookingTicketUrl())
            }, o.reSendActiveCode = function() {
                var e = {
                    url: "/api/auth/reSendActiveCode",
                    method: "POST",
                    data: o.userInfo
                };
                return n.request(e, function(e, n) {
                    return o.message = n.message
                })
            }
    };
    t.$inject = ["UtitService", "ApiService", "$scope", "$rootScope", "$location"], angular.module("appweb").controller("loginController", t)
}, function(e, n) {
    var t = function(a, r, e, t) {
        var c;
        return r.message = "", r.isSubmit = !1, r.isCountdownRefresh = !0, r.captchaConfig = {
            type: "register",
            refesh: function() {
                return console.log("init Refesh")
            }
        }, r.openPolicy = function() {
            return e.$broadcast("$openPolicy")
        }, r.user = {
            email: "",
            password: "",
            fullName: "",
            mobilePhone: "",
            confirmPassword: "",
            suburb: "",
            dateOfBirth: "",
            platform: "",
            coordinate: ""
        }, r.genderSelect = {
            currentValue: "3d",
            options: [{
                id: "Male",
                name: "Nam"
            }, {
                id: "Female",
                name: "Nữ"
            }],
            disablePlaceholder: !0,
            placeholder: {
                name: "Chọn giới tính",
                id: "3d"
            },
            keyValue: "id",
            keyName: "name"
        }, r.registerStep = "register", r.otpCountDown = 0, r.otpCountDownTime = 0, r.otpCountDownTimer = null, r.otpSender = "", r.$watch("genderSelect.currentValue", function(e) {
            return r.user.gender = e
        }), c = {
            url: "/api/city/find",
            method: "GET",
            data: {}
        }, a.request(c, function(e, n) {
            return e ? t.notify(null, e.message) : (r.citySelect.options = n, (e = _.findWhere(n, {
                name: r.user.city
            })) ? (r.citySelect.currentValue = e.id, r.districtSelect.currentValue = r.user.suburb) : void 0)
        }), r.submit = function() {
            var e, t;
            if (r.message = null, e = r.user.code, r.user.code) {
                if (t = {
                        fullName: r.user.fullName,
                        email: r.user.email,
                        mobilePhone: r.user.mobilePhone,
                        password: r.user.password,
                        confirmPassword: r.user.confirmPassword,
                        gender: r.user.gender,
                        dateOfBirth: r.user.dateOfBirth,
                        platform: "website",
                        coordinate: localStorage.getItem("geoCoords") || ""
                    }, "zalo" === r.otpSender) return c = {
                    url: "/api/v2/mobile/sms/validate-otp",
                    method: "POST",
                    data: {
                        phone: r.user.mobilePhone,
                        pinCode: e
                    }
                }, void a.request(c, function(e, n) {
                    if (!e && 0 === n.response.code) return c = {
                        url: "/api/auth/register",
                        method: "POST",
                        data: t
                    }, a.request(c, function(e, n) {
                        if (r.isSubmit = !1, !e && 0 === n.code) return r.message = "", r.user = {
                            email: "",
                            password: "",
                            fullName: "",
                            mobilePhone: "",
                            confirmPassword: "",
                            city: "",
                            suburb: "",
                            dateOfBirth: "",
                            address: ""
                        }, r.closeModel(), $(".btn-select-input.date").datepicker("setDate", null), $("#success-modal").modal("show");
                        r.message = e.message
                    });
                    r.message = e.message
                });
                window.confirmationResult ? window.confirmationResult.confirm(e).then(function(e) {
                    return c = {
                        url: "/api/auth/register",
                        method: "POST",
                        data: t
                    }, a.request(c, function(e, n) {
                        if (r.isSubmit = !1, !e && 0 === n.response.code) return r.message = "", r.user = {
                            email: "",
                            password: "",
                            fullName: "",
                            mobilePhone: "",
                            confirmPassword: "",
                            city: "",
                            suburb: "",
                            dateOfBirth: "",
                            address: ""
                        }, r.closeModel(), $(".btn-select-input.date").datepicker("setDate", null), $("#success-modal").modal("show");
                        r.message = e.message
                    })
                }).catch(function(e) {
                    r.message = "Mã OTP không hợp lệ, vui lòng thử lại", r.isSubmit = !1
                }) : r.message = "Captcha hết hiệu lực, vui lòng thử lại"
            } else r.message = "Chưa nhập code OTP!"
        }, r.submitOTP = function() {
            var e, i;
            if (r.message = null, !r.isSubmit) {
                if (r.isSubmit = !0, r.user.mobilePhone.match(/^(\+84|0)(\d{9}|\d{10})$/i)) return r.user.gender && "3d" !== r.user.gender ? r.user.dateOfBirth ? r.user.password.length < 8 ? (r.message = "Vui lòng mật khẩu trên 8 ký tự.", void(r.isSubmit = !1)) : r.user.password !== r.user.confirmPassword ? (r.message = "Mật khẩu xác nhận không khớp", void(r.isSubmit = !1)) : (i = "+84" + r.user.mobilePhone, r.user.mobilePhone.includes("+84") && (i = r.user.mobilePhone), e = moment(r.user.dateOfBirth, "DD/MM/YYYY").format("YYYY-MM-DD"), e = {
                    fullName: r.user.fullName,
                    email: r.user.email,
                    phone: r.user.mobilePhone,
                    password: r.user.password,
                    gender: r.user.gender,
                    birthDay: e,
                    platform: "website"
                }, c = {
                    url: "/api/v2/mobile/user/send-otp",
                    method: "POST",
                    data: e
                }, a.request(c, function(e, n) {
                    var t, o;
                    if (r.isSubmit = !1, !e && 0 === n.response.code) return r.otpSender = null != n && null != (o = n.data) ? o.sender : void 0, "zalo" === r.otpSender ? (r.registerStep = "otp", r.otpCountDownTime = n.data.countTime, r.otpCountDown = r.otpCountDownTime, void(r.otpCountDownTimer = setInterval(function() {
                        if (r.otpCountDown--, r.$apply(), r.otpCountDown <= 0) return clearInterval(r.otpCountDownTimer)
                    }, 1e3))) : (firebase.apps.length ? firebase.app() : firebase.initializeApp(window.firebaseConfig), $("#recaptcha-container").remove(), $("<div>", {
                        id: "recaptcha-container"
                    }).appendTo($("body")), t = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
                        size: "invisible",
                        callback: function(e) {
                            return {}
                        },
                        "expired-callback": function() {
                            return {}
                        }
                    }), firebase.auth().signInWithPhoneNumber(i, t).then(function(e) {
                        return window.confirmationResult = e, t && t.clear(), r.registerStep = "otp", r.otpCountDownTime = n.data.countTime, r.otpCountDown = r.otpCountDownTime, r.otpCountDownTimer = setInterval(function() {
                            if (r.otpCountDown--, r.$apply(), r.otpCountDown <= 0) return clearInterval(r.otpCountDownTimer)
                        }, 1e3)
                    }).catch(function(e) {
                        r.message = "Hệ thống không thể gửi OTP đến số điện thoại đăng ký, vui lòng thử lại", r.isSubmit = !1
                    }));
                    r.message = e.data.message
                })) : (r.message = "Chưa chọn ngày sinh!", void(r.isSubmit = !1)) : (r.message = "Chưa chọn giới tính!", void(r.isSubmit = !1));
                r.message = "Số điện thoại chưa đúng!", void(r.isSubmit = !1)
            }
        }, r.recallOTP = function() {
            var o = "+84" + window.registerUser.phone;
            return window.registerUser.phone.includes("+84") && (o = window.registerUser.phone), "zalo" === r.otpSender ? (r.isSubmit = !0, c = {
                url: "/api/v2/mobile/sms/send-otp",
                method: "POST",
                data: {
                    phone: window.registerUser.phone
                }
            }, void a.request(c, function(e, n) {
                if (r.isSubmit = !1, !e && 0 === n.response.code) return r.otpCountDown = r.otpCountDownTime, r.otpCountDownTimer = setInterval(function() {
                    if (r.otpCountDown--, r.$apply(), r.otpCountDown <= 0) return clearInterval(r.otpCountDownTimer)
                }, 1e3);
                r.message = e.data.message
            })) : (firebase.apps.length ? firebase.app() : firebase.initializeApp(window.firebaseConfig), c = {
                url: "/api/v2/mobile/user/send-otp",
                method: "POST",
                data: window.registerUser
            }, a.request(c, function(e, n) {
                var t;
                if (r.isSubmit = !1, !e) return 0 === n.response.code ? (firebase.apps.length ? firebase.app() : firebase.initializeApp(window.firebaseConfig), $("#recaptcha-container").remove(), $("<div>", {
                    id: "recaptcha-container"
                }).appendTo($("body")), t = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
                    size: "invisible",
                    callback: function(e) {
                        return {}
                    },
                    "expired-callback": function() {
                        return {}
                    }
                }), firebase.auth().signInWithPhoneNumber(o, t).then(function(e) {
                    return window.confirmationResult = e, r.otpCountDown = n.data.countTime, t && t.clear(), r.otpCountDownTimer = setInterval(function() {
                        if (r.otpCountDown--, r.$apply(), r.otpCountDown <= 0) return clearInterval(r.otpCountDownTimer)
                    }, 1e3)
                }).catch(function(e) {
                    r.message = "Hệ thống không thể gửi OTP đến số điện thoại đăng ký, vui lòng thử lại", r.isSubmit = !1
                })) : void 0;
                r.message = e.data.message
            }))
        }, r.closeModelSuccess = function() {
            return $("#success-modal").modal("hide")
        }, navigator.geolocation.getCurrentPosition(function(e) {
            return localStorage.setItem("geoCoords", e.coords.latitude + "," + e.coords.longitude)
        }, function(e) {
            return localStorage.setItem("geoCoords", "")
        })
    };
    t.$inject = ["ApiService", "$scope", "$rootScope", "UtitService"], angular.module("appweb").controller("registerController", t)
}, function(e, n) {
    var t = function(n, t, e) {
        return t.message = "", t.isSubmit = !1, t.captchaConfig = {
            type: "forgetPass",
            refesh: function() {
                return console.log("init Refesh")
            }
        }, t.item = {
            email: "",
            captcha: ""
        }, t.closeModelForget = function() {
            return $("#forgetpass-modal").modal("hide")
        }, t.submit = function() {
            var e;
            if (t.message = null, !t.isSubmit) return t.isSubmit = !0, e = {
                url: "/api/auth/forgetPassword",
                method: "POST",
                data: t.item
            }, n.request(e, function(e, n) {
                return t.isSubmit = !1, t.captchaConfig.refesh(), e ? (t.message = e.message, void(t.item.captcha = "")) : (t.message = n.message, console.log(n))
            })
        }
    };
    t.$inject = ["ApiService", "$scope", "$rootScope"], angular.module("appweb").controller("forgetPassController", t)
}, function(e, n) {
    var t = function(e, n) {
        return {
            restrict: "E",
            scope: {
                model: "=ngModel"
            },
            template: "<a class=\"btn btn-select {{model.class ||'login location'}}\">\n\n   <span class=\"btn-select-value\">{{items[curentIndex][model.keyName] || model.placeholder[model.keyName] | translate}}</span>\n   <span class=\"btn-select-arrow\"></span>\n   <select ng-change='onChange()' ng-model=\"curentIndex\">\n     <option ng-if='!model.disablePlaceholder'\n       ng-selected='model.placeholder[model.keyValue] == model.currentValue'\n       ng-value='-1'>\n       {{model.placeholder[model.keyName] | translate}}\n     </option>\n     <option ng-repeat='item in items' \n       ng-selected='item[model.keyValue] == model.currentValue'\n       ng-value='{{$index}}'>\n       {{item[model.keyName] | translate}}\n     </option>\n   </select>\n </a>",
            link: function(t, e, n) {
                return t.curentIndex = -1, t.model.changeCurrentIndex = function(e) {
                    return t.curentIndex = e
                }, t.onChange = function() {
                    var e = (-1 < parseInt(t.curentIndex) ? t.items[t.curentIndex] : t.model.placeholder)[t.model.keyValue];
                    if (t.model.currentValue = e, _.isFunction(t.model.gotoHref)) return t.model.gotoHref(e)
                }, t.$watch("model", function(e) {
                    var n;
                    if (void 0 !== e) return t.items = e.options, (n = {})[e.keyValue] = e.currentValue.toString(), _.isFunction(t.model.onChange) && (e = _.findWhere(t.model.options, n), t.model.onChange(e)), e = _.findIndex(t.items, n), t.curentIndex = e
                }, !0)
            }
        }
    };
    t.$inject = ["$rootScope", "$document"], angular.module("appweb").directive("galaxySelect", t)
}, function(e, n) {
    var t = function(o, i) {
        return {
            restrict: "E",
            scope: {
                config: "="
            },
            template: '<div class="captcha-wrap">\n  <div ng-bind-html="captchaImage" class="captcha"></div>\n  <div class="captcha-refesh">\n    <a ng-click="refeshCaptcha()"><i class="icon-loading"></i></a>\n  </div>\n</div>',
            link: function(t, e, n) {
                return t.refeshCaptcha = function() {
                    var e = {
                        url: "/api/auth/captcha/" + ((null != (e = t.config) ? e.type : void 0) || "support"),
                        method: "GET",
                        data: {}
                    };
                    return o.request(e, function(e, n) {
                        return t.captchaImage = i.trustAsHtml(n)
                    })
                }, t.$watch("config", function(e) {
                    if (void 0 !== e) return t.config.refesh = t.refeshCaptcha, t.refeshCaptcha()
                }, !0)
            }
        }
    };
    t.$inject = ["ApiService", "$sce"], angular.module("appweb").directive("galaxyCaptcha", t)
}, function(e, n) {
    var t = function(e, n) {
        return {
            restrict: "E",
            scope: {
                model: "=ngModel",
                onChange: "=ngOnChange"
            },
            template: '<a class="btn btn-select login location datepicker">\n   <input type="text" id=\'galaxy-datepicker\' name="" class="btn-select-input date" placeholder="Chọn ngày (dd/mm/yyyy)" readonly="readonly"/>\n   <span class="select-calendar">\n     <i class="icon-calendar"></i>\n   </span>\n</a>',
            link: function(i, a, e) {
                var n = function(n) {
                    var t, e, o = $(a).find(".datepicker");
                    if (o.datepicker({
                            format: "dd/mm/yyyy",
                            autoclose: !0,
                            constrainInput: !1
                        }), o.off("changeDate"), o.on("changeDate", function(e) {
                            var n = moment(e.date).format("DD/MM/YYYY");
                            return i.model = n, i.onChange && i.onChange(n), setTimeout(function() {
                                return i.$apply(), document.getElementById("galaxy-datepicker").value = n
                            }, 1)
                        }), (t = $(a).find(".btn-select-input.date")).keyup(e = function() {
                            var e = t.val();
                            if (moment(e, "DD/MM/YYYY", !0).isValid()) return n = e, o.datepicker("setDate", e)
                        }), t.focus(e), n) return o.datepicker("setDate", n)
                };
                return i.$watch("model", function(e) {
                    return void 0 === e && (e = moment(new Date).format("DD/MM/YYYY")), n(e)
                })
            }
        }
    };
    t.$inject = ["$rootScope", "$document"], angular.module("appweb").directive("galaxyDatepicker", t)
}, function(e, n) {
    var t = function(e, n) {
        return {
            restrict: "E",
            scope: {
                title: "=",
                trailer: "=ngTrailer"
            },
            template: "<a class='btn primary animated fadeInUp' ng-click='submit()'> trailer</a>",
            link: function(n, e, t) {
                return n.submit = function() {
                    var e = "<iframe width='100%', height='100%', src='" + n.trailer.replace("watch?v=", "embed/") + "?autoplay=1&controls=1&showinfo=1', frameborder='0', allowfullscreen=''/>";
                    return $("#trailerModal").modal("show"), $("#galaxyVideo").html(e), console.log(n.title), $("#trailerModal .modal-title").text(n.title)
                }, $("#trailerModal").on("hide.bs.modal", function() {
                    return $("#galaxyVideo").empty()
                })
            }
        }
    };
    t.$inject = ["$rootScope", "$document"], angular.module("appweb").directive("galaxyWatchTrailer", t)
}, function(e, n) {
    var t = function(e, n, o, i, a) {
        return {
            restrict: "E",
            scope: {
                slug: "=ngMovieSlug"
            },
            template: '<form class="search-form" ng-submit=\'submit()\'>\n  <div class="input-append">\n    <input\n    placeholder="{{\'Tìm tên phim, diễn viên\' | translate}}..."\n    class="search-box"\n    type=\'text\'\n    autocomplete=\'off\'\n    ng-model=\'searchKey\'\n    ng-model-options=\'{ updateOn: "default blur", debounce: { default: 500, blur: 0 } }\',\n    ng-change=\'search(searchKey)\'\n    />\n    <button type="submit" class="search-btn"><i class="icon-search"></i></button>\n    <ul id="search-list" class="search-list" ng-if=\'dataSearch && dataSearch.items && dataSearch.items.length>0\'>\n      <li ng-repeat="item in dataSearch.items | limitTo:10">\n        <a href=\'{{getHref(item)}}\'>{{item.name}}</a>\n      </li>\n    </ul>\n  </div>\n</form>',
            link: function(t, e, n) {
                return t.dataSearch = [], t.searchKey = "", t.submit = function() {
                    return location.href = "/tim-kiem?keyword=" + t.searchKey
                }, t.getHref = a.getHrefSearch, t.search = function(e) {
                    return _.isEmpty(e) ? t.dataSearch = [] : o.request({
                        url: "/api/search/find",
                        method: "GET",
                        data: {
                            keyword: e,
                            limit: 10
                        }
                    }, function(e, n) {
                        if (!e) return i(function() {
                            if (n) return t.dataSearch = n
                        }, 1)
                    })
                }
            }
        }
    };
    t.$inject = ["$rootScope", "$document", "ApiService", "$timeout", "UtitService"], angular.module("appweb").directive("galaxySearchBar", t)
}]);