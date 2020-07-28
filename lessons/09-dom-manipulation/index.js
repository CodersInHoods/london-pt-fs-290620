const numParagraphsSelect = document.getElementById("numSelect");

const allTheSelects = document.getElementsByTagName("select")

const allTheTexts = document.getElementsByClassName("text")


const queryNumParagraphsSelect = document.querySelector("#numSelect")
const queryAllTheSelects = document.querySelectorAll("select")
const queryAllTheTexts = document.querySelectorAll(".text")

const thirdLiA = document.querySelector("#NavLng > li:nth-child(3) > .js")

const image = document.querySelector("img[title='layout based on Lorem Ipsum']")

image.src = "https://th.bing.com/th/id/OIP.OGrUCYT3jtxJFzwNzmgkSwHaFj?pid=Api&rs=1"

image.height = 300;

const paragraph = document.querySelector("#cnt > p:nth-of-type(2)")

setTimeout(function() {
    paragraph.innerText = "new inner text please"
}, 2000)

setTimeout(function() {
    const newButton = document.createElement("button")
    
    newButton.innerText = "Click me!"
    newButton.className= "big red";
    
    paragraph.append(newButton)


    setInterval(function () {
        if (newButton.className === "big red") {
            newButton.className = "big";
        } else {
            newButton.className = "big red";
        }
    }, 1000)

}, 4000)


// const list = document.querySelector("li:nth-child(2) > ul")

function slowlyRemoveAllListItems(list, delay) {

    // const listItems = list.children;
    const listItems = list.querySelectorAll("li");

    for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        setTimeout(function() {
            listItem.remove()
        }, i * delay)
    }
}

const allthelists = document.querySelectorAll('ul, ol')

allthelists.forEach(function(list, i) {
    setTimeout(() => slowlyRemoveAllListItems(list, 100), i * 2000)
    
})

const limitInput = document.querySelector("#limitInput")

setInterval(() => {
    const valueOfLimit = limitInput.value

    if (valueOfLimit.length % 2 === 0) {
        const lastP = limitInput.parentElement.querySelector("p")

        lastP.remove()
    } else {
        const newP = document.createElement("p")
    
        newP.innerText = valueOfLimit
    
        limitInput.parentElement.append(newP)
    }

}, 1000)