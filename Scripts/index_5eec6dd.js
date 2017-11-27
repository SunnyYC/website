/*
function browserRedirect() {
	var e, o = $(".pc_banner").css("display");
	e = $("block" == o ? ".showPic .banner2_box .banner_video" : ".showPic .iphone_banner2_video");
	var i = (document.getElementById("a1"), $(window).width(), $(window).height(), navigator.userAgent.toLowerCase()),
		t = "ipad" == i.match(/ipad/i),
		d = "iphone os" == i.match(/iphone os/i),
		n = "midp" == i.match(/midp/i),
		s = "rv:1.2.3.4" == i.match(/rv:1.2.3.4/i),
		c = "ucweb" == i.match(/ucweb/i),
		a = "android" == i.match(/android/i),
		h = "windows ce" == i.match(/windows ce/i),
		r = "windows mobile" == i.match(/windows mobile/i);
	t || d || n || s || c || a || h || r ? (console.log(11), e.click(function() {
		var e = {
				f: "http://oss.dudubashi.com/home/video/dudubus20160912.mp4",
				c: 0,
				b: 1,
				e: 1
			},
			o = ["http://oss.dudubashi.com/home/video/dudubus20160912.mp4"],
			i = {
				bgcolor: "#FFF",
				allowFullScreen: !0,
				allowScriptAccess: "always",
				wmode: "transparent"
			};
		CKobject.embed("ckplayer/ckplayer.swf", "a1", "ckplayer_a1", "900", "514", !0, e, o, i), $("#a1").css({
			width: "100%",
			height: "100%"
		}), $("#a1 video").css({
			width: "100%",
			height: "100%"
		});
		var t = screen.width;
		$(".video_box").css({
			width: t,
			height: 180 * t / 320
		}), $(".video_box").show(), $(".video_box span").show(), $(".showPic .video").hide(), CKobject.getObjectById("ckplayer_a1").videoPlay(), $("body,html").css({
			overflow: "hidden"
		}), windowMask.show(), set_video_center(), $(window).resize(function() {
			set_video_center()
		})
	}), $(".video_box span").click(function() {
		$(window).width();
		CKobject.getObjectById("ckplayer_a1").quitFullScreen(), CKobject.getObjectById("ckplayer_a1").videoPause(), $(".video_box").hide(), $(".video_box span").hide(), $(".showPic .video").show(), $("body,html").css({
			overflow: "auto",
			"overflow-x": "hidden",
			width: "100%"
		}), windowMask.hide()
	})) : (e.click(function() {
		var e = {
				f: "http://oss.dudubashi.com/home/video/dudubus20160912.mp4",
				c: 0,
				b: 1,
				e: 1
			},
			o = ["http://oss.dudubashi.com/home/video/dudubus20160912.mp4"],
			i = {
				bgcolor: "#FFF",
				allowFullScreen: !0,
				allowScriptAccess: "always",
				wmode: "transparent"
			};
		CKobject.embed("ckplayer/ckplayer.swf", "a1", "ckplayer_a1", "900", "514", !0, e, o, i), $("#a1").css({
			width: "100%",
			height: "100%"
		}), $("#a1 video").css({
			width: "100%",
			height: "100%"
		}), $(".video_box").show(), $(".video_box span").show(), $(".showPic .video").hide(), CKobject.getObjectById("ckplayer_a1").videoPlay(), $("#a1 video").css({
			width: "900px",
			height: "514px"
		}), $("body,html").css({
			overflow: "hidden"
		}), windowMask.show(), set_video_center(), $(window).resize(function() {
			set_video_center()
		})
	}), $(".video_box span").click(function() {
		$(".video_box").hide(), $(".video_box span").hide(), $(".showPic .video").show(), CKobject.getObjectById("ckplayer_a1").quitFullScreen(), CKobject.getObjectById("ckplayer_a1").videoPause(), $("body,html").css({
			overflow: "auto",
			width: "100%"
		}), windowMask.hide()
	}))
}
*/
$(".nav ul #nav_li1").addClass("active").siblings().removeClass("active"), $("#my_Carousel").carousel("cycle");
var swiper = new Swiper(".swiper-container", {
	autoplay: 5e3,
	loop: !0,
	autoplayDisableOnInteraction: !1
});
$("#bannerdown_id").click(function() {
	$("html,body").animate({
		scrollTop: $(go_jamp).offset().top
	}, 500)
}), $("#bannerdown_sm_id").click(function() {
	$("html,body").animate({
		scrollTop: $(go_jamp).offset().top
	}, 500)
});
var win_width = screen.width,
	win_height = screen.height,
	windowMask = function(e) {
		function o() {
			d(), n.show()
		}

		function i() {
			e(window).off("resize", t), n.hide()
		}

		function t() {
			var e = document.documentElement.clientHeight ? document.documentElement : document.body,
				o = e.scrollHeight > e.clientHeight ? e.scrollHeight : e.clientHeight,
				i = e.scrollWidth > e.clientWidth ? e.scrollWidth : e.clientWidth;
			n.css({
				height: o,
				width: i
			})
		}

		function d() {
			t(), e(window).on("resize", t)
		}
		var n = '<div class="mask" unselectable="on" style="display:none;background:#000;filter:alpha(opacity=80);opacity:0.8;left:0px;top:0px;position:fixed;height:100%;width:100%;overflow:hidden;z-index:10000;"></div>';
		return n = e(n), e("body").append(n), {
			show: o,
			hide: i
		}
	}(jQuery),
	lessThenIE_9 = function() {
		var e = navigator.userAgent.indexOf("MSIE") > -1,
			o = e ? /\d+/.exec(navigator.userAgent.split(";")[1]) : "no ie";
		return 9 > o
	}();
