function HoverTreeMove(e, n) {
	var o = document.documentElement.scrollTop || document.body.scrollTop,
		t = 20;
	e.offsetTop < o + n - t ? (e.style.top = e.offsetTop + t + "px", setTimeout(function() {
		HoverTreeMove(e, n)
	}, 10)) : e.offsetTop > o + n + t ? (e.style.top = e.offsetTop - t + "px", setTimeout(function() {
		HoverTreeMove(e, n)
	}, 10)) : e.style.top = o + n + "px"
}

function checkPhoneNum(e) {
	var n = /^1[34578]\d{9}$/;
	return n.test(e) ? !0 : !1
}

function addAnimated() {
	var e = ($(document).scrollTop(), $(window).height()),
		n = $("#animate1"),
		o = $("#animate2"),
		t = $("#animate3"),
		r = $("#animate4"),
		s = $("#animate1").get(0).getBoundingClientRect().top;
	s > 0 && e > s && n.addClass("animated zoomIn");
	var a = $("#animate2").get(0).getBoundingClientRect().top;
	a > 0 && e > a && o.addClass("animated zoomIn");
	var i = $("#animate3").get(0).getBoundingClientRect().top;
	i > 0 && e > i && t.addClass("animated zoomIn");
	// var m = $("#animate4").get(0).getBoundingClientRect().top;
	// m > 0 && e > m && r.addClass("animated zoomIn")
}
addAnimated();
var h_div1 = document.getElementById("sr_iconbar"),
	h_hvttop = 500;
$(window).width() <= 1440 && (h_hvttop = 350), window.onscroll = function() {
	HoverTreeMove(h_div1, h_hvttop)
};
var offset = $("#sr_iconbar").offset();
$(window).scroll(function() {
	addAnimated()
}), $(".iconbar4").click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 1e3)
});
var $customForm = $("#customForm"),
	_need_type = 1;
$(".select_box").on("click", function() {
	if($(this).hasClass("selected")) return !1;
	var e = $(".requirement .selected"),
		n = $(1 == $(this).data("type") ? ".company_need" : ".personal_need");
	_need_type = 1 == _need_type ? 2 : 1, n.addClass("selected"), e.removeClass("selected")
}), $(document).on("click", ".ecline_custombtn", function() {
	$("#customBox").css("display", "table").show(), $("html,body").css("overflow", "hidden")
}), $(document).on("click", ".ec_close", function() {
	$(this).parents(".ec_modal").css("display", "table").hide(), $("html,body").css("overflow", "auto"), $(".ec_err_msg").hide(), $customForm.find('input[name="user_name"]').val("").removeClass("ec_err_border"), $customForm.find('input[name="user_phone"]').val("").removeClass("ec_err_border")
}), $(document).on("click", ".ec_btn", function() {
	var e = $customForm.find('input[name="user_name"]').val(),
		n = $customForm.find('input[name="user_phone"]').val(),
		o = $customForm.find('input[name="user_company"]').val();
	return "" == o && (o = ""), "" == e ? ($customForm.find('input[name="user_name"]').addClass("ec_err_border"), $customForm.find('input[name="user_name"] + .ec_err_msg').show()) : ($customForm.find('input[name="user_name"]').removeClass("ec_err_border"), $customForm.find('input[name="user_name"] + .ec_err_msg').hide()), "" != n && checkPhoneNum(n) ? ($customForm.find('input[name="user_phone"]').removeClass("ec_err_border"), $customForm.find('input[name="user_phone"] + .ec_err_msg').hide(), void $.ajax({
		type: "post",
		url: "/index.php",
		data: {
			func: "official_enterprise_route_apply",
			user_name: e,
			phone: n,
			company: o,
			need_type: _need_type
		},
		dataType: "json",
		success: function(e) {
			"0000" == e.result ? ($("#customBox").css("display", "table").hide(), $("html,body").css("overflow", "auto"), $(".ec_err_msg").hide(), $customForm.find('input[name="user_name"]').val("").removeClass("ec_err_border"), $customForm.find('input[name="user_phone"]').val("").removeClass("ec_err_border"), $("#customResBox").css("display", "table").show()) : window.alert("8004" == e.result ? "您已提交过申请啦" : e.info)
		}
	})) : ($customForm.find('input[name="user_phone"]').addClass("ec_err_border"), void $customForm.find('input[name="user_phone"] + .ec_err_msg').show())
}), $customForm.find('input[name="user_name"]').bind("input propertychange", function() {
	"" == $(this).val() ? ($customForm.find('input[name="user_name"]').addClass("ec_err_border"), $customForm.find('input[name="user_name"] + .ec_err_msg').show()) : ($customForm.find('input[name="user_name"]').removeClass("ec_err_border"), $customForm.find('input[name="user_name"] + .ec_err_msg').hide())
}), $customForm.find('input[name="user_phone"]').bind("input propertychange", function() {
	return "" != $(this).val() && checkPhoneNum($(this).val()) ? ($customForm.find('input[name="user_phone"]').removeClass("ec_err_border"), void $customForm.find('input[name="user_phone"] + .ec_err_msg').hide()) : ($customForm.find('input[name="user_phone"]').addClass("ec_err_border"), void $customForm.find('input[name="user_phone"] + .ec_err_msg').show())
}), $.post("/index.php?func=get_banner", {
	func: "get_banner",
	type: 6
}, function(e) {
	if("0000" == e.result && e.data.length > 0) {
		for(var n = "", o = 0, t = e.data.length; t > o; o++) {
			var r = e.data[o];
			n += '<a class="swiper-slide" target="_blank" href="' + r.url + '"><img class="pc_banner" src="' + r.img_src + '"/><img class="phone_banner" src="' + r.mobile_img + '"/></a>'
		}
		$("#bannerBox").append(n), window.swiper = new Swiper("#bannerSwiper", {
			autoplay: 5e3,
			loop: !0,
			pagination: ".swiper-pagination",
			paginationClickable: !0
		})
	}
}, "json");