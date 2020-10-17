import { Component, OnInit, ViewChildren } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HomeService} from '../home.service';
import { Product } from '../home.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  @ViewChildren('slides') slides: IonSlides;
  selectedSlide : any;
  loadedProduct: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: HomeService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) { return; }
      const productId = paramMap.get('productId');
      this.loadedProduct = this.productService.getProduct(productId);
    })
  }

  ionSlideChange(slides){
    this.selectedSlide = slides;
  }
}
