let pencilEle = document.querySelector("#pencil");
let eraserEle = document.querySelector("#eraser");
let stickyEle = document.querySelector("#sticky");
let downloadEle = document.querySelector("#download");
let undoEle = document.querySelector("#undo");
let redoEle = document.querySelector("#redo");

pencilEle.addEventListener("click" , function pencilEle(){
 console.log("clicked");
})

eraserEle.addEventListener("click",function eraser (){
    console.log("clicked");
})

stickyEle.addEventListener("click",function sticky() {
    console.log("clicked");
})

downloadEle.addEventListener("click",function download() {
    console.log("clicked");
})

undoEle.addEventListener("click",function undo() {
    console.log("clicked");
})
redoEle.addEventListener("click",function redo() {
    console.log("clicked");
})
