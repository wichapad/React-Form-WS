import './formComponent.css'
import { useState } from "react"

const FormComponent = () => {

    //เก็บข้อความใน input ลงใน state
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    //กำหนด text Error Message
    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorRePassword, setErrorRePassword] = useState('');

    //กำหนด Color สำหรับ Error Message
    const [userNameColor, setUserNameColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passWordColor, setPasswordColor] = useState('');
    const [repasswordColor, setRePasswordColor] = useState('');

    const validateForm = (e) => {
        e.preventDefault();

        if (userName.length > 8) {
            setErrorUsername('')
            setUserNameColor('green')
        } else {
            setErrorUsername('Username 8 Characters Minimum')
            setUserNameColor('red')
        }

        if (email.includes("@")) {
            setErrorEmail('')
            setEmailColor('green')
        } else {
            setErrorEmail('Invalid Email')
            setEmailColor('red')
        }

        if (password.length > 8) {
            setErrorPassword('');
            setPasswordColor('green')
        } else {
            setErrorPassword('Password 8 Characters Minimum')
            setPasswordColor('red')
        }

        if (rePassword != "" && rePassword === password) {
            setErrorRePassword('');
            setRePasswordColor('green')
        } else {
            setErrorRePassword('Password Dose not  Match ');
            setRePasswordColor('red')
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Register Form</h2>
                <div className="form_control">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} style={{ borderColor: userNameColor }} />
                    <small style={{ color: userNameColor }}>{errorUsername}</small>
                </div>
                <div className="form_control">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderColor: emailColor }} />
                    <small style={{ color: emailColor }}>{errorEmail}</small>
                </div>
                <div className="form_control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderColor: passWordColor }} />
                    <small style={{ color: passWordColor }}>{errorPassword}</small>
                </div>
                <div className="form_control">
                    <label>Confirm Password</label>
                    <input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} style={{ borderColor: repasswordColor }} />
                    <small style={{ color: repasswordColor }}>{errorRePassword}</small>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormComponent