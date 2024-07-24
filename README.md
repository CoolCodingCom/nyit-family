<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CoolCodingCom/nyit-family">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">NYIT Family</h3>

  <p align="center">
    An awesome X (Twitter)-like website to better share and connect in our community!
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br /> -->
    <br />
    <a href="http://nyitfamily.site">View Website</a>
    ·
    <a href="https://github.com/CoolCodingCom/nyit-family/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/CoolCodingCom/nyit-family/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Our project, NYIT Family, started with the vision of building a community for New York Institute of Technology (NYIT) alumni, students, and faculty.

We aimed to create a platform where members of the NYIT community can share experiences, offer support, and collaborate on projects. By leveraging our network, we strive to foster a supportive environment that facilitates job searching, professional development, and mutual encouragement. This project goes beyond content sharing; it's about building a family where everyone benefits from collective wisdom and shared goals.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![Node][Node.com]][Node-url]
- [![Express][Express.com]][Express-url]
- [![MongoDB][MongoDB.com]][MongoDB-url]
- [![Vite][Vite.com]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

You can visit and use this website directly from our <a href="http://nyitfamily.site">demo</a>.

_Simply sign up or use your Google account to login, we protect our user credentials safely in cloud database._

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an instruction of how you may run this project locally with your own database and other customized settings.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Our app used node.js, you need to have Node.js and npm in your environment, kindly follow this [instruction](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), so you can use npm command later.

- npm
  ```sh
  npm install
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/CoolCodingCom/nyit-family
   ```
2. Install NPM packages for frontend code
   ```sh
   cd client
   npm install
   ```
3. Install NPM packages for backend code
   ```sh
   cd ..
   cd server
   npm install
   ```
4. Enter your mongoDB Atlas credentials and other things in `config/keys.js`
   ```js
   module.exports = {
     // google OAuth
     google: {
       CLIEND_ID: "",
       CLIEND_SECRET: "",
     },
     // Connect to mongoDB Atlas
     mongoDB: {
       MONGODB_USER: "",
       MONGODB_PASSWORD: "",
       MONGODB_DATABASE: "",
     },
     token: {
       PRIVATE_KEY: "your_own_secret_string_for_token",
     },
     // Simple email service
     mailtrap: {
       PASSWORD: "edbb47d4962e414565c07cb365f2ce38",
     },
     // Default ports for this app
     email: {
       BACKEND_URL: "http://localhost:5000",
       SENDER: "emailservice@yourdomain",
     },
     frontend: {
       FRONTEND_URL: "http://localhost:5173",
     },
   };
   ```
5. Run App in dev mode
`sh
    cd server
    npm start
    cd ..
    cd client
    npm run dev
    `
Then you can visit your own project at `localhost:5173` by default
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Marco Xu - [@LinkedIn](https://www.linkedin.com/in/marcotxu/) - txu4031@gmail.com

Levi Zhu - [@LinkedIn](https://www.linkedin.com/in/levizhu/) - levi970516@gmail.com

Project Link: [https://github.com/CoolCodingCom/nyit-family](https://github.com/CoolCodingCom/nyit-family)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

This project wouldn't have been possible without the help of the following resources. They provided valuable insights, tools, and guidance that were essential for its completion:

- [Choose an Open Source License](https://choosealicense.com)
- [Mailtrap](https://mailtrap.io/)
- [MongoDB Atlas](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjIlbeazb6HAxUMFq0GHfkIACQYABAAGgJwdg&ase=2&gclid=CjwKCAjwqf20BhBwEiwAt7dtdVJSoZULwwVDgDGHAlnUfbjghp6mRyIDxA071uuDAAOypCN_EpAFGBoCq6sQAvD_BwE&ohost=www.google.com&cid=CAESVuD2MLxL-ZWZzBxfe497GWdAL3BW4m9R0FX6JOVVGkTI5fB-pTD94kLoKMIQVcIe0elFf9I7r73hUhLe-qLoSnzPJ2ZCuYI6zZhlmozDkPVPlBfbCcxP&sig=AOD64_06JsKTcak9mGI30pih27D_Ouzjcw&q&nis=4&adurl&ved=2ahUKEwiznbKazb6HAxU0LTQIHcPVDlsQ0Qx6BAgGEAE)
- [Font Awesome](https://fontawesome.com)
- [Multer](https://www.npmjs.com/package/multer)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/CoolCodingCom/nyit-family.svg?style=for-the-badge
[contributors-url]: https://github.com/CoolCodingCom/nyit-family/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CoolCodingCom/nyit-family.svg?style=for-the-badge
[forks-url]: https://github.com/CoolCodingCom/nyit-family/network/members
[stars-shield]: https://img.shields.io/github/stars/CoolCodingCom/nyit-family.svg?style=for-the-badge
[stars-url]: https://github.com/CoolCodingCom/nyit-family/stargazers
[issues-shield]: https://img.shields.io/github/issues/CoolCodingCom/nyit-family.svg?style=for-the-badge
[issues-url]: https://github.com/CoolCodingCom/nyit-family/issues
[license-shield]: https://img.shields.io/github/license/CoolCodingCom/nyit-family.svg?style=for-the-badge
[license-url]: https://github.com/CoolCodingCom/nyit-family/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/Homepage-screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[MongoDB.com]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Express.com]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Node.com]: https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org
[Vite.com]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=%23fff
[Vite-url]: https://vitejs.dev/
