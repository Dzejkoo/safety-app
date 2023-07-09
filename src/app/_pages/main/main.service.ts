import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataFromStrapi, Package } from 'src/models/strapi-data.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private productSubject = new BehaviorSubject<Package[]>([]);

  constructor(private _http: HttpClient) {
    this._fetchPackages();
  }

  getProduct() {
    return this.productSubject.asObservable();
  }

  private _fetchPackages() {
    return this._http
      .get<DataFromStrapi>(`${environment.strapiUrl}/packages`)
      .pipe(map((resposneData) => this.productSubject.next(resposneData.data)))
      .subscribe();
  }
}
