const nav = document.querySelector('#navbar')

let currentOffset = window.pageYOffset

window.addEventListener('scroll', () => {
    const scrollVal = window.scrollY
    const opacityVal = (0 + (scrollVal / 580))
    nav.style.backgroundColor = `rgba(98,44,193, ${opacityVal})`

    if (window.pageYOffset < currentOffset) {
        nav.style.top = "0px"
    } else {
        nav.style.top = "-100%"
    }
    currentOffset = window.pageYOffset
})