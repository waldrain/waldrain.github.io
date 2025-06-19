/* jtgallery.js -- Jeremy Tammik, 2020-05-06 */

function add_image_thumbnails_with_links( index, container ) {
  var a = container.getAttribute("jtgallery").split(",");
  var dir = a[0];
  var basenames = a.slice(1,);
  var jqcontainer = $(container);
  var baseUrl = 'photo/' + dir +'/';

  $.each(basenames, function (index, basename) {
    filename = (basename.endsWith('.jpg') || basename.endsWith('.png'))
      ? basename
      : basename + '.jpg';
    $('<a/>')
      .append($('<img>')
      .prop('src', baseUrl + 'thumb/' + filename))
      .prop('href', baseUrl + filename)
      .prop('title', basename)
      .appendTo(jqcontainer);
  });
  jqcontainer.lightGallery();
}

$(document).ready( function() {
  $.each( $( "div[jtgallery]" ),
    add_image_thumbnails_with_links );
});
