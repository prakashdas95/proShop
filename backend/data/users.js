import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Prakash Das',
        email: 'prakash@das.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Pranav Das',
        email: 'pranav@das.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;