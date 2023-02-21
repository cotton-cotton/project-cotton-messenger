import React from 'react';
import * as S from './CheckingProfile.style';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions } from '../../App/profileSlice';
import { useRouter } from 'next/router';

const CheckingProfile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profileList);
  console.log(profile);

  const removeProfile = () => {
    dispatch(profileActions.deleteProfile({data: []}));
  }

return (
<S.CheckingProfileWrapper>
    {profile.map((list, index) => {
      return(
        <S.CheckingProfileContainer key={index} id={list.id}>
          <S.ProfileBox>
        <S.ProfileImg
        src={list.userImg}
        alt='user-img'
        />
        <S.ProfileName>{list.userName}</S.ProfileName>
        </S.ProfileBox>
        <S.ButtonContainer>
        <S.Cancel
        type='button'
        onClick={() => {
          removeProfile();
          router.push('/SignIn/SignIn');
         }}
        >
          ←&nbsp;프로필 설정 다시하기</S.Cancel>
        <S.Confirm type='button'>채팅하러 가기&nbsp;→</S.Confirm>
        </S.ButtonContainer>
        </S.CheckingProfileContainer>
      );
    })}
</S.CheckingProfileWrapper>
)
};

export default CheckingProfile;