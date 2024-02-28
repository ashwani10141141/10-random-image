const containerEle = document.querySelector(".container")
const btnEle = document.querySelector(".btn")

btnEle.addEventListener("click", ()=>{
   imageCount = 10;
    RandomImage()
})
function RandomImage(){
  for(i=0; i<imageCount; i++){
    const imgEle = document.createElement("img")
    imgEle.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
    containerEle.appendChild(imgEle)
  }
  
}