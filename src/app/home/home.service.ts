import { Injectable } from '@angular/core';
import { Product } from './home.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  productHaveStock = [];
  private product: Product[] = [
    {
      id: 'p1',
      produkType: 'CPU',
      imgUrl: ['https://www.intel.co.id/content/dam/products/hero/foreground/processor-badge-xeon-platinum-1x1.png.rendition.intel.web.293.293.png'],
      nama: 'Intel',
      model: 'Intel Xeon Platinum',
      harga: 78000000,
      stok: 15,
      baseClock: 1.5,
      boostClock: 3.5,
      jumlahCore: 28,
      jumlahThread: 56,
      speed: null,
      ukuran: null,
      chipset: null,
      processor: null,
    },
    {
      id: 'p2',
      produkType: 'GPU',
      imgUrl: ['https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=http://images.icecat.biz/img/gallery/75776965_1233461881.jpg&height=225&width=225'],
      nama: 'Gigabyte',
      model: 'Gigabyte X299X Aorus Master',
      harga: 7500000,
      stok: 15,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: null,
      ukuran: null,
      chipset: null,
      processor: null,
    },
    {
      id: 'p3',
      produkType: 'RAM',
      imgUrl: ['https://www.gskill.com/_upload/images/156283929913.png'],
      nama: 'Trident Z Neo',
      model: 'F43600C16D16GTZN',
      harga: 2500000,
      stok: 15,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: 2133,
      ukuran: 8,
      chipset: null,
      processor: null,
    },
  ];


  constructor() { }

  getAllProduct(){
    this.productHaveStock = [];
    let j = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.product.length; i++){
      if (this.product[i].stok > 0){
        this.productHaveStock[j] = this.product[i];
        j++;
      }
    }
    return [...this.productHaveStock];
  }

  getProduct(productId: string) {
    return {...this.product.find(product => {
      return product.id === productId;
    })};

  }

  addProduct(data: FormGroup){
    let DATA = {
      id: 'p' + (parseInt(this.product[this.product.length-1].id.substring(1))+1).toString(),
      produkType : data.value.type,
      imgUrl:[data.value.foto1,data.value.foto2],
      nama: data.value.nama,
      model: data.value.model,
      harga: data.value.harga,
      stok: data.value.stok,
      baseClock: data.value.baseClock,
      boostClock: data.value.boostClock,
      jumlahCore: data.value.core,
      jumlahThread: data.value.thread,
      speed: data.value.speed,
      ukuran: data.value.ukuran,
      chipset: data.value.chipset,
      processor: data.value.processor,
    }
    this.product.push(DATA)
  }

  deleteProduk(produkId){
    this.product = this.product.filter(produk => {
      return produk.id !== produkId;
    });
  }

  editProduk(produkId, editedProduk){
    return {...this.product.find(product => {
        if (product.id === produkId){
          product.nama = editedProduk['editedNama'];
          product.imgUrl = [editedProduk['editedImg1'],editedProduk['editedImg2']];
          product.model = editedProduk['editedModel'];
          product.harga = editedProduk['editedHarga'];
          product.stok = editedProduk['editedStok'];
          product.baseClock = editedProduk['editedBaseClock'];
          product.boostClock = editedProduk['editedBoostClock'];
          product.jumlahCore = editedProduk['editedCore'];
          product.jumlahThread = editedProduk['editedThread'];
          product.speed = editedProduk['editedSpeed'];
          product.ukuran = editedProduk['editedUkuran'];
          product.chipset = editedProduk['editedChipset'];
          product.processor = editedProduk['editedProcessor'];
        }
    })};
  }
}
