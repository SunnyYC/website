$(".nav ul #nav_li2").addClass("active").siblings().removeClass("active");
var news_id = getQueryString("value_id"),
	json_id = getQueryString("json_id"),
	get_news_detail_url = "../../json/news_"+json_id+".json";
$.ajax({
	type: "get",
	url: get_news_detail_url,
	data: {
		id: news_id
	},
	dataType: "json",
	success: function(t) {
		var result = t.data;
		var	s = $(".main_content .cont_box .news_header");
			
			for(var i=0;i<result.length;i++){
				if (result[i].id == news_id) {
					var e = result[i];
					break;
				}
			}
			
		var	a = e.content,
			n = e.title,
			i = e.release_time,
			l = e.source;
			// a && $(".main_content .cont_box .content").html("<script>include('../news_tpl/news_1.html');</script>"),
			n && s.find(".title").html(n), 
			i && s.find(".small_title .time").html(i),
			l && s.find(".small_title .source").html("来源：" + l);
	}
});