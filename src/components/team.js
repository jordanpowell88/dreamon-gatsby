import React from 'react';
import { graphql } from 'gatsby';

const Team = ({
    data: {
        allMarkdownRemark: { edges }
    }
}) => {
    const TeamMembers = edges
        .filter(edge => !!edge.node.frontmatter.order)
        .map(edge =>
            <div className="col-md-3 col-sm-6">
                <div className="single-volunteers">
                    <div className="volunteers-info">
                        {/* <img src={member.node.facebook} alt="Ben Swartz - Dream On: Global" /> */}
                        <div className="single-team-con">
                            <div className="single-team-txt">
                                <ul>
                                    <li><a href={edge.node.frontmatter.facebook} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href={edge.node.frontmatter.twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>                                        
                                    <li><a href={edge.node.frontmatter.instagram} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3>{edge.node.frontmatter.name}</h3>
                    <span>{edge.node.frontmatter.title}</span>
                </div>
            </div>
        )
    return (
        {TeamMembers}
    )
}
export default Team;

export const teamQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___order] }) {
      edges {
        node {
          frontmatter {
            order
            name
            title
            facebook
            twitter
            instagram
          }
        }
      }
    }
  }
`
