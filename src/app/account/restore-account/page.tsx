export default function restoreAccount(){
    return(
    <>
        <div>계정 생성시에 사용하신 이메일 주소를 입력해주시면, 비밀번호 재설정 메일을 보내드려요</div>
        <form action="">
            <input type="text" name="" id="restore" placeholder="mood-loger@email.com" required/>
            <input type="submit" value="재설정 메일 받기" />
        </form>
    </>
)
}