import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  private URL = 'http://localhost:8080/SSDBackend';

  constructor(private httpClient: HttpClient) {
  }

  get(link: string) {
    return this.httpClient.get(this.getUrl(link));
  }

  post(link: string, body: any) {
    return this.httpClient.post(this.getUrl(link), body);
  }

  delete(link: string) {
    return this.httpClient.delete(this.getUrl(link));
  }

  private getUrl(link: string) {
    if (link.indexOf('/') === 0) {
      return this.URL + link;
    }
    return this.URL + '/' + link;
  }
}
