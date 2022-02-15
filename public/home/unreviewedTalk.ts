import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'unreviewed-talk',
  templateUrl: './unreviewedTalk.html',
})
export class UnreviewedTalkComponent {
  @Input() session: any;
  @Output() voteYes = new EventEmitter();
  @Output() voteNo = new EventEmitter();

  yes() {
    this.voteYes.emit(null);
  }

  no() {
    this.voteNo.emit(null);
  }
}
