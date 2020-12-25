import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  @Input() public compareData;
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
