import { Component, OnInit, Input, Output } from "@angular/core";
import { Item } from "../item/item";
import { ItemService } from "../item/item.service";
@Component({
    selector: "ns-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
    public input: any;
    newItem: any;

    name: string;
    role: string;

    constructor(private itemService: ItemService) {}

    ngOnInit() {
        this.newItem = this.itemService.getItems();
    }

    addPlayer() {
        this.input = new Item();
        this.input.name = this.name;
        this.input.role = this.role;
        this.input.type = "soccer"
        this.itemService.addItem(this.input);

        
        this.name = "";
        this.role = "";
        
        console.log(this.input);
        
    }
}
