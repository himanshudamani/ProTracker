var loggedUserId = localStorage.getItem('loggedUserId');
var users = JSON.parse(localStorage.getItem("users")) ;
for (var i = 0; i < users.length; i++) {
      if (users[i].id == loggedUserId) {
            var user = users[i].name;
      }
}

var tasks = JSON.parse(localStorage.getItem("tasks"));
var task_objects=[];
 for (var i = 0; i < tasks.length; i++) {
       if (tasks[i].assignedTo==user) {
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
function dayWise(){
      task_gantt.change_view_mode('Day');
}
function weekWise(){
      task_gantt.change_view_mode('Week');
}
function monthWise(){
      task_gantt.change_view_mode('Month');
}
