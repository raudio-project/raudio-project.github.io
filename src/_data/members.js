const feather = require('feather-icons');

const ICONS = (icon) => feather.icons[icon].toSvg();

// Exports the team members for use in 11ty
module.exports = [
    {
        name: "Simon Rodriguez",
        title: "Website Maintainer",
        img: { src: "https://images.pexels.com/photos/7449049/pexels-photo-7449049.jpeg", alt: "Image of otter"},
        links: [
            {icon: ICONS('github'), href: "https://google.com"}
        ]
    },
    {
        name: "Thomas Faughnan",
        title: "Server Developer",
        img: { src: "https://avatars.githubusercontent.com/u/47096018?v=4", alt: "Image of Tom"},
        links: [
            {icon: ICONS('x'), href: "https://wikipedia.com"},
        ]
    },
    {
        name: "Paul Gierl",
        title: "Server Developer",
        img: { src: "https://avatars.githubusercontent.com/u/66021781?v=4", alt: "Image of Paul"},
        links: []
    },
    {
        name: "Nolan McShea",
        title: "Sussy Baka",
        img: { src: "https://avatars.githubusercontent.com/u/10440773?v=4", alt: ""},
        links: []
    }
];