# Desafio ClickSoft HUBusca
  


## :bookmark_tabs: Sobre o Projeto Desenvolvido 
Este projeto é um aplicativo de busca de perfis e repositórios no GitHub, desenvolvida como parte de um teste para um processo seletivo na ClickSoft. O aplicativo foi criado com o objetivo de demonstrar meus conhecimentos e habilidades em desenvolvimento mobile.

## :page_with_curl: Requisitos do Projeto
1. Permita que na tela principal busquemos os dados de uma pessoa do GitHub
através do nome de usuário. E que no resultado apareça a foto, o nome, o login e a
localização.
2. Permita que ao clicar na foto, abra um perfil com os dados que a API do GitHub
fornece: Foto, nome, login, localização, o ID, quantidade de seguidores, quantidade
de repositórios públicos, e uma lista com todos os repositórios da pessoa (nome do
repositório, linguagem utilizada, descrição, data de criação, data do último push).
3. Ao clicar em um repositório, seremos redirecionados para este repositório no site
do GitHub.
4. Crie um menu contendo todos os usuários pesquisados recentemente, que
também siga o padrão com os dados iguais ao da tarefa 1, e com perfil igual ao da
tarefa 2

## :computer: Telas do Aplicativo
<details>
  <summary>Clique aqui para ver os screenshots</summary>
  Homepage, tela principal onde você pode fazer a busca atraves do login do github.

![foto](/assets/screenshots/Screenshot_1.png)

Nesse exemplo coloquei meu login do github Ramonlirani no input e fiz a busca atraves do button. Aparece um Card com alguns dados como Nome do usuario, login e a localização caso tenha.

![foto](/assets/screenshots/Screenshot_2.png)

Details, essa tela é pagina de Perfil do usuario que aparece logo apos o usuario clicar no avatar(imagem) do Card da tela principal.

![foto](/assets/screenshots/Screenshot_3.png)

History, a tela do historico de usuarios pesquisado, é mostrada quando a pessoa clica no icone de :book: no canto superior direito da tela details, onde você pode voltar para o perfil dos usuarios clicando no avatar(imagem) do perfil da pessoa.

![foto](/assets/screenshots/Screenshot_4.png)

O historico tem uma funcionalidade de apagar e remover do armazenamento todos os usuarios pesquisados recentemente.

![foto](/assets/screenshots/Screenshot_5.png)

</details>

## :hammer: Tecnologias Utilizadas

***React Native***: É um framework JavaScript para desenvolvimento de aplicativos móveis que permite aos desenvolvedores utilizar React (biblioteca para construção de interfaces) para criar aplicativos nativos para iOS e Android. Ele usa componentes reutilizáveis e uma abordagem declarativa para o desenvolvimento de interfaces de usuário.

***Expo***: É uma plataforma e conjunto de ferramentas que simplificam e aceleram o desenvolvimento de aplicativos React Native. Ele fornece uma série de serviços e APIs pré-construídos, facilitando tarefas como gerenciamento de ativos, acesso a hardware do dispositivo, e simplificando o processo de publicação de aplicativos.


***TypeScript***: É um superset de JavaScript que adiciona tipagem estática opcional ao código. Isso ajuda a evitar erros comuns durante o desenvolvimento, tornando o código mais robusto e fácil de entender. 


***Axios***: É uma biblioteca JavaScript usada para fazer requisições HTTP. Ela opera tanto em ambientes de navegador quanto em Node.js, oferecendo uma interface fácil de usar para realizar solicitações HTTP, tratando de forma eficiente promessas e fornecendo recursos como cancelamento de requisições.

***AsyncStorage***: É uma API de armazenamento assíncrono em React Native. Essa biblioteca permite que os desenvolvedores armazenem dados de forma persistente no dispositivo móvel de maneira assíncrona, o que significa que não bloqueia a execução do código enquanto aguarda a conclusão da operação de armazenamento. É comumente usado para salvar dados locais, como configurações do aplicativo, tokens de autenticação ou qualquer outra informação que precise ser mantida entre sessões do aplicativo.

***Styled-components***: É uma biblioteca para estilizar componentes em aplicações React. Em vez de usar arquivos separados para estilos, o styled-components permite que os estilos sejam escritos diretamente no componente usando uma sintaxe similar a CSS, mas com a flexibilidade e poder do JavaScript. Os estilos são encapsulados no escopo do componente.


***React-Icons***: É uma biblioteca que fornece ícones populares prontos para uso em aplicações React. Esses ícones são componentes React, tornando fácil integrá-los ao código e personalizá-los conforme necessário. Essa abordagem facilita a manipulação e a estilização dos ícones diretamente no código React.

## :fearful: Dificuldade Encontradas durante o desenvolvimento do aplicativo

A principal dificuldade onde mais demorei para resolver foi na hora de Criar APKs para emuladores e dispositivos Android, onde estava dando um erro logo que abria o apk do aplicativo ```"RNSScreenStackHeaderConfig was not found in the UIManager"```, onde tive que refazer as rotas do meu aplicativo passando o ```Routes``` para o ```app.tsx``` 

```
export default function App() {
   return (
      <ThemeProvider theme={theme}>
         <StatusBar backgroundColor="transparent" translucent />
         <Routes />
      </ThemeProvider>
   );
}
```
onde modifiquei o meu Routes inserindo o NavigationContainer do react-native como provider das minhas rotas 
```
export function Routes() {
   const { colors } = useTheme();

   return (
      <View style={{ flex: 1, backgroundColor: colors.primary }}>
         <NavigationContainer>
            <AppRoutes />
         </NavigationContainer>
      </View>
   );
}
```
Tive dificuldade também para lidar com a biblioteca AsyncStorage, mas depois de muita pesquisa consegui resolver os problemas de armazenamento.
Por fim ao visualizar o histórico na tela que exibia a lista dos usuários recentemente pesquisados, enfrentei um problema. Ao clicar no avatar do perfil de um usuário, o redirecionamento ocorria para a página do perfil pesquisado mais recentemente, e não para o perfil realmente selecionado. Consegui solucionar esse inconveniente consultando a documentação do React Navigation [passing parameters to routes
](https://reactnavigation.org/docs/params/)


## :iphone: Link do download do APK android
([https://uploadnow.io/files/487b9jv](https://drive.google.com/file/d/1PfOiEkJRv0YNeK17kj9F2aXsRsJU9EOO/view?usp=sharing)https://drive.google.com/file/d/1PfOiEkJRv0YNeK17kj9F2aXsRsJU9EOO/view?usp=sharing)
