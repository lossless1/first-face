import {
    animate,
    query,
    stagger,
    state,
    style,
    transition,
    trigger,
    group,
    animateChild,
    sequence
} from "@angular/animations";

export const transitions = [
    trigger("transitions", [
        state(
            "*",
            style({
                position: "fixed",
                width: "100vw"
            })
        ),
        // route 'enter' transition
        transition(":enter", [
            // css styles at start of transition
            style({ right: "1000px" }),

            // animation and styles at end of transition
            animate(".4s", style({ right: "0" }))
        ]),
        transition(":leave", [animate(".4s", style({ right: "1000px" }))])
    ]),
    trigger("leaderTransition", [
        state(
            "*",
            style({
                position: "fixed",
                width: "100vw"
            })
        ),
        // route 'enter' transition
        transition(":enter", [
            // css styles at start of transition
            style({ right: "-5000px" }),

            // animation and styles at end of transition
            animate(
                ".4s",
                style({
                    right: "0"
                })
            )
        ]),
        transition(":leave", [
            animate(
                ".4s",
                style({
                    right: "-5000px"
                })
            )
        ])
    ]),
    trigger("LToRTransition", [
        // state('*', style({
        //     position: 'fixed',
        //     width: '100vw',
        // })),

        // route 'enter' transition
        transition(":enter", [
            style({ transform: "translateX(-100%)" }),
            animate(".3s ease-in-out", style({ transform: "translateX(0%)" }))
        ]),
        transition(":leave", [
            style({ transform: "translateX(0%)" }),
            animate(
                ".3s ease-in-out",
                style({ transform: "translateX(-100%)" })
            )
        ])
    ]),
    trigger("RToLTransition", [
        // state('*', style({
        //     position: 'absolute',
        //     width: '100vw',
        // })),

        transition(":enter", [
            style({ transform: "translateX(100%)" }),
            animate(".3s ease-in-out", style({ transform: "translateX(0%)" }))
        ]),
        transition(":leave", [
            style({ transform: "translateX(0%)" }),
            animate(".3s ease-in-out", style({ transform: "translateX(100%)" }))
        ])
    ]),
    trigger("sides", [
        transition("* => LtoR", [
            sequence([
                query(":leave", animateChild(), { optional: true }),

                group([
                    query(
                        ":enter",
                        [
                            style({ transform: "translateX(-100%)" }),
                            animate(
                                "2.3s ease-in-out",
                                style({ transform: "translateX(0%)" })
                            )
                        ],
                        { optional: true }
                    ),
                    query(
                        ":leave",
                        [
                            style({ transform: "translateX(0%)" }),
                            animate(
                                "2.3s ease-in-out",
                                style({ transform: "translateX(-100%)" })
                            )
                        ],
                        { optional: true }
                    )
                ]),
                query(":enter", animateChild(), { optional: true })
            ])
        ]),
        transition("* => RtoL", [
            query(":enter", animateChild(), { optional: true }),
            query(
                ":enter",
                [
                    style({ transform: "translateX(100%)" }),
                    animate(
                        "2.3s ease-in-out",
                        style({ transform: "translateX(0%)" })
                    )
                ],
                { optional: true }
            ),
            query(":leave", animateChild(), { optional: true }),
            query(
                ":leave",
                [
                    style({ transform: "translateX(0%)" }),
                    animate(
                        "2.3s ease-in-out",
                        style({ transform: "translateX(100%)" })
                    )
                ],
                { optional: true }
            )
        ])
    ])
];
