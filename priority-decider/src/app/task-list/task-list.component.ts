import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList: FormGroup;
  firstTask: string;
  secondTask: string;
  thirdTask: string;

  constructor() { }

  ngOnInit() {
    this.taskList = new FormGroup({
      task1: new FormControl(''),
      task2: new FormControl(''),
      task3: new FormControl('')
    });

    this.firstTask = '';
    this.secondTask = '';
    this.thirdTask = '';
  }

  onSubmit() {
    let value = this.taskList.value;
    let valueList: string[]=[];

    valueList.push(value.task1, value.task2, value.task3);

    let rundomMath = Math.floor(Math.random() * valueList.length)
    this.firstTask = valueList[rundomMath];
    valueList.splice(rundomMath, 1);

    let rundomMath2 = Math.floor(Math.random() * valueList.length)
    this.secondTask = valueList[rundomMath2];
    valueList.splice(rundomMath2, 1);

    let rundomMath3 = Math.floor(Math.random() * valueList.length)
    this.thirdTask = valueList[rundomMath3];
    valueList.splice(rundomMath3, 1);
  }
}
