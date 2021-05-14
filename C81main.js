canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
colour="pink";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(400,400,50,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    Circle(mouse_x,mouse_y);
}
function Circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
    ctx.stroke();


}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}