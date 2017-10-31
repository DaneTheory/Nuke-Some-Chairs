/*===============================================
              404 PAGE FOR ROUTER
=================================================*/
import React  from 'react'
import { Link } from 'react-router'

// A 404 Page For User Navigation Error.
const NotFoundPage = () => {
  return (
    <div>
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default NotFoundPage;
