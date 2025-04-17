import React from 'react';

const ProfileRFC = () => {
  return (
    <div style={styles.profileContainer}>
      <h2>Profil (Function Component)</h2>
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="avatar"
        style={styles.avatar}
      />
      <p>Nama: John Doe</p>
      <p>NPM: 1234567890</p>
      <p>Jurusan: Teknik Informatika</p>
      <p>Hobi: Membaca Buku</p>
    </div>
  );
};

const styles = {
  profileContainer: {
    backgroundColor: '#ffffff',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px'
  }
};

export default ProfileRFC;