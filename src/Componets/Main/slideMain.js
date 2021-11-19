
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styles'
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import "./animação.css";



export function SlideMain() {
    const data = useStaticQuery(graphql`
        query{
            alldata{
                mains {
                    mainCard {
                      url
                    }
                    mainCard2 {
                      url
                    }
                    mainCard3 {
                      url
                    }
                    mainCard4 {
                      url
                    }
                    mainCard5 {
                      url
                    }
                    mainCard6 {
                      url
                    }
                    mainCard7 {
                      url
                    }
                    mainCard8 {
                      url
                    }
                  }
            }
        }
    `)

    const { mainCard, mainCard2, mainCard3,
        mainCard4, mainCard5, mainCard6,
        mainCard7, mainCard8 } = data.alldata.mains[0];


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>

            <S.Container>

                <Helmet>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Helmet>

                    <Slider style={{  width: '96%', height:'50vh', }} {...settings}>
                        <figure>
                            <S.Cards  src={mainCard.url} />
                            <S.BtnDescribe>Description</S.BtnDescribe>
                        </figure>
                        <figure >
                            <S.Cards  src={mainCard2.url} />
                            <S.BtnDescribe>Description</S.BtnDescribe>
                        </figure>
                        <figure >
                            <S.Cards  src={mainCard3.url} />
                            <S.BtnDescribe>Description</S.BtnDescribe>
                        </figure>
                        <figure >
                            <S.Cards src={mainCard4.url} />
                            <S.BtnDescribe>Description</S.BtnDescribe>
                        </figure>
                        <figure >
                            <S.Cards src={mainCard5.url} />
                            <S.BtnDescribe>Description</S.BtnDescribe>
                        </figure>
                        <figure >
                            <S.Cards src={mainCard6.url} />
                            <S.BtnDescribe>Description</S.BtnDescribe>
                        </figure>
                        <figure >
                            <S.Cards src={mainCard7.url} />
                            <S.BtnDescribe>Description</S.BtnDescribe>
                        </figure>
                        <figure >
                            <S.Cards src={mainCard8.url} />
                            <S.BtnDescribe>Description</S.BtnDescribe>
                        </figure>
                    </Slider >
                
            </S.Container>

        </>
    )


}