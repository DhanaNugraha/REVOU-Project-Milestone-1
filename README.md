![Home Page](https://github.com/revou-fsse-oct24/milestone-1-DhanaNugraha/blob/main/readme-assets/siteHomePage.png)
# Hospital Website <img src="https://github.com/revou-fsse-oct24/milestone-1-DhanaNugraha/blob/main/readme-assets/title-logo.gif" width="42">
Welcome to [Hospital](https://hospitaldhana.netlify.app/), where it offer comprehensive care in a compassionate and patient-centered environment. Whether you are seeking for emergency sevices, specialized treatments, or booking an appointment, it is here to guide you every step of the way.
<br><br>
Explore the website to learn more about the hospital, facilities, and services offered to help you on your journey to better health. Thank you for choosing [Hospital](https://pet-shop-revou-module-2-assignment.site/) where your health is priority.


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Sections Overview](#sections-overview)
- [Installation](#installation)
- [Contributing](#contributing)
- [Deployment](#deployment)


## Features
- Sticky navigation bar with hamburger button for mobile user.
- Sticky emergency ambulance button.
- Hero section with sliding animation.
- Find a doctor form.
- facilities and services information. carousel.
- Patient testimonies. 
- Hospital information with fixed.  background.
- Hospital awards and accreditations.
- Footer section with contact information and navigation.


## Technologies Used
- HTML5
- CSS
- Javascript


## Sections Overview
### 1. Navigation Bar
- The navigation bar is a sticky nav bar that can be used to navigate the website. 
- There is also a non sticky section on the top of the page that contains some social media link of the Hospital.
-  Connected to the nav bar is a sticky emergency ambulance button to call an ambulance from a chosen hospital branch.


### 2. Header
- A hero section with auto sliding animation to display marketing banners.
- The buttons under the hero section can be used to move to a selected image.
  
### 3. Main 
- Find a doctor form, to find a a list of doctor with a specified requirement from the user.
- Facilities and service section. Displays information on some notable facilities and services the hospital has that is delivered using a content carousel.
- Patient experience section. shows some of the comments of patients that conducted their treatment in the hospital. A button under the image is used to navigate this section.
- About Us section, tells the story of the hospital values, vision, and mission. Along with the description, an image of the founders are attached and the picture of the hospital is used as the background.
- Hospital awards and accreditations section. This section is used to display some of the awards and/or accreditations the hospital have obtained.

### 4. Footer
- The footer includes the hospital logo, social media, navigation and copyright label
  


## Installation
1. clone the repository:
    ```
    https://github.com/DhanaNugraha/REVOU-Project-Milestone-1.git
    ```
2. Open the project directory:
    ```
    cd milestone-1-DhanaNugraha
    ```
3. Open the `index.html` file in your browser:
    ```
    start index.html
    ```
4. Call asset from assets folder into the html file:
    ```
    <img src="Assets\exp-1.png">
    ```
     

## Contributing
You will need a github account to clone this repository, make sure you're connected to github.
1. Clone the repository.
    ```
    https://github.com/DhanaNugraha/REVOU-Project-Milestone-1.git
    ```
2. Create a new branch named "feature" or "fix" which depends on the feature that we want to add.
    ```
    git branch -b "feature"
    ```
    or <br>
    ```
    git branch -b "fix"
    ```

3. Once the branch is established, move to the new branch using checkout.
    ```
    git checkout -b "feature"
    ```
    or <br>
     ```
    git checkout -b "fix"
    ```

4. You are now able to add your features or fixes. Once you are done, you will need to push it.
    ```
    git add .
    ```
    ```
    git commit -m "update message" // make sure to give details commit message to get better logs
    ```
    ```
    git push origin feature // use fix for fixes
    ```
 5. Then, you can merge your branch into main/master branch.
    ```
    git checkout main
    ```
    ```
    git pull origin main // pull the latest version before commit merge
    ```
    ```
    git merge feature // if there are any conflicts, you should resolve them manually. Use fix for fixes.
    ```
    ```
    git commit -m "Merge feature or fix into main"
    ```
    ```
    git push origin main
    ```


## Deployment
The project has been successfully deployed using Netlify using a custom domain created in Niagahoster. You can access the website by following this link: https://hospitaldhana.netlify.app/

### Custom Domain Using Niagahoster
![Niagahoster](https://github.com/revou-fsse-oct24/milestone-1-DhanaNugraha/blob/main/readme-assets/Niagahoster.png)
- Create a Niagahoster account and login.
- In the domain section, create a domain name that is still available for use.
- Choose the domain extention that you want and purchase the domain.
- Verify your purchase in your registered email.
- The custom domain is ready to be used.

### Deployment using Netlify
![Netlify](https://github.com/revou-fsse-oct24/milestone-1-DhanaNugraha/blob/main/readme-assets/Netlify.png)
- Create a Netlify account and login
- Connect the account to your Github account
- In the domain management section, add the newly acquired custom domain.
- In the option dropdown of the domain, pick set up netlify DNS.
- Afterwards, Netlify will provide domain name servers.
- Open Niagahoster and go to the domain settings.
- In the DNS/Nameserver section, change the nameservers into the ones that are provided by netlify.
- After a period of time, the DNS will be verified by Netlify and the website can now be opened using the custom domain.

