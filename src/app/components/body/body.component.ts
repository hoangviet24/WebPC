import { Component } from '@angular/core';
@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  cards = [
    {
      title: 'Card title 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      img: 'assets/meo.jpg',
      link: '#'
    },
    {
      title: 'Card title 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      img: 'assets/meo.jpg',
      link: '#'
    },
    {
      title: 'Card title 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      img: 'assets/meo.jpg',
      link: '#'
    },
    {
      title: 'Card title 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      img: 'assets/meo.jpg',
      link: '#'
    },
    {
      title: 'Card title 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      img: 'assets/meo.jpg',
      link: '#'
    },
    {
      title: 'Card title 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      img: 'assets/meo.jpg',
      link: '#'
    },
    {
      title: 'Card title 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      img: 'assets/meo.jpg',
      link: '#'
    },
  ];
  selectedCard: any = null;

  showInfo(card: any): void {
    this.selectedCard = card;
  }

  closeInfo(): void {
    this.selectedCard = null;
  }
}
