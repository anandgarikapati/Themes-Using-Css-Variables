let root = document.documentElement
const changeButton = document.querySelectorAll("footer > button")

const themeChange = (e) => {
    if(e.target.value === "dark") {
        root.style.setProperty("--background-color", "#004d73")
        root.style.setProperty("--font-color", "white")
    } 
    
    else if(e.target.value === "calm") {
        root.style.setProperty("--background-color", "#388ed1")
        root.style.setProperty("--font-color", "white")
    }
    
    else if(e.target.value === "light") {
        root.style.setProperty("--background-color", "#f8f8f8")
        root.style.setProperty("--font-color", "black")
    }

}
changeButton.forEach(btn => {
    btn.addEventListener("click", themeChange)
})

