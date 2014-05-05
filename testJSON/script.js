function load() {
	var mydata = JSON.parse(data);
	console.log(mydata[0].name);
	console.log(mydata[0].age);
	alert(mydata[0].name);
}