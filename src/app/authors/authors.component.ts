import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.styl'],
  template: `
       
          <ol>
            <li *ngFor = "let author of authors">
            {{author}}
            </li>
          </ol>         
          
  `
})
export class AuthorsComponent implements OnInit {

    // title = "Authors Component"

        
    authors;

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
