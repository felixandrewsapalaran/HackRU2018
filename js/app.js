$('#flashMessage').hide();

$('#previewButton').click(function(){
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);

  $('#flashMessage')
    .hide()
    .slideDown(1000)
    .delay(1000)
    .slideUp();
});
