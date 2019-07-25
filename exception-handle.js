try {
  console.log(1);
  console.log(2);
  console.log(3);
  lalalaa;
  console.log(5);
  console.log(7);
} catch(err) {
  console.log('Ошибка ' + err.name + ": " + err.message + "\n" + err.stack);
} finally {
  console.log(8);
}
console.log(9);


//If data is not correct
var data = '{ "age": 30 }'; // данные неполны
try {

  var user = JSON.parse(data); // <-- выполнится без ошибок

  if (!user.name) {
    throw new SyntaxError("Данные некорректны");
  }

  console.log( user.name );

} catch (e) {
  console.log( "Извините, в данных ошибка" );
}

//Probros oshibki
function readData() {
  var data = '{ "name": "Вася", "age": 30 }';

  try {
    // ...
    blabla(); // ошибка!
  } catch (e) {
    // ...
    if (e.name != 'SyntaxError') {
      throw e; // пробрасываем
    }
  }
}

try {
  readData();
} catch (e) {
  alert( "Поймал во внешнем catch: " + e ); // ловим
}


//Обгортання помилки - це коли ми створюємо клас обгортку для помилки
function ReadError(message, cause) {
  this.message = message;
  this.cause = cause;
  this.name = 'ReadError';
  this.stack = cause.stack;
}

function readData() {
  var data = '{ bad data }';

  try {
    // ...
    JSON.parse(data);
    // ...
  } catch (e) {
    // ...
    if (e.name == 'URIError') {
      throw new ReadError("Ошибка в URI", e);
    } else if (e.name == 'SyntaxError') {
      throw new ReadError("Синтаксическая ошибка в данных", e);
    } else {
      throw e; // пробрасываем
    }
  }
}

try {
  readData();
} catch (e) {
  if (e.name == 'ReadError') {
    alert( e.message );
    alert( e.cause ); // оригинальная ошибка-причина
  } else {
    throw e;
  }
}
