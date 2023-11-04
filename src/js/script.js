console.log("hshshshhshshs")
document.getElementById("logoButton").addEventListener("click", function() {
    
    var dropdownContent = document.getElementById("dropdown");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });