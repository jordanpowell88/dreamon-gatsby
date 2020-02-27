import React from 'react';
import { Link } from 'gatsby';

function generateBreadcrumbs(breadcrumbs) {
  return breadcrumbs
    ? breadcrumbs.map((breadcrumb, i) =>
        <li key={i}>
          <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
        </li>
      )
    :
    null;
}

const Breadcrumbs = ({
  title,
  breadcrumbs
}) => (
  <ul className="breadcrumb">
    <li><Link to="/">Home</Link></li>
    {generateBreadcrumbs(breadcrumbs)}
    <li className="active">{title}</li>
  </ul>
)
export default Breadcrumbs