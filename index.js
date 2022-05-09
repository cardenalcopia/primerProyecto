function suma (op1,op2)
{
    let resultado = op1 + op2;
    console.log( op1 + "+" + op2 + "=" + resultado);
}

function resta (op1,op2)
{
    let resultado = op1-op2;
    console.log( op1 + "-" + op2 + "=" + resultado);
}
function producto (op1,op2)
{
    let resultado = op1*op2;
    console.log( op1 + "*" + op2 + "=" + resultado);
}
function division (op1,op2)
{
    let resultado = op1/op2;
    console.log( op1 + "/" + op2 + "=" + resultado);
}
function cuadrado (op1)
{
    let resultado = Math.pow(op1,2);
    console.log(resultado);
}

module.exports={suma,resta,producto,division,cuadrado}