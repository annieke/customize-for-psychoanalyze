$('[name="header-image"]').change(function() {
  switch (this.value) {
    case "meme" :
      $('#header')[0].style.backgroundImage = "url('img/header1.png')";
      break;
    case "what" :
      $('#header')[0].style.backgroundImage = "url('img/header2.jpg')";
      break;
    case "cliche" :
      $('#header')[0].style.backgroundImage = "url('img/header3.jpg')";
      break;
    case "rebel" :
      $('#header')[0].style.backgroundImage = "url('img/header4.png')";
      break;
    case "old" :
      $('#header')[0].style.backgroundImage = "url('img/header5.gif')";
      break;
    case "lazy" :
      $('#header')[0].style.backgroundImage = "none"; // fix?? 
      break;
    default:
      break;
  }
});
