[![Netlify Status](https://api.netlify.com/api/v1/badges/422b1236-e125-4fab-b3f1-29b7ce35d33f/deploy-status)](https://app.netlify.com/sites/assessment-dec-2023/deploys)

# App Web Address

[December 2023 Assessment](https://assessment-dec-2023.netlify.app/).

# Tech Test Brief

## Overview

The application should closely align with the designs found in this [Figma file](https://www.figma.com/file/hGBI3zpyHia5yrWsgeMP3K/Untitled?node-id=0%3A1&mode=dev).

## Technical Requirements

### General

- The application must be developed using TypeScript.
- Utilise Styled Components for styling the components in accordance with the Figma designs.
- We often find the need to make slight alterations to the designs - please use your best judgement to make the necessary adjustments, particularly adding a column for usernames.
- Implement a search functionality that allows for searching payouts based on various criteria, including username. Please see the API Integration section for more details, and as above tweak the designs as you see fit.
- Implement pagination functionality that allows for navigating through the payouts. Please see the API Integration section for more details, and as above tweak the designs as you see fit.

### API Integration

You will be integrating with an existing API. Here are the details of the endpoints you will need to interact with:

1. **Payouts Endpoint**

   **Endpoint:** `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts`

   **Method:** GET

   **Description:** This endpoint retrieves a list of payouts. Each payout object contains the following fields:

   - `dateAndTime`: A string representing the date and time of the payout.
   - `status`: A string indicating the status of the payout (Pending or Completed).
   - `value`: A string representing the value of the payout.
   - `username`: A string representing the username associated with the payout.

    This endpoint also includes the following metadata:

   `"metadata": {"page": number, "limit": number, "totalCount": number}`

   You can attach the following query parameters to the endpoint to facilitate pagination:

   page: The page number to retrieve.
   limit: The number of payouts to retrieve per page.

3. **Search Endpoint**

   **Endpoint:** `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/search?query=SEARCH_TERM`

   **Method:** GET

   **Description:** This endpoint allows for searching payouts by username. Implement a functionality that facilitates user search with a keen focus on optimizing the user experience whilst considering performance.


## Evaluation Criteria

- Adherence to the design as specified in the Figma file.
- Proper usage of TypeScript and Styled Components.
- Attention to detail in implementing various functionalities.
- Optimizations implemented to enhance the user experience.
