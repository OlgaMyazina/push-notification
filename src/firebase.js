import firebase from 'firebase/app'
import 'firebase/messaging'

const token =
  'BDcVn3AZGrjuCv_OtyHX7nhD1TVT-oPx-IgdE7sTKaRzBprRHWcm1pQRvoc-uNK-gW99FxDD6EtUZMKnSwH94ck'

const firebaseConfig = {
  apiKey: 'AIzaSyDvGBJGH4qzuBsjnc0MahcsRRo6ZkSdx3o',
  authDomain: 'demoproject-57fe6.firebaseapp.com',
  projectId: 'demoproject-57fe6',
  storageBucket: 'demoproject-57fe6.appspot.com',
  messagingSenderId: '269322130747',
  appId: '1:269322130747:web:22311f7ea769aabfa3931e',
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

export const getToken = (setTokenFound) => {
  return messaging
    .getToken({ vapidKey: token })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken)
        setTokenFound(true)
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        )
        setTokenFound(false)
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err)
      // catch error while creating client token
    })
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload)
    })
  })
