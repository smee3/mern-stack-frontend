import { useState, useEffect } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch("https://mern-stack-books.herokuapp.com/user/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const jsonResponse = await response.json()
            localStorage.setItem("token", jsonResponse.token)
            alert(jsonResponse.message)
        } catch(err) {
            alert("ログイン失敗")
        }
    }

    useEffect(() => {
        document.title = "ログインページ"
    }, [])

    return (
        <div>
            <h1 className="page-title">ログイン</h1>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="メールアドレス" required></input>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="password" placeholder="パスワード" required></input>
                <button>ログイン</button>
            </form>
        </div>
    )
}

export default Login
