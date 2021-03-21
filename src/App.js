import { Component } from 'react';
import Section from './Components/Section';
import AddSection from './Components/AddSection';
import OutputSection from './Components/OutputSection';
import Filter from './Components/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    state = {
        contacts: [],
        filter: ''
      };     

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

    updateContactsList = () => {
        const {contacts, filter} = this.state;
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }

    handleDelete = value => {
        this.setState(prevState => {
            return {
              contacts: prevState.contacts.filter(({id}) => id !== value)
            }
          }) 
    }

    handleFilterUpdate = value => {
        this.setState({ 
            filter: value
          });
          this.updateContactsList();   
    }

    handleButtonClick = (nameValue, numberValue) => {

        const contactState = this.state.contacts.find(contact => contact.name.toLowerCase() === nameValue.toLowerCase());
        contactState &&  alert(nameValue + " is already in contacts");
        if (!contactState && nameValue && numberValue) {
            const newContact = {
                id: uuidv4(),
                name: nameValue,
                number: numberValue,
              };
              this.setState(prevState => {
                return {
                  contacts: [...prevState.contacts, newContact],
                }
              });
            return
        }
    };

    render() {
        return (
            <div>
               <Section title={"Phonebook"}>
                    <AddSection onSendData={this.handleButtonClick}/>              
               </Section>
                    <h2>Contacts</h2>
                   <Filter onFilterUpdate={this.handleFilterUpdate}/>
                   <OutputSection data={this.updateContactsList()} onDelete={this.handleDelete}/>
            </div>
        );
    }
}
      

export default App;