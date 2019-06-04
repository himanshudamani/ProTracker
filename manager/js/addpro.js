function savePro() {
  //var proId = document.getElementById('proIdInput').value;
  var proName = document.getElementById('proNameInput').value;
  var proDesc = document.getElementById('proDescInput').value;
  var proStatus = document.getElementById('proStatusInput').value;
  var proAssignedTo = document.getElementById('proAssignedToInput').value;
  var date = new Date();

  var project = {
  //  id: proId,
    name: proName,
    description: proDesc,
    status: proStatus,
    assignedTo: proAssignedTo,
    date: date
  };
  var projects = localStorage.getItem('projects');

  if (projects === null) {
    var projects = [];
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  } else {
    var projects = JSON.parse(projects);
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  document.getElementById('proInputForm').reset();
}

//----Dropdown for assignedTo HTML

var assignmentInnerHtml = "<option value='--select--'>--Select--</option>";
assignmentInnerHtml += JSON.parse(localStorage.users).map(
  user => `<option value=${user.name}>${user.name}</option>`
);
document.getElementById('proAssignedToInput').innerHTML = assignmentInnerHtml;
