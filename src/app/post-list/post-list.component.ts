import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postlistTitle: string;
  @Input() postlistContent: string;
  @Input() postlistLoveIts: number;
  @Input() postlistCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  onClickPositive() {
    console.log('Clique sur Love it!');
    this.postlistLoveIts = this.postlistLoveIts+1;
  }

  onClickNegative() {
    console.log('Clique sur Dont love it!');
    this.postlistLoveIts = this.postlistLoveIts-1;
  }

  getColor() {
    if(this.postlistLoveIts < 0) {
      return 'red';
    } else if(this.postlistLoveIts > 0) {
      return 'green';
    } else if (this.postlistLoveIts === 0){
      return '';
    }
}

lastUpdate = new Promise((resolve, reject) => {
  const date = new Date();
  setTimeout(
    () => {
      resolve(date);
    }, 2000
  );
});

}
