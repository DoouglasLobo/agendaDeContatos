// Seleção da tabela e corpo da tabela
let tabela = document.getElementById('tabela-contatos');
let corpoTabela = document.getElementById('corpo-tabela');

// Seleção do formulário
let form = document.getElementById('form-contato');

// Adiciona evento de submit ao formulário
form.addEventListener('submit', cadastrarContato);

// Função para cadastrar contato
function cadastrarContato(event) {
    // Previne comportamento padrão do formulário
    event.preventDefault();

    // Obtém valores dos campos nome e telefone
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;

    // Verifica se campos estão preenchidos
    if (nome !== '' && telefone !== '') {
        // Cria nova linha na tabela
        let linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        `;
        corpoTabela.appendChild(linha);

        // Limpa campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    } else {
        // Exibe mensagem de erro se campos não estiverem preenchidos
        alert('Preencha todos os campos!');
    }
}