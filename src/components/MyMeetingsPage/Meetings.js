import React, {
  Component
} from 'react'
import TextBox from '../../components/TextBox/TextBox'
import { properties, fSize, fWeight } from '../../conf/properties'
import Header from '../../components/Header/Header'
import HeaderDown from '../../components/Header/HeaderDown'
import turkeyistanbul from '../../assets/images/turkeyistanbul.png'
import Footer from '../../components/Footer/Footer'
import FooterDown from '../../components/Footer/FooterDown'
import styled from 'styled-components'
import ReactSearchBox from 'react-search-box'

const MainWrapper = styled.div`
  padding : 24px 48px;
  display: flex;
  justify-content: center;
  height: 53vh;
  background-color: ${properties.bgGray};
`
const SW1 = styled.div`
  height: 80px;
  width: 80%;
  display: flex;
  flex-direction: column;
  border : 1px solid rgba(0, 40, 100, 0.12);
  background-color: white;
  min-height: 95%;
`
const HeaderColumn = styled.div`
  padding: 15px 24px;
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);
`
const ListColumn = styled.div`
  padding: 24px;
`


class Attendees extends Component {
  render() {
    return (<div>
      <Header />
      <HeaderDown />
      <MainWrapper >
        <SW1>
          <HeaderColumn>
            <TextBox
              color={properties.littleLightGrey}
              fontSize={fSize.slarge}>
              My Meetings
            </TextBox>
          </HeaderColumn>
          <ListColumn>

          </ListColumn>
        </SW1>
      </MainWrapper>
      <Footer />
      <FooterDown />
    </div >
    )
  }
}

export default Attendees