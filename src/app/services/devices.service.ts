import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class DeviceService {
  
    public device$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public url = `${environment.url}/devices`;
  
    constructor(private readonly http: HttpClient) {
    }
  
    public postDevice(data) {
      return this.http.post(this.url, data);
    }

    public getDevice(id){
        return this.http.get(`${this.url}/${id}`)
        .pipe(
          map((res) => {
            this.device$.next(res);
          })
        );
    }
  
    public getDevices() {
      return this.http.get(this.url)
        .pipe(
          map((res) => {
            this.device$.next(res);
          })
        );
    }
  
    public removeDevice(id) {
      return this.http.delete(`${this.url}/${id}`)
        .pipe(
          switchMap((res) => {
            return this.getDevices();
          })
        );
    }
  
  }