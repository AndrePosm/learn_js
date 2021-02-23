// 1. Создать функцию, которая возвращает true/false, на вход принимает обьект,
//в котором есть поле age, и если age > 18 ? true : false

//const user = { age: 21 }


const user = {
   age: 21,
};

tiketToTheClub(age) {
  if (age >18){
   return true;
  } else {
   return false;
  }
}



//    tiketToTheClub(age) {
//    return age > 18 ? true : false ;
//    }

//2. Создать функция, которая на вход принимает любой тип данных и если это строка
  //нужно вернуть этуже строку, в обратном порядке.
  //Если это число, нужно возвести его в 5 степень.
  //Если это bool, то вернуть строку "Да"/"Нет"
  //В противном случае просто вернуть аргумент который пришел

const dataTypes = [ 'Sergey', 20, True, Null];

function doSomething (types) {

   if (typeof dataTypes === 'string');
   
       return str.split("").reverse().join("");
  
   } else if (typeof dataTypes === 'Number') {
  Math.pow(dataTypes, 5 );
} else if (typeof dataTypes === 'Boolean') {
  return ;
}
 else {
  return dataTypes;
}
}

doSomething(dataTypes);
