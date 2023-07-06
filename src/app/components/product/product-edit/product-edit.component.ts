import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  productForm: any = FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      color: ['#ffffff', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      featured: [false]
    });
  }

  onEditProduct(form: FormGroup) {
    console.log(form.value);
  }
}
