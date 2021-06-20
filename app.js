function showPreview(){
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "style"+document.getElementById("htmlCode").value+"</style>;
  var jsCode = ""+document.getElementById("jsCode").value+"";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode+cssCode+jsCode);
  frame.close();
}
document.getElementById("htmlCode").addEventListener("keyup", showPreview)
document.getElementById("jsCode").addEventListener("keyup", showPreview)
document.getElementById("cssCode").addEventListener("keyup", showPreview)
