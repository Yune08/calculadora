import Resta from "./Resta"
import Suma from "./Suma"

const Home = () => {
    const numeroUno = 10
    const numeroDos = 20
  return (
    <main>
        <Resta numeroUno={numeroUno} numeroDos={numeroDos}/>
        <Suma numeroUno={numeroUno} numeroDos={numeroDos}/>
    </main>
  )
}

export default Home