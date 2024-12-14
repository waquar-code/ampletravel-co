import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';

import { MatNativeDateModule } from '@angular/material/core';

const modules = [
  MatSlideToggleModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  // MatCardModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
