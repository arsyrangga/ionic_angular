import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private http: HttpClient, private message: NzMessageService) {}

  ngOnInit() {}

  public createMessage(msg: string, type: string): void {
    if (type == 'success') {
      this.message.success(msg);
    } else {
      this.message.error(msg);
    }
  }

  // kalau mau login pakai
  // email : arsyrangga@gmail.common
  // password : rangga105
  public async onSubmit(event: any) {
    event.preventDefault();
    const payload = {
      userID: event.target.userID.value,
      password: event.target.password.value,
    };
    this.http
      .post<any>('https://rangga.suka.click/koperasi/users/login', payload, {
        headers: {
          'content-type': 'application/json',
          clientID: 'koperasi',
        },
      })
      .subscribe((data) => {
        if (data.status) {
          this.createMessage('Berhasil Login', 'success');
        } else {
          this.createMessage('Email atau password salah', 'error');
        }
      });
  }
}
