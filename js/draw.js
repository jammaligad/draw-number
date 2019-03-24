$(document).ready(function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'media/bgm.mp3');
    audioElement.setAttribute("preload", "auto");

    audioElement.addEventListener('ended', function () {
        this.pause();
    }, false);
    $(document).keypress(function () {     
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.play();
        $("#num").removeClass("finaldraw");
        var output, started, duration;

        // Constants
        duration = 4500;

        // Initial setup
        output = $('#num');
        started = new Date().getTime();

        // Animate!
        animationTimer = setInterval(function () {
            // If the value is what we want, stop animating
            // or if the duration has been exceeded, stop animating
            if (new Date().getTime() - started > duration) {
                clearInterval(animationTimer);
                $("#num").addClass("finaldraw");
            } else {
                console.log('animating');
                // Generate a random string to use for the next animation step
                output.text(
                    '' +
                    Math.floor(Math.random() * 10) +
                    Math.floor(Math.random() * 10)
                );
            }
        }, 100);
    });
});

