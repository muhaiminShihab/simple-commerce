import React from 'react'
import { Link } from 'react-router-dom'
import UserNavbar from '../components/navbar/UserNavbar'

const ResetPage = () => {
  return (
    <>
        <UserNavbar></UserNavbar>
        <section className="auth-area mt-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card mb-5">
                            <div className="card-header text-center">
                                <h3>Reset password</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group mt-3">
                                    <input type="text" name="" id="" placeholder='Email' className="form-control" />
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="col-12 btn btn-primary">Reset password</button>
                                </div>

                                <hr className="mt-3" />
                                <div className="text-center text-primary">
                                    <Link to="/sign-in">Remember the password? click here to login.</Link>
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

export default ResetPage