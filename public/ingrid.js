function mostrar(id){
    let pegar = document.getElementById(id).textContent;
    let jogar = document.getElementById('mensagens');
    let voltar = document.getElementById('texto').style.display="contents";
    jogar.innerHTML = pegar;
    let pessoa = document.getElementById('pessoa');

    pessoa.innerHTML = id;

}
