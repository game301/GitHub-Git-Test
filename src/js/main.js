const mainHeader = document.querySelector("#main-header");

mainHeader.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "red";
    console.log("Sikeres event!");
    console.log(mainHeader);
});

function logSomething(something) {
    console.log(something);
}

let somethingVariableTest = "Hello test!";

logSomething(somethingVariableTest);
