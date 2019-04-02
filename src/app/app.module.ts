import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import { NoteFormComponent } from './notes/note-form/note-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';
import { UIRouterModule } from '@uirouter/angular';
import { Transition } from '@uirouter/core';
import { NoteService } from './note.service';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


/** States */

const states = [
  { name: 'note', url: '/?deleted',  component: NoteListComponent,
    resolve: [
      {
        token: 'noteList',
        deps: [NoteService],
        resolveFn: noteService => noteService.listNotes().toPromise()
      },
      {
        token: 'deleted',
        deps: [Transition],
        resolveFn: (trans) => trans.params().deleted || 0
      }
    ]
  },
  { name: 'note-detail', url: '/note-detail/:noteId',  component: NoteDetailComponent,
    resolve: [
      {
        token: 'note',
        deps: [Transition, NoteService],
        resolveFn: (transition, noteService) => noteService.getNote(transition.params().noteId).toPromise()
      }
    ]},
  { name: 'note-create', url: '/note-create',  component: NoteCreateComponent},
  { name: 'note-edit', url: '/note-edit/:noteId',  component: NoteEditComponent,
    resolve: [
      {
        token: 'note',
        deps: [Transition, NoteService],
        resolveFn: (transition, noteService) => noteService.getNote(transition.params().noteId).toPromise()
      }
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteDetailComponent,
    NoteFormComponent,
    NoteEditComponent,
    NoteCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    UIRouterModule.forRoot({ states }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
