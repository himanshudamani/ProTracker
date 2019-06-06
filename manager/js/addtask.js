var assignmentInnerHtml = "<option value='--select--'>--Select--</option>";
assignmentInnerHtml += JSON.parse(localStorage.users).map(
  user => `<option value=${user.name}>${user.name}</option>`
);
document.getElementById('tAssignedToInput').innerHTML = assignmentInnerHtml;


var ProInputinnerHtml = "<option value='--select--'>--Select--</option>";
ProInputinnerHtml += JSON.parse(localStorage.projects).map(
  project => `<option value=${project.name}>${project.name}</option>`
);
document.getElementById('tProInput').innerHTML = ProInputinnerHtml;

 function saveTask(){

  var tName = document.getElementById('tNameInput').value;
  var tDesc = document.getElementById('tDescInput').value;
  var tStatus = document.getElementById('tStatusInput').value;
  var tPro = document.getElementById('tProInput').value;
  var tAssignedTo = document.getElementById('tAssignedToInput').value;
  var orighours = document.getElementById('orighoursInput').value;
  var tType = document.getElementById('tType').value;
  var date = new Date();

  var task = {
    name: tName,
    description: tDesc,
    status: tStatus,
    projectname: tPro,
    assignedTo: tAssignedTo,
    orighrs: orighours,
    workedhrs: '0';
    type: tType,
    date: date
  };

  var tasks = localStorage.getItem('tasks');

  if (tasks === null) {
    var tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    var tasks = JSON.parse(tasks);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  document.getElementById('tInputForm').reset();
}
