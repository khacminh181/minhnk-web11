const userModel = require('./model');

const createUser = ({ avatar, username, password, email }) =>
    new Promise((resolve, reject) => {
        userModel.create({
            avatar,
            username,
            password,
            email
        })
            .then(data => resolve(data))
            .catch(err => reject(err))
    });

const getAllUser = page => new Promise((resolve, reject) => {
    userModel.find({
        "active": true
    })
        .sort({ createdAt: -1 }) //thoi gian giam dan
        .skip((page - 1) * 20) // bo qua
        .limit(20)
        .select("_id avatar username password email createAt")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const getUser = id => new Promise((resolve, reject) => {
    userModel
        .findOne({
            "active": true,
            _id: id
        })

        .select("_id avatar username password email createAt")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const updateUsername = (id, {username}) => new Promise((resolve, reject) => {
    userModel.update({
        _id: id
    }, {
            username
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const updateUserEmail = (id, {email}) => new Promise((resolve, reject) => {
    userModel.update({
        _id: id
    }, {
            email
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const updateUserAvatar = (id, {avatar}) => new Promise((resolve, reject) => {
    userModel.update({
        _id: id
    }, {
            avatar
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const updateUserPassword = (id, {password}) => new Promise((resolve, reject) => {
    userModel.update({
        _id: id
    }, {
            password
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const deleteUser = id => new Promise((resolve, reject) => {
    userModel.update({
        _id: id
    }, {
            active: false
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
});

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUsername,
    updateUserEmail,
    updateUserAvatar,
    updateUserPassword,
    deleteUser
}