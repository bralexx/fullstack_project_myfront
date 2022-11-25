function LoginPage() {
  return (
    <div className='login-page-container'>
      <form className='login-page-form'>
        <label for='username'><b>Username</b></label>
        <input type='text' name='username' placeholder='Enter username'/>
        <label for='password'><b>Password</b></label>
        <input type='text' name='password' placeholder='Enter password'/>
        <input type='submit'/>
      </form>
    </div>
  );
}

export default LoginPage;