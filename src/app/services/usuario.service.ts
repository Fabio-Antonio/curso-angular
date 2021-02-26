import { Injectable, NgZone } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Registerform} from '../interfaces/register-form.interface';
import {loginForm} from '../interfaces/login-form.interface';
import { environment } from 'src/environments/environment';
import {catchError, map, tap} from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { usuario } from '../models/usuario.model';
import {CargarUsuarios} from '../interfaces/cargar-usuarios.interface'

const base_url = environment.base_url;
declare const gapi:any;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
public auth2:any;
public usuario: usuario;
  constructor(private http:HttpClient,private router: Router,private ngzone: NgZone) { 
    this.googleInit();
  }


  googleInit(){
    return new Promise (resolve =>{
      gapi.load('auth2', ()=>{
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
          client_id: '786882613598-pin5rp665ujfok8siuu8rd6q5t752pt2.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          // Request scopes in addition to 'profile' and 'email'
          //scope: 'additional_scope'
        });
        resolve();
    });
    
    })
   
}

logout(){
   localStorage.removeItem('token');

    //this.auth2.signOut().then(() => {

      //this.ngzone.run(() => {
        this.router.navigateByUrl('/login');
      //})
    //});
 

}
validarToken():Observable<boolean>{
  
  return this.http.get(`${base_url}/login/renew`,{
    headers:{
      'x-token':this.token
    }
  }).pipe(
    map((resp:any)=>{
      const { email,google,nombre,role,img='',uid} = resp.usuario;
      this.usuario = new usuario(role,google,nombre,'',email,img,uid);
      localStorage.setItem('token',resp.token);
      return true;
    }),
    
    catchError(error => of(false))
  );
}

  crearUsuario(formData: Registerform){
    return this.http.post(`${base_url}/usuarios`,formData)
    .pipe(
      tap((resp: any) =>{
        localStorage.setItem('token',resp.token);
      })
    );
  }

  login(formData: loginForm){
    return this.http.post(`${base_url}/login`,formData)
    .pipe(
      tap((resp: any) =>{
        localStorage.setItem('token',resp.token);
      })
    );
  }

  loginGoogle(token){
    return this.http.post(`${base_url}/login/google`,token)
    .pipe(
      tap((resp: any) =>{
        localStorage.setItem('token',resp.token);
      })
    );
  }

get token():string{
return localStorage.getItem('token')|| '';
}

get headers(){
  return { 
    headers:{
    'x-token':this.token
  }
}
}

get uid():string{
  return this.usuario.uid||'';
}
  actualizarPerfil(data: {email:string,nombre:string, role:string}){
      data = {
        ...data,
        role: this.usuario.role

      }
    return this.http.put(`${base_url}/usuarios/${this.uid}`,data,{
      headers:{
        'x-token':this.token
      }
    })
  }

  cargarUsuarios(desde: number = 0){
    return this.http.get<CargarUsuarios>(`${base_url}/usuarios?desde=${desde}`,{
      headers:{
        'x-token':this.token
      }
    })
    .pipe(
      map( resp =>{
        const usuarios = resp.usuarios.map(
          user => new usuario(user.role,user.google,user.nombre,'',user.email,user.img,user.uid) 
        );
        return {
          total:resp.total,
          usuarios 
        }
      })
    )
  }

private transformarUsuarios( resultados: any []): usuario [] {
return resultados.map(
  user => new usuario(user.role,user.google,user.nombre,'',user.email,user.img,user.uid)
);

}

  buscar(tipo: 'usuarios'|'medicos'|'hospitales',termino : string){
     const url = `${base_url}/todo/coleccion/${tipo}/${termino}`;
      
     return this.http.get<any[]>(url,this.headers)
     .pipe(
       
       map((resp:any)=>{
          switch(tipo){
            case 'usuarios':
              
              return this.transformarUsuarios(resp.data);
            break;

            default :
            return [];
          }
       })
       
     );
  }

}
