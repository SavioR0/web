 
 function del(){
    value = document.getElementById("visor").value;
    document.getElementById("visor").value = value.slice(0, value.length - 1);
 }
 function ac(){
    document.getElementById("visor").value = '';
 }
 function alerta(){
    alert("Expressão inválida!");
    ac();
 }

 class Operation {
    constructor(x1 = null, x2 = null, operation=null) {
        this._x1 = x1;
        this._x2 = x2;
        this._operation = operation;
    }
    get x1(){return this._x1}
    get x2(){return this._x2}
    get operation(){return this._operation}

    set x1(x){this._x1 = x}
    set x2(x){this._x2 = x}
    set operation(x){this._operation = x}

}

function Calculate(op){
    switch(op.operation){
        case '+':
            return op.x1 + op.x2
        case '-':
            return op.x1 - op.x2
        case '/':
            return op.x1 / op.x2
        case 'x':
            return op.x1 * op.x2
        case '%x':
            return (op.x1/100) * op.x2
        default:
            return null
    }
}

 function result(value){
    var value = document.getElementById("visor").value;
    var last = /[\/x\-\+]/;
    var regex =/^\d+(\.\d+)?([\/x\-\+]|(%x))\d+(\.\d+)?/;

    value.length == 0 || last.test(value[value.length-1]) || !regex.test(value) ?alerta():null;

    var number_int = /^\d+/;
    var number_double = /^\d+(\.\d+)/;
    var op = new Operation();

    var index = 0

    if ((/^\d+(\.\d+)/).test(value)){
        op.x1 = parseFloat(value.match(number_double)[0]) 
        index += value.match(number_double)[0].length;
    }else{
        op.x1 = parseInt(value.match(number_int)[0]) 
        index += value.match(number_int)[0].length;
    }

    operator1 = /^[\/x\-\+]/;
    value = value.substring(index, value.length)
    index = 0


    if(operator1.test(value)){
        op.operation = value[0]
        index++
    }else{
        op.operation = '%x'
        index +=2
    }

    value = value.substring(index, value.length)
    if((/^\d+(\.\d+)/).test(value)) { 
        op.x2 = parseFloat(value.match(number_double)[0] )
    }else{
        op.x2 = parseInt(value.match(number_int)[0]) 
    }
    //console.log( op._x1 + " " +  op.operation +" " + op.x2 )
    //console.log(Calculate(op))
    document.getElementById("visor").value = Calculate(op)
 }

 function Pressed(value){
    var visor_value = document.getElementById("visor").value
    switch(value){
        case 'AC':
            ac()
            break;
        case 'DEL':
            del()
            break;            
        case '=':
            result(document.getElementById("visor").value)
            break;
        default:
            document.getElementById("visor").value = visor_value + value;
            break;
    }
    
 }