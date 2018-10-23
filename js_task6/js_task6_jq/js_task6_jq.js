$(function() {
    $('#price').keyup(function() {
        let val = $(this).val();
        $('#price_display').text(val);
    });

    $('#total_num').on('keyup', function(){
        let num = parseInt($(this).val()),
            total_price = parseInt($('#price_display').text());
            // console.log(num);
            // console.log(total_price);
        if(!total_price) {
            alert('お会計金額を入力してください');
            num = "";
            return
        }
        split_price = Math.ceil(total_price / num);
        // console.log(split_price);
        $('#split_price').text(split_price);
    });

    $('#btn').on('click', function() {
        $('#consider-area').fadeIn();
        // css('display', 'block')
    });

    $('#nodrunk_number').on('keyup', function() {
        let num = parseInt($(this).val()),
            total_num = parseInt($('#total_num').val()),
            drunk_num = total_num - num,
            total_price = parseInt($('#price_display').text()),
            split_price = parseInt($('#split_price').text()),
            per_no_drunk_price = Math.ceil(split_price * 0.8),
            drunk_price = total_price - (per_no_drunk_price * num),
            per_drunk_price = Math.ceil(drunk_price / drunk_num);

        $('#no-drunk-price').text(per_no_drunk_price);
        $('#drunk-price').text(per_drunk_price);


    });
});