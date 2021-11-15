import React from 'react'

const SpinnerCharge = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" style={{width:"10rem", height:"10rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default SpinnerCharge
