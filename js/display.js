let clickable_elems = document.querySelectorAll(".item__image, .item__title")
let modal = document.querySelector(".modal")
let modal_img = modal.firstElementChild
let exitbutton = document.querySelector('.exit')
let modal_title = document.querySelector('.modal-text')
let modal_descr = document.querySelector('.modal-descr')


clickable_elems.forEach((elem)=>{
    let item = elem.parentElement
    elem.addEventListener('click',()=>{
        let item_img = item.firstElementChild.firstElementChild
        let title = item.firstElementChild.nextElementSibling
        let titlelem = title.textContent.trim()
        let descr = title.nextElementSibling.textContent
        console.log(descr);
        modal_title.innerHTML = titlelem
        modal_descr.innerHTML = descr
        modal_descr.style.maxHeight = '15vh'
        modal_descr.style.overflow = 'auto'
        modal_img.src = item_img.src
        modal_img.style.maxWidth = '100%'
        modal_img.style.height = '50%'
        modal_img.style.transition= 'all 1s ease-out'
        modal.parentElement.style.display = 'block'
    })
})
exitbutton.addEventListener('click',()=>{
    modal_img.src = ''
    modal.parentElement.style.display = 'none'
})