import React from 'react';
import './index.css';

class InvoiceForm extends React.Component {
  state = {
    invoiceNumber: '',
    clientName: '',
    date: '',
    amount: '',
    status: 'pending',
    error: ''
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      const invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
      const invoice = invoices.find(inv => inv.id === id);
      if (invoice) {
        this.setState({ ...invoice });
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const { invoiceNumber, clientName, date, amount, status } = this.state;

    if (!invoiceNumber || !clientName || !date || !amount) {
      this.setState({ error: 'Please fill in all fields' });
      return;
    }

    const invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    const { id } = this.props.match.params;

    if (id) {
      // Update existing invoice
      const updatedInvoices = invoices.map(invoice => 
        invoice.id === id 
          ? { ...this.state, id }
          : invoice
      );
      localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
    } else {
      // Create new invoice
      const newInvoice = {
        ...this.state,
        id: Date.now().toString(),
        amount: parseFloat(amount)
      };
      invoices.push(newInvoice);
      localStorage.setItem('invoices', JSON.stringify(invoices));
    }

    this.props.history.push('/');
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ''
    });
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="invoice-form-container">
        <form className="invoice-form" onSubmit={this.handleSubmit}>
          <h2>{id ? 'Edit Invoice' : 'Create New Invoice'}</h2>
          {this.state.error && <div className="error">{this.state.error}</div>}
          
          <div className="form-group">
            <label>Invoice Number:</label>
            <input
              type="text"
              name="invoiceNumber"
              value={this.state.invoiceNumber}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Client Name:</label>
            <input
              type="text"
              name="clientName"
              value={this.state.clientName}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Status:</label>
            <select
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>

          <button type="submit">{id ? 'Update Invoice' : 'Create Invoice'}</button>
        </form>
      </div>
    );
  }
}

export default InvoiceForm;