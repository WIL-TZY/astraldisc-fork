const posts = document.querySelectorAll('.post');

posts.forEach((item, index) => {
    let button = item.querySelector(".comment-btn");
    let comments = item.querySelector(".comments");
    button.addEventListener('click', () => {
        comments.classList.toggle('active');
    })
})