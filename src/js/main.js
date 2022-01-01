const mainHeader = document.querySelector("#main-header");

console.log(mainHeader);

mainHeader.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "red";
    console.log("Sikeres event!");
    console.log(mainHeader);
});

function logSomething(something) {
    console.log(something);
}

logSomething("Hello teszt!");

module.exports = logSomething;
