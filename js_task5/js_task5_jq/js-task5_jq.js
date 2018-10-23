$(function() {
    setInterval(function() {
        $('#bgcolor').css('background-color', getRandomColor())}, 2000);
        function getRandomColor() {
        let rgbcolor = "rgb(" + Math.floor(Math.random() * 256)  + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ")";
        return rgbcolor;
    } 


});