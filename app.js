let duration = 10
let time = 1000
let score = 0;

const scoreBox = document.getElementById('score')

const bubbleGenarate = () => {
    const bubble = document.createElement('span')
    bubble.className = "bubble"
    document.getElementById('app').appendChild(bubble)
    
    const size = Math.random() * 50 + 50 + "px"
    bubble.style.width = size
    bubble.style.height = size
    
    bubble.style.left = Math.random() * 100 + "%"
    bubble.style.animationDuration = duration + "s"

    bubble.addEventListener('click', (e) => {
        score++
        scoreBox.textContent = score
        e.target.remove()

        if (score % 5 === 0 && time != 300) {
            time -= 100
            console.log(time);
        }

        if (score % 10 === 0 && duration != 5) {
            duration -= 1
            console.log(duration);
        }
    })
}

setInterval(bubbleGenarate, time)