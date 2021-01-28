import React from 'react';
import { LoginType } from "../../src/types";
import { TextField } from '@material-ui/core'

const Login = () => {
    const [ userInfo, setUserInfo ] = React.useState<LoginType>({
        email: '',
        password: ''
    })

    return (
        <div style={{ width: '100%', height: '100vh', overflow: 'scroll', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <span>
                로그인 페이지
            </span>
            <TextField label={'Email'} />
            <input style={{ width: '200pt', height: '40pt', border: 0, borderRadius: '20pt', backgroundColor: '#FFE94A', paddingLeft: '20pt' }}
                   placeholder={'아이디를 입력해주세요.'} value={userInfo.email} color={'#000'} autoFocus={true}
                   onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
            <input style={{ width: '200pt', height: '40pt', border: 0, borderRadius: '20pt', backgroundColor: 'green', paddingLeft: '20pt' }}
                   placeholder={'비밀번호를 입력해주세요.'} value={userInfo.password} color={'#000'} type={'password'}
                   onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} />
        </div>
    )
}

export default Login;