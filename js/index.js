import { initDropdowns } from "./modules/dropdown.js";
import { initCatalog, catalogVars, initContacts, headerScroll, initScrollContacts, scrollMenu,} from "./modules/header.js";
import { openBurgerMenu } from "./modules/header.js";
import { catalogTop, observeHeaderChanges } from "./modules/header.js";
import { onWidthMatch, myCallback } from "./modules/swiper-catalog.js";
import { openCatalog } from "./modules/header.js";

window.addEventListener('load', catalogTop);
window.addEventListener('resize', catalogTop);
window.addEventListener('scroll', catalogTop);

initDropdowns();
initCatalog();
catalogVars();
initContacts();
headerScroll();
initScrollContacts()
scrollMenu();
observeHeaderChanges();
onWidthMatch(myCallback);
openBurgerMenu()
openCatalog()