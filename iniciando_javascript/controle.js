var pagina = -1
var elementos = 0

function Pessoa(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }

var listaPessoas = []




function Cadastrar() {


    var nome = document.getElementById("nomeid");
    var telefone = document.getElementById("telefoneid");
    var email = document.getElementById("emailid");

    var aux_Nome = nome.value
    var aux_Telefone = telefone.value
    var aux_Email = email.value
    if(nome.value!="" && email.value!="" && telefone.value!=""){
        var novo = new Pessoa(nome.value,email.value,telefone.value);
        listaPessoas.push(novo);
        document.getElementById("nomeid").value = '';
        document.getElementById("telefoneid").value = '';
        document.getElementById("emailid").value = '';
        
        alert("Dados cadastrados com sucesso!")
        var formulario = document.getElementById("formid")

        if(elementos==0){
            var botao_Ant = document.createElement("button");
            botao_Ant.type = 'button';   
            botao_Ant.class = "anterior"
            botao_Ant.setAttribute("onclick","Anterior()")
            botao_Ant.textContent = "Anterior"
            formulario.appendChild(botao_Ant);

            var botao_Prox = document.createElement("button");
            botao_Prox.type = 'button';   
            botao_Prox.class = "proximo"
            botao_Prox.setAttribute("onclick","Proximo()")
            botao_Prox.textContent = "Proximo"
            formulario.appendChild(botao_Prox);

            var botao_delete = document.createElement("button");
            botao_delete.type = 'button';
            botao_delete.className = "apagar";
            botao_delete.setAttribute("onclick", "Delete()");
            botao_delete.textContent = "Apagar";
            formulario.appendChild(botao_delete);
            
            var tabela = document.createElement("table")
            tabela.id = "tabelaid"
            var linha = document.createElement("tr")
            var coluna = document.createElement("td")
            var coluna1 = document.createElement("td")
            var coluna2 = document.createElement("td")
            coluna.textContent = "Nome"
            linha.appendChild(coluna)
            coluna1.textContent = "Telefone"
            linha.appendChild(coluna1)
            coluna2.textContent = "Email"
            linha.appendChild(coluna2)
            tabela.appendChild(linha)
            tabela.className = "form_login"
            document.body.appendChild(tabela) 
        }

        var aux_Tabela = document.getElementById("tabelaid") 
        var linha = document.createElement("tr")
        var coluna = document.createElement("td")
        var coluna1 = document.createElement("td")
        var coluna2 = document.createElement("td")
        coluna.textContent = aux_Nome
        linha.appendChild(coluna)
        coluna1.textContent = aux_Telefone
        linha.appendChild(coluna1)
        coluna2.textContent = aux_Email
        linha.appendChild(coluna2)
        aux_Tabela.appendChild(linha)
        
        elementos++
        pagina = -1
    }
    else{
        alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS")
    }
}

function Exibir() { 
    
    document.getElementById("nomeid").value = listaPessoas[pagina].nome;
    document.getElementById("telefoneid").value = listaPessoas[pagina].telefone;
    document.getElementById("emailid").value = listaPessoas[pagina].email;
}

function Limpar() { 
    document.getElementById("nomeid").value = "";
    document.getElementById("telefoneid").value = "";
    document.getElementById("emailid").value = "";
}

function Delete() { 
    if(pagina != -1){
        var tabela = document.getElementById("tabelaid");
        tabela.deleteRow(pagina+1);
        listaPessoas.splice(pagina, 1);
        elementos--;
        pagina--;   
    }
}

function Proximo() { 
    if(elementos>0 && pagina<(elementos-1)){
        pagina++
        Exibir()
    }
    else{
        alert("Não existe uma proxima pagina")
    }
}

function Anterior() { 
    if(elementos>0 && pagina>0){
    pagina--
    Exibir()
    }else{
        alert("Não existe uma pagina anterior")
    }
}
