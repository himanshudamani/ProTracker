

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

  if (localStorage.getItem('projects') === null) {
    var projects = [];
    projects.push(project);
    localStorage.setItem('project', JSON.stringify(projects));
  } else {
    var projects = JSON.parse(localStorage.getItem('projects'));
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  }



  document.getElementById('proInputForm').reset();


}
