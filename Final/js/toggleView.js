function toggleView() {
    var x = document.getElementById("bussinessList");
    if (x.className === "cards") {
      x.className = "cardsList";
    } else {
      x.className = "cards";
    }
  }