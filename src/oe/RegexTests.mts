/* eslint-disable */

/* INFO: 
  String methods for working with regexs:
    - match()
    - matchAll()
    - search()
    - replace()
  RegExp methods:
    - test()
    - exec()
*/

/* INFO: Useful Info:
  Dot -> Domain names (and general use)
  Period -> At the end of sentence
  Point -> Fractional Numbers, Decimal Point
 */

const regexObj = new RegExp('com', 'g');
const myString = 'intercom.comsalambakucomunicationincome';

console.log(myString.match(regexObj));
console.log(myString.search(regexObj));
console.log(myString.replace(regexObj, 'ROCKY'));

let resArray;
while (
  (resArray = regexObj.exec('intercom.comsalambakucomunicationincome')) !== null
) {
  console.log(resArray);
}
