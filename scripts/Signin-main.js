 // FirebaseUI config.
 var uiConfig = {
        signInSuccessUrl: '/Home/connect.index.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: 'www.google.co.il',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('www.google.co.il');
        }
      };

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function(accessToken) {
              document.getElementById('sign-in-status').textContent = 'Signed in';
              document.getElementById('sign-in').textContent = 'Sign out';
              document.getElementById('account-details').textContent = JSON.stringify({
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
              }, null, '  ');
            });
          } else {
            // User is signed out.
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp();
      });