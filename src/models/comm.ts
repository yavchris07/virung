export default class Comm{
    id:number;
    title:string;
    type:string;
    price:string;
    photo:string;

    constructor(id:number,title:string,type:string,price:string,photo:string){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.title =title,
        this.type=type,
        this.price=price,
        this.photo=photo
    }
}