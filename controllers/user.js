
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import matchPassword from '../utils/matchPasswords.js'
import hashPassword from '../utils/hashPassword.js';

const userControllers = {
    getRegister: (rex, res) => {
        res.status(200).render('form', {
            action: '/register',
            text: 'Register'
        });
    },

    getLogin: (req, res) => {
        res.status(200).render('form', {
            action: '/login',
            text: 'Login'
        });
    },

    postRegister: (req, res) => {
        const { email, password, rePassword } = req.body;
        // check if email exist
        const emailExist = User.getUserByEmail(email);
        if (!emailExist) {
            // validate email
            const isEmailValid = validateEmail(email);
            const isPasswordValid = validatePassword(password);
            const isMatch = matchPassword(password, rePassword);

            if (isEmailValid && isPasswordValid && isMatch) {
                const hashedPassword = hashPassword(password);
                const user = new User(email, hashedPassword);
                user.addUser();
                res.status(302).redirect('/login');
            } else {
                res.status(409).render('message', {
                    title: 'Not valid',
                    message: 'The email or the password is not valid '
                });
            }
        } else {
            res.status(409).render('message', {
                title: 'Email already exists',
                message: 'This email is already taken'
            });
        }
    },

    postLogin: (req, res) => {
        const { email, password, rePassword } = req.body;

        // check id email exists
        const emailExist = User.getUserByEmail(email);
        if (emailExist) {
            bcrypt.compare(password, emailExist.password, (err, isValid) => {
                if(isValid) {
                    const token = jwt.sign(
                        { user: emailExist },
                        process.env.TOKEN_ACCESS_SECRET
                    );
                    res.cookie('token', token, { httpOnly: true });
                    res.status(302).redirect('/');
                } else {
                    res.status(409).render('message', {
                        title: 'Account is not Valid',
                        message: 'Email or password is not correct'
                    });
                }
            });
        } else {
                    res.status(409).render('message', {
                        title: 'Login failed',
                        message: 'E-mail or password is not correct'
                    });
        }
    },
    
    getLogout: (req, res) => {
        res.clearCookie('token');
        res.clearCookie('id');
        res.clearCookie('/');
    }
};


export default userControllers;
