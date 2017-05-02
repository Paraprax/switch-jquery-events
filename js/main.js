$ (document).ready(function () {


  $('.switch').click(function () {
    var self = $(this);
    var switchedon = self.hasClass('on');
      if (switchedon) {
         $('body').removeClass('light').addClass('dark');
         self.removeClass('on').addClass('off');
         $('.status').text('Hey, who turned off the lights?!');
      } else {
         $('body').removeClass('dark').addClass('light');
         self.removeClass('off').addClass('on');
         $('.status').text("It's so bright in here!");
      }
  });
});
