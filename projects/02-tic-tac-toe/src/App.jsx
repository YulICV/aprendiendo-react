import './App.css'
import { useState} from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { saveGameStorage,resetGameStorage } from './logic/storage'



function App(){

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null) 
  })
  
  const [turn, seTurn] = useState(() =>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    seTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()

  }

  const updateBoard = (index) => {
    //no actualizamos esta posición
    //si ya tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // guardar aqui partida
      saveGameStorage({
        board: newBoard,
        turn: turn
      })

    //combiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    seTurn(newTurn)
    
    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
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

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  ) 
}

export default App