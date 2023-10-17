export default class Transport{
    id:number;
    depart:string;
    destination:string;
    duration:string;
    photo:string;

    constructor(id:number,depart:string,destination:string,duration:string,photo:string){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.depart =depart,
        this.destination=destination,
        this.duration=duration,
        this.photo=photo
    }
}