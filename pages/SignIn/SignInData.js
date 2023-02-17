export const SignInData = [
  {
    id: 'Name',
    name: 'userName',
    title: '이름',
    placeholder: '이름',
    type: 'text',
    message: { name: '1자 이상 입력하세요.' },
  },
  {
    id: 'email',
    name: 'userEmail',
    title: '이메일(ID)',
    placeholder: '이메일',
    type: 'text',
    message: { email: '이메일 형식에 맞지 않습니다.' },
  },
  {
    id: 'password',
    name: 'userPassword',
    title: '비밀번호',
    placeholder: '비밀번호',
    type: 'password',
    message: { password: '대소문자, 특수문자, 숫자 1자이상 포함해야됩니다.' },
  },
];
