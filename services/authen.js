
let login = function(userneme, password){
  if (userneme === 'admin' && password === '1234') {
    console.log('ผ่าน');
    
  } else {
    console.log('ไมา่่าน');
    
  }
}
login('admin', '1234');
module.exports = login;