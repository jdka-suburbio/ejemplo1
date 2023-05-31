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
    this.itemsRef.push(item);
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
        return { key, data };
      })
    );
  }
  
}
