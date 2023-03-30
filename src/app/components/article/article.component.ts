import {Component, Input} from '@angular/core';
import {IArticle} from "../../models/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
 @Input() article : IArticle
}
