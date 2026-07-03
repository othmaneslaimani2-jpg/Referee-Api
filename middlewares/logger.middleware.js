export const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalURL;

    res.on('finish', () => {
        const statusCode = res.statusCode;
        
        let statusIcon = 'ℹ️';
        if (statusCode >= 200 && statusCode < 300) statusIcon = '🟢';
        if (statusCode >= 400 && statusCode < 500) statusIcon = '🟡';
        if (statusCode >= 500) statusIcon = '🔴';

        console.log(`[${timestamp}] ${statusIcon} ${method} ${url} - Status: ${statusCode} `)
    });

    next();
};