import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private router:Router;
  private authService:AuthenticationService;

  constructor(router: Router, authService:AuthenticationService) {
    this.router = router;
    this.authService = authService;
   }

  ngOnInit(){
  }

   validateSignIn(username:string,password:string){

      if (username && password){
      //fire rest api to validate
      let data = this.authService.login(username,password).pipe(first()).subscribe(
        data => {
          this.router.navigate(['dashboard']);
          return data;
      });
    }else {
      alert("username & password is empty");
    }
  }

}
