// Parte 1: Seletores Simples
//1. Acesse e imprima o conteúdo do título principal (`id="titulo-pagina"`).
 //2. Acesse a descrição abaixo do título usando a **classe**.
//3. Acesse o elemento `#modulo-1` usando `getElementById`.
//4. Liste todos os elementos com a classe `.tarefa` usando `getElementsByClassName`.
//Conte quantos <li> existem no total usando getElementsByTagName.

console.log("/////Parte 1//////")


const titulo_pagina = document.getElementById("titulo-pagina") 
    
    console.log(titulo_pagina.innerText)
 
const descricao = document.querySelector(".subtitulo")
 
    console.log(descricao.textContent)

const modulo_1 = document.getElementById("modulo-1")

 console.log(modulo_1.innerText)

 const lista_tarefas = document.getElementsByClassName("tarefa")
   
 for (i=0;i<lista_tarefas.length;i++){
       console.log(lista_tarefas[i].innerText) 

 }

 const quantidade_li = document.getElementsByTagName("li")

    console.log( quantidade_li.length)

/*### Parte 2: querySelector / querySelectorAll
*/
/*
1. Acesse o **primeiro item da lista** do Módulo 1 com `querySelector`.
2. Acesse a tarefa com a classe `.importante` no Módulo 2.
3. Acesse o `<span>` da tarefa "Funções".
4. Liste o conteúdo dos títulos (`<h2>`) de cada módulo.*/


console.log("////Parte 2/////")
const primeiro = document.querySelector(".tarefa")
 console.log(primeiro.innerText)

 const tarefa_importe_modulo2 = document.querySelector("ol li:nth-child(3)")
 console.log(tarefa_importe_modulo2.innerText)

console.log(lista_tarefas[5].innerHTML)

const h2 = document.querySelectorAll(".titulo-modulo")
console.log(h2[0].innerText)
console.log(h2[1].textContent)




/*Parte 3: innerText, textContent, innerHTML
Pegue a tarefa com a classe .importante e compare os três:
console.log(elemento.innerText)
console.log(elemento.textContent)
console.log(elemento.innerHTML)*/



console.log("////Parte 3//////")
const TarefaClasseImportante = document.getElementsByClassName("importante")
console.log("Tem duas Tarefas .importante =", TarefaClasseImportante , "Vou comparar com as Duas")
console.log(TarefaClasseImportante[0].innerText)
console.log(TarefaClasseImportante[0].textContent)
console.log(TarefaClasseImportante[0].innerHTML)
console.log(TarefaClasseImportante[1].innerText)
console.log(TarefaClasseImportante[1].textContent)
console.log(TarefaClasseImportante[1].innerHTML)


/*Parte 4: Desafios de Leitura
Liste os textos de todos os elementos .tag em um array:
const tags = document.querySelectorAll('.tag');
const textos = Array.from(tags).map(el => el.innerText);
console.log(textos);
​
Conte quantas tarefas estão com os status:
"pendente"
"visto"
"bloqueado"
Monte uma lista com formato:
Tarefa: Leitura e Seletores DOM - Status: em andamento
Tarefa: Estilos com CSS - Status: pendente*/

const tags = document.querySelectorAll('.tag');
const textos = Array.from(tags).map(el => el.innerText);
console.log(textos);


let contPendentes=0
let contVisto=0
let contBloqueado=0
for(j=0;j<textos.length;j++){
  
    if(textos[j]=="pendente"){
        contPendentes=contPendentes+1;
    }else{
        if(textos[j]=="visto"){
            contVisto=contVisto+1;
        }
        else{
            contBloqueado=contBloqueado+1
            }
        }
    }
console.log("A lista tem ", contPendentes ,"tarefas com estatus Pendentes")
console.log("A lista tem ", contVisto ,"tarefas com estatus Visto")
console.log("A lista tem ", contBloqueado ,"tarefas com estatus Bloqueado")


