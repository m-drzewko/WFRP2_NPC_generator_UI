import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HOST } from '../../shared/utils';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {

  protected hostUrlString = HOST;
  
  constructor(public dialogRef: MatDialogRef<RegistrationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {token: string}) { }
  
  ngOnInit(): void {
    console.log(this.data);
  }
  
  onClick(): void {
    this.dialogRef.close();
  }

}
