function createBloon(event){
  event.preventDefault()


  //
  let creatbloon = document.createElement('img')
  creatbloon.setAttribute("src",'images/bal1.png');
   creatbloon.setAttribute("width","200")
   let box = document.getElementById("box")
    box.appendChild(creatbloon)


}
