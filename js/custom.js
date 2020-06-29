$(document).ready(function(){
    $(".customCheckBox").click(function(){
        if(!$('input[type="checkbox"]').is(":checked")) {
            $(".back1").addClass("back1dark")
            $(".back2").addClass("back2dark")
            $(".media , .gradient-in , .media-view").addClass("mediadark")
            $(".media h2 , .gradient-in h2 , h1 , h2:contains('-') , .DFix>span , .drak-s").addClass("textdark")
        }
        else if($("input[type='checkbox']").is(":checked")) {
            $(".back1").removeClass("back1dark") 
            $(".back2").removeClass("back2dark")
            $(".media , .gradient-in , .media-view").removeClass("mediadark")
            $(".media h2 , .gradient-in h2 , h1 , h2:contains('-') , .DFix>span , .drak-s").removeClass("textdark")
        }
    });
});