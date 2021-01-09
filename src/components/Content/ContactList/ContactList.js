import React, {Component} from 'react';
import style from './ContactList.module.css';

class Contact extends Component {
    render () {
        return (
            <li className={style.contact}>
                <img className={style.contactImage} src={this.props.image} width="60px" height="60px"/>
                <div className={style.contactInfo}>
                    <div className={style.contactName}>{this.props.name}</div>
                    <div className={style.contactNumber}>{this.props.phoneNumber}</div>
                </div>
            </li>
        );
    }
}

class ContactList extends Component {

    constructor(props) {
        super(props);
        this.state = { displayedContacts: CONTACT }
    }
    
    handleSearch (event) {
        let searchQuery = event.target.value.toLowerCase();
        let displayedContacts = CONTACT.filter( (element) => {
            let searchValue = element.name.toLowerCase();
            return searchValue.indexOf(searchQuery) != -1;
        } );
        this.setState({
            displayedContacts: displayedContacts
        });
    }

    render () {
        return (
            <div>
                <h2>Contact List</h2>
                <div className={style.contacts}>
                    <input type="text" className={style.searchField} onChange={this.handleSearch.bind(this)}/>
                    <ul className={style.contactsList}>
                        {
                            this.state.displayedContacts.map( (el) => {
                                return <Contact 
                                        key={el.id} 
                                        name={el.name} 
                                        phoneNumber={el.phoneNumber}
                                        image={el.image} />;
                            } )
                        }
                    </ul>
                </div>
            </div>
            
        );
    }
}

var CONTACT = [
    {
        id: 1,
        name: 'Bender',
        phoneNumber: '38(063)325-26-60',
        image: 'https://i.gifer.com/2IpT.gif' }, 
    {
        id: 2,
        name: 'Fry',
        phoneNumber: '34(553)452-52-66',
        image: 'https://media.tenor.com/images/933c3ba5f9faa828fb55bab4d47e6518/tenor.gif' },
    {
        id: 3,
        name: 'Emme',
        phoneNumber: '38(423)533-25-26',
        image: 'https://media2.giphy.com/media/197KLEhFsA1pK/giphy.gif' }
    ];



export default ContactList;