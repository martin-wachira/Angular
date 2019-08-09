import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.styl']

})
export class ContactsComponent implements OnInit {

  fname  = new FormControl('');
  sname = new FormControl('');
  email = new FormControl('');  

  updateDetails(){
    this.fname.setValue('mart');
    this.sname.setValue('wcr');
    this.email.setValue('wcr@gmail.com');
  }

  constructor() { }

  ngOnInit() {
  }

}
