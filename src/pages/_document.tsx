/**
 * Por padrão, o NextJS não possui um arquivo "index.html" na pasta "public" como em create-react-app.
 * Para criar um documento Html, crio um arquivo _document.tsx utilizando o Document do NextJS
 */

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="icons/favicon.png" type="image/png" />

                    {/* É recomendado colocar em _document tudo que for estático em toda a aplicação, como é o caso da fonte */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main /> {/* O Main retorna o conteúdo principal da aplicação do index.tsx */}
                    <NextScript /> {/* Alguns scripts que o NextJS injeta na aplicação de forma automática */}
                </body>
            </Html>
        )
    }
}
