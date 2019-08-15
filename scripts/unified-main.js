
 // FirebaseUI config.
 window.addEventListener("DOMContentLoaded", function()
 {
  //All code here
  var navbarContainer = document.getElementById("navbar-container");
  var mainContainer = document.getElementById("main-container");

  var pagesHtml = 
  { userSignedOut : {
      title: "Web App",
      navBarHTML :
        `
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar fixed-top">
        <a class="navbar-brand" href="/undex.html">Web app</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
        </ul>
        <span class="navbar-text mr-sm-2" id="sign-in-status">Signed Out</span>
        <pre hidden id="account-details"></pre>
      </div>
      </nav>
        `
      , mainHTML :
      `
        <div id="firebaseui-auth-container"></div>
        <div hidden id="account-details"></div>
        </div>
      </div>
      `
    },
    userSignedIn: { 
     navBarHTML :
    `
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar fixed-top">
    <a class="navbar-brand" href="/index.html">Connect app</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/Home/Home.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About/About.html">About</a>
        </li>
            <li class="nav-item">
          <a class="nav-link" href="/Contact/ContactUs.html">Contact Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
    </ul>
    <span class="navbar-text mr-sm-2" id="sign-in-status">Signed In</span>
    <pre hidden id="account-details"></pre>
    <button class="btn btn-outline-success my-2 my-sm-0" type="button" id="sign-out-btn">Sign Out</button>
  </div>
  </nav>
    `
    , 
    mainHTML :
    `
    <div hidden id="account-details"></div>
    <div class="row">
      <div class="col-lg-12">
        <div class="content">
          <h1>Connect</h1>
          <h3>Your app for student life</h3>
          <hr>
          <button id="get-Started-btn class="btn btn-default btn-lg"> <i> <img src="/images/connecticon.png"> </i> Get Started!</button>
        </div>
      </div>
    </div>
  `
    }
  }

    userSignedIn = function(){
    document.title = pagesHtml.userSignedIn.title;
    navbarContainer.innerHTML = pagesHtml.userSignedIn.navBarHTML;
    mainContainer.innerHTML = pagesHtml.userSignedIn.mainHTML;
    document.getElementById("sign-out-btn").addEventListener("click",logUserOut)
  };

  userSignedOut = function(){
    document.title = pagesHtml.userSignedOut.title;
    navbarContainer.innerHTML = pagesHtml.userSignedOut.navBarHTML;
    mainContainer.innerHTML = pagesHtml.userSignedOut.mainHTML;
    document.getElementById('account-details').textContent = 'null';

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.

  ui.start('#firebaseui-auth-container', uiConfig);  
  };

  logUserOut = function(){
    console.log("Clicked Sign Out!");
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("Sign out Successfull!");
    alert('Redirectin to Home Screen');
    // window.location='/index.html';
    }, function(error) {
    // An error happened.
    console.log("Sign out ***NOT*** Successfull!");
    });
  };
  
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        var user = authResult.user;
        var credential = authResult.credential;
        var isNewUser = authResult.additionalUserInfo.isNewUser;
        var providerId = authResult.additionalUserInfo.providerId;
        var operationType = authResult.operationType;
        // Do something with the returned AuthResult.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      signInFailure: function(error) {
        // Some unrecoverable error occurred during sign-in.
        // Return a promise when error handling is completed and FirebaseUI
        // will reset, clearing any UI. This commonly occurs for error code
        // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
        // occurs. Check below for more details on this.
        return handleUIError(error);
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    signInFlow: 'popup',
    signInSuccessUrl: '/index.html',
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
      
  initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        userSignedIn();
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {
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
        userSignedOut();
        ui.start('#firebaseui-auth-container', uiConfig);
              
      }
    }, function(error) {
      console.log(error);
    });
  }

  initApp();

});




