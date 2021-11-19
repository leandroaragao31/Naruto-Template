
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styles'

export function HeaderSection() {
    const data = useStaticQuery(graphql`
    query{
        alldata{
            headerSection2S {
                backgroundImg {
                  url
                }
                title
                subtitle
                paragraph
                btnReserve
              } 
            }
        }
`)

    const { backgroundImg, title, subtitle,
        paragraph, btnReserve } = data.alldata.headerSection2S[0]

    return (
        <>
            <S.ContainerImg back={backgroundImg.url}  >
                <S.BoxText>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{paragraph}</p>
                    <button>{btnReserve}</button>
                </S.BoxText>
            </S.ContainerImg>
        </>
    )
}
