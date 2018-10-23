$(function() {
    $('#btn').on('click', function() {
        if($('p').hasClass('.active')) {
            $('#hello').removeClass('.active');
            $('#konn').addClass('.active');
        } else {
            $('#konn').removeClass('.active');
            $('#hello').addClass('.active');
        }
    });
});