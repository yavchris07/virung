export default class Chiffer{
    id:number;
    title:string;
    type:string;
    resum:string;

    constructor(id:number,title:string,type:string,resum:string){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.title =title,
        this.type=type,
        this.resum=resum
    }
}