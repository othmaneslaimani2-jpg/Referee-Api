export const validateAffectation = (req, res, next) => {
    const { arbitreId, matchId, role} = req.body;
    if (!arbitreId || !matchId || !role) {
        return res.status(400).json({
            error: 'Validtaion Error',
            message: 'Fields "arbitreId", "matchId", and "role" are all strictly required.'
        });
    }

    const allowedRoles = [ 'central', 'assistant', 'VAR', 'AVAR', '4e' ];
    if (!allowedRoles.includes(role)) {
        return res.status(400).json({
            error: 'Validation Error',
            message: `Invalid role. Must be one of: ${allowedRoles.join(', ')}`
        });
    }
    next()
};