import '../src/style.css';
import { navBar } from './navBar';
import { aboutSection } from './about';
import { menuSection } from './menu';
import { bookingSection } from './booking';
import { contactSection } from './contact';

const contentDiv = document.getElementById('content');

contentDiv.appendChild(navBar());
contentDiv.appendChild(aboutSection());
contentDiv.appendChild(menuSection());
contentDiv.appendChild(bookingSection());
contentDiv.appendChild(contactSection());