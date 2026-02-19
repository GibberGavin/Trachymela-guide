function previousNext(entity){
	var links = prevNext;
	var files = links[entity];
	var prev = files[0];
	var next = files[1];
	document.getElementById("hd-button-previousnext").innerHTML=('<div id="button-next"><a href="'+ next +'.htm">Next</a></div><div id="button-previous"><a href="'+ prev +'.htm">Previous</a></div>'); 	
    //document.getElementById("button-previousnext").innerHTML=('<li id="button-previous"><a href="'+ prev +'.htm">Previous</a></li><li id="button-next"><a href="'+ next +'.htm">Next</a></li>');
	document.getElementById("button-previousnext").innerHTML = ('<div id="button-next"><a href="' + next + '.htm">Next</a></div><div id="button-previous"><a href="' + prev + '.htm">Previous</a></div>');
}
