import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const mes_API = 'http://localhost/test/message.php';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getMes(): Observable<any>{
    return this.http.get(mes_API);
  }

  addMes(content: string):void{
    const headers = new HttpHeaders({ 'content-type': 'application/json'}) ;
    const id = sessionStorage.getItem('user');
    const now:string = new Date().toLocaleString().slice(0, 19).replace('上午', ' ').replace('下午',' ').replace('T',' ').replace('/','-').replace('/','-');

    const info: any = {"id": id, "content":content,"time":now};
    this.http.post(mes_API, info,{'headers':headers}).subscribe(
      success=>{
        location.reload();
        
    });
  }
}
