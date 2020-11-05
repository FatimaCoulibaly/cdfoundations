// global variables
let selection = 0

function update() {
	// local variables
	let options = document.querySelectorAll('.option')
	console.log(options)
	options.forEach(item => item.onclick=function() {
		selection = item.id
		console.log(selection)})

}

function myFunction() {
  document.getElementById("happy").innerHTML = "I am happy!";

    document.getElementById("neutral").innerHTML = "I am neutral!";

  document.getElementById("sad").innerHTML = "I am sad!";

}

update();
