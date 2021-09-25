// Componentes
import { useContext } from 'react';

// Estilos CSS
import styles from '../styles/components/ExperienceBar.module.css';

// Contextos
import { ChallengesContext } from '../contexts/ChallengesContext';

export default function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const barWidth = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${barWidth}%` }} />
                
                <span className={styles.currentExperience} style={{ left: `${barWidth}%` }}>{`${currentExperience} xp`}</span>
            </div>
            <span>{`${experienceToNextLevel} xp`}</span>
        </header>
    );
}
