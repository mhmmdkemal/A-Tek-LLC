
// Changes the tab selection for items
$('.list-group-item').on('click',function(e){
  var previous = $(this).closest(".list-group").children(".active");
  previous.removeClass('active'); // previous list-item
  $(e.target).addClass('active'); // activated list-item

  // Changes content to appropriate item
  var $this = $(this),
    $id = $this.attr('id');
  $('div[class*=items]').addClass('hide');
  $('.items-' + $id).removeClass('hide');

});
