import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  item: any = {};
  isNewItem: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const itemId = params['id'];
      if (itemId) {
        // Obtener el item existente para editar
        this.itemService.getItem(itemId).subscribe(item => {
          this.item = item;
          this.isNewItem = false;
        });
      }
    });
  }

  saveItem(): void {
    if (this.isNewItem) {
      // Crear un nuevo item
      this.itemService.addItem(this.item);
    } else {
      // Actualizar el item existente
      console.log(this.item.key)
      this.itemService.updateItem(this.item.key, this.item);

    }

    // Redirigir al componente item-list después de guardar/enviar los datos
    this.router.navigate(['item-list']);
  }
}
