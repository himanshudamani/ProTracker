var taskId;
var getTasks;

//Table items
var getTasks =JSON.parse(localStorage.getItem("tasks")) ;
var  EmpTableInnerHtml;
EmpTableInnerHtml="";
var taskId;
var loggedUserId = localStorage.getItem('loggedUserId');
var users = JSON.parse(localStorage.getItem("users")) ;
for (var i = 0; i < users.length; i++) {
      if (users[i].id == loggedUserId) {
            var user = users[i].name;
      }
}
for (var i = 0; i < getTasks.length; i++) {
      if (getTasks[i].assignedTo == user) {
            var workedhrs = getTasks[i].workedhrs;
            var rmhrs = getTasks[i].rmhrs;
            var total = addTimes(workedhrs, rmhrs);
            var percentage=(100 * totalSeconds(workedhrs) / totalSeconds(total)).toFixed(2);
            EmpTableInnerHtml+="<tr id='"+i+ "'data-toggle='modal' data-target='#trModal' onclick='forId(this)'>";
            EmpTableInnerHtml += "<td>" + getTasks[i].name + "</td>";
            EmpTableInnerHtml += "<td>" + getTasks[i].type + "</td>";
            EmpTableInnerHtml += "<td>" + getTasks[i].status + "</td>";
            EmpTableInnerHtml += "<td>" + getTasks[i].projectname + "</td>";
            EmpTableInnerHtml += "<td>" + percentage + "%</td>";
            EmpTableInnerHtml += "<td>" + getTasks[i].sdate + "</td></tr>";
            document.getElementById('EmpTable').innerHTML = EmpTableInnerHtml;
      }
}
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

//Modal innerHTML
function forId(clickedId){
  taskId = clickedId.id;
  getTasks =JSON.parse(localStorage.getItem("tasks")) ;
  var taskDetails =
  `<form>
   <div class='form-group row'>
   <label  class='col-form-label col-sm-3'>Task Name</label>
   <label  class=col-form-label col-sm-3'>`+getTasks[taskId].name+`</label>
   </div>
   <div class='form-group row'>
   <label class='col-form-label col-sm-3'>Description</label>
   <label class='col-form-label col-sm-3'>`+getTasks[taskId].description+`</label>
   </div>
   <div class='form-group row'>
   <label class='col-form-label col-sm-3'>Type</label>
   <label class='col-form-label col-sm-3'>`+getTasks[taskId].type+`</label>
   </div>
   <div class='form-group row'>
   <label for='taskStatus' class='col-form-label col-sm-3'>Status</label>
   <label for='taskStatus' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].status+`</label>
   <div class='col-sm-3'>
   <select class='toHide form-control' id='taskStatus'>
         <option value='Open'>Open</option>
         <option value='Inprocess'>InProcess</option>
         <option value='Closed'>Closed</option>
   </select>
   </div>
   </div>
   <div class='form-group row'>
   <label class='col-form-label col-sm-3'>Project Name</label>
   <label class='col-form-label col-sm-3'>`+getTasks[taskId].projectname+`</label>
   </div>
   <div class='form-group row'>
   <label class='col-form-label col-sm-3'>Estimated Hours</label>
   <label class='col-form-label col-sm-3'>`+getTasks[taskId].orighrs+`</label>
   </div>
   <div class='form-group row'>
   <label for='taskWrkhrs'  class='col-form-label col-sm-3'>Worked Hours</label>
   <label  for='taskWrkhrs' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].workedhrs+`</label>
   <div class='col-sm-3'>
   <input type='time' class='toHide form-control' id='taskWrkhrs' value='`+getTasks[taskId].workedhrs+`'>
   </div>
   </div>
   <div class='form-group row'>
   <label for='taskRmhrs'  class='col-form-label col-sm-3'>Remaining Hours</label>
   <label  for='taskRmhrs' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].rmhrs+`</label>
   <div class='col-sm-3'>
   <input type='time' class='toHide form-control' id='taskRmhrs' value='`+getTasks[taskId].rmhrs+`'>
   </div>
   </div>
   <div class='form-group row'>
   <label class='col-form-label col-sm-3'>Posted Date</label>
   <label class='col-form-label col-sm-3'>`+getTasks[taskId].pdate+`</label>
   </div>
   <div class='form-group row'>
   <label class='col-form-label col-sm-3'>Starting Date</label>
   <label class='col-form-label col-sm-3'>`+getTasks[taskId].sdate+`</label>
   </div>
   <div class='form-group row'>
   <label class='col-form-label col-sm-3'>Closed Date</label>
   <label class='col-form-label col-sm-3'>`+getTasks[taskId].cdate+`</label>
   </div>
  </form>`;
 document.getElementById('taskDetails').innerHTML = taskDetails;
}

//Edit button
function editTask(){
      var Button = document.getElementById('editTask');
      if (Button.textContent == 'Edit') {
            [].forEach.call(document.querySelectorAll('.toHide'), function (el) {
            el.style.display = 'inline';
             });
           [].forEach.call(document.querySelectorAll('.toShow'), function (el) {
            el.style.display = 'none';
            });
            Button.textContent = 'Save Changes';
     }
     else if (Button.textContent == 'Save Changes') {
       [].forEach.call(document.querySelectorAll('.toHide'), function (el) {
       el.style.display = 'none';
        });
       [].forEach.call(document.querySelectorAll('.toShow'), function (el) {
        el.style.display = 'inline';
      });

  var tStatus = document.getElementById('taskStatus').value;
  var workedhrs = document.getElementById('taskWrkhrs').value;
  var rmhrs = document.getElementById('taskRmhrs').value;

  var tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks[taskId].status = tStatus;
  tasks[taskId].workedhrs = workedhrs;
  tasks[taskId].rmhrs = rmhrs;

  localStorage.setItem('tasks', JSON.stringify(tasks));

    Button.textContent = 'Edit';
  }
}
