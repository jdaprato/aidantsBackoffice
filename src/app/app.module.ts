import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './layouts/components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { TableListComponent } from './share/table-list/table-list.component';
import { TypographyComponent } from './share/typography/typography.component';
import { IconsComponent } from './share/icons/icons.component';
import { MapsComponent } from './share/maps/maps.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { UpgradeComponent } from './admin/upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminComponent } from './layouts/admin/admin.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
