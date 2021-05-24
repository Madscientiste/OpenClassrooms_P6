import Image from "./elements/Image"


document.getElementById("appendImage").addEventListener("click", () => {
    let image = new Image({ src: "/src/assets/images/50317.jpg", alt: "ayaya.jpeg" })
    let test = document.getElementById("test")
    test.appendChild(image.element)

    console.log(test)
})

