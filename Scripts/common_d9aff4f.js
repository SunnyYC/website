function error_html() {
	window.location = "/html/error.html"
}

function getDomainQuery(e) {
	var r = e.indexOf("//", 1),
		o = e.substring(r + 1, e.length),
		t = o.indexOf("/", 1);
	return o.substring(1, t)
}

function setCookie(e, r, o) {
	var t = e + "=" + escape(r) + ";path=/",
		o = o || 0;
	if(o > 0) {
		var n = new Date;
		n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3), t += ";expires=" + n.toGMTString()
	}
	document.cookie = t
}

function getCookie(e) {
	var r, o = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
	return(r = document.cookie.match(o)) ? unescape(r[2]) : null
}

function delCookie(e) {
	var r = new Date;
	r.setTime(r.getTime() - 1);
	var o = getCookie(e);
	null != o && (document.cookie = e + "=" + o + ";expires=" + r.toGMTString())
}

function getUrlParam(e) {
	var r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
		o = window.location.search.substr(1).match(r);
	return null != o ? unescape(o[2]) : null
}

function getOS() {
	return getUrlParam("os") || getCookie("os") || 3
}
var http_url = "http://wx.dudubashi.com/index.php/";
getDomainQuery(document.referrer).indexOf("dudubashi.com") > -1 || getDomainQuery(document.referrer).indexOf("dudu84.com") > -1 || (delCookie("referer"), setCookie("referer", getDomainQuery(document.referrer)));
var url_os = getUrlParam("os");
url_os && !isNaN(url_os) && setCookie("os", url_os, 7);

var json_url = "/bashi";
function getTitle(){
	$.ajax({
	  url:json_url+"/json/title.json",
	  data:{},
	  dataType: "json",
	  success: function(result){
	  	var data = result.data;
	  	$("title").text($("title").text()+"-"+data.title);
	  	$("meta[name='keywords']").attr("content",data.keywords);
	  	$("meta[name='description']").attr("content",data.description);
	  }
	});
}
$(function(){
	getTitle();
});
