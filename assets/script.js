let beat = {
    "90": {beat: new Beat('assets/audio/piano/F1vH.mp3'),
        button: new Button('aqua',90)},
    "88": {beat: new Beat('assets/audio/piano/F2vH.mp3'),
        button: new Button('aqua',88)},
    "67": {beat: new Beat('assets/audio/piano/F3vH.mp3'),
        button: new Button('aqua',67)},
    "86": {beat: new Beat('assets/audio/piano/F4vH.mp3'),
        button: new Button('aqua',86)},
    "66": {beat: new Beat('assets/audio/piano/F5vH.mp3'),
        button: new Button('aqua',66)},
    "78": {beat: new Beat('assets/audio/piano/F6vH.mp3'),
        button: new Button('aqua',78)},
    "77": {beat: new Beat('assets/audio/piano/F7vH.mp3'),
        button: new Button('aqua',77)},
    "65": {beat: new Beat('assets/audio/guitar/F2.mp3'),
        button: new Button('#ff9800',65)},
    "83": {beat: new Beat('assets/audio/guitar/F3.mp3'),
        button: new Button('#ff9800',83)},
    "68": {beat: new Beat('assets/audio/guitar/F3.mp3'),
        button: new Button('#ff9800',68)},
    "70": {beat: new Beat('assets/audio/guitar/F4.mp3'),
        button: new Button('#ff9800',70)},
    "72": {beat: new Beat('assets/audio/others/kick-1.mp3'),
        button: new Button('#1a32f1',72)},
    "74": {beat: new Beat('assets/audio/others/kick-2.mp3'),
        button: new Button('#1a32f1',74)},
    "75": {beat: new Beat('assets/audio/others/kick-3.mp3'),
        button: new Button('#1a32f1',75)},
    "76": {beat: new Beat('assets/audio/others/kick-4.mp3'),
        button: new Button('#1a32f1',76)},
}

$(document).ready(() => {
    $('.key').attr('onclick', 'keyClick(this)')
})

keyClick = (e) => {
    let id = e.id
    if (id in beat) {
        let keyPress = beat[id]
        keyPress.beat.play()
        keyPress.button.select()
    }
}

$(document).on('keydown', (e) => {
    let id = e.keyCode
    if (id in beat) {
        let keyPress = beat[id]
        keyPress.beat.play()
        keyPress.button.select()
    }
})