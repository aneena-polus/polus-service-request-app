import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {

  	constructor( public _dialogRef: MatDialogRef<ConfirmDialogComponent>,
       			 @Inject(MAT_DIALOG_DATA) public data: any ) {}

    public onConfirm(): void {
        this._dialogRef.close('confirm');
    }

    public onDismiss(): void {
        this._dialogRef.close(false);
    }
}
