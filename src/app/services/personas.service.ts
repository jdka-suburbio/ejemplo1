import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private httpClient: HttpClient) { }

  postPersonas(): Observable<any>
  {
    const persona = 
    {
      nombres: "Jose",
      apellidos: "Lopez",
      edad: 50
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
  
  deletePersonas(): Observable<any>
  {
    return this.httpClient.delete("https://api-rest-3a6f0-default-rtdb.firebaseio.com/personas.json?key")
  }  

  getPersonas(): Observable<any>
  {
    return this.httpClient.get<any>("https://api-rest-3a6f0-default-rtdb.firebaseio.com/personas.json");
  }
}
