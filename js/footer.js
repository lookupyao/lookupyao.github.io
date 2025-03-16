
function updateDateTime() {
    var today = new Date();
    var futureDate = new Date('2023-05-02');
    var timeDiff = futureDate.getTime() - today.getTime();
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    var timeDiffString = days + "天 " + hours + "时 " + minutes + "分 " + seconds + "秒";
    document.getElementById('datetime').innerHTML = timeDiffString;
}
setInterval(updateDateTime, 1000);
