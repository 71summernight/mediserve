import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DocRating from '../../components/DocRating/DocRating';

const DoctorList = ({ Doctor, Ex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({});

  const ToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setInfo({ Doctor });
  }, []);

  return (
    <SelectBox>
      <DocList>
        <DocImg Feed={Doctor.job} src={Doctor.pic} />
        <DocDetailBox>
          <DocDetailHeader>
            <DocName>
              <span>{Doctor.name}</span>
            </DocName>
            <Rating Feed={Doctor.job}>
              <Counsel>{Doctor.rating}</Counsel>
              <DocRating />
            </Rating>
          </DocDetailHeader>
          <DocDesc>
            <Profile isOpen={isOpen} Feed={Doctor.job}>
              {Doctor.profile}
            </Profile>
            <More onClick={ToggleOpen}>
              <span>{isOpen ? '접기' : '...더보기'}</span>
            </More>
          </DocDesc>
        </DocDetailBox>
      </DocList>
    </SelectBox>
  );
};

export default DoctorList;

const SelectBox = styled.div`
  &:hover {
    background: rgba(92, 221, 230, 0.2);
  }
`;

const DocList = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 0 15px 0;
  margin: 0 25px;
  border-bottom: 1px solid #3db8c0;
`;

const DocImg = styled.img`
  width: ${props => (props.Feed ? '107px;' : '81px;')};
  height: ${props => (props.Feed ? '107px;' : '81px;')};
  object-fit: cover;
  margin-top: 10px;
`;

const DocDetailBox = styled.div`
  padding-left: 10px;
`;

const DocDetailHeader = styled.div`
  display: flex;
  margin-top: 20px; ;
`;

const DocDesc = styled.div`
  width: 100%;
  padding-top: 10px;
  font-size: 14px;
`;

const Profile = styled.div`
  width: 90%;
  height: ${props => (props.isOpen ? '"";' : '40px;')};
  overflow-y: ${props => (props.isOpen ? '"";' : 'hidden;')};
  font-size: ${props => (props.Feed ? '16px;' : '14px;')};
  line-height: ${props => (props.Feed ? '20px;' : '14px;')};
  margin-bottom: 10px;
  word-break: break-word;
`;

const More = styled.div`
  position: absolute;
  text-align: right;
  right: 10px;
  bottom: 8px;
  font-size: 12px;
  letter-spacing: 0;
  cursor: pointer;
  padding-top: 10px;
`;

const Counsel = styled.span`
  letter-spacing: 0;
  font-size: 15px;
  line-height: 15px;
  padding: 0 5px 0 10px;
`;

const Rating = styled.div`
  display: ${props => (props.Feed ? 'flex;' : 'none;')};
  justify-content: center;
  align-items: baseline;
  letter-spacing: 0;
  font-size: 12px;
`;

const DocName = styled.div`
  height: 18px;
  letter-spacing: 0;

  font-size: 18px;
`;
