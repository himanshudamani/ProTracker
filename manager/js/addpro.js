

function savePro(){
  var proId = document.getElementById('proIdInput').value;
  var proName = document.getElementById('proNameInput').value;
  var proDesc = document.getElementById('proDescInput').value;
  var proStatus = document.getElementById('proStatusInput').value;
  var proAssignedTo = document.getElementById('proAssignedToInput').value;

  var project = {
    id : proId,
    name : proName,
    description : proDesc,
    status : proStatus,
    assignedTo : proAssignedTo
  }
var projects = localStorage.getItem('projects');

  if ( projects === null) {
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

var assignmentinnerhtml = "<option value='--select--'>--Select--</option>";
var lengthOFDropDown = JSON.parse(localStorage.users).length;
  for (var i = 0; i < lengthOFDropDown; i++) {

    var issues = JSON.parse(localStorage.getItem('users'));
    var user = issues.map( users => {
        return users.name;
    });

  assignmentinnerhtml += "<option value=" + user + ">" + user + "</option>";
  }

document.getElementById('proAssignedToInput').innerHTML =  assignmentinnerhtml;
