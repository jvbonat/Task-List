const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.lista-tarefa');

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar','').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    console.log(listaDeTarefas)
}

btnTarefa.addEventListener('click',(e)=>{
    if(!inputTarefa.value){
        return;
    }else{
        criaTarefa(inputTarefa.value);
    }
})

inputTarefa.addEventListener('keypress',(e)=>{
    if(e.keyCode==13){
        if(!inputTarefa.value){
            return;
        }else{
            criaTarefa(inputTarefa.value)
        }
    }
})

document.addEventListener('click',(e)=>{
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
    }
})

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    const btnDel = document.createElement('button')
    li.innerHTML+=' '
    btnDel.innerHTML='Apagar'
    btnDel.setAttribute('class','apagar');
    li.appendChild(btnDel);
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = `${textoInput}`
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    limpaInput();
    salvarTarefas();
}