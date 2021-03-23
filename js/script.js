//Scrivi un programma che stampi i numeri da 1 a 100, 
//ma per i multipli di 3 stampi “Fizz” al posto del numero
//e per i multipli di 5 stampi Buzz. 
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

//programma che stampi i numeri da 1 a 100
for ( var i = 1; i < 100; i++ ) {
    var number = i;

    //FizzBuzz per i multipli di 3 e 5  
    if ( number % 3 == 0 && number % 5 == 0 ) {
      number = 'FizzBuzz';
      //Buzz per i multipli di 5  
    } else if ( number % 5 == 0 ) {
        number = 'Buzz';
      //Fizz per i multipli di 3
    } else if ( number % 3 == 0 ) {
      number = 'Fizz';
    }

    console.log(number);
}

