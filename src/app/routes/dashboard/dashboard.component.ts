import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  array = ['./assets/img/header-01.jpg', './assets/img/header-02.jpg', './assets/img/header-03.jpg', './assets/img/header-04.jpg'];
}
