import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {
public totalUsuarios:number = 0;
public usuarios : usuario[]= [];
public desde : number= 0;
public cargando : boolean= true;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
   this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde)
    .subscribe(({total,usuarios}) =>{
      this.totalUsuarios = total;
      this.usuarios= usuarios;
      this.cargando = false;
    })
  }
cambiarPagina(valor:number){
  this.desde += valor;
  
   if(this.desde<0){
     this.desde = 0;
   }else if(this.desde > this.totalUsuarios){
     this.desde -= valor;
   }

   this.cargarUsuarios();
    
}
buscar (termino : string){

  this.usuarioService.buscar('usuarios',termino)
  .subscribe(resultados=>{
    this.usuarios = resultados;

  });
}

eliminarUsuario(usuario: usuario){
  
  Swal.fire({
    title: 'Are you sure?',
    text: "Esta seguro de borrar!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
       usuario.uid
      )
    }
  })

}

}
