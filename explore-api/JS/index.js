function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}
function displayUsers2(vaia){
    // console.log(vaia);
    // for(const vai of vaia){
    //     console.log(vai.name);
    // }
    const ul = document.getElementById('users-list');
    for(const vai of vaia){
        console.log(vai.name);
        const li = document.createElement('li');
        li.innerText = vai.name;
        ul.appendChild(li);
    }
}

function deleteAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

function patchAPost(){
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function creatAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}