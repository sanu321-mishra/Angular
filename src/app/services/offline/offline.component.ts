import { AfterViewInit, Component, OnInit,AfterContentInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css']
})

//view curser
export class OfflineComponent implements OnInit,AfterViewInit {
  @ViewChild("username")nameele:ElementRef | undefined

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.nameele?.nativeElement.focus();
  }

}
