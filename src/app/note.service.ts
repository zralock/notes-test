import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './notes/note';
import { Observable } from 'rxjs';
import { NoteContent } from './notes/note-content';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  static apiUrl = 'http://private-9aad-note10.apiary-mock.com';

  static endpoints = {
    notes: NoteService.apiUrl + '/notes',
    note: id => NoteService.apiUrl + `/notes/${id}`
  };

  constructor(
    private http: HttpClient
  ) { }

  listNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(NoteService.endpoints.notes);
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(NoteService.endpoints.note(id));
  }

  createNote(noteContent: NoteContent): Observable<Note> {
    return this.http.post<Note>(NoteService.endpoints.notes, noteContent);
  }

  updateNote(note: Note): Observable<Note> {
    const noteContent = Object.assign({}, note);
    delete noteContent.id;
    return this.http.put<Note>(NoteService.endpoints.note(note.id), noteContent);
  }

  deleteNote(id: number): Observable<void> {
    return this.http.delete<void>(NoteService.endpoints.note(id));
  }
}
