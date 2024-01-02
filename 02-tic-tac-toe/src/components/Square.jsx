export const Square = ({ children, isActivePlayer, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index)
  }

  const className = `square ${isActivePlayer ? 'is-selected' : ''}`
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
