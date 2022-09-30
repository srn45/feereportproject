import {NgModule} from '@angular/core';

import{MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ MatDatepickerModule ],
})

export class MaterialModule {}