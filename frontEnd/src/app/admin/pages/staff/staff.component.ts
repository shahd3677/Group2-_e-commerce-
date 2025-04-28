import { Component } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-staff',
  standalone: false,
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
  staff: any[] = [];
  page = 1;

  constructor(private global: StaffService, private toastr: ToastrService) { }

  ngOnInit() {
    this.global.getStaff().subscribe(res => {
      console.log(res.message)
      this.staff = res.message
    }, (err) => {
      this.toastr.error(err.error.message)
    })
  }
}
