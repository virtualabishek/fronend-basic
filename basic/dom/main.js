const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log("view2")

view1.style.display = "felx"
view2.style.display = "none"


const views = document.getElementsByClassName("view")
console.log(views)

const sameViews = document.querySelectorAll('.views');
console.log(sameViews)

const divs = view1.querySelectorAll("div");

console.log(divs)

const sameDivs = view1.getElementsByTagName("div")
console.log(sameDivs)

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs)
for (let i = 0; i<evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    /* evenDivs[i].style.width="200px";
    evenDivs[i].style.height="200px"; */
}

const myText = document.querySelector("nav h1")
console.log(myText)
myText.textContent = "Hello World!"
const navbar = document.querySelector("nav")
navbar.innerHTML = `<h1>Hello</h1> <p>This should align write.`
console.log(navbar)
navbar.style.justifyContent = "space-between";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);

view1.style.display="none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "row";
view2.style.margin =  "10px"


while(view2.lastChild){
    view2.lastChild.remove();
}


const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.width = "100px";
    newDiv.style.margin = "10px"
    parent.append(newDiv)
}

/* createDivs(view2, 10)
 */
