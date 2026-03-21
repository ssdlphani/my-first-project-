// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
myHeading.textContent = "My First Project";

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images\\sunrisers hyderabad.png") {
        myImage.setAttribute("src", "images\\srh jersey.jpg");
    } else {
        myImage.setAttribute("src", "images\\sunrisers hyderabad.png");
    }
});

let myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) return; // guard against null/empty
    localStorage.setItem("name", myName);
    myHeading.textContent = `My First Project, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `My First Project, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});
