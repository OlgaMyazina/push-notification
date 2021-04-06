/* eslint-disable */
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js') //eslint-disable-line
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js') //eslint-disable-line

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyDvGBJGH4qzuBsjnc0MahcsRRo6ZkSdx3o',
  authDomain: 'demoproject-57fe6.firebaseapp.com',
  projectId: 'demoproject-57fe6',
  storageBucket: 'demoproject-57fe6.appspot.com',
  messagingSenderId: '269322130747',
  appId: '1:269322130747:web:22311f7ea769aabfa3931e',
}

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload)

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
