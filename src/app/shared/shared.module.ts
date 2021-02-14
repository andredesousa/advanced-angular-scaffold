import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { PageComponent } from './components/page/page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [PageComponent, HeaderComponent, ButtonComponent],
  exports: [PageComponent, HeaderComponent, ButtonComponent],
})
export class SharedModule {}
