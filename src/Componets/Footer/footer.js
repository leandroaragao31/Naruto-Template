import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styles';




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

        <S.Container>
            <S.BoxInformations>
                <figure>
                    <S.Logo src={logoFooter.url} alt="sharingan" />
                </figure>
                <div>
                    <h2>{titleMenu}</h2>
                    <p>{menuInformation}</p>
                </div>
                <div>
                    <h2>{titleEpisodes}</h2>
                    <p>{dayEpisode}</p>
                </div>
                <ul>
                    <h2>{titleLinks}</h2>
                    <a>
                        <li></li>
                    </a>
                    <a>
                        <li></li>
                    </a>
                    <a>
                        <li></li>
                    </a>
                    <a>
                        <li></li>
                    </a>
                </ul>
                <ul>
                    <h2>{titleSocial}</h2>
                    <a>
                        <li></li>
                    </a>
                    <a>
                        <li></li>
                    </a>
                    <a>
                        <li></li>
                    </a>
                    <a>
                        <li></li>
                    </a>
                </ul>
            </S.BoxInformations>
        </S.Container>

    )
}
