function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    // .then(data => console.log(data));
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => displayUsers(data))
}

function displayUsers(data){
    // console.log(data);
}

// test quiz
const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 