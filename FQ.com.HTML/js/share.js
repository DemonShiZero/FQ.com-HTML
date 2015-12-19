/**
 * Created by Administrator on 2015/12/16 0016.
 */


$(window).load(function(){
    resizeBanner();
    resizeProduct();
    resizeFooter();
});

$(window).resize(function () {
    resizeBanner();
    resizeProduct();
    resizeFooter();
    var becloud = $(".becloud").css("display");
    if (becloud == "block"){
        var becloudT = parseInt($(".becloud-up").css("top"));
        if( becloudT == 0){
            $(".btn-register").click();
        }
        else{
            $(".btn-login").click();
        }
    }
});
/***
 * 根据窗口的大小重新排列banner里面元素的位置
 */
function resizeBanner(){
    var bannerH = $("img.banner").outerHeight(true);
    $(".row.banner").css({"height":bannerH});
    var logoPadding = bannerH * 0.044;
    $(".logo").css({"padding-top":logoPadding});
    $(".btn-toolbar.banner").css({"padding-top":logoPadding});
    $(".banner-title").css({"font-size":bannerH*0.08,"padding-top":bannerH*0.21});
    $(".banner-subTitle").css({"padding-top":bannerH*0.05});
    $(".form-group.search").css({"padding-top":bannerH*0.076});
    var registerH = $(".btn-toolbar.banner .btn-register").outerHeight(true);
    if (bannerH*0.21 <= registerH){
        $(".banner-title").css({"padding-top":(registerH+6)});
    }
    $(".content-line").css({"height":bannerH*0.17,"margin-bottom":bannerH*0.076});
    var lineH = parseInt($(".content-line").css("height"));
    var lineW = parseInt($(".content-line").css("width"));
    var contentTitleH = $(".content-title").outerHeight(true);
    var contentTitleW = $(".content-title").outerWidth(true);
    var contentTitleMoreW = $(".content-title.more").outerWidth(true);
    $(".content-title").css({"top":lineH-(contentTitleH/2),"left":(lineW-contentTitleW)/2});
    $(".content-title.more").css({"left":(lineW-contentTitleMoreW)/2});
    var logoH = $("img.img-logo").outerHeight(true);
    var logoW = $("img.img-logo").outerWidth(true);
    if (logoH < 25)
    {
        $("img.img-logo").css({"width":(25/logoH)*logoW,"height":25});
        $(".banner-title").css({"padding-top":26});
        $(".footer-title").css({"padding-top":5,"font-size":10,"padding-left":logoW+8});
    }
}
function resizeProduct(){
    var productH = $("img.banner").outerHeight(true)*0.46;
    $(".dec .dec-title").css({"padding-top":productH*0.05,"padding-left":productH*0.067,"font-size":productH*0.075});
    $(".dec .dec-detail").css({"padding-top":productH*0.04,"padding-left":productH*0.067,"font-size":productH*0.058});
    $(".eye-heart").css({"padding-top":productH*0.04,"padding-right":productH*0.067})
}
function resizeFooter(){
    var bannerH = $("img.banner").outerHeight(true);
    var logoH = $("img.img-logo").outerHeight(true);
    $(".footer-title").css({"padding-top":(logoH*0.5+bannerH*0.044-6)});
    $(".barcode").css({"padding-top":logoH});
    $(".footer-link").css({"padding-top":logoH*0.9});
}

/***
 * 鼠标悬停注册登录按钮
 * */
$(".btn-toolbar.banner .btn-login").mouseenter(function () {
    $(".btn-toolbar.banner .btn-login span").css({"color":"#3a89f9"});
})
$(".btn-toolbar.banner .btn-login").mouseleave(function () {
    $(".btn-toolbar.banner .btn-login span").css({"color":"#ffffff"});
});

/***
 * 鼠标悬停产品
 * */
$(".row.product .productItem").mouseenter(function () {
    $(this).css({"border":"1px solid #3a89f9"});
    $(this).find(".eye-heart .eye .img").addClass("hovered");
    $(this).find(".eye-heart .heart .img").addClass("hovered");
    $(this).find(".eye-heart .time").css({"color":"#3a89f9"});
});
$(".row.product .productItem").mouseleave(function () {
    $(this).css({"border":"1px solid #cccccc"});
    $(this).find(".eye-heart .eye .img").removeClass("hovered");
    $(this).find(".eye-heart .heart .img").removeClass("hovered");
    $(this).find(".eye-heart .time").css({"color":"#9a9a9a"});
});

/***
 * 设置登录蒙板的宽度与高度
* */
function showCloud(selector){
    $(".visible-window").css({"display":"block"});
    var windowH = $(document.body).outerHeight(true);
    var windowW = $(document.body).outerWidth(true);
    var visibleH = $(window).height();
    var visibleW = $(window).width();
    var loginH = $(selector).outerHeight(true);
    var loginW = $(selector).outerWidth(true);
    $(".visible-window").css({"width":loginW,"height":loginH,"left":(visibleW-loginW)/2,"top":(visibleH-loginH)/2});
    $(".becloud").css({"height":windowH,"width":windowW});
    $(".becloud").css({"display":"block"});
}

/***
 * 响应登录按钮
 * */
$(".btn-login").click(function () {
    showCloud(".panel-login-self");
    $(".becloud-up").animate({"left":0,"top":-726},"slow");
});
$(".btn-register").click(function(){
    showCloud(".panel-login-third");
    $(".becloud-up").animate({"left":0,"top":0},"slow");
});
$(".panel-login-third .link.link-register-third").click(function () {
    showCloud(".panel-login-register");
    $(".becloud-up").animate({"left":0,"top":-309},"slow");
});
$(".panel-login-third .link.link-login").click(function () {
    showCloud(".panel-login-self");
    $(".becloud-up").animate({"left":0,"top":-726},"slow");
});
$(".panel-login-register .link.link-register-third").click(function () {
    showCloud(".panel-login-third");
    $(".becloud-up").animate({"left":0,"top":0},"slow");
});
$(".panel-login-register .link.link-login").click(function () {
    showCloud(".panel-login-self");
    $(".becloud-up").animate({"left":0,"top":-726},"slow");
});
$(".panel-login-self .link.link-password").click(function () {
    showCloud(".panel-login-password");
    $(".becloud-up").animate({"left":0,"top":-1184},"slow");
});
$(".panel-login-self .link.link-register-third").click(function () {
    showCloud(".panel-login-third");
    $(".becloud-up").animate({"left":0,"top":0},"slow");
});
$(".panel-login-password .link.link-login").click(function () {
    showCloud(".panel-login-self");
    $(".becloud-up").animate({"left":0,"top":-726},"slow");
});

$(".visible-window .closeX").click(function () {
    $(".becloud").css({"display":"none"});
    $(".visible-window").css({"display":"none"});
});

/***
 * 图标切换
 */
$(".icon-QQ img").mouseenter(function(){
    $(this).attr({"src":"images/QQ2_11.png"});
}).mouseleave(function () {
    $(this).attr({"src":"images/QQ_11.png"});
});
$(".icon-weiChat img").mouseenter(function(){
    $(this).attr({"src":"images/weiChat2_13.png"});
}).mouseleave(function () {
    $(this).attr({"src":"images/weiChat_13.png"});
});