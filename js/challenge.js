const number = document.querySelector("#counter");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const heart = document.querySelector("#heart");
const likes = document.querySelector(".likes");
const commentForm = document.querySelector("#comment-form");
const commentInput = document.querySelector("#comment-input");
const comments = document.querySelector(".comments");
const pause = document.querySelector("#pause");

document.addEventListener("DOMContentLoaded", () => {
    let interval = setInterval(function () {
        b = parseInt(number.innerText);
        number.innerText = b + 1;
    }, 1000);
    plus.addEventListener("click", function () {
        b = parseInt(number.innerText);
        number.innerText = b + 1;
    });
    minus.addEventListener("click", function () {
        b = parseInt(number.innerText);
        number.innerText = b - 1;
    });
    heart.addEventListener("click", function () {
        b = parseInt(number.innerText);
        const newLike = document.createElement("li");
        newLike.innerText = `user has liked ${b} 1 time!`;
        likes.appendChild(newLike);
    });
    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        comment = document.createElement("p");
        comment.innerText = commentInput.value;
        comments.appendChild(comment);
    });
    pause.addEventListener("click", function () {
        if ((interval = true)) {
            clearInterval(interval);
            interval = null;
        } else {
            interval;
        }
    });
});
