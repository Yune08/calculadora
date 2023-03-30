import { useState } from "react"

const Resta = ({numeroUno, numeroDos}) => {
    let resultado = numeroUno*numeroDos

const [resta, setResta] = useState(0)

const restaNumero = () =>{
    setResta(numeroUno-numeroDos)
}

  return (
    <section>
        <input type="button" onClick={restaNumero} value='Restar' />
        <p>{resta}</p>
    </section>
  )
}

export default Resta