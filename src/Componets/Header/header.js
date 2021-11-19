import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styles'
import { HeaderSection } from './HeaderSection';

export  function Header() {
    const data = useStaticQuery(graphql`
    query{
        alldata{
            headers {
                logoImg {
                  url
                }
                menuHome
                menuAbout
                menuContact
                menuEpisodes
                menuServices
                menuNumber
              }
        }
    }
`)

    const { logoImg, menuHome, menuAbout,
        menuContact, menuEpisodes,
        menuServices, menuNumber } = data.alldata.headers[0]


    return (
        <>
        <S.Container>
            <figure>
                <S.Logo src={logoImg.url} alt="Naruto"/>
            </figure>
            <S.Menu>
                <ul>
                    <a id="Home" href="#Home">
                        <li>{menuHome}</li>
                    </a>
                    <a href="#aboutus">
                        <li>{menuAbout}</li>
                    </a>
                    <a href="">
                        <li>{menuServices}</li>
                    </a>
                    <a href="">
                        <li>{menuEpisodes}</li>
                    </a>
                    <a href="#contactus">
                        <li>{menuContact}</li>
                    </a>
                    <a href="">
                        <li>{menuNumber}</li>
                    </a>
                </ul>
            </S.Menu>
        </S.Container>
        <HeaderSection />
        </>
    )
}
