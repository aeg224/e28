# Project 3
+ By: Alexander Giannini
+ Production URL: <http://e28p3.alex-giannini.me>

## Outside resources

Changing Title 1: https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
Changing Title 2: https://github.com/vuejs/vue-router/issues/914
Persist State Plugin for Vuex: https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh
Bootstrap: https://getbootstrap.com/
Bootstrap NavBar: https://getbootstrap.com/docs/4.0/components/navbar/
Bootstrap Form Template: https://getbootstrap.com/docs/4.0/components/forms/


##### From p2
Helped Applying Background color to whole Vue App: https://stackoverflow.com/questions/54418163/background-color-doesnt-apply-to-whole-page-vue-js
Post with Axios: https://masteringjs.io/tutorials/axios/post
Emiting from within a method: https://forum.vuejs.org/t/vuejs-emitting-a-custom-event-within-a-function-in-methods-object/22577
Checking for Undefined: https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript
Interpolation within Component: https://stackoverflow.com/questions/43211760/how-to-solve-interpolation-inside-attributes-has-been-removed-use-v-bind-or-the


## Notes for instructor

My application uses the National Park Services API to display information about every park in their database. It allows logged in users to see detailed information on each park and allows them to leave comments. In addition, there is a contact page.  

To manage the two API calls, I used two different instances of axios. The e28 api uses .env.production to manage the API change from dev to production. 

##### State management w/ Vuex; at least one data entity of your app should be managed via a Vuex store

###### My implementation of Vuex is very similar to the one demonstrated in class. It stores the user ID state as well as the MasterParkList Page's state. I decided to use it for the MasterParkList page after realizing that it would be much more convenient for the user. There are over 20 versions of the MasterParkList page, so storing the state is helpful. 

###### To do this, I created a computed property in MasterParkList.vue called pageNum which returns the current state. Also, everytime the user presses the 'number button' changeResults' is called which modifies the state of the application. To ensure the Vuex state is stored across different routes, I used the Vuex Persist State Plugin, which I learned about from the stack overflow post listed above.

##### Authentication - Visitors should be able to register and login. Some aspect of the app should be restricted based on user’s login status.

###### Initially, after setting up the api's security, I was calling the API's /auth method on every page to check the registration status. Then, I realized I could implement the VUEX store, as shown in lecture. 

###### Users are able to register and login. If users are not logged in, they can view the main page but not the contact us page, or the individual park page. Also, the navbar displays the users name.

##### Form validation as applicable - client-side and server-side

###### In p2, I implemented server side rendering using the e28 API. For client side validation, I built custom javascript validation that runs before the server side. If the client side fails, the server side will run. 

##### Passing E2E testing for all features
###### My e2e testing tests all of the features of the app including: form validation, form submission, login, logout, registration, authorization and the Vuex Store's Master Park List state storage. The tests run through each and all pass.

###### Two notes about my E2E testing. On just a few occasions, I've had the tests fail due to (what I think are) latency issues. The few times this has occured I've run the test right afterwards and had them pass. Also, To test the registration, I needed to generate a unique email address every time. To do this, I use Math.floor(Math.random() * 100000). As a result, there is a 1 in 100000 chance the test will generate an allready used email address and will result in an error. 

