import React from 'react';

import {About, Hero,Clients} from './dependencies';
let aboutContent = {
  string_1: "Welcome to Banking website. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.",
  string_2: "Germany",
  string_3: "Hello Germany atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  video_1: "https://www.youtube.com/watch?v=jDDaplaOz7Q",
  string_4: "Hello World",
  string_5: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
};

// let contactContent = {

//   address : "13/2 Action Area III, Kolkata 700028, India",
//   email_1 : "hotelfix@hotelfix.com",
//   email_2 : "worldwidehotelfix@hotelfix.com", 
//   number_1 : "+9162913688"

// };

function LandingPage() {
  return (
    <React.Fragment>
      <Hero slideName = "Hello"/>
      <About content = {aboutContent} />
      <Clients/>
    </React.Fragment>
  );
}

export default LandingPage;
