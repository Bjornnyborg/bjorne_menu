$(function(){

    function checkRootMenu(){
        if($(".root-menu").hasClass("active")){
            $("#back").removeClass("active");
            console.log("1")
        }else{
            console.log("2")
            $("#back").addClass("active");
        }
    }
    checkRootMenu();

    function changeMenu(target){
        var newMenu = $("#"+target);
        $("#back").attr("data-target", $(".menu.active").attr("id") );
        $(".menu.active").removeClass("active");
        $(newMenu).addClass("active");
        checkRootMenu();
    }

    if($(".menu.active").find("li").length){
    } else {
        changeMenu($("#back").data("target"));
    }

    $(".next").click(function(){
        changeMenu($(this).data("target"));
    });
    $("#back").click(function(){
        changeMenu($(".menu.active").data("parent"));
    });
    
});