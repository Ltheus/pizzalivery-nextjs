import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Usuário:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={handleLogin}>Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;