import { VariableBinding } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register: FormGroup;
  submitted = false;
  id: string | null;
  titulo = 'Agregar'
  constructor(private fb: FormBuilder, private _registroService: CrudService, private router: Router,
    private toastr: ToastrService, aRoute: ActivatedRoute) {
    this.register = this.fb.group({
      descripcion1: ['', Validators.required],
      descripcion2: ['', Validators.required],
      descripcion3: ['', Validators.required],
      descripcion4: ['', Validators.required]
    })
    this.id = aRoute.snapshot.paramMap.get('id');
  }

  

  ngOnInit(): void {
    this.esEditar()
  }

  agregarEditar() {
    this.submitted = true;
    if (this.register.invalid) {
      return;
    }
    if(this.id === null) {
      this.agregar()
    }else {
      this.editar(this.id)
    }
  }

  agregar() {
    const registro: any = {
      desc1: this.register.value.descripcion1,
      desc2: this.register.value.descripcion2,
      desc3: this.register.value.descripcion3,
      desc4: this.register.value.descripcion4,
      create: new Date(),
      modified: new Date()
    }

    this._registroService.agregar(registro).then(()=>{
      this.toastr.success('success!!!', 'registro correcto')
      this.router.navigate(['/list'])
    }).catch(() => {
      console.log("error");
    })
  }

  editar(id:string){
    const registro: any = {
      desc1: this.register.value.descripcion1,
      desc2: this.register.value.descripcion2,
      desc3: this.register.value.descripcion3,
      desc4: this.register.value.descripcion4,
      modified: new Date()
    }
    this._registroService.actualizar(id, registro).then(()=> {
      this.toastr.info('success', 'modificacion correrta')
      this.router.navigate(['/list'])
    })

  }
  esEditar() {
    this.titulo = 'Modificar'
    if(this.id !== null) {
      this._registroService.getRegistro(this.id).subscribe(data => {
        this.register.setValue({
          desc1: data.payload.data()['descripcion1'],
          desc2: data.payload.data()['descripcion2'],
          desc3: data.payload.data()['descripcion3'],
          desc4: data.payload.data()['descripcion4']
        })
        
      })
    }
  }
}
