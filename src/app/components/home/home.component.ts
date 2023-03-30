import { Component } from '@angular/core';
import {IArticle} from "../../models/article";
import {articles as data} from "../../data/articles";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles : IArticle[] = data
}
