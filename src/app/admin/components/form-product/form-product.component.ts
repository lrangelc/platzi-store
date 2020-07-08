import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from './../../../core/services/products/products.service';
import { CustomValidators } from './../../../utils/custom-validators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, CustomValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  get priceField() {
    return this.form.get('price');
  }

  uploadFile(event): void {
    const file = event.target.files[0];
    const name = `/images/products/${file.name}`;
    const fileRef = this.angularFireStorage.ref(name);
    const task = this.angularFireStorage.upload(name, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe((url) => {
            this.form.get('image').setValue(url);
          });
        })
      )
      .subscribe();
  }
}
