import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top"
                        alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">We Can Do Much Better Than This And We Aspect That You Like.
                        Our Services.Thank You Very Much.Have A Good Day! Bye Bye
                        </p>
                        <NavLink to="" className="btn btn-primary">Go Someware</NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Card;
// Go Here and Enjoy
// We Can Do Much Better Than This And We Aspect That You Like 
// Our Services.Thank You Very Much.Have A Good Day! Bye Bye