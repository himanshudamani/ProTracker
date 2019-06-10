function addEmp(){
  var userId = (new Date).getTime();
  var uName = document.getElementById('uNameInput').value;
  var userName = document.getElementById('userNameInput').value;
  var upw = document.getElementById('userPwInput').value;

  var user = {
    id : userId,
    name : uName,
    username : userName,
    password : upw
  };

  var users = localStorage.getItem('users');

    if ( users === null) {
      var users = [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      var users = JSON.parse(users);
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }



    document.getElementById('userAddForm').reset();


}
