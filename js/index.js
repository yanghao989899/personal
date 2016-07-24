$(function(){
    var obj1={num:0}
    $(obj1).animate({num:2016},{
        duration:1000,
        step:function(){
            $(".jz").html(Math.ceil(obj1.num))
            if(Math.ceil(obj1.num)==2016){
                $(".jz").css("color","#fff")
                $(".boxbg").fadeOut(900)
            }
        }
    })
    $(".ybzj").mouseover(function(){
        $(".ybzj").css("animation","ybfd 0.5s linear forwards")
        $(".ybmb").css("animation","ybmb 0.4s linear forwards")
    })
    $(".ybmb").mouseout(function(){
        $(".ybzj").css("animation","ybfd1 0.5s linear forwards")
        $(".ybmb").css("animation","ybmb1 0.4s linear forwards")
    })
    $(".start").click(function(){
        var Hheight=$(".bannertu").height()
        $("body,html").animate({scrollTop:Hheight})
    })
        var ot=$(".ebbg")[0].offsetTop
        var og=$(".sibg")[0].offsetTop
        $(window).scroll(function(){
            var stop=$(window).scrollTop()
            //alert(stop)
            if(stop>ot+$(window).height()){
                $(".wavebox").css("animation","shan 1.5s linear forwards")
            }
            if(stop>og+200+$(window).height()){
                $(".si1").css("animation","xiala 3s  linear 1.2s forwards")
                $(".si2").css("animation","xiala 3s  linear 1.1s forwards")
                $(".si3").css("animation","xiala 3s  linear 1s forwards")
                $(".si4").css("animation","xiala 3s  linear 0.9s forwards")
                $(".si5").css("animation","xiala 3s  linear 0.8s forwards")
                $(".si6").css("animation","xiala 3s  linear 0.7s forwards")
                $(".si7").css("animation","xiala 3s  linear 0.6s forwards")
                $(".si8").css("animation","xiala 3s  linear 0.5s forwards")
                $(".si9").css("animation","xiala 3s  linear 0.4s forwards")
                $(".si10").css("animation","xiala 3s  linear 0.3s forwards")
            }
        })
            $(".sblxxx").hover(function(){
                var index=$(this).index()
            $(".sblxtu").eq(index).css("animation","rotateRight 0.8s linear forwards")
        },function(){
            $(".sblxtu").css("animation","none")
        })
    $(".sbl").hover(function(){
        var index=$(this).index()
        $(".sblxtu").eq(index).css("animation","rotateleft 0.8s linear forwards")
    },function(){
        $(".sblxtu").css("animation","none")
    })
    
})