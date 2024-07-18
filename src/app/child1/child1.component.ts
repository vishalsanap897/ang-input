import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  @Input() parent:any
 @Output() class=new EventEmitter<string>()

 addData(value:any){
  this.class.emit(value);
 }

}
