//  Arrayni Tipizatsiya qilish birinchi uslub

let mySkills: string[] = ["React" , "JavaScript", "TypeScript"]

// Type 'number' is not assignable to type 'string'. Faqatgina Strinlik Array qabul qiladi
mySkills = [1 , 2 ,3 , 4]
// Faqatgina Stringlik Array Qabul Qiladi
mySkills = ["Html", "Css" , "Bootstrap" , "Ejs"]

//  Arrayni Tipizatsiya qilish ikkinchi uslubi

let myFavouriteNumbers: Array<number> = [0 ,1 ,3 ,4 ]

// Type 'string' is not assignable to type 'number'
myFavouriteNumbers = ["Bu Xatolik" , "Faqat number qabul qiladi"]

//  Faqatgina numberlik Array Qabul Qiladi
myFavouriteNumbers = [2 , 8 , 11]

// ============= Kortej type yani Koplik typelar

let info: [string , number] = 