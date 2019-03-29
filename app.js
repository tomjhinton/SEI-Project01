document.addEventListener('DOMContentLoaded', () => {

  const board = document.querySelector('.board')


  const width = 9
  let active =[]
  //  right: index+1 - if(index%width < width-1)
  //  down: index+width - if(index+width <= width*width-1)
  //  left: index-1 - if(index%width > 0)
  //  up: index-width - if(index-width >= 0)




  let random = Math.floor(Math.random()* 7)
  console.log(random)


  function makeBoard(){
    for(let i=0;i <81; i++){
      const div = document.createElement('div')
      board.appendChild(div)

    }




  }

  makeBoard()

  const squares = document.querySelectorAll('.board > div')
  //  console.log(squares)

  const i = [squares[3],squares[4],squares[5], squares[6]]
  const l = [squares[3],squares[12],squares[13], squares[14], squares[15]]
  const j = [squares[6],squares[12],squares[13], squares[14], squares[15]]
  const o = [squares[3],squares[4],squares[13], squares[14]]
  const s = [squares[4],squares[5],squares[12], squares[13]]
  const t = [squares[12],squares[13],squares[14], squares[4]]
  const z = [squares[4],squares[5],squares[12], squares[13]]


// console.log(squares.indexOf(i[3]))

  squares.forEach((square, index) => {
    if(square === i[0]) console.log(index)
  })


const row1 = [squares[0],squares[1],squares[2], squares[3], squares[4], squares[5], squares[6], squares[7], squares[8]]

const row2 = [squares[9],squares[10],squares[11], squares[12], squares[13], squares[14], squares[15], squares[16], squares[17]]

const row3 = [squares[18],squares[19],squares[20], squares[21], squares[22], squares[23], squares[24], squares[25], squares[26]]

const row4 = [squares[27],squares[28],squares[29], squares[30], squares[31], squares[32], squares[33], squares[34], squares[35]]

const row5 = [squares[36],squares[37],squares[38], squares[39], squares[40], squares[41], squares[42], squares[43], squares[44]]

const row6 = [squares[45],squares[46],squares[47], squares[48], squares[49], squares[50], squares[51], squares[52], squares[53]]

const row7 = [squares[54],squares[55],squares[56], squares[57], squares[58], squares[59], squares[60], squares[61], squares[62]]

const row8 = [squares[63],squares[64],squares[65], squares[66], squares[67], squares[68], squares[69], squares[70], squares[71]]

const row9 = [squares[72],squares[73],squares[74], squares[75], squares[75], squares[77], squares[78], squares[79], squares[80]]


console.log(row5)

  console.log(i[0])


  const test = i.forEach(function(element){
    console.log(element)
  })



  //console.log(i[0])


  const pieces = [i, l, j, o, s, t, z ]
  const piecesColor = ['i', 'l', 'j', 'o', 's', 't', 'z' ]
  let choice = random

  let inPlay = pieces[choice]
  let inPlayColor = piecesColor[choice]

  //console.log(pieces[choice].toString())

  console.log(i[1])

  function callPiece(){
    inPlay.forEach(function(element) {
      element.classList.add(inPlayColor)
      element.classList.add('active')


      squares.forEach((square, index) => {
        if(square.classList.contains('active')){
        active.push(index)
        console.log(active)
        console.log(active.slice(active.length -inPlay.length))
        console.log(inPlay.length)
      }
      })

      //console.log(inPlay)


    })
    setTimeout(function () {
      inPlay.forEach(function(element) {
      //  element.removeAttribute('class')
        //  element.classList.remove('active')
      })
    }, 1000)
    //console.log(inPlay[1])
    setTimeout(function () {
      inPlay.forEach(function(element) {
        //    console.log(element.index)

      //  console.log(element)
      //element.classList.add('block')
        //      console.log(element.index)
      })
    }, 1000)
  }

  setTimeout(function () {
    random = Math.floor(Math.random()* 7)
    choice = random
    inPlay = pieces[choice]
    inPlayColor = piecesColor[choice]
    callPiece()
  }, 2000)










//Fucking DOMContentLoaded
})
