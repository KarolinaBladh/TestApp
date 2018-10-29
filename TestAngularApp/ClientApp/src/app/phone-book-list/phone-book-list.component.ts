import { Component, OnInit } from '@angular/core';
import { PhoneownerService } from '../phoneowner.service';
import { Phoneowner } from '../phoneowner';

@Component({
  selector: 'phone-book-list',
  templateUrl: './phone-book-list.component.html',
  styleUrls: ['./phone-book-list.component.css']
})

export class PhoneBookListComponent implements OnInit {

  phoneowners: Phoneowner[] = [];

  constructor(private phoneownerService: PhoneownerService) { }

  getPhoneOwners(): void {
    this.phoneownerService.getPhoneOwners()
      .subscribe(phoneowners => this.phoneowners = phoneowners);
  }

  sortByName(): void {

  }
  sortByNumber(): void {

  }

  ngOnInit() {
    this.getPhoneOwners();
  }
}
