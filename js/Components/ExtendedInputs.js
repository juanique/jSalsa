if(typeof(jQuery.support.placeholder) == "undefined"){
    jQuery.support.placeholder = (function(){
        var i = document.createElement("input");
        return 'placeholder' in i;
    })();
}

$(document).ready(function(){
    //Basic CSS properties
    $("input").bind("blur", function(){ 
            $(this).removeClass("focus");
    });
    $("input").bind("focus", function(){ 
            $(this).addClass("focus");
    });


    //Placeholders
    if(!jQuery.support.placeholder){
        $("input[placeholder]").bind("blur",function(){
            if($(this).val() == ""){
                $(this).val($(this).attr("placeholder"));
                $(this).addClass("empty");
            }

        });

        $("input[placeholder]").bind("focus",function(){
            if($(this).val() == $(this).attr("placeholder")){
                $(this).val("");
            }
            $(this).removeClass("empty");
        });

        $("input[placeholder]").each(function(intIndex){
            if($(this).val() == "" || $(this).val() == $(this).attr("placeholder")){
                $(this).val($(this).attr("placeholder"));
                $(this).addClass("empty");
            }
        })
    }

    //hints
    $("input[hintId]").each(
        function(intIndex){
            // Assign hints to inputs
            var hint = $("#"+$(this).attr("hintId"));
            if( typeof hint != "undefined" ){
                hint.append(' <span class="hintPointer">&nbsp;</span>');
                hint.css("display","none");
                $(this).bind(
                    "focus", function(){ hint.css("display","inline"); }
                );
                $(this).bind(
                    "blur", function(){ hint.css("display","none"); }
                );
            }
        }
    ); 

});
