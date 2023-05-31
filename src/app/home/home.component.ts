import { Component, OnInit } from "@angular/core";
import { PersonasService } from '../services/personas.service';
import { Router } from "@angular/router"
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    nombres:string="";
    apellidos:string="";
    edad:number=0;

    data:any[] = [];
    dataPersonas:any[] = [];
    
    dataSourcePersonas:any[] = [];
    displayedColumns: string[] = ['apellidos', 'nombres', 'edad'];

    dataSource = new MatTableDataSource<any>();

    constructor(private personas: PersonasService, private router: Router){}  
    ngOnInit() {
      this.personas.getPersonas().subscribe((data)=>{
        this.dataPersonas = data;
        let aux = Object.entries(this.dataPersonas);
        aux.forEach((item)=>
        {
          this.dataSourcePersonas.push(item[1])
        })
        this.dataSource.data = this.dataSourcePersonas;
        console.log(this.dataSourcePersonas);
        console.log(this.dataPersonas);
      })
    }


    Borrar(id:any){
      this.personas.deletePersonas(id).subscribe((data)=>{
        console.log("done");
        window.location.reload();
      })
    }

    Guardar(){
      this.personas.postPersonas(this.nombres, this.apellidos, this.edad).subscribe((data)=>{
        console.log("done");
        window.location.reload();
      })      
    }
}
