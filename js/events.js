(function ($) {

    $.getJSON('/GetEventJSON/', function (data) {
        $.each(data, function (key, val) {
            //console.log(formatJSONDate(val["Start Date"]));
            //console.log(formatJSONDate(val["End Date"]));
        });
    });

    function formatJSONDate(jsonDate) {
        var date = new Date(parseInt(jsonDate.substr(6)));
        return date;
    }

    $('#addEvent').submit(function (e) {
        e.preventDefault();
        $(this).validate({
            submitHandler: function (form) {
                console.log("hit");
                console.log($("#addEvent").serialize());
                $.ajax({
                    type: "POST",
                    url: "/POSTEventFormData/",
                    data: $("#addEvent").serialize(),
                    dataType: "text/plain",
                    success: function (response) {
                        console.log(response);
                    }
                });
            },
            errorContainer: $("#formErrors"),
            errorLabelContainer: $("ol", $("#formErrors")),
            wrapper: 'li',
            meta: "validate"
        });
    });
})(jQuery);