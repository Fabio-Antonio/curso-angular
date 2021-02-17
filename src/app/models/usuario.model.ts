export class usuario {
    constructor (
    public role: string,
    public google: boolean,
    public nombre : string,
    public password: string ,
    public email: string ,
    public img : string ,
    public uid?: string,
    ){}
}