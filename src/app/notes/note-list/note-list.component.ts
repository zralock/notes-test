import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-list',
  template: `
    <div *ngIf="deleted">
      <div class="alert alert-success" role="alert">{{'alert.success-delete' | translate}}</div>
    </div>
    
    <div class="row button-row">
      <button type="button" class="btn btn-primary" uiSref="note-create">{{'button.create-note' | translate}}</button>
    </div>

    <div class="list-group col-lg-6">
      <a *ngFor="let note of noteList" href="#" class="list-group-item list-group-item-action"
         uiSref="note-detail" [uiParams]="{ noteId: note.id }">
        {{note.title}}
      </a>
    </div>
  `,
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  @Input()
  noteList: Note[];

  @Input()
  deleted;

  constructor() { }

  ngOnInit() {
  }
}
