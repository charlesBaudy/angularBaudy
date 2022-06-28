import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title!: string;
  users$!: Observable<any[]>;
  hide!: boolean;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.title = 'home';
    this.users$ = this.dataService.getUsers();
    this.hide = false;
  }

  onHide(){
    this.hide = true;
    console.log(this.hide);
  }
  onShow() {
    this.hide = false;
    console.log(this.hide);
  }

}
