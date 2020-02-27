import React from 'react';
import Breadcrumbs from '../breadcrumbs';

function getMusicianPageTitleArea(name) {
    switch (name) {
        case 'Zac Howard':
            return 'page-title-area-zac parralax';
    
        case 'Emily Howard':
            return 'page-title-area-emily parralax';

        case 'Lucas Gray':
            return 'page-title-area-lucas parralax';

        case 'Lilli Gray':
            return 'page-title-area-lilli parralax';
    
        default:
            return 'page-title-area parralax';
    }
}

const MusicHeader = ({
  title,
  socials
}) => {
    const breadcrumbs = [{name: 'Music Collective', link: '/music'}]
    return (
        <section className={getMusicianPageTitleArea(title)}>
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
export default MusicHeader