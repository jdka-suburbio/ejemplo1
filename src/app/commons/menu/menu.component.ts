import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userAuth:any = "";
  
  constructor(private auth: AuthService, private router: Router){}  

  ngOnInit() {
    this.userAuth = this.auth.getAuthFire()?.displayName;
  }

  logOut()
  {
    this.auth.logout().then(() => this.router.navigate(['/']))
    .catch((e) => console.log(e.message));
  }
}
