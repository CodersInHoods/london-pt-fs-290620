const acceptButton = document.querySelector(".cc_btn_accept_all")
const cookieMessage = document.querySelector('.cc_banner-wrapper')

acceptButton.addEventListener("click", () => cookieMessage.remove())


const limitInput = document.querySelector('#limitInput')

limitInput.addEventListener("input", () => {
    console.log(limitInput.value)
})

const allTheInputs = document.querySelectorAll("input")

allTheInputs.forEach((inputField) => {
    inputField.addEventListener("input", (event) => {
        console.log(event.target.value)
    })
})

const handleInputClick = (event) => {
    console.log(event.target.value)
}

allTheInputs.forEach((inputField) => {
    inputField.addEventListener("click", handleInputClick)
})

const form = document.querySelector("form")

const userData = {}

const handleChange = (event) => {
    userData[event.target.name] = event.target.value
}

form.addEventListener("input", handleChange)

const sendUserDataToServer = (userData) => {
    setTimeout(() => {
        const newElement = document.createElement("div")

        newElement.innerText = JSON.stringify(userData)

        document.body.prepend(newElement)
    }, 1000)
}

form.addEventListener("submit", event => {
    event.preventDefault();
    sendUserDataToServer(userData)
})

const languageSelectionContainer = document.querySelector("#NavLng")

const setLang = (langCode) => {
    console.log("SET LANG TO", langCode)
}

const handleLanguageClick = (event) => {
    event.preventDefault();
    setLang(event.target.innerText)

    languageSelectionContainer.removeEventListener("click", handleLanguageClick)
}

languageSelectionContainer.addEventListener("click", handleLanguageClick)


document.addEventListener("mousemove", (event) => {
    document.body.style.background = `rgb(${(event.x / window.innerWidth) * 255}, ${(event.y / window.innerHeight) * 255}, ${100})`
})

const scrollbar = document.querySelector(".scrollbar")

document.addEventListener("scroll", event => {
    const bodyHeight = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const percentScroll = currentScroll / bodyHeight
    
    scrollbar.style.width = `${percentScroll * 100}vw`
})