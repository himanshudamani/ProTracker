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
            projectTable +="<td>"+projects[i].pdate+"</td></tr>";
      }
}
if (projectTable == '') {
      projectTable="<div class='alert alert-danger' role='alert''><strong>Oh snap..!</strong> No Projects Are Assigned To You</div>";
}
document.getElementById('projectTable').innerHTML = projectTable;
