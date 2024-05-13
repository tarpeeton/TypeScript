/* Ba'zi hollarda barcha turdagi ma'lumotlar mavjud emas yoki uni e'lon qilish taqiqlovchi harakatlarni talab qiladi. Bu TypeScript yoki uchinchi tomon kutubxonasisiz yozilgan kod qiymatlari bilan sodir bo'lishi mumkin. Bunday hollarda biz turni tekshirishdan voz kechishimiz mumkin. Buning uchun biz ushbu qiymatlarni har qanday qilib belgilaymiz: */


declare function myAnyTypeFunction(name: string , number: number): any;


const funct:string = myAnyTypeFunction("Rustam" , 2 )

/* Har qanday tur mavjud JavaScript bilan ishlashning kuchli usuli bo'lib, kompilyatsiya vaqtida turni tekshirishni bosqichma-bosqich yoqish yoki o'chirish imkonini beradi.

Noma'lumdan farqli o'laroq, har qanday turdagi o'zgaruvchilar ixtiyoriy xususiyatlarga, hatto mavjud bo'lmaganlarga ham kirishga imkon beradi. Ushbu xususiyatlar funktsiyalarni o'z ichiga oladi va TypeScript ularning mavjudligi yoki turini tekshirmaydi:*/


declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");