import { Component } from "react";
import Section from "./Components/Section";
import AddSection from "./Components/AddSection";
import OutputSection from "./Components/OutputSection";
import Filter from "./Components/Filter";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      contacts: [],
      filter: "",
    };
  }

  componentDidMount() {
    const loadedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (loadedContacts) this.setState({ contacts: loadedContacts });
  }

  componentDidUpdate(prevState) {
    const { contacts: currentContacts } = this.state;
    const { contacts: prevContacts } = prevState;
    if (currentContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(currentContacts));
    }
  }

  updateContactsList() {
    let contactsForShow = [];
    if (this.state.filter.length !== 0) {
      for (let item of this.state.contacts) {
        console.log(item);
        console.log(
          item.name.toLowerCase() + "  " + this.state.filter.toLowerCase()
        );
        if (item.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
          contactsForShow.push(item);
        }
      }
    } else {
      contactsForShow = this.state.contacts;
    }

    return contactsForShow;
  }

  handleDelete(value) {
    let id = 0;
    for (let i = 0; i < this.state.contacts.length; i++) {
      if (value === this.state.contacts[i].id) {
        id = i;
        break;
      }
    }

    this.setState({
      contacts: this.state.contacts
        .slice(0, id)
        .concat(this.state.contacts.slice(id + 1)),
    });
  }

  handleFilterUpdate(value) {
    this.setState({
      filter: value,
    });
    this.updateContactsList();
  }

  handleButtonClick(nameValue, numberValue) {
    for (let item of this.state.contacts) {
      if (item.name === nameValue) {
        alert(nameValue + " is already in contacts");
        return;
      }
    }

    this.setState({
      contacts: this.state.contacts.concat([
        { id: uuidv4(), name: nameValue, number: numberValue },
      ]),
    });
    this.updateContactsList();
  }

  render() {
    return (
      <div>
        <Section title={"Phonebook"}>
          <AddSection onSendData={this.handleButtonClick} />
        </Section>
        <h2>Contacts</h2>
        <Filter onFilterUpdate={this.handleFilterUpdate} />
        <OutputSection
          data={this.updateContactsList()}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
