import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent  {
public imgUrl = '';
public User = '';
  constructor(private usuarioService : UsuarioService) {
    this.imgUrl = usuarioService.usuario.imagenUrl;
    this.User = usuarioService.usuario.User;
   }

  logout(){
    this.usuarioService.logout();
  }
  
}
