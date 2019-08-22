
window.addEventListener("DOMContentLoaded", function () {
  var pagesHTML =
    {
      userSignedOut: {
        // title: "Web App",
        'navbar-container': {
          elementType: "HTML",
          elementValue: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar fixed-top">
        <a class="navbar-brand" href="/index.html">Web app</a>
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
        },
        'main-container': {
          elementType: "HTML",
          elementValue: `
        <div id="firebaseui-auth-container"></div>
        <div hidden id="account-details"></div>
        </div>
      </div>
      `},
        'account-details': {
          elementType: "HTML",
          elementValue: `
        textContent = 'null'
        `
        },
        'CSS': {
          elementType: "CSS",
          elementHTML: "main-container",
          elementValue: `
                padding-top : 200px;
                background: none;
              `
        }
      },

      userSignedIn: {
        'navbar-container': {
          elementType: "HTML",
          elementValue: `
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar fixed-top">
            <button class="navbar-brand btn btn-light" id="connect-nav-btn"->Connect app</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <button type="button" id="home-nav-btn" class="btn btn-light">Home</button>
                </li>
                <li class="nav-item">
                <button type="button" id="about-nav-btn" class="btn btn-light">About</button>
                </li>
                    <li class="nav-item">
                    <button type="button" id="contact-us-nav-btn" class="btn btn-light">Contact Us</button>
                </li>
            </ul>
            <span class="navbar-text mr-sm-2" id="sign-in-status">Signed In</span>
            <pre hidden id="account-details"></pre>
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" id="sign-out-btn">Sign Out</button>
          </div>
          </nav>
          `
        },
        'sign-out-btn': {
          elementType: "button",
          elementEventType: "click",
          elementEventFunction: 'logUserOut',
          elementEventFunctionParams: ''
        },
        'home-nav-btn': {
          elementType: "button",
          elementEventType: "click",
          elementEventFunction: 'loadPage',
          elementEventFunctionParams: 'Home'
        },
        'about-nav-btn': {
          elementType: "button",
          elementEventFunction: 'loadPage',
          elementEventFunctionParams: 'About'
        },
        'contact-us-nav-btn': {
          elementType: "button",
          elementEventType: "click",
          elementEventFunction: 'loadPage',
          elementEventFunctionParams: 'Contact Us'
        }
      },
      Home: {
        'main-container': {
          elementType: "HTML",
          elementValue: `
            <div hidden id="account-details"></div>
            <div class="row">
              <div class="col-lg-12">
                <div class="content">
                <h1>Connect</h1>
                <h3>Your app for student life</h3>
                <hr>
                <button id="get-started-btn" class="btn btn-default btn-lg"> <i> <img src="/images/connecticon.png"> </i> Get Started!</button>
                </div>
              </div>
            </div>
          `
        },
        'CSS': {
          elementType: "CSS",
          elementHTML: "main-container",
          elementValue: `
          padding-top : 70px;
          background-image: url('/images/Home-bg.jpg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          `
        },
        'get-started-btn': {
          elementType: "button",
          elementEventType: "click",
          elementEventFunction: 'loadPage',
          elementEventFunctionParams: 'Welcome Page'
        }
      },
      About:
      {
        "main-container": {
          elementType: "HTML",
          elementHTML: "main-container",
          elementValue: `
             <div hidden id="account-details"></div>
             <div class="row">
               <div class="col-lg-12">
                 <div class="content">
                   <h1>About Connect App</h1>                 
                 </div>
               </div>
             </div>
           `},
        'CSS': {
          elementType: "CSS",
          elementHTML: "main-container",
          elementValue: `
                padding-top : 70px;
                background-image: url('/images/about-bg.jpeg');
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                `
        }
      },
      'Contact Us': {
        "main-container": {
          elementType: "HTML",
          elementValue: `
            <div hidden id="account-details"></div>
             <div class="row">
               <div class="col-lg-12">
                 <div class="content">
                   <h1>Contact Us</h1>                 
                 </div>
               </div>
             </div>
           `},
        'CSS': {
          elementType: "CSS",
          elementHTML: "main-container",
          elementValue: `
            padding-top : 70px;
            background-image: url('/images/ContactUs-bg.jpg');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            `
        }
      },
      'WelcomePage': {
        'main-container': {
          elementType: "HTML",
          elementValue: ` 
          <!-- Modal -->
          <div class="modal fbd-example-modal-lg" id="welcome-modal" tabindex="-1" role="dialog"
              aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalCenterTitle">Welcom, <span
                                  id="welcom-modal-user-name-user-name">Jesse!</span></h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body">
                          <p>
                              <h3>Your connect app score is: <span id="welcome-modal-app-score">{user.appScore}</span>
                                  </h2>
                          </p>
                          <p>
                              <h5>You can increase your app score by following these steps: </h5>
                          </p>
                          <p>
                              <h3>Your connect app credit amount is: <span
                                      id="welcome-modal-app-credit">{user.appCredit}</span> </h3>
                          </p>
                          <p>
                              <h5>You can get more app credit by following these steps: </h5>
                          </p>
  
  
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                              <label class="form-check-label" for="defaultCheck1">
                                  I want this windows skipped from now on.
                              </label>
                          </div>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" data-dismiss="modal">Continue</button>
                      </div>
                  </div>
              </div>
          </div>
          <!--ModalEnd-->
          <!-- BaseForm-->
          <div class="container d-flex justify-content-center">
          <div>
              <p><h2> Please review your personal info: </h2><p>
            </div>
              <form>
                  <div class="form-row align-items-center">
                      <div class="form-group col-auto">
                          <label for="baseFormFirstName">First Name</label>
                          <input type="text" class="form-control" id="baseFormFirstName" placeholder="Jhon">
                      </div>
                      <div class="form-group col-auto">
                          <label for="baseFormMiddleName">Middle Name</label>
                          <input type="text" class="form-control" id="baseFormMiddleName" placeholder="Robert">
                      </div>
                      <div class="form-group col">
                          <label for="baseFormlastName">Last Name</label>
                          <input type="text" class="form-control" id="baseFormlastName" placeholder="Doe">
                      </div>
                  </div>
                  <div class="form-row align-items-center">
                      <div class="form-group col">
                          <label for="inputEmail4">Email</label>
                          <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                      </div>
                  </div>
                  <div class="form-row align-items-center">
                      <div class="form-group col">
                          <label for="inputAddress">Address</label>
                          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                      </div>
                  </div>
                  <div class="form-row align-items-center">
                      <div class="form-group col">
                          <label for="inputAddress2">Address 2</label>
                          <input type="text" class="form-control" id="inputAddress2"
                              placeholder="Apartment, studio, or floor">
                      </div>
                  </div>
                  <div class="form-row align-items-center">
                      <div class="form-group col">
                          <label for="inputCity">City</label>
                          <input type="text" class="form-control" id="inputCity">
                      </div>
                      <div class="form-group col">
                          <label for="inputState">State</label>
                          <select id="inputState" class="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                          </select>
                      </div>
                      <div class="form-group col-auto">
                          <label for="inputZip">Zip</label>
                          <input type="text" class="form-control" id="inputZip">
                      </div>
                  </div>
                  <div class="form-row align-items-center">
                      <div class="form-group">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="baseFormAgreetoTnC">
                              <label class="form-check-label" for="baseFormAgreetoTnC">
                                  I agreen to Terms & Conditions.
                              </label>
                          </div>
                      </div>
                  </div>
                  <div class="form-row align-items-center">
                      <div class="form-group">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="baseFormSkip">
                              <label class="form-check-label" for="baseFormSkip">
                                  I would like to skip this window from now on.
                              </label>
                          </div>
                      </div>
                  </div>
                  <div class="form-row align-items-center">
                      <div class="col-auto mr-auto">
                          <button type="submit" id="baseFromEdit" class="btn btn-primary">edit</button>
                      </div>
                      <div class="col-auto">
                          <button type="submit" id="baseFormContinue" class="btn btn-primary justify-content-end">continue</button>
                      </div>
                  </div>
              </form>
          </div>
          <!-- Base Form Ends-->
      </div>
  `
        },
        'CSS': {
          elementType: "CSS",
          elementHTML: "main-container",
          elementValue: `
                      padding-top : 70px;
                      background-image: none;
                      `
        }
      }
    };

  class appPage {
    //pagesHTML = null;
    //homePage = null;

    constructor(pagesHTML, homePage) {
      this.pagesHTML = pagesHTML;
      this.homePage = homePage;
    }
    generateElements () {
      var pageContent = this.pagesHTML;
      for (const dict in pageContent) {
        if (pageContent[dict]["elementType"] === "HTML") {
          document.getElementById(dict).innerHTML = pageContent[dict]["elementValue"];
        }
        if (pageContent[dict]["elementType"] === "CSS") {
          console.log(dict);
          console.log(pageContent[dict]["elementHTML"]);
          document.querySelector("#" + pageContent[dict]["elementHTML"]).style.cssText += pageContent[dict]["elementValue"];
        }
      }
    }

    generate () {
      this.generateElements(); 

    }
  }

  //All code here
  userSignedIn = function () {
    var userSignedInPage = new appPage(pagesHTML.userSignedIn, pagesHTML.Home);
    //userSignedInPage.loadPage(pagesHTML.userSignedIn);
    //userSignedInPage.loadPage(pagesHTML.Home);
    userSignedInPage.generate();
    document.getElementById("sign-out-btn").addEventListener("click", logUserOut);
    document.getElementById("connect-nav-btn").addEventListener("click", function () {
      userSignedIn();
    });
    document.getElementById("home-nav-btn").addEventListener("click", function () {
      userSignedIn();
    });
    document.getElementById("about-nav-btn").addEventListener("click", function () {
      userSignedInPage.loadPage(pagesHTML.About);
    });
    document.getElementById("contact-us-nav-btn").addEventListener("click", function () {
      userSignedInPage.loadPage(pagesHTML['Contact Us']);
    });
    document.getElementById("get-started-btn").addEventListener("click", function () {
      userSignedInPage.loadPage(pagesHTML['WelcomePage']);
      $('#welcome-modal').modal();
      userBaseForm(userProfile);

    });

  };

  userSignedOut = function () {
    var userSignedOutPage = new appPage();
    userSignedOutPage.loadPage(pagesHTML.userSignedOut);
    // document.getElementById('account-details').textContent = 'null';

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.

    ui.start('#firebaseui-auth-container', uiConfig);
  };

  logUserOut = function () {
    // console.log("Clicked Sign Out!");
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      console.log("Sign out Successfull!");
      alert('Redirectin to Home Screen');
      // window.location='/index.html';
    }, function (error) {
      // An error happened.
      console.log("Sign out ***NOT*** Successfull!");
    });
  };

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
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
      signInFailure: function (error) {
        // Some unrecoverable error occurred during sign-in.
        // Return a promise when error handling is completed and FirebaseUI
        // will reset, clearing any UI. This commonly occurs for error code
        // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
        // occurs. Check below for more details on this.
        return handleUIError(error);
      },
      uiShown: function () {
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
    privacyPolicyUrl: function () {
      window.location.assign('www.google.co.il');
    }
  };

  initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var user = {
          "displayName": user.displayName,
          "email": user.email,
          "emailVerified": user.emailVerified,
          "photoURL": user.photoURL,
          "uid": user.uid,
          "phoneNumber": user.phoneNumber,
          "providerData": user.providerData,
        }
        userSignedIn(user);
        user.getIdToken().then(function (accessToken) {
          document.getElementById('account-details').textContent = user;
          /*JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
          }, null, '  ');*/
        });
      } else {
        // User is signed out.
        userSignedOut();
        ui.start('#firebaseui-auth-container', uiConfig);

      }
    }, function (error) {
      console.log(error);
    });
  };

  initApp();

});




