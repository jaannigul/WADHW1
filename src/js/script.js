console.log("ssssss")
console.log('kdjsjdjhafdjhdsgjgdaghdfj')



document.getElementById("logoButton").addEventListener("click", function() {
    
    var dropdownContent = document.getElementById("dropdown");
    if (dropdownContent.style.display === "block") {
        console.log("vajutasin")
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
      console.log("vajutasin")
    }
  });