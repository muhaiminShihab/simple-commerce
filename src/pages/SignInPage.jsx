import React from 'react'
import { Link } from 'react-router-dom'
import UserNavbar from '../components/navbar/UserNavbar'

const SignInPage = () => {
  return (
    <>
        <UserNavbar></UserNavbar>
        <section className="auth-area mt-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card mb-5">
                            <div className="card-header text-center">
                                <h3>Login to your account</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group mt-3">
                                    <input type="text" name="" id="" placeholder='Email' className="form-control" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" name="" id="" placeholder='Password' className="form-control" />
                                </div>
                                <div className="form-group mt-3 row align-items-center">
                                    <div className="col">
                                        <div className="form-check">
                                        <input type="checkbox" name="" id="" className="form-check-input" />
                                        <label htmlFor="" className="form-check-label">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col text-end">
                                        <Link to='/forget-pass' className='text-primary text-underline'>Forget password?</Link>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="col-12 btn btn-primary">Login</button>
                                </div>

                                <hr className="mt-3" />
                                <div className="text-center text-primary">
                                    <Link to="/sign-up">Have no account? click here to create one.</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignInPage