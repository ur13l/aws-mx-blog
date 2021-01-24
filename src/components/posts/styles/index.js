import styled from 'styled-components';

export const Wrapper  = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height: 600px;
  min-width: 425px;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
`;

export const WrapperImg = {
  width: '100%'
}

export const ImgStyles = {
  height: '250px'
};

export const ContentWrapper = styled.div`
  padding: 0 15px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 170px;
`;
