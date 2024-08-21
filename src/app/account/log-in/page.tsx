import LoginFormView from "@/components/forOnePageAlone/login/loginFormView"
import Link from "next/link"

export default function LogInPage(){

    return(<>
        <div>
            <LoginFormView/>
            <Link href='/account/sign-up'>계정 만들기</Link>
            <Link href='/account/restore-account'>비밀번호가 기억나지 않아요</Link>
        </div>
    </>)
}