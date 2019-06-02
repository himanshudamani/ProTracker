var assignmentInnerHtml = "<option value='--select--'>--Select--</option>";
assignmentInnerHtml += JSON.parse(localStorage.users).map(
  user => `<option value=${user.name}>${user.name}</option>`
);
document.getElementById('tAssignedToInput').innerHTML = assignmentInnerHtml;
