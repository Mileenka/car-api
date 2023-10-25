import jwt from 'jsonwebtoken';

const getPayLoad = (req, res, next) => {
    const user = null;
    const token = req.cookies.token;
    if(token) {
        jwt.verify(token, process.env.TOKEN_ACCESS_SECRET, (err, data) => {
            if(err) {
                console.log(err);
            }
            user = data;
            next();
        });
    }
};

export default getPayLoad;