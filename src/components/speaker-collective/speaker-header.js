import React from 'react';
import Breadcrumbs from '../breadcrumbs';

function getSpeakerPageTitleArea(name) {
    switch (name) {
        case 'Ty Watson':
            return 'page-title-area-ty parralax';

        case 'Ashley Powell':
            return 'page-title-area-ashley parralax';

        case 'Ben Swartz':
            return 'page-title-area-ben parralax';

        case 'Hanna Swartz':
            return 'page-title-area-hanna parralax';
    
        default:
            return 'page-title-area parralax';
    }
}

const SpeakerHeader = ({
  title,
  socials
}) => {
    const breadcrumbs = [{name: 'Speaker Collective', link: '/speakers'}]
    return (
        <section className={getSpeakerPageTitleArea(title)}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title">
                            <div className="title">
                                <h2>{title}</h2>
                            </div>
                            
                            <Breadcrumbs title={title} breadcrumbs={breadcrumbs} />

                            <div className="socials">
                                {socials.facebook ? <a href={socials.facebook} target="_blank"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a> : null}
                                {socials.instagram ? <a href={socials.instagram} target="_blank"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a> : null}
                                {socials.youtube ? <a href={socials.youtube} target="_blank"><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a> : null}
                                {socials.vimeo ? <a href={socials.vimeo} target="_blank"><i className="fa fa-vimeo-square fa-2x" aria-hidden="true"></i></a> : null}
                                {socials.spotify ? <a href={socials.spotify} target="_blank"><i className="fa fa-spotify fa-2x" aria-hidden="true"></i></a> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SpeakerHeader