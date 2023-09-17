// function loadPosts(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data=> displayPosts(data))
// }

// loadPosts()

// function displayPosts(data){
//     const postContainer= document.getElementById("posting-post")
//     for (const i of data){
//         const div= document.createElement('div')
//         div.innerHTML= `
//         <h3>${i.title}</h3>`
//         postContainer.appendChild(div)
//         console.log(i.title)
//     }
// }

document.getElementById('post-button').addEventListener('click', function() {
    const postInput= document.getElementById('post-input')
    const postText= postInput.value

    const post= document.getElementById('posting-post')
    post.innerText= `${post.innerText}
    ${postText}`

    // clear input field
    postInput.value=''
})