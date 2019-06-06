//Select Emp Dropdown
var selectEmpInnerHtml="<option value='--select--'>--Select--</option>";
selectEmpInnerHtml += JSON.parse(localStorage.users).map(
  user => `<option value=${user.name}>${user.name}</option>`
);

document.getElementById('selectEmp').innerHTML = selectEmpInnerHtml;

function empTable(){
  //table name

  var e = document.getElementById("selectEmp");
  var selectedEmp = e.options[e.selectedIndex].value;
  if (selectedEmp== '--select--') {
    document.getElementById('empNameWrite').innerHTML= "";
  }
  else {
    document.getElementById('empNameWrite').innerHTML= selectedEmp;
  }

//Table items
var getTasks =JSON.parse(localStorage.getItem("tasks")) ;
var  EmpTableInnerHtml;
EmpTableInnerHtml="";

if (selectedEmp== '--select--') {
  document.getElementById('EmpTable').innerHTML= "<label>Select a Employee please</label>";
}

for (var i = 0; i < getTasks.length; i++) {
if (getTasks[i].assignedTo == selectedEmp) {

  EmpTableInnerHtml+="<tr"+" id='"+ i +"' data-toggle='modal' data-target='#trModal' onclick='forId(this)'>";
  EmpTableInnerHtml += "<td>" + getTasks[i].name + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].type + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].atatus + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].projectname + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].orighrs + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].date + "</td></tr>";

  document.getElementById('EmpTable').innerHTML = EmpTableInnerHtml;
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
