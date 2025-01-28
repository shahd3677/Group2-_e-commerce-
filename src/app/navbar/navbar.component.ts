import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  logoPage: string = "62d3960a755658580bdded8a_logo.png";
  image: string = '';
  pageTitle: string = '';
  constructor(private _GlobalServices: GlobalService, private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.image = this._GlobalServices.imgSection;
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd), // للتأكد من أن الحدث هو نهاية التنقل
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            }
            child = child.firstChild;
          }
          return 'Default Title'; // عنوان افتراضي إذا لم يكن هناك عنوان
        })
      )
      .subscribe(title => {
        this.pageTitle = title;
      });
  }
}

