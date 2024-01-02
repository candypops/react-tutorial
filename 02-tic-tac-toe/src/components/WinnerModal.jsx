import { Square } from './Square'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null
  const modalText = winner === false ? 'Draw' : 'Winner'

  return (
    <section className='winner'>
      <div className='text'>
        {modalText}

        <header className='win'>{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Play again</button>
        </footer>
      </div>
    </section>
  )
}
