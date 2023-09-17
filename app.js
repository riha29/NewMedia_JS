document.getElementById('post-button').addEventListener('click', function() {
    const postInput= document.getElementById('post-input')
    const postText= postInput.value

    const post= document.getElementById('posting-post')
    post.innerText= `${post.innerText}
    ${postText}`

    // clear input field
    postInput.value=''
})