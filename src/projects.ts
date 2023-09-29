interface Projects {
    name: string;
    image: string;
    description: string;
    ghLink: string;
    demoLink: string;
}
const projects: Projects[] = [
    {
        name: "Shop",
        image: "https://ulcxpfjjujtdnmvvzzuz.supabase.co/storage/v1/object/public/portfolio/SHOP.png",
        description: "At holidaze you can book venues/host venues",
        ghLink: "https://github.com/olemart1n/noroff-react-app",
        demoLink: "https://front-end-frameworks-ole-martin.netlify.app/",
    },
    {
        name: "Holidaze",
        image: "https://ulcxpfjjujtdnmvvzzuz.supabase.co/storage/v1/object/public/portfolio/holidaze.png",
        description: "At holidaze you can book venues/host venues",
        ghLink: "https://github.com/olemart1n/project-holidaze",
        demoLink: "https://moonlit-meerkat-213c3d.netlify.app/",
    },

    {
        name: "AuctionHouse",
        image: "https://ulcxpfjjujtdnmvvzzuz.supabase.co/storage/v1/object/public/portfolio/AuctionHouse.png",
        description: "At holidaze you can book venues/host venues",
        ghLink: "https://github.com/olemart1n/semesterproject-2-olemartin",
        demoLink: "https://olemart1n.github.io/semesterproject-2-olemartin/",
    },
];

export default projects;
