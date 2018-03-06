window.onload=(()=>{
  var form = document.querySelector("#form");
  var tbody = document.querySelector("#contacts tbody");
  var contacts = JSON.parse(localStorage.getItem("contacts"));
  if (contacts == null) {
    contacts = [];
    localStorage.setItem("contacts",JSON.stringify(contacts));
  }
  form.addEventListener("submit",function(ev) {
    ev.preventDefault();
    var nom = this.elements.nom.value;
    var prenom = this.elements.prenom.value;
    var email = this.elements.email.value;
    var tr = document.createElement("tr");
    
    contacts.push({"nom":nom,"prenom":prenom,"email":email});
    localStorage.setItem("contacts",JSON.stringify(contacts));
    
    tr.innerHTML = "<td>"+nom+"</td>"
                    +"<td>"+prenom+"</td>"
                    +"<td>"+email+"</td>";
    tbody.appendChild(tr);
    this.reset();
  });
  tbody.addEventListener("click", function(ev) {
    if (confirm("Supprimer?"))
      this.removeChild(ev.target.parentNode);
  },true);
});
