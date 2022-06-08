function exec1(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error('Os valores não são números'))
    }

    const result = (num1 + num2) * num3;

    if (result < 50) {
      reject(new Error(`Valor muito baixo ${result}`));
    }

    resolve(`Valor ${result}`);
  
  });
  return promise;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {
  try {
    const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
    // const result = await main(...randomNumbers);
    console.log(randomNumbers);
    // console.log(result);
    
  } catch (error) {
    console.log(error.message)
  }
}

async function main(...args) {

  try {
    const result = await exec1(...args);
    console.log(result);
  } catch(error) {
    console.log(error.message);
  }
}

// main(8, 2, 3);
callDoMath()
