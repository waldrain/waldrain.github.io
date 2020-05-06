/* jlgallery.js -- Jeremy Tammik, 2020-05-06 */

// <div id="lightgallery">
//   <a href="img/img1.jpg">
//       <img src="img/thumb1.jpg" />
//   </a>
//   <a href="img/img2.jpg">
//       <img src="img/thumb2.jpg" />
//   </a>
//   ...
// </div>

function add_image_thumbnails_with_links(index,container){
  var a = container.getAttribute("jtgallery").split(",");
  var dir = a[0];
  var basenames = a.slice(1,);
  var jqcontainer = $(container);
  var baseUrl = 'photo/' + dir +'/';

  $.each(basenames, function (index, basename) {
    filename = basename + '.jpg';
    $('<a/>')
      .append($('<img>')
      .prop('src', baseUrl + 'thumb/' + filename))
      .prop('href', baseUrl + filename)
      .prop('title', basename)
      .appendTo(jqcontainer);
  });

  container.lightGallery();
}

$(document).ready(function() {

  // Add images as links with thumbnails to the page:
  
  $.each( $( "div[jtgallery]" ), add_image_thumbnails_with_links );
});

