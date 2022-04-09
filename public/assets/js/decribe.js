function print(){
    var list = [];
	var a=document.getElementById("Name").value;
	//alert(a);
    list.push(a);
    var b=document.getElementById("ID").value;
	//alert(b);
    list.push(b);
    var c=document.getElementById("Maker").value;
	//alert(c);
    list.push(c);
    var d=document.getElementById("Time").value;
	//alert(d);
    list.push(d);
    var e=document.getElementById("Description").value;
    list.push(e);
	alert(list);
}