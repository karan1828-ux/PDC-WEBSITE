# PDC Website & ERP System

## Overview

The Personality Development Club (PDC) Website & ERP System is a web-based platform designed to strengthen the club's digital presence while streamlining internal club operations.

The platform serves two primary purposes:

### 1. Public Awareness Website

A public-facing website that promotes the Personality Development Club, its vision, activities, events, achievements, and opportunities for student participation.

### 2. ERP Management System

An internal management system that enables efficient administration of club operations through Role-Based Access Control (RBAC). The ERP system allows different users to access functionalities based on their assigned roles and responsibilities.

---

## Objectives

* Increase awareness about the Personality Development Club.
* Provide information about club activities and events.
* Simplify internal club management processes.
* Implement secure Role-Based Access Control.
* Maintain centralized records of members and activities.
* Improve communication and operational efficiency within the club.

---

## Features

### Public Website

* Home Page
* About PDC
* Events & Workshops
* Achievements & Activities
* Contact Information
* Membership Information

### ERP System

* Secure Authentication
* Role-Based Access Control (RBAC)
* Member Management
* Event Management
* Attendance Tracking
* Administrative Dashboard
* Activity Records
* Permission Management

---

## Technology Stack

### Frontend

* React.js

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Authentication

* JWT (JSON Web Tokens)

---

## Project Structure

```text
client/          # React Frontend
server/          # Node.js Backend
database/        # Database Scripts
docs/            # Documentation
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd <project-folder>
```

### Install Dependencies

```bash
npm install
```

### Start Backend Server

```bash
npm run server
```

### Start Frontend Application

```bash
npm run dev
```

---

## Environment Configuration

Create a `.env` file in the server directory and configure the required environment variables.

Example:

```env
PORT=
DATABASE_URL=
JWT_SECRET=
```

Do not commit `.env` files to the repository.

---

## Development Workflow

### Branching Strategy
Developers must not push directly to the `main` branch.

All code changes must be submitted through Pull Requests.

---

## Team Collaboration Process

1. Create a feature branch from `develop`.
2. Implement the assigned feature.
3. Test the changes locally.
4. Push the feature branch.
5. Create a Pull Request to `develop`.
6. Wait for review and approval.
7. Merge after approval.

---

## Code Review Policy

Every Pull Request should be reviewed for:

* Code Quality
* Security
* Performance
* Readability
* Scalability
* Compliance with Project Standards

Approval from the Technical Head or designated reviewer is required before merging.

---

## Future Enhancements

* Advanced Analytics Dashboard
* Automated Attendance System
* Notification System
* Event Registration Portal
* Certificate Generation
* Mobile Application Support

---

## Maintainers
### Development Team

Personality Development Club (PDC)

---

## License

This project is developed for educational and organizational purposes under the Personality Development Club (PDC).
