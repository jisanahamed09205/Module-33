function loadPost2(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost2(data))
}
function displayPost2(data){
    // console.log(data);
    const ul = document.getElementById('post-list');
    for(const user of data){
        console.log(user);
        const li = document.createElement('li')
        li.style.listStyleType = 'decimal';
        li.innerText = user.title;
        ul.appendChild(li);
    }
}