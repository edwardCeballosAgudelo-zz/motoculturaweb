import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TipoService {

  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello ProductServicesProvider Provider');
  }

  public getTypeNormas() {
    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });

    const optionspost = new RequestOptions({
       headers: this.headersPost
    });

    return new Promise ((resolve, reject) => {
      this.http.get('https://api-rest-edward.herokuapp.com/api/norma', optionspost)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        resolve(err);
      });
    });
  }

}
