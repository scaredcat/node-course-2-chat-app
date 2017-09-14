[{
  id: '/#12frhuioasfruasi',
  name: 'Kate',
  room: 'The office fans'
}]

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return undefined;
    }
    var user = this.users.splice(userIndex, 1);
    return user[0];
  }
  getUser (id) {
    return this.users.find(user => user.id === id);
  }
  getUserList (room) {
    var users = this.users.filter(user => user.room === room);
    var namesArray = users.map(user => user.name);
    return namesArray;
  }
}

module.exports = {Users};
