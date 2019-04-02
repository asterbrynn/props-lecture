import React, {Component} from 'react';
import './App.css';
import Contact from './components/Contact';

class App extends Component {
  state = {
    contacts: [
      {
        name: 'the Stranger',
        phone: "801-GET-LOST",
        email: "none",
        image: "https://cdn.discordapp.com/attachments/555135592103542826/562688749344129044/the_stranger_by_purp.png",
        id: 0
      },
      {
        name: "Edith",
        phone: "801-555-9337",
        email: "definitelyanormalhuman@gmail.com",
        image: "https://cdn.discordapp.com/attachments/555135592103542826/562695104179994624/Edith_succ.png",
        id: 1
      }
    ]
  }

  /*
  function: determines what "this" is at invocation
  arrow function: determines what "this" is at the time of declaration

  old school, instead of using arrow functions, we use .bind
  this.deleteUser = this.deleteUser.bind(this)
  the above line of code would go in the constructor function
  */

  deleteContact = (idToDelete) => {
    console.log(this);
    const remainingContacts = this.state.contacts.filter(contact => contact.id !== idToDelete)
    this.setState({
      contacts: remainingContacts
    })
  }

  render() {
    const contacts = this.state.contacts.map(contact => {
      return <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        image={contact.image}
        email={contact.email}
        phone={contact.phone}
        deleteUser={this.deleteContact}
        />
    })
    return (
      <div className="App">
        <div className="contacts">
          {contacts}
        </div>
      </div>
    );
  }
}

export default App;
