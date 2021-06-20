window.onload = function () {
  var d = document;
  var q = "querySelector";
  var iframe = d[q]("iframe");
  // We target all textarea
  var area = document.querySelectorAll('textarea');

  // We bind on each textarea change event
  for (var i = area.length - 1; i >= 0; i--) {
    if (area[i].addEventListener) {
      area[i].addEventListener('input', function () {
        // event handling code for sane browsers
        iframe.srcdoc = area[0].value + '<style>' +
          area[1].value + '</style>' + '<script>' +
          area[2].value + '<\/script>';
      }, false);
    } else if (area[i].attachEvent) {
      area[i].attachEvent('onpropertychange', function () {
        // IE-specific event handling code
        iframe.srcdoc = area[0].value + '<style>' +
          area[1].value + '</style>' + '<script>' +
          area[2].value + '<\/script>';
      });
    }
  }
}
