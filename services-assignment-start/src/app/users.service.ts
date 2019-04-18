import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';


@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService){}

  switchState(id: number, state: string) {
    if(state === 'inactive') {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
    } else if(state === 'active') {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
    }
    this.counterService.addCount(state);
  }
}
