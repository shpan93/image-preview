$(document).ready(function () {
  document.getElementById("image").addEventListener("change", uploadFileToServer, false);
  $('#position').change(function (e) {
    $('.image-preview').css({
      backgroundPosition: e.target.value
    })
  });
});

function readFile() {
  if (this.files && this.files[0]) {
    var FR = new FileReader();
    FR.onload = function (e) {
      return e.target.result;
    };
    FR.readAsDataURL(this.files[0]);
  }
}

function uploadFileToServer(event) {
  var file = event.srcElement.files[0];
  console.log(file);
  var reader = new FileReader();
  reader.readAsBinaryString(file);

  reader.onload = function() {
    var base64 = btoa(reader.result);
    $('.image-preview').css({
      backgroundImage: 'url(data:'+ file.type + ';base64,' + base64 + ')'
    })
  };
  reader.onerror = function() {
    console.log('there are some problems');
  };
}