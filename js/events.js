(function ($) {
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
        submitHandler: function (form) {
            form.submit();
        },
        errorContainer: $("#formErrors"),
        errorLabelContainer: $("ol", $("#formErrors")),
        wrapper: 'li',
        meta: "validate"
    });

    $.getJSON('/GetEventJSON/', function (data) {
        console.log(data);
        console.log(data[3]);
        console.log(data.StartDate);
        console.log(formatJSONDate(Date(data.Start_Date)));
    });

    function formatJSONDate(jsonDate) {
        var date = new Date(parseInt(jsonDate.substr(6)));
        return date;
    }
})(jQuery);