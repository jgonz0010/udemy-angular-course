export class CounterService {
  activeActions: number = 0;
  inactiveActions: number = 0;

  addCount(action: string){
    if(action === 'inactive') {
      this.inactiveActions++;
      console.log('Number of Inactive Actions To Date: ' + this.inactiveActions);
    } else if(action === 'active') {
      this.activeActions++;
      console.log('Number of Active Actions To Date: ' + this.activeActions);
    }
    console.log('Total number of Actions: ' + (this.inactiveActions + this.activeActions));
  }
}
