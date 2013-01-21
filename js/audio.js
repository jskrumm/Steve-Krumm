(function ($) {
    $("ul.tracks li a").on("click", function (e) {
        var player = $(this).parents(".audio-player"),
            source = player.find("source"),
            currentTrack = player.children(".selected-track"),
            selectedTrack = $(this);

        e.preventDefault();
        $.when(setSource(player, source, selectedTrack)).then(setSelectedTrack(currentTrack, selectedTrack));
    });

    // the event is 'onstalled' - 'stalled' in the jquery case
    $("audio").on({
        stalled: function () {
            var audio = $(this)[0],
                status = $(this).parent().children(".status");

            audio.load();

            // Threw in these two lines for good measure.
            audio.play();
            audio.pause();
        },
        error: function () {
            var status = $(this).parent().children(".status");

            status.text("Player has experience an error");
        },
        pause: function () {
            var status = $(this).parent().children(".status");

            status.text("Paused...");
        },
        playing: function () {
            var status = $(this).parent().children(".status");

            status.text("Now Playing...");
        },
        unspend: function () {
            var status = $(this).parent().children(".status");

            status.text("Please wait...");
        },
        waiting: function () {
            var status = $(this).parent().children(".status");

            status.text("Waiting...");
        }
    });

    function setSource(player, src, st) {
        var regexp = /([^\/]+)(?=\.\w+$)/gi,
            fileName = st.attr("href");

        src.each(function () {
            var srcAttr = $(this).attr("src");

            srcAttr = srcAttr.replace(regexp, fileName);
            $(this).attr("src", srcAttr);
        });
        player.find("audio").load();
    }

    function setSelectedTrack(ct, st) {
        ct.text(st.text());
    }
})(jQuery);