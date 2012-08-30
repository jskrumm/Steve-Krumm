(function($) {
    /*$("addEvent").submit(function(){
    $.post(
    "form.cshtml",
    $(this).serialize(), 
    function(data){
                
    }
    );
    return false;
    });*/

    $("#addEvent").validate({
        submitHandler: function(form) {
            form.submit();
        },
        errorContainer: $("#formErrors"),
        errorLabelContainer: $("ol", $("#formErrors")),
        wrapper: 'li',
        meta: "validate"
    });

    $.getJSON('/GetEventJSON/', function(data) {
        console.log(data);
    });
})(jQuery);