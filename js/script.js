const slides = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);

// Qui
const { createApp } = Vue;

createApp(
    {
        data() {
            return {
                autoplay: null,
                index: 0,
                slides: [
                    {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ],
            }
        },
        methods: {
            next() {
                if (this.index < this.slides.length - 1) {
                    this.index++;
                } else {
                    this.index = 0;
                }
            },
            prev() {
                if (this.index > 0) {
                    this.index--;
                } else {
                    this.index = this.slides.length - 1;
                }
            },
            changeActiveThumb(i) {
                this.index = i;
            },
            mouseEnter() {
                clearInterval(this.autoplay);
                // Svuotare l'autoplay
                this.autoplay = null;
            },
            mouseLeave() {
                this.startAutoplay();
            },
            startAutoplay() {
                this.autoplay = setInterval(this.next, 1000);
                /*
                    Nell'interavallo metto la definizione di funnzione, non il richiamo
                */
            }
        },
        // Dal momento in cui l'istanza di Vue viene "montata" a un riferimento html
        mounted() {
            // Faccio partire il setInterval
            this.startAutoplay();
        }
    }
).mount('#app');