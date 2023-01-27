import React, { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RAMDON_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDON_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImage(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {image && <img src={`${CAT_PREFIX_IMAGE_URL}${image}`} alt={`Image extracted using the first word in ${fact}`} />}
      </section>
    </main>
  )
}
