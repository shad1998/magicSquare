var date=0;
var month=0;
var first=0;
var last=0;
var d=document.querySelectorAll(".ddd"); //for selecting the boxes in the grid
var m=document.querySelectorAll(".mmm");
var c=document.querySelectorAll(".ccc");
var y=document.querySelectorAll(".yyy");
// var result=document.querySelector("#result");

var create=document.querySelector("#create");
var reset=document.querySelector("#reset");
create.addEventListener("click",function(){
	 date=Number((document.getElementById("dd")).value); // for selecting the text box and getting the value
	 month=Number((document.getElementById("mm")).value);
	 first=Number((document.getElementById("cc")).value);
	 last=Number((document.getElementById("yy")).value);
	d[0].textContent=date;
	m[0].textContent=month;
	c[0].textContent=first;
	y[0].textContent=last;

	d[1].textContent=date+3;
	m[1].textContent=month-3;
	c[1].textContent=first-1;
	y[1].textContent=last+1;

	d[2].textContent=date+2;
	m[2].textContent=month-2;
	c[2].textContent=first-2;
	y[2].textContent=last+2;

	d[3].textContent=date+1;
	m[3].textContent=month-1;
	c[3].textContent=first+1;
	y[3].textContent=last-1;

	document.querySelector("#result").textContent=Number(d[0].textContent)+Number(m[0].textContent)+Number(c[0].textContent)+Number(y[0].textContent);

});

reset.addEventListener("click",function(){

document.getElementById("dd").value=0;
document.getElementById("mm").value=0;
document.getElementById("cc").value=0;
document.getElementById("yy").value=0;



d[0].textContent=null;
	m[0].textContent=null;
	c[0].textContent=null;
	y[0].textContent=null;

	d[1].textContent=null;
	m[1].textContent=null;
	c[1].textContent=null;
	y[1].textContent=null;

	d[2].textContent=null;
	m[2].textContent=null;
	c[2].textContent=null;
	y[2].textContent=null;

	d[3].textContent=null;
	m[3].textContent=null;
	c[3].textContent=null;
	y[3].textContent=null;

	result.textContent=null;
});