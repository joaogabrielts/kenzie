import { useEffect, useState } from "react"

export const Modal = () => {
    const [count, setCount] = useState(0)

    // quando uma atualização do componente acontecer
    useEffect(() => {
        console.log("Uma Montagem Aconteceu ");

    }, [])

    //quando uma atualização acontecer no componente
     
    useEffect(() => {
        console.log("Aconteceu uma atualização");
        
    },[count])
     

    //quando a desmontagem acontecer
    useEffect(() => {
     return () => {
        console.log('Uma desmontagem aconteceu ');
        
     }
    }, [])


    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            {count}
            <button onClick={addCount}>Incrementar contador</button>
        </div>
    )

}