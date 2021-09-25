// Componentes
import { useContext } from 'react';

// Contextos
import { ChallengesContext } from '../contexts/ChallengesContext';

// Estilos CSS
import styles from '../styles/components/CompletedChallenges.module.css';

export default function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}