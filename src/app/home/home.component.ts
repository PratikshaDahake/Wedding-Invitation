import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


user:any
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getusers()
  }
  getusers() {
    this.api.getdata().subscribe({
      next: (res: any) => {
        
        if(res.success)
        {
          this.user=res.data;
          console.log(this.user)
          
          
    }

      },
      error: (err: any) => {
        console.log(err);


      }

    })
  }
}
