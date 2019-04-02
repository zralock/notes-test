import { Component, OnInit } from '@angular/core';
import { NoteContent } from '../note-content';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-note-create',
  template: `
    <h3>Create new note</h3>

    <div *ngIf="created">
      <div class="alert alert-success" role="alert">{{'alert.success-create' | translate}}</div>
    </div>

    <app-note-form [isNew]="true" [noteContent]="noteContent" (submit)="createNote($event)">
    </app-note-form>

    <button class="btn btn-primary" class="btn btn-primary" uiSref="note">{{'button.back-to-list' | translate}}</button>
    <button class="btn" *ngIf="created" uiSref="note-detail" [uiParams]="{ noteId: noteId }">{{'button.note-detail' | translate}}</button>
  `,
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {

  noteContent: NoteContent = {title: ''};

  noteId: number = null;

  created = false;

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {
  }

  createNote() {
    this.noteService.createNote(this.noteContent).subscribe(note => {
      this.noteId = note.id;
      this.created = true;
    });
  }

}
