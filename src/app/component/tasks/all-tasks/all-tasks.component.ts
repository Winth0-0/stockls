import { Component, Input, SimpleChanges } from '@angular/core';
import * as Data from '../../../shared/data/tasks/task-list';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-all-tasks',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './all-tasks.component.html',
    styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent {

  @Input() selectedheading_id: number;
  @Input() selectedTagId: number;

  public taskData = Data.TaskData;
  public tagData = Data.TagData;
  public gettaskData: Data.Tasklist;

  ngOnInit(): void {
    this.taskData.map((data) => {
      if (data.status) {
        this.gettaskData = data;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    let id = changes['selectedheading_id']?.currentValue;
    this.taskData.map((data) => {
      if (data.title_id === id) {
        this.gettaskData = data;
      }
    })

    let tagId = changes['selectedTagId']?.currentValue;
    this.tagData.map((data) => {
      if (data.title_id === tagId) {
        this.gettaskData = data
      }
    })
  }

}
