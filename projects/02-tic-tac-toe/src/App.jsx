import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'


const TURNS = {
  X:'x',
  O:'o'
}



const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App(){

  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, seTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) =>{
    //revisamos todas las combinaciones ganadoras
    //para ver si X u O ganó
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    //no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    seTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {



    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    //no actualizamos esta posición
    //si ya tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //combiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    seTurn(newTurn)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return(
    <main className="board">
      <h1>Tic tac toe</h1>
        <button onClick={resetGame}>Reset del Juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn===TURNS.X}>
          {TURNS.X}
          </Square>
        <Square isSelected={turn===TURNS.O}>
          {TURNS.O}
          </Square>
      </section>
      {
        winner !== null &&(
          <section className='winner'>
              <div className="text">
                <h2>
                  {
                    winner === false
                    ? 'empate'
                    : 'Gano'
                  }
                </h2>
                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
          </section>
        )
      }
    </main>
  ) 
}

export default App