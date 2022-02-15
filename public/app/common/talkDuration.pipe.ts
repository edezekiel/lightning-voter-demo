import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'talkDuration' })
export class TalkDurationPipe implements PipeTransform {
  transform(duration: any, ...args: any[]) {
    return 'Duration: ' + duration + ' minutes';
  }
}
