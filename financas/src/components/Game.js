// Game.js

import React, { useState } from 'react';
import styles from './Game.module.css'; // Certifique-se de substituir pelo caminho correto

function Game() {
    const [name, setName] = useState('Nome Misterioso');
    const [currentHint, setCurrentHint] = useState('');
    const [currentMeme, setCurrentMeme] = useState('');
    const [selectedHints, setSelectedHints] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [rocketFlying, setRocketFlying] = useState(false);
    const [showCountdown, setShowCountdown] = useState(false);
    const [countdown, setCountdown] = useState(3);

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);

        // Verifica se o nome é 'iza' e aciona a animação
        if (newName.toLowerCase() === 'iza') {
            setRocketFlying(true);

        } else {
            setRocketFlying(false);
        }
    };


    const array = [
        { numero: 1, dica: "Gosta de animais", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32LgdGQE2YYyKmdHocA2V1iUi_AonfqRZOA&usqp=CAU" },
        { numero: 2, dica: "Tem 2 braços", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32LgdGQE2YYyKmdHocA2V1iUi_AonfqRZOA&usqp=CAU"  },
        { numero: 3, dica: "É loira", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32LgdGQE2YYyKmdHocA2V1iUi_AonfqRZOA&usqp=CAU"   },
        { numero: 4, dica: "Tem 22 anos", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32LgdGQE2YYyKmdHocA2V1iUi_AonfqRZOA&usqp=CAU"   },
        { numero: 5, dica: "Estudou no Cim", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32LgdGQE2YYyKmdHocA2V1iUi_AonfqRZOA&usqp=CAU"   },
        { numero: 6, dica: "Tem menos de 1,70", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32LgdGQE2YYyKmdHocA2V1iUi_AonfqRZOA&usqp=CAU"   },
        { numero: 7, dica: "Perca a vez", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32LgdGQE2YYyKmdHocA2V1iUi_AonfqRZOA&usqp=CAU"   },
        { numero: 8, dica: "Limão é Gay", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32LgdGQE2YYyKmdHocA2V1iUi_AonfqRZOA&usqp=CAU"   },
        { numero: 9, dica: "Gosta de doce", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32LgdGQE2YYyKmdHocA2V1iUi_AonfqRZOA&usqp=CAU"   },
        { numero: 10, dica: "Ouve K-pop", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32LgdGQE2YYyKmdHocA2V1iUi_AonfqRZOA&usqp=CAU"   },
    ];

    
     const handleButtonClick = (hint, image) => {
        if (!selectedHints.includes(hint)) {
            setCurrentHint(hint);
            setCurrentMeme(image);
            setSelectedHints([...selectedHints, hint]);
            setShowPopup(true);
            startCountdown();
        }
    };

    const startCountdown = () => {
        // Inicia a contagem regressiva
        setCountdown(3);
        setShowCountdown(true);

        // Configura o intervalo para atualizar a contagem regressiva a cada segundo
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // Configura o timeout para fechar o popup após 3 segundos
        setTimeout(() => {
            setShowPopup(false);
            setShowCountdown(false);
            clearInterval(countdownInterval); // Limpa o intervalo quando o popup é fechado
        }, 3000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.perfil}>
                {name !== 'Iza' && name !== 'iza' ? (
                    <>
                     <img src="https://github.com/SestariDev/Amigo/blob/main/perfil1.jpg?raw=true" className={styles.profile} alt="Imagem do perfil" />
                    
                    </>
                    ) : (
                    <>
                   <div className={`${styles.container} ${styles.fogos}`}>
                        {/* Restante do seu conteúdo */}
                    </div>
                    <div className={styles.iza}>
                    
                    </div>
                    <img src="https://github.com/SestariDev/Amigo/blob/main/perfil.png?raw=true" className={styles.profile} alt="Imagem do perfil2" />
                    </>
                )}

                {selectedHints.length > 0 && (
                    <div className={styles.selectedHints}>
                        <input type="text" value={name} onChange={handleNameChange} />
                        <p>Dicas Selecionadas:</p>
                        <ul>
                            {selectedHints.map((hint, index, meme) => (
                                <li key={index}>{hint}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className={styles.buttons}>
                <h2>Selecione uma dica</h2>
                {array.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(item.dica)}
                        disabled={selectedHints.includes(item.dica)}
                    >
                        {item.numero}
                    </button>
                ))}
            </div>

            {showPopup && (
                <div className={styles.popup}>
                    <span className={styles.close} onClick={() => setShowPopup(false)}>
                        &times;
                    </span>
                    <p>{currentHint}</p>

                    {showCountdown && <div  style={{
                    position: 'absolute',
                    bottom: '10px', // Ajuste a posição conforme necessário
                    right: '10px', // Ajuste a posição conforme necessário
                    color: '#4CAF50',
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}>{countdown}</div>}
                </div>
            )}
        </div>
    );
}

export default Game;
