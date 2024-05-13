// Agar Funskiya hech narsa qaytarmasa ("void") ishlatilinadi
function getName(): void {
    console.log("Salom")
}

const getHome = (): void => {
    console.log("no Return")
    // Type 'string' is not assignable to type 'void' Return Bolmasligi Kerak.
    // return("Salom")
}

//  Togri uslub
const getter = (): void => {
    console.log("Togri ish boldi Qovun")
}


// ============================ NEVER type

/* Hech qachon
Hech qachon turi hech qachon uchramaydigan qiymatlar turini ifodalaydi. Masalan, har doim istisno qiluvchi yoki hech qachon natija qaytarmaydigan funksiya ifodasi yoki strelka funksiya ifodasi uchun qaytish turi hech qachon emas. O'zgaruvchilar, shuningdek, hech qachon to'g'ri bo'lishi mumkin bo'lmagan har qanday turdagi cheklovlar bilan toraytirilganda hech qachon tipga aylanadi.

Tur hech qachon pastki tur emas va har bir turga tayinlanishi mumkin; ammo, hech bir tur subtipi emas yoki hech qachon tayinlanishi mumkin emas (hech qachon o'zidan tashqari). Hatto birontasini ham hech qachon tayinlab bo'lmaydi.

Hech qachon qaytmaydigan funktsiyalarga misollar: */


const neverFunction = (name: string): never  => {
    throw new Error("This function never returns!");
}

// Inferred return type is never
function fail() {
    return Error("Something failed");
  }

  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) {}
  }



const calc = (numberOne: number , numberTwo: number): void => {
    console.log(numberOne + numberTwo)
}

calc(10 , 5)




