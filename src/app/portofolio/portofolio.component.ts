import { Component,OnInit } from '@angular/core';
import { Content } from './../content';
// import { Component, OnInit } from '@angular/core';
Component


@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css'],
})
export class PortofolioComponent implements OnInit {
 
  constructor() {}
  selectedItem: Content = {image:'',title:''}; //FIXME
  
  items: Content[] = [
    { image: './assets/images/cabin.png', title: 'cabin' },
    { image: './assets/images/cake.png', title: 'cake'},
    { image: './assets/images/circus.png', title: 'circus'},
    { image: './assets/images/game.png', title: 'game'},
    { image: './assets/images/safe.png', title: 'safe'},
    { image: './assets/images/submarine.png', title: 'submarine'},
  ];
  // items[1].value 
  // private readonly DEFAULT_LANGUAGE =this.items[0]
  
  // this.selectedItem = this.items[0] //FIXME

  ngOnInit(): void {}

  openModal(i: number) {
    // this.items[i];
    this.selectedItem = this.items[i];
    // let bootstrap open the model
    // let x:any =data-bs-toggle
    //FIXME
    // let myModal:any = document.getElementById('exampleModal')
    // let myInput:any = document.querySelector('.overlay')
    
    // myModal.addEventListener('shown.bs.modal', function () {
    //   myInput.mousemove()
    // })
  }
}
