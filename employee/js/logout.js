function logout(){
      localStorage.removeItem('loggedUserId');
}

var loggedUserId = localStorage.getItem('loggedUserId');
var users = JSON.parse(localStorage.getItem("users")) ;
for (var i = 0; i < users.length; i++) {
      if (users[i].id == loggedUserId) {
            var user = users[i].name;
      }
}
var notify='';
var projects = JSON.parse(localStorage.getItem("projects"));
var tasks = JSON.parse(localStorage.getItem("tasks"));
var todaysDate = new Date();
var dd = String(todaysDate.getDate()).padStart(2, '0');
var mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = todaysDate.getFullYear();
todaysDate = mm + '/' + dd + '/' + yyyy;
for (var i = 0; i < projects.length; i++) {
      if (projects[i].assignedTo == user && projects[i].pdate == todaysDate) {
            notify += `<li id='pro`+i+`'><a href='#'>New Project '`+projects[i].name+`' is assigned to you.
            <button type="button" class="btn btn-danger btn-simple btn-xs" id='pro`+i+`' onclick='deleteNotify(this)'>
                  <i class="fa fa-times"></i>
            </button></a></li>`;
      }
}
for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].assignedTo == user && tasks[i].pdate == todaysDate) {
            notify += `<li id='task`+i+`'><a href='#'>New Task '`+tasks[i].name+`' of Project '`+tasks[i].projectname+`' is assigned to you.
            <button type="button" class="btn btn-danger btn-simple btn-xs" id='task`+i+`' onclick='deleteNotify(this)'>
                  <i class="fa fa-times"></i>
            </button></a></li>`;
      }
}
if (notify == '') {
      notify += `<li><a href='#>No New Notification</a></li>`;
}
function deleteNotify(clickedId){
      var elementId = clickedId.id;
      var element = document. getElementById(elementId);
      element.parentNode.removeChild(element);
}
document.getElementById('notify').innerHTML = notify;
