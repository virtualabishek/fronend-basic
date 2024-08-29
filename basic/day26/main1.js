//async is a function that fetches a promises.
async function myAsync(){
	let data = await fetch('https://api.programiz.pro/api/Demo/javascript/movies');
	let text = await data.text();
	console.log(text);
	};
myAsync();
