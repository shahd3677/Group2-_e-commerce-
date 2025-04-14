import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-admin',
  standalone: false,

  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private global: GlobalService) {
    this.global.navbarFlag = false;
    this.global.footerFlag = false;
  }
  ngOnDestroy() {
    this.global.navbarFlag = true;
    this.global.footerFlag = true;
  }
}
