import { Children } from "react"
import { useState } from "react"

const TURNS = {
  X:'X',
  O:'O'
}

const Square = ({Children, isSelected, updateBoard, index}) =>{
  const className = `square ${isSelected ? 'is-selected': ''}`
  return(
    <div className={className}>
      {Children}
    </div>
  )
}

function App(){
  const [board,setBoard] = useState( Array(9).fill(null))

  const {turn, setTurn} = useState(TURNS.X)

  return(
    <main className="board">
        <h1>Tic tac toe</h1>
        <section className="game">
          {
            board.map((_, index) => {
              return(
                <Square
                key={index}
                index={index}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>

        <section className="turn">
          <Square isSelected={turn}>
            {TURNS.X}
          </Square>
          <Square>
            {TURNS.O}
          </Square>
        </section>
    </main>
  ) 
}

export default App