import { useEffect, useState } from "react"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch("https://mern-stack-books.herokuapp.com/user/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
            const jsonResponse = await response.json()
            alert(jsonResponse.message)
        } catch(err) {
            alert("ユーザー登録失敗")
        }
    }

    useEffect(() => {
        document.title = "登録ページ"
    }, [])

    return (
        <div>
            <h1 className="page-title">ユーザー登録ページ</h1>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" name="name" placeholder="名前" required></input>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" name="email" placeholder="メールアドレス"></input>
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="text" name="password" placeholder="パスワード"></input>
                <button>登録</button>
            </form>
        </div>
    )
}

export default Register
