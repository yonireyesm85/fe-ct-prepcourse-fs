/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = Object.entries(objeto)

   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var obj = {};
   for(var i = 0 ; i < string.length ; i++){
      if(!obj[string[i]]){
         obj[string[i]] = 0
      }
      obj[string[i]]++
   }
   var ordenarClaves = Object.keys(obj).sort()
   var objOrdenado = {}
   for(var i = 0 ; i < ordenarClaves.length ; i++){
      objOrdenado[ordenarClaves[i]] = obj[ordenarClaves[i]]
   }

   return objOrdenado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var str1 = '';
   var str2 = '';
   for(var i = 0; i < string.length ; i++){
      if(string[i] === string[i].toUpperCase()){
         str1 = str1 + string[i]
      }else{
         str2 = str2 + string[i]
      }
   }

   return str1 + str2
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseAPalabras = frase.split(" ");
   var nuevaPalabra = [];
   for(var i = 0 ; i < fraseAPalabras.length; i++){
      var palabraInvertida = "";
      for(var j = fraseAPalabras[i].length - 1; j >= 0; j--){
         palabraInvertida += fraseAPalabras[i][j];
      }
      nuevaPalabra.push(palabraInvertida);
   }

   return nuevaPalabra.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = numero.toString()
   var numInvertido = '';
   for(var i = num.length - 1 ; i >= 0 ; i--){
      numInvertido += num[i]
   }

   numInvertido = parseInt(numInvertido)
   if(numero === numInvertido) return "Es capicua";
   else return "No es capicua"
}

// console.log(capicua(901));

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   // console.log(string);
   var nuevoString = '';
   for(var i = 0 ; i < string.length ; i++){
      if(string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c'){
         nuevoString += string[i]
      }
   }
   // console.log(nuevoString);
   return nuevoString
}

// deleteAbc('abcdefgh')

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var nuevoArray = arrayOfStrings.sort(function(a,b){
     return a.length - b.length 
   })

   return nuevoArray
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArray = []
   for(var i = 0 ; i < array1.length ; i++){
      for(var j = 0 ; j < array2.length ; j++){
         if(array1[i] === array2[j]){
            nuevoArray.push(array1[i])
         }
      }
   }

   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
