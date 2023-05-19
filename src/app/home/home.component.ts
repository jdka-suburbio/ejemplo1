import { Component, OnInit } from "@angular/core";
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    data:any[] = [];
    dataPersonas:any[] = [];
    constructor(private personas: PersonasService){}  
    ngOnInit() {
      /*
      this.personas.postPersonas().subscribe((data)=>{
        console.log("done");
      })
      */
      this.personas.deletePersonas().subscribe((data)=>{
        console.log("done");
      })
        
      this.personas.getPersonas().subscribe((data)=>{
        this.data = data;
        console.log(this.data);
        this.data.forEach(element => {
          this.dataPersonas.push(element)
        });
        console.log(this.dataPersonas);
      })
    }
}
