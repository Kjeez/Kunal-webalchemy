import { CLIENT_PROJECTS } from './clientProjects';

export interface Project {
    id: string;
    title: string;
    category:
        | 'Educational' | 'E-commerce' | 'Corporate' | 'Travel' | 'Creative' | 'Dental'
        | 'Healthcare' | 'Food' | 'Interiors' | 'Professional' | 'Manufacturing' | 'Fashion' | 'Wellness' | 'Events';
    /** Neighbourhood / city, for client-list projects. */
    area?: string;
    image: string;
    link: string;
    metric?: string;
    description?: string;
}

const coreProjects: Project[] = [
    // Educational
    {
        id: 'edu-1',
        title: 'KR Mangalam Vikaspuri',
        category: 'Educational',
        image: '/portfolio-screenshots/krmangalam.jpg',
        link: 'https://krmangalamvikaspuri.com',
        metric: 'School Portal'
    },
    {
        id: 'edu-2',
        title: 'BBPS Dwarka',
        category: 'Educational',
        image: '/portfolio-screenshots/balbharti.jpg',
        link: 'https://bbpsdwarka.balbharati.org',
        metric: 'Institutional'
    },
    {
        id: 'edu-3',
        title: 'Vandana International',
        category: 'Educational',
        image: '/portfolio-screenshots/vandana.jpg',
        link: 'https://vandanainternationalschool.in',
        metric: 'School Website'
    },
    {
        id: 'edu-4',
        title: 'St. Thomas Dwarka',
        category: 'Educational',
        image: '/portfolio-screenshots/stthomas.jpg',
        link: 'https://stthomasdwarka.com',
        metric: 'Education'
    },
    {
        id: 'edu-5',
        title: 'Paramount School',
        category: 'Educational',
        image: '/portfolio-screenshots/para.jpg',
        link: 'https://paramountschool.in',
        metric: 'School'
    },
    {
        id: 'edu-6',
        title: 'BBIS Dwarka',
        category: 'Educational',
        image: '/portfolio-screenshots/balbhavan.jpg',
        link: 'https://bbisdw.com',
        metric: 'International School'
    },
    {
        id: 'edu-7',
        title: 'Adarsh World School',
        category: 'Educational',
        image: '/portfolio-screenshots/adarsh.jpg',
        link: 'https://adarshworldschool.co.in',
        metric: 'Education'
    },

    // Dental
    {
        id: 'dental-1',
        title: '32 Dental House',
        category: 'Dental',
        image: '/portfolio-screenshots/32dentalhouse.jpg',
        link: 'https://32dentalhouse.com/',
        metric: 'Dental Clinic'
    },
    {
        id: 'dental-2',
        title: 'Stunning Dentistry',
        category: 'Dental',
        image: '/portfolio-screenshots/stunningdentistry.jpg',
        link: 'https://www.stunningdentistry.com/',
        metric: 'Dental Practice'
    },
    {
        id: 'dental-3',
        title: 'Hardik Dental Clinic',
        category: 'Dental',
        image: '/portfolio-screenshots/hardikdentalclinic.jpg',
        link: 'https://hardikdentalclinic.com/',
        metric: 'Dental Healthcare'
    },

    // E-commerce & Business
    {
        id: 'comm-1',
        title: 'Loom Craft',
        category: 'E-commerce',
        image: '/portfolio-screenshots/loomcraft.jpg',
        link: 'https://loomcraft.co.in',
        metric: 'Furniture Store'
    },
    {
        id: 'comm-2',
        title: 'Diana Korr',
        category: 'E-commerce',
        image: '/portfolio-screenshots/dianakorr.jpg',
        link: 'https://dianakorr.in',
        metric: 'Fashion Brand'
    },
    {
        id: 'comm-3',
        title: 'Alwazo',
        category: 'E-commerce',
        image: '/portfolio-screenshots/alwazo.jpg',
        link: 'https://alwazo.com',
        metric: 'B2B Marketplace'
    },
    {
        id: 'comm-6',
        title: 'Noon Brew',
        category: 'E-commerce',
        image: '/portfolio-screenshots/noonbrew.jpg',
        link: 'https://noonbrew.co',
        metric: 'Beverage Brand'
    },
    {
        id: 'comm-7',
        title: 'Kanchi VML',
        category: 'E-commerce',
        image: '/portfolio-screenshots/kanchivml.jpg',
        link: 'https://kanchivml.com/',
        metric: 'Fashion Store'
    },
    {
        id: 'comm-8',
        title: 'Pothys',
        category: 'E-commerce',
        image: '/portfolio-screenshots/pothys.jpg',
        link: 'https://www.pothys.com/',
        metric: 'Textile Brand'
    },
    {
        id: 'comm-9',
        title: 'Koskii',
        category: 'E-commerce',
        image: '/portfolio-screenshots/koskii.jpg',
        link: 'https://www.koskii.com/',
        metric: 'Fashion Brand'
    },
    {
        id: 'comm-10',
        title: 'Sudathi',
        category: 'E-commerce',
        image: '/portfolio-screenshots/sudathi.jpg',
        link: 'https://sudathi.com/',
        metric: 'Fashion Store'
    },
    {
        id: 'comm-11',
        title: 'Adi Akshoy',
        category: 'E-commerce',
        image: '/portfolio-screenshots/adiakshoy.jpg',
        link: 'https://adiakshoy.com/',
        metric: 'E-commerce Store'
    },
    {
        id: 'comm-12',
        title: 'Wholesum',
        category: 'E-commerce',
        image: '/portfolio-screenshots/wholesum.jpg',
        link: 'https://dev.wholesum.app/',
        metric: 'Wellness Platform'
    },
    {
        id: 'travel-4',
        title: 'Earthen Pods',
        category: 'Travel',
        image: '/portfolio-screenshots/earthenpods.jpg',
        link: 'https://earthenpods.in',
        metric: 'Sustainable Goods'
    },

    // Corporate & Professional
    {
        id: 'corp-1',
        title: 'GI Group Holding',
        category: 'Corporate',
        image: '/portfolio-screenshots/giholding.jpg',
        link: 'https://gigroupholding.com',
        metric: 'Corporate'
    },
    {
        id: 'corp-2',
        title: 'Hochhuth Consulting',
        category: 'Corporate',
        image: '/portfolio-screenshots/hochhuth.jpg',
        link: 'https://hochhuth-consulting.de',
        metric: 'Consulting Firm'
    },
    {
        id: 'corp-4',
        title: 'Shree Impex',
        category: 'Corporate',
        image: '/portfolio-screenshots/shreeimpex.jpg',
        link: 'https://shreeimpex.com',
        metric: 'Manufacturing'
    },
    {
        id: 'corp-5',
        title: 'Liv Regalia',
        category: 'Corporate',
        image: '/portfolio-screenshots/livregalia.jpg',
        link: 'https://livregalia.com',
        metric: 'Luxury Real Estate'
    },
    {
        id: 'corp-6',
        title: 'DCC Infra',
        category: 'Corporate',
        image: '/portfolio-screenshots/dccinfra.jpg',
        link: 'https://dccinfra.in',
        metric: 'Infrastructure'
    },
    {
        id: 'corp-7',
        title: 'Nand Tara Green',
        category: 'Corporate',
        image: '/portfolio-screenshots/nandtara.jpg',
        link: 'https://nandtaragreen.com',
        metric: 'Sustainable Energy'
    },
    {
        id: 'corp-8',
        title: 'Shyam Metalics',
        category: 'Corporate',
        image: '/portfolio-screenshots/shyam.jpg',
        link: 'https://shyammetalics.com',
        metric: 'Industrial Leader'
    },
    {
        id: 'corp-9',
        title: 'Vale',
        category: 'Corporate',
        image: '/portfolio-screenshots/vale.jpg',
        link: 'https://vale.com',
        metric: 'Global Mining'
    },
    {
        id: 'corp-11',
        title: 'Vrindavan Property',
        category: 'Corporate',
        image: '/portfolio-screenshots/vrindavan.jpg',
        link: 'https://vrindavanproperty.in',
        metric: 'Real Estate'
    },
    {
        id: 'corp-12',
        title: 'Hypatho Lab',
        category: 'Corporate',
        image: '/portfolio-screenshots/clinic.jpg',
        link: 'https://hypatholab.in',
        metric: 'Healthcare Lab'
    },
    {
        id: 'corp-13',
        title: 'Dr Tanvi Dental Care',
        category: 'Corporate',
        image: '/portfolio-screenshots/dentist.jpg',
        link: 'https://drtanvidentalcare.com',
        metric: 'Dental Healthcare'
    },

    // Travel & Hospitality
    {
        id: 'travel-2',
        title: 'Hamta Orchard Resort',
        category: 'Travel',
        image: '/portfolio-screenshots/hamta.jpg',
        link: 'https://hamtaorchardandresort.in',
        metric: 'Luxury Resort'
    },
    {
        id: 'travel-3',
        title: 'Sam Travels',
        category: 'Travel',
        image: '/portfolio-screenshots/samtravel.jpg',
        link: 'https://samtravelsandtours.in',
        metric: 'Tours & Travels'
    },

    // Creative & Portfolio
    {
        id: 'creative-1',
        title: 'Merging Soils',
        category: 'Creative',
        image: '/portfolio-screenshots/mergingsoils.jpg',
        link: 'https://mergingsoils.com',
        metric: 'Artistic Portfolio'
    },
    {
        id: 'creative-2',
        title: 'Night Vibe',
        category: 'Creative',
        image: '/portfolio-screenshots/nightvibe.jpg',
        link: 'https://nightvibe.in',
        metric: 'Event Brand'
    },
    {
        id: 'creative-3',
        title: 'Trend Vani',
        category: 'Creative',
        image: '/portfolio-screenshots/trendvaani.jpg',
        link: 'https://trendvani.vercel.app',
        metric: 'Modern Blog'
    },
    {
        id: 'creative-4',
        title: 'Kamlesh Group',
        category: 'Creative',
        image: '/portfolio-screenshots/kamlesh.jpg',
        link: 'https://kamleshgroup.com',
        metric: 'Corporate Group'
    },
    {
        id: 'creative-5',
        title: 'Mugwale',
        category: 'Creative',
        image: '/portfolio-screenshots/mugwale.jpg',
        link: 'https://mugwale.vercel.app',
        metric: 'Creative e-com'
    },
    {
        id: 'creative-6',
        title: 'The Mountain Rituals',
        category: 'Creative',
        image: '/portfolio-screenshots/themountain.jpg',
        link: 'https://themountainrituals.com',
        metric: 'Lifestyle Brand'
    },
    {
        id: 'creative-7',
        title: 'Newsmaker Media Group',
        category: 'Creative',
        image: '/portfolio-screenshots/newsmaker.jpg',
        link: 'https://www.newsmakermediagroup.com',
        metric: 'Media Agency'
    },
    {
        id: 'corp-14',
        title: 'Renny Strips',
        category: 'Corporate',
        image: '/portfolio-screenshots/renny.jpg',
        link: 'https://rennystrips.com',
        metric: 'Creative Brand'
    },
    {
        id: 'creative-9',
        title: 'Toaster',
        category: 'Creative',
        image: '/portfolio-screenshots/toaster.jpg',
        link: 'https://toaster.co',
        metric: 'Tech Platform'
    },
    {
        id: 'corp-15',
        title: 'Allure Space',
        category: 'Corporate',
        image: '/portfolio-screenshots/allurespace.png',
        link: 'https://allure-space.vercel.app/',
        metric: 'Interior Design'
    },
    {
        id: 'corp-16',
        title: 'Yash Interior',
        category: 'Corporate',
        image: '/portfolio-screenshots/yashinterior.png',
        link: 'https://www.yashinterior.in/interior-designer-in-delhi-ncr',
        metric: 'Interior Design'
    },
    {
        id: 'corp-17',
        title: 'The Interia',
        category: 'Corporate',
        image: '/portfolio-screenshots/theinteria.png',
        link: 'https://www.theinteria.com/luxury-interior-design-company',
        metric: 'Luxury Interiors'
    }
];

// Delhi NCR client sites (generated: data/clientProjects.ts).
export const projectsData: Project[] = [...coreProjects, ...CLIENT_PROJECTS];
