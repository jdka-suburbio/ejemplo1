import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InglesService {

  constructor(private httpClient: HttpClient) { }

  postIngles(Español:any, English:any, Pronunciacion:any): Observable<any>
  {
    const ingle = 
    {
      español: Español,
      english: English,
      pronunciacion: Pronunciacion
    }
    return this.httpClient.post<any>("https://api-rest-7d001-default-rtdb.firebaseio.com/ingles.json",  ingle);
  }

  updateIngles(): Observable<any>
  {
    const ingle = 
    {
      español: "Lucio",
      english: "Flores",
      pronunciacion: 20
    }    
    return this.httpClient.put<any>("https://api-rest-7d001-default-rtdb.firebaseio.com/ingles.json?key",  ingle);
  }    
  
  deleteIngles(id:any): Observable<any>
  {
    return this.httpClient.delete(`https://api-rest-7d001-default-rtdb.firebaseio.com/ingles/${id}.json`)
  }  

  getIngles(): Observable<any>
  {
    return this.httpClient.get<any>("https://api-rest-7d001-default-rtdb.firebaseio.com/ingles.json").pipe(map(res=>{return res}));
  }
}
