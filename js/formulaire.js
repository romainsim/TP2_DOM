window.onload=(()=>{
  var form = document.querySelector("#form");
  var body = document.querySelector("body");
  form.addEventListener("change",function(ev) {
    ev.preventDefault();
    var nombre = this.elements.enfant.value;
    
    for (var i = 1; i <= nombre; i++) {
      var input = document.createElement("input");
      var label = document.createElement("label");
      label.innerHTML = "<label> Prénom enfant "+i+"</label>";
      input.innerHTML = "<input> </input>";
      body.appendChild(label);
      body.appendChild(input);
      this.reset();
    }
    document.querySelector("input, label").forEach(function(element) {;
      body.removeChild(element);
    })
  })
})