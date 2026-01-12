//botão de tema
const botaoTema = document.getElementById("botaoTema");

//Ouvir o Evento de clique no botão de tema
botaoTema.addEventListener("click", () => {
    //Verificaar se o usuário ja tem um tema pré definido
    const temaAtual = localStorage.getItem("tema");
    //verifica qual é o tema do usuário e inverte
    const novoTema=temaAtual ==="Dark" ? "Light" : "Dark";
    //Adicona a calsse dark no elemento body
    document.body.classList.toggle("Dark");
    //salvar o tema no localStorage
    localStorage.setItem("tema", novoTema);
    //Atualiza o texto do botão
    botaoTema.textContent = novoTema === "Dark" ? '☀️' : '🌙';
})

document.addEventListener("DOMContentLoaded", () => {
    //Verificar se o usuário ja tem um tema pré definido
    const temaSalvo = localStorage.getItem("tema");

    // Se for dark, ele adiciona a classe e altera o botão
    if(temaSalvo === "Dark"){
        document.body.classList.add("Dark");
        botaoTema.textContent = '☀️';
    }else {
        //caso contrário é light e o botão deve ser mudado para acor dark
        botaoTema.textContent = '🌙';
    }
})


//Ouvir o Evento de quando o usuário sair do campo de CEP
document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    //Verificar se o CEP informado possui 8 caracteres
    if(!(cepInformado.length === 8))
        return;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data=> {

       
            if(!(data.erro)){
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;
            } else {
                alert("CEP não encontrado!");
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP: ", error));
    
})


