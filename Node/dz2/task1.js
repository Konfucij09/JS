var x = parseInt(prompt('Enter x: '));
var y = parseInt(prompt('Enter y: '));
function get_quadrant_number (x,y) {
	if (x>0 && y>0) console.log('1');
	else if (x<0 && y>0) console.log('2');
	else if (x<0 && y<0) console.log('3');
	else if (x>0 && y<0) console.log('4');
	else 
		throw new Error();
	}
get_quadrant_number (x,y);