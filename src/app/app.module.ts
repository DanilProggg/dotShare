import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './static_components/content/content.component';
import { NavPanelComponent } from './static_components/nav-panel/nav-panel.component';
import { HeaderComponent } from './static_components/header/header.component';
import {Routes, RouterModule} from "@angular/router";
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowArticlesComponent } from './components/show-articles/show-articles.component';
import { AnyArticleComponent } from './components/any-article/any-article.component';
import { LoginComponent } from './components/login/login.component';



const appRoutes : Routes =[
  {path:'', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'create', component: CreateArticleComponent},
  {path:'articles', component:ShowArticlesComponent},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavPanelComponent,
    HeaderComponent,
    CreateArticleComponent,
    HomeComponent,
    NotFoundComponent,
    ShowArticlesComponent,
    AnyArticleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
