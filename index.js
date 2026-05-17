let count=0
let countEle=document.getElementById('count-el')
let saveEl=document.getElementById("save-el")
function increment(){
count=count+1
countEle.textContent=count
}
function save(){
let counstr=count + "-"
saveEl.innerText+=counstr
countEle.textContent=0
count=0
}