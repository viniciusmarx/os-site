function calcularClasse() {
    const octet1 = document.getElementById('octet1').value;
    const octet2 = document.getElementById('octet2').value;
    const octet3 = document.getElementById('octet3').value;
    const octet4 = document.getElementById('octet4').value;
    const resultado = document.getElementById('resultado');

    if (isValidIP(octet1, octet2, octet3, octet4)) {
        const classe = getClasse(parseInt(octet1));
        resultado.innerText = `Classe do IP: ${classe}`;
    } else {
        resultado.innerText = 'IP inválido. Por favor, insira valores válidos para os octetos (0-255).';
    }
}

function isValidIP(octet1, octet2, octet3, octet4) {
    const octets = [octet1, octet2, octet3, octet4];
    for (let i = 0; i < octets.length; i++) {
        const octet = parseInt(octets[i]);
        if (isNaN(octet) || octet < 0 || octet > 255) {
            return false;
        }
    }
    return true;
}

function getClasse(octet1) {
    if (octet1 >= 1 && octet1 <= 127) {
        return 'A';
    } else if (octet1 >= 128 && octet1 <= 191) {
        return 'B';
    } else if (octet1 >= 192 && octet1 <= 223) {
        return 'C';
    } else if (octet1 >= 224 && octet1 <= 239) {
        return 'D';
    } else if (octet1 >= 240 && octet1 <= 255) {
        return 'E';
    } else {
        return 'Desconhecida';
    }
}
