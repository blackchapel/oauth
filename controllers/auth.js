// Login 
const login = async (req, res) => {
    res.render('login');
};

// Logout
const logout = async (req, res) => {
    res.send('logout');
};

// Redirect
const redirect = async (req, res) => {
    res.send(req.user);
};

// Exporting modules
module.exports = {
    login,
    logout,
    redirect
};