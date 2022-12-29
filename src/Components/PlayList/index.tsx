import React from 'react';
import * as S from './style';
import Thumbnail from '../../Assets/Img/thumbnail.png';

interface PropsType {
  title: string;
  url: string;
  explain: string;
  name: string;
}

export default function PlayList({ title, explain, url, name }: PropsType) {
  return (
    <S.PlayList>
      <S.ImgBox>
        <S.Link href={url} target="_blank">
          <S.Shortcut>바로가기</S.Shortcut>
          <S.Img src={Thumbnail} />
        </S.Link>
      </S.ImgBox>
      <S.Contents>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{explain}</S.SubTitle>
        <S.NickName>{name}</S.NickName>
      </S.Contents>
    </S.PlayList>
  );
}
