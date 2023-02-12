import { animate, style, transition, trigger, state } from '@angular/animations';

export const fadeIn = trigger(
  'fadeIn',
  [
    transition(
      ':enter', [
      style({ opacity: 0 }),
      animate('500ms', style({ 'opacity': 1 }))
    ]
    ),
    transition(
      ':leave', [
      style({ opacity: 1 }),
      animate('250ms', style({ 'opacity': 0 }))
    ]
    )
  ]
);

export const fadeOut = trigger(
  'fadeOut',
  [
    transition(
      ':leave', [
        style({opacity: 1.0}),
        animate('500ms', style({'opacity': 0}))
      ]
    )
  ]
);
export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateX(+100%)' }),
    animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
  ]),
])
export const expandCollapse = trigger('expandCollapse', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
  ])
])
export const panelInOut = trigger('panelInOut', [
  transition('void => *', [
      style({transform: 'translateY(-100%)'}),
      animate(800)
  ]),
  transition('* => void', [
      animate(800, style({transform: 'translateY(-100%)'}))
  ])
])