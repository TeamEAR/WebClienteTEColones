import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule],
})
export class MaterialModule { }
