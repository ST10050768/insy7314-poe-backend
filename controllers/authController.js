const bcrypt = require('bcrypt');
const supabase = require('../client/SupabaseClient');
const SALT_ROUNDS = 12;

async function registerUser(req, res) {
  const { fullName, username, idNumber, accountNumber, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const { data, error } = await supabase
      .from('Customer')
      .insert([
        {
          FullName: fullName,
          Username: username,
          IDNumber: idNumber,
          AccountNumber: accountNumber,
          Password: hashedPassword,
        },
      ]);

    if (error) throw error;

    res.status(201).json({ message: 'User registered securely.', data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { registerUser };
