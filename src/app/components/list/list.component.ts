import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, collectionData } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  registros: any[] = [];

  constructor(private _listService: CrudService, private toastr: ToastrService) {
  
  }

  ngOnInit(): void {
    this.getRegistros();
  }

  getRegistros() {
    this._listService.getRegistros().subscribe(data => {
      this.registros = [];

      data.forEach((element: any) => {
        this.registros.push(
          {
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          }
        )
      });
    });
  }
  eliminar(id:string) {
    this._listService.eliminar(id).then(() => {
      console.log('success!')
      this.toastr.error('success!!!', 'eliminacion correcta')
      
    }).catch( () => {
      console.log('error')
    })
  }
  
}
