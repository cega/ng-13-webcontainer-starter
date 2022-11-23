import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPopperjsModule } from 'ngx-popperjs';
// Material - START
import { MatRadioModule } from '@angular/material/radio';
// Material - END
import { AppComponent } from './app.component';
import { TourWizardModule } from 'ngx-tour-wizard';
import { NgTabulatorComponent} from './ng-tabulator/ng-tabulator.component';
import { HelloTabulatorComponent} from './hello-tabulator.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatRadioModule,
    NgxPopperjsModule,
    TourWizardModule,
  ],
  declarations: [AppComponent, NgTabulatorComponent, HelloTabulatorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
