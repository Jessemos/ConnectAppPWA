
window.addEventListener("DOMContentLoaded", function () {
  var pagesHTML = {
    'userSignedOut': {
      'navbar-container': {
        "HTML": `
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
      Home: {
        'main-container': {
          "HTML": `
        <div id="account-details"></div>
        <div id="firebaseui-auth-container"></div>
        <div hidden id="account-details"></div>
        </div>
      </div>
      `,
          'CSS': `
                padding-top : 200px;
                background: none;
              `
        }
      }
    },
    'userSignedIn': {
      'navbar-container': {
        "HTML": `
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
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" id="sign-out-btn" >Sign Out</button>
          </div>
          </nav>
          `,
        'buttons': {
          'sign-out-btn': {
            buttontEventType: "click",
            buttonEventFunction: function () {
              logUserOut();
            }
          },
          'home-nav-btn': {
            buttontEventType: "click",
            buttonEventFunction: function () {
              appPage.generateElements(pagesHTML.userSignedIn.Home, "main-container");
            }
          },
          'about-nav-btn': {
            buttontEventType: "click",
            buttonEventFunction: function () {
              appPage.generateElements(pagesHTML.userSignedIn.About, "main-container");
            }
          },

          'contact-us-nav-btn': {
            buttontEventType: "click",
            buttonEventFunction: function () {
              appPage.generateElements(pagesHTML.userSignedIn["Contact Us"], "main-container");
            }
          },
          'connect-nav-btn': {
            buttontEventType: "click",
            buttonEventFunction: function () {
              appPage.generateElements(pagesHTML.userSignedIn.Home, "main-container");
            }
          }
        }
      },
      'Home': {
        'main-container': {
          'HTML': `
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
            </div>`,
          'CSS': `
          padding-top : 70px;
          background-image: url('/images/Home-bg.jpg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          `,
          'buttons': {
            'get-started-btn': {
              buttontEventType: "click",
              buttonEventFunction: welcomePage = function () {
                appPage.generateElements(pagesHTML.userSignedIn.WelcomePage, "navbar-container");
                appPage.generateElements(pagesHTML.userSignedIn.WelcomePage, "main-container");
                $('#welcome-modal').modal();
              }
            }
          }
        }
      },
      'About': {
        "main-container": {
          "HTML": `
             <div hidden id="account-details"></div>
             <div class="row">
               <div class="col-lg-12">
                 <div class="content">
                   <h1>About Connect App</h1>                 
                 </div>
               </div>
             </div>
           `,
          'CSS': `
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
          "HTML": `
            <div hidden id="account-details"></div>
             <div class="row">
               <div class="col-lg-12">
                 <div class="content">
                   <h1>Contact Us</h1>                 
                 </div>
               </div>
             </div>
           `,
          'CSS': `
            padding-top : 70px;
            background-image: url('/images/ContactUs-bg.jpg');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            `
        }
      },
      'WelcomePage': {
        'navbar-container': {
          "HTML": `
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
              </ul>
              <span class="navbar-text mr-sm-2" id="sign-in-status">Signed In</span>
              <pre hidden id="account-details"></pre>
              <button class="btn btn-outline-success my-2 my-sm-0" type="button" id="sign-out-btn" >Sign Out</button>
            </div>
            </nav>
            `,
          'buttons': {
            'sign-out-btn': {
              buttontEventType: "click",
              buttonEventFunction: logUserOut = function () {
                logUserOut();
              }
            },
            'home-nav-btn': {
              buttontEventType: "click",
              buttonEventFunction: function () {
                appPage.changeCSSFile('/styles/app.css', 4);
                appPage.generateElements(pagesHTML.userSignedIn,"navbar-container");
                appPage.generateElements(pagesHTML.userSignedIn.Home,"main-container");

              }
            }
          }
        },
        'main-container': {
          "HTML": ` 
          <!-- Modal -->
          <div class="modal fade fbd-example-modal-lg" id="welcome-modal" tabindex="-1" role="dialog"
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
                          <button type="button" id="edit-base-form-btn" class="btn btn-primary">edit</button>
                      </div>
                      <div class="col-auto">
                          <button type="button" id="continue-base-form-btn" class="btn btn-primary justify-content-end">continue</button>
                      </div>
                  </div>
              </form>
          </div>
          <!-- Base Form Ends-->
      </div>`
          ,
          'CSS':
            `padding-top : 70px;
            background-image: none;
           `
          , 'buttons': {
            'edit-base-form-btn': {
              buttontEventType: "click",
              buttonEventFunction: function () {
                alert("edit-base-form-clicked");
              }
            },
            'continue-base-form-btn': {
              buttontEventType: "click",
              buttonEventFunction: function () {
                alert("continue-base-form-clicked");
                appPage.generateElements(pagesHTML.userSignedIn.CampusMap, "main-container");
                appPage.changeCSSFile('/styles/university_Campus.css', 4);
              }
            }
          }
        }
      },
      FullProfile: {
        HTML: ``,
        CSS: ``,
        buttons: {
          btn: ''
        }
      },
      CampusMap: {
        'main-container': {
          HTML: `
          <h1>
          University Campus Map <br>
        </h1>
      
        <div class="container" id="map-container">
          
        </div>
      
        <div class="container" id="container">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>`,
          CSS: `
          `
          //,
          //buttons: {
          //  btn: ''
          //}
        }
      },
      LocationZoom: {
        HTML: ``,
        CSS: ``,
        buttons: {
          btn: ''
        }
      }
    }
  }

  class appPage {
    pageHTML = null;
    homePage = null;

    constructor(pagesHTML, homePage) {
      this.pageHTML = pagesHTML;
      this.homePage = homePage;
      this.generate();
    }
    static changeCSSFile(cssFile, cssLinkIndex) {
      var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

      var newlink = document.createElement("link");
      newlink.setAttribute("rel", "stylesheet");
      newlink.setAttribute("type", "text/css");
      newlink.setAttribute("href", cssFile);
      document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    }

    static generateElements(pageElements, elementID) {
      var pageContent = pageElements;
      document.getElementById(elementID).innerHTML = pageContent[elementID]["HTML"];
      if ("CSS" in pageContent[elementID]) {
        document.querySelector("#" + elementID).style.cssText += pageContent[elementID]["CSS"];
      }
      if ("buttons" in pageContent[elementID]) {
        for (const elementButtons in pageContent[elementID]["buttons"]) {
          document.getElementById(elementButtons).addEventListener(pageContent[elementID]["buttons"][elementButtons]["buttontEventType"], pageContent[elementID]["buttons"][elementButtons]["buttonEventFunction"]);
        }
      }
    }
    generate() {
      appPage.generateElements(this.pageHTML, "navbar-container");
      appPage.generateElements(this.pageHTML[this.homePage], "main-container");
    }
  }

  //All code here
  userSignedIn = function () {
    var userSignedInPage = new appPage(pagesHTML.userSignedIn, "Home");
    //userSignedInPage.loadPage(pagesHTML.userSignedIn);
    //userSignedInPage.loadPage(pagesHTML.Home);
  };

  userSignedOut = function () {
    var userSignedOutPage = new appPage(pagesHTML.userSignedOut, "Home");
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
        // document.getElementById('loader').style.display = 'none';
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
        userSignedIn();
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        /*user.getIdToken().then(function (accessToken) {
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
        });*/
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




