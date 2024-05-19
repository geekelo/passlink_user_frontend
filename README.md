
<a name="readme-top"></a>
<div align="center">
  <!-- You are encouraged to replace this logo with your own! Otherwise, you can also remove it. -->
  <img src="https://dl.dropboxusercontent.com/s/110axfscx8e9q3q/Screenshot%202023-04-27%20024351.png" alt="logo" width=""  height="auto" />
  <br/>

  <h3><b>PASSLINK</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 PERSONAL INVENTORY ](#-personal-inventory-)
  - [Live demo](#live-demo)
  - [Video Presentation](#video-presentation-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🛠 Development Process ](#development-process)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 PassLink <a name="about-project"></a>


"**PassLink** is an event check-in application built with React on the frontend and Ruby on Rails for the backend. It is designed to streamline the event check-in process, providing organizers and attendees with a seamless and efficient experience. Below, I'll outline the key aspects of PassLink, including its description, tech stack, development process, features, and how event check-ins are managed."
![alt text](image.png)

## Real-time Event Check-In:
PassLink simplifies the event check-in process by leveraging modern web technologies to provide real-time check-in capabilities. Here's a simplified explanation of how it works:

**Frontend Interaction:** When an attendee arrives at an event, they can use the PassLink app on their mobile device or desktop browser to check in. The React frontend captures the check-in request and sends it to the backend server for processing.
**Backend Processing:** The Ruby on Rails backend receives the check-in request, verifies the attendee's credentials, and updates the event attendance records in the database. It then sends a response back to the frontend to confirm the successful check-in.
**Real-time Updates:** The frontend receives the confirmation response from the backend and updates the user interface to reflect the attendee's check-in status in real-time.

## Live Demo & Presentation <a name="live-demo">
[LIVE DEMO](passlink.geekelo.com.ng)

<!-- Video Presentation -->
## Video Presentation <a name="video-presentation"></a>
[See Video](https://youtu.be/j_N5vON7X6U)


## 🛠 Built With <a name="built-with"></a>

## File Structure
PassLink/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── infographic1.png
│   │   ├── infographic2.png
│   │   └── passlink.png
│   ├── components/
│   │   ├── InfoNav.js
│   │   ├── CopyButton.js
│   │   ├── NavSection.js
│   │   ├── LandingSection.js
│   │   ├── SlideOne.js
│   │   ├── SlideTwo.js
│   │   └── ...
│   ├── data/
│   │   └── datalist.json
│   ├── homePage/
│   │   ├── javascripts/
│   │   │   ├── navsection.js
│   │   │   ├── landingsection.js
│   │   │   ├── footersection.js
│   │   │   └── infosection.js
│   │   └── stylesheets/
│   │       ├── desktop/
│   │       │   ├── infonav.css
│   │       │   ├── bodysection.css
│   │       │   ├── slides.scss
│   │       │   ├── arrows.scss
│   │       │   └── navsection.css
│   │       ├── mobile-tablets/
│   │       │   └── navsectionMobile.css
│   │       └── ...
│   ├── __tests__/
│   │   ├── InfoNav.test.js
│   │   ├── CopyButton.test.js
│   │   ├── NavSection.test.js
│   │   ├── LandingSection.test.js
│   │   ├── SlideOne.test.js
│   │   ├── SlideTwo.test.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── package-lock.json
├── README.md
└── ...


### Tech Stack <a name="tech-stack"></a>

PassLink utilizes a modern tech stack to ensure reliability, scalability, and performance. Some of the technologies and frameworks used in its development include:

**Frontend:** React, HTML, CSS, JavaScript
**Backend:** Ruby on Rails for server-side logic and API endpoints
**Database:** PostgreSQL or MySQL for storing event data and attendee information
<!-- <details>
  <summary>Ruby on Rails</summary>
  <ul>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
    <li><a href="https://guides.rubyonrails.org/">Rails</a></li>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>  -->


<!-- Features -->

### Key Features <a name="key-features"></a>

- **Real-time Event Check-In:** Provides attendees with a seamless check-in experience, updating event attendance records in real-time.
- **Efficient Backend Processing:** Utilizes Ruby on Rails backend to efficiently process check-in requests and manage event data.
- **Responsive User Interface:** Built with React to ensure a responsive and intuitive user interface across devices and screen sizes.
- **Secure Authentication:** Implements secure authentication mechanisms to verify attendee credentials and prevent unauthorized access.
- **Customizable Event Pages:** Allows event organizers to customize event pages with branding, logos, and event details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEVELOPMENT PROCESS -->
## 💻 Development Process: <a name="development-process"></a>

The development of PassLink followed a structured process that involved:

- **Requirements Gathering:** Understanding the requirements of the project by studying project materials and conducting stakeholder interviews.
- **Design and Prototyping:** Creating wireframes and prototypes to visualize the user interface and interactions.
- **Development:** 
  - Writing clean and modular code using React for the frontend and Ruby on Rails for the

 backend.
  - Implementing features iteratively and conducting thorough testing at each stage of development.
- **Testing:** Conducting unit tests, integration tests, and end-to-end tests to ensure the reliability and stability of the application.
- **Deployment:** Deploying the application to a production environment, configuring servers, and optimizing performance.
- **Monitoring and Maintenance:** Monitoring application performance, addressing bugs and issues, and implementing new features and updates as needed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get started with PassLink, follow these steps:

### Prerequisites

In order to run PassLink locally, you need:

- A code editor like Visual Studio Code
- Node.js and npm installed on your machine
- Ruby and Rails installed on your machine

### Setup

Clone this repository to your desired folder:


```sh
   git clone https://github.com/geekelo/passlink.git
   cd passlink
```

### Install

Install dependencies for both the project:


```sh
  cd passlink_user_frontend
  npm install
```

### Usage

To run the project locally, follow these steps:


1. Start the React development server:

```sh
  cd passlink_user_frontend
  npm start
```

3. Open your browser and navigate to `http://localhost:3000` to view the PassLink application.

### Run Tests

To run tests, run the following command:

```sh
  cd passlink_user_frontend
  rspec
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>



👤 **Your Name**

- GitHub: [@githubhandle](https://github.com/your-username)
- Twitter: [@twitterhandle](https://twitter.com/your-twitter-handle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/your-linkedin-profile)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] Implement user authentication and authorization features.
- [ ] Enhance analytics dashboard with additional visualizations and insights.
- [ ] Integrate third-party services for email notifications and event management.
- [ ] Add support for multiple languages and internationalization.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/your-username/passlink/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>


If you like PassLink, give it a ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Credit for icons; Fontawesome and Material icons

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
