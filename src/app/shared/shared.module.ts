import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandeauComponent } from './components/bandeau/bandeau.component';
import { ButtonComponent } from './components/button/button.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { ColorDirective } from './directives/color.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [BandeauComponent, ButtonComponent, TableauComponent, SelectComponent, ButtonActionComponent, ColorDirective, TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [BandeauComponent, ButtonComponent, TableauComponent, SelectComponent, ButtonActionComponent, ColorDirective]
})
export class SharedModule { }
