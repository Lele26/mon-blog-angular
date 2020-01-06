import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my awesome app';

  postlists = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat lectus nec arcu pellentesque posuere. Suspendisse vitae justo efficitur, eleifend lectus eu, egestas enim. Aenean ultricies accumsan justo non porta. Curabitur ornare dictum mi eget tempor. Curabitur in nibh risus. Aliquam et odio at sem vehicula scelerisque. Mauris volutpat ultrices laoreet. Curabitur venenatis ex lectus. Pellentesque tincidunt sit amet est vitae vestibulum. Nunc quis convallis ex. Mauris quis blandit nibh. Nulla a nunc at justo vehicula cursus. Nullam commodo urna magna, quis consectetur orci sollicitudin non.',
      loveIts: 2,
      create_at: Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Morbi pharetra quis lectus et dictum. Nulla placerat, ipsum at eleifend rutrum, eros est sodales nibh, nec dapibus mi odio non ex. Nulla mattis nec quam eu tempus. Donec ultricies eget ipsum quis porttitor. Pellentesque fermentum est nisi, sed congue erat malesuada in. Pellentesque maximus neque nec nisi malesuada egestas. Fusce imperdiet nulla eget tortor vehicula aliquet. Donec nec ornare ex. Vestibulum suscipit leo sollicitudin nisi pulvinar, at consequat ligula lobortis. Aenean vestibulum ipsum nulla, ut euismod erat hendrerit eget. Aenean fringilla, justo eu gravida auctor, elit magna interdum arcu, non scelerisque nisl metus pharetra diam. Morbi posuere tristique sagittis. Aenean sapien est, ultricies ut posuere sed, elementum blandit est. Cras sed lectus eget nisl dapibus dapibus molestie id urna. Phasellus gravida tempus urna, id molestie augue pharetra non.',
      loveIts: 1,
      create_at: Date()
    },
    {
      title: 'Mon troisème post',
      content: 'Morbi ac enim dolor. Donec scelerisque risus id feugiat condimentum. Morbi vestibulum mattis tortor, non blandit nibh dignissim at. Fusce lobortis neque et interdum sollicitudin. Nunc vitae enim quis eros dignissim facilisis non nec erat. Vivamus nisi nulla, dapibus ut tellus sodales, fermentum rhoncus tellus. Cras viverra ante egestas arcu tempus bibendum. Maecenas vel elementum purus. Aenean tortor nunc, consectetur vel nunc sit amet, congue hendrerit sapien. Ut in risus purus. Nullam eu purus pulvinar, fermentum augue vitae, accumsan metus. Nulla eu consequat velit.',
      loveIts: 1,
      create_at: Date()
    }
  ];



}
