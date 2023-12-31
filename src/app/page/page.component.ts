import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../shared/services/content.service';


type Page = {
  title: string;
  subtitle: string;
  content: string;
  image: string;
};

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: Page;

  constructor(private route: ActivatedRoute,
              private contentService: ContentService) { }

  ngOnInit() {
    const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData];
  }
}