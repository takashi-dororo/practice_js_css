document.getElementById('plus').addEventListener('click', function(e) {
    e.preventDefault(); 
    // いまいち理解できていないが、書かないと動かない↑
    let add1 = document.forms.form1.add1.value;
    let add2 = document.forms.form1.add2.value;
    let sum = parseInt(add1, 10) + parseInt(add2, 10);

    let result_add = document.forms.form1.result_add;
    result_add.value = sum;
});

document.getElementById('times').addEventListener('click', function(e) {
    e.preventDefault();
    
    let times1 = document.forms.form2.times1.value;
    let times2 = document.forms.form2.times2.value;
    let sum = parseInt(times1, 10) * parseInt(times2, 10);

    let result_times = document.forms.form2.result_times;
    result_times.value = sum;
});

document.getElementById('sinsu').addEventListener('click', function(e) {
    e.preventDefault();

    let demi = document.forms.form3.demical.value;
    let bina = document.forms.form3.binary.value;
    let hexa = document.forms.form3.hexademical.value;

    if(demi) {
        document.forms.form3.binary.value = parseInt(demi, 10).toString(2);
        document.forms.form3.hexademical.value = parseInt(demi, 10).toString(16);
    } else if(bina) {
        document.forms.form3.demical.value = parseInt(bina, 2);
        document.forms.form3.hexademical.value =parseInt(bina, 2).toString(16);
    } else if(hexa){
        document.forms.form3.demical.value = parseInt(hexa, 16);
        document.forms.form3.binary.value = parseInt(hexa, 16).toString(2);
    } else {
        alert("進数の入力はいずれか一つにしてください")
    }
});



