# Updating the Website (non-coder friendly!)

To update the website, it is easiest to make changes directly on GitHub by using the Add File and pencil-shapped Edit File buttons. 

GitHub will calls these changes a "commit" and will prompt you for a commit description, fill these fields to your liking. After adding your description select the `Commit directly to the main branch` option and press `Commit changes`

## Joining Form

1. Look at the embed information for the new form. To avoid formatting and other issues, copy only the **src="link"** field from the embed info
2. navigate to `src/pages/Join.tsx`. On line 11 (shown below), replace the src="link" field with the new value

```tsx
<iframe width="640px" height="600px" title="join-form" src="https://forms.office.com/Pages/ResponsePage.aspx?id=h1o6cprzIkqSRz_CQMATlnO8OjhqoIRIvJhMsNGBHK5UMDlIU0VNVTdMSTVMTTlCRThNNlo4R0FISy4u&embed=true" style={{border: "none", maxWidth: "100%", maxHeight: "100vh"}}> </iframe>
```

## Past Canoes

To add a past canoe, follow these steps:

1. Add the picture to the `src/assets/past-canoes` folder. The filename should to be in the `year.jpg` format. For example: `2022.jpg`

2. Open the `src/pages/PastCanoes.tsx` file, and paste the following line in top section of the file. Make sure to adjust this line to the year you're adding

```typescript
import canoe2022 from '../assets/past-canoes/2022.jpg';
```
3. Navigate to inside the PastCanoes() function and insert a new empty line after the following line:

``` tsx
{/** new canoe info goes here! */}
```
4. On the new line that you just created, insert the information for the new canoe in the format shown below. Recall that the image was named canoe2022 in step 2, if you're uploading a different year, this should be adjusted. The name and description should be in quotes.

```typescript
{PastCanoe(canoe2022, "NAME", "description")}
```


# Development (for coders!)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
