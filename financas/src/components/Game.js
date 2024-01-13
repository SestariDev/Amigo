// Game.js

import React, { useState } from 'react';
import styles from './Game.module.css'; // Certifique-se de substituir pelo caminho correto

function Game() {
    const [name, setName] = useState('Nome Misterioso');
    const [currentHint, setCurrentHint] = useState('');
    const [selectedHints, setSelectedHints] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [rocketFlying, setRocketFlying] = useState(false);

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);

        // Verifica se o nome é 'iza' e aciona a animação
        if (newName.toLowerCase() === 'iza') {
            setRocketFlying(true);

            // Adicione um atraso para a animação começar antes de mostrar o foguete
            setTimeout(() => {
                setShowPopup(true);
            }, 2000);
        } else {
            setRocketFlying(false);
        }
    };

    const array = [
        { numero: 1, dica: "Gosta de animais" },
        { numero: 2, dica: "Tem 2 braços" },
        { numero: 3, dica: "É loira" },
        { numero: 4, dica: "Tem 22 anos" },
        { numero: 5, dica: "Estudou no Cim" },
        { numero: 6, dica: "Tem menos de 1,70" },
        { numero: 7, dica: "Perca a vez" },
        { numero: 8, dica: "Limão é Gay" },
        { numero: 9, dica: "Gosta de doce" },
        { numero: 10, dica: "Ouve K-pop" },
    ];

    const handleButtonClick = (hint) => {
        if (!selectedHints.includes(hint)) {
            setCurrentHint(hint);
            setSelectedHints([...selectedHints, hint]);
            setShowPopup(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.perfil}>
                {name !== 'Iza' && name !== 'iza' ? (
                    <>
                    <img src='https://previews.dropbox.com/p/thumb/ACJvbi02QcVrIIm_AdG4NoJc_7tsrpF3eMh4fYtU1lkF0tE5b4CAKxMLXYqrhMbpS9MhpADuHvuCryNr4XBjmwnanDzXsgJd2Cpu1FwRKulbJJDUgQg81Pp2YuI5tv0xoJsorh_MKRhzDDTvB31nIGpfK0Un4ZyYNXyFR4T9qRdp0czw9iaAy6AgxR8-ThqP3Ht3qErY8RpwH2_k7yo3WPD0pyBOKsRSbv-ph-IA5cju8V1G5KPyG5ZF4xIBfJ5g9bapIq9yd8sIdh3ZgkRpgmqvHsJOIfgbznfBkGQEW_T8dIP0_6pLjoDceg0Box0zUTRGCvCE0eyvjlL5eksmp6iL/p.jpeg' className={styles.profile} alt="Imagem do perfil" />
                    
                    </>
                    ) : (
                    <>
                   <div className={`${styles.container} ${styles.fogos}`}>
                        {/* Restante do seu conteúdo */}
                    </div>
                    <div className={styles.iza}>
                    {/* ... seu código existente */}
                    </div>
                    <img src="https://previews.dropbox.com/p/thumb/ACJ6qaFjsYXQuJZY34lvzqbEumMIvEwhMR4ILzbY4TR95sYpiPuKBq_tUjDY0sN-1WCf651j8Hl_sw-cG8x6WQ2qYTutXmkt6jvsZCe6rivHu-mFVA4ZwgqpvlxLgZ1o_qhcz33HCkKLtApxOOz4TaEuZtSXt_O_3WGJAhrVS1jc9MhT6UwBvxSFn1-H_03Om0rxHQLKhbv2fB5QbvTFJ0R7kpXXpu9yqFWlkx7Jx-2fu8mW0mUGXfA9kf1ZevjogRQn4CXh8kqDkPpPVd6x8krz7WYSnL0fyWGTqqZAU1h4eFvgbN59KKI8ZixZcUh7Qd7nnjsUczMLWqVUegxESqwI/p.png" className={styles.profile} alt="Imagem do perfil2" />
                    </>
                )}

                {selectedHints.length > 0 && (
                    <div className={styles.selectedHints}>
                        <input type="text" value={name} onChange={handleNameChange} />
                        <p>Dicas Selecionadas:</p>
                        <ul>
                            {selectedHints.map((hint, index) => (
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
                </div>
            )}
        </div>
    );
}

export default Game;
