$(function() {
    $('#plus').on('click', function(e) {
        e.preventDefault();

        let add1 = parseInt($('#add1').val());
        let add2 = parseInt($('#add2').val());
        
        $('#result_add').val(add1 + add2);

    });

    $('#times').on('click', function(e) {
        e.preventDefault();

        let times1 = parseInt($('#times1').val());
        let times2 = parseInt($('#times2').val());
        
        $('#result_times').val(times1 * times2);

    });

    $('#sinsu').on('click', function(e) {
        e.preventDefault();

        let demi = parseInt($('#demical').val());
        let bina = $('#binary').val();
        let hexa = $('#hexademical').val();

        if($('#binary').val() == "" && $('#hexademical').val() == "") {
            $('#binary').val(demi.toString(2));
            $('#hexademical').val(demi.toString(16));
        } else if($('#demical').val() == "" && $('#hexademical').val() == "") {
            $('#demical').val(parseInt(bina, 2));
            $('#hexademical').val(parseInt(bina, 2).toString(16));
        } else if($('#demical').val() == "" && $('#binary').val() == "") {
            $('#demical').val(parseInt(hexa, 16));
            $('#binary').val(parseInt(hexa, 16).toString(2));
        } else {
            alert("進数の入力はいずれか一つにしてください");
        }
    });
});