window.onload = function() {
  var nameEl = document.getElementById("name");
  nameEl.innerHTML = "_";
  writeNameLoop(nameEl)
};
var name = "Frederic"
var nameIndex = 0;
//This calls timout to write the name until it is fully written
function writeNameLoop(nameEl){
  setTimeout(function(){
    nameEl.innerHTML = name.substr(1,nameIndex+1) + "_";
    nameIndex++;
    
    if(nameIndex < name.length){
        writeNameLoop(nameEl);
    }else{
      nameEl.innerHTML = name.substr(1);
      setTimeout(function(){
        var xmlhttp;
        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp = new XMLHttpRequest();
        }
        else { // code for IE6, IE5
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("all").innerHTML = xmlhttp.responseText;
            window.history.replaceState("", "Frederic Desgreniers", '/index.html');
          }
        }
        xmlhttp.open("GET", "/index.html", true);
        xmlhttp.send();
      }, 200);
    }
        
}, 200);
}