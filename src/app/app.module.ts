import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationGuard , MsAdalAngular6Module } from 'microsoft-adal-angular6';  
import { infoService } from '../app/service/infoService'
import { HttpClientModule } from '@angular/common/http'
import { GreetingMessage } from '../app/service/azure.devicelog'



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsAdalAngular6Module.forRoot({  
      tenant: '27a8c9e2-fc36-4f12-bd7d-f0e1878e3ca8',  
      clientId: '57c9b832-fb9d-418a-bb5c-fedd2d41e1d0',  
      redirectUri: 'https://yasiru.azureedge.net/#/home',  
      endpoints: {  
        'api': '57c9b832-fb9d-418a-bb5c-fedd2d41e1d0', // this is for feteching the access token  
      },  
      navigateToLoginRequestUrl: false,  
      cacheLocation: 'localStorage',  
      postLogoutRedirectUri: 'https://yasiru.azureedge.net/#/login',  
    }),
  ],
  providers: [AuthenticationGuard,infoService,GreetingMessage],
  bootstrap: [AppComponent]
})
export class AppModule { }
