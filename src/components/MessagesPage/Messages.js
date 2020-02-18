import React, {
  Component
} from 'react'
import TextBox from '../../components/TextBox/TextBox'
import { properties, fSize, fWeight, ffamily } from '../../conf/properties'
import Header from '../../components/Header/Header'
import HeaderDown from '../../components/Header/HeaderDown'
import turkeyistanbul from '../../assets/images/turkeyistanbul.png'
import Footer from '../../components/Footer/Footer'
import FooterDown from '../../components/Footer/FooterDown'
import styled from 'styled-components'
// import ReactSearchBox from 'react-search-box'

const MainWrapper = styled.div`
  padding : 24px 48px;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${properties.bgGray};
`
const SW1 = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: row;
  border : 1px solid rgba(0, 40, 100, 0.12);
  background-color: white;
  min-height: 98%;
`
const HeaderBox = styled.div`
  width: 30%;
`
const MessageHeader = styled.div`
  width: 100%;
  height: 50px;
  display:flex;
  flex-direction: row;
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);
`
const RecentMessageHeader = styled.div`
  width: 40%;
  display: flex;
  align-items:center;
  padding-left: 20px;
`
const SearchMessageHeader = styled.div`
  width: 60%;
  display: flex;
  align-items:center;
`
const MessageListA = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${properties.messageBG};
  height: 77px;
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);

`
const MessageList = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${properties.white};
  height: 77px;
  border-bottom : 1px solid rgba(0, 40, 100, 0.12);
`
const MessagePhoto = styled.div`
  width: 26.52px;
  height: 26.52px;
  background-image : url(${props => props.turkeyistanbul});
  background-size: cover;
  border-radius : 5px;
  cursor: pointer;
  margin: 18px 0px 16px 10px;
`
const MessageSummary = styled.div`
  width: 100%;
  background-color:red;
  margin: 18px 10px 16px 10px;
`
const ND = styled.div`
  display: flex;
  flex-direction: row;
`
const Name = styled.div`
  width: 80%;
`
const Date = styled.div`
  width: 20%;
`
const MSummary = styled.div`
  width: 100%;
`

const MessageBox = styled.div`
  width: 70%;
  border-left : 1px solid rgba(0, 40, 100, 0.12);
  

`
const InputBox = styled.input`
  border : 0px;
  outline-offset : 0px;
  border-bottom : 1px solid rgba(0,0,0,0.2);
  margin-right: 20px;
  height: 20px;
  font-size: 15px;
  width: 90%;
  :focus{
    outline : 0px !important;
    
  }
`
class Messages extends Component {
  render() {
    return (<div>
      <Header />
      <HeaderDown />
      <MainWrapper >
        <SW1>
          <HeaderBox>
            <MessageHeader>
              <RecentMessageHeader>
                <TextBox
                  ffamily={"Bold"}
                  color={properties.messagesBlue}
                  fontSize={fSize.lMedium}>
                  Recent
                </TextBox>
              </RecentMessageHeader>
              <SearchMessageHeader>
                <InputBox placeholder="Search" />
              </SearchMessageHeader>
            </MessageHeader>
            <MessageListA>
              <MessagePhoto turkeyistanbul={turkeyistanbul} />
              <MessageSummary>
                <ND>
                  <Name>
                    <TextBox
                      ffamily={"Bold"}
                      color={properties.messagesBlack}
                      fontSize={fSize.medium}>
                      Peter Richards
                   </TextBox>
                  </Name>
                  <Date>
                    <TextBox
                      ffamily={"Bold"}
                      color={properties.messagesBlack}
                      fontSize={fSize.mSmall}>
                      Dec 25
                    </TextBox>
                  </Date>
                  <MSummary>
                    <TextBox
                      ffamily={"Bold"}
                      color={properties.messagesBlack}
                      fontSize={fSize.mSmall}>
                      Test, which is a new approach to have all solutions astrology under one roof.
                    </TextBox>
                  </MSummary>

                </ND>
              </MessageSummary>
            </MessageListA>
            <MessageList>
              <MessagePhoto turkeyistanbul={turkeyistanbul} />
            </MessageList>
          </HeaderBox>
          <MessageBox>

          </MessageBox>
        </SW1>
      </MainWrapper>
      <Footer />
      <FooterDown />
    </div >
    )
  }
}

export default Messages