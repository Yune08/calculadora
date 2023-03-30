import { useState } from "react"

const Suma = ({numeroUno, numeroDos}) => {

const [suma, setSuma] = useState(null)

const sumaNumero =()=> {
    let suma = numeroUno+numeroDos
    setSuma(suma)
}
  return (
    <section>
        <input type="button" onClick={sumaNumero} value='Sumar' />
        <p>{suma}</p>

    </section>
  )
}

export default Suma
