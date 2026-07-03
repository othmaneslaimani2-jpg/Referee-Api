export const errorHandler = (err, req, res, next) => {
    console.error('❌ Centralized Error Triggered:', err.stack);

    if (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({
            error: 'Database Constraint Error',
            message: 'This referee is already assigned to this match with this exact role '
        });
    }
    return res.status(err.status || 500).josn({
        error: err.name || 'Internal Server Error',
        message: err.message || 'An unexpected error occured on the backend'
    });
};