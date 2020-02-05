import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { GridActivityComponent } from './grid-activity/grid-activity.component';
import { FormComponent } from './form/form.component';
import { ArtistsComponent } from './artists/artists.component';
import { SoccerComponent } from './soccer/soccer.component';

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "grid", component: GridActivityComponent },
    { path: "form", component: FormComponent},
    { path: "artists", component: ArtistsComponent},
    { path: "soccer", component: SoccerComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
