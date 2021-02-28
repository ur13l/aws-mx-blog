import styled from 'styled-components';

export const Wrapper  = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height: 550px;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 992px) {
    margin-right: 20px;
  }
`

export const WrapperImg = {
  width: '100%',
  marginBottom: '15px',
  height: '500px'
}

export const ContentWrapper = styled.div`
  padding: 0 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.5em;
  margin: 0 0 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 60px;
  font-weight: bold;
`;

export const Excerpt = styled.div`
  margin: 0 0 10px 0;
  font-size: 1.2em;
  overflow: hidden;
  flex-grow: 1;
  text-overflow: ellipsis;
  max-height: 8em;
  line-height: 1em;
`;
