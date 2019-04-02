document.addEventListener('DOMContentLoaded', () => {





  //  right: index+1 - if(index%width < width-1)
  //  down: index+width - if(index+width <= width*width-1)
  //  left: index-1 - if(index%width > 0)
  //  up: index-width - if(index-width >= 0)

  const board = document.querySelector('.board')
  //const iSelect = document.querySelectorAll('.board > .i')
  //const lSelect = document.querySelectorAll('.board > .l')
  //const jSelect = document.querySelectorAll('.board > .j')
  //const oSelect = document.querySelectorAll('.board > .o')
  //const sSelect = document.querySelectorAll('.board > .s')
  //const tSelect = document.querySelectorAll('.board > .t')
  //const zSelect = document.querySelectorAll('.board > .z')


  const random = Math.floor(Math.random()* 7)
  console.log(random)

  const scoreDiv = document.querySelector('#score')

  let on = true
  let score = 0
  const width = 9
  const square =[]
  const squareMap = []

  function makeBoard(){
    for(let i=0;i <99; i++){
      const div = document.createElement('div')
      board.appendChild(div)
      square.push(0)
      console.log()
    }

  }






  makeBoard()


  square.forEach((element)=>{
    if(!squareMap.length || squareMap[squareMap.length-1].length === width)
      squareMap.push([])

    squareMap[squareMap.length-1].push(element)
  })



  function clearBoard(){
    squareMap.forEach(row => row.fill(0))
  }






  const squares = document.querySelectorAll('.board > div')



  //const i = [3,4,5,6]
  //const l = [3,12,13,14]
  //const j = [5,12,13,14]
  //const o = [3,4,13,14]
  //const s = [4,5,12,13]
  //const t = [12,13,14,4]
  //const z = [4,5,12,13]






  const iMap = [0,0,1,1,1,1,0,0,0]


  //const lMap = [3,12,13,14]
  //const jMap = [5,12,13,14]
  //const oMap = [3,4,13,14]
  //const sMap = [4,5,12,13]
  //const tMap = [12,13,14,4]
  //const zMap = [4,5,12,13]
















  function drawWorld(a,b){
    scoreDiv.innerText = `${score}`
    squareMap[0].forEach(function (element, index)  {
      if(element === a){
        squares[index].removeAttribute('class')
        squares[index].classList.add(b)
      }
    })
    squareMap[1].forEach(function (element, index)  {
      if(element === a){
        squares[index+9].removeAttribute('class')
        squares[index+9].classList.add(b)
      }
    })
    squareMap[2].forEach(function (element, index)  {
      if(element === a){
        squares[index+18].removeAttribute('class')
        squares[index+18].classList.add(b)
      }
    })
    squareMap[3].forEach(function (element, index)  {
      if(element === a){
        squares[index+27].removeAttribute('class')
        squares[index+27].classList.add(b)
      }
    })
    squareMap[4].forEach(function (element, index)  {
      if(element === a){
        squares[index+36].removeAttribute('class')
        squares[index+36].classList.add(b)
      }
    })
    squareMap[5].forEach(function (element, index)  {
      if(element === a){
        squares[index+45].removeAttribute('class')
        squares[index+45].classList.add(b)
      }
    })
    squareMap[6].forEach(function (element, index)  {
      if(element === a){
        squares[index+54].removeAttribute('class')
        squares[index+54].classList.add(b)
      }
    })
    squareMap[7].forEach(function (element, index)  {
      if(element === a){
        squares[index+63].removeAttribute('class')
        squares[index+63].classList.add(b)
      }
    })
    squareMap[8].forEach(function (element, index)  {
      if(element === a){
        squares[index+72].removeAttribute('class')
        squares[index+72].classList.add(b)
      }
    })
    squareMap[9].forEach(function (element, index)  {
      if(element === a){
        squares[index+81].removeAttribute('class')
        squares[index+81].classList.add(b)
      }
    })
    squareMap[10].forEach(function (element, index)  {
      if(element === a){
        squares[index+90].removeAttribute('class')
        squares[index+90].classList.add(b)
      }
    })


  }



  function moveShapesDown(){
    let canMove = true

    for( let y = 0; y < squareMap.length; y++) {

      for (let x=0; x<squareMap[y].length; x++) {

        if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
          if(y === squareMap.length-1 || squareMap[y+1][x] >10 ) {
            canMove = false
            freeze()
          }

        }
      }

    }
    if(canMove) {

      for(let y=squareMap.length-1;  y>=0;  y-- ){

        for (let x=0; x<squareMap[y].length; x++) {
          if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
            squareMap[y+1][x] = squareMap[y][x]
            squareMap[y][x] =0

          }


        }

      }


    }

  }

  function moveShapesDownKey(){
    let canMove = true

    for( let y = 0; y < squareMap.length; y++) {

      for (let x=0; x<squareMap[y].length; x++) {

        if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
          if(y === squareMap.length -2 || squareMap[y+2][x] >10 ) {
            canMove = false

          }

        }
      }

    }
    if(canMove) {

      for(let y=squareMap.length-1;  y>=0;  y-- ){

        for (let x=0; x<squareMap[y].length; x++) {
          if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
            squareMap[y+1][x] = squareMap[y][x]
            squareMap[y][x] =0

          }


        }

      }


    }

  }



  function freeze(){
    for( let y = 0; y < squareMap.length; y++) {

      for (let x=0; x<squareMap[y].length; x++) {

        if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
          squareMap[y][x] = squareMap[y][x] + 10
        }
      }
    }
    checkLines()
    generateShape()
  }



  const generateShape = function generateShape(){
  let ran = Math.floor(Math.random()*7)
  const pos = Math.floor(Math.random()*5)


  //ran =5

  if (ran === 0){



    squareMap[0][pos] =4
    squareMap[0][pos+1] =4
    squareMap[1][pos] =4
    squareMap[1][pos+1] =4


  }else if (ran === 1){

    squareMap[0][pos] =1
    squareMap[0][pos+1] =1
    squareMap[0][pos+2] =1
    squareMap[0][pos+3] =1

  }else if (ran === 2){

    squareMap[0][pos] =2
    squareMap[1][pos] =2
    squareMap[1][pos+1] =2
    squareMap[1][pos+2] =2


  }else if (ran === 3){



    squareMap[0][pos+2] = 3
    squareMap[1][pos+1] = 3
    squareMap[1][pos+2] = 3
    squareMap[1][pos] = 3


  }else if (ran === 4){



    squareMap[0][pos+2] =5
    squareMap[0][pos+1] =5
    squareMap[1][pos] =5
    squareMap[1][pos+1] =5


  }else if (ran === 5){


    squareMap[0][pos+1] =6
    squareMap[1][pos+2] =6
    squareMap[1][pos] =6
    squareMap[1][pos+1] =6


  }else if (ran === 6){


    squareMap[0][pos] = 7
    squareMap[0][pos+1] = 7
    squareMap[1][pos+1] = 7
    squareMap[1][pos+2] = 7
  }
}
generateShape()



  function moveShapesLeft(){
    let canMove = true

    for( let y = 0; y < squareMap.length; y++) {

      for (let x=0; x<squareMap[y].length; x++) {

        if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
          if(x === 0 || squareMap[y][x-1] >10 ) {
            canMove = false

          }

        }
      }

    }
    if(canMove) {

      for(let y=squareMap.length-1;  y>=0;  y-- ){

        for (let x=0; x<squareMap[y].length; x++) {
          if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
            squareMap[y][x-1] = squareMap[y][x]
            squareMap[y][x] =0

          }

        }

      }

    }

  }



  function moveShapesRight(){
    let canMove = true

    for( let y = 0; y < squareMap.length; y++) {

      for (let x=0; x<squareMap[y].length; x++) {

        if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
          if(x === 8 || squareMap[y][x+1] >10 ) {
            canMove = false

          }

        }
      }

    }
    if(canMove) {

      for(let y=squareMap.length-1;  y>=0;  y-- ){

        for (let x=squareMap[y].length; x>=0; x--) {
          if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
            squareMap[y][x+1] = squareMap[y][x]
            squareMap[y][x] =0

          }


        }

      }


    }

  }



  function rotateShape(){
    let canMove = true

    for( let y = 0; y < squareMap.length; y++) {

      for (let x=0; x<squareMap[y].length; x++) {

        if(squareMap[y][x] === 1){
          if(x === 8 || squareMap[y][x+1] >10 ) {
            canMove = false

          }

        }else if(squareMap[y][x] === 2){
          if(x === 8 || squareMap[y][x+1] >10 ) {
            canMove = false

          }

        } else if(squareMap[y][x] === 2){
          if(x === 8 || squareMap[y][x+1] >10 ) {
            canMove = false

          }

        } else if(squareMap[y][x] === 3){
          if(x === 8 || squareMap[y][x+1] >10 ) {
            canMove = false

          }

        } else if(squareMap[y][x] === 4){
          if(x === 8 || squareMap[y][x+1] >10 ) {
            canMove = false

          }

        } else if(squareMap[y][x] === 5){
          if(x === 8 || squareMap[y][x+1] >10 ) {
            canMove = false

          }

        } else if(squareMap[y][x] === 6){
          if(x === 8 || squareMap[y][x+1] >10 ) {
            canMove = false

          }

        } else if(squareMap[y][x] === 7){
          if(x === 8 || squareMap[y][x+1] >10 ) {
            canMove = false

          }

        }
      }

    }
    if(canMove) {

      for(let y=squareMap.length-1;  y>=0;  y-- ){

        for (let x=squareMap[y].length; x>=0; x--) {


// t Rotate
           if(squareMap[y][x] === 6 && squareMap[y][x+1] === 6 && squareMap[y][x+2] === 6 && squareMap[y-1][x+1] === 6 )
          { squareMap[y][x] = 0
            squareMap[y+1][x+1] = 6
            squareMap[y-1][x+1] = 6
            console.log('1')
          }else if(squareMap[y][x] === 6 && squareMap[y][x+1] === 6 && squareMap[y+1][x] === 6 && squareMap[y-1][x] === 6 )
          { squareMap[y-1][x] = 0
            squareMap[y][x-1] = 6
            squareMap[y][x+1] = 6
            console.log('2')
          }else if(squareMap[y][x] === 6 && squareMap[y][x+1] === 6 && squareMap[y+1][x] === 6 && squareMap[y][x-1] === 6 && squareMap[y-1][x] === 0)
          { squareMap[y][x+1] = 0
            squareMap[y][x-1] = 6
            squareMap[y+1][x] = 6
            squareMap[y-1][x] = 6
            console.log('3')
          } else if(squareMap[y][x] === 6 && squareMap[y][x-1] === 6 && squareMap[y+1][x] === 6 && squareMap[y-1][x] === 6){
            squareMap[y+1][x] = 0
            squareMap[y][x+1] = 6
            squareMap[y-1][x] = 6
            squareMap[y][x-1] = 6
            console.log('4')
            return
          }

//irotate
          if(squareMap[y][x] === 1 && squareMap[y][x+1] === 1 && squareMap[y][x+2] === 1 && squareMap[y][x+3] === 1){
            squareMap[y+1][x+1] = 1
            squareMap[y+2][x+1] = 1
            squareMap[y+3][x+1] = 1
            squareMap[y][x] = 0
            squareMap[y][x+2] = 0
            squareMap[y][x+3] = 0
          } else if(squareMap[y][x] === 1 && squareMap[y-1][x] === 1 && squareMap[y-2][x] === 1 && squareMap[y-3][x] === 1){
            squareMap[y][x] = 1
            squareMap[y-1][x] = 0
            squareMap[y-2][x] = 0
            squareMap[y-3][x] = 0
            squareMap[y+1][x] = 1
            squareMap[y+1][x+1] = 1
            squareMap[y+1][x+2] = 1
            squareMap[y+1][x+3] = 1

          }
//rotate j 3
          if(squareMap[y][x] === 3 && squareMap[y][x-1] === 3 && squareMap[y][x+1] === 3 && squareMap[y-1][x+1] === 3 ){
            squareMap[y][x] = 3
            squareMap[y][x-1] = 0
            squareMap[y][x+1] = 0
            squareMap[y-1][x+1] = 0
            squareMap[y+1][x] = 3
            squareMap[y-1][x] = 3
            squareMap[y+1][x+1] = 3



          } else if(squareMap[y][x] === 3 && squareMap[y-1][x] === 3 && squareMap[y+1][x] === 3 && squareMap[y+1][x+1] === 3 ){
            squareMap[y][x] = 3
            squareMap[y][x+1] = 3
            squareMap[y][x-1] = 3
            squareMap[y+1][x-1] = 3
            squareMap[y+1][x] = 0
            squareMap[y-1][x] = 0
            squareMap[y+1][x+1] = 0
            console.log('dehufi')
          } else if(squareMap[y][x] === 3 && squareMap[y][x-1] === 3 && squareMap[y][x+1] === 3 && squareMap[y+1][x-1] === 3 ){
            squareMap[y][x] = 3
            squareMap[y-1][x] = 3
            squareMap[y-1][x-1] = 3
            squareMap[y+1][x] = 3
            squareMap[y][x-1] = 0
            squareMap[y][x+1] = 0
            squareMap[y+1][x-1] = 0
            console.log('hey')
          } else if(squareMap[y][x] === 3 && squareMap[y-1][x] === 3 && squareMap[y+1][x] === 3 && squareMap[y-1][x-1] === 3 ){
            squareMap[y-1][x] = 0
            squareMap[y+1][x] = 0
            squareMap[y-1][x-1] = 0
            squareMap[y][x-1] = 3
            squareMap[y][x+1] = 3
            squareMap[y-1][x+1] = 3
            return
            console.log('heyHo')
          }


//rotate l 2


          if(squareMap[y][x] === 2 && squareMap[y][x-1] === 2 && squareMap[y][x+1] === 2 && squareMap[y-1][x-1] === 2 ){
            squareMap[y][x] = 2
            squareMap[y][x-1] = 0
            squareMap[y][x+1] = 0
            squareMap[y-1][x-1] = 0
            squareMap[y+1][x] = 2
            squareMap[y-1][x] = 2
            squareMap[y-1][x+1] = 2

//done

} else if(squareMap[y][x] === 2 && squareMap[y-1][x] === 2 && squareMap[y+1][x] === 2 && squareMap[y-1][x+1] === 2 ){
            squareMap[y][x] = 2
            squareMap[y][x+1] = 2
            squareMap[y][x-1] = 2
            squareMap[y+1][x+1] = 2
            squareMap[y+1][x] = 0
            squareMap[y-1][x] = 0
            squareMap[y-1][x+1] = 0
            console.log('spinny')

            // done
          } else if(squareMap[y][x] === 2 && squareMap[y][x-1] === 2 && squareMap[y][x+1] === 2 && squareMap[y+1][x+1] === 2 ){
            squareMap[y][x] = 2
            squareMap[y-1][x] = 2
            squareMap[y+1][x] = 2
            squareMap[y-1][x-1] = 2
            squareMap[y+1][x-1] = 2

            squareMap[y-1][x-1] = 0
            squareMap[y+1][x+1] = 0
            squareMap[y][x-1] = 0
            squareMap[y][x+1] = 0
          //  done
            console.log('hey')
          }  else if(squareMap[y][x] === 2 && squareMap[y-1][x] === 2 && squareMap[y+1][x] === 2 && squareMap[y+1][x-1] === 2 ){
            squareMap[y][x] = 2
            squareMap[y][x-1] = 2
            squareMap[y][x+1] = 2
            squareMap[y-1][x-1] = 2
            squareMap[y+1][x] = 0
            squareMap[y+1][x-1] = 0
            squareMap[y-1][x] = 0
            console.log('blah')
            return

}
///// SHAPE DONE!!!




          //rotate s 5
          if(squareMap[y][x] === 5 && squareMap[y][x-1] === 5 && squareMap[y-1][x+1] === 5 && squareMap[y-1][x] === 5){
            squareMap[y][x] = 5
            squareMap[y-1][x] = 5
            squareMap[y][x+1] = 5
            squareMap[y+1][x+1] = 5
            squareMap[y][x-1] = 0
            squareMap[y-1][x+1] = 0
            console.log('5')
            //done
          } else if(squareMap[y][x] === 5 && squareMap[y-1][x] === 5 && squareMap[y][x+1] === 5 && squareMap[y+1][x+1] === 5){
            squareMap[y][x] = 5
            squareMap[y][x+1] = 5
            squareMap[y+1][x] = 5
            squareMap[y+1][x-1] = 5
            squareMap[y+1][x+1] = 0
            squareMap[y-1][x] = 0

            console.log('slwso')
            //done
          }else if(squareMap[y][x] === 5 && squareMap[y+1][x] === 5 && squareMap[y][x+1] === 5 && squareMap[y+1][x-1] === 5){

            console.log('iqefjoier')


          }




//rotate z 7
  if(squareMap[y][x] === 7 && squareMap[y-1][x-1] === 7 && squareMap[y-1][x] === 7 && squareMap[y][x+1] === 7){


    squareMap[y][x] = 7
    squareMap[y+1][x] = 7
    squareMap[y][x+1] = 7
    squareMap[y-1][x+1] = 7
    squareMap[y-1][x] = 0
    squareMap[y-1][x-1] = 0

    console.log('777777777')

  }else if(squareMap[y][x] === 7 && squareMap[y+1][x] === 7 && squareMap[y][x+1] === 7 && squareMap[y-1][x+1] === 7){
    console.log('here we gooooo again')

    squareMap[y][x] = 7
    squareMap[y+1][x] = 7
    squareMap[y+1][x+1] = 7
    squareMap[y][x-1] = 7
    squareMap[y][x+1] = 0
    squareMap[y-1][x+1] = 0


  }








        }

      }


    }

  }


  function checkLines(){

    for( let y = 0; y < squareMap.length; y++) {
      let  fullLine=true
      for (let x=0; x<squareMap[y].length; x++) {
        if(squareMap[y][x] < 10) {
          fullLine= false
        }


      }
      if (fullLine) {
        squareMap.splice(y, 1)
        squareMap.splice(0,0,[0,0,0,0,0,0,0,0,0])
        y--
        score++

      }
    }
  }


  document.onkeydown =function(e){
    if(e.keyCode === 37){
      moveShapesLeft()
    } else if(e.keyCode === 39){
      moveShapesRight()
    } else if(e.keyCode === 40){
      moveShapesDownKey()
    } else if(e.keyCode === 38){
      rotateShape()
    } else if(e.keyCode === 80){
      on = false
      console.log('p')
    } else if(e.keyCode === 83){
      on = true
      console.log('p')
    }


  }




function upadteBoard(){
  drawWorld(1, 'i')
  drawWorld(2, 'l')
  drawWorld(3, 'j')
  drawWorld(4, 'o')
  drawWorld(5, 's')
  drawWorld(6, 't')
  drawWorld(7, 'z')
  drawWorld(0, 'b')
  checkLines()

}






  const  loop = setInterval(function () {

    if(on === true){
    console.log(squareMap)

      upadteBoard()
    moveShapesDown()
  }
  }, 1000)


  const  update = setInterval(function () {

    if(on === true){
    //console.log(squareMap)

  upadteBoard()

  }
}, 500)


//Fucking DOMContentLoaded
})
