import React from 'react'
import {NavLink} from 'react-router-dom'
const UserSetting = () => {
  return (
   <>
     <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Setting</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><NavLink to="/admin">Home</NavLink></li>
                    <li className="breadcrumb-item active">Setting</li>
                  </ol>
                </div>{/* /.col */}
              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
          </div>
            <div className='content-body'>
              <div className='container'>
                
              </div>

            </div>

        </div>
      </div>
    
   </>
  )
}

export default UserSetting