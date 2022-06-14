var nome_valor = 'XXXXX';
var disciplina_valor = 'XXXXX';
var telefone_valor = 'XXXXX';
var cpf_valor = 'XXXXX';
var email_valor = 'XXXXX';
var turnos_valor = 'XXXXX';
var confirmation = false;

function cardEditNome() {
    console.log('Ativou');
    var cardEdit1 = document.getElementById('card-edit1');
    var nome = document.getElementById('nome');
    console.log(nome);
    if (nome == null) {
        nome = document.getElementById('nomeInp');
    }
    console.log(nome);
    console.log(nome_valor);
    if (nome != null && nome.outerHTML == `<h2 id="nome">${nome_valor}</h2>`) {
        nome.outerHTML = `<input id="nomeInp" name="nome" type="text" value="${nome_valor}" style="border:2px solid green;">`;
        nome = document.getElementById('nomeInp');
        cardEdit1.outerHTML = '<img id="card-edit1" class="card-edit" src="../img/marca-xEdit.png" alt="Parar de Editar" onclick="cardEditNome()">';
    } else if (nome != null && nome.outerHTML == `<input id="nomeInp" name="nome" type="text" value="${nome_valor}" style="border:2px solid green;">`) {
        console.log('Entrou');
        nome.outerHTML = `<h2 id="nome">${nome_valor}</h2>`;
        cardEdit1.outerHTML = '<img id="card-edit1" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditNome()">';
    }
}

function cardEditDisciplina() {
    var disciplina = document.getElementById('disciplina');
    var cardEdit2 = document.getElementById('card-edit2');
    if (disciplina == null) {
        disciplina = document.getElementById('disciplinaInp');
    }
    if (disciplina != null && disciplina.outerHTML == `<h2 id="disciplina">${disciplina_valor}</h2>`) {
        disciplina.outerHTML = `<input id="disciplinaInp" name="disciplina" type="text" value="${disciplina_valor}" style="border:2px solid green;">`;
        disciplina = document.getElementById('disciplinaInp');
        cardEdit2.outerHTML = '<img id="card-edit2" class="card-edit" src="../img/marca-xEdit.png" alt="Parar de Editar" onclick="cardEditDisciplina()">';
    } else if (disciplina != null && disciplina.outerHTML == `<input id="disciplinaInp" name="disciplina" type="text" value="${disciplina_valor}" style="border:2px solid green;">`) {
        disciplina.outerHTML = `<h2 id="disciplina">${disciplina_valor}</h2>`;
        cardEdit2.outerHTML = '<img id="card-edit2" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditDisciplina()">';
    }
}

function cardEditTelefone() {
    var cardEdit3 = document.getElementById('card-edit3');
    var telefone = document.getElementById('telefone');
    if (telefone == null) {
        telefone = document.getElementById('telefoneInp');
    }
    if (telefone != null && telefone.outerHTML == `<h2 id="telefone">${telefone_valor}</h2>`) {
        telefone.outerHTML = `<input id="telefoneInp" name="telefone" type="text" value="${telefone_valor}" style="border:2px solid green;">`;
        telefone = document.getElementById('telefoneInp');
        cardEdit3.outerHTML = '<img id="card-edit3" class="card-edit" src="../img/marca-xEdit.png" alt="Parar de Editar" onclick="cardEditTelefone()">';
    } else if (telefone != null && telefone.outerHTML == `<input id="telefoneInp" name="telefone" type="text" value="${telefone_valor}" style="border:2px solid green;">`) {
        telefone.outerHTML = `<h2 id="telefone">${telefone_valor}</h2>`;
        cardEdit3.outerHTML = '<img id="card-edit3" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditTelefone()">';
    }
}

function cardEditCPF() {
    var cardEdit4 = document.getElementById('card-edit4');
    var cpf = document.getElementById('cpf');
    if (cpf == null) {
        cpf = document.getElementById('cpfInp');
    }
    if (cpf != null && cpf.outerHTML == `<h2 id="cpf">${cpf_valor}</h2>`) {
        cpf.outerHTML = `<input id="cpfInp" name="cpf" type="text" value="${cpf_valor}" style="border:2px solid green;">`;
        cpf = document.getElementById('cpfInp');
        cardEdit4.outerHTML = '<img id="card-edit4" class="card-edit" src="../img/marca-xEdit.png" alt="Parar de Editar" onclick="cardEditCPF()">';
    } else if (cpf != null && cpf.outerHTML == `<input id="cpfInp" name="cpf" type="text" value="${cpf_valor}" style="border:2px solid green;">`) {
        cpf.outerHTML = `<h2 id="cpf">${cpf_valor}</h2>`;
        cardEdit4.outerHTML = '<img id="card-edit4" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditCPF()">';
    }
}

