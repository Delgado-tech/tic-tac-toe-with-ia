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
   
Foi programado uma inteligência artificial para jogar contrar o usuário, ela rastreia todo o tabuleiro verificando a melhor jogada a se fazer
A seguir veja uma lista com as ações em ordem prioritária que o bot executa.


| Prioridade     | Ação                                | Método                                                                                                          |
|:--------------:|-------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 1              | Marcar um espaço para ganhar o jogo | Rastreia o tabuleiro inteiro verificando se é possível ganhar com o próximo movimento                           |
| 2              | Impedir que o adversário ganhe      | Rastreia o tabuleiro inteiro verificando se a próxima jogado do usúario pode resultar em uma vitória e o impede |
| 3              | Impedir estratégia de diagonais     | Caso o usuário marque duas diagonais opostas a IA marca uma lateral ao centro impedindo a estratégia            |
| 4              | Marcar o centro                     | O centro se não foi preenchido é priorizado                                                                     |
| 5              | Marcar diagonais                    | As diagonais são priorizadas se o centro foi preenchido                                                         |
| 6              | Jogada aleatória                    | É marcado um espaço vazio aleatório                                                                             |


### 2. Modos de jogo
   
Foram programados 4 modos de jogo, sendo eles:

| Modo de Jogo | Descrição |
|:--------------:|--------------|
| Fácil | A IA se comporta mais desleixadamente, tendo apenas 25% de chance de realizar as ações de 1-5 |
| Médio | A IA se comporta melhor, tendo chance 50% de chance de realizar as ações  |
| Impossível |  |
| 2 Jogadores |  |


## Instalação

1. Clone o repositório
```bash
git clone https://github.com/[seu-usuario]/[nome-do-app].git
cd [nome-do-app]
```

2. Instale as dependências
```bash
npm install
```

[Adicione mais informações se necessário]


## Configuração da API

Para a utilização do projeto é necessário a inicialização da API.
Você pode acessar a documentação da API [aqui](link-para-a-documentacao-da-api).

[Adicione mais informações se necessário]


## Uso

1. Inicie o servidor de desenvolvimento
```bash
npm start
```

2. Abra o navegador e vá para `http://localhost:3000`.

3. Após isso xxx...

[Adicione mais informações se necessário]


## Contribuição

Se você quiser contribuir para este projeto, siga estas etapas:

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature `git checkout -b feat/NomeDaSuaFeature`.
3. Faça commit das suas alterações `git commit -am "[add/edit/del]/feat: Descrição da feature"`.
4. Faça push para a branch `git push origin feat/NomeDaSuaFeature`.
5. Crie um novo Pull Request.


## Licença

Este projeto está licenciado sob a [Licença MIT](link-para-a-licenca).


## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato através 
do email: [seu-email@example.com](mailto:seu-email@example.com).

## Links

API: https://link-da-api.com.br
Figma: https://link-do-figma.com.br
Deploy: https://link-do-deploy.com.br
