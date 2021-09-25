// Componentes
import { createContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

import { LevelUpModal } from '../components/LevelUpModal';

// JSON Challenges
import challenges from '../../challenges.json';

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

interface Challenge {
    type: 'eye' | 'body';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest /* rest operator, objeto que retorna o resto dos parâmetros não especificados na desestruturação */ }:ChallengesProviderProps) {

    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    // Salvar os dados do usuário nos Cookies do navegador
    // Salvo nos Cookies, pois o NodeJS presente no NextJS terá acesso aos Cookies, pois o Local Storage é acessível somente pelo frontend
    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted]);

    function levelUp() {
        setLevel(level + 1);

        setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/sounds/new_challenge.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Ciclo encerrado! Novo desafio 💪', {
                body: `Valendo ${challenge.amount}xp`
            });
        }
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        // Se não possui desafio ativo, não preciso executar nada na função
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        // Se o usuário avançou de nível concluindo o desafio, calculo o xp restante no próximo nível
        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;

            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return(
        <ChallengesContext.Provider value={
            { 
                level, 
                levelUp, 
                currentExperience,
                experienceToNextLevel,
                challengesCompleted,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                completeChallenge,
                closeLevelUpModal
            }
        }>
            { children }

            { isLevelUpModalOpen && <LevelUpModal /> }
        </ChallengesContext.Provider>
    );
}