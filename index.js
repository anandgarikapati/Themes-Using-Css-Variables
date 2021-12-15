let root = document.documentElement
const changeButton = document.querySelectorAll("footer > button")

const themeChange = (e) => {
    if(e.target.value === "dark") {
        root.style.setProperty("--background-color", "rgb(54, 99, 96)")
        root.style.setProperty("--font-color", "white")
    } 
    
    else if(e.target.value === "calm") {
        root.style.setProperty("--background-color", "#ffe082")
        root.style.setProperty("--font-color", "black")
    }
    
    else if(e.target.value === "light") {
        root.style.setProperty("--background-color", "#EAEBEB")
        root.style.setProperty("--font-color", "black")
    }

}
changeButton.forEach(btn => {
    btn.addEventListener("click", themeChange)
})

