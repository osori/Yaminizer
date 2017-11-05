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

var translate_mode = 0; // 0: 야민정음으로 번역
                        // 1: 일상어로 되돌리기

// 야민정음으로 바뀔 수 있는 글자/단어들의 리스트를 토대로
// regex 를 생성
var hunmin = Object.keys(yaminjeongeum["naive rules"]);
var re_yaminize = new RegExp(hunmin.join('|'), 'g');

// 일상어 -> 야민정음
function yaminize(str){
	return str.replace(re_yaminize, function(match){
		return yaminjeongeum["naive rules"][match];
	});
}

var yamin = Object.values(yaminjeongeum["naive rules"]);
var re_hunminize = new RegExp(yamin.join('|'), 'g');

// reverse function of yaminize
function hunminize(str){
	return str.replace(re_hunminize, function(match){
		return hunmin[yamin.indexOf(match)];
	});
}

$('#yaminize').click(function() {
   if($('#yaminize').is(':checked')) { 
        translate_mode = 0; 
        swapIOText();
    }
});

$('#hunminize').click(function() {
   if($('#hunminize').is(':checked')) { 
       translate_mode = 1; 
       swapIOText();
    }
});

$("#input_text").keyup(function(){
	var input_text = $("#input_text").val();
    var result = translate_mode == 0 ? yaminize(input_text) : hunminize(input_text);
	$("#result").val(result);
	$('#result').trigger('autoresize');
})

function swapIOText(){
    var temp = $("#input_text").val();
    console.log(temp);
    $("#input_text").val($("#result").val());
    $("#result").val(temp);
}