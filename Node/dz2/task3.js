var fs = require('fs');

fs.readFile('data.txt', (err, data) => {
  if(err) console.error("write error: " + error.message);
	var datastr = data.toString();
	var arr = datastr.split(' ');
	var arr2 = [];
	for (i = 0 ; i<arr.length; i++){
		if (arr[i] %2 ===0){
			arr2.push(arr[i]); 
		}
	}
	var out1 = arr2.join(' ');
	fs.writeFile("out-1.txt", out1, (err) => {
  		if(err) console.error("write error: " + error.message);
  		else console.log('Success to create out-1');
  	});

  	var arr3 = [];
  	for (i = 0; i<arr.length; i++){ 
			arr3.push(arr[i]**3); 
		};
	var out2 = arr3.join(' ');	
	fs.writeFile("out-2.txt", out2, (err) => {
  		if(err) console.error("write error: " + error.message);
  		else console.log('Success to create out-2');
  	});
 });