function cardEditEmail() {
    var cardEdit5 = document.getElementById('card-edit5');
    var email = document.getElementById('email');
    if (email == null) {
        email = document.getElementById('emailInp');
    }
    if (email != null && email.outerHTML == `<h2 id="email">${email_valor}</h2>`) {
        email.outerHTML = `<input id="emailInp" name="email" type="text" value="${email_valor}" style="border:2px solid green;">`;
        email = document.getElementById('emailInp');
        cardEdit5.outerHTML = '<img id="card-edit5" class="card-edit" src="../img/marca-xEdit.png" alt="Parar de Editar" onclick="cardEditEmail()">';
    } else if (email != null && email.outerHTML == `<input id="emailInp" name="email" type="text" value="${email_valor}" style="border:2px solid green;">`) {
        email.outerHTML = `<h2 id="email">${email_valor}</h2>`;
        cardEdit5.outerHTML = '<img id="card-edit5" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditEmail()">';
    }

}

function cardEditTurnos() {
    var cardEdit6 = document.getElementById('card-edit6');
    var turnos = document.getElementById('turnos');
    if (turnos == null) {
        turnos = document.getElementById('turnosInp');
    }
    if (turnos != null && turnos.outerHTML == `<h2 id="turnos">${turnos_valor}</h2>`) {
        turnos.outerHTML = `<input id="turnosInp" name="turnos" type="text" value="${turnos_valor}" style="border:2px solid green;">`;
        turnos = document.getElementById('turnosInp');
        cardEdit6.outerHTML = '<img id="card-edit6" class="card-edit" src="../img/marca-xEdit.png" alt="Parar de Editar" onclick="cardEditTurnos()">';
    } else if (turnos != null && turnos.outerHTML == `<input id="turnosInp" name="turnos" type="text" value="${turnos_valor}" style="border:2px solid green;">`) {
        turnos.outerHTML = `<h2 id="turnos">${turnos_valor}</h2>`;
        cardEdit6.outerHTML = '<img id="card-edit6" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditTurnos()">';
    }
}

function openConfirmSave() {
    nome = document.getElementById('nomeInp');
    disciplina = document.getElementById('disciplinaInp');
    telefone = document.getElementById('telefoneInp');
    cpf = document.getElementById('cpfInp');
    email = document.getElementById('emailInp');
    turnos = document.getElementById('turnosInp');
    console.log(nome);

    isNull();

    var cardEdit1 = document.getElementById('card-edit1');
    var cardEdit2 = document.getElementById('card-edit2');
    var cardEdit3 = document.getElementById('card-edit3');
    var cardEdit4 = document.getElementById('card-edit4');
    var cardEdit5 = document.getElementById('card-edit5');
    var cardEdit6 = document.getElementById('card-edit6');
    var editando = true;
    //Nome
    if (nome.outerHTML == `<input id="nomeInp" name="nome" type="text" value="${nome_valor}" style="border:2px solid green;">`) {
        nome.outerHTML = `<h2 id="nome">${nome_valor}</h2>`;
        cardEdit1.outerHTML = '<img id="card-edit1" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditNome()">';
        editando = false;
    }
    //Disciplina.   
    if (disciplina.outerHTML == `<input id="disciplinaInp" name="disciplina" type="text" value="${disciplina_valor}" style="border:2px solid green;">`) {
        disciplina.outerHTML = `<h2 id="disciplina">${disciplina_valor}</h2>`;
        cardEdit2.outerHTML = '<img id="card-edit2" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditDisciplina()">';
        editando = false;
    }
    //Telefone
    if (telefone.outerHTML == `<input id="telefoneInp" name="telefone" type="text" value="${telefone_valor}" style="border:2px solid green;">`) {
        telefone.outerHTML = `<h2 id="telefone">${telefone_valor}</h2>`;
        cardEdit3.outerHTML = '<img id="card-edit3" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditTelefone()">';
        editando = false;
    }
    //CPF
    if (cpf.outerHTML == `<input id="cpfInp" name="cpf" type="text" value="${cpf_valor}" style="border:2px solid green;">`) {
        cpf.outerHTML = `<h2 id="cpf">${cpf_valor}</h2>`;
        cardEdit4.outerHTML = '<img id="card-edit4" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditCPF()">';
        editando = false;
    }
    //Email
    if (email.outerHTML == `<input id="emailInp" name="email" type="text" value="${email_valor}" style="border:2px solid green;">`) {
        email.outerHTML = `<h2 id="email">${email_valor}</h2>`;
        cardEdit5.outerHTML = '<img id="card-edit5" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditEmail()">';
        editando = false;
    }
    //Turnos
    if (turnos.outerHTML == `<input id="turnosInp" name="turnos" type="text" value="${turnos_valor}" style="border:2px solid green;">`) {
        turnos.outerHTML = `<h2 id="turnos">${turnos_valor}</h2>`;
        cardEdit6.outerHTML = '<img id="card-edit6" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditTurnos()">';
        editando = false;
    }
    if (nome_valor == '' || disciplina_valor == '' || telefone_valor == '' || cpf_valor == '' || email_valor == '' || turnos_valor == '') {
        alert('Todas as caixas devem ser preenchidas.');
    } else if (editando == true && nome_valor != 'XXXXX' || disciplina_valor != 'XXXXX' || telefone_valor != 'XXXXX' || cpf_valor != 'XXXXX' || email_valor != 'XXXXX' || turnos_valor != 'XXXXX') {
        var confirm = document.getElementById('cardConfirm');
        confirm.style.pointerEvents = 'all';
        confirm.style.visibility = 'visible';
        console.log(nome);
        console.log(nome_valor);
    }
}

