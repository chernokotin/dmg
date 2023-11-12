const navlist = document.querySelector('.navlist')
navlist.style.display = 'none'
const categories = document.querySelectorAll('.category')
const catalogue__title = document.querySelector('.catalogue__title')
const nav_button = document.querySelector('.catalogue__button')


categories.forEach(element => {
    let li = document.createElement("a")
    let list_item = navlist.appendChild(li)
    list_item.style.listStyle = 'none'
    list_item.style.display = 'flex'
    list_item.style.textAlign = 'center'
    list_item.style.flexDirection = 'column'
    list_item.innerHTML = element.firstElementChild.textContent.trim()
    list_item.setAttribute('href', `#${element.id}`)
});

nav_button.addEventListener('click', ()=>{
    if(navlist.style.display != 'none'){
        navlist.style.display = 'none'
        catalogue__title.style.display = 'flex'
        nav_button.firstElementChild.innerHTML = '&#171'
    }
    else{
        navlist.style.display = 'flex'
        catalogue__title.style.display = 'none'
        nav_button.firstElementChild.innerHTML = '&#65085'
        console.log(nav_button.innerHTML);
    }
})
