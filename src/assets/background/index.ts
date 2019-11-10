import headerDesktop from './header.jpg';
import headerPhone from './header-phone.jpg';
import lisbon from './lisbon.jpeg';
import sea from  './sea.jpeg';
import boat from './boat.jpeg';

const isPhone = window.innerWidth < 768;

const header = isPhone ? headerPhone : headerDesktop;

export { header, lisbon, sea, boat }