import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { environment } from 'src/environments/environment';

const base_urls= environment.base_urls;
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

    get imagenUrl(){

      if(!this.img){
        return `${base_urls}/uploads/no-img.png`;
      }else if(this.img){
          return `${base_urls}${this.img}`
        }
        return `${base_urls}/uploads/no-img.png`;
    }

    get User(){
      if(this.nombre){
        return this.nombre
      }else{
        return 'sin nombre'
      }
    }
}