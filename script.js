let botao = document.querySelector("#hamburger");
let lateral = document.querySelector("aside");
let body = document.querySelector('body');
let progresso = document.querySelector('#progresso');

botao.onclick = function(){
    lateral.classList.toggle('mostrando');
    for(item of lateral.children){
        if(item.id !== "hamburger"){
            item.classList.toggle("invisivel");
        }
    }
    for(item of botao.children){
        item.classList.toggle('mostrando');
    }
}

body.onscroll = function(){
    let scrollTotal = body.scrollHeight - innerHeight;
    let proporcao = scrollY / scrollTotal;
    progresso.style.width = `${Math.floor(proporcao * 100)}%`;
}