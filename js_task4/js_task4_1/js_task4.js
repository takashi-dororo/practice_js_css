const omikuji = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];

document.getElementById('btn').onclick = function() {
    number = Math.floor(Math.random() * omikuji.length);
    // Math.floorで整数にする。
    document.getElementById('result').innerText = omikuji[number];
}