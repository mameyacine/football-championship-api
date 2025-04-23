const authService = require("../services/AuthService");
const UserAuth = require("../models/UserAuth");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Vérification que le nom d'utilisateur et le mot de passe sont présents
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Recherche l'utilisateur par son nom d'utilisateur
        const user = await authService.getUserByQuery({ username });

        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        // Vérifie le mot de passe
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        // Crée un token JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRATION
        });

        return res.status(200).json({ token });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

module.exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Vérification que le nom d'utilisateur et le mot de passe sont présents
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Création d'un nouvel utilisateur
        let userAuth = new UserAuth(req.body);

        // Génére le hash du mot de passe
        let salt = await bcrypt.genSalt(10);
        userAuth.password = await bcrypt.hash(userAuth.password, salt);

        // Enregistrement dans la base
        userAuth = await authService.createUser(userAuth);

        return res.status(201).json({
            status: 201,
            data: userAuth,
            message: "Successfully created user auth"
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
module.exports.register = async (req, res) => {
  try {
    // ❗ Création d'un nouvel utilisateur
    let userAuth = new UserAuth(req.body);

    // ❗ Génére le hash du mot de passe
    let salt = await bcrypt.genSalt(10);
    userAuth.password = await bcrypt.hash(userAuth.password, salt);

    // ❗ Enregistrement dans la base
    userAuth = await authService.createUser(userAuth);

    return res.status(201).json({
      status: 201,
      data: userAuth,
      message: "Successfully created user auth"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};