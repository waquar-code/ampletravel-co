import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const modules = [MatSlideToggleModule, MatIconModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
