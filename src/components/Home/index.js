import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Home extends React.Component {
  state = {
    invoices: [],
    sortBy: 'date',
    filterStatus: 'all'
  };

  componentDidMount() {
    const storedInvoices = localStorage.getItem('invoices');
    if (storedInvoices) {
      this.setState({ invoices: JSON.parse(storedInvoices) });
    }
  }

  handleSort = (e) => {
    const sortBy = e.target.value;
    this.setState({ sortBy }, this.sortInvoices);
  };

  handleFilter = (e) => {
    this.setState({ filterStatus: e.target.value });
  };

  sortInvoices = () => {
    const { invoices, sortBy } = this.state;
    const sortedInvoices = [...invoices].sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date);
      }
      return b[sortBy] - a[sortBy];
    });
    this.setState({ invoices: sortedInvoices });
  };

  deleteInvoice = (id) => {
    const invoices = this.state.invoices.filter(invoice => invoice.id !== id);
    this.setState({ invoices });
    localStorage.setItem('invoices', JSON.stringify(invoices));
  };

  render() {
    const { invoices, filterStatus } = this.state;
    const filteredInvoices = filterStatus === 'all' 
      ? invoices 
      : invoices.filter(invoice => invoice.status === filterStatus);

    return (
      <div className="home-container">
        <div className="home-header">
          <h1>Invoices</h1>
          <Link to="/invoice/new" className="add-button">Add New Invoice</Link>
        </div>
        
        <div className="controls">
          <select onChange={this.handleSort}>
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
          </select>
          
          <select onChange={this.handleFilter}>
            <option value="all">All Status</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="invoices-list">
          {filteredInvoices.map(invoice => (
            <div key={invoice.id} className="invoice-card">
              <div className="invoice-header">
                <h3>Invoice #{invoice.invoiceNumber}</h3>
                <span className={`status ${invoice.status.toLowerCase()}`}>
                  {invoice.status}
                </span>
              </div>
              <div className="invoice-body">
                <p>Client: {invoice.clientName}</p>
                <p>Date: {new Date(invoice.date).toLocaleDateString()}</p>
                <p>Amount: ${invoice.amount}</p>
              </div>
              <div className="invoice-actions">
                <Link to={`/invoice/edit/${invoice.id}`} className="edit-button">
                  Edit
                </Link>
                <button 
                  onClick={() => this.deleteInvoice(invoice.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;