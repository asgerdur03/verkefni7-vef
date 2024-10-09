/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const ord = split(str);

    let lengst = ord[0];

    for (let i of ord) {
      if (i.length > ord[0].length) {
        lengst = i;
      }
    }
    return lengst;
  }

  return null;

  // Útfæra
}
console.assert(longest('hello big world!')=== 'world!', 'longest: Skilar lengsta orðinu');
console.assert(longest()=== null, 'longest: Skilar null ef ekki orð'); 
console.assert(longest('')=== '', 'longest: Skilar tómum streng ef orð tómt');
console.assert(longest('firsta annað!') === 'firsta', 'longest: Skilar fyrsta orðinu ef  mörg eru jafnlöng');


function shortest(str) {
  if (isString(str)) {
    const ord = split(str);

    let styst = ord[0];

    for (let i of ord) {
      if (i.length < ord[0].length) {
        styst = i;
      }
    }
    return styst;
  }

  return null;
  // Útfæra
}
console.assert(shortest('hello big world!')=== 'big', 'shortest: Skilar stysta orðinu');
console.assert(shortest()=== null, 'shortest: Skilar null ef ekki orð'); 
console.assert(shortest('')=== '', 'shortest: Skilar tómum streng ef orð tómt');
console.assert(shortest('firsta annað!') === 'firsta', 'shortest: Skilar fyrsta orðinu ef  mörg eru jafnlöng');


function reverse(str) {
  if (isString(str)) {
    return str.split('').reverse().join('');
  }
  return null;
}
console.assert(reverse('hello') === 'olleh', 'reverse: snýr við einfölsum streng');
console.assert(reverse(null) === null, 'reverse: Ef ekki strengur, skila null');

function palindrome(str) {
  const rev = reverse(str);

  if (isString(str)) {
    if (str === ''){
      return false;
    }
    if (rev === str) {
    return true;
    }
  }
  return false;

}
console.assert(palindrome('racecar') === true, 'palindrome: Skilar true ef strengur er palindrome');
console.assert(palindrome('hello') === false, 'palindrome: Skilar false ef strengur er ekki palindrome');
console.assert(palindrome(null) === false, 'palindrome: Ef ekki strengur, skila null');
console.assert(palindrome('')=== false, 'palindrome: Skilar false ef strengur er tómur');

function vowels(str) {
  if(!isString(str)){
    return 0;
  }
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(VOWELS.includes(str[i])){
      count++;
    }
  }
  return count; 
}

console.assert(vowels('halló') === 2, 'vowels: Skilar 2 ef strengur hefur 2 sérhjóða');
console.assert(vowels(null) === 0, 'vowels: Ef ekki strengur, skila 0');
console.assert(vowels('hhhh') === 0, 'vowels: Skilar 0 ef strengur hefur enga sérhjóða');

function consonants(str) {
  if(!isString(str)){
    return 0;
  }
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(CONSONANTS.includes(str[i])){
      count++;
    }
  }
  return count; 
  
}
console.assert(consonants('halló') === 3, 'consonants: Skilar 3 ef strengur hefur 3 samhljóða');
console.assert(consonants(null) === 0, 'consonants: Ef ekki strengur, skila 0');
console.assert(consonants('aaa') === 0, 'consonants: Skilar 0 ef strengur hefur enga samhljóða');


//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
}
