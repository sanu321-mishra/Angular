import { Component, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  //for hetting from child to parrent

  // @Output() newItemEvent=new EventEmitter<string>();

  //for getting from parent to child

  @Input() public parentdata:any;

  constructor() { }

  ngOnInit(): void {
  }

  // addNewItem(value:string){
  //   this.newItemEvent.emit(value);
  // }

}
