//  const circular = document.querySelector('.circular')
 const menuBtnOpen = document.getElementById('hamburger')
 const menuBtnClose = document.getElementById('close')
 const container = document.querySelector('.container')
//  const menuEl = document.querySelector('.menu')
menuBtnOpen.addEventListener('click' ,()=>{
    container.classList.add('active')
})
menuBtnClose.addEventListener('click' ,()=>{
    container.classList.remove('active')

})
