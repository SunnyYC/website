$(".nav ul #nav_li2").addClass("active"),$(".nav ul #nav_li2 .dropDown #direct").css({color:"#e56452"}),$(".nav ul #nav_li2 .title").text($(".nav ul #nav_li2 .dropDown #direct").text());var img_DIV=$(".picList .container .row .img_DIV");img_DIV.mouseenter(function(){$(this).addClass("active").siblings().removeClass("active")}).mouseleave(function(){$(this).removeClass("active")});