lessThenIE_9 && $("body").css({
	overflow: "auto"
});
/*
var set_video_center = function() {
	var e = $(".video_box").width(),
		o = $(".video_box").height(),
		i = $(window).width(),
		t = $(window).height(),
		d = $(document).scrollTop();
	$(".video_box").css({
		"margin-left": (i - e) / 2,
		"margin-top": (t - o) / 2 + d
	})
};
set_video_center();
*/
var img_DIV = $(".picList .container .row .img_DIV");
img_DIV.mouseenter(function() {
	$(this).addClass("active").siblings().removeClass("active")
}).mouseleave(function() {
	$(this).removeClass("active")
}), $(".duduCode .container .row .androidCode").mouseenter(function() {
	$(this).css({
		background: "#f51f40"
	}).find(".noClick_img").hide(), $(this).find(".click_img").show()
}).mouseleave(function() {
	$(this).css({
		background: "#fff"
	}).find(".noClick_img").show(), $(this).find(".click_img").hide()
}), $(".downLode .box .cont a").click(function() {
	var e = navigator.userAgent.toLowerCase();
	if(/iphone|ipad|ipod/.test(e)) {
		var o = "https://itunes.apple.com/cn/app/id1288415356?mt=8";
		$(this).find("a").attr("src", o)
	} else if(/android/.test(e)) {
		var i = "http://app.mi.com/details?id=com.domain.carmanager&ref=search";
		$(this).find("a").attr("src", i)
	}
}), $(".section_search .content .help").click(function() {
	open("/html/aboutus/helpproblems.html", "_self")
}), $(".section_search .content .employ").click(function() {
	open("/html/aboutus/joinus.html", "_self")
}), $(".section_search .content .news").click(function() {
	open("/html/news/news.html", "_self")
}), $(".mask").click(function() {
	$(window).width();
	CKobject.getObjectById("ckplayer_a1").quitFullScreen(), CKobject.getObjectById("ckplayer_a1").videoPause(), $(".video_box").hide(), $(".video_box span").hide(), $(".showPic .video").show(), $("body,html").css({
		overflow: "auto",
		"overflow-x": "hidden",
		width: "100%"
	}), windowMask.hide()
});

var u = navigator.userAgent,
	isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1,
	isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
isAndroid && $.ajax({
	url: http_url + "app/Updates/check",
	data: {
		version_code: "1"
	},
	type: "get",
	dataType: "jsonp",
	success: function(e) {
		var o = e.data.download_url;
		$(".downLode a").attr("href", o)
	}
}, "json"), isiOS && $(".downLode a").attr("href", "https://itunes.apple.com/cn/app/id1288415356?mt=8"), $(function() {
	$.ajax({
		url: "http://houtai.dudubashi.com/index.php/app/Updates/check",
		data: {
			version_code: "1"
		},
		type: "get",
		dataType: "jsonp",
		success: function(e) {
			var o = e.data.download_url;
			// $(".duduCode .androidCode a").attr("href", o)
		}
	}, "json")
});