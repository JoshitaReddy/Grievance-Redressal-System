let id = 301;

function addContact() {
  var name = document.forms["Form1"]["name"].value;
  var telephone = document.forms["Form1"]["telephone"].value;
  var email = document.forms["Form1"]["email"].value;
  var grievance = document.forms["Form1"]["grievance"].value;
  ls = [id, name, telephone, email, grievance];
  id += 1;
  alert('Response Recorded');
  document.getElementById("id1").innerHTML += "<tr><td>" + ls[0] + "</td><td>" + ls[1] + "</td><td>" + ls[2] + "</td><td>" + ls[3] + "</td><td>" + ls[4] + "</td></tr>";
}

function addComments() {
  var id_ = document.forms["Form2"]["id_"].value;
  var name_ = document.forms["Form2"]["name_"].value;
  var comment = document.forms["Form2"]["comment"].value;
  ls1 = [id_, name_, comment];
  alert('Thank you!');
  document.getElementById("id2").innerHTML += "<tr><td>" + ls1[0] + "</td><td>" + ls1[1] + "</td><td>" + ls1[2] + "</td></tr>";
}
