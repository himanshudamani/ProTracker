//Project  Gantt Chart
var projects = JSON.parse(localStorage.getItem("projects"));
var tasks = JSON.parse(localStorage.getItem("tasks"));
var pro_objects=[];
 for (var i = 0; i < projects.length; i++) {
       var name = projects[i].name;
       var start = projects[i].sdate;
       var end = projects[i].cdate;
       var totalrmhrs="00:00";
       var totalwrkhrs="00:00";
       for (var j = 0; j < tasks.length; j++) {
             if (tasks[j].projectname == projects[i].name) {
                   var presentrmhrs = tasks[j].rmhrs;
                   var presentwrkhrs = tasks[j].workedhrs;
                   totalrmhrs =  addTimes(totalrmhrs, presentrmhrs);
                   totalwrkhrs = addTimes(totalwrkhrs, presentwrkhrs);
             }
       }
       var total = addTimes(totalwrkhrs, totalrmhrs);
        var progress =(100 * totalSeconds(totalwrkhrs) / totalSeconds(total)).toFixed(0);
       var pro_object ={
             id: 'id',
             name: name,
             start: start,
             end: end,
             progress: progress,
             dependencies: null
      };
      pro_objects.push(pro_object);
 }
var pro_gantt = new Gantt("#pro_chart_div", pro_objects);
pro_gantt.change_view_mode('Month');

function dayWise(){
      pro_gantt.change_view_mode('Day');
}
function weekWise(){
      pro_gantt.change_view_mode('Week');
}
function monthWise(){
      pro_gantt.change_view_mode('Month');
}

//tasks gantt chart
var tasks = JSON.parse(localStorage.getItem("tasks"));
var task_objects=[];
 for (var i = 0; i < tasks.length; i++) {

       var workedhrs = tasks[i].workedhrs;
       var rmhrs = tasks[i].rmhrs;
       var total = addTimes(workedhrs, rmhrs);
       var percentage=(100 * totalSeconds(workedhrs) / totalSeconds(total)).toFixed(2);

       var name = tasks[i].name;
       var start = tasks[i].sdate;
       var end = tasks[i].cdate;
       var task_object ={
             id: 'id',
             name: name,
             start: start,
             end: end,
             progress: percentage,
             dependencies: null
      };
      task_objects.push(task_object);
 }
var task_gantt = new Gantt("#task_chart_div", task_objects);
task_gantt.change_view_mode('Month');

function totalSeconds(time){
    var parts = time.split(':');
    return parts[0] * 3600 + parts[1] * 60;
}
function timeFromMins(mins) {
      function z(n){return (n<10? '0':'') + n;}
      var h = (mins/60 |0) % 24;
      var m = mins % 60;
      return z(h) + ':' + z(m);
}
function timeToMins(time) {
  var b = time.split(':');
  return b[0]*60 + +b[1];
}
function addTimes(t0, t1) {
      return timeFromMins(timeToMins(t0) + timeToMins(t1));
}
function dayWise2(){
      task_gantt.change_view_mode('Day');
}
function weekWise2(){
      task_gantt.change_view_mode('Week');
}
function monthWise2(){
      task_gantt.change_view_mode('Month');
}
//percentage
function totalSeconds(time){
    var parts = time.split(':');
    return parts[0] * 3600 + parts[1] * 60;
}
function timeFromMins(mins) {
      function z(n){return (n<10? '0':'') + n;}
      var h = (mins/60 |0) % 24;
      var m = mins % 60;
      return z(h) + ':' + z(m);
}
function timeToMins(time) {
  var b = time.split(':');
  return b[0]*60 + +b[1];
}
function addTimes(t0, t1) {
      return timeFromMins(timeToMins(t0) + timeToMins(t1));
}
