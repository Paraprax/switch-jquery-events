$ (document).ready(function () {
  $('.status').text('Fire The Emergency Booster Rockets!');

  $('.switch').click(function () {
    var self = $(this);
    var switchedon = self.hasClass('on');
      if (switchedon) {
         self.removeClass('on').addClass('off');
      } else {
         self.removeClass('off').addClass('on');
      }
  });
});
