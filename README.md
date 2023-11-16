<div align="center">

![MOCKUP](./src/assets/app-mockup.png)

<a name="readme-top"></a>

  <h3><b>final_capstone_front_end</b></h3>

</div>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Final Capstone Front End ](#-final-capstone-front-end-)
  - [🛠 ER Diagram ](#-er-diagram-)
  - [💻 Link to Back End ](#-link-to-back-end-)
  - [💻 Link to Kanban board information ](#-link-to-kanban-board-information-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo](#live-demo)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ (OPTIONAL) ](#-faq-optional-)
  - [📝 License ](#-license-)
# 📖 Final Capstone Front End <a name="about-project"></a>

**Final Capstone Front End** The front-end component of this final capstone project is developed using React.js, designed to provide an intuitive user interface for managing creation of places to rent and make reservations for those places. It communicates with the back-end API built with Ruby on Rails.

## 💻 Link to Back End <a name="link-to-back-end"></a>

[Link to Back End](https://github.com/grauJavier/final-capstone-back-end)

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## 💻 Link to Kanban board information <a name="built-with"></a>

[Link to Kanban Board](https://github.com/grauJavier/final-capstone-back-end/projects/1)

[Initial state](https://github.com/grauJavier/final-capstone-front-end/issues/38)

This project was completed by three Team members:

- Javier Grau
- Manuel Sanchez
- Anthony Vásquez

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Technologies</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **React.js Components**
- **API Communication with Backend**
- **User-Friendly Interface**
- **Responsive Design**
- **State Management**

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://rent-eaze.onrender.com/)

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- Node.js: You need Node.js to run the React.js application.
- npm: npm is used to manage packages in your React project.

### ⚠️*IMPORTANT*
To upload and view images locally from your localhost, you must first set up a Firebase project. You'll need to create a [Firebase](https://firebase.google.com/) account, then configure a new project with Storage enabled. Within the project, you can generate a credential key which is necessary to authenticate Storage uploads from your local environment. ***For security, it is critical not to share this private key with others.*** We recommend reviewing Firebase's documentation to complete these setup steps. If going through the full configuration process seems daunting, you're welcome to test our [Online Demo](https://rent-eaze.onrender.com/) instead. However, if you still prefer to run it locally, we can provide a video tutorial and brief summary of the key implementation steps to integrate Storage.

[![Video](https://img.youtube.com/vi/-IFRVMEhZDc/maxresdefault.jpg)](https://www.youtube.com/watch?v=-IFRVMEhZDc)

#### Video resume
Here are the key steps required to use Firebase Storage on the web based on the video:

1. Create a Firebase project at console.firebase.google.com and select "Add Firebase to your web app". 

2. Register the app by adding a configuration to your HTML file. This gives access to the Firebase SDK.

3. Use the Firebase SDK to initialize a storage reference:

  ```js
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = firebase.storage();
  ```

4. Create a reference to an image file location and upload using put():

  ```js
  // Create a storage reference from our storage service
  const storageRef = storage.ref();

  // Upload the file
  const uploadTask = storageRef.child('images/stars.jpg').put(file);
  ```

5. Monitor upload progress and get the download URL when complete:

  ```js
  uploadTask.on('state_changed', ..., 
  uploadTask.then(snapshot => {...})
  ```

6. Display the image by binding the download URL:

  ```html
  <img src="{{downloadURL}}">
  ```

The video demonstrates integrating Firebase Storage with a simple image uploading web app. Following these steps provides a way to store and access files from Firebase Storage in a web application.


### Setup

Clone this repository to your desired folder:

sh <br>
cd my-folder <br>
git clone git@github.com:grauJavier/final-capstone-front-end.git

### Install

Install this project with:

```bash
npm install
```

### Usage

To run the project, execute the following command:

```bash
npm run dev
```

### Run tests <a name="tests"></a>
To run the frontend tests, follow these steps:

### Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js: You need Node.js to execute the test scripts.
- npm: npm is used to manage packages in your React project.

Additionally, make sure you have installed the following testing extensions:

- jest-fetch-mock: Used for mocking fetch requests.
- redux-mock-store: Used for mocking Redux store.
- redux-thunk: Used for testing Redux thunks.

### Running Tests

Execute the following command to run the tests:

```bash
npm run test
```
This command will run the test suites and provide you with the test results and coverage information.


<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Javier Grau**

- GitHub: [@grauJavier](https://github.com/grauJavier)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/javiergrau)

👤 **Manuel Sanchez**

- GitHub: [@Luffytaro22](https://github.com/Luffytaro22)
- LinkedIn: [Manuel Sanchez](https://www.linkedin.com/in/manuel-alejandro-sanchez-sierra/)

👤 **lRebornsl**

- GitHub: [@lRebornsl](https://github.com/lRebornsl)
- Twitter: [@RebornsDev](https://twitter.com/RebornsDev)
- LinkedIn: [Anthony Vásquez](https://www.linkedin.com/in/avvm98/)

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **User Authentication and Authorization**
- [ ] **Integration with External APIs for Car Information**
- [ ] **User Profile Management**

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/grauJavier/final-capstone-front-end/issues).

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you find this project helpful, feel free to contribute or give it a star. Your support is appreciated!

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgments"></a>

- Behance and Murat Korkmaz for the [original design](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign)
- Microverse for providing the opportunity to learn in a collaborative environment.
- React.js Documentation for valuable resources on React development.
- GitHub for version control and collaboration tools.

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

- **Can I use your project as a template for my own project?**

  - Certainly, feel free to use this project as a template for your own work.

- **Is your project licensed?**

  - Yes, this project is open-source and available under the MIT License. You can find more details about the license [here](./LICENSE).

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is licensed under the MIT License - you can click here to have more details [MIT](./LICENSE).

<p align="right"\>(<a href="#readme-top"\>back to top</a>)</p>
