import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './style';
import Header from './Header';
import PlayList from '../PlayList/index';
import Modal from '../Modal/index';
import * as A from '../../Atoms/isListDataAtom';

export default function MainPage() {
  const isListData = useRecoilValue(A.isListData);

  return (
    <>
      <Modal />
      <S.MainPage>
        <Header />
        <S.Content>
          {isListData.map((d) => (
            <PlayList
              title={d.title}
              explain={d.explain}
              url={d.url}
              name={d.name}
            />
          ))}
        </S.Content>
      </S.MainPage>
    </>
  );
}
