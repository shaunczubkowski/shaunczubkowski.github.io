$( document ).ready(function() {
  fillWaterMark();
});

function fillWaterMark() {
  let watermark = '';

  for (let i = 0; i < 10; i++) {
    watermark += 'Software<br>Engineer<br><br>'
  }

  $('#watermark').html(watermark);
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});