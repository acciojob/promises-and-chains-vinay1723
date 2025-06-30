//your JS code here. If required.
let form = document.querySelector('form');
let name = document.getElementById('name');
let age = document.getElementById('age');

form.addEventListener('submit',(e) => {
	e.preventDefault();
	if (!name.value || !age.value) {
		alert('Please enter valid details')
		return;
	}
     let ageNum = Number(age.value);
	let promise = new Promise((resolve,reject) => {

		setTimeout(() => {
		if (ageNum >= 18) {
				resolve(`Welcome, ${name.value}. You can vote.`)
		}else {
			resolve(`Oh sorry ${name.value}. You aren't old enough.`)
		}
		},4000)
	});

	promise.then((data) => {
		alert(data);
	}).catch((err) => {
		alert(err);
	})
})