function closeConfirmSave() {
    var confirm = document.getElementById('cardConfirm');
    confirm.style.pointerEvents = 'none';
    confirm.style.visibility = 'hidden';
    resetValues();
}

function confirmSave() {
    nome = document.getElementById('nomeInp');
    disciplina = document.getElementById('disciplinaInp');
    telefone = document.getElementById('telefoneInp');
    cpf = document.getElementById('cpfInp');
    email = document.getElementById('emailInp');
    turnos = document.getElementById('turnosInp');
    isNull();
    if (nome_valor != '' && disciplina_valor != '' && telefone_valor != '' && cpf_valor != '' && email_valor != '' && turnos_valor != '') {
        if (nome != null && nome.outerHTML != '' && nome.value != undefined) {
            nome_valor = nome.value;
            nome.outerHTML = `<h2 id="nome">${nome_valor}</h2>`;
            cardEdit1 = '<img id="card-edit1" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditNome()">';
        } else {
            nome_valor = nome.innerHTML;
            nome.outerHTML = `<h2 id="nome">${nome_valor}</h2>`;
            cardEdit1 = '<img id="card-edit1" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditNome()">';
        }
        if (disciplina != null && disciplina.outerHTML != '' && disciplina.value != undefined) {
            disciplina_valor = disciplina.value;
            disciplina.outerHTML = `<h2 id="disciplina">${disciplina_valor}</h2>`;
            cardEdit2 = '<img id="card-edit2" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditDisciplina()">';
        } else {
            disciplina_valor = disciplina.innerHTML;
            disciplina.outerHTML = `<h2 id="disciplina">${disciplina_valor}</h2>`;
            cardEdit2 = '<img id="card-edit2" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditDisciplina()">';
        }
        if (telefone != null && telefone.outerHTML != '' && telefone.value != undefined) {
            telefone_valor = telefone.value;
            telefone.outerHTML = `<h2 id="telefone">${telefone_valor}</h2>`;
            cardEdit3 = '<img id="card-edit3" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditTelefone()">';
        } else {
            telefone_valor = telefone.innerHTML;
            telefone.outerHTML = `<h2 id="telefone">${telefone_valor}</h2>`;
            cardEdit3 = '<img id="card-edit3" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditTelefone()">';
        }
        if (cpf != null && cpf.outerHTML != '' && cpf.value != undefined) {
            cpf_valor = cpf.value;
            cpf.outerHTML = `<h2 id="cpf">${cpf_valor}</h2>`;
            cardEdit4 = '<img id="card-edit4" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditCPF()">';
        } else {
            cpf_valor = cpf.innerHTML;
            cpf.outerHTML = `<h2 id="cpf">${cpf_valor}</h2>`;
            cardEdit4 = '<img id="card-edit4" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditCPF()">';
        }
        if (email != null && email.outerHTML != '' && email.value != undefined) {
            email_valor = email.value;
            email.outerHTML = `<h2 id="email">${email_valor}</h2>`;
            cardEdit5 = '<img id="card-edit5" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditEmail()">';
        } else {
            email_valor = email.innerHTML;
            email.outerHTML = `<h2 id="email">${email_valor}</h2>`;
            cardEdit5 = '<img id="card-edit5" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditEmail()">';
        }
        if (turnos != null && turnos.outerHTML != '' && turnos.value != undefined) {
            turnos_valor = turnos.value;
            turnos.outerHTML = `<h2 id="turnos">${turnos_valor}</h2>`;
            cardEdit6 = '<img id="card-edit6" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditTurnos()">';
        } else {
            turnos_valor = turnos.innerHTML;
            turnos.outerHTML = `<h2 id="turnos">${turnos_valor}</h2>`;
            cardEdit6 = '<img id="card-edit6" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditTurnos()">';
        }
        closeConfirmSave();
        resetCardEdition();
    } else {
        alert('Todas as caixas devem ser preenchidas.');
    }
}

