import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    //poner las funciones del use effect dentro del use effect
    const handleMove = event => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //ejecutado cuando se desmonta el componente 
    // y cuando cambian las dependencias pero antes de ejecutar el efecto de nuevo 
    return () => {
      window.removeEventListener('pointermove', handleMove)
    } 
  }, [enabled])
  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button
        onClick={() => {
          setEnabled(!enabled)
        }}
      >
        {enabled ? 'Enable' : 'Disable'} follow
      </button>
    </>
  )
}

export default App
