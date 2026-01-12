# 📍 Cadastro de Endereço Automático

Este projeto é uma aplicação web desenvolvida para estudar e aplicar conceitos fundamentais de JavaScript no desenvolvimento Front-end. O foco principal é a automação do preenchimento de formulários consumindo uma API externa e a persistência de preferências do usuário.

## 🚀 Funcionalidades

- **Busca de CEP Automática:** Ao digitar o CEP e sair do campo, o endereço (Rua, Bairro, Cidade, Estado) é preenchido automaticamente.
- **Alternância de Tema (Dark/Light Mode):** Botão interativo para trocar as cores da interface.
- **Persistência de Dados:** O site "lembra" o tema escolhido pelo usuário mesmo após recarregar a página.
- **Validação Básica:** Verificação do tamanho do CEP antes de realizar a requisição.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Variáveis CSS (Custom Properties), Flexbox e Transições.
- **JavaScript (ES6+):** Lógica da aplicação.

## 📚 Conceitos e Estudos Aplicados

Este projeto foi fundamental para consolidar os seguintes conhecimentos:

### 1. Fetch API & Assincronismo
Utilização do método `fetch()` para consumir a API pública **ViaCEP**.
- Compreensão de **Promises** (`.then()`, `.catch()`).
- Manipulação de respostas em formato **JSON**.
- Tratamento de erros na requisição.

### 2. Web Storage API (localStorage)
Implementação de persistência de dados no navegador.
- Uso do `localStorage.setItem()` para salvar a preferência de tema (Claro/Escuro).
- Uso do `localStorage.getItem()` para recuperar essa preferência ao carregar a página, garantindo uma boa experiência ao usuário (UX).

### 3. Manipulação do DOM (Document Object Model)
Interação dinâmica com os elementos da página.
- Seleção de elementos (`getElementById`, `querySelector`).
- Alteração de valores de inputs (`input.value`).
- Manipulação de classes CSS (`classList.toggle`, `classList.add`) para aplicar os estilos do tema escuro.

### 4. Manipulação de Eventos (Events)
O código reage às ações do usuário através de *Event Listeners*:
- **`click`**: Utilizado no botão de troca de tema.
- **`blur`**: Disparado quando o campo de CEP perde o foco, acionando a busca na API (evitando requisições desnecessárias a cada tecla digitada).
- **`DOMContentLoaded`**: Garante que o script de recuperação do tema só rode após o HTML estar pronto.

## 📂 Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git)
