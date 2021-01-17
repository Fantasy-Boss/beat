class Beat {
    constructor(src) {
        this.audio = new Audio(src)
    }
    play = () => {
        this.audio.currentTime = 0
        this.audio.play()
    }
}

class Button {
    constructor(color, keyCode) {
        this.color = color
        this.keyCode = keyCode
        this.element = document.getElementById(keyCode)
        this.setButtonColor()
        this.transitionEnd()
    }
    transitionEnd = () => {
        this.element.addEventListener("webkitTransitionEnd", () => {
            this.deselect()
        });
    }
    setButtonColor = () => {
        this.element.style.borderColor = this.color
    }
    select = () => {
        this.element.style.backgroundColor = this.color
        this.element.style.boxShadow = `0px 0px 20px ${this.color}`
    }
    deselect = () => {
        this.element.style.backgroundColor = 'transparent'
        this.element.style.boxShadow = 'none'
    }
}

