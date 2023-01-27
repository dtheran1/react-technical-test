import React, { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImage(url)
      })
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get random Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {image && <img src={`${CAT_PREFIX_IMAGE_URL}${image}`} alt={`Image extracted using the first word in ${fact}`} />}
      </section>
    </main>
  )
}
