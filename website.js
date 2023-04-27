/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function callRes1() {
    location.replace("momotoko.html")
  }

  function callRes2() {
    location.replace("Ahaan Tam Sang.html")
  }

  function callRes3() {
    location.replace(" ")
  }
  