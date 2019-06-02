//Select Emp Dropdown
var selectEmpInnerHtml="<option value='--select--'>--Select--</option>";
selectEmpInnerHtml += JSON.parse(localStorage.users).map(
  user => `<option value=${user.name}>${user.name}</option>`
);

document.getElementById('selectEmp').innerHTML = selectEmpInnerHtml;
