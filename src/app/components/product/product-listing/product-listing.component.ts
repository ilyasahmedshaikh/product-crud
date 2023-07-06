import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/core/config/config.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {

  data: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private config: ConfigService
  ) { }
    
  ngOnInit(): void {
    this.getData();
  }

  onEdit(item: any) {
    this.router.navigate(['/product/edit'], { state: item })
  }

  getData() {
    this.http.get(this.config.endpoint).subscribe(res => {
      this.data = res;
    })
  }
}
