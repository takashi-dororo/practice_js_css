$(function(){
    var hyouji = false;
    $('#btn').on('click', function(){
        if(hyouji == false){
            $('#hello').text("こんばんわ");
            $('#hello').css('font-size', '100px');
            hyouji = true;
        } else {
            $('#hello').text("Hello").css('font-size', '16px');
            hyouji = false;
        }
    });
});

