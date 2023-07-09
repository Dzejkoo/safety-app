import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataFromStrapi, Package } from 'src/models/strapi-data.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private packages$ = new Observable<Package[]>();
  constructor(private _http: HttpClient) {}

  getPackages() {
    return (this.packages$ = this._http
      .get<DataFromStrapi>(`${environment.strapiUrl}/packages`)
      .pipe(map((resposneData) => resposneData.data)));
  }
}
