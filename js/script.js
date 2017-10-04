$("#name-input").keyup(function(e) {
  var re = /^[a-zA-Z\s]+$/;
  if (re.test(this.value) !== true)
    this.value = this.value.replace(/[^a-zA-Z\s]+$/, '');
});

$("#cvc-input").keyup(function(e) {
  var regex = /^[0-9]+$/;
  if (regex.test(this.value) !== true)
    this.value = this.value.replace(/^[0-9]+$/, '');
});
document.getElementById('month-year-input').oninput = function () {
  if (this.value.length > 5) this.value = this.value.substr(0, 5);
}
document.getElementById('cvc-input').oninput = function () {
  if (this.value.length > 3) this.value = this.value.substr(0, 3);
}
    $('#card-number-input').keyup(function() {
    if($(this).val()=='4') {
        $('.card').css("background-color", "#6600ff");
        $('.logo').css("backgroundImage", "url(img/visa.png)");
        $('#side-back').css("background-color", "#6600ff");
    }
    if($(this).val()=='5') {
        $('.card').css("background-color", "#3385ff");
        $('.logo').css("backgroundImage", "url(img/mastercard.png)");
        $('#side-back').css("background-color", "#3385ff");
    }
    if($(this).val()=='3') {
        $('.card').css("background-color", "#009933");
        $('.logo').css("backgroundImage", "url(img/unicredit.png)");
        $('#side-back').css("background-color", "#009933");
    }
    if($(this).val()=='') {
        $('.card').css("background-color", "#ebebe0");
        $('.logo').css("backgroundImage", "url(img/bakground.png)");
        $('#side-back').css("background-color", "#ebebe0");
    }
});

var cc = thirdform.cardyear;
for (var i in ['input', 'change', 'blur', 'keyup']) {
    cc.addEventListener('input', formatCardYear, false);
}
function formatCardYear() {
    var cardYear = this.value.replace(/[^\d]/g, '').substring(0,4);
    cardYear = cardYear != '' ? cardYear.match(/.{1,2}/g).join('/') : '';
  this.value = cardYear;
}

var cc = firstform.cardnumber;
for (var i in ['input', 'change', 'blur', 'keyup']) {
    cc.addEventListener('input', formatCardNumber, false);
}
function formatCardNumber() {
    var cardNumber = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardNumber = cardNumber != '' ? cardNumber.match(/.{1,4}/g).join(' ') : '';
  this.value = cardNumber;
}
var month_year_input = document.getElementById('month-year-input');
var entered_values = document.getElementById('entered-values');
month_year_input.onkeyup =  month_year_input.oncopy = month_year_input.onpaste = month_year_input.oncut = (function() {
    return function() {
         entered_values.innerHTML = this.value;
    }
})();
var card_number_input = document.getElementById('card-number-input');
var entered_number_values = document.getElementById('card-number');
card_number_input.onkeyup =  card_number_input.oncopy = card_number_input.onpaste = card_number_input.oncut = (function() {
    return function() {
         entered_number_values.innerHTML = this.value;
    }
})();
var name_input = document.getElementById('name-input');
var entered_name = document.getElementById('name');
name_input.onkeyup =  name_input.oncopy = name_input.onpaste = name_input.oncut = (function() {
    return function() {
         entered_name.innerHTML = this.value.toUpperCase();
    }
})();
var cvc_input = document.getElementById('cvc-input');
var cvc_result = document.getElementById('cvc-result');
cvc_input.onkeyup =  cvc_input.oncopy = cvc_input.onpaste = cvc_input.oncut = (function() {
    return function() {
         cvc_result.innerHTML = this.value;
    }
})();
document.getElementById('cvc-input').addEventListener('click', function(event) {
event.preventDefault();
document.getElementById('side-back').className = 'card change-side-1';
document.getElementById('side-main').className = 'card change-side-2';
}, false );
document.getElementById('card-number-input').addEventListener( 'click', function(event) {
event.preventDefault();
document.getElementById('side-back').className = 'card';
document.getElementById('side-main').className = 'card';
}, false );

document.getElementById('name-input').addEventListener( 'click', function(event) {
event.preventDefault();
document.getElementById('side-back').className = 'card';
document.getElementById('side-main').className = 'card';
}, false );

document.getElementById('month-year-input').addEventListener( 'click', function(event) {
event.preventDefault();
document.getElementById('side-back').className = 'card';
document.getElementById('side-main').className = 'card';
}, false );