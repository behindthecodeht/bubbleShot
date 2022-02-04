let duration = 6
let time = 1000
let score = 0;
let runStop = false

const scoreBox = document.getElementById('score')

const bubbleGenarate = () => {
    const bubble = document.createElement('span')
    bubble.className = "bubble"
    document.getElementById('app').appendChild(bubble)
    
    const size = Math.random() * 50 + 50
    bubble.style.width = size + "px"
    bubble.style.height = size + "px"
    
    bubble.style.left = Math.random() * 100 + "%"
    bubble.style.top = Math.random() * 50 + 50 + "%"

    bubble.style.setProperty('--animD', duration + "s")
    bubble.style.setProperty('--top', size / 2 + "px")
    bubble.style.setProperty('--left', Math.random() * 100 + "%")

    let bubbleAlive = setTimeout(() => {
        stopRun();
    }, duration * 1000);

    bubble.addEventListener('click', (e) => {
        clearTimeout(bubbleAlive)
        score++
        scoreBox.textContent = score
        e.target.remove()

        if (score % 5 === 0 && time > 200) time -= 100
        if (score % 10 === 0 && duration > 2) duration -= 1
    })
}

const stopRun = () => {
    document.querySelectorAll('.bubble').forEach(bubble => bubble.remove())
    clearInterval(run)
    if (!runStop) {
        runStop = true
        alert('Vous Avez Perdu !! Desolé ...')
    }
}

let run = setInterval(bubbleGenarate, time)

