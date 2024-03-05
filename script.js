function hoverImage(originalId, hoverId) {
    document.getElementById(originalId).style.display = "none";
    document.getElementById(hoverId).style.display = "block";
  }
  
  function originalImage(originalId, hoverId) {
    document.getElementById(originalId).style.display = "block";
    document.getElementById(hoverId).style.display = "none";
  }