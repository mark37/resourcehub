import { Component } from '@angular/core';
import { faFilter, faPaperPlane, faSave } from '@fortawesome/free-solid-svg-icons';
import { EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill'
import Quill from 'quill'
import Block from 'quill/blots/block';

Block.tagName = "DIV";
Quill.register(Block, true);

@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.html',
  styleUrl: './communicate.component.scss'
})
export class CommunicateComponent {
  faFilter = faFilter;
  faSave = faSave;
  faPaperPlane = faPaperPlane;

  editorContent: string = '';  // Stores the editor content
  submittedContent: string = '';  // Stores the submitted content

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  };
  blurred = false
  focused = false

  onSubmit(){
    console.log(this.submittedContent)
  }

 /*  created(event: Quill | any) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection | any) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blurred = false
  }
  nativeFocus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('native-focus', $event)
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blurred = true
  }
  nativeBlur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('native-blur', $event)
  } */
}
