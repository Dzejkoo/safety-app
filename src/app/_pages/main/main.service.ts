import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ReposnePackageFromStrapi,
  Package,
  ResposneLogoFormStrapi,
  Img,
} from 'src/models/strapi-data.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private productSubject = new BehaviorSubject<Package[]>([]);
  private logosSubject = new BehaviorSubject<Img[]>([]);

  constructor(private _http: HttpClient) {
    this._fetchPackages();
    this._fetchImages();
  }

  getProduct() {
    return this.productSubject.asObservable();
  }

  getLogos() {
    return this.logosSubject.asObservable();
  }

  private _fetchPackages() {
    return this._http
      .get<ReposnePackageFromStrapi>(`${environment.strapiUrlApi}/packages`)
      .pipe(map((resposneData) => this.productSubject.next(resposneData.data)))
      .subscribe();
  }

  private _fetchImages() {
    return this._http
      .get<ResposneLogoFormStrapi>(
        `${environment.strapiUrlApi}/logos?populate=*`
      )
      .pipe(
        map((resposneData) => {
          this.logosSubject.next(resposneData.data[0].attributes.img.data);
        })
      )
      .subscribe();
  }
}
