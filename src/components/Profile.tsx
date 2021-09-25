// Componentes
import { useContext } from 'react';

// Contextos
import { ChallengesContext } from '../contexts/ChallengesContext';

// Estilos CSS
import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/luangregati.png" alt="Profile pic" />
            <div>
                <strong>Luan Gregati</strong>
                <p>
                    <img width="11%" src="icons/level.svg" alt="level icon" />
                    Nível {level}
                </p>
            </div>
        </div>
    );
}
