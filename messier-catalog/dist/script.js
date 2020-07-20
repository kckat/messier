function filterSelection(c) {
  var x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (var i = 0; i < x.length; i++){
    removeClassA(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClassA(x[i], "show");
  }
}

//show filtered elements
function addClassA(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) == -1){
      element.className += " " + arr2[i];
    }
  }
}

//hide all other elements
function removeClassA(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++){
    while(arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

//add active class to highlight selected category
var btnWrap = document.getElementById("button-wrapper");
var btns = btnWrap.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", function (){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active","");
    this.className += " active";
  });
}

filterSelection("all");