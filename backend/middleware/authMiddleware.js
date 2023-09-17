const jwt = require('jsonwebtoken');


module.exports.admin_middleware = async (req, res, next) => {
    const { blog_token } = req.cookies;

    if (!blog_token) {
        return res.status(409).json({ error: 'Please login first' })
    } else {
        try {
            const deCodeToken = await jwt.verify(blog_token, process.env.SECRET)
            req.adminId = deCodeToken.id;
            req.adminName = deCodeToken.name;
            req.role = deCodeToken.role;
            next();
        } catch (error) {
            return res.status(409).json({ error: 'Please login' })
        }
    }

}