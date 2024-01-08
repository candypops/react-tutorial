import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/fact'

const CAT_IMAGE_URL = `https://cataas.com/cat/says/`


//custom hook inline
function useCatImg ({ fact }) {
  const [imgURL, setImgURL] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ').slice(0, 1).join(' ')

    setImgURL(`${CAT_IMAGE_URL}${firstWord}`)
  }, [fact])
  return { imgURL }
}

function App () {
  const [fact, setFact] = useState()
  const { imgURL } = useCatImg({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

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

  const handdleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

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