import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Income => Home, Income => Groups, Groups => Home, Analysis => Income, Analysis => Groups, Analysis => Home', [
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
    transition('Home => Income, Home => Groups,Home => Analysis, Groups => Income, Groups => Analysis, Income => Analysis', [
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
      ]),
      transition('Home => Settings, Groups => Settings, Income => Settings, Analysis => Settings', [
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
          style({ top: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('150ms ease-out', style({ top: '100%'}))
          ]),
          query(':enter', [
            animate('150ms ease-out', style({ top: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('Settings => Home, Settings => Groups, Settings => Income, Settings => Analysis', [
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
          style({ top: '100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('150ms ease-out', style({ top: '-100%'}))
          ]),
          query(':enter', [
            animate('150ms ease-out', style({ top: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('RecurringSettings => Settings, GroupsSettings => Settings, DefaultsSettings => Settings, GeneralSettings => Settings, CategorySettings => Settings', [
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
      transition('Settings => RecurringSettings, Settings => GroupsSettings, Settings => DefaultsSettings, Settings => GeneralSettings, Settings => CategorySettings', [
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
      ]),
  ]);