import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-note-edit',
  template: `
    <div class="alert alert-success" role="alert" *ngIf="updated">{{'alert.success-edit' | translate}}</div>

    <app-note-form [isNew]="false" [noteContent]="note" (submit)="updateNote($event)">
    </app-note-form>


    <button class="btn btn-primary" uiSref="note">{{'button.back-to-list' | translate}}</button>
  `,
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

  @Input()
  note: Note;

  updated = false;

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {
  }

  updateNote() {
    this.noteService.updateNote(this.note).subscribe(note => {
      this.updated = true;
    });
  }
}
