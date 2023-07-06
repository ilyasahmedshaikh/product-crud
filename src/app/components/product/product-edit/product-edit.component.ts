import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  productForm: any = FormGroup;
  data: any = {};

  constructor(
    private fb: FormBuilder,
    private router : Router
  ) {
    this.data = this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit() {
    this.formInIt();
    this.showData();
  }

  formInIt() {
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

  showData() {
    console.log(this.data);
    
    this.productForm.patchValue({
      productName: this.data.name,
      color: this.data.color,
      price: this.data.price,
      description: this.data.description,
      featured: this.data.featured,
    });
  }
}
