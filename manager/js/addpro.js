function savePro() {

  var proName = document.getElementById('proNameInput').value;
  var proDesc = document.getElementById('proDescInput').value;
  var proStatus = document.getElementById('proStatusInput').value;
  var proAssignedTo = document.getElementById('proAssignedToInput').value;
  //date
  var pdate = new Date();
  var dd = String(pdate.getDate()).padStart(2, '0');
  var mm = String(pdate.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = pdate.getFullYear();
  pdate = mm + '/' + dd + '/' + yyyy;
  var id = (new Date).getTime();
  var cdate = document.getElementById('proCdate').value;

  var project = {
    id: id,
    name: proName,
    description: proDesc,
    status: proStatus,
    assignedTo: proAssignedTo,
    pdate: pdate,
    cdate: cdate
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
