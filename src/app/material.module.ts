import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';

const modules = [MatSlideToggleModule, MatIconModule, MatInputModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
