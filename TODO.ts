/* 
  1- make the thunk funciton in the data store to be dynamic if i want 
    to make another thunk call i want that to be less code 

  2- make the banner img to lazy loading and make the skelton on the img and the text 

  3- handling the data for user and make when the user logged in change the header banner to 
     let the user know that her signed in 

  4- make the data for the swipers and make sure that the functionality is working good
     make sure that the swiper animation is working good too and the snap type align too

  5- making the search functionality it will be about a component when the user click on the 
     search bar it will automaticlly change the page with state to the seacrch reasult pacge
     and make some dabounce effect you gonna find that video on yt downloads on your mobile phone
  
  6- make the sport and sale and sustainablity pages 

  7- make the header card and the notfication bell animation and control that video animation
  

*/

type P<T> = Record<string, T>;

const switchFnx =
  <T extends P<typeof knownFruit>>(lookupObject: T, defaultCase = "_default") =>
  (expression: keyof T) =>
    (lookupObject[expression] || lookupObject[defaultCase])();

const knownFruitx = () => console.log("Known fruit");
const unknownFruitx = () => console.log("Unknown fruit");

const logFruitx: P<typeof knownFruit> = {
  apples: knownFruitx,
  oranges: knownFruitx,
  default: unknownFruitx,
};

const fruitSwitchx = switchFnx(logFruitx, "default");

fruitSwitchx("apples"); // Logs: 'Known fruit'
fruitSwitchx("pineapples"); // Logs: 'Unknown fruit'

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// type I<T extends string | number | symbol, U> = { [K in T]: U };
//
// type H<T> = I<string, T>;
//
// type U<T> = { [key: string | number | symbol]: T };
//
// const switchFn =
//   <T extends U<typeof knownFruit>>(lookupObject: T, defaultCase = "_default") =>
//   (expression: keyof T) =>
//     (lookupObject[expression] || lookupObject[defaultCase])();
//
// const knownFruit = () => console.log("Known fruit");
// const unknownFruit = () => console.log("Unknown fruit");
//
// const logFruit: U<typeof knownFruit> = {
//   apples: knownFruit,
//   oranges: knownFruit,
//   default: unknownFruit,
// };
//
// const fruitSwitch = switchFn(logFruit, "default");
//
// fruitSwitch("apples"); // Logs: 'Known fruit'
// fruitSwitch("pineapples"); // Logs: 'Unknown fruit'
