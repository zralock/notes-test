import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteContent } from '../note-content';

@Component({
  selector: 'app-note-form',
  template: `    
    <div class="panel panel-default col-lg-6">
        <div class="form-group">
          <label for="title-input">{{'note.title' | translate}}: </label>
          <textarea id="title-input" class="form-control" [(ngModel)]="noteContent.title"></textarea>
        </div>
        <button class="btn btn-primary" (click)="submitForm()"
                [disabled]="noteContent.title.trim() === ''">{{(isNew ? 'button.create-save' : 'button.edit-save') | translate}}</button>
    </div>
  `,
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  @Input()
  noteContent: NoteContent = {
    title: ''
  };

  @Input()
  isNew: boolean;

  @Output()
  submit: EventEmitter<NoteContent> = new EventEmitter<NoteContent>();

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    this.submit.emit(this.noteContent);
  }

}
