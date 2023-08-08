Shared Dependencies:

1. Base URL: `https://api.yait.io/v1` - This is the base URL for all API requests and is shared across all API related files.

2. API Endpoints: `/kb/qa`, `/kb/search`, `/kb/podcasts` - These are the endpoints for the API requests and are shared across the respective API files.

3. Request Methods: `POST`, `GET` - These are the HTTP methods used for the API requests and are shared across the respective API files.

4. Request Parameters: `query`, `size` - These are the parameters used in the request body for the API requests and are shared across the respective API files.

5. Response Data: The response data from the API requests is shared across the respective form components for display.

6. shadcn-ui Components: These are used for styling and design across all the files.

7. Form Components: `FormQA.js`, `FormSearch.js`, `FormPodcasts.js` - These are the form components used in the `index.js` file.

8. CSS Styles: `globals.css`, `Home.module.css`, `Form.module.css` - These are the CSS stylesheets used across all the files for styling.

9. Function Names: Functions to handle form submissions and API requests will be shared across the respective form and API files. The exact names will depend on the implementation, but could include functions like `handleSubmit`, `postQuestion`, `searchKB`, `getPodcasts`, etc.

10. DOM Element IDs: IDs for form elements and display containers will be shared across the respective form and `index.js` files. The exact names will depend on the implementation, but could include IDs like `qaForm`, `searchForm`, `podcastsForm`, `qaDisplay`, `searchResults`, `podcastsList`, etc.