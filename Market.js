alert("p")

clock();
function clock() {
var d = new Date();
var month_num = d.getMonth()
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

month=new Array("th JANUARY", "th FEBRUARY", "th MARCH", "th APRIL", "th MAY", "th JUNE",
"th JULY", "th AUGUST", "th SEPTEMBER", "th OKTOBER", "th NOVEMBER", "th DESEMREB");

if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;

date_time = "Today is-" + day + " " + month[month_num] + " " + d.getFullYear() +
" г.&nbsp;&nbsp;&nbsp;Hours-"+ hours + ":" + minutes + ":" + seconds;
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("doc_time").innerHTML = date_time;
 setTimeout("clock()", 1000);
}