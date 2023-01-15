
if (null !== document.querySelector("#webTicker")) {
    $("#webTicker").webTicker({
        height: '50px',
        speed: 70,
        hoverpause: true
    });

    $(".ta_tickerStatus .fa-pause").click(function () {
        $("#webTicker").webTicker('stop');
    });
    $(".ta_tickerStatus .fa-forward").click(function () {
        $("#webTicker").webTicker('cont');
    });
}