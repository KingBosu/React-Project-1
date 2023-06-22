import './Login.css'

const login = () => {
  
  return (
    <>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <br></br>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <br></br>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <button type="submit" className="btn btn-primary">Log In!</button>
</form>
    </>
  )
}

export default login
