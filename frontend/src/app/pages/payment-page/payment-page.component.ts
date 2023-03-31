import { CoreService } from './../../services/core.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentMethodDetails } from 'src/app/interfaces/PaymentMethodDetails';
import { PaymentService } from 'src/app/services/payment.service';
import { AddPaymentDialogComponent } from '../add-payment-dialog/add-payment-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  availablePayments: PaymentMethodDetails[] = [];
  billingAddressForm: FormGroup;
  constructor(private fb: FormBuilder, private dialog: MatDialog, private paymentService: PaymentService,  private route: Router, private coreService: CoreService) {
    this.billingAddressForm = this.fb.group({
      name: ['', [Validators.required]],
      streetNumber: ['', [Validators.required]],
      aptNumber: [''],
      city: ['', [Validators.required]],
      province: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]]
    });
  }

  ngOnInit(): void {
    this.coreService.updateMenuItems(["home", "facilities", "tournament", "aboutus"], false);
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
        const data = { userid: '', name: result.name, cardnumber: result.cardNumber, expirydate: result.expiryDate, cvv: result.securityCode, postalcode: result.postalCode };
        this.paymentService.addNewPaymentMethod(data).subscribe((data: any) => {
          this.coreService.showSnackBar("Payment method added successfully");
          this.getPaymentMethods();
        });
      }
    });
  }

  makePayment() {
    console.log("Payment button");
    this.paymentService.makePayment({"userid":localStorage.getItem("userid")}).subscribe((data:any)=>{
     this.route.navigate(['payment-complete']);
    })
  }

  get name() { return this.billingAddressForm.get('name'); }
  get streetNumber() { return this.billingAddressForm.get('streetNumber'); }
  get aptNumber() { return this.billingAddressForm.get('aptNumber'); }
  get city() { return this.billingAddressForm.get('city'); }
  get province() { return this.billingAddressForm.get('province'); }
  get pincode() { return this.billingAddressForm.get('pincode'); }
}
