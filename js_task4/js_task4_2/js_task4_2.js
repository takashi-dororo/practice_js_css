$(function() {
    const omikuji = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"]; 
    $('#btn').on('click', function(){
        let i = Math.floor(Math.random() * omikuji.length);
        $('#result').text(omikuji[i]);
    });  
});