// global variables
let selection = 0

function update() {
	// local variables
	let options = document.querySelectorAll('.option')
	let title = document.querySelector('h1')
	console.log(options)
	options.forEach(item => item.onclick=function() {
		selection = item.id
		console.log(selection)
		title.innerHTML= "Today I feel " + selection + " because of the weather."

	})

}

update();


