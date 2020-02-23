import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Settings => Home, Settings => Groups, Groups => Home', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('150ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('150ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('Home => Settings, Home => Groups, Groups => Settings', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ right: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('150ms ease-out', style({ right: '100%'}))
          ]),
          query(':enter', [
            animate('150ms ease-out', style({ right: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ])
  ]);