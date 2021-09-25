# Move.it

Este aplicativo pode ser usado por profissionais de T.I ou pessoas que trabalham em frente a um computador por muitas horas ao dia. Na interface principal, há um contador de 25 minutos que pode ser iniciado pelo usuário. Quando o contador chega a 0 (zero), uma notificação será exibida ao usuário de que é o momento de dar um descanso e irá desafiá-lo com um exercício físico. Caso o exercício seja realizado, o usuário irá ganhar pontos de experiência, que podem ser acumulados para avançar de nível. Não completando o exercício, nenhum ponto de experiência é concedido.

O procedimento pode ser repetido por quantas vezes o usuário desejar.

## Nota para devs

Ao clonar o projeto, instalar as dependências e componentes com o comando ``npm install`` no mesmo diretório que se encontram os arquivos package.json e package-lock.json. Para executar o projeto em ambiente local, executa o comando ``npm run dev`` e acessar no navegador pelo ``localhost:3000``.

Logo mais irei disponibilizar login no aplicativo por uma conta o Github. Enquanto isso, para exibir a sua foto na aplicação, edite o arquivo ``src\components\Profile.tsx`` e substitua na tag ``<img src="https://github.com/luangregati.png" alt="Profile pic" />`` o seu nome de usuário do Github. Automaticamente a sua foto será carregada na tela principal. O nome do usuário também pode ser alterado no mesmo arquivo.
