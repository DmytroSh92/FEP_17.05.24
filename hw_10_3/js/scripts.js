const contactBook = {
    contacts: [],
    findContactByName: function (name) {
        const foundContacts = this.contacts.filter(contact => contact.name === name);
        return foundContacts.length > 0 ? foundContacts : `Контакт не знайдено: ${name}`;
    },
    addContact: function(name, phone, email) {
        const newContact = { name, phone, email };
        this.contacts.push(newContact);
        return newContact;
    }
};

contactBook.addContact("Дмитро", "+380991234567", "dmytro@example.com");
contactBook.addContact("Іван", "+380991234568", "ivan@example.com");

console.log(contactBook.findContactByName("Дмитро"));
console.log(contactBook.findContactByName("Анжеліка"));