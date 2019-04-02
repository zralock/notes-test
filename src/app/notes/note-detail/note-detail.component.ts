import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../../note.service';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-note-detail',
  template: `
    <h2 class="note-detail">{{'note.detail' | translate}}</h2>

    <div class="panel panel-default col-lg-6">
      <p>
        {{note.title}}
      </p>

      <button class="btn btn-primary note-edit" uiSref="note-edit" [uiParams]="{ noteId: note.id }">{{'button.edit-note' | translate}}</button>
      <button class="btn btn-secondary note-delete" (click)="deleteNote()">{{'button.delete-note' | translate}}</button>
    </div>

    <button class="btn" class="btn btn-primary" uiSref="note">{{'button.back-to-list' | translate}}</button>
  `,
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  @Input()
  note: Note;

  constructor(
    private noteService: NoteService,
    private stateService: StateService
  ) { }

  ngOnInit() {
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id).subscribe(() => {
      this.stateService.go('note', {deleted: 1});
    });
  }

}
