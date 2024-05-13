/* Bayonot turi
Ba'zan siz TypeScript-dan ko'ra qiymat haqida ko'proq biladigan vaziyatga tushib qolasiz. Bu, odatda, ba'zi bir ob'ekt turi joriy turiga qaraganda aniqroq bo'lishi mumkinligini bilganingizda sodir bo'ladi.

Tur tasdiqlari kompilyatorga “Ishoning, men nima qilayotganimni bilaman” deyish usulidir. Turni tasdiqlash boshqa tillardagi turdagi translyatsiyaga o'xshaydi, lekin u hech qanday maxsus tekshirish yoki ma'lumotlarni qayta tuzishni amalga oshirmaydi. U bajarilish vaqtiga ta'sir qilmaydi va faqat kompilyator tomonidan qo'llaniladi. TypeScript siz, dasturchi barcha kerakli maxsus tekshiruvlarni amalga oshirgan deb taxmin qiladi.

Turga oid tasdiqlar ikki shaklga ega.

Ulardan biri as sintaksisi: */


let myApp: unknown = "Rustam"

const myCreaterApp: number = (myApp as string).length