
var words = [],
    titles = [];

var width = $(window).width(),
	height = $(window).height();

//SETUP
$('#rule').css({
	'left': width/2 + 'px',
	'top': height/2-100 + 'px'});

//CLICK
$('#content').click(function(e){ })

$('#info_button').click(function(){
    if ($('#info').css('visibility') == 'hidden') {
        $('#info_button').html('-i')
        $('#info').css('visibility', 'visible')
    } else  {
        $('#info_button').html('+i')
        $('#info').css('visibility', 'hidden')
    }
})

//LOAD Text
$.getJSON( "assets/words.json", function( data ) {
    words = data;
    titles = Object.keys(words);

	//MOUSE MOVE
	$('#content').mousemove(function(e){ updateRule();})
	document.addEventListener('touchmove', function(e) { updateRule();}, false);
 });

function updateRule() {
	$('#rule').html("&nbsp"+genRule());
}

function genRule() {
	var v = words['verbs'],
		n = words['nouns'],
		n0 = Math.floor(Math.random() * n.length),
		n1 = Math.floor(Math.random() * n.length),
		v0 = Math.floor(Math.random() * v.length);
	return "20% of " + n[n0] + " " + v[v0] + " 80% of " + n[n1];
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
