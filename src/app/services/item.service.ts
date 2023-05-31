import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsRef: AngularFireList<any>;
  private items: Observable<any[]>;
  private lastItemId: number = 0; // Variable para almacenar el último ID registrado

  constructor(private db: AngularFireDatabase) {
    this.itemsRef = this.db.list('/items');
    
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getItems(): Observable<any[]> {
    return this.items;
  }

  addItem(item: any): void {
    const newItem = { ...item, id: ++this.lastItemId }; // Incrementar el último ID registrado y asignarlo al nuevo item
    this.itemsRef.push(newItem);
  }
  
  private getLastItemId(): void {
    this.items.subscribe(items => {
      if (items.length > 0) {
        this.lastItemId = items[items.length - 1].id; // Obtener el último ID registrado
      }
    });
  }

  updateItem(key: string, item: any): void {
    this.itemsRef.update(key, item);
  }

  deleteItem(key: string): void {
    this.itemsRef.remove(key);
  }
  getItem(itemId: string) {
    return this.db.object(`items/${itemId}`).snapshotChanges().pipe(
      map((action) => {
        const key = action.key;
        const data = action.payload.val();
        const item = Object.assign({}, data, { key }); // Copia las propiedades del objeto `data` en un nuevo objeto `item`
        return item;
      })
    );
  }
  
}
