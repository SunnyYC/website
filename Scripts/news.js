$(".nav ul #nav_li2").addClass("active").siblings().removeClass("active");
//var get_news_url = http_url + "official/news/get_list",
var get_news_url = "../../json/news_1.json";

$.ajax({
	type: "get",
	url: get_news_url,
	data: {
		page: 1
	},
	dataType: "json",
	success: function(e) {
		var a = e.data,
			n = template("news_list", a);
		$("#news_list_id").html("").append(n);
		var t = template("news_list_iphone", a);
		$("#news_list_id_iphone").html("").append(t), a.length < 5 && $("#more_news").hide(), current_page = 1
	}
}), $(".news_container .news .more_news").click(function() {
	var e = current_page + 1;
	var get_news_url_more = "../../json/news_"+e+".json";
	$.ajax({
		type: "get",
		url: get_news_url_more,
		data: {
			page: e
		},
		dataType: "json",
		success: function(a) {
			console.log(a);
			var n = a.data,
				t = template("news_list", n);
			$(".news_container .news ul").append(t), n.length < 5 && $("#more_news").hide(), current_page = e
		},
		error:function () {
			$("#more_news").hide();
			$(".news_container .news ul").append("<p style='text-align:center;margin-bottom: 30px;'>没有更多新闻了哦</p>");
		}
	})
});