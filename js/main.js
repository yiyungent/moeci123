window.onload = function() {

    //#region 幻灯片
    bannerSlide();
    //#endregion 幻灯片

    //注意是onload 不是load
    /* var slideImg=document.getElementById("slideImg");

    var slideBtn1=document.getElementById("slideBtn1");
    var slideBtn2=document.getElementById("slideBtn2");
    var slideBtn3=document.getElementById("slideBtn3");
    var slideBtn4=document.getElementById("slideBtn4");
    var slideBtn5=document.getElementById("slideBtn5");
    var slideBtn6=document.getElementById("slideBtn6");
    var slideBtn7=document.getElementById("slideBtn7");

    slideBtn1.onmouseover=function(){
        slideImg.src="images/hot-img_1.jpg"; 
    }
    slideBtn2.onmouseover=function(){
        slideImg.src="images/hot-img_2.jpg";
    }
    slideBtn3.onmouseover=function(){
        slideImg.src="images/hot-img_3.jpg";
    }
    slideBtn4.onmouseover=function(){
        slideImg.src="images/hot-img_4.jpg";
    }
    slideBtn5.onmouseover=function(){
        slideImg.src="images/hot-img_5.jpg";
    }
    slideBtn6.onmouseover=function(){
        slideImg.src="images/hot-img_6.jpg";
    }
    slideBtn7.onmouseover=function(){
        slideImg.src="images/hot-img_7.jpg";
    } */
}
//#region 评论框
function comBtnOpen(aid, title){
    document.getElementById("js_commentArea").style.display = "block";    
    
    //ie8及更早的版本无效
    //document.getElementById("SOHUCS").attributes["sid"].nodeValue = aid;

    //Internet Explorer 8 以及更早的版本不支持此方法。
    document.getElementById("SOHUCS").setAttribute("sid",aid);

    document.getElementById("js_commentArea").getElementsByTagName("h3")[0].innerHTML = title;
    
    //document.getElementById("SOHUCS").sid = aid; 无效

    //document.getElementById("SOHUCS").getAttribute("sid") = aid; 无效，因为它返回的是指定属性的值
}
function comBtnClose(){
    document.getElementById("js_commentArea").style.display = "none";            
}
//#endregion 评论框



function bannerSlide(){
    var slideImg=document.getElementById("slideImg");
    var cis = document.getElementById("js_banner_circle").getElementsByTagName("li");

    for(var i = 0; i < cis.length; i++){
        cis[i].onmouseover = function(){
            //首先清空全部
            for(var j = 0; j < cis.length; j++){
                cis[j].className = "";
            }
            //然后给自己加上类名
            this.className = "current";
            //更换图片 不行
            slideImg.src="images/hot-img_"+(i+1)+".jpg";
        }
    }
}