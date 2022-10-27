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
headerTitle.style.borderBottom ='solid 3px #000'*/
var items = document.getElementsByClassName('list-group-item')
items[1].style.backgroundColor ='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight ='bold';
}

