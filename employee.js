$(document).ready(function(){
      demo.initChartist();

      $.notify({
            icon: 'pe-7s-gift',
            message: "Welcome to <b>ProTracker</b> -A Simplified Project Tracker Web-App."
      },{
            type: 'info',
            timer: 4000
      });
});

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
      var projectCount = _.countBy(_.map(JSON.parse(localStorage.getItem("projects")), project => project.assignedTo))
      var piedata = _.concat([['Task', 'No of projects']] ,_.zip(_.keys(projectCount), _.values(projectCount)))
      var data = google.visualization.arrayToDataTable(piedata);
      var options = {
            title: 'Pie Chart',
            is3D: true,
      };
      var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
      chart.draw(data, options);
}

var loggedUserId = localStorage.getItem('loggedUserId');
var users = JSON.parse(localStorage.getItem("users")) ;
var projectTable ='';
for (var i = 0; i < users.length; i++) {
      if (users[i].id == loggedUserId) {
            var user = users[i].name;
      }
}
var projects = JSON.parse(localStorage.getItem("projects"));
for (var i = 0; i < projects.length; i++) {
      if (projects[i].assignedTo == user) {
            projectTable +="<tr>";
            projectTable +="<td>"+projects[i].name+"</td>";
            projectTable +="<td>"+projects[i].status+"</td>";
            projectTable +="<td>"+projects[i].sdate+`</td><td class="td-actions text-right">
                  <button type="button" rel="tooltip" title="Edit Project" class="btn btn-info btn-simple btn-xs" id='`+ i +`' data-toggle='modal' data-target='#projectModal' onclick='projectModal(this)'>
                        <i class="fa fa-edit"></i>
                  </button>
                  <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs" id='`+i+`' data-toggle='modal' data-target='#projectDelete' onclick='deleteProjectId(this)'>
                        <i class="fa fa-times"></i>
                  </button>
            </td></tr>`;
      }
}
if (projectTable == '') {
      projectTable="<div class='alert alert-danger' role='alert''><strong>Oh snap..!</strong> No Projects Are Assigned To You</div>";
}
document.getElementById('projectTable').innerHTML = projectTable;

var taskRem ='';
var tasks = JSON.parse(localStorage.getItem("tasks"));

for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].assignedTo==user && tasks[i].status !== "Closed") {
            taskRem +="<tr>";
            taskRem +="<td>"+tasks[i].name+"</td>";
            taskRem +="<td>"+tasks[i].rmhrs+"</td></tr>";
      }
}
document.getElementById('taskRem').innerHTML = taskRem;

var projectId;
function projectModal(clickedId){
      projectId = clickedId.id;
      var getProjects = JSON.parse(localStorage.getItem("projects"));
      var projectDetails =
      `<form>
      <div class='form-group row'>
      <label for='projectName' class='col-form-label col-sm-4'>Project Name</label>
      <div class='col-sm-6'>
      <input type='text' class='form-control' id='projectName' value='`+getProjects[projectId].name+`'>
      </div>
      </div>
      <div class='form-group row'>
      <label for='projectDesc' class='col-form-label col-sm-4'>Description</label>
      <div class='col-sm-6'>
      <input type='text' class='form-control' id='projectDesc' value='`+getProjects[projectId].description+`'>
      </div>
      </div>
      <div class='form-group row'>
      <label for='projectStatus' class='col-form-label col-sm-4'>Status</label>
      <div class='col-sm-6'>
      <select class='form-control' id='projectStatus'>
            <option value='Open'>Open</option>
            <option value='Inprocess'>InProcess</option>
            <option value='Closed'>Closed</option>
      </select>
      </div>
      </div>
      <div class='form-group row'>
      <label for='projectpdate' class='col-form-label col-sm-4'>Posted Date</label>
      <div class='col-sm-4'>
      <label for='projectpdate'  class='col-form-label'>`+getProjects[projectId].pdate+`</label>
      </div>
      </div>
      <div class='form-group row'>
      <label for='projectsdate' class='col-form-label col-sm-4'>Starting Date</label>
      <div class='col-sm-6'>
      <input type='date' class='form-control' id='projectsdate' value='`+getProjects[projectId].sdate+`'>
      </div>
      </div>
      <div class='form-group row'>
      <label for='projectcdate' class='col-form-label col-sm-4'>Closing Date</label>
      <div class='col-sm-6'>
      <input type='date' class='form-control' id='projectcdate' value='`+getProjects[projectId].cdate+`'>
      </div>
      </div>
      </form>`;
      document.getElementById('projectDetails').innerHTML = projectDetails;
}

//save project edits
function SaveProject(){
      var pName = document.getElementById('projectName').value;
      var pDesc = document.getElementById('projectDesc').value;
      var pStatus = document.getElementById('projectStatus').value;
      var psdate = document.getElementById('projectsdate').value;
      var pcdate = document.getElementById('projectcdate').value;

      var projects = JSON.parse(localStorage.getItem('projects'));

      projects[projectId].name = pName;
      projects[projectId].description = pDesc;
      projects[projectId].status = pStatus;
      projects[projectId].sdate = psdate;
      projects[projectId].cdate = pcdate;

      localStorage.setItem('projects', JSON.stringify(projects));
      window.location.reload();
}

var deleteId
function deleteProjectId(clickedId){
      deleteId = clickedId.id;
}

function deleteProject(){
      var projects = JSON.parse(localStorage.getItem('projects'));
      projects.splice(deleteId,1);
      localStorage.setItem('projects', JSON.stringify(projects));
      window.location.reload();
}
