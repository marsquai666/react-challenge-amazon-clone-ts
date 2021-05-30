import React, {useContext, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import { AuthContext, UserContext } from "./AuthContextProvider";

/**
 * ログイン、または会員登録処理を管理するコンポーネント
 * @returns 
 */
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    // 以下の書き方で他のコンポーネントから共通の認証情報を取得できる
    const [auth, setAuth] = useContext(AuthContext);
    const [user, setUser] = useContext(UserContext);

    /**
     * サインインのリクエストをサーバーに送り、成功した場合TOPページにリダイレクト
     * @param e 
     */
    const signIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        // 以下サーバーなしの擬似的なサインイン
        const userId = `${email}_${password}`;
        setUser({userId: userId});

        // リダイレクト
        history.push("/");
    }

    /**
     * 会員登録のリクエストをサーバーに送り、成功した場合TOPページにリダイレクト
     */
    const register = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        // 以下サーバーなしの擬似的な会員登録
        const userId = `${email}_${password}`;
        setUser({userId: userId});

        // リダイレクト
        history.push("/");
    }

    /**
     * メールアドレスの変更ハンドラ
     * @param e 
     */
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    /**
     * パスワードの変更ハンドラ
     * @param e 
     */
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }


    return (
        <div>
            {/* ロゴ */}
            <Link to="/">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>

            <div>
                <h1>ログイン</h1>

                <form>
                   <label>メールアドレス</label>
                   <input value={email} type="text" onChange={changeEmail}></input>

                   <label>パスワード</label>
                   <input value={password} type="password" onChange={changePassword}></input>

                   <button type="submit" onClick={signIn}>ログイン</button>
                   <button type="submit" onClick={register}>会員登録</button>
                </form>
            </div>
            
        </div>
    )
}


export default Login;