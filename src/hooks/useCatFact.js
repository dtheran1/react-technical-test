import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () { // a los hooks por lo general se le debe colocar un nombre que no involucre lo que hace.
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
