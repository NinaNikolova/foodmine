import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
foods: Food[]=[];
constructor(private foodService: FoodService, activatedRoute: ActivatedRoute){
  // this we do about search
  activatedRoute.params.subscribe((params)=>{
    if(params.searchTerm){
      // filter result base on the searchTerm
      this.foods = this.foodService.getAllFoodBySearchTerm(params.searchTerm)
    }else{
      this.foods=foodService.getAll();
    }
  })
  this.foods = foodService.getAll()
}

ngOnInit(): void {
  
}
}
