import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    score = 0;
    showBtn = false;

    
    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }

    addScore(){
        this.showBtn =true;
        this.score = this.score +1 ;
        console.log(this.score)
    }
    
    decScore(){
        if(this.score == 0){
            this.showBtn = false;
        }else{
            this.showBtn = true;
            this.score = this.score - 1 ;
        }
        console.log(this.score);
    }


}
