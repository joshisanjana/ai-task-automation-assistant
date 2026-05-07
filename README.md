# AI Task Automation Assistant using n8n

## Overview

AI Task Automation Assistant is an AI-powered workflow automation system built using n8n, OpenAI, Gmail API, and Google Calendar API.

The chatbot understands natural language commands and automatically performs tasks such as:

* Sending Emails
* Scheduling Meetings
* Creating Reminders
* Managing Tasks
* Sending Notifications

---

# Features

* AI chatbot automation
* Natural language understanding
* Gmail integration
* Google Calendar integration
* n8n workflow automation
* Full stack implementation
* Docker support
* GitHub-ready project structure

---

# Tech Stack

* n8n
* OpenAI API
* Node.js
* Express.js
* HTML
* CSS
* JavaScript
* Docker
* Gmail API
* Google Calendar API

---

# Project Architecture

```text
Frontend Chatbot
        ↓
Backend API
        ↓
n8n Workflow
        ↓
OpenAI Processing
        ↓
Gmail / Calendar Automation
```

---

# Folder Structure

```text
ai-task-automation-assistant/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── backend/
│   └── server.js
│
├── workflows/
├── database/
├── screenshots/
│
├── package.json
├── docker-compose.yml
├── README.md
└── .env
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-task-automation-assistant.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Backend

```bash
node backend/server.js
```

---

## Start n8n

```bash
docker-compose up -d
```

---

# Open Project

Frontend:

```text
frontend/index.html
```

n8n Dashboard:

```text
http://localhost:5678
```

---

# Example Commands

```text
Send email to sir about project review
```

```text
Schedule meeting tomorrow at 4 PM
```

```text
Remind me to submit assignment at 8 PM
```

---

# Workflow Process

1. User enters command
2. Frontend sends request to backend
3. Backend sends request to n8n webhook
4. OpenAI understands the command
5. Workflow executes action
6. User receives confirmation

---

# Future Enhancements

* Voice assistant
* WhatsApp integration
* AI memory
* Multi-agent workflows
* Analytics dashboard

---

# Resume Description

Developed an AI-powered automation assistant using n8n, OpenAI, Gmail API, and Google Calendar API to automate emails, meeting scheduling, reminders, and task management using natural language chatbot interactions.

---

# Author

Sanjana Joshi

---

# License

MIT License
