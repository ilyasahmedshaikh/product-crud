import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

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

  onCreateProduct(form: FormGroup) {
    console.log(form.value);
  }

}
