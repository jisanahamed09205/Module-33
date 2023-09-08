function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}


/*
1.get the element where you want to add the new elements
2.creat child element
3.set innerText or innerHTML
4.appendchild
*/



function displayComment(comments){
    // console.log(comments);
    const commentContainer = document.getElementById('comment-container')
    for(const comment of comments){
        const commentDiv = document.createElement('div')
        commentDiv.classList.add('comment');
        console.log(comment);
        commentDiv.innerHTML = `
            <h3>Id:${comment.id}</h3>
            <h4>Name:${comment.name}</h4>
            <h4>Email:${comment.email}</h4>
            <p>Comment Description:${comment.body}</p>
        `;
        commentContainer.appendChild(commentDiv);
    }
}



loadComment()