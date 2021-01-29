function calcular(tipo, valor) {
    // console.log(tipo, valor)

    // o if else, ira separar os valores, de quem tem o tipo acao e quem tem o tipo valor
    if (tipo == 'acao') {
        // recuperamos oq foi armazenado no parametro acao
        // e conferimos para qual valor sera atribuido

        if(valor === 'c'){
            // caso seja clicado esse valo "C"
            // ent será limpado o visor usando:
            document.getElementById('resultado').value = ''
            // atribuindo ao visor(resultado) um valor vasio
        }

        // agr vamos deixar a expressão do calculo no visor
        if( valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') {
            // atribuindo novamente ao visor(resultado) os valores concatenados
            document.getElementById('resultado').value += valor
        }

        // em seguida vamos atribuir o calculo
        if(valor === '=') {
            // doc.get com isso vamos recuperar o valor contido no visor(resultado)
            // em seguida armazenando ele em uma var
            var valor_campo = eval(document.getElementById('resultado').value)
            // console.log(eval(valor_campo))
            // eval: irá transformar a espressão em uma operação nativa do JavaScript
            // ou seja desconsiderando oq era antes(string) e apenas executando como um novo script


            // assim aplicando o resultado do calculo no visor
            document.getElementById('resultado').value = valor_campo
            
        }
        
    } else if (tipo === 'valor') {
        
        // recuperamos o valor contido no DOM, atribuimos a barra de texto (id=resultado), 
        // dizemos que é um valor em seguida atribuimos ao parametro 'valor'(recupera os valores clicados no botão),
        // que ira ao msm tempo concatenar o valor anterior ao novo(+=)
        document.getElementById('resultado').value += valor
        // os valores recuperados do ID iram ser concatenados e atribuidos ao valor(que contem os valores clicados)


    }

}