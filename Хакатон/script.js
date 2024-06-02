let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let span = document.getElementsByClassName("close")[0];
document.getElementById("loader").style.display = "none";
document.getElementById("table-res").style.display = "none";
document.querySelector(".Block_download").style.display = "none";
document.getElementById("xar-res").style.display = "none";
document.getElementById("report").style.display = "none";

function closeBlocks() {
  modal.style.display = "none";
  document.getElementById("table-res").style.display = "none";
  document.querySelector(".Block_download").style.display = "none";
  document.getElementById("xar-res").style.display = "none";
  document.getElementById("report").style.display = "none";
  document.getElementById("loader").style.display = "block";
  setTimeout(function () {
    document.getElementById("table-res").style.display = "block";
    document.querySelector(".Block_download").style.display = "block";
    document.getElementById("xar-res").style.display = "block";
    document.getElementById("report").style.display = "block";
    document.getElementById("loader").style.display = "none";
  }, 5000);
}

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    closeBlocks();
  }
};

document.getElementById("file-upload").addEventListener("change", function () {
  closeBlocks();
});
