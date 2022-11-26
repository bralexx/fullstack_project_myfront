function AccountInfo() {
  return (
    <div id='user-info-container'>
      <img id='user-info-image' src='/images/user_image.jpg' alt='user'/>
      <p id='user-info-username'>username</p>
      <button id='user-info-logout-button'>Log out</button>
    </div>
  );
}

export default AccountInfo;