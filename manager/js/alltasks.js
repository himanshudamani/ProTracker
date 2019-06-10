//Select Project Dropdown
var selectProInnerHtml="<option value='--select--'>--Select--</option>";
selectProInnerHtml += JSON.parse(localStorage.projects).map(
  project => `<option value=${project.name}>${project.name}</option>`
);

document.getElementById('selectPro').innerHTML = selectProInnerHtml;

//Table Display
function DisplayTable(){
  var getTasks =JSON.parse(localStorage.getItem("tasks")) ;
  var selectValue = document.getElementById('selectPro').value;
  var  tasksTableInnerHtml;
  tasksTableInnerHtml="";
  if (selectValue== '--select--') {
    document.getElementById('tasksTable').innerHTML= "<label>Select a project please</label>";
  }
  for (var i = 0; i < getTasks.length; i++) {
    if (getTasks[i].projectname == selectValue) {
      tasksTableInnerHtml+="<tr"+" id='"+ i +"' data-toggle='modal' data-target='#trModal' onclick='forId(this)'>";
      tasksTableInnerHtml += "<td>" + getTasks[i].name + "</td>";
      tasksTableInnerHtml += "<td>" + getTasks[i].type + "</td>";
      tasksTableInnerHtml += "<td>" + getTasks[i].status + "</td>";
      tasksTableInnerHtml += "<td>" + getTasks[i].assignedTo + "</td>";
      tasksTableInnerHtml += "<td>" + getTasks[i].orighrs + "</td>";
      tasksTableInnerHtml += "<td>" + getTasks[i].date + "</td></tr>";

      document.getElementById('tasksTable').innerHTML = tasksTableInnerHtml;
    }
  }
}

//Modal innerHTML
function forId(clickedId){
  var theId = clickedId.id;
  var getTasks =JSON.parse(localStorage.getItem("tasks")) ;
  var taskDetails =
  "<form>"+
   "<div class='form-group row'>"+
   "<label for='taskName'  class='col-form-label col-sm-3'>Task Name</label>"+
   "<label  for='taskName'  class='toShow col-form-label col-sm-3'>"+getTasks[theId].name+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskName' value=' "+getTasks[theId].name+" '>"+
   "</div>"+
   "</div>"+
   "<div class='form-group row'>"+
   "<label for='taskDesc'  class='col-form-label col-sm-3'>Description</label>"+
   "<label  for='taskDesc'  class='toShow col-form-label col-sm-3'>"+getTasks[theId].description+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskDesc' value='"+getTasks[theId].description+"'>"+
   "</div>"+
   "</div>"+
   "<div class='form-group row'>"+
   "<label for='taskType'  class='col-form-label col-sm-3'>Type</label>"+
   "<label  for='taskType'  class='toShow col-form-label col-sm-3'>"+getTasks[theId].type+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskType' value=' "+getTasks[theId].type+"'>"+
   "</div>"+
   "</div>"+
   "<div class='form-group row'>"+
   "<label for='taskStatus'  class='col-form-label col-sm-3'>Status</label>"+
   "<label  for='taskStatus'  class='toShow col-form-label col-sm-3'>"+getTasks[theId].status+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskStatus' value=' "+getTasks[theId].status+"'>"+
   "</div>"+
   "</div>"+
   "<div class='form-group row'>"+
   "<label for='taskPName'  class='col-form-label col-sm-3'>Project Name</label>"+
   "<label  for='taskPName'  class='toShow col-form-label col-sm-3'>"+getTasks[theId].projectname+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskPName' value=' "+getTasks[theId].projectname+"'>"+
   "</div>"+
   "</div>"+
   "<div class='form-group row'>"+
   "<label for='taskATo'  class='col-form-label col-sm-3'>Assigned To</label>"+
   "<label  for='taskATo' class='toShow col-form-label col-sm-3'>"+getTasks[theId].assignedTo+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskATo' value=' "+getTasks[theId].assignedTo+"'>"+
   "</div>"+
   "</div>"+
   "<div class='form-group row'>"+
   "<label for='taskOrighrs'  class='col-form-label col-sm-3'>Estimated Hours</label>"+
   "<label  for='taskOrighrs' class='toShow col-form-label col-sm-3'>"+getTasks[theId].orighrs+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskOrighrs' value=' "+getTasks[theId].orighrs+"'>"+
   "</div>"+
   "</div>"+
   "<div class='form-group row'>"+
   "<label for='taskWrkhrs'  class='col-form-label col-sm-3'>Worked Hours</label>"+
   "<label  for='taskWrkhrs' class='toShow col-form-label col-sm-3'>"+getTasks[theId].workedhrs+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskWrkhrs' value=' "+getTasks[theId].workedhrs+"'>"+
   "</div>"+
   "</div>"+
   "<div class='form-group row'>"+
   "<label for='taskRmhrs'  class='col-form-label col-sm-3'>Remaining Hours</label>"+
   "<label  for='taskRmhrs' class='toShow col-form-label col-sm-3'>"+getTasks[theId].orighrs+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskRmhrs' value=' "+getTasks[theId].orighrs+"'>"+
   "</div>"+
   "</div>"+
   "<div class='form-group row'>"+
   "<label for='taskPdate'  class='col-form-label col-sm-3'>Posted Date</label>"+
   "<label  for='taskPdate' class='toShow col-form-label col-sm-3'>"+getTasks[theId].date+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskPdate' value=' "+getTasks[theId].date+"'>"+
   "</div>"+
   "</div>"+
   "<div class='form-group row'>"+
   "<label for='taskCdate'  class='col-form-label col-sm-3'>Closed Date</label>"+
   "<label  for='taskCdate' class='toShow col-form-label col-sm-3'>"+getTasks[theId].date+"</label>"+
   "<div class='col-sm-3'>"+
   "<input type='text' class='toHide form-control' id='taskCdate' value=' "+getTasks[theId].date+"'>"+
   "</div>"+
   "</div>"+
  "</form>";
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
  var Pdate = document.getElementById('taskPdate').value;
  var Cdate = document.getElementById('taskCdate').value;

  var task = {
    name: tName,
    description: tDesc,
    status: tStatus,
    projectname: tPro,
    assignedTo: tAssignedTo,
    orighrs: orighours,
    workedhrs: workedhrs,
    rmhrs: rmhrs,
    type: tType,
    posteddate: Pdate,
    closeddate: Cdate
  };
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks[0].description = "jhgjk hgjkgh";
  localStorage.setItem('tasks', JSON.stringify(tasks));

    Button.textContent = 'Edit';
  }
}
