window.onSpotifyIframeApiReady = function (IFrameAPI) {
    let activeController = null;

    $(document).on("click", ".episode", function () {
        const element = document.getElementById(`${$(this).data("embed")}`);
        const spotifyId = $(this).data("spotify-id");

        if (activeController) {
            activeController.destroy();
        }
        const options = {
            width: '100%',
            height: '100',
        };

        $(this).after(`<div id="${$(this).data("embed")}"></div>`);
        const callback = (EmbedController) => {
            EmbedController.loadUri(spotifyId);
            EmbedController.play();
            activeController = EmbedController;
        };

        IFrameAPI.createController(element, options, callback);
    });
} 