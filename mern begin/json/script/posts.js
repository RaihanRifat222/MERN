function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => displayPosts(posts))
        .catch(error => console.log(error));
    }

function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
    for (const post of posts){
        
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        div.classList.add('post');
        postContainer.appendChild(div);
    }
}

loadPosts();