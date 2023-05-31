import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = []; // Array para almacenar los items
  displayedColumns: string[] = ['id', 'name', 'firstName', 'lastName', 'username', 'age', 'salary', 'actions'];

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  editItem(item: any): void {
    const itemId = item.key; // Obtén el ID del item que se desea editar
    this.router.navigate(['item-form', itemId]); // Redirige al componente 'item-form' con el ID como parámetro en la URL
  }

  deleteItem(item: any): void {
    this.itemService.deleteItem(item.key); // Llama al método deleteItem del servicio pasando la clave del item
  }

  goToCreateItem(): void {
    this.router.navigate(['item-form']);
  }
}
