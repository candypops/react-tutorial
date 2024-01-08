import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/fact'
import { useCatImg } from './hooks/useCatImg'

function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact } // en vez de devolver el setFact devolvemos una implementacion
}

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgURL } = useCatImg({ fact })

  const handdleClick = async () => {
    refreshFact()
  }

  //this is so messy. json does not have a url property anymore
  // useEffect(() => {
  //   if (!fact) return
  //   firstWord = fact.split(' ').slice(0, 1).join(' ')

  //   fetch(CAT_IMAGE_URL)
  //     .then(res => {
  //       res.json()
  //     })
  //     .then(() => {
  //       setImgURL(CAT_IMAGE_URL)
  //     })
  // }, [fact])

  return (
    <>
      <main>
        <h1>Cat app</h1>
        <button onClick={handdleClick}>New fact</button>
        {fact && <p>{fact}</p>}
        {imgURL && <img src={`${imgURL}`} alt='img' />}
      </main>
    </>
  )
}

export default App
