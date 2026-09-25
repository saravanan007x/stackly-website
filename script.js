/* =====================================================
   PRODUCT CARD SCROLL REVEAL
===================================================== */

const cards = document.querySelectorAll(".card");

const reduceMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (
    "IntersectionObserver" in window &&
    !reduceMotion
) {

    const cardObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const card =
                            entry.target;

                        const index =
                            Array
                                .from(cards)
                                .indexOf(card);

                        const delay =
                            (index % 3) * 90;


                        setTimeout(() => {

                            card.classList.add(
                                "in-view"
                            );

                        }, delay);


                        cardObserver.unobserve(card);
                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    cards.forEach((card) => {

        cardObserver.observe(card);

    });

} else {

    cards.forEach((card) => {

        card.classList.add(
            "in-view"
        );

    });

}



/* =====================================================
   FOOTER REVEAL
===================================================== */

const footerElements =
    document.querySelectorAll(
        ".foot-fade"
    );


if (
    "IntersectionObserver" in window &&
    !reduceMotion
) {

    const footerObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry, index) => {

                        if (
                            entry.isIntersecting
                        ) {

                            const element =
                                entry.target;


                            setTimeout(() => {

                                element.classList.add(
                                    "in-view"
                                );

                            }, index * 80);


                            footerObserver.unobserve(
                                element
                            );
                        }

                    }
                );

            },

            {
                threshold: 0.2
            }

        );


    footerElements.forEach((element) => {

        footerObserver.observe(element);

    });

} else {

    footerElements.forEach((element) => {

        element.classList.add(
            "in-view"
        );

    });

}



/* =====================================================
   RETRO IMAGE REVEAL
===================================================== */

const retroImages =
    document.querySelectorAll(
        ".retro-main, .retro-photo"
    );


if (
    "IntersectionObserver" in window &&
    !reduceMotion
) {

    const imageObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "image-visible"
                        );

                        imageObserver.unobserve(
                            entry.target
                        );
                    }

                });

            },

            {
                threshold: 0.2
            }

        );


    retroImages.forEach((image) => {

        imageObserver.observe(image);

    });

}