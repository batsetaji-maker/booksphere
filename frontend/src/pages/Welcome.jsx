import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="min-vh-100 bg-light d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center align-items-center g-5">

                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="display-4 fw-bold text-dark mb-3">
                            Welcome to BookSphere
                        </h1>

                        <p className="lead text-muted mb-4">
                            Discover books, connect with fellow readers,
                            join discussions, and build your reading
                            community.
                        </p>

                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                            <Link
                                to="/login"
                                className="btn btn-primary btn-lg px-4"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="btn btn-outline-primary btn-lg px-4"
                            >
                                Create Account
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-5 text-center">
                        <div className="p-5 bg-white rounded-4 shadow-sm">

                            <div
                                className="display-1 mb-3"
                                role="img"
                                aria-label="Books"
                            >
                                ??
                            </div>

                            <h2 className="fw-bold mb-3">
                                Read. Connect. Discuss.
                            </h2>

                            <p className="text-muted mb-0">
                                Your space to discover great books and
                                connect with people who love reading.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Welcome;
