// Componentes
import ExperienceBar from "../components/ExperienceBar";
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import { GetServerSideProps } from 'next';

// Estilos
import styles from '../styles/pages/Home.module.css';

// Métodos
import Head from 'next/head';

// Contextos
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from "../contexts/ChallengesContext";

// Interfaces (TypeScript)
interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Home | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

/**
 * Função própria do Next.js, que é executada antes da página ser renderizada pelo frontend.
 * É utilizada para determinar os props que serão passados aos componentes do frontend.
 * 
 * Obrigatoriamente ela deve possuir este nome e ser assíncrona.
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Aqui, o que está armazenado nos cookies da minha aplicação
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level) || 1, 
      currentExperience: Number(currentExperience) || 0, 
      challengesCompleted: Number(challengesCompleted) || 0
    }
  }
}
