// Estilos CSS
import styles from '../styles/components/ChallengeBox.module.css';

// Componentes React
import { useContext } from 'react';

// Contextos
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

export default function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img width="65" src={`icons/${activeChallenge.type}.svg`} alt="desafio exercício" />
                        <strong>{ activeChallenge.type == 'body' ? 'Exercite seu corpo' : 'Exercite seus olhos' }</strong>
                        <p>
                            {activeChallenge.description}
                        </p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeFailed}>
                            Falhei
                        </button>
                        <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeSucceeded}>
                            Consegui
                        </button>
                    </footer>
                </div>
            ) : (
                <>
                    <div className={styles.challengeNotActive}>
                        <strong>Inicie e termine um ciclo para receber desafios a serem completados</strong>
                        <p>
                            <img width="65" src="icons/level-up.svg" alt="level up" />
                            Avance de nível completando desafios
                        </p>
                    </div>
                </>
            ) }

        </div>
    );
}
