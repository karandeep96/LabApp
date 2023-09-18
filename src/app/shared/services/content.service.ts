import { Injectable } from '@angular/core';

type Page = {
  title: string;
  subtitle: string;
  content: string;
  image: string;
};


@Injectable()
export class ContentService {
  pages: { [key: string]: Page } = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bg00.jpg'},
    'about': {title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/bg01.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg02.jpg'}
  };
}