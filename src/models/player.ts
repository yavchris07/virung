export default class Player{
    id:number;
    name:string;
    photo:string
    post:string;
    dossard:string;
    age:string;
    taille:string;


    constructor(id:number,name:string,photo:string,post:string,dossard:string,age:string,taille:string){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.name =name,
        this.photo=photo,
        this.post=post,
        this.dossard=dossard,
        this.age=age,
        this.taille=taille
    }
}
 