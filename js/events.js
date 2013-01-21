(function ($) {

    $.getJSON('/GetEventJSON/', function (data) {
        events = [];
        $.each(data, function (key, val) {
            events.push(new Event(val["Name"], formatJSONDate(val["Start Date"]), formatJSONDate(val["End Date"]), val["Description"]));
        });
        console.log(events);
    });

    function Event(name, startDate, endDate, desc) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.desc = desc;
    }

    function formatJSONDate(jsonDate) {
        var date = new Date(parseInt(jsonDate.substr(6)));
        return date;
    }

    $('#addEvent').submit(function (e) {
        e.preventDefault();
        $(this).validate({
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "/POSTEventFormData/",
                    data: $("#addEvent").serialize(),
                    dataType: "text/plain",
                    success: function (response) {
                        var formContainer = $(this).parent();

                        $(this).hide();
                        formContainer.append("<span class='successful-form-submit;>Your form has been successfully submitted.</span>").delay(3000);
                        $(this).show();

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