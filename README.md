[react-list-detail](https://alchemycodelab.github.io/react-list-detail/)
========================================================================

List & Detail {#list--detail}
=============

Demo
----

**Note: Your app should look different, with your own styles applied,
but the core functionality will be the same.**

<https://alchemy-react-character-catalog.netlify.app/>

### Learning Objectives

-   Use react-testing-library to test components
-   Use snapshot testing for presentational components
-   Use mock service worker (MSW) to mock out an API in a test
-   Use css modules to manage component-level styling

### Description

This is truly a build from scratch deliverable. You will need to pick an
API to get a list of things and display them on a page. Here are some
free ones to get you started:

-   [Rick And Morty](https://rickandmortyapi.com/documentation)
-   [Avatar](https://last-airbender-api.herokuapp.com/)
-   [Hey Arnold!](https://hey-arnold-api-documentation.netlify.com/)
-   [Futurama](http://futuramaapi.herokuapp.com)

**NOTE: You're going to need to install React Router for this:
`npm i react-router-dom@5`{.language-plaintext .highlighter-rouge}**

### Acceptance Criteria

-   A user can view a list of items (characters, quotes, animals, etc)
    -   STRETCH: Add pagination to the list view
-   A user can click on an item from the list to view more details about
    the item
    -   This should navigate the user to a detail view with a back
        button to return to the list
-   Behavior tests exist for all views
-   Snapshot tests exist for all components
-   STRETCH: Add a home page with tests
-   STRETCH: Add a header component that allows you to navigate to the
    home page

### Rubric

  | Task                                    | Points |
  | --------------------------------------- | -------- |
  | List View                               | 5 |
  | Detail View                             | 5 |
  | Behavior Tests for List & Detail view   | 4 |
  | API calls are mocked in tests           | 4 |
  | Snapshot Tests for all components       | 2 |

