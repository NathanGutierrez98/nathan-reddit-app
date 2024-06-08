import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../../servicios/posts.service';
import { Comentarios } from '../../interfaces/comentarios';
import {MatCardModule} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { ViewEncapsulation } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-reddit-post-nathan',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatRippleModule,MatIconModule],
  templateUrl: './reddit-post-nathan.component.html',
  styleUrl: './reddit-post-nathan.component.css', 
  encapsulation: ViewEncapsulation.None
})
export class RedditPostNathanComponent implements OnInit {



constructor(private postService: PostsService){}


posts: any[] = [];
comentariosPost: any[] = [];


ngOnInit(): void {
  this.postService.getTopPosts().subscribe((data: any) =>{
    this.posts = data.data.children.map((child: any) => child.data);
    

  })
}



mostrarComentarios(id: any){

  this.postService.getComentariosPost(id).subscribe((data: any)=>{
   
    

    if(!this.getExistenComentarios(id)){
      
     
    
    let divComentariosPadre :any = document.getElementById('comentarios_' + id);
    let arrayComentarios: [];
    arrayComentarios = data[1].data.children.map((child: any) => child.data);
  

   
   
    for (let index = 0; index < arrayComentarios.length; index++) {
      let element = arrayComentarios[index];
      
      let c: Comentarios;
      c = JSON.parse(JSON.stringify(arrayComentarios[index]));
      

      let divcomentarioHijo = document.createElement("div");
      divcomentarioHijo.className= "divComentario";
      divcomentarioHijo.id= "divComentario_" + id;

     let user = document.createElement("a");
     user.href = 'https://www.reddit.com/user/' + c.author;
     user.target = "_blank";
      let p = document.createElement("p");
      let txtComentarioAutor = document.createTextNode("@" + c.author);

      let txtComentarioCuerpo = document.createTextNode(c.body);
      user.appendChild(txtComentarioAutor);
      p.appendChild(txtComentarioCuerpo);
      divcomentarioHijo.append(user);
      divcomentarioHijo.append(p);
      
      divComentariosPadre.append(divcomentarioHijo) ;
    }
    

  }
  })
}


getExistenComentarios(id: number){
  let divComentario :any = document.getElementById('comentarios_'+id);

  if(divComentario != null && divComentario.childElementCount >1){
    divComentario.innerHTML = '';
    return true;
  }
  return false;
}

getUrlPost(){
  return this.postService.getComentariosUrl;
}
}
