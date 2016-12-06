import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'blog', component: BlogComponent},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
