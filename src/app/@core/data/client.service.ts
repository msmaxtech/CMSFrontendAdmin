import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {ClientMaster} from '../models/ClientMaster.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  @Injectable()
  export class ClientService {

    constructor(private http: HttpClient) {}

    private userUrl = 'http://localhost:8080/CommonConfig';

    public getClientMaster() {
      return this.http.get<ClientMaster>(this.userUrl + '/client/6');
    }

    // public deleteUser(user) {
    //   return this.http.delete(this.userUrl + '/'+ user.id);
    // }
    //
    // public createUser(user) {
    //   return this.http.post<User>(this.userUrl, user);
    // }

  }
