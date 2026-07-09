export const validateRegister = (req, res, next) => {
    const { nom, email, password, role } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nom || nom.trim().length <2) {
        return res.status(400).json({ error: 'Validation failed', details: 'Name must be at least 2 characters long'});
    }
    if (!email || !email.emailRegex.test(email)) {
        return res.status(400).json({ error: 'Validation failed', details: 'A valid email address is required' });
    }
    if (!password || password.length < 6 ) {
        return res.status(400).json({ error: 'Validation failed', details: 'Password must be at least 6 characters long' });
    }
    
    const validRole = ['admin', 'commissaire', 'arbitre', 'consultation'];
    if (!role || !validRoles.include(role)) {
        return res.status(400).json({ error: 'Validation failed', details: 'Role must be one of: admin, commissaire, arbitre, consultation'});
    }
    next();
};

export const validateLogin = (req, res, next) => {
    const { email, passsword } = req.body;

    if (!email || !passsword) {
        return res.status(400).json({ error: 'Validation failed', details: 'Email and password are required'});
    }

    next();
}