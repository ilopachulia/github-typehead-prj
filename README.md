# GitHub User Search

This project is a simple, yet powerful tool to search for GitHub users. It uses the GitHub API to fetch user data based on the search query.

## Features

- **Search Box**: A search box is provided for the user to input their search query.
- **User List**: The application fetches and displays a list of GitHub users based on the search query.
- **Rate Limit Handling**: The application gracefully handles the GitHub API rate limit by displaying a friendly message when the limit is reached.

## Code Overview

The main components of the project are:

- `fetchUsers`: This is an asynchronous function that fetches users from the GitHub API based on the provided query, page number, items per page, sort parameter, and order parameter.
- `SearchBox`: This is a React component that maintains the state of the search query and the list of users. It also handles the event of changing the search input and fetches the users when the search query is updated.
- `User`: This is a React component that takes in user data as props and displays the user's login, avatar, and profile link.

## Usage

To use this application, simply type your search query into the search box. The application will automatically fetch and display the GitHub users that match your query.


## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the terms of the MIT license.

## Contact

If you want to contact me you can reach me at [+995 592 102 793](tel:+995592102793) or send me e-mail at [il.pachulia@gmail.com](mailto:il.pachulia@gmail.com).

## Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository**
   Open your terminal and run the following command to clone the repository:

    ```git clone https://github.com/ilopachulia/github-typehead-prj.git```


2. **Navigate to the Project Directory**

   Change your current directory to the cloned repository:
```cd github-typehead-prj```

3. **Install Dependencies**

   Run the following command to install the project dependencies:

   ```npm install```
4. **Start the Application**

   Run the following command to start the application:

   ```npm start```

   The application will be available at [http://localhost:5173](http://localhost:5173).


5. **Deployment**
   The application is deployed on Vercel and can be accessed at this [link](https://typehead-six.vercel.app/).

Please note that these instructions assume you have Node.js and npm installed on your machine. If not, you'll need to install those first. Also, the actual port on which the application runs might vary depending on your environment. You should see the exact URL in the terminal output of the `npm run dev` command. Enjoy exploring the application!
