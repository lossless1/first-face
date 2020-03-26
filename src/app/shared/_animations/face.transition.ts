import {
    animate, animateChild, group, query, stagger, state, style, transition,
    trigger
} from '@angular/animations';

export const payTransition = [
    trigger('stepAnimate', [
        // state('none', style({
        //     opacity: 0,
        // })),
        // state('show',style({
        //     opacity: 1,
        // })),
        // state('bottomToggle',
        //     style({
        //         opacity: 0,
        //         transform: 'translateY(100px)'
        //     })
        // ),
        // state('topToggle',
        //     style({
        //         opacity: 0,
        //         transform: 'translateY(-100px)'
        //     })
        // ),
        // transition('topToggle <=> bottomToggle', animate('1000ms ease-out')),


        transition('void => out', [
            query('*', [
                    style({transform: 'translateY(100%)', opacity: 0}),
                    animate('.5s .1s ease-in-out')]
                , {optional: true})
        ]),

        transition('out => void', [
            query('*', [
                    animate('.5s .1s ease-in-out',
                        style({
                            transform: 'translateY(-100%)', opacity: 0
                        }))]
                , {optional: true})
        ]),


        transition('void => in', [
            query('*', [
                    style({transform: 'translateY(-100%)', opacity: 0}),
                    animate('.5s .1s ease-in-out')]
                , {optional: true})
        ]),
        transition('in => void', [
            query('*', [
                    animate('.5s .1s ease-in-out',
                        style({
                            transform: 'translateY(100%)', opacity: 0
                        }))]
                , {optional: true})
        ]),
        state('in', style({transform: 'translateX(0)', opacity: 1})),

        // transition('* => bottomToggle', animate('1000ms ease-out',
        // style({
        //     opacity: 0,
        //     transform: 'translateY(-100px)'
        // }))),
        // transition('* => topToggle', animate('1000ms ease-out',
        // style({
        //     opacity: 0,
        //     transform: 'translateY(100px)'
        // }))),
        // query('div', [
        //     style({
        //         opacity: 0,
        //         transform: 'translateY(20px)'
        //     }),
        //     animate('1s', style({
        //         transform: 'translateY(0)',
        //         opacity: 1
        //     }))
        // ])
    ])
];
export const faceTransition = [
    trigger('fadeInAnimation', [
        transition(':enter', [

            // css styles at start of transition
            style({opacity: 0}),
            // animation and styles at end of transition
            animate('.3s', style({opacity: 1}))
        ]),
        transition(':leave', [

            // css styles at start of transition
            style({opacity: 1}),

            // animation and styles at end of transition
            animate('.3s', style({opacity: 0}))
        ]),
        // transition('* => *', [
        //     group([
        //         query(':enter', [
        //             style({opacity: 0}),
        //             animate('.3s', style({opacity: 1}))
        //
        //         ], {optional: true}),
        //         query(':leave', [
        //             style({opacity: 1}),
        //             animate('.3s', style({opacity: 0}))
        //
        //         ], {optional: true})
        //     ])
        // ]),
        // route 'enter' transition
    ]),
    trigger('routeAnimation', [
        transition('void => *', [
            // style({opacity: 0}),
            // animate('.3s', style({opacity: 1}))
            // when the component enters
            // transition('* => *', [
            group([
                query('@LToRTransition', animateChild(), {optional: true}),
                query('@RToLTransition', animateChild(), {optional: true})
            ]),
            // ])
        ]),
        transition('* => void', [
            // style({opacity: 1}),
            animate('.3s', style({opacity: 0})),
            // animateChild(),
            // transition('* => *', [
            group([
                query('@LToRTransition', animateChild(), {optional: true}),
                query('@RToLTransition', animateChild(), {optional: true})
            ]),
            // ]),

            // when the component leaves
        ])
    ]),
    trigger('faceTransition', [
        transition('become => face', [
            group([
                query(':enter, :leave', style({
                        position: 'fixed',
                        width: '100vw'
                    })
                    , {optional: true}),
                query(':enter', [
                    style({transform: 'translateX(-100%)'}),
                    animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
                ], {optional: true}),
                query(':leave', [
                    style({transform: 'translateX(0%)'}),
                    animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
                ], {optional: true}),
            ])
        ]),
        transition('face => become', [
            group([
                query(':enter, :leave', style({
                    position: 'fixed',
                    width: '100vw'
                }), {optional: true}),
                query(':enter', [
                    style({transform: 'translateX(100%)'}),
                    animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
                ], {optional: true}),
                query(':leave', [
                    style({transform: 'translateX(0%)'}),
                    animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
                ], {optional: true}),
            ])
        ]),

        // transition("* => *", [
        //     query('@faceTransition', animateChild(), { optional: true })
        // ]),

        transition('* => *', [
            // query('@fadeInAnimation', animateChild(), {optional: true}),
            // style({opacity: 1}),
            // animate('.3s', style({opacity: 0}))
            //


            // group([
            //     query(':enter',[
            //         style({opacity:0}),
            //         animate('.3s', style({opacity: 1}))
            //     ]),
            //     query(':leave',[
            //         style({opacity:1}),
            //         animate('.3s', style({opacity: 0}))
            //     ])
            // ]),

            // group([
            //     query(':enter', [

            // style({opacity: 0}),
            // animate('7s', style({opacity: 1}))


            // ], { optional: true }),
            // query(':leave', [
            //     style({opacity:1}),
            //     animate('.3s', style({opacity: 0}))
            // ], { optional: true }),
            // ])
        ]),
        // transition('* => void', [
        //
        // ]),
        // transition('* => void', [
        //     query('@fadeInAnimation', animateChild(), {optional: true}),
        //
        //     style({opacity: 1}),
        //     animate('7s', style({opacity: 0}))
        // ]),
        transition(':enter', [
            // style({opacity: 0}),
            // animate('.3s', style({opacity: 1}))
        ]),
        transition(':leave', [
            // style({opacity: 1}),
            // animate('.3s', style({opacity: 0}))
        ]),


    ])];
