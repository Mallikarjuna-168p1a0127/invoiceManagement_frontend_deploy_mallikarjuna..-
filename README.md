Invoice Management System
A React-based web application for managing invoices with features like user authentication, CRUD operations, and data persistence.
🚀 Features

User Authentication (Login/Signup)
Create, Read, Update, and Delete Invoices
Sort invoices by date and amount
Filter invoices by status (Paid, Unpaid, Pending)
Responsive design
Local storage persistence
Form validation

🛠️ Installation

Clone the repository:

bashCopygit clone https://github.com/yourusername/invoice-management-system.git
cd invoice-management-system

Install dependencies:

bashCopynpm install

Required dependencies:

jsonCopy{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x.x"
  }
}
🏃‍♂️ Running the Application

Start the development server:

bashCopynpm start

Open your browser and navigate to:

Copyhttp://localhost:3000
📁 Project Structure
Copysrc/
├── components/
│   ├── Login.js         # User login component
│   ├── Signup.js        # User registration component
│   ├── Home.js          # Main dashboard with invoice list
│   ├── InvoiceForm.js   # Create/Edit invoice form
│   └── Navbar.js        # Navigation component
├── styles/
│   ├── App.css          # Global styles
│   ├── Auth.css         # Styles for Login/Signup
│   ├── Home.css         # Dashboard styles
│   ├── InvoiceForm.css  # Form styles
│   └── Navbar.css       # Navigation styles
└── App.js               # Main application component
🧩 Components Overview
Login Component

Handles user authentication
Form validation
Redirects to dashboard on successful login
Links to signup page for new users

Signup Component

New user registration
Form validation
Stores user data in localStorage
Redirects to login page after successful registration

Home Component

Displays list of invoices
Sorting functionality (date, amount)
Filtering by status
Delete invoice functionality
Links to create/edit invoices

InvoiceForm Component

Create new invoices
Edit existing invoices
Form validation
Status selection (Paid, Unpaid, Pending)
Automatic invoice number generation

Navbar Component

Navigation links
Logout functionality
Responsive design

🔒 Authentication Flow

User registers through the Signup page
Credentials are stored in localStorage
User logs in through the Login page
Authentication state is maintained using React state
Protected routes redirect to login if not authenticated

📝 Data Structure
Invoice Object Structure:
javascriptCopy{
  id: string,
  invoiceNumber: string,
  clientName: string,
  date: string,
  amount: number,
  status: 'paid' | 'unpaid' | 'pending'
}
🎨 Styling

Responsive design using CSS
Clean and modern UI
Status-based color coding
Interactive hover states
Mobile-friendly layout

🤝 Contributing

Fork the repository
Create a new branch
Make your changes
Submit a pull request
