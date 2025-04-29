import { Component, ElementRef, ViewChild } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  standalone: false,
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
  @ViewChild('closeModalBtn') closeModalBtn!: ElementRef;
  staff: any[] = [];
  page = 1;

  constructor(private global: StaffService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.global.getStaff().subscribe(res => {
      console.log(res.message)
      this.staff = res.message
    }, (err) => {
      this.toastr.error(err.error.message)
    })
  }
  addForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.min(3)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required])
  })
  isSubmitted: boolean = false
  get formControl() {
    return this.addForm.controls.email
  }
  handlerAdd() {
    this.isSubmitted = true
    if (this.addForm.valid) {
      this.global.addStaff(this.addForm.value).subscribe(res => {
        this.toastr.success(res.message)
        this.global.getStaff().subscribe(res => {
          console.log(res.message)
          this.staff = res.message
        }, (err) => {
          this.toastr.error(err.error.message)
        })
        this.closeModalBtn.nativeElement.click();
      }, (err) => {
        this.toastr.error(err.error.message)
      })
    }
  }
}
