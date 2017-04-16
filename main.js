$('input[type="radio"]').change(function() {
  let checkedName = this.name;
  $('input[type="radio"]').each((i, element) => {
    if (element.name === checkedName) {
      if (element.checked) {
        $(element).parent().css({
          opacity: "1",
        });
        $(element).parent().parent().addClass("buzzdiv");
      } else {
        $(element).parent().css({
          opacity: "0.4",
        });
        $(element).parent().parent().removeClass("buzzdiv");
      }
    }
  });
});

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
      $('#header')[0].style.backgroundImage = "url('img/header6.png')";
      break;
    default:
      break;
  }
});

$('[name="font"]').change(function() {
  switch (this.value) {
    case "meme" :
      $('body').css("font-family", 'Comic Sans MS');
      break;
    case "what" :
      $('body').css("font-family", 'Hanalei');
      break;
    case "cliche" :
      $('body').css("font-family", 'Amatica SC');
      break;
    case "rebel" :
      $('body').css("font-family", 'UnifrakturCook');
      break;
    case "old" :
      $('body').css("font-family", 'Italianno');
      break;
    case "lazy" :
      $('body').css("font-family", 'Times');
      break;
    default:
      break;
  }
});

$('[name="text-align"]').change(function() {
  switch (this.value) {
    case "meme" :
      $('*').css("text-align", "center");
      $('#header').css("text-align", "center");
      break;
    case "what" :
      $('*').css("text-align", "right");
      $('#header').css("text-align", "right");
      break;
    case "old" :
      $('*').css("text-align", "left");
      $('#header').css("text-align", "left");
      break;
    default:
      break;
  }
});

$('[name="img-border"]').change(function() {
  switch (this.value) {
    case "lazy" :
      $('div.answer').css("border-radius", "0");
      break;
    case "cliche" :
      $('div.answer').css("border-radius", "25px");
      break;
    case "rebel" :
      $('div.answer').css("border-radius", "200px");
      break;
    default:
      break;
  }
});

$('[name="font-color"]').change(function() {
  switch (this.value) {
    case "meme" :
      $('body').css("color", 'blue');
      $('#header').css("color", 'blue');
      break;
    case "what" :
      $('body').css("color", 'white');
      $('#header').css("color", 'rgb(112,112,112)');
      break;
    case "cliche" :
      $('body').css("color", '#001f3f');
      $('#header').css("color", '#001f3f');
      break;
    case "rebel" :
      $('body').css("color", '#85144b');
      $('#header').css("color", '#85144b');
      break;
    case "old" :
      $('body').css("color", '#F012BE');
      $('#header').css("color", '#F012BE');
      break;
    case "lazy" :
      $('body').css("color", 'rgb(112,112,112)');
      $('#header').css("color", 'white');
      break;
    default:
      break;
  }
});

$('#submit').on('click', function(e) {
  // gather all checked radio-button values
  let choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();
  // now you have an choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
  // you'll need to do some calculations with this
  // a naive approach would be to just choose the most common option - seems reasonable
});
