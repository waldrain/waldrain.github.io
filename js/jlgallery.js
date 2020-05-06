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

function add_image_thumbnails_with_links( dir, basenames ) {
  var container = $('#jlg_' + dir);
  var baseUrl = 'photo/' + dir +'/';

  $.each(basenames, function (index, basename) {
    filename = basename + '.jpg';
    $('<a/>')
      .append($('<img>')
      .prop('src', baseUrl + 'thumb/' + filename))
      .prop('href', baseUrl + filename)
      .prop('title', basename)
      .appendTo(container);
  });

  container.lightGallery();
}

$(document).ready(function() {
  
  // Add images as links with thumbnails to the page:
  
  var dir = '2020-04-03_waldrain';

  var basenames = [
    '210',
    '211',
    '212_nachbar_nord',
    '213_nachbar_nord_west',
    '214_nachbar_west',
    '215_nachbar_suedwest',
    '216_ansicht_von_westen',
    '217_ansicht_von_norden',
    '218_nord_grenze',
    '219',
    '220_ansicht_von_nordost',
    '221',
    '222',
    '223_carl_keller_weg',
    '224_nachbar_im_osten',
    '225',
    '226_nachbar_suedost',
    '227',
    '228',
    '229_ansicht_von_suedost',
    '230_nachbar_suedwest',
    '231',
    '232',
    '233',
    '234_ansicht_aus_suedwest'
  ];
  
  add_image_thumbnails_with_links( dir, basenames );

  dir = '2020-04-08_marianne';
  basenames = [ '946', '947', '950', '951' ];

  add_image_thumbnails_with_links( dir, basenames );
 
});

