import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Import specific icon packs
import { fas } from "@fortawesome/free-solid-svg-icons"; // Solid icons
import { fab } from "@fortawesome/free-brands-svg-icons"; // Brand icons
import { far } from "@fortawesome/free-regular-svg-icons"; // Regular icons

export default defineNuxtPlugin((nuxtApp) => {
  // Add the imported icons to the library
  library.add(fas, fab, far);

  // Register the FontAwesome component globally
  nuxtApp.vueApp.component("fa", FontAwesomeIcon);
});
