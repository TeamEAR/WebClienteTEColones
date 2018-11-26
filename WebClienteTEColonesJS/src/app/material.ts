import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatTableModule],
})
export class MaterialModule { }
