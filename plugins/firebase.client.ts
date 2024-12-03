// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue } from "firebase/database";

// export default defineNuxtPlugin((nuxtApp) => {
//   const runtimeConfig = useRuntimeConfig();
//   const firebaseConfig = runtimeConfig.public.firebaseConfig;

//   const firebaseApp = initializeApp(firebaseConfig);
//   const db = getDatabase(firebaseApp);

//   onValue(ref(db), (snapshot) => {
//     localStorage.setItem("productData", JSON.stringify(snapshot.val()));
//   });
// });
