document.addEventListener('DOMContentLoaded', () => {


  const board = document.querySelector('.board')
  //const iSelect = document.querySelectorAll('.board > .i')
  //const lSelect = document.querySelectorAll('.board > .l')
  //const jSelect = document.querySelectorAll('.board > .j')
  //const oSelect = document.querySelectorAll('.board > .o')
  //const sSelect = document.querySelectorAll('.board > .s')
  //const tSelect = document.querySelectorAll('.board > .t')
  //const zSelect = document.querySelectorAll('.board > .z')
  const preview = document.querySelector('.preview')

  const random = Math.floor(Math.random()* 7)
  //console.log(random)

  const scoreDiv = document.querySelector('#score')
  const highScoreDiv = document.querySelector('#highScore')
  const reset = document.querySelector('#reset')
  const gameOver = document.querySelector('#gameOver')
  const rowSound = document.getElementById('rowSound')
  const resetHS = document.querySelector('#resetHS')



  let on = true
  let score = 0
  let highScore= window.localStorage.getItem('highScore')
  const width = 9
  let square =[]
  const squareMap = []
  let speed = 1000
  highScoreDiv.innerText = window.localStorage.getItem('highScore')

  gameOver.classList.add('topRow')

  resetHS.addEventListener('click', function () {


    window.localStorage.setItem('highScore', '0')
    highScoreDiv.innerText = window.localStorage.getItem('highScore')
    console.log('click')
  })


  reset.addEventListener('click', function () {

    speed = 1000
    square =[]
    clearTimeout(loop)
    on = true
    mapSquares()
    clearBoard()
    drawWorld()
    upadteBoard()
    generateShape()
    if(score > highScore){
      highScore = score
      window.localStorage.setItem('highScore', `${highScore}`)
    }

    highScoreDiv.innerText = window.localStorage.getItem('highScore')
    score = 0
    gameOver.classList.add('topRow')
    gameLoop()

  })

  function makeBoard(){
    for(let i=0;i <99; i++){
      const div = document.createElement('div')
      board.appendChild(div)
      square.push(0)

    }

  }

  makeBoard()


  function mapSquares(){
    square.forEach((element)=>{
      if(!squareMap.length || squareMap[squareMap.length-1].length === width)
        squareMap.push([])

      squareMap[squareMap.length-1].push(element)
    })
  }

  mapSquares()

  function clearBoard(){
    squareMap.forEach(row => row.fill(0))
  }

  const squares = document.querySelectorAll('.board > div')

  const topRow = [squares[0], squares[1], squares[2], squares[3], squares[4], squares[5], squares[6], squares[7], squares[8]]


  function topRowHide(){
    topRow.forEach((square) => {

      square.classList.add('topRow')
    }

    )
  }


  function drawWorld(a,b){
    scoreDiv.innerText = `${score}`
    squareMap.forEach((square, mapIndex) => {
      square.forEach((element, squareIndex) => {
        if(element === a){
          squares[squareIndex + (mapIndex * 9)].removeAttribute('class')
          squares[squareIndex + (mapIndex * 9)].classList.add(b)

        }
      })
    })
    topRowHide()
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
          console.log('freeze')
          console.log(squareMap)

        }
      }
    }
    checkLines()
    generateShape()
  }

  let ran = Math.floor(Math.random()*7)
  let previewShape = ran

  const generateShape = function generateShape(){
    previewShape = ran
    ran = Math.floor(Math.random()*7)
    const pos = Math.floor(Math.random()*5)

    if(ran === 0){
      preview.innerText = 'Square'
    }else if(ran === 1){
      preview.innerText = 'I'
    } else if(ran === 2){
      preview.innerText = 'J'
    } else if(ran === 3){
      preview.innerText = 'L'
    } else if(ran === 4){
      preview.innerText = 'S'
    } else if(ran === 5){
      preview.innerText = 'T'
    } else if(ran === 6){
      preview.innerText = 'Z'
    }
    console.log(previewShape)
    if(on){

      //  previewShape = 1

      if (previewShape === 0){

        squareMap[0][pos] =4
        squareMap[0][pos+1] =4
        squareMap[1][pos] =4
        squareMap[1][pos+1] =4

      }else if (previewShape === 1){

        squareMap[0][pos] =1
        squareMap[0][pos+1] =1
        squareMap[0][pos+2] =1
        squareMap[0][pos+3] =1

      }else if (previewShape === 2){

        squareMap[0][pos] =2
        squareMap[1][pos] =2
        squareMap[1][pos+1] =2
        squareMap[1][pos+2] =2

      }else if (previewShape === 3){

        squareMap[0][pos+2] = 3
        squareMap[1][pos+1] = 3
        squareMap[1][pos+2] = 3
        squareMap[1][pos] = 3

      }else if (previewShape === 4){

        squareMap[0][pos+2] =5
        squareMap[0][pos+1] =5
        squareMap[1][pos] =5
        squareMap[1][pos+1] =5

      }else if (previewShape === 5){

        squareMap[0][pos+1] =6
        squareMap[1][pos+2] =6
        squareMap[1][pos] =6
        squareMap[1][pos+1] =6

      }else if (previewShape === 6){

        squareMap[0][pos] = 7
        squareMap[0][pos+1] = 7
        squareMap[1][pos+1] = 7
        squareMap[1][pos+2] = 7
      }
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


    for(let y=squareMap.length-1;  y>=0;  y-- ){

      for (let x=squareMap[y].length; x>=0; x--) {

        // t Rotate
        if(squareMap[y][x] === 6 && squareMap[y][x+1] === 6 && squareMap[y][x+2] === 6 && squareMap[y-1][x+1] === 6 ){
          squareMap[y][x] = 0
          squareMap[y+1][x+1] = 6
          squareMap[y-1][x+1] = 6
        }else if(squareMap[y][x] === 6 && squareMap[y][x+1] === 6 && squareMap[y+1][x] === 6 && squareMap[y-1][x] ===  6&& squareMap[y-1][x] === 6 && squareMap[y][x-1] === 0){
          squareMap[y-1][x] = 0
          squareMap[y][x-1] = 6
          squareMap[y][x+1] = 6
        }else if(squareMap[y][x] === 6 && squareMap[y][x+1] === 6 && squareMap[y+1][x] === 6 && squareMap[y][x-1] === 6 && squareMap[y-1][x] === 0 && squareMap[y+1][x] === 0){
          squareMap[y][x+1] = 0
          squareMap[y][x-1] = 6
          squareMap[y+1][x] = 6
          squareMap[y-1][x] = 6
        } else if(squareMap[y][x] === 6 && squareMap[y][x-1] === 6 && squareMap[y+1][x] === 6 && squareMap[y-1][x] === 6 && squareMap[y][x+1] === 0){
          squareMap[y+1][x] = 0
          squareMap[y][x+1] = 6
          squareMap[y-1][x] = 6
          squareMap[y][x-1] = 6
          return
        }

        //irotate
        if(squareMap[y][x] === 1 && squareMap[y][x+1] === 1 && squareMap[y][x+2] === 1 && squareMap[y][x+3] === 1 && squareMap[y+2][x+1] === 0 &&  squareMap[y+1][x+1] === 0){
          squareMap[y+1][x+1] = 1
          squareMap[y+2][x+1] = 1
          squareMap[y-1][x+1] = 1
          squareMap[y][x] = 0
          squareMap[y][x+2] = 0
          squareMap[y][x+3] = 0
        } else if(squareMap[y][x] === 1 && squareMap[y-1][x] === 1 && squareMap[y-2][x] === 1 && squareMap[y-3][x] === 1 && squareMap[y-1][x+2] === 0 && squareMap[y-1][x-1] === 0 && squareMap[y-1][x+2] === 0){
          squareMap[y-1][x] = 1
          squareMap[y][x] = 0
          squareMap[y-2][x] = 0
          squareMap[y-3][x] = 0
          squareMap[y-1][x+2] = 1
          squareMap[y-1][x-1] = 1
          squareMap[y-1][x+1] = 1
          return
        }
        //rotate L 3
        if(squareMap[y][x] === 3 && squareMap[y][x-1] === 3 && squareMap[y][x+1] === 3 && squareMap[y-1][x+1] === 3 ){
          squareMap[y][x] = 3
          squareMap[y][x-1] = 0
          squareMap[y][x+1] = 0
          squareMap[y-1][x+1] = 0
          squareMap[y+1][x] = 3
          squareMap[y-1][x] = 3
          squareMap[y+1][x+1] = 3



        } else if(squareMap[y][x] === 3 && squareMap[y-1][x] === 3 && squareMap[y+1][x] === 3 && squareMap[y+1][x+1] === 3 && squareMap[y][x-1] === 0 && squareMap[y+1][x-1] === 0 && squareMap[y][x+1] === 0 ){
          squareMap[y][x] = 3
          squareMap[y][x+1] = 3
          squareMap[y][x-1] = 3
          squareMap[y+1][x-1] = 3
          squareMap[y+1][x] = 0
          squareMap[y-1][x] = 0
          squareMap[y+1][x+1] = 0
        } else if(squareMap[y][x] === 3 && squareMap[y][x-1] === 3 && squareMap[y][x+1] === 3 && squareMap[y+1][x-1] === 3 && squareMap[y+1][x] ===0 && squareMap[y-1][x-1] === 0 && squareMap[y-1][x] === 0 ){
          squareMap[y][x] = 3
          squareMap[y-1][x] = 3
          squareMap[y-1][x-1] = 3
          squareMap[y+1][x] = 3
          squareMap[y][x-1] = 0
          squareMap[y][x+1] = 0
          squareMap[y+1][x-1] = 0
        } else if(squareMap[y][x] === 3 && squareMap[y-1][x] === 3 && squareMap[y+1][x] === 3 && squareMap[y-1][x-1] === 3 &&   squareMap[y][x+1] === 0 && squareMap[y-1][x+1] === 0 && squareMap[y][x-1] === 0){
          squareMap[y-1][x] = 0
          squareMap[y+1][x] = 0
          squareMap[y-1][x-1] = 0
          squareMap[y][x-1] = 3
          squareMap[y][x+1] = 3
          squareMap[y-1][x+1] = 3
          return
          //console.log('heyHo')
        }

        //rotate J 2

        if(squareMap[y][x] === 2 && squareMap[y][x-1] === 2 && squareMap[y][x+1] === 2 && squareMap[y-1][x-1] === 2 && squareMap[y+1][x] === 0
        ){

          squareMap[y][x] = 2
          squareMap[y][x-1] = 0
          squareMap[y][x+1] = 0
          squareMap[y-1][x-1] = 0
          squareMap[y+1][x] = 2
          squareMap[y-1][x] = 2
          squareMap[y-1][x+1] = 2

          //done

        } else if(squareMap[y][x] === 2 && squareMap[y-1][x] === 2 && squareMap[y+1][x] === 2 && squareMap[y-1][x+1] === 2 && squareMap[y][x-1] === 0 && squareMap[y+1][x+1] === 0 && squareMap[y][x+1] === 0
        ){

          squareMap[y][x] = 2
          squareMap[y][x+1] = 2
          squareMap[y][x-1] = 2
          squareMap[y+1][x+1] = 2
          squareMap[y+1][x] = 0
          squareMap[y-1][x] = 0
          squareMap[y-1][x+1] = 0

          // done
        } else if(squareMap[y][x] === 2 && squareMap[y][x-1] === 2 && squareMap[y][x+1] === 2 && squareMap[y+1][x+1] === 2 && squareMap[y-1][x-1] === 0 &&  squareMap[y+1][x-1] === 0
        ){
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
        }  else if(squareMap[y][x] === 2 && squareMap[y-1][x] === 2 && squareMap[y+1][x] === 2 && squareMap[y+1][x-1] === 2 && squareMap[y][x+1] === 0 ){
          squareMap[y][x] = 2
          squareMap[y][x-1] = 2
          squareMap[y][x+1] = 2
          squareMap[y-1][x-1] = 2
          squareMap[y+1][x] = 0
          squareMap[y+1][x-1] = 0
          squareMap[y-1][x] = 0
          return

        }
        ///// SHAPE DONE!!!

        //rotate s 5
        if(squareMap[y][x] === 5 && squareMap[y][x-1] === 5 && squareMap[y-1][x+1] === 5 && squareMap[y-1][x] === 5 && squareMap[y][x+1] === 0 && squareMap[y+1][x+1] === 0){
          squareMap[y][x] = 5
          squareMap[y-1][x] = 5
          squareMap[y][x+1] = 5
          squareMap[y+1][x+1] = 5
          squareMap[y][x-1] = 0
          squareMap[y-1][x+1] = 0
          //done
        } else if(squareMap[y][x] === 5 && squareMap[y-1][x] === 5 && squareMap[y][x+1] === 5 && squareMap[y+1][x+1] === 5 && squareMap[y+1][x-1] === 0 && squareMap[y+1][x] === 0){
          squareMap[y][x] = 5
          squareMap[y][x+1] = 5
          squareMap[y+1][x] = 5
          squareMap[y+1][x-1] = 5
          squareMap[y+1][x+1] = 0
          squareMap[y-1][x] = 0
        }
        //done
        //rotate z 7
        if(squareMap[y][x] === 7 && squareMap[y-1][x-1] === 7 && squareMap[y-1][x] === 7 && squareMap[y][x+1] === 7){

          squareMap[y][x] = 7
          squareMap[y+1][x] = 7
          squareMap[y][x+1] = 7
          squareMap[y-1][x+1] = 7
          squareMap[y-1][x] = 0
          squareMap[y-1][x-1] = 0

          //  console.log('777777777')

        }else if(squareMap[y][x] === 7 && squareMap[y+1][x] === 7 && squareMap[y][x+1] === 7 && squareMap[y-1][x+1] === 7&&   squareMap[y][x-1] === 0){
        //  console.log('here we gooooo again')

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
  let fullLineNum = -5

  function checkLines(){

    for( let y = 0; y < squareMap.length; y++) {
      let  fullLine=true
      for (let x=0; x<squareMap[y].length; x++) {
        if(squareMap[y][x] < 10) {
          fullLine= false

        }


      }
      if (fullLine) {

        fullLineNum+=5
        score += (9 +Math.ceil((fullLineNum*1.5)))
        squareMap.splice(y, 1)
        squareMap.splice(0,0,[0,0,0,0,0,0,0,0,0])
        y--

        rowSound.play()
        speed -= 50

      }
    }
    for( let y = 0; y < squareMap.length; y++) {
      let  lose=false
      for (let x=0; x<squareMap[y].length; x++) {
        if(squareMap[0][x] > 10 && squareMap[1][x] > 10 ) {
          lose= true
        }


      }
      if (lose) {
        if(score > highScore){
          highScore = score
          window.localStorage.setItem('highScore', `${highScore}`)
          highScoreDiv.innerText = window.localStorage.getItem('highScore')
        }
        //console.log('lose')
        on = false
        gameOver.classList.remove('topRow')

      }
    }
  }


  document.onkeydown =function(e){
    if(e.keyCode === 37){
      moveShapesLeft()
    } else if(e.keyCode === 39){
      moveShapesRight()
    } else if(e.keyCode === 40){
      event.preventDefault()
      moveShapesDownKey()
    } else if(e.keyCode === 38){
      rotateShape()
    } else if(e.keyCode === 80){
      on = false
      //console.log('p')
    } else if(e.keyCode === 83){
      on = true
      gameLoop()
      //console.log('p')
    }


  }

  function upadteBoard(){
    drawWorld(1, 'i')
    drawWorld(11, 'i')
    drawWorld(2, 'l')
    drawWorld(12, 'l')
    drawWorld(13, 'j')
    drawWorld(3, 'j')
    drawWorld(4, 'o')
    drawWorld(14, 'o')
    drawWorld(5, 's')
    drawWorld(15, 's')
    drawWorld(6, 't')
    drawWorld(16, 't')
    drawWorld(17, 'z')
    drawWorld(7, 'z')
    drawWorld(0, 'b')
    checkLines()
  }

  let loop
  const gameLoop = function(){
    loop = setTimeout(function () {

      if(on === true){
      //  console.log(squareMap)

        upadteBoard()
        moveShapesDown()
        gameLoop()
        fullLineNum = -5
      }
    }, speed)
  }

  gameLoop()

  const  update = setInterval(function () {

    if(on === true){
      //console.log(squareMap)
      upadteBoard()

    }
  }, 200)

//Fucking DOMContentLoaded
})
