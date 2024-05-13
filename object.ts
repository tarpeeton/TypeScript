/* Ob'ekt
ob'ekt - bu ibtidoiy bo'lmagan turni, ya'ni raqam, satr, mantiqiy, bigint, simvol, null yoki aniqlanmagan har qanday narsani ifodalovchi tur.

Object.create ob'ekt turidan foydalanib, siz API kabilarni yaxshiroq ifodalashingiz mumkin. Masalan: */



//  Bu yerda object yoki String kelishi mumkun va boshqa argunentkar qabul qilinidi
const myObject = (o: object | string): void => {}
//  Argument of type 'null' is not assignable to parameter of type 'string | object'.
myObject(null)

// Togri uslub
myObject("rustam")
myObject({name: "Rustam" , age: 17})