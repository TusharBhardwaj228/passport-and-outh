const login = (req,res)=>{
  res.render('login');
}

const logout = (req,res)=>{
  res.send('log out');
}

const google = (req,res)=>{
  res.send('login with google..');
}

module.exports = {login,logout,google};