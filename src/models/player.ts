export default class Player{
    id:number;
    name:string;
    photo:string
    post:string;
    dorsal:string;


    constructor(id:number,name:string,photo:string,post:string,dorsal:string){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.name =name,
        this.photo=photo,
        this.post=post,
        this.dorsal=dorsal
    }
}
 