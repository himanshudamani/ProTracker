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

  tasksTableInnerHtml+="<tr>";
  tasksTableInnerHtml += "<td>" + getTasks[i].name + "</td>";
  tasksTableInnerHtml += "<td>" + getTasks[i].type + "</td>";
  tasksTableInnerHtml += "<td>" + getTasks[i].atatus + "</td>";
  tasksTableInnerHtml += "<td>" + getTasks[i].assignedTo + "</td>";
  tasksTableInnerHtml += "<td>" + getTasks[i].orighrs + "</td>";
  tasksTableInnerHtml += "<td>" + getTasks[i].date + "</td></tr>";

  document.getElementById('tasksTable').innerHTML = tasksTableInnerHtml;
}

}

}
