import { useEffect, useState } from 'react'
import './App.css'

function Tablero ({ children }) {
  const [tablero, setTablero] = useState(Array(64).fill(null))
  const [turno, setTurno] = useState('blanco')

  useEffect(() => {
    console.log('El turno es: ' + turno)
    setTablero(() => crearTablero())
  }, [])

  useEffect(() => {
    console.log('El turno es: ' + turno)
  })

  function crearTablero () {
    return tablero.map((_, i) => {
      let color = asignarColores(i)
      color = agregarPiezas(color, i)
      return (
        <Casilla className={color} whotTurno={turno} handleClick={() => cambiarTurno()} key={i} index={i} />
      )
    })
  }

  function agregarPiezas (clase, i) {
    if (i <= 15 && i >= 8) {
      return `${clase} peonNegro`
    } else if (i >= 48 && i <= 55) {
      return `${clase} peonBlanco`
    } else if (i === 0 || i === 7) {
      return `${clase} torreNegra`
    } else if (i === 56 || i === 63) {
      return `${clase} torreBlanca`
    } else if (i === 1 || i === 6) {
      return `${clase} caballoNegro`
    } else if (i === 57 || i === 62) {
      return `${clase} caballoBlanco`
    } else if (i === 2 || i === 5) {
      return `${clase} alfilNegro`
    } else if (i === 58 || i === 61) {
      return `${clase} alfilBlanco`
    } else if (i === 3) {
      return `${clase} reinaNegra`
    } else if (i === 59) {
      return `${clase} reinaBlanca`
    } else if (i === 4) {
      return `${clase} reyNegro`
    } else if (i === 60) {
      return `${clase} reyBlanco`
    }
    return clase
  }

  function asignarColores (i) {
    let color = 'casilla'
    if (Math.floor(i / 8) % 2 === 0) {
      i % 2 === 0
        ? color = 'casilla colBlanco'
        : color = 'casilla colNegro'
    } else {
      i % 2 === 0
        ? color = 'casilla colNegro'
        : color = 'casilla colBlanco'
    }
    return color
  }

  const cambiarTurno = () => {
    setTurno((prevTurno) =>
      prevTurno === 'blanco'
        ? 'negro'
        : 'blanco'
    )
  }

  const tableroActual = [...tablero]
  return (
    <div id='tablero' className='tablero'>
      {tableroActual}
    </div>
  )
}

function Casilla ({ handleClick, className, index }) {
  return (
    <div onClick={handleClick} className={className}>{index}</div>
  )
}

function App () {
  return (
    <Tablero>
      {
        Array(64).fill().map((_, i) => {
          return (
            <Casilla key={i} />
          )
        })
      }
    </Tablero>

  )
}

export default App
