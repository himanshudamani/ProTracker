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

  EmpTableInnerHtml+="<tr>";
  EmpTableInnerHtml += "<td>" + getTasks[i].name + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].type + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].atatus + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].projectname + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].orighrs + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].type + "</td></tr>";

  document.getElementById('EmpTable').innerHTML = EmpTableInnerHtml;
}

}


}
