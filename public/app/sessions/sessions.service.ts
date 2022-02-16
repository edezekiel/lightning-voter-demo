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
  }

  createNewSession(newSession) {
    return this.http
      .post('/api/sessions', newSession)
      .map((rsp: Response) => rsp.json())
      .toPromise();
  }

  getNextUnreviewedSession(userId) {
    return this.http
      .get(`/api/users/${userId}/randomUnreviewedSession`)
      .map((rsp: Response) => (rsp.text() === '' ? null : rsp.json()))
      .toPromise();
  }

  addReviewedSession(userId, sessionId) {
    return this.http
      .post('/api/users/' + userId + '/reviewSession/' + sessionId, {})
      .toPromise();
  }

  incrementVote(sessionId) {
    return this.http
      .put('/api/sessions/' + sessionId + '/incrementVote/', {})
      .toPromise();
  }

  getUnreviewedCount(userId) {
    return this.http
      .get('/api/users/' + userId + '/unreviewedSessionCount')
      .map((rsp: Response) => rsp.json())
      .toPromise();
  }
}
