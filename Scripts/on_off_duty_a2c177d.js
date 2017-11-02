$(".nav ul #nav_li4").addClass("active").siblings().removeClass("active"),
$(".nav ul #nav_li4 .dropDown  #on_off").css({
	color: "#e56452"
}),
 $(".nav ul #nav_li4 .title").text($(".nav ul #nav_li4 .dropDown #on_off").text());
var img_DIV = $(".picList .container .row .img_DIV");
img_DIV.mouseenter(function() {
	$(this).addClass("active").siblings().removeClass("active")
}).mouseleave(function() {
	$(this).removeClass("active")
});