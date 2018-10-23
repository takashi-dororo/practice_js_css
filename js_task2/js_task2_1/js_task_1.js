let hyouji = false;
document.getElementById('btn').onclick = function() {
    if(hyouji == false) {
        document.getElementById('hello').innerText= "バーイ";
        hyouji = true;
    } else {
        document.getElementById('hello').innerText= "hello";
        hyouji = false;
    }
}