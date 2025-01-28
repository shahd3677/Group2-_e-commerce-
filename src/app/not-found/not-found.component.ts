import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: false,
  
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
 title:string="Error_404"
 imgLogo:string="/images/Error.svg"
}
