import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radial-menu',
  templateUrl: './radial-menu.component.html',
  styleUrls: ['./radial-menu.component.scss']
})
export class RadialMenuComponent implements OnInit {
  menuExpanded: boolean;
  menuItems: {name: string, title: string, description: string, imageSrc: string, selected?: boolean}[] = [{ name: 'events', title: 'Events', description: 'Events', imageSrc: '/assets/icons/show.svg' }
    , { name: 'about', title: 'About', description: 'About Alejo', imageSrc: '/assets/icons/about.svg' }
    , { name: 'resume', title: 'Resume', description: 'Professional Resume', imageSrc: '/assets/icons/resume.svg' }
    , { name: 'contact', title: 'Contact', description: 'Contact Alejo', imageSrc: '/assets/icons/contact.svg' }];
  selectedItemIndex: number;
  activeTab: any;
  menuTouched: boolean;
  // @ViewChild('toggleInput') toggleInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(){
    this.menuExpanded = this.menuExpanded? false : true;
    this.menuItems.filter(x=> x.selected = false);
    this.selectedItemIndex = null;
  }
  selectMenuItem(item, itemIndex, event){ debugger;
    this.menuItems.filter(x=> x.selected = false)
    item.selected = true;
    this.selectedItemIndex = itemIndex;
    return true;
  }
  toggleTab(tabIndex, show){
    this.menuTouched = true;
    this.activeTab = show;
  }
}
