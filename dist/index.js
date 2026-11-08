"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. Base Class – User
class User {
    id;
    name;
    email;
    phone;
    _age;
    password;
    noteBooks = [];
    constructor(id, name, email, phone, age, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.password = password;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 18 || value > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this._age = value;
    }
    displayInfo = () => {
        console.log(`user name: ${this.name}`);
        console.log(`user email: ${this.email}`);
        console.log(`user age: ${this.age}`);
        console.log(`user phone: ${this.phone}`);
    };
    addNoteBook = (noteBook) => {
        this.noteBooks.push(noteBook);
    };
    getNotebooks() {
        return this.noteBooks;
    }
}
const user = new User(1, "Hadeer", "hadeer@gmail.com", "010145444444", 31, "hadeer123");
user.displayInfo();
//2. Inheritance – Admin User
class Admin extends User {
    notes;
    constructor(id, name, email, phone, age, password, notes) {
        super(id, name, email, phone, age, password);
        this.notes = notes;
    }
    addNotes(note) {
        this.notes?.push(note);
    }
    displayNotes() {
        this.notes?.forEach((note, i) => console.log(`${i + 1}.${note}`));
    }
}
const admin = new Admin(1, "Hadeer", "hadeer@gmail.com", "010145444444", 31, "hadeer123", ["Note no 1"]);
admin.addNotes("Note no 2");
admin.displayNotes();
//3. Class - Note
class Notes {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview(length = 30) {
        if (this.content.length <= length) {
            return this.content;
        }
        return this.content.substring(0, length) + "...";
    }
}
const note = new Notes(1001, "Main note", "Note content", 1);
console.log(note.preview());
//4. Composition– NoteBook and Notes
class NoteBook {
    notes = [];
    addNote(id, title, content, userId) {
        const note = new Notes(id, title, content, userId);
        this.notes.push(note);
        return note;
    }
    removeNote(id) {
        const index = this.notes.findIndex(n => n.id === id);
        if (index === -1) {
            console.log("Note not found");
            return false;
        }
        this.notes.splice(index, 1);
        return true;
    }
    displayNotes() {
        this.notes.forEach((n) => console.log(`${n.id}.${n.title}: ${n.preview()}`));
    }
}
const notebook = new NoteBook();
notebook.addNote(1, "Meeting", "Discuss the project deadline and assign tasks", user.id);
notebook.addNote(2, "Todo", "Finish the assignment", user.id);
notebook.displayNotes();
notebook.removeNote(1);
notebook.displayNotes();
const notebook1 = new NoteBook();
const user2 = new User(5, "Salma", "salma@email.com", "010111111111", 21, "salma123");
notebook1.addNote(7, "Assignment", "Discuss the assignment deadline", user2.id);
user2.addNoteBook(notebook1);
user2.getNotebooks().forEach(nb => nb.displayNotes());
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index === -1) {
            console.log("Item not found");
            return false;
        }
        this.items.splice(index, 1);
        return true;
    }
    getAllItems() {
        return this.items;
    }
}
const numbers = new Storage();
numbers.addItem(10);
numbers.addItem(20);
numbers.removeItem(10);
console.log(numbers.getAllItems());
const names = new Storage();
names.addItem("Salma");
console.log(names.getAllItems());
const notes = new Storage();
//# sourceMappingURL=index.js.map