import React from 'react'
import { SlideMain } from './slideMain';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styles';

export function Main() {
  const data = useStaticQuery(graphql`
      query{
          alldata{
            mains {
              imgMainSection {
                url
              }
              titleMain
              titleLastMain
              paragraphMain
              listMain
              listMain2
              listMain3
              listMain4
              videoSub
              videoSub2
              videoMain2{
                url
              }
              videoMain{
                url
              }
              sakuraImg{
                url
              }
              narutoImg{
                url
              }
            }
          }
      }
  `)


  const { imgMainSection, titleMain, titleLastMain,
    paragraphMain, listMain,videoMain, videoMain2, videoSub,
    videoSub2, sakuraImg, narutoImg,
    listMain2, listMain3, listMain4 } = data.alldata.mains[0];

  return (
    <>
      <div>
        <SlideMain />
      </div>
      <S.ContainerSec back={imgMainSection.url}>
        <S.BoxTitle>
          <h2>{titleMain}</h2>
          <p>{paragraphMain}</p>
        </S.BoxTitle>
        <S.BoxList>
          <a> <li>{listMain}</li></a>
          <a> <li>{listMain2}</li></a>
          <a> <li>{listMain3}</li></a>
          <a> <li>{listMain4}</li></a>
        </S.BoxList>
      </S.ContainerSec>
      <section style={{ backgroundColor: "#1a1a1a", width: '100%', height: '70vh' }}>
        <S.TitleVideos>{titleLastMain}</S.TitleVideos>
        <S.BoxVideo>
          <div>
          <iframe src={videoMain.url} alt="epsisodio 323" />
            <p>{videoSub}</p>
           </div> 
           <div>
          <iframe src={videoMain2.url} alt="episodio 476"/>
          <p>{videoSub2}</p>
          </div>
        </S.BoxVideo>
      </section>
    </>

  )
}
