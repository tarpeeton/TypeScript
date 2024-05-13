//Ilovani yozishda biz bilmagan o'zgaruvchilar turini tasvirlashimiz kerak bo'lishi mumkin. Ushbu qiymatlar dinamik tarkibdan (masalan, foydalanuvchidan) kelib chiqishi mumkin yoki biz APIdagi barcha qiymatlarni ataylab qabul qilishimiz mumkin. Bunday hollarda biz kompilyatorga va bo'lajak o'quvchilarga bu o'zgaruvchi har qanday narsa bo'lishi mumkinligini aytadigan turni taqdim qilmoqchimiz, shuning uchun biz uni noma'lum turga tayinlaymiz.

let notSure: unknown = 3
// let notSure: unknown
notSure = "Rustam ok !!!!"




declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
const aNumber: unknown = [11, 22];
// Type 'unknown' is not assignable to type 'number'.

if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;
  // So, it cannot be a string
  const aString: string = maybe;
// Type 'boolean' is not assignable to type 'string'.
}

if (typeof maybe === "string") {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;
  // So, it cannot be a boolean
  const aBoolean: boolean = maybe;
// Type 'string' is not assignable to type 'boolean'.
}