import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'detail-panel',
  templateUrl: './detailPanel.component.html',
})
export class DetailPanelComponent implements OnChanges {
  @Input() title: string;
  @Input('collapsed') initialCollapsed: string;

  collapsed: boolean;

  ngOnChanges(): void {
    this.collapsed = this.initialCollapsed === 'true';
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }
}
