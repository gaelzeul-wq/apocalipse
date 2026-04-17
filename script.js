let vida = 100;
let fome = 100;
let sede = 100;

let max = 100;


let inventario = {
    comida: 0,
    agua: 0,
    remedio: 0,
    madeira: 0,
    pedra : 0,
    metal : 0,
};

function explorar(){
    let botao = document.getElementById("Explora");

    botao.disabled = true;
    botao.innerText = "carregando";

    let sorte = Math.random();

    // quantidades
    let QtdComum = Math.floor(Math.random() * 3) + 3; // 3 a 5
    let QtdMedia = Math.floor(Math.random() * 2) + 2; // 2 a 3
    let QtdRaro = Math.floor(Math.random() * 1) + 1;  // 1

    if(sorte < 0.55) {
        inventario.madeira += QtdComum;
        mostraEvento(`Você encontrou ${QtdComum} de madeira! 🌲`);
    }
    else if(sorte < 0.70) {
        inventario.pedra += QtdComum;
        mostraEvento(`Você encontrou ${QtdComum} de pedra!`);
    }
    else if(sorte < 0.80){
        inventario.comida += QtdComum;
        mostraEvento(`Você encontrou ${QtdComum} de comida! 🍎`);
    }
    else if(sorte < 0.90) {
        inventario.agua += QtdMedia;
        mostraEvento(`Você encontrou ${QtdMedia} de água! 💧`);
    }
    else if(sorte < 0.98) {
        inventario.metal += QtdRaro;
        mostraEvento(`Você encontrou ${QtdRaro} de minério de metal! ⛏️`);
    }
    else {
        inventario.remedio += 1;
        mostraEvento(`Você encontrou um remédio raro! 💊`);
    }

    setTimeout(() => {
        botao.disabled = false;
        botao.innerText = "Explora";
    }, 1001);

    atualizarInventario();
}

function mostraEvento(texto){
     document.getElementById("textoEvento").innerText = texto;
}

function atualizarInventario(){
    document.getElementById("comidaQtd").innerText = inventario.comida;
    document.getElementById("aguaQtd").innerText = inventario.agua;
    document.getElementById("remedioQtd").innerText = inventario.remedio;
    document.getElementById("madeiraQtd").innerText = inventario.madeira;
    document.getElementById("pedraQtd").innerText = inventario.pedra;
    document.getElementById("metalQtd").innerText = inventario.metal;
}

function atualizarBarras(){
    document.getElementById("vidabarra").style.width = (vida / max) * 100 + "%";
    document.getElementById("fomebarra").style.width = (fome / max) * 100 + "%";
    document.getElementById("sedebarra").style.width = (sede / max) * 100 + "%";
}

setInterval(() => {
    fome -= 0.7;
    sede -= 1;

    if(fome <= 0 || sede <= 0) {
        vida -= 5;
    }

    if(vida <= 0) {
        alert("Você morreu!");
        location.reload();
        vida = 100;
        fome = 100;
        sede = 100;
    }

    if(vida <= 0) vida = 0;
    if(fome <= 0) fome = 0;
    if(sede <= 0) sede = 0;
    atualizarBarras();
}, 2000);
