angular.module('app').component('home', { 
  templateUrl: './home.html',
  bindings: {
    userSessions: '='
  },
  controller: function(currentIdentity, sessionsService, 
    toastr, unreviewedSessionCount) {
      
    
    this.currentUser = currentIdentity.currentUser
    
    this.setNextSessionToReview = function() {
      sessionsService.getNextUnreviewedSession(currentIdentity.currentUser.id).then((data) => {
        this.currentSessionToReview = data;
      })
    }
    this.setNextSessionToReview();
    
    
    this.voteYes = function() {
      sessionsService.incrementVote(this.currentSessionToReview.id)
      .then(() => sessionsService.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id))
      .then(function() {
        this.setNextSessionToReview();
        
        // pull updated value
        unreviewedSessionCount.updateUnreviewedSessionCount();
      }.bind(this))
    }
    
    this.voteNo = function() {
      sessionsService.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
      .then(function() {
        this.setNextSessionToReview();

        // pull updated value
        unreviewedSessionCount.updateUnreviewedSessionCount();
      }.bind(this))
    }
  }
})