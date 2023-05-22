import { Component, OnInit } from "@angular/core";
import { PersonasService } from '../services/personas.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    nombres:string="";
    apellidos:string="";
    edad:number=0;

    data:any[] = [];
    dataPersonas:any[] = [];
    constructor(private personas: PersonasService, private router: Router){}  
    ngOnInit() {
      this.personas.getPersonas().subscribe((data)=>{
        this.dataPersonas = data;
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
