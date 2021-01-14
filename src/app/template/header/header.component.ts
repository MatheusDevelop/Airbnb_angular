import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isTransparentHeader:Boolean = true;

  menu:Object[] = [
    {name:"Todas as mobilias"},
    {name:"Alugar mobilia"},
    {name:"Mobilias perto de você"},
    {name:"Para empresas"},

  ]
  ngOnInit(): void {

  }

}
