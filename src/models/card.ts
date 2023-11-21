export default class Card{
    id:number;
    title:string;
    photo:string
    type:string;
    date:string;


    constructor(id:number,title:string,photo:string,type:string,date:string){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.title =title,
        this.photo=photo,
        this.type=type,
        this.date=date
    }
}