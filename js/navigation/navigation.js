const nav = document.querySelector('#navbar')

const md = window.matchMedia('(max-width: 896px)');

let currentOffset = window.pageYOffset
const navprops = [
    {
        link: "#about",
        desc: "O nas"
    }, 
    {
        link: "#projects1",
        desc: "Projekty"
    }, 
    {
        link: "#priceform1",
        desc: "Wyceny strony"
    },
    {
        link: "#contact",
        desc: "Kontakt"
    }
]

function createList(){
    const navlist = document.createElement("ul")
    navlist.classList.add("navigation__list","list","hiddencontent")
    navprops.forEach(prop => {
        const {link, desc} = prop
        const element = document.createElement("li")
        element.classList.add("list__element")
        const anchor = document.createElement("a")
        anchor.setAttribute("href", link)
        anchor.innerText = desc
        anchor.classList.add("list__anchor")
        anchor.addEventListener("click", function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"))
            target.scrollIntoView({behavior : "smooth"})
        })
        element.appendChild(anchor)
        navlist.appendChild(element)
    })
    if(md.matches){
        const navbox = document.createElement("div")
        navbox.classList.add("navbox")
        const icon = document.createElement("i")
        icon.classList.add("fas", "fa-bars")
        icon.setAttribute("id", "icon")
        navbox.appendChild(icon)
        navlist.classList.add("hiddencontent")
        navbox.appendChild(navlist)
        nav.appendChild(navbox)
     
    } else {
        nav.appendChild(navlist)
        navlist.classList.remove("hiddencontent")
    }
}

createList()

const navbox = document.querySelector(".navbox")
if(navbox){
    navbox.addEventListener("click", function(){
        const navlist = document.querySelector(".navigation__list")
        this.classList.toggle("screensize")
        const closeIcon = this.querySelector("i")
        if(closeIcon.className == "fas fa-bars"){
            closeIcon.setAttribute("class", "fas fa-times")
        } else {
            closeIcon.setAttribute("class", "fas fa-bars")
        }
        navlist.classList.toggle("hiddencontent")
    })
}

window.addEventListener('resize', function(){
    const menbox = document.querySelector(".navbox")
    const navlist = document.querySelector(".navigation__list")
    if(md.matches){
        nav.style.background = "#0000";
        if(navlist && menbox && !menbox.contains(navlist)){
            navlist.remove()
        }
        if(!menbox){
            createList()
        }
    } else if(!md.matches) {
        if(menbox && navlist){
            menbox.remove()
        } else if(menbox && !navlist){
            menbox.remove()
            createList()
        } else if (!navlist){
            createList()
        }
    }
})

if(!md.matches){
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
}