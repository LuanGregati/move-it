/**
 * Coloca-se aqui tudo que envolve a aplicação, ou o que se repete em todas as páginas dela
 */

// Estilos CSS globais
import '../styles/global.css';

// Contextos
import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp;
