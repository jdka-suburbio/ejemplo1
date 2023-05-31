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
    const newItem = { ...item, id: this.generateItemId() };
    this.itemsRef.push(newItem);
  }
  
  private generateItemId(): number {
    // Obtiene el último ID registrado y le suma 1
    const lastItemId = this.getLastItemId();
    const newId = lastItemId ? lastItemId + 1 : 1;
    return newId;
  }
  
  private getLastItemId(): number | null {
    // Recorre los items y obtiene el último ID registrado
    let lastItemId: number | null = null;
    this.items.subscribe(items => {
      if (items.length > 0) {
        lastItemId = items[items.length - 1].id;
      }
    });
    return lastItemId;
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
