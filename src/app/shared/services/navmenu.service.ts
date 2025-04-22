import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Menu {
  headTitle1?: string;
  level?: number;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  id?: number;
  bookmark?: boolean;
  children?: Menu[];
  horizontalList?: boolean;
  items?: Menu[]
}


@Injectable({
  providedIn: 'root'
})
export class NavmenuService {

  public isDisplay!: boolean;
  public language: boolean = false;
  public isShow: boolean = false;
  public closeSidebar: boolean = false;


  constructor() { }

  MENUITEMS: Menu[] = [
    {
      headTitle1: "General",
    },
    {
      id: 1,
      level: 1,
      title: "Dashboards",
      icon: "home",
      type: "sub",
      active: true,
      children: [
        { path: "/dashboard/default", title: "Stock", type: "link" },
        { path: "/dashboard/ecommerce", title: "Order", type: "link" }
      ],
    },
    {
      headTitle1: "Management Stock",
    },
    {
      id: 5,
      level: 1,
      path: "/file-manager",
      title: "TranferStock",
      icon: "file",
      type: "link",
    },
    {
      id: 7,
      level: 1,
      title: "Invoice",
      path: "/letter-box",
      icon: "email",
      active: false,
      type: "link",
    },
    {
      id: 8,
      level: 1,
      title: "Promotion",
      type: "sub",
      icon: "ecommerce",
      active: false,
      children: [
        { path: "/Chat/private-chat", title: "Promotion List", type: "link" },
        { path: "/Chat/group-chat", title: "Set Promotion", type: "link" },
      ],
    }
  ]

  item = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
