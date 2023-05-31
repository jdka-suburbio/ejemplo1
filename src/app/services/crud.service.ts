import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: Firestore ) { }

  agregar(registro: any): Promise<any> {
    return this.firestore.collection('registros').add(registro);
  }

  getRegistros(): Observable<any> {
    return this.firestore.collection('registro', (ref:any) => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminar(id: string): Promise<any> {
    return this.firestore.collection('registros').doc(id).delete();
  }

  getRegistro(id: string): Observable<any> {
    return this.firestore.collection('registros').doc(id).snapshotChanges();
  }
  
  actualizar(id: string, data:any): Promise<any> {
    return this.firestore.collection('registros').doc(id).update(data);
  }
}
