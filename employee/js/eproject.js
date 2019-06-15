function logout(){
      localStorage.removeItem('loggedUserId');
}


//Select Project Dropdown
var loggedUserId = localStorage.getItem('loggedUserId');
var users = JSON.parse(localStorage.getItem("users")) ;
for (var i = 0; i < users.length; i++) {
      if (users[i].id == loggedUserId) {
            var user = users[i].name;
      }
}
var selectProInnerHtml="<option value='--select--'>--Select--</option>";
var project =  JSON.parse(localStorage.getItem("projects"));
for (var i = 0; i < project.length; i++) {
if(project[i].assignedTo==user){
selectProInnerHtml += `<option value=${project[i].name}>${project[i].name}</option>`;
}}

document.getElementById('selectPro').innerHTML = selectProInnerHtml;

var taskId;
var getTasks;

//Table Display
function DisplayTable(){
  var getTasks =JSON.parse(localStorage.getItem("tasks")) ;
  var selectValue = document.getElementById('selectPro').value;
  var  tasksTableInnerHtml;
  tasksTableInnerHtml='';
  if (selectValue== '--select--') {
    document.getElementById('tasksTable').innerHTML=
    "<label>Select a project please</label>";
  }
  for (var i = 0; i < getTasks.length; i++) {

        if (getTasks[i].projectname == selectValue) {
                   tasksTableInnerHtml+="<tr"+" id='"+ i +"' data-toggle='modal' data-target='#trModal' onclick='forId(this)'>";
      tasksTableInnerHtml += "<td>" + getTasks[i].name + "</td>";
      tasksTableInnerHtml += "<td>" + getTasks[i].type + "</td>";
      tasksTableInnerHtml += "<td>" + getTasks[i].status + "</td>";
      tasksTableInnerHtml += "<td>" + getTasks[i].assignedTo + "</td>";
      tasksTableInnerHtml += "<td>" + getTasks[i].rmhrs + "</td>";
      tasksTableInnerHtml += "<td>" + getTasks[i].pdate + "</td></tr>";
        document.getElementById('tasksTable').innerHTML = tasksTableInnerHtml;
    }
  }

}

//Modal innerHTML
function forId(clickedId){
  taskId = clickedId.id;
  getTasks =JSON.parse(localStorage.getItem("tasks")) ;
  var taskDetails =
  `<form>
   <div class='form-group row'>
   <label for='taskName' class='col-form-label col-sm-3'>Task Name</label>
   <label for='taskName' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].name+`</label>
   <div class='col-sm-3'>
   <input type='text' class='toHide form-control' id='taskName' value='`+getTasks[taskId].name+`'>
   </div>
   </div>
   <div class='form-group row'>
   <label for='taskDesc' class='col-form-label col-sm-3'>Description</label>
   <label for='taskDesc' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].description+`</label>
   <div class='col-sm-3'>
   <input type='text' class='toHide form-control' id='taskDesc' value='`+getTasks[taskId].description+`'>
   </div>
   </div>
   <div class='form-group row'>
   <label for='taskType' class='col-form-label col-sm-3'>Type</label>
   <label for='taskType' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].type+`</label>
   <div class='col-sm-3'>
   <select class='toHide form-control' id='taskType'>
         <option value='Issue'>Issue</option>
         <option value='Improvement'>Improvement</option>
   </select>
   </div>
   </div>
   <div class='form-group row'>
   <label for='taskStatus' class='col-form-label col-sm-3'>Status</label>
   <label for='taskStatus'  class='toShow col-form-label col-sm-3'>`+getTasks[taskId].status+`</label>
   <div class='col-sm-3'>
   <select class='toHide form-control' id='taskStatus'>
         <option value='Open'>Open</option>
         <option value='Inprocess'>InProcess</option>
         <option value='Closed'>Closed</option>
   </select>
   </div>
   </div>
   <div class='form-group row'>
   <label for='taskPName' class='col-form-label col-sm-3'>Project Name</label>
   <label for='taskPName'  class='toShow col-form-label col-sm-3'>`+getTasks[taskId].projectname+`</label>
   <div class='col-sm-3'>
   <input type='text' class='toHide form-control' id='taskPName' value='`+getTasks[taskId].projectname+`'>
   </div>
   </div>
   <div class='form-group row'>
   <label for='taskATo' class='col-form-label col-sm-3'>Assigned To</label>
   <label for='taskATo' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].assignedTo+`</label>
   <div class='col-sm-3'>
   <input type='text' class='toHide form-control' id='taskATo' value='`+getTasks[taskId].assignedTo+`'>
   </div>
   </div>
   <div class='form-group row'>
   <label for='taskOrighrs' class='col-form-label col-sm-3'>Estimated Hours</label>
   <label for='taskOrighrs' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].orighrs+`</label>
   <div class='col-sm-3'>
   <input type='time' class='toHide form-control' id='taskOrighrs' value='`+getTasks[taskId].orighrs+`'>
   </div>
   </div>
   <div class='form-group row'>
   <label for='taskWrkhrs' class='col-form-label col-sm-3'>Worked Hours</label>
   <label for='taskWrkhrs' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].workedhrs+`</label>
   <div class='col-sm-3'>
   <input type='time' class='toHide form-control' id='taskWrkhrs' value='`+getTasks[taskId].workedhrs+`'>
   </div>
   </div>
   <div class='form-group row'>
   <label for='taskRmhrs' class='col-form-label col-sm-3'>Remaining Hours</label>
   <label for='taskRmhrs' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].orighrs+`</label>
   <div class='col-sm-3'>
   <input type='time' class='toHide form-control' id='taskRmhrs' value='`+getTasks[taskId].orighrs+`'>
   </div>
   </div>
   <div class='form-group row'>
   <label class='col-form-label col-sm-3'>Posted Date</label>
   <label class='col-form-label col-sm-3'>`+getTasks[taskId].pdate+`</label>
   </div>
   <div class='form-group row'>
   <label for='taskCdate'  class='col-form-label col-sm-3'>Closing Date</label>
   <label  for='taskCdate' class='toShow col-form-label col-sm-3'>`+getTasks[taskId].cdate+`</label>
   <div class='col-sm-3'>
   <input type='date' class='toHide form-control' id='taskCdate' value='`+getTasks[taskId].cdate+`'>
   </div>
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

   var tName = document.getElementById('taskName').value;
   var tDesc = document.getElementById('taskDesc').value;
  var tStatus = document.getElementById('taskStatus').value;
  var tPro = document.getElementById('taskPName').value;
  var tAssignedTo = document.getElementById('taskATo').value;
  var orighours = document.getElementById('taskOrighrs').value;
  var workedhrs = document.getElementById('taskWrkhrs').value;
  var rmhrs = document.getElementById('taskRmhrs').value;
  var tType = document.getElementById('taskType').value;
  //var Pdate = document.getElementById('taskPdate').value;
  var Cdate = document.getElementById('taskCdate').value;

  var tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks[taskId].name = tName;
  tasks[taskId].description = tDesc;
  tasks[taskId].status = tStatus;
  tasks[taskId].projectname = tPro;
  tasks[taskId].assignedTo = tAssignedTo;
  tasks[taskId].orighrs = orighours;
  tasks[taskId].workedhrs = workedhrs;
  tasks[taskId].type = rmhrs;
  tasks[taskId].type = tType;
  //tasks[taskId].pdate = Pdate;
  tasks[taskId].cdate = Cdate;

  localStorage.setItem('tasks', JSON.stringify(tasks));

    Button.textContent = 'Edit';
  }
}
