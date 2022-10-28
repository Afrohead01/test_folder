/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
console.log(document.getElementById('header-title')); 
var headerTitle = document.getElementById('header-title');
console.log(headerTitle)
headerTitle.style.borderBottom ='solid 3px #000'

//getElemensByClassName//
var items = document.getElementsByClassName('list-group-item')
items[1].style.backgroundColor ='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight ='bold';
}


//querySelector//
var items = document.querySelector('.list-group-item');
items.style.color ='red';
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor ='green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color ='white';

//querySelectorAll//
var items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'green';
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}


//parentElement//
var itemList = document.querySelector('#items')
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='#f4f4f4'


//latsElementChild//
var itemList = document.querySelector('#items')
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent='Hello 1'

//lastChild//
var itemList = document.querySelector('#items')
console.log(itemList.lastChild)
itemList.lastChild.textContent='Hello 1'

//createchild
var itemList = document.querySelector('#items')
console.log(itemList.create)
itemList.lastChild.textContent='Hello 1'

//firstElementChild//
var itemList = document.querySelector('#items')
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent='Hello 1'

//firstChild//
var itemList = document.querySelector('#items')
console.log(itemList.firsttChild)
itemList.firstChild.textContent='Hello 1'

//nextSibling//
var itemList = document.querySelector('#items')
console.log(itemList.nextSibling)

//nextElementSibling (it will show none coz we dont have any at the moment)//
var itemList = document.querySelector('#items')
console.log(itemList.nextElementSibling)

//previousSibling//
var itemList = document.querySelector('#items')
console.log(itemList.previousSibling)

//previousElementSibling//
var itemList = document.querySelector('#items')
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color='green'
*/
//createElement//

//createDiv1//
var newDiv1 = document.createElement('div');
newDiv1.className = 'hello';
newDiv1.id = 'hello1';
newDiv1.setAttribute('title' , 'hello Div1')

//createTExtNode1//
var newDivTExt1 = document.createTextNode('HEllo')
newDiv1.appendChild(newDivTExt1)

//insert it in before h1//
var newEntry1 = document.querySelector('header .container')
var newHeader1 = document.querySelector('header h1')
console.log(newDiv1)
newEntry1.insertBefore(newDiv1, newHeader1)

//createDiv2//
var newDiv2 = document.createElement('div');
newDiv2.className = 'hello';
newDiv2.id = 'hello2';
newDiv2.setAttribute('title' , 'hello Div2')

//createTExtNode2//
var newDivTExt2 = document.createTextNode('HEllo')
newDiv2.appendChild(newDivTExt2)

//insert it in before item1//
var newEntry2 = document.querySelector('body .list-group-item')
var newHeader2 = document.querySelector('header h2')
console.log(newDiv2)
newEntry2.insertBefore(newDiv2, newHeader2)
