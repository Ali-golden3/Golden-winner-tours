/* =========================================
   FIREBASE CONFIG
   (Compat SDK - يشتغل مباشرة بـ <script> عادي
   من غير ما تحتاج bundler زي webpack)
========================================= */

const firebaseConfig = {
  apiKey: "AIzaSyD16h-t6ifsmgy8XVZZ_jREUs9mu_htDxU",
  authDomain: "golden-winner-tours.firebaseapp.com",
  projectId: "golden-winner-tours",
  storageBucket: "golden-winner-tours.firebasestorage.app",
  messagingSenderId: "912089451686",
  appId: "1:912089451686:web:c4ec5783c29bc5a3467867",
  measurementId: "G-5VJ0YJPBSM"
};

// Initialize Firebase (compat mode)
firebase.initializeApp(firebaseConfig);

// عناصر هنستخدمها في باقي الملفات (programs.js, admin.html)
const db = firebase.firestore();
const auth = firebase.auth();