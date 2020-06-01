import React from 'react';
import '../Contact/Contact.css'

const initialState = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: ""
  };
  
  export default class Contact extends React.Component {
    state = initialState;
  
    handleChange = event => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
      });
    };
  
    validate = () => {
      let nameError = "";
      let emailError = "";
      let messageError = "";
  
      if (!this.state.name) {
        nameError = "Name cannot be blank";
      }
  
      if (!this.state.email.includes("@")) {
        emailError = "Invalid email.";
      }

      if (!this.state.message) {
        messageError = "Message is required.";
      }
  
      if (emailError || nameError) {
        this.setState({ emailError, nameError });
        return false;
      }
  
      return true;
    };
  
    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        // clear form
        this.setState(initialState);
      }
    };
  
    render() {
      return (
          <div>
            <div>
                <section>
                    <div className="hero-image--contact">
                    <div className="container-hero">
                        <h1><span>Contact Us</span></h1>
            </div>
                     </div>
                 </section>
                 </div>
        <form className="container-form" onSubmit={this.handleSubmit}>
        <h1><span className="blue">Contact</span><span className="red"> Us!</span></h1>
             <p>Please fill out the form below to contact us</p>
            <label for="name">Name:</label>
          <div>
            <input
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          </div>
          <br />
          <label for="email">Email:</label>
          <div>
            <input
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </div>
          <br />
          <label for="message">Enter Message Here:</label>
          <div> 
            <textarea 
              cols="100" rows="20"  name="message"
              placeholder="Enter message here!"
              value={this.state.message}
              onChange={this.handleChange}>
            </textarea>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.messageError}
            </div>
          </div>
          <br />
          <button type="submit" className="btn-submit">Submit</button>
        </form>
        <section>
             <div class="faq">
                 <h1>Frequently Asked Questions (FAQs)</h1>
                 <br />
                 <h2>Q: Do the products come with Warranty?</h2>
                 <p>A: All Video Games come with a 30-day Warranty, while Accersories and Systems come with a 1-year Warranty.</p>
                 <br />
                 <h2>Q: Where can the products be shipped to?</h2>
                 <p>A: All products are available to be shipped Worldwide.</p>
                 </div>
                 <div class="policy">
                 <h1>Return/Exchange Policy</h1>
                 <br />
                 <p>All products are able to be returned or exchanged within 7 days of the delivery date. Games must be in working condition to be eligible. Exchanges can be made for same product or those of a similar price.</p>
                 </div>
                 </section>
        </div>
         );
        }
      }
