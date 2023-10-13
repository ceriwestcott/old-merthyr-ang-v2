import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '@old-merthyr-ang/shared-ui';
import { NxWelcomeComponent } from './nx-welcome.component';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ProductListComponent],
  selector: 'old-merthyr-ang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'old-merthyr-ang';
}
