// Quantas pessoas votaram?

function totalVotes(arr) {
  return arr.reduce((acc, curr) => (curr.voted === true) ? acc + 1 : acc, 0);
}

const voters = [
{name:'Bob' , age: 30, voted: true},
{name:'Jake' , age: 32, voted: true},
{name:'Kate' , age: 25, voted: false},
{name:'Sam' , age: 20, voted: false},
{name:'Phil' , age: 21, voted: true},
{name:'Ed' , age:55, voted:true},
{name:'Tami' , age: 54, voted:true},
{name: 'Mary', age: 31, voted: false},
{name: 'Becky', age: 43, voted: false},
{name: 'Joey', age: 41, voted: true},
{name: 'Jeff', age: 30, voted: true},
{name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters)); // 7 

//=============================================================================

// Quanto custaria para comprar todos os itens de uma vez?

function shoppingSpree(arr) {
  return arr.reduce((acc, curr) => acc + curr.price, 0);
}
  
  const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
  ];
  
  console.log(shoppingSpree(wishlist)); // 227005 

  //====================================================================

  /**
* Dado um array de votantes em potencial,
* retorne um objeto com as seguintes chaves:
* youngPeople: numero total de pessoas com idade entre 18 e 25
* youngVotes: numero total de pessoas nessa faixa que votou
* midPeople: numero total de pessoas com idade entre 26 e 55
* midVotes: numero total de pessoas nessa faixa que votou
* oldPeople: numero total de pessoas com mais de 55 anos
* oldVotes: numero total de pessoas nessa faixa que votou
*/

const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:65, voted:true},
  {name:'Tami' , age: 64, voted:true},
  {name: 'Mary', age: 41, voted: false},
  {name: 'Becky', age: 53, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
  ];
  
  function voterResults(arr) {
    const obj = {
      youngPeople: 0,
      youngVotes: 0,
      midPeople: 0,
      midVotes: 0,
      oldPeople: 0,
      oldVotes: 0,
    };

    return arr.reduce((acc, curr) => {
      if (curr.age < 26) {
        acc.youngPeople += 1;
        acc.youngVotes = curr.voted ? acc.youngVotes + 1 : acc.youngVotes;
      } else if 
        (curr.age < 56) {
        acc.midPeople += 1;
        acc.midVotes = curr.voted ? acc.midVotes + 1 : acc.midVotes;
      } else {
        acc.oldPeople += 1;
        acc.oldVotes = curr.voted ? acc.oldVotes + 1 : acc.oldVotes;
      }
      return acc;
    }, obj)
  };
  
  console.log(voterResults(voters))
//   Expected Result:
// {
// youngPeople: 4,
// youngVotes: 1,
// midPeople: 6,
// midVotes: 4,
// oldPeople: 2,
// oldVotes: 2
// } 