// Event Listener

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// call event

const doSomethings = () => {
    alert("Doing Something");
}

h2.addEventListener("click", doSomethings, false)


//This is all about Elite