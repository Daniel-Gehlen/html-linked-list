function createNode(data) {
    return {
      data: data,
      next: null
    };
  }  
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.head === null;
    }
  
    addFirst(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  
    addLast(data) {
      const newNode = new Node(data);
      if (this.isEmpty()) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    addAt(index, data) {
      if (index < 0 || index > this.size) {
        this.showMessage('Error: Index out of bounds', 'error');
        return;
      }
      if (index === 0) {
        this.addFirst(data);
      } else {
        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
      }
    }
  
    removeFirst() {
      if (this.isEmpty()) {
        this.showMessage('Error: List is empty', 'error');
        return;
      }
      const removedData = this.head.data;
      this.head = this.head.next;
      this.size--;
      this.showMessage(`Removed first value: ${removedData}`, 'success');
      updateListView();
    }
  
    removeLast() {
      if (this.isEmpty()) {
        this.showMessage('Error: List is empty', 'error');
        return;
      }
      if (this.head.next === null) {
        const removedData = this.head.data;
        this.head = null;
        this.size--;
        this.showMessage(`Removed last value: ${removedData}`, 'success');
        updateListView();
        return;
      }
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      const removedData = current.next.data;
      current.next = null;
      this.size--;
      this.showMessage(`Removed last value: ${removedData}`, 'success');
      updateListView();
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        this.showMessage('Error: Index out of bounds', 'error');
        return;
      }
      if (index === 0) {
        return this.removeFirst();
      }
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      const removedData = current.next.data;
      current.next = current.next.next;
      this.size--;
      this.showMessage(`Removed value at index ${index}: ${removedData}`, 'success');
      updateListView();
    }
  
    getAt(index) {
      if (index < 0 || index >= this.size) {
        this.showMessage('Error: Index out of bounds', 'error');
        return;
      }
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      this.showMessage(`Value at index ${index}: ${current.data}`, 'success');
    }
  
    contains(data) {
      let current = this.head;
      while (current !== null) {
        if (current.data === data) {
          this.showMessage(`List contains the value "${data}"`, 'success');
          return;
        }
        current = current.next;
      }
      this.showMessage(`List does not contain the value "${data}"`, 'success');
    }
  
    clear() {
      this.head = null;
      this.size = 0;
      this.showMessage('The list has been cleared', 'success');
      updateListView();
    }
  
    showMessage(message, type) {
      const messageElement = document.querySelector('.message');
      messageElement.textContent = message;
      messageElement.className = `message ${type}`;
    }
  }
  
  const list = new LinkedList();
  const inputValue = document.getElementById('input-value');
  const addFirstButton = document.getElementById('add-first');
  const addLastButton = document.getElementById('add-last');
  const addAtButton = document.getElementById('add-at');
  const removeFirstButton = document.getElementById('remove-first');
  const removeLastButton = document.getElementById('remove-last');
  const removeAtButton = document.getElementById('remove-at');
  const getAtButton = document.getElementById('get-at');
  const containsButton = document.getElementById('contains');
  const clearButton = document.getElementById('clear');
  
  const listContainer = document.querySelector('.list-container');
  
  function updateListView() {
    listContainer.innerHTML = '';
    let current = list.head;
    while (current !== null) {
      const listItem = document.createElement('div');
      listItem.className = 'list-item';
      listItem.textContent = current.data;
      listContainer.appendChild(listItem);
      current = current.next;
    }
  }
  
  addFirstButton.addEventListener('click', () => {
    const value = inputValue.value.trim();
    if (value === '') {
      list.showMessage('Please enter a value', 'error');
      return;
    }
    list.addFirst(value);
    inputValue.value = '';
    list.showMessage(`Value added to the beginning of the list`, 'success');
    updateListView();
  });
  
  addLastButton.addEventListener('click', () => {
    const value = inputValue.value.trim();
    if (value === '') {
      list.showMessage('Please enter a value', 'error');
      return;
    }
    list.addLast(value);
    inputValue.value = '';
    list.showMessage(`Value added to the end of the list`, 'success');
    updateListView();
  });
  
  addAtButton.addEventListener('click', () => {
    const value = inputValue.value.trim();
    if (value === '') {
      list.showMessage('Please enter a value', 'error');
      return;
    }
    const index = parseInt(prompt('Enter the index to add the value:'));
    list.addAt(index, value);
    inputValue.value = '';
    updateListView();
  });
  
  removeFirstButton.addEventListener('click', () => {
    list.removeFirst();
  });
  
  removeLastButton.addEventListener('click', () => {
    list.removeLast();
  });
  
  removeAtButton.addEventListener('click', () => {
    const index = parseInt(prompt('Enter the index to remove the value:'));
    list.removeAt(index);
  });
  
  getAtButton.addEventListener('click', () => {
    const index = parseInt(prompt('Enter the index to get the value:'));
    list.getAt(index);
  });
  
  containsButton.addEventListener('click', () => {
    const value = inputValue.value.trim();
    if (value === '') {
      list.showMessage('Please enter a value', 'error');
      return;
    }
    list.contains(value);
    inputValue.value = '';
  });
  
  clearButton.addEventListener('click', () => {
    list.clear();
  });

  // Função para traduzir a interface para português
