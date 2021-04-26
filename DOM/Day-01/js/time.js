// 输入时分
function getHourTime() {
    var hour = null;
    do {
        hour = Number(prompt("请输入当前时分"));
        if (hour >= 0 && hour <= 24) {
            break;
        } else {
            alert("时间输入错误,请重新输入");
        }
    } while (true);
    return hour;
}

