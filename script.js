// Your code here.
let dragEle=null;
document.querySelectorAll('.item').forEach((item)=>{
	item.setAttribute("draggable", true);
	item.addEventListener("dragstart",(e)=>{
		dragEle=e.target;
	});
});

document.querySelector('.items').addEventListener("dragover",(e)=>{
		e.preventDefault();
});

document.querySelector('.items').addEventListener("drop",(e)=>{
		e.preventDefault();
		document.querySelector('.items').appendChild(dragEle);
		dragEle=null;
});