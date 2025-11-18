# Two layered webapp

This repository contains a simple two-layered application:

1. A **webapp** (frontend) that displays the date and time on the screen.
2. A **service** (backend) implemented in Node.js that serves the date and time via a REST API.

This application can be manually launched on a laptop. And the webapp will be deployed via GitHub Actions by 
devops code in another GitHub repo. That way, the webapp will be automatically deployed to a production 
environment whenever the devops repo is updated. The production environment
is using Elastic Beanstalk to deploy the web app in one EBS environment and the service in another.

Presently there is only a webapp. I want to add a service implemented
in Node.js Express. To demonstrate the service layer, change the webapp to call the service via REST API 
to get the current date and time, and display it on the screen.

---

## Technology assumptions

These assumptions are what an AI (or developer) should follow when building or modifying this project:

- **Runtime**: Node.js ≥ 24 and npm ≥ 11.
- **Service**:
  - Implemented in Node.js using Express (or equivalent HTTP framework).
  - Exposes two endpoints: `GET /` (health) and `GET /api/time`.
  - Listens on **port 5183** by default.
- **Webapp**:
  - Simple static web application (HTML/JavaScript/CSS).
  - Runs on **port 5173**.
  - Makes a REST call to the service at `http://localhost:5183/api/time` when running locally.
  - Displays the current date and time on the screen.
---

## Repository layout

- `.github/workflows/notify-deploy.yml`  
  GitHub Actions workflow that notifies a separate infrastructure/devops repository when this repo is updated.

- `webapp/`  
  Frontend web application that displays the date and time.

- `service/`  
  Backend Node.js REST service that provides the current date and time and a health endpoint.

---

## REST API Contract (Service Layer)

The service runs on port **5183** by default (configurable via `PORT` environment variable) and exposes the following endpoints.

### 1. Health Check

**Endpoint**

- Method: `GET`  
- Path: `/`

**Request**

- Headers: none required  
- Body: none

**Responses**

- `200 OK`  
  - Content-Type: `text/plain`  
  - Body:  
    ```text
    OK
    ```

Note: For backward compatibility, the service also responds to `GET /health` with the same `200 OK`, but Elastic Beanstalk's default health check uses `/`.

### 2. Current Date and Time

**Endpoint**

- Method: `GET`  
- Path: `/api/time`

**Request**

- Headers: none required  
- Body: none

**Responses**

- `200 OK`  
  - Content-Type: `application/json`  
  - Body (example):  
    ```json
    {
      "now": "2025-01-31T12:34:56.789Z"
    }
    ```

  - Field description:
    - `now` (string):  
  - Current server date and time in ISO 8601 format.  
  - Time zone: UTC (e.g., produced via `new Date().toISOString()`).

**Error responses**

- For this demo, you may always return `200 OK` unless there is a server-side error, in which case:
  - `500 Internal Server Error` with a JSON body such as:
    ```json
    { "error": "Internal Server Error" }
    ```

---

## Webapp Requirements

The webapp:

- Runs on **port 5173**.
- Displays the current date and time on the screen.
- Obtains the date/time by calling the service’s `/api/time` endpoint.

### Expected behavior

- On page load (or via a button), the webapp sends a `GET` request to:

  ```text
  http://localhost:5183/api/time
  ```

- It reads the JSON response:
  ```json
  {
    "now": "<ISO 8601 timestamp>"
  }
  ```
- It then renders the `now` value somewhere visible on the page (e.g., a `<div>` or `<span>`).
  - If the service is cannot be connected to or the service returns an error, the webapp should display "service unavailable".

### Configurability
Webapp:
- The service's base URL must be configurable via an environment variable `SERVICE_URL`.  If the environment variable
isn't set, assume it to be `http://localhost:5183` for those operating in a local development environment.

Service:
- For CORS, allow access from webapps who's url starts with (in my case): "asgardeo-webapp-demo-env." and ends with 
".us-east-1.elasticbeanstalk.com". Requests can have other characters in the middle.
The following is the format used by elastic beanstalk: [environment-name].[environment-id].[region].elasticbeanstalk.com
environment-id changes if the EBS environment is recreated.
---
[Sidebar on CORS](sidebare%20on%20CORS.md)

## Local Development

### Prerequisites

- Node.js ≥ 24
- npm ≥ 10

### 1. Run the Service
The service is started in the following way: `npm run start`.

### 2. Run the webapp
The webapp is started in the following way: `npm run start`.
