export class Task{
    public _id: string;
    public task: string;
    public parent: string;
    public Priority: number = 0;
    public start_date: Date;
    public End_Date: Date;
    public Finished: boolean = false;
    constructor(){}
}