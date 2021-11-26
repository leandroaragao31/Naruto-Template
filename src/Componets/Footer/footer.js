import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styles';
import './animation.css'




export function Footer() {
    const data = useStaticQuery(graphql`
        query{
            alldata{
                footers {
                    logoFooter {
                      url
                    }
                    copyrights
                    dayEpisode
                    linkAbout
                    linkContact
                    linkEpisodes
                    linkHome
                    linkManga
                    menuInformation
                    socialFacebook
                    socialGoogle
                    socialPinperest
                    socialTwitter
                    titleEpisodes
                    titleLinks
                    titleMenu
                    titleSocial
                  }
            }
        }
    `)


    const { logoFooter, copyrights, dayEpisode,
        linkAbout, linkContact,
        linkEpisodes, linkHome, linkManga,
        menuInformation, socialFacebook, socialGoogle,
        socialPinperest, socialTwitter, titleEpisodes,
        titleLinks, titleMenu, titleSocial } = data.alldata.footers[0];


    return (
        <>
            <S.Container >
                <S.BoxInformations>
                    <figure>
                        <S.Logo className="logo" src={logoFooter.url} alt="sharingan" />
                    </figure>
                    <div>
                        <h2>{titleMenu}</h2>
                        <p>{menuInformation}</p>
                    </div>
                    <S.BoxTitles>
                        <h2>{titleEpisodes}</h2>
                        <p>{dayEpisode}</p>
                    </S.BoxTitles>
                    <S.BoxList>
                        <h2>{titleLinks}</h2>
                        <a href="#Home">
                            <li>{linkHome}</li>
                        </a>
                        <a  href="#aboutus">
                            <li>{linkAbout}</li>
                        </a>
                        <a href="">
                            <li>{linkEpisodes}</li>
                        </a>
                        <a id="contactus" href="#contactus">
                            <li>{linkContact}</li>
                        </a>
                    </S.BoxList>
                    <S.BoxList>
                        <h2>{titleSocial}</h2>
                        <a href="">
                            <li>{socialTwitter}</li>
                        </a >
                        <a href="">
                            <li>{socialFacebook}</li>
                        </a>
                        <a href="">
                            <li>{socialGoogle}</li>
                        </a>
                        <a href="">
                            <li>{socialPinperest}</li>
                        </a>
                    </S.BoxList>
                </S.BoxInformations>
            </S.Container>
            <S.BoxCopy>
                <p>{copyrights}</p>
            </S.BoxCopy>
        </>

    )
}
