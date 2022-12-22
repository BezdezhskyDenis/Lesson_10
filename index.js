$("button").on("click", function (event) {
  switch (this.id) {
    case 'first':
        var slide = $("h1");
    
        slide.animate({rotate: '360deg'}, "slow");
        slide.animate({rotate: '-360deg'}, "slow");
      break;
    case 'second':
        var pFade = $('p');
        pFade.fadeToggle('slow');
      break;
    case 'third':
        var liChain = $('li');
        liChain.slideUp(2000).slideDown(2000);
      break;

    default:
      break;
  }
  console.log(this.id);
});
