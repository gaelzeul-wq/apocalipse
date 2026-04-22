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
    let QtdRaro = Math.floor(Math.random() * 2) + 3;  // 1

    if(sorte < 0.55) {
        inventario.madeira += QtdComum;
        mostraEvento(`Você encontrou ${QtdComum} de madeira! 🌲`);
    }
    else if(sorte < 0.70) {
        inventario.pedra += QtdComum;
        mostraEvento(`Você encontrou ${QtdComum} de pedra! 🗿`);
    }
    else if(sorte < 0.80){
        inventario.comida += QtdComum;
        mostraEvento(`Você encontrou ${QtdComum} de comida! 🍎`);
    }
    else if(sorte < 0.90) {
        inventario.agua += QtdMedia;
        mostraEvento(`Você encontrou ${QtdMedia} Garrafas de água! 💧`);
    }
    else if(sorte < 0.98) {
        inventario.metal += QtdRaro;
        mostraEvento(`Você encontrou ${QtdRaro} de sucata! ⚙️`);
    }
    else{
        inventario.remedio += 1;
        mostraEvento(`Você encontrou um remédio raro! 💊`);
    }

    setTimeout(() => {
        botao.disabled = false;
        botao.innerText = "Explora";
    }, 1001);

    atualizarInventario();
}

function abrieinventario(){
    document.getElementById("inventario").style.display = "block";
}

function fecharinventario(){
    document.getElementById("inventario").style.display = "none";
}

function Comer(){
    if(fome >= max) {
        mostraEvento("Você não está com fome! 🍎");
        return;
    }
    if(inventario.comida > 0) {
        inventario.comida += -1;
        fome += 20;
        if(fome > max) fome = max;
        mostraEvento("Você comeu um pouco de comida! 🍎");
    }else {
        mostraEvento("Você não tem comida para comer! 🍎");
        atualizarInventario();
        atualizarBarras();
    }
}

function Beber(){
        if(sede >= max) {
            mostraEvento("Você não está com sede! 💧");
            return;
        }
    if(inventario.agua > 0) {
        inventario.agua += -1;
        sede += 20;
        if(sede > max) sede = max;
        mostraEvento("Você bebeu um pouco de água! 💧");
    }else {
        mostraEvento("Você não tem água para beber! 💧");
        atualizarInventario();
        atualizarBarras();
    }
}

function Descansar(){
    if(vida >= max) {
        mostraEvento("Você não está machucado! 💊");
        return;
    }
    if(inventario.remedio > 0) {
        inventario.remedio += -1;
        vida += 20;
        if(vida > max) vida = max;
        mostraEvento("Você descansou e se curou um pouco! 💊");
    }else {
        mostraEvento("Você não tem remédio para descansar! 💊");
        atualizarInventario();
        atualizarBarras();
    }
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
    atualizarmudarFundo();
}

function atualizarmudarFundo(){
    let painelEvento = document.getElementById("painelEvento");
    if(vida > 75) {
        painelEvento.style.backgroundColor = "#e2d9bc";
    } else if(vida > 60) {
        painelEvento.style.backgroundColor = "#facece";
    } else if(vida > 50) {
        painelEvento.style.backgroundColor = "#d45e5e";
    } else if(vida > 40) {
        painelEvento.style.backgroundColor = "#a72a2a";
    } else if(vida > 30) {
        painelEvento.style.backgroundColor = "#5e0c0c";
    } else if(vida > 20) {
        painelEvento.style.backgroundColor = "#410909";
    } else if(vida > 9) {
        painelEvento.style.backgroundColor = "#1b0202";
    }

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

let tempo = 0;

setInterval(function(){
    tempo++;
    let horas = Math.floor(tempo / 3600);
    let minutos = Math.floor((tempo % 3600) / 60);
    let segundos = tempo % 60;
    document.getElementById("tempo").textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}, 1000);  
