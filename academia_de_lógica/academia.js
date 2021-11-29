// let number = 6;
// switch (number) {
//   case 1:
//     console.log("Trybe Lanche Feliz");
//     break;
    
//   case 2:
//     console.log("McTrybe");
//     break;

//   case 3:
//     console.log("TrybeWooper");
//     break;

//   case 4:
//     console.log("X-Trybe");
//     break;

//   case 5:
//     console.log("Triplo Trybe com JS");
//     break;

//   default:
//     console.log("não tem esta opção")
// }

// let AgeM = 26
// let AgeS = 20
// let AgeI = 19

// if (AgeM < AgeS && AgeM < AgeI) {
//   console.log ('marina é mais jovem e possui ' + AgeM + ' anos de idade')
// } else if (AgeS < AgeM && AgeS < AgeI) {
//   console.log ('Silvia é mais jovem e possui ' + AgeS + ' anos de idade')
// }else {
//   console.log ('Iza é mais jovem e possui ' + AgeI + ' anos de idade')
// }

RESOLVER
// 06 - Taxa Metabólica Basal
// Renata é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site.
// Escreva um algoritmo que recebe os dados a seguir:
// * age: número maior que 0
// * sex: M ou F
// * weight: Em (kg) com número maior que 0
// * height: Em (cm) com número maior que 0
// Fórmula para homens:
// * (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
// Fórmula para mulheres:
// * (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
// O retorno deve ser no seguinte formato:
// ---------------------------------------
// "A taxa metabólica basal é: x Kcal"