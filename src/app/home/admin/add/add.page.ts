import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  newProduct: FormGroup;
  type: string = null;

  constructor(
    private productService: HomeService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.newProduct = new FormGroup({
      foto1: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      type: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      nama: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      baseClock: new FormControl(null, {
        updateOn: 'change',
      }),
      boostClock: new FormControl(null, {
        updateOn: 'change',
      }),
      core: new FormControl(null, {
        updateOn: 'change',
      }),
      thread: new FormControl(null, {
        updateOn: 'change',
      }),
      speed: new FormControl(null, {
        updateOn: 'change',
      }),
      ukuran: new FormControl(null, {
        updateOn: 'change',
      }),
      chipset: new FormControl(null, {
        updateOn: 'change',
      }),
      processor: new FormControl(null, {
        updateOn: 'change',
      }),
    });
  }
 
  addProduct(){
    this.presentLoading().then(() => {
      this.productService.addProduct(this.newProduct);
      this.router.navigate(['home/admin']);
      this.addToast();
    });
  }

  async confirmAdd() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Product',
      message: 'Yakin ingin menambah produk?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Ya',
          handler: () => this.addProduct()
        }
      ]
    });

    await alert.present();
  }

  async addToast() {
    const toast = await this.toastController.create({
      message: 'Berhasil menambahkan produk',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: 'Memproses produk...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
}
