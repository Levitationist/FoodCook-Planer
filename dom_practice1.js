let inputFood = document.getElementById('input-food');
let inputButton = document.getElementById('input-button');
let foodContainer = document.getElementById("food-container");
let noListEl = document.getElementById("no-list");
let foodListStatistics = document.getElementById("food-list-statistics");
let inputFoodCreationSign = "InputFoodCreationSign";
let existingFoodCreationSign = "ExistingFoodCreationSign";
let localStorageKey = "foodItems";
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOMContentLoaded");
    const fetchedFoodItems = [...JSON.parse(localStorage.getItem(localStorageKey))];
    fetchedFoodItems.forEach(item =>{
        createFoodItems(existingFoodCreationSign, item)
        console.log(item);
    })
    refreshUi()
})
const handleInputFood = ()=>{
    createFoodItems(inputFoodCreationSign);
    localStorage.setItem(
        localStorageKey,
        JSON.stringify([
            ...JSON.parse(localStorage.getItem(localStorageKey) || "[]"),
            {foodItem: inputFood.value}
        ])
    )
    refreshUi();
}
inputButton.addEventListener("click", handleInputFood);
inputFood.addEventListener("keyup", (event)=>{
    if(event.key ==="Enter"){
        handleInputFood();
        inputFood.value = "";
    }
})
function createFoodItems(creationSign, item){
    const newFoodEl = document.createElement("li");
    const divItem = document.createElement("div");
    const divRemoveBtn = document.createElement("div");
    newFoodEl.append(divItem, divRemoveBtn);
    divRemoveBtn.parentElement.setAttribute("onclick", "removeItem(event)");
    divRemoveBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    if (creationSign == inputFoodCreationSign){
        divItem.textContent = inputFood.value;
    }else{
        divItem.textContent = item.foodItem;
    }
    newFoodEl.className = "food-item";
    newFoodEl.append(divItem);
    newFoodEl.append(divRemoveBtn);
    foodContainer.append(newFoodEl);
}
function removeItem(event){
    let existingList = event.target.parentNode.parentNode;
    existingList.remove();
    const fetchedFoodItems = [...JSON.parse(localStorage.getItem(localStorageKey))]
    fetchedFoodItems.forEach((item)=>{
        if(item.foodItem == existingList.innerText){
            fetchedFoodItems.splice(fetchedFoodItems.indexOf(item), 1);
        }
    });
    localStorage.setItem("foodItems", JSON.stringify(fetchedFoodItems));
    refreshUi()
}
function refreshUi(){
    foodListStatistics.innerText = `You have ${foodContainer.children.length} lists`;
    foodContainer.children.length > 0 
    ? ((noListEl.hidden = true), (foodListStatistics.hidden = false))
    : ((noListEl.hidden = false), (foodListStatistics.hidden = true));
}
