import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
                <h1 className="display-4">Trùm công thức nấu ăn</h1>
                <p className="lead">
                    Tổng hợp nhiều công thức nấu ăn ngon bậc trung học cơ sở.<br/>
                    Do not try this at home.
                </p>
                <hr className="my-4" />
                <Link
                    to="/recipes"
                    className="btn btn-lg custom-button"
                    role="button"
                >
                    Xem thử miễn phí!
                </Link>
            </div>
        </div>
    </div>
);