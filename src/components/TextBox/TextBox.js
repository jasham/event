import React from 'react'
import styled from 'styled-components'

const TextComp = styled.div`
  color       :   ${props => props.color};
  font-size  :    ${props =>
    props.fontSize === "tiny" ? "10px" :
      props.fontSize === "small" ? "12px" :
        props.fontSize === "normal" ? "15px" :
          props.fontSize === "medium" ? "20px" :
            props.fontSize === "big" ? "25px" :
              props.fontSize === "biggest" ? "30px" : props.fontSize
  } !important;
  /* bold        :   ${props => props.bold}; */
  font-weight :   ${props => props.fontWeight};
  font-family :   ${props =>
    props.ffamily === "black" ? 'SourceSansPro-Black' :
      props.ffamily === "blackItalic" ? 'SourceSansPro-BlackItalic' :
        props.ffamily === "bold" ? 'SourceSansPro-Bold' :
          props.ffamily === "boldItalic" ? 'SourceSansPro-BoldItalic' :
            props.ffamily === "extralight" ? 'SourceSansPro-ExtraLight' :
              props.ffamily === "extraLightItalic" ? 'SourceSansPro-ExtraLightItalic' :
                props.ffamily === "italic" ? 'SourceSansPro-Italic' :
                  props.ffamily === "lightItalic" ? 'SourceSansPro-LightItalic' :
                    props.ffamily === "regular" ? 'SourceSansPro-Regular' :
                      props.ffamily === "semiBold" ? 'SourceSansPro-SemiBold' :
                        props.ffamily === "semiBoldItalic" ? 'SourceSansPro-SemiBoldItalic' : 'SourceSansPro-Regular'
  } !important;   
`
const CustomText = (props) => {
  return (
    <TextComp color={
      props.color
    }
      fontSize={
        props.fontSize
      }
      fontWeight={
        props.fontWeight
      }
      bold={
        props.bold
      }
      ffamily={
        props.ffamily
      }
      style={
        props.style
      } > {
        props.children
      } </TextComp>
  )
}

export default CustomText