function slider(t) {
    document.write("<ul class='pposts'>");
    for (var e = 0; e < t.feed.entry.length; e++) {
        for (var i = t.feed.entry[e], s = 0; s < i.link.length; s++)
            if ("alternate" == i.link[s].rel) {
                var n = i.link[s].href;
                break
            }
        var a = i.title.$t,
            o = i.content.$t.replace(/<.+?>/g, "").substring(0, 120) + "...";
        img = i.media$thumbnail.url.replace("s72-c", "s900-c").replace("default", "hqdefault"), document.write("<li><div class='imgtag backdefaut'><a href=" + n + "><img src=" + img + "></img></a></div><div class='containe wow fadeInUp'><h3><a href=" + n + ">" + a + "</a></h3><p class='psummary'>" + o + "</p><a class='waves-effect waves-light btn rounded' href=" + n + ">اقرأ المزيد</a></div></li>")
    }
    document.write("</ul>")
}

function scrollToTop() {
    verticalOffset = "undefined" != typeof verticalOffset ? verticalOffset : 0, element = $("body"), offset = element.offset(), offsetTop = offset.top, $("html, body").animate({
        scrollTop: offsetTop
    }, 600, "linear")
}
$(document).ready(function () {
        var s, a;
        "/" != $("#blogid").attr("href") && $("body").html('<div id="no-active">القالب غير مرخص , لتشغيله راسلنا<br /><a href="https://www.facebook.com/webponto">هنا</a></div>'), "/" == $("#blogid").attr("href") && ($(document).ready(function () {
            $("#related-posts").each(function () {
                var d = $(this),
                    t = $(this).find(".related-l").text().replace(/\r?\n|\r/g, "");
                $.ajax({
                    url: "/feeds/posts/default/-/" + t + "?alt=json-in-script&max-results=3",
                    type: "get",
                    dataType: "jsonp",
                    success: function (t) {
                        var e = "";
                        e += "<div class='multi-post'>";
                        for (var i = "", s = 0; s < t.feed.entry.length; s++) {
                            for (var n = 0; n < t.feed.entry[s].link.length; n++)
                                if ("alternate" == t.feed.entry[s].link[n].rel) {
                                    i = t.feed.entry[s].link[n].href;
                                    break
                                }
                            var a = t.feed.entry[s].title.$t,
                                o = (t.feed.entry[s].author[0].name.$t, t.feed.entry[s].thr$total.$t, t.feed.entry[s].published.$t, t.feed.entry[s].content.$t);
                            if ($("<div>").html(o), void 0 !== t.feed.entry[s].category) var r = t.feed.entry[s].category[0].term;
                            if (-1 !== o.indexOf("<img") || -1 !== o.indexOf("youtube.com/embed")) var c = t.feed.entry[s].media$thumbnail.url;
                            if (void 0 !== c) {
                                if (c.match("default.jpg")) var l = c.replace("/default.jpg", "/mqdefault.jpg");
                                c.match("s72-c") && (l = c.replace("s72-c", "s480"))
                            }
                            e += '<li class=\'mulpost z-depth-2\'><div class="post-thumbnail"><img src="' + l + "\"/></div><div class='label-content'><a href='/search/label/" + r + "' class='waves-effect waves-light btn'>" + r + "</a><br /><h3 class='mpost-title truncate'><a href='" + i + "'>" + a + "</a></h3></div></li>"
                        }
                        e += "</div>", d.html(e)
                    }
                })
            })
        }), $(document).ready(function (e) {
            e(".card__share > a").on("click", function (t) {
                t.preventDefault(), e(this).parent().find("div").toggleClass("card__social--active"), e(this).toggleClass("share-expanded")
            })
        }), $(document).ready(function () {
            $(".parallax").parallax(), $(".button-collapse").sideNav(), $(".modal").modal(), $("#modal1").modal("open"), $("#modal1").modal("close"), $(".dowload-mat").appendTo("#dowload-ill")
        }), $(".sidebar-wrapper .PopularPosts ul li").addClass("first z-depth-4"), $(".sidebar-wrapper h2").wrap("<div class='widget-title'></div>"), $(".image").wrap("<div class='featimg'></div>"), $(".featimg").each(function () {
            $(this).parent().find("h3").before($(this))
        }), jQuery(document).ready(function (t) {
            t(".post-summary h3, .post-summary p").wrapAll('<div class="featcont" />')
        }), $(function () {
            $(".parallax-container").appendTo("#cover-post")
        }), (a = jQuery)(".sidebar-wrapper .PopularPosts img").attr("src", function (t, e) {
            return e.replace("/default.jpg", "/mqdefault.jpg")
        }).attr("src", function (t, e) {
            return e.replace("w72-h72", "w720-h720")
        }), a(".sidebar-wrapper .PopularPosts .widget-content ul li").each(function () {
            var t = a(this),
                e = a(this).find(".item-title a"),
                i = (e.attr("href"), a(this).find(".item-thumbnail a img").attr("src")),
                s = a(this).find(".item-thumbnail a"),
                n = a(this).find(".item-thumbnail");
            s.css("background-image", "url(" + i + ")").empty(), n.prependTo(t), a.get(e.attr("href"), function (t) {
                e.parent()
            }, "html")
        }), (s = jQuery).fn.moderntube = function () {
            return this.each(function () {
                var e = s(this),
                    i = e.find('iframe[src*="youtube.com"]');
                i.attr("height", "").attr("width", "");
                var t = 480 * s(this).width() / 853;
                i.attr("height", t).attr("width", "100%"), s(window).bind("resize load", function () {
                    var t = 480 * e.width() / 853;
                    i.attr("height", t).attr("width", "100%")
                })
            })
        }, $(".post-body").moderntube(), $(document).ready(function () {
            $(".main-wrapper, .sidebar-wrapper").theiaStickySidebar({
                additionalMarginTop: 30,
                additionalMarginBottom: 30
            })
        }), $(document).ready(function () {
            $(".item .post-footer").theiaStickySidebar({
                additionalMarginTop: 10,
                additionalMarginBottom: 10
            })
        }))
    }), $(document).ready(function () {
        var t, e = (t = (t = $(".quickedit").attr("href")).substring(35, 54)).substring(0, 1),
            i = t.substring(1, 2),
            s = t.substring(2, 3),
            n = t.substring(3, 4),
            a = t.substring(4, 5),
            o = t.substring(5, 6),
            r = t.substring(6, 7),
            c = t.substring(7, 8),
            l = t.substring(8, 9),
            d = t.substring(9, 10),
            u = t.substring(10, 11),
            h = t.substring(11, 12),
            p = t.substring(12, 13),
            f = t.substring(13, 16),
            m = t.substring(16, 19),
            g = "20" + d + "4208" + i + "94886" + u + o + "09" + c + "43" + p + "54" + r + "90" + a + "3536" + l + "8712" + e + "329" + s + "246" + h + "04253" + e + "53044" + n + "2235" + f + "21252" + c + "005" + r + "25" + e + "310" + s + "02" + o + "10" + m + "70" + u + "72575" + f + "8100" + p + "5342" + n + "8585" + l + "72411" + d + "00" + h + n + s + u + m + f + p + h + l + s + "1555";
        $("#activeblog").text() != g && $("body").html('<div id="no-active">القالب غير مرخص , لتشغيله راسلنا<br /><a href="https://www.facebook.com/webponto/">من هنا</a></div>')
    }), $(document).ready(function () {
        "" == $(".quickedit").attr("href") && (window.location.href = "https://www.facebook.com/webponto/"), "" == $(".quickedit").html() && (window.location.href = "https://www.facebook.com/webponto/");
        var t, e = (t = (t = $(".quickedit").attr("href")).substring(35, 54)).substring(0, 1),
            i = t.substring(1, 2),
            s = t.substring(2, 3),
            n = t.substring(3, 4),
            a = t.substring(4, 5),
            o = t.substring(5, 6),
            r = t.substring(6, 7),
            c = t.substring(7, 8),
            l = t.substring(8, 9),
            d = t.substring(9, 10),
            u = t.substring(10, 11),
            h = t.substring(11, 12),
            p = t.substring(12, 13),
            f = t.substring(13, 16),
            m = t.substring(16, 19),
            g = "20" + d + "4208" + i + "94886" + u + o + "09" + c + "43" + p + "54" + r + "90" + a + "3536" + l + "8712" + e + "329" + s + "246" + h + "04253" + e + "53044" + n + "2235" + f + "21252" + c + "005" + r + "25" + e + "310" + s + "02" + o + "10" + m + "70" + u + "72575" + f + "8100" + p + "5342" + n + "8585" + l + "72411" + d + "00" + h + n + s + u + m + f + p + h + l + s + "1555";
        $("#activeblog").text() != g && $("body").html('<div id="no-active">القالب غير مرخص , لتشغيله راسلنا<br /><a href="https://www.facebook.com/webponto/">من هنا</a></div>')
    }), $(document).ready(function () {
        $(".item-thumbnail img").attr("src", function (t, e) {
            return e.replace("w72-h72", "w720-h720")
        }), $(".item-thumbnail img").attr("src", function (t, e) {
            return e.replace("/default.jpg", "/mqdefault.jpg")
        }), $(".post-thunb img").attr("src", function (t, e) {
            return e.replace("s72", "s720")
        }), $(".post-thunb img").attr("src", function (t, e) {
            return e.replace("/default.jpg", "/mqdefault.jpg")
        })
    }), $(function () {
        $("#top-circle").on("click", scrollToTop)
    }), $(document).ready(function () {
        $(".timeago").timeago();
        var i = [".post-body"];
        i = i.join(",");
        var t = $(i).css("font-size");
        $(".resetFont").click(function () {
            $(i).css("font-size", t)
        }), $(".increaseFont").click(function () {
            var t = $(i).css("font-size"),
                e = parseFloat(t, 10);
            return $(i).css("font-size", 1.2 * e), !1
        }), $(".decreaseFont").click(function () {
            var t = $(i).css("font-size"),
                e = parseFloat(t, 10);
            return $(i).css("font-size", .8 * e), !1
        })
    }), $(window).bind("load", function () {
        $(".newsticker .widget-content , .post-desc").removeClass("hided"), $(".slider-loading").remove()
    }),
    function (n) {
        n.fn.jflickrfeed = function (l, e) {
            var t = (l = n.extend(!0, {
                    flickrbase: "//api.flickr.com/services/feeds/",
                    feedapi: "photos_public.gne",
                    limit: 20,
                    qstrings: {
                        lang: "en-us",
                        format: "json",
                        jsoncallback: "?"
                    },
                    cleanDescription: !0,
                    useTemplate: !0,
                    itemTemplate: "",
                    itemCallback: function () {}
                }, l)).flickrbase + l.feedapi + "?",
                i = !0;
            for (var s in l.qstrings) i || (t += "&"), t += s + "=" + l.qstrings[s], i = !1;
            return n(this).each(function () {
                var r = n(this),
                    c = this;
                n.getJSON(t, function (t) {
                    n.each(t.items, function (t, e) {
                        if (t < l.limit) {
                            if (l.cleanDescription) {
                                var i = /<p>(.*?)<\/p>/g,
                                    s = e.description;
                                i.test(s) && (e.description = s.match(i)[2], null != e.description && (e.description = e.description.replace("<p>", "").replace("</p>", "")))
                            }
                            if (e.image_s = e.media.m.replace("_m", "_s"), e.image_t = e.media.m.replace("_m", "_t"), e.image_m = e.media.m.replace("_m", "_m"), e.image = e.media.m.replace("_m", ""), e.image_b = e.media.m.replace("_m", "_b"), delete e.media, l.useTemplate) {
                                var n = l.itemTemplate;
                                for (var a in e) {
                                    var o = new RegExp("{{" + a + "}}", "g");
                                    n = n.replace(o, e[a])
                                }
                                r.append(n)
                            }
                            l.itemCallback.call(c, e)
                        }
                    }), n.isFunction(e) && e.call(c, t)
                })
            })
        }
    }(jQuery), $(document).ready(function () {
        $(".sidebar-wrapper .widget,.page-footer .widget").each(function () {
            var t = $(this),
                e = (t.find("h2"), t.find(".widget-content")),
                i = e.text(),
                s = i.split("/");
            i.match(/\/flickr/g) && (t.addClass("fd-widget"), e.html('<div class="flickr-photos"></div>'), e.find(".flickr-photos").jflickrfeed({
                limit: s[0],
                qstrings: {
                    id: s[1]
                },
                itemTemplate: '<a title="{{title}}" target="_blank" href="{{link}}"><img class="z-depth-4" src="{{image_s}}" /></a>'
            }))
        })
    }),
    function (a, t, e, i) {
        function o(t, e) {
            this.element = t, this.$el = a(t), this.options = a.extend({}, s, e), this._defaults = s, this._name = r, this.moveInterval, this.moving = this.paused = this.state = 0, (this.$el.is("ul") || this.$el.is("ol")) && this.init()
        }
        var r = "newsTicker",
            s = {
                row_height: 20,
                max_rows: 3,
                speed: 400,
                duration: 2500,
                direction: "up",
                autostart: 1,
                pauseOnHover: 1,
                nextButton: null,
                prevButton: null,
                startButton: null,
                stopButton: null,
                hasMoved: function () {},
                movingUp: function () {},
                movingDown: function () {},
                start: function () {},
                stop: function () {},
                pause: function () {},
                unpause: function () {}
            };
        o.prototype = {
            init: function () {
                this.$el.height(this.options.row_height * this.options.max_rows).css({
                    overflow: "hidden"
                }), this.checkSpeed(), this.options.nextButton && void 0 !== this.options.nextButton[0] && this.options.nextButton.click(function (t) {
                    this.moveNext(), this.resetInterval()
                }.bind(this)), this.options.prevButton && void 0 !== this.options.prevButton[0] && this.options.prevButton.click(function (t) {
                    this.movePrev(), this.resetInterval()
                }.bind(this)), this.options.stopButton && void 0 !== this.options.stopButton[0] && this.options.stopButton.click(function (t) {
                    this.stop()
                }.bind(this)), this.options.startButton && void 0 !== this.options.startButton[0] && this.options.startButton.click(function (t) {
                    this.start()
                }.bind(this)), this.options.pauseOnHover && this.$el.hover(function () {
                    this.state && this.pause()
                }.bind(this), function () {
                    this.state && this.unpause()
                }.bind(this)), this.options.autostart && this.start()
            },
            start: function () {
                this.state || (this.state = 1, this.resetInterval(), this.options.start())
            },
            stop: function () {
                this.state && (clearInterval(this.moveInterval), this.state = 0, this.options.stop())
            },
            resetInterval: function () {
                this.state && (clearInterval(this.moveInterval), this.moveInterval = setInterval(function () {
                    this.move()
                }.bind(this), this.options.duration))
            },
            move: function () {
                this.paused || this.moveNext()
            },
            moveNext: function () {
                "down" === this.options.direction ? this.moveDown() : "up" === this.options.direction && this.moveUp()
            },
            movePrev: function () {
                "down" === this.options.direction ? this.moveUp() : "up" === this.options.direction && this.moveDown()
            },
            pause: function () {
                this.paused || (this.paused = 1), this.options.pause()
            },
            unpause: function () {
                this.paused && (this.paused = 0), this.options.unpause()
            },
            moveDown: function () {
                this.moving || (this.moving = 1, this.options.movingDown(), this.$el.children("li:last").detach().prependTo(this.$el).css("marginTop", "-" + this.options.row_height + "px").animate({
                    marginTop: "0px"
                }, this.options.speed, function () {
                    this.moving = 0, this.options.hasMoved()
                }.bind(this)))
            },
            moveUp: function () {
                if (!this.moving) {
                    this.moving = 1, this.options.movingUp();
                    var t = this.$el.children("li:first");
                    t.animate({
                        marginTop: "-" + this.options.row_height + "px"
                    }, this.options.speed, function () {
                        t.detach().css("marginTop", "0").appendTo(this.$el), this.moving = 0, this.options.hasMoved()
                    }.bind(this))
                }
            },
            updateOption: function (t, e) {
                void 0 !== this.options[t] && (this.options[t] = e, "duration" == t || "speed" == t) && (this.checkSpeed(), this.resetInterval())
            },
            add: function (t) {
                this.$el.append(a("<li>").html(t))
            },
            getState: function () {
                return paused ? 2 : this.state
            },
            checkSpeed: function () {
                this.options.duration < this.options.speed + 25 && (this.options.speed = this.options.duration - 25)
            },
            destroy: function () {
                this._destroy()
            }
        }, a.fn[r] = function (s) {
            var n = arguments;
            return this.each(function () {
                var t = a(this),
                    e = a.data(this, "plugin_" + r),
                    i = "object" == typeof s && s;
                e || t.data("plugin_" + r, e = new o(this, i)), "string" == typeof s && e[s].apply(e, Array.prototype.slice.call(n, 1))
            })
        }
    }(jQuery, window, document), $(document).ready(function () {
        if (1 === $("#blogid").length) {
            var t, e = (t = (t = $("#blogid").attr("value")).substring(0, 19)).substring(0, 1),
                i = t.substring(1, 2),
                s = t.substring(2, 3),
                n = t.substring(3, 4),
                a = t.substring(4, 5),
                o = t.substring(5, 6),
                r = t.substring(6, 7),
                c = t.substring(7, 8),
                l = t.substring(8, 9),
                d = t.substring(9, 10),
                u = t.substring(10, 11),
                h = t.substring(11, 12),
                p = t.substring(12, 13),
                f = t.substring(13, 16),
                m = t.substring(16, 19),
                g = "20" + d + "4208" + i + "94886" + u + o + "09" + c + "43" + p + "54" + r + "90" + a + "3536" + l + "8712" + e + "329" + s + "246" + h + "04253" + e + "53044" + n + "2235" + f + "21252" + c + "005" + r + "25" + e + "310" + s + "02" + o + "10" + m + "70" + u + "72575" + f + "8100" + p + "5342" + n + "8585" + l + "72411" + d + "00" + h + n + s + u + m + f + p + h + l + s + "1555";
            $("#activeblog").text() != g && $("body").html('<div id="no-active">القالب غير مرخص , لتشغيله راسلنا<br /><a href="https://www.facebook.com/webponto/">من هنا</a></div>')
        }
        $(".followmess").appendTo("#followmess"), $(".ticker-items a").addClass("waves-effect waves-light btn"), $(".news-ticker .widget").each(function () {
            var r = $(this),
                t = r.find(".widget-content").text().split("/"),
                e = t[0],
                i = t[1],
                s = t[2],
                n = Math.floor(Math.random() * i + 1);
            if (e.match("showing")) {
                if (i.match("Smashing")) var a = "/feeds/posts/default?alt=json-in-script&max-results=" + s;
                else a = i.match("random") ? "/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=" + n + "&max-results=" + s : "/feeds/posts/default/-/" + i + "?alt=json-in-script&max-results=" + s;
                $.ajax({
                    url: a,
                    type: "get",
                    dataType: "jsonp",
                    success: function (t) {
                        for (var e = "", i = '<ul class="news-post">', s = 0; s < t.feed.entry.length; s++) {
                            for (var n = 0; n < t.feed.entry[s].link.length; n++)
                                if ("alternate" == t.feed.entry[s].link[n].rel) {
                                    e = t.feed.entry[s].link[n].href;
                                    break
                                }
                            var a = t.feed.entry[s].title.$t,
                                o = t.feed.entry[s].category[0].term;
                            i += '<li class="news-labels"><a class="waves-effect waves-light btn" href=\'/search/label/' + o + "' class='news-tag'>" + o + "</a><a class='news-title' href=" + e + ">" + a + "</a></li>"
                        }
                        i += "</ul>", r.find(".widget-content").html(i), $(".newsticker ul").newsTicker({
                            row_height: 55,
                            speed: 1e3,
                            prevButton: $("#prev-button"),
                            nextButton: $("#next-button"),
                            stopButton: $("#stop-button"),
                            startButton: $("#start-button")
                        })
                    }
                })
            }
        })
    }), $(window).scroll(function () {
        10 < $(this).scrollTop() ? ($("#headerWrap nav, nav ul a").css("height", "64px"), $("#headerWrap nav, nav ul a").css("line-height", "64px"), $("#Header1_headerimg").css("height", "60px"), $("#headerWrap nav").addClass("backdefaut"), $("#headerWrap nav").removeClass("transparent")) : ($("#headerWrap nav, nav ul a").css("height", "74px"), $("#headerWrap nav, nav ul a").css("line-height", "74px"), $("#Header1_headerimg").css("height", "70px"), $("#headerWrap nav").removeClass("backdefaut"), $("#headerWrap nav").addClass("transparent"))
    });
