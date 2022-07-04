import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { HttpClientModule } from '@angular/common/http';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    NzMessageModule,
  ],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent],
})
export class ExploreContainerComponentModule {}
