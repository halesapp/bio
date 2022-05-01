const divBio = document.getElementById("bio")
const divCV = document.getElementById("cv")

const showCV = () => {
    divBio.classList.add("hide")
    divCV.classList.remove("hide")
}
const showBio = () => {
    divBio.classList.remove("hide")
    divCV.classList.add("hide")
}