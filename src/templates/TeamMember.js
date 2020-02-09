import React from 'react';
import { graphql } from 'gatsby';

export default function TeamMember({
    data
}) {
    const { markdownRemark } = data
    const { frontmatter } = markdownRemark
    return (
        <div className="col-md-3 col-sm-6">
            <div className="single-volunteers">
                <div className="volunteers-info">
                    {/* <img src="{data.photo}" alt="Ben Swartz - Dream On: Global" /> */}
                    <div className="single-team-con">
                        <div className="single-team-txt">
                            <ul>
                                <li><a href="https://facebook.com/{frontmatter.facebook}" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://twitter.com/{frontmatter.twitter}" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>                                        
                                <li><a href="https://instagram.com/{frontmatter.instagram}" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3>{frontmatter.name}</h3>
                <span>{frontmatter.title}</span>
            </div>
        </div>
    )
}
export const teamQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }} ) {
            html
            frontmatter {
                order
                name
                title
                photo
                facebook
                twitter
                instagram
            }
        }
    }
`