function traduzirParaPortugues() {
    document.querySelector('h1').textContent = "Visualização de Lista Ligada";
    document.getElementById('input-value').placeholder = "Digite um valor";
    document.getElementById('add-first').textContent = "Adicionar no Início";
    document.getElementById('add-last').textContent = "Adicionar no Fim";
    document.getElementById('add-at').textContent = "Adicionar em Posição";
    document.getElementById('remove-first').textContent = "Remover do Início";
    document.getElementById('remove-last').textContent = "Remover do Fim";
    document.getElementById('remove-at').textContent = "Remover em Posição";
    document.getElementById('get-at').textContent = "Obter em Posição";
    document.getElementById('contains').textContent = "Contém";
    document.getElementById('clear').textContent = "Limpar";
    document.querySelector('.guide h2').textContent = "Como usar:";
    document.querySelectorAll('.guide ol li')[0].textContent = "Digite um valor no campo de entrada.";
    document.querySelectorAll('.guide ol li')[1].textContent = "Clique nos botões para adicionar o valor na lista ligada.";
    document.querySelectorAll('.guide ol li')[2].textContent = "Clique nos botões para remover elementos da lista.";
    document.querySelectorAll('.guide ol li')[3].textContent = "Clique para obter o valor em um índice específico.";
    document.querySelectorAll('.guide ol li')[4].textContent = "Clique para verificar se a lista contém um valor específico.";
    document.querySelectorAll('.guide ol li')[5].textContent = "Clique para remover todos os elementos da lista.";
}

// Função para ativar o modo pseudo-código
function ativarModoNivel2() {
    const pseudoCodigo = prompt("Digite seu comando em pseudo-código (ex: ADICIONAR_INICIO 10):").toUpperCase();
    const partes = pseudoCodigo.split(" ");
    const comando = partes[0];
    const valor = partes[1];

    switch (comando) {
        case "ADICIONAR_INICIO":
            list.addFirst(valor);
            list.showMessage(`Valor ${valor} adicionado ao início da lista`, 'success');
            break;
        case "ADICIONAR_FIM":
            list.addLast(valor);
            list.showMessage(`Valor ${valor} adicionado ao fim da lista`, 'success');
            break;
        case "REMOVER_INICIO":
            list.removeFirst();
            break;
        case "REMOVER_FIM":
            list.removeLast();
            break;
        case "OBTER":
            list.getAt(parseInt(valor));
            break;
        case "CONTER":
            list.contains(valor);
            break;
        case "LIMPAR":
            list.clear();
            break;
        default:
            list.showMessage("Comando inválido. Tente novamente.", 'error');
    }
    updateListView();
}

// Adicionar eventos aos novos botões
document.getElementById('translate-button').addEventListener('click', traduzirParaPortugues);
document.getElementById('nivel-2-button').addEventListener('click', ativarModoNivel2);

// Função para ativar e exibir o modo Nível 2
function mostrarModoNivel2() {
    const nivel2Area = document.querySelector('.nivel-2-area');
    nivel2Area.style.display = nivel2Area.style.display === 'none' ? 'block' : 'none';
}

// Função para processar o comando pseudo-código
function processarComando() {
    const commandInput = document.getElementById('pseudo-command');
    const comandoTexto = commandInput.value.trim().toUpperCase();
    
    if (!comandoTexto) {
        list.showMessage("Por favor, insira um comando em pseudo-código.", 'error');
        return;
    }

    const partes = comandoTexto.split(" ");
    const comando = partes[0];
    const valor = partes.slice(1).join(" "); // Corrige para incluir valores com espaços

    switch (comando) {
        case "ADICIONAR_INICIO":
            if (valor) {
                list.addFirst(valor);
                list.showMessage(`Valor ${valor} adicionado ao início da lista`, 'success');
            } else {
                list.showMessage("Por favor, forneça um valor para adicionar.", 'error');
            }
            break;
        case "ADICIONAR_FIM":
            if (valor) {
                list.addLast(valor);
                list.showMessage(`Valor ${valor} adicionado ao fim da lista`, 'success');
            } else {
                list.showMessage("Por favor, forneça um valor para adicionar.", 'error');
            }
            break;
        case "REMOVER_INICIO":
            list.removeFirst();
            break;
        case "REMOVER_FIM":
            list.removeLast();
            break;
        case "OBTER":
            if (valor && !isNaN(valor)) {
                list.getAt(parseInt(valor));
            } else {
                list.showMessage("Por favor, forneça um índice válido para obter.", 'error');
            }
            break;
        case "CONTER":
            if (valor) {
                list.contains(valor);
            } else {
                list.showMessage("Por favor, forneça um valor para verificar.", 'error');
            }
            break;
        case "LIMPAR":
            list.clear();
            break;
        default:
            list.showMessage("Comando inválido. Tente novamente com um comando válido.", 'error');
    }

    updateListView();
    commandInput.value = ''; // Limpa o campo após o comando
}

// Adicionar eventos aos novos botões
document.getElementById('translate-button').addEventListener('click', traduzirParaPortugues);
document.getElementById('nivel-2-button').addEventListener('click', mostrarModoNivel2);
document.getElementById('execute-command').addEventListener('click', processarComando);

// Executar comando ao pressionar Enter no campo de comando
document.getElementById('pseudo-command').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        processarComando();
    }
});
