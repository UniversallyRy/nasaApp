export type CardsInfo = {
  href: string;
  title: string;
  paragraph: string;
  imgSrc: string;
  map?: (item: []) => void;
}

export const cardInfo = [
  {
    href: '/apod',
    title: 'APoD',
    paragraph: 'Astronomy Picture of the Day.',
    imgSrc: '/apod.png',
  },
  {
    href: '/landsat',
    title: 'Landsat',
    paragraph: 'Landsat imagery is provided to the public as a joint project between NASA and USGS.',
    imgSrc: '/satellite.png',
  },
  {
    href: '/epic',
    title: 'EPIC',
    paragraph: 'Earth Polychromatic Imaging Camera aka EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits.',
    imgSrc: '/planet.png',
  },
  {
    href: '/rover',
    title: 'Mars Rover Photos',
    paragraph: 'Image data gathered by NASA&apos;s Curiosity, Opportunity, and Spirit rovers on Mars. Current functionality only for Curiosity camera.',
    imgSrc: '/mars-rover.png',
  }
]
