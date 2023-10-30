/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

*/

/* In JavaScript, ci sono diversi tipi di dati che possono essere usati:
 1.Numero (Number): Il tipo "numero" in JavaScript è usato per rappresentare tutti i tipi di numeri,
  come interi (senza decimali) e numeri decimali (con decimali), 
  come quando conti o misuri la lunghezza di qualcosa.
2.Stringa (String): Una "stringa" è una sequenza di caratteri, come le lettere dell'alfabeto o qualsiasi altro simbolo.
 Le stringhe sono usate per rappresentare testo, come un nome o una frase. Esempio, "ciao, mondo" è una stringa.
 3.Booleano (Boolean): Il tipo "booleano" può avere solo due valori: vero (true) o falso (false).
  Esempio come quando ti chiedono se hai fame (vero) o se hai freddo (falso).
  4.Null: "Null" rappresenta l'assenza di un valore. 
  È come se qualcuno ti chiedesse quale big-babol vuoi e tu rispondessi "null", significa che non vuoi big-babol.
  5.Undefined: "Undefined" viene utilizzato quando qualcosa non ha un valore assegnato.
   È come cercare qualcosa e non trovarlo; non ha un valore definito. */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = "Davide-3.5";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var risultato = 12 + 20; // 32

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* da qeullo che ho capito non si puo'fare...penso io...ci provo anche se non ho capito bene..*/

var name = "Polimeno";

console.log(name);

name = "NuovoCognome";

console.log(name);

const constName = "CognomeOriginale";

constName = "NuovoCognome"; // mi da errore booh

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var x = 12;
var risultatoSottrazione = 4 - x;
console.log(-8);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john";
var name2 = "John";
var sonoDiverse = name1 !== name2;
console.log(sonoDiverse); // Vero - true
