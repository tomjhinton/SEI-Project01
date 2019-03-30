document.addEventListener('DOMContentLoaded', () => {





  //  right: index+1 - if(index%width < width-1)
  //  down: index+width - if(index+width <= width*width-1)
  //  left: index-1 - if(index%width > 0)
  //  up: index-width - if(index-width >= 0)

  const board = document.querySelector('.board')
  const iSelect = document.querySelectorAll('.board > .i')
  const lSelect = document.querySelectorAll('.board > .l')
  const jSelect = document.querySelectorAll('.board > .j')
  const oSelect = document.querySelectorAll('.board > .o')
  const sSelect = document.querySelectorAll('.board > .s')
  const tSelect = document.querySelectorAll('.board > .t')
  const zSelect = document.querySelectorAll('.board > .z')

function assignClass() {

}

  let random = Math.floor(Math.random()* 7)
  console.log(random)



  function newPiece(){
    random = Math.floor(Math.random()* 7)
    choice = random
    inPlay = pieces[choice]
    inPlayColor = piecesColor[choice]
    console.log('new pieces')
  }

  const width = 9
  const square =[]
  const squareMap = []

  function makeBoard(){
    for(let i=0;i <81; i++){
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



  const i = [3,4,5,6]
  const l = [3,12,13,14]
  const j = [5,12,13,14]
  const o = [3,4,13,14]
  const s = [4,5,12,13]
  const t = [12,13,14,4]
  const z = [4,5,12,13]






  const iMap = [0,0,1,1,1,1,0,0,0]


  const lMap = [3,12,13,14]
  const jMap = [5,12,13,14]
  const oMap = [3,4,13,14]
  const sMap = [4,5,12,13]
  const tMap = [12,13,14,4]
  const zMap = [4,5,12,13]








  function moveShapesDown(){
    var canMove = true

    for( var y = 0; y < squareMap.length; y++) {

      for (var x=0; x<squareMap[y].length; x++) {

  		if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
  				if(y === squareMap.length-1 || squareMap[y+1][x] >10 ) {
  					canMove = false;
  					freeze();
  				}

  			}
  		}

  	}
  	if(canMove) {

  		for(var y=squareMap.length-1;  y>=0;  y-- ){

  		for (var x=0; x<squareMap[y].length; x++) {
  			if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
  				squareMap[y+1][x] = squareMap[y][x];
  				squareMap[y][x] =0;

  			}


  		}

  	}


    }

  }



  function freeze(){
  	for( var y = 0; y < squareMap.length; y++) {

  		for (var x=0; x<squareMap[y].length; x++) {

  			if(squareMap[y][x] > 0 && squareMap[y][x] < 10){
  				squareMap[y][x] = squareMap[y][x] + 10
  			}

  		}
  	}
  	//	checkLines();

  		var ran = Math.floor(Math.random()*7)

  		if (ran === 0){

  		squareMap[0] =[0,0,0,2,2,0,0,0]

  		squareMap[1]= [0,0,0,2,2,0,0,0]


  	}else if (ran === 1){

  		squareMap[0] =[0,0,0,0,0,0,0,0]

  		squareMap[1]= [0,0,4,4,4,4,0,0]

  		}else if (ran === 2){

  		squareMap[0] =[0,0,0,3,0,0,0,0]

  		squareMap[1]= [0,0,0,3,3,3,0,0]
  	}else if (ran === 3){

    squareMap[0] =[0,0,0,0,0,5,0,0]

    squareMap[1]= [0,0,0,5,5,5,0,0]
  }else if (ran === 4){

  squareMap[0] =[0,0,0,0,6,6,0,0]

  squareMap[1]= [0,0,0,6,6,0,0,0]
}else if (ran === 5){

squareMap[0] =[0,0,0,7,0,0,0,0]

squareMap[1]= [0,0,7,7,7,0,0,0]
}else if (ran === 6){

squareMap[0] =[0,0,0,0,0,8,0,0]

squareMap[1]= [0,0,0,8,8,8,0,0]
}
  }







  function drawWorld(a,b){

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


  }


  setInterval(function () {


    squareMap[2] = iMap
    console.log(squareMap)



    drawWorld(1, 'i')
    drawWorld(2, 'l')
    drawWorld(3, 'j')
    drawWorld(4, 'o')
    drawWorld(5, 's')
    drawWorld(6, 't')
    drawWorld(7, 'z')
    drawWorld(0, 'b')
    moveShapesDown()
  }, 1000)









  const pieces = [i, l, j, o, s, t, z ]
  const piecesColor = ['i', 'l', 'j', 'o', 's', 't', 'z' ]
  let choice = random

  let inPlay = pieces[choice]
  let inPlayColor = piecesColor[choice]
  console.log(inPlay)


const row1 = [squares[0],squares[1],squares[2], squares[3], squares[4], squares[5], squares[6], squares[7], squares[8]]

const row2 = [squares[9],squares[10],squares[11], squares[12], squares[13], squares[14], squares[15], squares[16], squares[17]]

const row3 = [squares[18],squares[19],squares[20], squares[21], squares[22], squares[23], squares[24], squares[25], squares[26]]

const row4 = [squares[27],squares[28],squares[29], squares[30], squares[31], squares[32], squares[33], squares[34], squares[35]]

const row5 = [squares[36],squares[37],squares[38], squares[39], squares[40], squares[41], squares[42], squares[43], squares[44]]

const row6 = [squares[45],squares[46],squares[47], squares[48], squares[49], squares[50], squares[51], squares[52], squares[53]]

const row7 = [squares[54],squares[55],squares[56], squares[57], squares[58], squares[59], squares[60], squares[61], squares[62]]

const row8 = [squares[63],squares[64],squares[65], squares[66], squares[67], squares[68], squares[69], squares[70], squares[71]]

const row9 = [squares[72],squares[73],squares[74], squares[75], squares[76], squares[77], squares[78], squares[79], squares[80]]

  console.log(square)

  row9.forEach( element  => {
    element.classList.add('stopped')
  })




  //inPlay.forEach( element  => {

//    setInterval(function () {


  //    squares[element].classList.add(inPlayColor)
  //    const time =  setTimeout(function () {
        //if(element+ 9 <= 81 && squares[element].classList.contains('stopped') !== true){
  //        squares[element].classList.remove(inPlayColor)
  //        element +=9
  //      } else if (element+ 9 >= 81 || (element +9).classList.contains('stopped')   ){
  //        squares[element].classList.add('stopped')
  //        clearTimeout(time)



    //    }
    //  }, 1000)

  //  }, 2000)
//  })

  //console.log(i[0])




  //console.log(pieces[choice].toString())
















//Fucking DOMContentLoaded
})
