
function mangvalidate(){
  if (document.mangform.email.value == "") {
    alert( "Please provide Email!" );
            return false;
  }
  if (document.mangform.password.value =="") {
    alert( "Please provide Password!" );
            return false;
  }
  return (true);
}

function empvalidate(){
  if ( document.empform.email.value == "") {
    alert( "Please provide Email!" );
            return false;
  }
  if (document.empform.password.value == "") {
    alert( "Please provide Password!" );
            return false;
  }
  return (true);
}
