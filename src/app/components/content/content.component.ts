import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  username = 'Michael Hansen';
  pendingTasks = 1;

  constructor() {}

  ngOnInit(): void {}
}
