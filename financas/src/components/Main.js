import Game from './Game';
import styles from './Main.module.css'
import { useState } from 'react'

function Main() 
{
    const [start,setStart] = useState(false)

    return (
        <div className={styles.container}>
            
            {!start ? (
                <>
                    <h1> Preparados para descobrir meu amigo sefreto? 
                        <br>
                        </br>
                        É um caminho sem volta...
                    </h1>
                    <button className={styles.start} onClick={() => setStart(true)}>
                        START
                    </button>
                </>
            ) : (
                <Game/>
            )}
        </div>
    );
}

export default Main