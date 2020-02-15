import React from 'react';
import { Link } from 'gatsby';

const Breadcrumbs = ({
  title,
  breadcrumbs
}) => {
  const BreadCrumbs = breadcrumbs
    .map((breadcrumb, i) =>
      <li key={i}>
        <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
      </li>
    )
    return (
      <ul className="breadcrumb">
        <li><a href="/">Home</a></li>
        {BreadCrumbs}
        <li className="active">{title}</li>
      </ul>
    )
}
export default Breadcrumbs