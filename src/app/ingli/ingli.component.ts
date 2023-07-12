import { Component, OnInit } from "@angular/core";
import { InglesService } from '../services/ingles.service';
import { Router } from "@angular/router"
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ingli',
  templateUrl: './ingli.component.html',
  styleUrls: ['./ingli.component.css']
})
export class IngliComponent implements OnInit {
  español:string="";
  english:string="";
  pronunciacion:number = 0;

  data:any[] = [];
  dataIngles:any[] = [];

  dataSourceIngles:any[] = [];
  displayedColumns: string[] = ['nro','english', 'español', 'pronunciacion','acciones'];

  dataSource = new MatTableDataSource<any>();

  constructor(private ingles: InglesService, private router: Router){}
  ngOnInit(){
    this.ingles.getIngles().subscribe((data)=>{
      this.dataIngles = data;
      let aux = Object.entries(this.dataIngles);
      aux.forEach((item)=>
      {
        item[1].acciones = "";
        this.dataSourceIngles.push(item[1])
        console.log(item);
      })
      this.dataSource.data = this.dataSourceIngles;
      console.log(this.dataSourceIngles);
      console.log(this.dataIngles);
    })
  }


  Borrar(id:any){
    this.ingles.deleteIngles(id).subscribe((data)=>{
      console.log("done");
      window.location.reload();
    })
  }

  Guardar(){
    this.ingles.postIngles(this.español, this.english, this.pronunciacion).subscribe((data)=>{
      console.log("done");
      window.location.reload();
    })
  }

  openDialog()
  {
    
  }
}
