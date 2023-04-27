import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tambah-catatan',
  templateUrl: './tambah-catatan.component.html',
  styleUrls: ['./tambah-catatan.component.scss'],
})
export class TambahCatatanComponent {
  time = '';
  times:any;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(f: NgForm) {
    console.log(f.value);

    f.value.time = new Date(
      f.value.time.year,
      f.value.time.month,
      f.value.time.day
    );

    console.log(f.value);

    const today = new Date();
    this.times = new NgbDate(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );

    console.log(this.times);

    this.http
      .post('http://localhost:8080/api/v1/demo-controller/add-time', f.value)
      .subscribe((response: any) => {
        console.log(response);
        this.router.navigate(['/catatan-perjalanan']);
      });
  }
}
