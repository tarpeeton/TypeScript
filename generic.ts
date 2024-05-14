
//  Generic Types

/* Birinchidan, generiklarning "salom, dunyo" ni amalga oshiramiz: identifikatsiya funktsiyasi. Identifikator funksiyasi o'tkazilgan har qanday narsani qaytaradigan funktsiyadir. Buni echo buyrug'iga o'xshash tarzda o'ylashingiz mumkin.

Jeneriklarsiz biz identifikatsiya funktsiyasini ma'lum bir turga tayinlashimiz kerak bo'ladi: */


// Generik Funsiyaga Qanday Type Kelsa shuning ozining Typeni Qayatrib beradi



//  <T> yani type degani  va har qanday type oz ichiga ola oladi
let  MyNameOrAge = <T> (productName: T[]): T[] => {
    console.log(productName.length)
    return productName
}

let response = MyNameOrAge(["1" , "2" , "3"])




let Persons  = <T>(arg: T[]): T[] => {
    return arg;
  }

  let myIdentity: <T>(arg: T[]) => T[] = Persons;

//   vlet TypeOfResponse: (string | number)[] bu yerda massiv string va Number typeni qabul qilyapti
let TypeOfResponse = Persons(["Salom" , "Alik"])



//  @ 2 chi Uslubi


interface GenericIdentityFn{
    <T>(arg: T): T;
  }

  function identity<T>(arg: T): T {
    return arg;
  }

  let myTwoChe: GenericIdentityFn = identity("Salom");



  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }

  loggingIdentity("Salom")