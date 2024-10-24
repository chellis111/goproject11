function generateRandomPassword(length) {
    // Characters that can be included in the password
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  
    let password = '';
  
    // Generate the password by randomly selecting characters
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }
  
  // Generate a random password of length 12 and console.log it
  const randomPassword = generateRandomPassword(12);
  console.log("Generated Password:", randomPassword);
  