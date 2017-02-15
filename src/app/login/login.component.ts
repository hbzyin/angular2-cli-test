import {Component, OnInit, Inject} from '@angular/core';

//@Component是Angular提供的装饰器函数，用来描述Compoent的元数据
//其中selector是指这个组件的在HTML模板中的标签是什么
//template是嵌入（inline）的HTML模板，如果使用单独文件可用templateUrl
//styles是嵌入（inline）的CSS样式，如果使用单独文件可用styleUrls
@Component({
  selector: 'app-login',
  template: `
    <div>
      <!--<input type="text" #username >-->
      <!--<input type="text" #password>-->
      <!--<button (click)="onClick(username.value,password.value)">Login</button>-->
      
      <input type="text" [(ngModel)]="username" required #name='ngModel' minlength="3">
      {{name.valid}}
      <div *ngIf="name.errors?.required">this is required</div>
      <div *ngIf="name.errors?.minlength">should be at least 3 charactors</div>
      <input type="text" [(ngModel)]="password" required #pwd='ngModel'>
      {{pwd.errors|json}}
      <div *ngIf="pwd.errors?.required">this is required</div>
      <button (click)="onClick()">提交</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  //1.声明成员变量，其类型为AuthService
  // service: AuthService;
  username = '';
  password = '';

  constructor(@Inject('auth') private service) {
    //2.构造服务，AuthService
    // this.service = new AuthService();
  }

  ngOnInit() {
  }

  onClick() {
    //3. 调用服务AuthService；
    console.log(this.service.loginWithCredentials(this.username,this.password))
  }
}
