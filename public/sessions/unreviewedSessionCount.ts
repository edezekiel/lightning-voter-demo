angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  value: number;
  
  constructor(private sessionsService, private currentIdentity) {
    this.value = 0;
  }
  
  updateUnreviewedSessionCount() {
    this.sessionsService.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .then(data => {
      this.value = data.count;
    })
  }
})