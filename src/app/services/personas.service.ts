import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private httpClient: HttpClient) { }

  postPersonas(Nombres:any, Apellidos:any, Edad:any): Observable<any>
  {
    const persona = 
    {
      nombres: Nombres,
      apellidos: Apellidos,
      edad: Edad
    }
    return this.httpClient.post<any>("https://api-rest-3a6f0-default-rtdb.firebaseio.com/personas.json",  persona);
  }

  updatePersonas(): Observable<any>
  {
    const persona = 
    {
      nombres: "Lucio",
      apellidos: "Flores",
      edad: 20
    }    
    return this.httpClient.put<any>("https://api-rest-3a6f0-default-rtdb.firebaseio.com/personas.json?key",  persona);
  }    
  
  deletePersonas(id:any): Observable<any>
  {
    return this.httpClient.delete(`https://api-rest-3a6f0-default-rtdb.firebaseio.com/personas/${id}.json`)
  }  

  getPersonas(): Observable<any>
  {
    return this.httpClient.get<any>("https://api-rest-3a6f0-default-rtdb.firebaseio.com/personas.json").pipe(map(res=>{return res}));
  }
}
