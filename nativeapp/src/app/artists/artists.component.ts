import { Component, OnInit } from '@angular/core';
import { Item } from "./../item/item";
import { ItemService } from "./../item/item.service";

@Component({
  selector: 'ns-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  items: Array<Item>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getArtists();
  }

}
