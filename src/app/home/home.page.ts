import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Product } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visible: boolean = true;
  products: Product[];
  constructor(
    private productService: HomeService
  ) {}

  ngOnInit(){
    this.products = this.productService.getAllProduct();
  }
  ionViewWillEnter(){
    this.products = this.productService.getAllProduct();
  }

  toggleBtn(){
    if(this.visible){
      this.visible = false;
    }else{
      this.visible = true;
    }
  }
}
