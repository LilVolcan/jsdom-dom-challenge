document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('counter')
    let time = parseInt(counter.innerText);
    let decreaseButton = document.getElementById('minus');
    let increaseButton = document.getElementById('plus');
    let heartButton = document.getElementById('heart');
    let likesContainer = document.getElementById('likes-container')
    let pauseButton = document.getElementById('pause');
    let commentForm = document.getElementById('comment-form');
    let commentContainer = document.getElementById('comment-container');

    console.log(commentForm)

    // increment timer========================
    function incrementTimer() {
       return time += 1;
    }

    setInterval(function() {
        counter.innerText = incrementTimer();
    }, 1000 )

    // add event listener to increaseButton
    increaseButton.addEventListener('click', () => {
        let currentTime = parseInt(counter.innerText);
        time = currentTime += 1;
        // console.log(currentTime)
    })

    // add event listener to decreaseButton
    decreaseButton.addEventListener('click', () => {
        let currentTime = parseInt(counter.innerText);
        time = currentTime -= 1;
        // console.log(currentTime)
    })

    // add event listener to heart button, increase # likes
    heartButton.addEventListener('click', () => {
        let likes = 0;
        let currentTime = parseInt(counter.innerText);
        let newLike = document.createElement('p');
        newLike.innerHTML = `
        <p> ${currentTime}: ${likes + 1} Likes </p>
        `;
        likesContainer.appendChild(newLike);
    })
    
    // user can pause the counter
   
    // user can add comment
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let comment = event.target.comment.value;
        let newComment = document.createElement('p');
        newComment.innerText = comment;
        commentContainer.appendChild(newComment);
    })
    
})



