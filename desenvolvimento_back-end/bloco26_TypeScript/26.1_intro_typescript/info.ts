boolean: `recebe verdadeiro ${true} ou falso ${false}`

let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é boleano e o valor é true
let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é boleano e o valor é false

// ==============================================================================================

number: 'recebe valores numéricos e, assim como no JavaScript, todos são valores de ponto flutuante'

// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
let x: number;

let y: number = 0;
let z: number = 123.456;

// ==============================================================================================

string: 'recebe uma sequência de caracteres armazenados como unidades de código UTF-16 Unicode'

let s: string;
let empty: string = "";
let abc: string = 'abc';

// ==============================================================================================

void: 'existe apenas para indicar a ausência de um valor, como em uma função sem valor retornado'

function sayHelloWorld(): void {
  console.log("Hello World!");
}

// ==============================================================================================

null e undefined: 'são subtipos de todos os outros tipos'

let nullValue = null;
let undefinedValue = undefined;

// ==============================================================================================

'EXEMPLO DE DECLARAÇÃO DE VARIÁVEIS UTILIZANDO INFERÊNCIA DE TIPO'

'Como visto antes, podemos utilizar a inferência de tipo no TypeScript. É possível declarar uma variável sem especificarmos explicitamente o tipo e o compilador fará a inferência do tipo por meio do valor definido para a variável'

let flag = true; // o compilador irá inferir o tipo boolean
const numberPI = 3.1416; // o compilador irá inferir o tipo number
let message = "Hello World!"; // o compilador irá inferir o tipo string

// ==============================================================================================

'ENUM OU ENUMERAÇÃO'

'Imagine que você tem um campo em um banco de dados externo que representa o status da matrícula de uma pessoa estudante em um curso, chamado StudentStatus, que é do tipo inteiro e pode conter os números 1, 2 ou 3, que representam respectivamente: Active, Inactive e Paused. Vamos criar uma enumeração com esses valores e entendermos como eles funcionam no TypeScript'

enum StudentStatus {
  Active,
  Inactive,
  Paused
}

'Agora, vamos declarar uma variável para uma nova pessoa estudante do tipo StudentStatus e atribuir o tipo Inactive.'

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1

enum StudentStatus2 {
  Active = 1,
  Inactive,
  Paused
}

let newStudentStatus2: StudentStatus2 = StudentStatus2.Inactive;
console.log(newStudentStatus2); //saída: 2


'Enums suportam o acesso ao dado em ambos as direções: da chave ao valor e do valor à chave.'

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest