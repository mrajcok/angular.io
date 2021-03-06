// #docregion
// #docregion import-ng-if
import {Component, bootstrap, NgFor, NgIf} from 'angular2/angular2';
// #enddocregion import-ng-if
// #docregion import-hero
import {Hero} from './hero';
// #enddocregion import-hero

@Component({
  selector: 'my-app',
  // #docregion template
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ng-for="#hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
  `,
  // #enddocregion template
  // #docregion directives
  directives: [NgFor, NgIf]
  // #enddocregion directives
})
// #docregion class
export class AppComponent {
  title = 'Tour of Heroes';
  // #docregion heroes
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
  // #enddocregion heroes
}
// #enddocregion class
// #enddocregion
