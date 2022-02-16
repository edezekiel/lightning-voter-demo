import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { SessionsService } from '../app/sessions/sessions.service';

@Injectable()
export class AllSessionsResolver implements Resolve<any> {
  constructor(private sessionsService: SessionsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.sessionsService.getAllSessions();
  }
}
