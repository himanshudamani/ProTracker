//Table items
var getTasks =JSON.parse(localStorage.getItem("tasks")) ;
var  EmpTableInnerHtml;
EmpTableInnerHtml="";

for (var i = 0; i < getTasks.length; i++) {
if (getTasks[i].assignedTo == ) {

  EmpTableInnerHtml+="<tr>";
  EmpTableInnerHtml += "<td>" + getTasks[i].name + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].type + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].atatus + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].projectname + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].orighrs + "</td>";
  EmpTableInnerHtml += "<td>" + getTasks[i].date + "</td></tr>";

  document.getElementById('EmpTable').innerHTML = EmpTableInnerHtml;
}

}
