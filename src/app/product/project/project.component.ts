import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  items=["oil"];
  options=["Pulses","Oil","Vegetables","fruits"]
  constructor() { }

  ngOnInit(): void {
  }
  OnChange(option:string,checked:boolean)
  {
    if(checked && this.items.indexOf(option)<0)
    {
      this.items=[...this.items,option]
      .sort((a,b)=>this.options.indexOf(a)>
      this.options.indexOf(b)?1:-1)
    }
  }


 

}
