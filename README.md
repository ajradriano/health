# Health

Health é uma aplicação para auxiliar no monitoramento de dados referentes a saude pessoal.

## Changelogs

### Janeiro de 2024
#### Navegação entre telas
* (Parcial) Implementada tela de calculo Metabolismo Basal;
* Implementada funcionalidade de navegação entre as telas da aplicação;
* Implementada biblioteca para visualização da aplicação na web (Não otimizado)


### Dezembro de 2023
#### Calculo de Índice de Massa Corporal (IMC)

* Implementada funcionalidade que calcula o IMC conforme altura e peso;
* Implementadas validações dos dados inseridos para o calculo.

    > As medidas de peso e altura do indivíduo adulto (indivíduo com 20 anos ou mais e menor de 60 anos de idade) devem ser avaliadas segundo métodos preconizados e registradas, respectivamente, em quilos e em metros. O IMC é calculado pela relação entre o peso dividido pelo quadrado da altura do indivíduo, assim como expresso pela fórmula abaixo:
    
    `IMC = A / (P . P)`

    >  A unidade de medida deste indicador é Kg/m2.

    Valores de Referencia:
    * Valores de IMC abaixo de 18,5: adulto com baixo peso.
     * Valores de IMC maior ou igual a 18,5 e menor que 25,0: adulto com peso adequado (eutrófico).
     * Valores de IMC maior ou igual a 25,0 e menor que 30,0: adulto com sobrepeso.
     * Valores de IMC maior ou igual a 30,0: adulto com obesidade.

    #### Fonte: DataSUS
    http://tabnet.datasus.gov.br/cgi-win/SISVAN/CNV/notas_sisvan.html#des
    (Item 4. Estado nutricional de adultos (Est nut adulto))

### Demonstração
https://github.com/ajradriano/health/assets/35134863/91a57b5f-f662-459b-8894-11032561db00


---
