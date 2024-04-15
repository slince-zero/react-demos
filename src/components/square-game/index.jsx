/* eslint-disable react/prop-types */
import style from './styles.module.css'

import { useState } from 'react'

const Square = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className={style.square}>
      {value}
    </button>
  )
}

const Board = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return

    const nextSquare = squares.slice()
    if (xIsNext) {
      nextSquare[index] = 'X'
    } else {
      nextSquare[index] = 'O'
    }
    onPlay(nextSquare)
  }

  const calculateWinner = () => {
    // 定义所有可能获胜的路线
    const lines = [
      [0, 1, 2], // horizontal
      [3, 4, 5], // horizontal
      [6, 7, 8], // horizontal
      [0, 3, 6], // vertical
      [1, 4, 7], // vertical
      [2, 5, 8], // vertical
      [0, 4, 8], // diagonal
      [2, 4, 6], // diagonal
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }

    return null
  }

  // 判断是否有胜者
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <>
      <div className={style.status}>{status}</div>
      <div className={style.board_row}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className={style.board_row}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className={style.board_row}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default function BoardGame() {
  const [xIsNext, setXIsNext] = useState(true)
  const [currentMove, setCurrentMove] = useState(0)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    setXIsNext(!xIsNext)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
    setXIsNext(nextMove % 2 === 0)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move > 0) {
      description = 'Go to move #' + move
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className={style.game}>
      <div className={style.game_board}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={style.game_info}>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
