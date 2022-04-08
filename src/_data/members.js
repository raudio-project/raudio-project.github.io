const feather = require('feather-icons');

const ICONS = (icon) => feather.icons[icon].toSvg();

// Exports the team members for use in 11ty
module.exports = [
    {
        name: "Simon Rodriguez",
        title: "Website Maintainer",
        img: { src: "/assets/headshot-simon.png", alt: "Headshot of Simon"},
        links: [
            {icon: ICONS('github'), href: "https://github.com/simonrodrig"},
            {icon: ICONS('globe'), href: "https://rodrig.dev"},
        ]
    },
    {
        name: "Thomas Faughnan",
        title: "Server Developer",
        img: { src: "https://avatars.githubusercontent.com/u/47096018?v=4", alt: "Headshot of Tom"},
        links: [
            {icon: ICONS('github'), href: "https://github.com/tfaughnan"},
        ]
    },
    {
        name: "Paul Gierl",
        title: "Server/Bot Developer",
        img: { src: "https://avatars.githubusercontent.com/u/66021781?v=4", alt: "Headshot of Paul"},
        links: [
            {icon: ICONS('github'), href: 'https://github.com/itspaulyg'}
        ]
    },
    {
        name: "Nolan McShea",
        title: "Community Manager",
        img: { src: "https://avatars.githubusercontent.com/u/10440773?v=4", alt: "Headshot of Nolan"},
        links: [
            {icon: ICONS('github'), href: 'https://github.com/nuolong'}
        ]
    }
];