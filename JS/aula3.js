
    let modelo,distancia,tempo;
    modelo = prompt("Insira o nome do veículo (modelo):");
    distancia = parseFloat(prompt("Insira a distância percorrida (em km):"));
    tempo = parseFloat(prompt("Insira o tempo levado (em horas):"));

    if (distancia && distancia > 0 && tempo && tempo > 0){
         velocidadeMedia = distancia / tempo;
         Resultado = "Modelo do Veículo: " + modelo + "\n" +
                                "Distância Percorrida: " + distancia + " km\n" +
                                "Tempo Levado: " + tempo + " horas\n" +
                                "Velocidade Média: " + velocidadeMedia.toFixed(2) + " km/h";

     alert(Resultado);  
    } else {
        alert("Por favor, insira valores válidos para distância e tempo.");
    }

