class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getNoMoreDogsHTML() {
        document.getElementById('like-btn').style.opacity = "0"
        document.getElementById('dislike-btn').style.opacity = "0"

        return `
            <div class="end-page">
                <p>Looks like we are out of dogs. Come again later!<p>
            </div>
        `
    }


    getMainHTML() {
        const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this
        return `
            <img class="suggested-user-profile-picture"
                src="${avatar}"
                alt="profile picture of a suggested user">
            <div id="liked-banner" class="hidden">
                <img src="./images/badge-like.png" alt="like badge">
            </div>
            <div id="disliked-banner" class="hidden">
                <img src="./images/badge-nope.png" alt="nope badge">
            </div>
            <div class="user-discription">
                <h4>${name}, ${age}</h4>
                <p>${bio}</p>
            </div>
        `
    }

    dogWasSwiped() {
        this.hasBeenSwiped = true
    }

    dogWasLiked() {
        this.hasBeenLiked = true
    }

    getReactionHTML() {
        if (this.hasBeenSwiped) {
            if (this.hasBeenLiked) {
                document.getElementById('liked-banner').classList.remove("hidden")
            } else {
                document.getElementById('disliked-banner').classList.remove("hidden")
            }
        }
    }
}

export default Dog