const offer_buttons = document.querySelectorAll(".offer__button")
const basket_button = document.querySelector(".basket")
const modal_basket = document.querySelector('.basket__modal')
const exit = document.querySelector('.shop_exit')
const finalle = document.querySelector('.final_buy')


function shopping_event(item){
    item_id = item.parentElement.parentElement.id
    if (localStorage[item_id] !== undefined){
        console.log(localStorage);
    }
    else{
        const basket = document.querySelector(".shop__container")
        let unit_var = document.createElement("div")
        let name_var = document.createElement("div")
        let amount_var = document.createElement("div")
        let selling_item = basket.appendChild(unit_var)
        selling_item.style.display = 'flex'
        let selling_name = selling_item.appendChild(name_var)
        selling_name.classList.add('Unit_name')
        selling_name.innerHTML = item_id
        let unit_amount = unit_var.appendChild(amount_var)
        unit_amount.classList.add('Unit_amount')
        localStorage.setItem(`${item_id}`,1)
        console.log(localStorage);
    }
}
offer_buttons.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        shopping_event(elem)
    })
})

exit.addEventListener('click',()=>{
    modal_basket.parentElement.style.display = "none"
})
basket_button.addEventListener('click',()=>{
    modal_basket.parentElement.style.display = "block"
})
finalle.addEventListener('click',()=>{
    localStorage.clear()
})
