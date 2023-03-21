import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentMethodDetails } from 'src/app/interfaces/PaymentMethodDetails';
import { PaymentService } from 'src/app/services/payment.service';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  availablePayments: PaymentMethodDetails[] = [];
  billingAddress={firstName:'Falgun',lastName:'Thakwani',
  streetNo:'1333',streetName:'South Park', city:'Halifax',province:'NS',pincode:'B3J 2K9'}
  constructor(private dialog: MatDialog,private paymentService: PaymentService, private coreService: CoreService)
  { }

  ngOnInit(): void {
    this.coreService.updateMenuItems(["facilities", "tournament", "aboutus"], false);
    this.getPaymentMethods();
  }

  getPaymentMethods() {
    this.paymentService.getPaymentMethodDetails().subscribe((data) => {
      this.availablePayments = data;
    });
  }

  showAddPaymentDialog() {
    const dialogRef = this.dialog.open(AddPaymentDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const data = {userid: '', name: result.name, cardnumber: result.cardNumber, expirydate: result.expiryDate, cvv: result.securityCode, postalcode: result.postalCode};
        this.paymentService.addNewPaymentMethod(data).subscribe((data: any) => {
          this.coreService.showSnackBar("Payment method added successfully");
          this.getPaymentMethods();
        });
      }
    });
  }
}
