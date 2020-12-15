COMPLETE README
COMPLETE TESTS
Add Server Side Authentication
change name of Vuex.store
FIX title of page (says p2 but should be p3)
change favicon


# Project 3
+ By: Alexander Giannini
+ Production URL: <http://e28p3.alex-giannini.me>

## Outside resources

Persist State Plugin for Vuex: https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh
Bootstrap: https://getbootstrap.com/
Bootstrap NavBar: https://getbootstrap.com/docs/4.0/components/navbar/
Bootstrap Form Template: https://getbootstrap.com/docs/4.0/components/forms/

Helped Applying Background color to whole Vue App: https://stackoverflow.com/questions/54418163/background-color-doesnt-apply-to-whole-page-vue-js

Post with Axios: https://masteringjs.io/tutorials/axios/post
Emiting from within a method: https://forum.vuejs.org/t/vuejs-emitting-a-custom-event-within-a-function-in-methods-object/22577
Checking for Undefined: https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript
Interpolation within Component: https://stackoverflow.com/questions/43211760/how-to-solve-interpolation-inside-attributes-has-been-removed-use-v-bind-or-the


## Notes for instructor







# Project 2
+ By: Alexander Giannini
+ Production URL: http://e28p2.alex-giannini.me/

My Application uses the [National Park Service API](nps.gov/subjects/developer/api-documentation.htm) to generate pages on each national park in the US. Also, it uses the e28 API to store and display comments on the individual park pages. And, it uses the e28 API to store comments submitted via the Contact Us page. 

## Pages summary
My application contains three routes. They correspond with the 'Master Park List' component, the 'Individual Park' component and the 'Contact Us' component. 

### 'Master Park List' page
This page makes the NPS API call. It does this with an Axios get request. Because there are about 500 National Parks, I limit the call to 50 at a time. Image and title are displayed in bootstrap cards. The 'More Info' button leads to that specific parks' 'Individual Park' page.

### 'Individual Park' page
This page displays the individual park data and allows users to leave comments. The comments are stored in the e28 api and reactively displayed. If the form is given an invalid value, it displays the error message sent by the API. This page also makes an additional call to park API and one to the e28 API (If I had more time, I would have optimized by only calling the Park API once in the application.)

### 'Contact Us' page
This page displays a form that allows users to submit feedback. Their messages are kept in the e28 api's 'Contact Form' section. If the form is given an invalid value, it displays the error message sent by the API.

## SFC summary
My SFC's include: MasterParkList.vue, NavBar.vue, ParkPage.vue, and ContactPage.vue.  
  
MasterParkList.vue: makes the API call to the National Park API and displays the name and picture from each park. Also, it only displays 50 at a time. It does by using the API's limit functionality.

NavBar.vue: displays a Bootstrap navbar. Initially I was going to build a login functionality that would change the contents of the navbar. I was not able to do this in time, but kept the component. 

ParkPage.vue: displays the individual park's data and allow users to post comments. The comments are displayed in Bootstrap cards and are stored in the e28 API. The park data is displayed throughout the page and is generated with the parkId which is passed as a prop.

ContactPage.vue: displays a form that allows users to submit a message. The message is sent to the e28 API which is stored. If the form is passed invalid data, it displays the error message.


## Server interaction
My application uses two API's, the e28 API and the National Park Services (NPS) API.

e28 '/comments' GET
This call is made when each 'Individual Park' page is loaded. If a comment share's the park's Park Code, it is displayed on the page.

e28 '/comments' POST
This call is made when a comment is submitted via the 'Individual Park' page. It passes three arguments, the name, comment and parkId.

e28 '/contactForm' POST
This call is made when a contact message is sent to via the contact page. The data is stored in the e28 API, though it is not displayed in the app. To confirm the information is displayed correctly, check the e28-api page @ http://e28-api.alex-giannini.me/

NPS API GET
This call is made when retrieving data from the NPS API. Some of the API calls include the LIMIT parameter and some include the parkId.

## Outside resources
Bootstrap: https://getbootstrap.com/
Bootstrap NavBar: https://getbootstrap.com/docs/4.0/components/navbar/
Bootstrap Form Template: https://getbootstrap.com/docs/4.0/components/forms/

Helped Applying Background color to whole Vue App: https://stackoverflow.com/questions/54418163/background-color-doesnt-apply-to-whole-page-vue-js

Post with Axios: https://masteringjs.io/tutorials/axios/post

Emiting from within a method: https://forum.vuejs.org/t/vuejs-emitting-a-custom-event-within-a-function-in-methods-object/22577

Checking for Undefined: https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript

Interpolation within Component: https://stackoverflow.com/questions/43211760/how-to-solve-interpolation-inside-attributes-has-been-removed-use-v-bind-or-the

## Notes for instructor
Initially, I was going to build a portfolio page. Then I decided I wanted to use a outside API so I searched and found the National Parks Services API.

I first created the initial Master Park List componenet. Then, I implemented the Router and created the individual parks pages. Then, I modified the e28 API to accept comments, and created the comment functionality. Finally, I created the Contact Us Page and modified the e28 API to accept messages.

This project was very productive for me, and allowed me to explore many of the topics covered in class. If I had more time, I would have improved the efficiency of the app by only having one API call and incorporated login functionality. Wh








ADDED FOR p3
