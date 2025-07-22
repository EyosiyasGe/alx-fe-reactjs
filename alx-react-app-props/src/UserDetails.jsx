function UserDetails() {
  const UserContext = React.useContext(UserContext);

  return (
    <div>
      <p>Name: {UserContext.name}</p>
      <p>Email: {UserContext.email}</p>
    </div>
  );
}

export default UserDetails;