import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RegistrationDialogComponent } from 'src/app/registration/registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent {

  constructor(public dialogRef: MatDialogRef<RegistrationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { token: string }) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
