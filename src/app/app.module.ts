import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './core/component/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    CoreModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([{
      path: '', redirectTo: 'courses' ,  pathMatch: 'full'
    },
    {
      path: '**', component: Error404Component
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
