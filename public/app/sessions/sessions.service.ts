import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SessionsService {
  constructor(private http: Http) {}

  getSessionsByUser(userId) {
    return this.http
      .get('/api/sessions/user/' + userId)
      .map((rsp: Response) => rsp.json())
      .toPromise();
  }

  getAllSessions() {
    return this.http
      .get('/api/sessions')
      .map((rsp: Response) => rsp.json())
      .toPromise();
  }
}
