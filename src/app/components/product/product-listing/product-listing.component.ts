import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {

  data: any = [
    {
      id: 1,
      img: 'https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-landing-pages/adidas/2023/spring/deluxe_story2.jpg',
      name: 'Adidas Shoes',
      color: 'White, Black',
      price: '$15',
    },
    {
      id: 2,
      img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2021_14/3463208/210408-nike-lil-nas-satan-shoe-ac-635p.jpg',
      name: 'Nike Shoes',
      color: 'Red, Black',
      price: '$25',
    },
    {
      id: 3,
      img: 'https://i.pinimg.com/736x/e1/fb/2c/e1fb2c0676b0070fc00367593a01c9b2--basketball-equipment-nike-basketball.jpg',
      name: 'Under Armour',
      color: 'Black, Blue, Green',
      price: '$40',
    },
    {
      id: 4,
      img: 'https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-landing-pages/adidas/2023/spring/deluxe_story2.jpg',
      name: 'Adidas Shoes',
      color: 'White, Black',
      price: '$15',
    },
    {
      id: 5,
      img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2021_14/3463208/210408-nike-lil-nas-satan-shoe-ac-635p.jpg',
      name: 'Nike Shoes',
      color: 'Red, Black',
      price: '$25',
    },
    {
      id: 6,
      img: 'https://i.pinimg.com/736x/e1/fb/2c/e1fb2c0676b0070fc00367593a01c9b2--basketball-equipment-nike-basketball.jpg',
      name: 'Under Armour',
      color: 'Black, Blue, Green',
      price: '$40',
    },

  ];

  constructor(
  ) { }
    
  ngOnInit(): void {
  }  
}
