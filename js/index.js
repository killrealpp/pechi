import { initDropdowns } from "./modules/dropdown.js";
import { initCatalog, catalogVars, initContacts, headerScroll, initScrollContacts, scrollMenu,} from "./modules/header.js";
import { catalogTop, observeHeaderChanges } from "./modules/header.js";

window.addEventListener('load', catalogTop);
window.addEventListener('resize', catalogTop);

initDropdowns();
initCatalog();
catalogVars();
initContacts();
headerScroll();
initScrollContacts()
scrollMenu();
observeHeaderChanges();