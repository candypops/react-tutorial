import './App.css'
import { useCatImg } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact';


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
        {imgURL && <img src={imgURL} alt='img' />}
      </main>
    </>
  )
}

export default App
