import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { PaymentMethodDetails } from 'src/app/interfaces/PaymentMethodDetails';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ['id', 'name', 'cardNumber', 'expiryDate', 'securityCode', 'postalCode'];
  dataSource: PaymentMethodDetails[] = [
    {id: '1', name: 'test user', cardNumber: '111122223333', expiryDate: 'Sun, Jan 1 2023', securityCode: '123', postalCode: 'B3K 4N1'},
    {id: '1', name: 'test user', cardNumber: '111122223333', expiryDate: 'Sun, Jan 1 2023', securityCode: '123', postalCode: 'B3K 4N1'},
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showAddPaymentDialog() {
    const dialogRef = this.dialog.open(AddPaymentDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        const newPaymentDetail : PaymentMethodDetails = {id: '1', name: result.name, cardNumber: result.cardNumber, expiryDate: result.expiryDate, securityCode: result.securityCode, postalCode: result.postalCode};
        this.dataSource.push(newPaymentDetail);
        this.table.renderRows();
      }
    });
  }

}
