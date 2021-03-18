let img = document.getElementsByTagName("img")
let photo = document.getElementById("photo")
let quantity = document.getElementById("quantity")
let i = 1

class Lazy {
    visible(image) {
        let imagePos = {
            top: window.pageYOffset + image.getBoundingClientRect().top,
            bottom: window.pageYOffset + image.getBoundingClientRect().bottom,
            left: window.pageXOffset + image.getBoundingClientRect().left,
            right: window.pageXOffset + image.getBoundingClientRect().right
        }

        let windowPos = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight - 300,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth 
        }

        if(imagePos.bottom > windowPos.top && imagePos.top < windowPos.bottom && imagePos.right > windowPos.left && imagePos.left < windowPos.right) {
            if(image.hasAttribute("data-src")) {
                image.src = image.dataset.src
                image.removeAttribute("data-src")
                i+=1
                quantity.innerHTML = `${i}`
            }

            if(i == img.length) {
                window.removeEventListener("scroll", lazy.go)
                photo.style.background = "#33C35A"
                setTimeout(() => photo.remove(), 3000)
            }
        }
        else
            return
    }

    go() {
        for(let j = 0; j < img.length; j++)
            lazy.visible(img[j])
    }
}

let lazy = new Lazy()

lazy.go()
window.addEventListener("scroll", lazy.go)
