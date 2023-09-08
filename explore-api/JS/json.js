const user = {id:1,name:'Gorib Amir',Job:'developer'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/*
{ id: 1, name: 'Gorib Amir', Job: 'developer' }
{"id":1,"name":"Gorib Amir","Job":"developer"}*/
const shop = {
    owner: 'Jisan',
    address: {
        street:'Paharpurer voot goli',
        city:'sfg',
        country:'Chand'
    },
    products:['laptop','mic','monitor','keyboard'],
    revenue:45000,
    isOpen:true,
    isNew: false
}
// console.log(typeof shop);
// const shopJSON = JSON.stringify(shop);
// console.log(typeof shopJSON);
// const shopObj = JSON.parse(shopJSON);
// console.log(typeof shopObj);

const stuINfo = JSON.stringify({
    name:'james',
    roll:3
});
console.log(stuINfo.name);
