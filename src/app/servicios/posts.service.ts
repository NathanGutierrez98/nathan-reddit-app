
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService{
  private  url = 'https://www.reddit.com/r/all/top.json?limit=10&t=day';
  private  urlComentarios = 'https://www.reddit.com/r/all/comments/';
  constructor(private http: HttpClient) {
    
   }

  getTopPosts(){
    return this.http.get(this.url)
  }

  getComentariosPost(id: any){
    
    return this.http.get(this.urlComentarios + id + ".json?limit=10&depth=1&sort=top&showmedia=false");
   
  }

  getUrl(){
    return this.url;
  }

  
  getComentariosUrl(){
    return this.urlComentarios;
  }
}
