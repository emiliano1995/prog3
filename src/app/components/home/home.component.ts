import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verMoto(){
    // console.log(this.index);
    this.router.navigate(['/heroes'])
    // this.heroeSeleccionado.emit(this.index)
  }

}
