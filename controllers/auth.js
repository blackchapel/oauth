// Login 
const login = async (req, res) => {
    res.render('login');
};

// Logout
const logout = async (req, res) => {
    res.send('logout');
};

// OAuth Google
const oauth_google = async (req, res) => {
    res.send('Google Login');
};

// Exporting modules
module.exports = {
    login,
    logout,
    oauth_google
};