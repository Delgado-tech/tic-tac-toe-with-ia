<img id="header" src="https://capsule-render.vercel.app/api?type=waving&color=0:0d9488,100:111827&height=150&section=header" width="100%"/>

# Jogo da Velha com IA

Um aplicativo de Jogo da Velha construído em Angular, 
com funcionalidades de jogar contra uma inteligência artifial em 
3 dificuldades diferentes ou jogar localmente com um amigo.

<br>

## Tecnologias Utilizadas

|                                                                                 |              |
|:-------------------------------------------------------------------------------:|--------------|
| <img src="https://angular.io/assets/images/favicons/favicon.ico" width="24px"/> | Angular      |
| <img src="https://www.typescriptlang.org/icons/icon-96x96.png" width="24px"/>   | Typescript   |
| <img src="https://tailwindcss.com/favicons/favicon-32x32.png" width="24px"/>    | TailwindCSS  |
| <img src="https://lucide.dev/logo.dark.svg" width="24px"/>                      | LucideIcons  |

<br>

## Funcionalidades

### 1. Robô Adversário
   
Foi programado uma inteligência artificial para jogar contra o usuário, ela rastreia todo o tabuleiro verificando a melhor jogada a se fazer. <br>
A seguir veja uma lista com as ações em ordem prioritária que a IA executa.


| Prioridade     | Ação                                | Método                                                                                                          |
|:--------------:|-------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 1              | Ganhar o jogo                       | Rastreia o tabuleiro inteiro verificando se é possível ganhar com o próximo movimento                           |
| 2              | Impedir que o adversário ganhe      | Rastreia o tabuleiro inteiro verificando se a próxima jogada do usúario pode resultar em uma vitória e o impede |
| 3              | Impedir estratégia de diagonais     | Caso o usuário marque duas diagonais opostas a IA marca uma lateral ao centro impedindo a estratégia            |
| 4              | Marcar o centro                     | O centro se não foi preenchido é priorizado                                                                     |
| 5              | Marcar diagonais                    | As diagonais são priorizadas se o centro foi preenchido                                                         |
| 6              | Jogada aleatória                    | É marcado um espaço vazio aleatório                                                                             |


### 2. Modos de jogo
   
Foram programados 4 modos de jogo, sendo eles:

| Modo_de_jogo | Descrição                                                                                                                         |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Fácil        | A IA se comporta mais desleixadamente, tendo apenas 25% de chance de realizar as ações [1, 3, 4, 5] e 0% de chance a ação [2]     |
| Médio        | A IA se comporta melhor, tendo 50% de chance de realizar as ações [1-5]                                                           |
| Impossível   | A IA se comporta da melhor forma possível, ao jogar nesse modo o resultado sempre será um empate ou uma vitória por parte da IA   |
| 2_Jogadores  | É desativado o sistema de IA, permitindo que o usuário jogue também no turno que seria da IA (podendo assim jogar com um amigo)   |


### 3. Scoreboard

Foi implementado um placar para acompanhar a pontuação geral.


### 4. Interface amigável com animações

Foi desenvolvido uma interface 100% amigável e animada, bem como uma tela de vitória.

![animations](https://github.com/Delgado-tech/tic-tac-toe-with-ia/assets/60985347/8d1548fb-bc22-48ba-8531-26ae2645f88e)

<br>

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/Delgado-tech/tic-tac-toe-with-ia.git
cd tic-tac-toe-with-ia
```

2. Instale as dependências
```bash
pnpm install
```

<br>

## Uso

1. Inicie o servidor de desenvolvimento
```bash
npm run start
```

2. Abra o navegador e vá para `http://localhost:4200`.

3. Após isso divirta-se!!!

<br>

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](link-para-a-licenca).


## ☎️ Contato

Se você tiver alguma dúvida ou sugestão, entre em contato clicando [aqui](mailto:leonardo.delgadosp2014@gmail.com).

## 🔗 Links

### Deploy: https://link-do-deploy.com.br

 <img src="https://capsule-render.vercel.app/api?type=waving&color=0:00000080,50:161b2280,100:30363D9d&height=150&section=footer" width="100%">
