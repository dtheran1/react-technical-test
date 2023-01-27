const CAT_ENDPOINT_RAMDON_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async (setFact) => {
  try {
    const res = await fetch(CAT_ENDPOINT_RAMDON_FACT)
    if (!res.ok) throw new Error('Error fetching fact') // En el fetch se puede validar los errores en la respuesta como en la peticion en este caso validamos que la respuesta
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (err) {
    console.log(err)
  }
}
