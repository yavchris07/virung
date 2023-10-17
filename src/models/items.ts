export default class Item{
    id:number;
    title:string;
    element:string;
    type:string;
    type1:string;
    resume:string;

    constructor(
        id:number,
        title:string,
        element:string,
        type:string,
        type1:string,
        resume:string
        ){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.title =title,
        this.element= element,
        this.type=type,
        this.type1=type1,
        this.resume=resume
    }
}