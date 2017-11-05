var yaminjeongeum = { 'naive rules': 
      { '대': '머',
      	'멍': '댕',
      	'포': '쪼',
      	'비': '네',
        '왕': '앟',
        '광': '팡',
        '귀': '커',
        '피': '괴',
        '파': '과',
        '명': '띵',
        '유': '윾',
        '며': '띠',
        '주작': '짞',
        '비버': '뜨또',
        '복복': '뾱',
        '조조': '쬬',
        '돌돔': '뚊',
        '존좋': '쫂',
        '스스': '쓰',
        '스시': '씌',
        '부부': '쀼',
        '주주': '쮸',
        '굴국밥': '뀱밥',
        '구구': '뀨',
        'ㅅㅂㄹㅁ': '섊',
        '근': 'ㄹ',
        '日': '티', } };

var hunmin = Object.keys(yaminjeongeum["naive rules"]);
var re = new RegExp(hunmin.join('|'), 'g');

function yaminize(str){
	return str.replace(re, function(match){
		return yaminjeongeum["naive rules"][match];
	});
}

// reverse function of yaminize
function hunminize(str){

}

$("#input_text").keyup(function(){
	var input_text = $("#input_text").val();
	var result = yaminize(input_text)
	$("#result").val(result);
	$('#result').trigger('autoresize');
})

  $('#input_text').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
