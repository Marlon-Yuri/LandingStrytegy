import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function Header() {
    const data = useStaticQuery(graphql`
    query {
        alldata {
            headers {
                blog
                enter
                faq
                logoheader {
                  url
                }
              }
        }
        }
    
`)
    const { blog, enter, faq, logoheader } = data.alldata.headers[0]
    return (
        <S.Container >
           <S.Logo src = {logoheader.url} alt='logo'/>
           <S.BoxList>
               <li>{blog}</li>
               <li>{faq}</li>
               <S.Enter>{enter}</S.Enter>
               <S.BoxItem>EN</S.BoxItem>
           </S.BoxList>
            
        </S.Container>
    )
}
