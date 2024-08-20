export default function logDate(){
    const today = "00.00.xxx";//데이터베이스에서 가져올 내용
    return (
        <div className="logDate">
            <div className="date">{today}</div>
        </div>
    )
}