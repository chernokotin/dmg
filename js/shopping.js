const offer_buttons = document.querySelectorAll(".offer__button")
const basket_button = document.querySelector(".basket")
const modal_basket = document.querySelector('.basket__modal')
const exit = document.querySelector('.shop_exit')
const finalle = document.querySelector('.final_buy')
const basket = document.querySelector(".shop__container")
const phone_field = document.getElementById('#phone_field')
const shop_var = document.getElementById('shop_field')
const buy_var = {}


function shopping_event(button){
    let item_id = button.parentElement.parentElement.id
    let item_title = button.parentElement.parentElement.firstElementChild.nextElementSibling.textContent.trim()
    if (buy_var[item_id] !== undefined){
        console.log(buy_var);
    }
    else{
        const item_field = document.querySelector('.unselected')
        item_field.innerHTML = item_title
        buy_var[`${item_id}`] = 1
        let value = shop_var.getAttribute('value')
        let list = Object.keys(buy_var).toString()
        shop_var.setAttribute('value',list)
        console.log(value);
        item_field.classList.remove('unselected')
    }
}
offer_buttons.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        shopping_event(elem)
    })
})

exit.addEventListener('click',()=>{
    modal_basket.style.left = "-70vw"
})
basket_button.addEventListener('click',()=>{
    modal_basket.style.left = "0%"
})

finalle.addEventListener('click',()=>{
    let name_field = document.forms['name_field'].value
    if(name_field===''){
    }
    else
        buy_var = {}
})