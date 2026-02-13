

let idade = 11


if (idade >= 12 && idade < 18) {
    console.log("adolescente");

}
else if (idade >= 18) {
    console.log('Adulto');

}
else if (idade < 12) {
    console.log("Criança");

}


function jogarJokenpo(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    const usuario = escolhaUsuario?.toLowerCase();

    const regras = {
        pedra: { vence: 'tesoura', perde: 'papel' },
        papel: { vence: 'pedra', perde: 'tesoura' },
        tesoura: { vence: 'papel', perde: 'pedra' }
    };

    if (!regras[usuario]) {
        console.log("Escolha inválida! Por favor, escolha entre pedra, papel ou tesoura.");
        return
    }

    if (usuario === escolhaComputador) {
        console.log(`Empate! Ambos escolheram ${usuario}.`);
        return
    }

    if (regras[usuario].vence === escolhaComputador) {
        console.log(`Você venceu! ${usuario} vence ${escolhaComputador}.`);
    } else {
        console.log(`O computador venceu! ${escolhaComputador} vence ${usuario}.`);
    }
}











