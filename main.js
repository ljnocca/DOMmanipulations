
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var pNode = document.getElementById('compoundInvestment')
  var number = parseInt(pNode.innerHTML)
  number = number * 2
  pNode.innerHTML=number
})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circleDiv = document.querySelector('#circle-bw')
  if(circleDiv.style.background === 'white'){
  	circleDiv.style.background = 'black'
  }
  else{
  	circleDiv.style.background = 'white'
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var redCircle = document.querySelector('.circle-red') //assign circle-red to redCircle variable
  var styleObj = window.getComputedStyle(redCircle) //assign styles on redCircle to styleObj variable
  
  var doubleHeight = parseInt(styleObj.height)*2 //create a variable that doubles height
  var doubleWidth = parseInt(styleObj.width)*2 //create a variable that doubles width

  if(parseInt(redCircle.style.height) > 320){  //parseInt because otherwise it returns a string
 	redCircle.style.height = '40px'
  	redCircle.style.width = '40px'
  }
  else{
  	redCircle.style.height = doubleHeight + 'px'
  	redCircle.style.width = doubleWidth + 'px'
  }
  	
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
var ulNode = document.getElementById('userList')
var liArray = ulNode.children //create 'child variable' for children of the ulNode (aka the li's)

for (var i = liArray.length - 1; i >= 0; i --) { //iterate backwards so that .length method works as li's are removed
      if(liArray[i].classList.contains('inactive')) {
        ulNode.removeChild(liArray[i]) 
      }
  }
})

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

  var OuterBoxNode = document.querySelector('#reverse-squares .answer-box')
  var spanSiblings = OuterBoxNode.children

for (var i = spanSiblings.length - 1; i >= 0; i --){
	OuterBoxNode.appendChild(spanSiblings[i])
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var ulNode = document.querySelector('#tasks')
  var liChildren = ulNode.children

  for (var i = 0; i<liChildren.length; i++){
  	liChildren[i].innerHTML = liChildren[i].innerHTML.split('').reverse().join('')
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})




























