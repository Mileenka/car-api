import { v4 as newId } from 'uuid';

const users = [
    {
        id: newId(),
        email: 'test1@gmail.com',
        password: 'test1!'
    },
    {
        id: newId(),
        email: 'test2@gmail.com',
        password: 'test2!'
    },
    {
        id: newId(),
        email: 'test3@gmail.com',
        password: 'test3!'
    }
];

class User {
    constructor(email, password) {
        this.id = newId();
        this.email = email;
        this.password = password;
    }

    // methods

    static getUserByEmail = (email) => {
        return users.find((user) => user.email === email);
    };

    static getUserById = (id) => {
        return users.find((user) => user.id === id);
    }

    addUser = () => {
        users.push(this);
    }
}

export default User;