var pagina = -1
var elementos = 0

/* alert('teste') */
class Pessoa {
    constructor(nome, email, telefone) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
}




var listaPessoas = []
function Cadastrar(){
    var nome = document.getElementById("nomeid");
    var telefone = document.getElementById("telefoneid");
    var email = document.getElementById("emailid");

    if(nome.value !="" && telefone.value!="" && email.value!=""){
        var novo = new Pessoa(nome.value, email.value, telefone.value)
        listaPessoas.push(novo)
        alert("TODOS OS CAMPOS PREENCHIDOS COM SUCESSO")
        document.getElementById("nomeid").value=""
        document.getElementById("emailid").value=""
        document.getElementById("telefoneid").value=""
        elementos++
        pagina = -1
    }else{
        alert("TODOS OS CAMPOS PRECISAM SER PREENCHIDOS")
    }
    
}

function Exibir(){
    document.getElementById("nomeid").value = listaPessoas[pagina].nome
    document.getElementById("telefoneid").value = listaPessoas[pagina].telefone
    document.getElementById("emailid").value = listaPessoas[pagina].email
}

function Anterior(){
    if(elementos > 0 && pagina>0){
        pagina--
        Exibir()
    }else{
        alert("NÃO EXISTE ANTERIOR")
    }
}

function Proximo(){
    if(elementos > 0 && pagina<(elementos-1)){
        pagina++
        Exibir()
    }else{
        alert("NÃO EXISTE PROXIMO   ")
    }
}

