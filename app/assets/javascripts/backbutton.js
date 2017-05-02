var backBtn = document.getElementById("back-btn");
if(backBtn) {
  backBtn.addEventListener("click", function() {
    history.back(1);
  });
}
