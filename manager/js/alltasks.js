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

function forId(clickedId){
  var theId = clickedId.id;
  var getTasks =JSON.parse(localStorage.getItem("tasks")) ;
  var taskDetails =
   "<div class='row'>"+
   "<dt class='col-sm-3'>Task Name</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].name+"</dd>"+
   "<dt class='col-sm-3'>Task Description</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].description+"</dd>"+
   "<dt class='col-sm-3'>Type</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].type+"</dd>"+
   "<dt class='col-sm-3'>Status</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].status+"</dd>"+
   "<dt class='col-sm-3'>Project Name</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].projectname+"</dd>"+
   "<dt class='col-sm-3'>Assigned To</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].assignedTo+"</dd>"+
   "<dt class='col-sm-3'>Estimated Hours</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].orighrs+"</dd>"+
   "<dt class='col-sm-3'>Worked Hours</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].workedhrs+"</dd>"+
   "<dt class='col-sm-3'>Remaining Hours</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].orighrs+"</dd>"+
   "<dt class='col-sm-3'>Posted Date</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].date+"</dd>"+
   "<dt class='col-sm-3'>Closed Date</dt>"+
   "<dd class='col-sm-9'>"+getTasks[theId].date+"</dd>"+
   "</dl>";
 document.getElementById('taskDetails').innerHTML = taskDetails;
}
