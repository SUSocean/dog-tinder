import { dogs } from './data.js'
import Dog from './Dog.js'


let newDog = new Dog(dogs[0])
render()

const likeBtn = document.getElementById('like-btn')
const dislikeBtn = document.getElementById('dislike-btn')

dislikeBtn.addEventListener('click', function () {
    if (document.getElementById('liked-banner').classList.contains("hidden") & document.getElementById('disliked-banner').classList.contains("hidden")) {
        newDog.dogWasSwiped()
        newDog.getReactionHTML()
        dogs.shift()
        if (dogs.length < 1) {
            setTimeout(function () {
                document.getElementById("main").innerHTML = newDog.getNoMoreDogsHTML()
            }, 1000)
        } else {
            setTimeout(function () {
                render()
            }, 1000)
        }
    }
})


likeBtn.addEventListener('click', function () {
    if (document.getElementById('liked-banner').classList.contains("hidden") & document.getElementById('disliked-banner').classList.contains("hidden")) {
        newDog.dogWasSwiped()
        newDog.dogWasLiked()
        newDog.getReactionHTML()

        dogs.shift()
        if (dogs.length < 1) {
            setTimeout(function () {
                document.getElementById("main").innerHTML = newDog.getNoMoreDogsHTML()
            }, 1000)
        } else {
            setTimeout(function () {
                render()
            }, 1000)
        }
    }


})

function render() {
    newDog = new Dog(dogs[0])
    document.getElementById("main").innerHTML = newDog.getMainHTML()
}
