
//  InterFace Type

interface IProduct{
    productname: string;
    price: number;
    description: string;
    status: boolean;
}

let CreateProduct = (data: IProduct): void => {
    console.log(data.productname)
}

let myData = {productname: "Telefon", price: 300, description: "Ajoyib", status: false}

CreateProduct(myData)


//  Interface ning Typedan faraqi Interface extends bola oladi misol uchun
interface IName {
    carName?: string;
}
interface ICar extends IName{
    name: string;
    country: string;

}

let getCar = (data: ICar):void => {
    console.log(data.carName)
}

getCar({name: "Rustam" , country: "Salom" })





interface IInitalSatet {
    songs?: string[],
    count?: number,
    currentPage?: number,
    searchedSong?: string[],
    savedSongs?: string[]
    name: string
}


let myStateToDispatch =  (data:IInitalSatet): IInitalSatet => {
    return data
}

// let StateData = {songs:["Salom","Rustam","Rustam","Rustam","Rust" ] , count: 4 , currentPage: 10 ,searchedSong: ["Songs" , "Name"]  , savedSongs: ["Alik"]}

myStateToDispatch({name: "Rustam"})