function resetCardEdition() {
    cardEdit1 = document.getElementById('card-edit1');
    cardEdit2 = document.getElementById('card-edit2');
    cardEdit3 = document.getElementById('card-edit3');
    cardEdit4 = document.getElementById('card-edit4');
    cardEdit5 = document.getElementById('card-edit5');
    cardEdit6 = document.getElementById('card-edit6');
    cardEdit1.outerHTML = '<img id="card-edit1" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditNome()">';
    cardEdit2.outerHTML = '<img id="card-edit2" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditDisciplina()">';
    cardEdit3.outerHTML = '<img id="card-edit3" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditTelefone()">';
    cardEdit4.outerHTML = '<img id="card-edit4" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditCPF()">';
    cardEdit5.outerHTML = '<img id="card-edit5" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditEmail()">';
    cardEdit6.outerHTML = '<img id="card-edit6" class="card-edit" src="../img/escrever.png" alt="Editar" onclick="cardEditTurnos()">';
}

function isNull() {
    if (nome == null) {
        nome = document.getElementById('nome');
        nome_valor = nome.innerHTML;
    } else {
        nome_valor = nome.value;
    }
    if (disciplina == null) {
        disciplina = document.getElementById('disciplina');
        disciplina_valor = disciplina.innerHTML;
    } else {
        disciplina_valor = disciplina.value;
    }
    if (telefone == null) {
        telefone = document.getElementById('telefone');
        telefone_valor = telefone.innerHTML;
    } else {
        telefone_valor = telefone.value;
    }
    if (cpf == null) {
        cpf = document.getElementById('cpf');
        cpf_valor = cpf.innerHTML;
    } else {
        cpf_valor = cpf.value;
    }
    if (email == null) {
        email = document.getElementById('email');
        email_valor = email.innerHTML;
    } else {
        email_valor = email.value;
    }
    if (turnos == null) {
        turnos = document.getElementById('turnos');
        turnos_valor = turnos.innerHTML;
    } else {
        turnos_valor = turnos.value;
    }
}

function resetValues() {
    nome = document.getElementById('nomeInp');
    disciplina = document.getElementById('disciplinaInp');
    telefone = document.getElementById('telefoneInp');
    cpf = document.getElementById('cpfInp');
    email = document.getElementById('emailInp');
    turnos = document.getElementById('turnosInp');
    if (nome != null) {
        nome_valor = nome.value;
    } else {
        nome = document.getElementById('nome')
        nome_valor = nome.innerHTML;
    }
    if (disciplina != null) {
        disciplina_valor = disciplina.value;
    } else {
        disciplina = document.getElementById('disciplina');
        disciplina_valor = disciplina.innerHTML;
    }
    if (telefone != null) {
        telefone_valor = telefone.value;
    } else {
        telefone = document.getElementById('telefone');
        telefone_valor = telefone.innerHTML;
    }
    if (cpf != null) {
        cpf_valor = cpf.value;
    } else {
        cpf = document.getElementById('cpf');
        cpf_valor = cpf.innerHTML;
    }
    if (email != null) {
        email_valor = email.value;
    } else {
        email = document.getElementById('email');
        email_valor = email.innerHTML;
    }
    if (turnos != null) {
        turnos_valor = turnos.value;
    } else {
        turnos = document.getElementById('turnos');
        turnos_valor = turnos.innerHTML;
    }
}