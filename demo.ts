function get_time_diff(start_time, end_time) {
    var diff_time = Math.floor((end_time - start_time) / 1000);
    var days = Math.floor(diff_time / (24 * 60 * 60));
    var hours = Math.floor((diff_time % (24 * 60 * 60)) / (60 * 60));
    var minutes = Math.floor((diff_time % (60 * 60)) / 60);
    var seconds = Math.floor(diff_time % 60);
    var time_diff = "";
    if (days > 0) {
        time_diff += days + "天";
    }
    if (hours > 0) {
        time_diff += hours + "小时";
    }
    if (minutes > 0) {
        time_diff += minutes + "分钟";
    }
    if (seconds > 0) {
        time_diff += seconds + "秒";
    }
    return time_diff;
}
