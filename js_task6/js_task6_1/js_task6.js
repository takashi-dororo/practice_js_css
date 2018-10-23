function total_price(input_price) {
    let price_display = document.getElementById('price_display');
    price_display.innerText = input_price.value;
}

function split_price(number) {
    let split_price_element = document.getElementById('split-price');
    let total_price = document.getElementById('price_display').innerHTML;
    if(!total_price) {
        alert('お会計金額を入力してください')
        number.value = "";
        return
    }
    split_price = Number(total_price) / Number(number.value);
    split_price_element.innerHTML = Math.ceil(split_price);
    // Math.ceil(n)　小数点切り上げ
}

function hide_consider_area() {
        document.getElementById('consider-area').style.display="block";
}

function waribiki(nodrunk_num) {
    let no_drunk_price_elem = document.getElementById('no-drunk-price'),
        drunk_price_elem = document.getElementById('drunk-price'),
    
        total_num = document.getElementById('total-num').value,
        drunk_num = total_num - nodrunk_num.value,
        // 人数定義
        total_price = document.getElementById('price').value,
        split_price = Number(total_price) / Number(total_num),
        per_no_drunk_price = Math.ceil(split_price * 0.8),
        total_drunk_price = total_price - (per_no_drunk_price * nodrunk_num.value),
        per_drunk_price = Math.ceil(total_drunk_price / drunk_num);

        no_drunk_price_elem.innerHTML = per_no_drunk_price;
        drunk_price_elem.innerHTML = per_drunk_price;
}