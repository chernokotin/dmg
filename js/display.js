const clickable_elems = document.querySelectorAll(".item__image, .item__title")
const modal = document.querySelector(".modal")
const modal_img = modal.firstElementChild
const exitbutton = document.querySelector('.exit')
const modal_title = document.querySelector('.modal-text')
const modal_descr = document.querySelector('.modal-descr')
const button = document.querySelector('.modal__buy')


clickable_elems.forEach((elem)=>{
    let item = elem.parentElement
    elem.addEventListener('click',()=>{
        modal.setAttribute('id',`${item.id}`)
        let item_img = item.firstElementChild.firstElementChild
        let title = item.firstElementChild.nextElementSibling
        let titlelem = title.textContent.trim()
        let descr = title.nextElementSibling.textContent
        modal_title.innerHTML = titlelem
        modal_descr.innerHTML = descr
        modal_descr.style.maxHeight = '15vh'
        modal_descr.style.overflow = 'auto'
        modal_img.src = item_img.src
        modal_img.style.maxWidth = '75%'
        modal_img.style.height = '50%'
        modal_img.style.transition= 'all 1s ease-out'
        modal.parentElement.style.display = 'block'
        modal.style.display = 'block'
    })
})
exitbutton.addEventListener('click',()=>{
    modal_img.src = ''
    modal.parentElement.style.display = 'none'
    modal.style.display = 'none'
    modal.setAttribute('id',``)
})