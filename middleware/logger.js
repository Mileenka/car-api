import chalk from 'chalk';

const logger = (req, res, next) => {
    const url = chalk.green(req.url);
    const method = chalk.green(req.method);
    const statusCode = chalk.green(res.statusCode);
    console.log(`${url} --- ${method} -- ${statusCode}`);
    next();
};
export default logger;

