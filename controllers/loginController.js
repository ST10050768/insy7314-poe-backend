const bcrypt = require('bcrypt');
const supabase = require('../client/SupabaseClient');

async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    const { data, error } = await supabase
      .from('Customer')
      .select('Password, FullName')
      .eq('Username', username)
      .single();

    if (error || !data) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, data.Password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful', user: {fullName: data.FullName} });
  } catch (err) {
    console.error('Login error:', err);
  res.status(500).json({ error: err.message || 'Login failed' });

  }
}

module.exports = { loginUser };