import './Profile.css';
import noimage from '../../images/no-profile-picture-icon.png'
import { useState,useEffect } from 'react';
const Profile = () => {
    const [user, setUser] = React.useState();
    return (
        <div className="container profile-container p-5">
            <div className="row justify-content-between" >
                <div className="col col-auto col-md-4 d-grid profile-pic">
                    <div className='row'>
                        <div className="col flex-column justify-content-around align-items-center d-flex">
                            <picture className='mb-5 mt-5' >
                                <img className="rounded-circle" width='200' src={user.image.picture_url}/>
                            </picture>
                            <button className="btn btn-primary" type="button">Upload Image</button>
                        </div>

                    </div>
                    <div className='row'></div>
                </div>
                <div className="col-md-4 col-lg-8">
                    <form className='d-grid profile-form'>
                        <div className="row">
                            <div className="col-lg-12 d-lg-flex flex-column justify-content-center d-flex">
                                <h4>{user.firstName} {user.lastName}</h4>
                                <h6>Heading</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input className="form-control" type="text"></input>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Date of Birth</label>
                                    <input className="form-control" type="date"></input>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Street</label>
                                    <input className="form-control" type="text"></input>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">City</label>
                                    <input className="form-control" type="text"></input>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Interests</label>
                                    <textarea className="form-control form-control-lg" type="text"></textarea>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Gender</label>
                                    <select className="form-control form-select"> </select>
                                </div>
                                <div className=" row">
                                    <div className="form-group col">
                                        <label className="form-label">Number</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="form-group col">
                                        <label className="form-label">Postal</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Country</label>
                                    <select className="form-control form-select"></select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Hobbies</label>
                                    <textarea className="form-control form-control-lg" type="text"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <h4>Bank Details</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label className="form-label">IBAN</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className='form-group'>
                                            <label className="form-label">Bank Name</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className='form-group'>
                                            <label className="form-label">BIC</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className='form-group'>
                                            <label className="form-label" type="text">Account holder name</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </form>
                    
                </div>
               
            </div>
            <div className="row">
                            <div className="col justify-content-end align-items-end d-flex" ></div>
                            <div className="col align-items-end d-flex" >
                                <button className="btn btn-primary" type="button" style={{ width: 100 + '%', marginRight: 5 + 'px' }}>Cancel</button>
                                <button className="btn btn-primary" type="button" style={{ width: 100 + '%' }}>Save</button>
                            </div>
                        </div>
        </div >

    );
}

export default Profile;