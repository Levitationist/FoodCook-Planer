// const inputName = document.querySelector(".input-name-container input");

// Animation

// const inputContainer = document.querySelector(".input-name-container")
// const showBtn = document.querySelector("#showBtn");
// showBtn.addEventListener("click", ()=>{
//     if(inputContainer.classList.contains("hide")){
//         // inputContainer.style.display = "block"
//         showBtn.style.backgroundColor = "#000"
//         showBtn.innerText = "Hide Div"
//         inputContainer.classList.remove("hide")
//     }else{
//         inputContainer.classList.add("hide")
//         // inputContainer.style.display = "none"
//         showBtn.innerText = "Show Div"
//         showBtn.style.backgroundColor = "royalblue"
//     }
// });


// Credits addEventListener

// const creditBtnEl = document.querySelector("header span");
// const handleCreateMsg = (event)=>{
//     alert("Authored by Logeshwaran");
//     console.log(event.target);
// };
// creditBtnEl.addEventListener("click", handleCreateMsg);
// document.addEventListener("contextmenu", handleCreateMsg);
// setTimeout(() => {
// }, 5000);
// document.removeEventListener("contextmenu", handleCreateMsg);


// Bubbling and Capturing

// const formEl = document.querySelector("form");
// const divEl = document.querySelector("form div");
// const pEl = document.querySelector("form p");

// formEl.addEventListener("click", (event)=>{
//     alert("Form");
//     console.log(`Target: ${event.target.tagName}, this: ${formEl.tagName}`);
// });
// divEl.addEventListener("click", (event)=>{
//     alert("Div");
//     // event.stopPropagation();
//     // event.stopImmediatePropagation();
// });
// pEl.addEventListener("click", ()=>{
//     alert("P");
// });
// formEl.addEventListener("click", ()=>{}, {capture: true});

// for(let elem of document.querySelectorAll("form, form *")){
//     elem.addEventListener("click", ()=>{
//         console.log(`Capturing Phrase: ${elem.tagName}`);
//     }, {capture: true});
//     elem.addEventListener("click", ()=>{
//         console.log(`Capturing Phrase: ${elem.tagName}`);
//     });
// }


// Prevent default

// const formEl = document.querySelector("form");
// const inputEl = document.querySelector("form input");
// const checkboxEl = document.querySelector("form input[type='checkbox']");

// formEl.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     if (!checkboxEl.checked) {
//         alert("accept the terms & conditions")
//         return
//     }
//     console.log("Form Subitted",inputEl.value, checkboxEl.checked, event.defaultPrevented);
// })


// Delegation & Dynamics Events

// const listEl = document.querySelectorAll("form li");
// listEl.forEach((li)=>{
//     li.addEventListener("click", ()=>{
//         console.log("clicked", li.innerText);
//     });
//     li.style.cursor = "pointer";
// });
// console.log(listEl);

// let selectedId;
// const tableEl = document.querySelector("table");
// tableEl.addEventListener("click", (event)=>{
//     const target = event.target;
//     const closestTr = target.closest("tr");
//     if(target.tagName==="TH") return;
//     if(selectedId!= undefined){
//         selectedId.classList.remove("active");
//     }
//     selectedId = closestTr;
//     console.log("Clicked", event.target);
//     closestTr.classList.add("active");
//     console.log(closestTr.children[0], textContent);
//     alert(`hello ${event.target.innerText}`);
// });


// document.addEventListener("click", (event)=>{
//     const id = event.target.dataset.toggleId;
//     if(!id) return;
//     const el = document.getElementById(id);
//     el.hidden = !el.hidden;
// })
// const formEl = document.querySelector('#donate-form');
// document.addEventListener("submit", (event)=>{
//     event.preventDefault();
//    const donateAmount = event.target.querySelector("input").value;
//    alert(`Thank you for donating ${donateAmount}`);
// })


// Mouse Events

// document.addEventListener("mousedown", (event)=>{
//     console.log("MouseDown", event);
// });
// document.addEventListener("mouseup", (event)=>{
//     console.log("MouseuUp", event);
// });

// document.addEventListener("mouseenter", (event)=>{
//     console.log("MouseEnter", event);
// });

// const foodContainerEl = document.querySelector("#food-container")
// foodContainerEl.addEventListener("mouseenter", (event)=>{
//     console.log("MouseEnter");
// });
// foodContainerEl.addEventListener("mouseleave", (event)=>{
//     console.log("MouseLeave");
// });
// let count = 0
// document.addEventListener("mousemove", (event)=>{
//     console.log("MouseMove", count);
//     count++
// });
// let count = 0
// document.addEventListener("mouseover", (event)=>{
//     console.log("MouseMove", count);
//     count++
// });



// Keyboard event

// document.addEventListener("keyup", (event)=>{
//     // console.log(`keyup: key: ${event.key}, code: ${event.code}`);
//     console.log(event);
//     switch(event.key){
//         case "ArrowUp":
//             alert("You have pressed ArrowUp key");
//             break;
//         case "ArrowDown":
//             alert("You have pressed ArrowDown key");
//             break;
//         case "ArrowLeft":
//             alert("You have pressed ArrowLeft key");
//             break;
//         case "ArrowRight":
//             alert("You have pressed ArrowRight key");
//             break;
//     }
// });



// const countryEl = formEl.elements.country;
// console.dir(countryEl);
// countryEl.value = "MYS";
// console.log(countryEl);
// countryEl.selectedIndex = 1;
// countryEl.addEventListener("change", (event)=>{
//     console.log(
//         `Selected value : ${event.target.options[event.target.selectedIndex].value}`
//     );
//     console.log(
//         `Selected value : ${event.target.options[event.target.selectedIndex].text}`
//     );
// });

// Options
// const optionEl = document.createElement("option");
// optionEl.value = "FAZ";
// optionEl.text = "South Africa";

// const options2 = new Option("Indonesia", "IDN");
// countryEl.add(optionEl, 2)
// countryEl.add(options2, countryEl.length -1);


const formEl = document.forms.feedback;
const handleSubmit = (event)=>{
    event.preventDefault();
    const formData = new FormData(formEl);
    alert("Thankyou for your feedback!");
};
formEl.addEventListener("submit", handleSubmit);