import CreateFormView from "@/components/forOnePageAlone/write/createFormView";


//type 흐름 생각하기

export default function WritePage() {

  return (
    <>
      <div className="logSheet">
        <CreateFormView />
      </div>
    </>
  );
}//이건 server component니까 client component이더라도 CreateFormView에 prop을 넘겨줘도 됨



//css를 똑같이 적용하고, 페이지 자체는 다르게 해야겠다
/*
  <div className="logFormat">
    <div className="logTitleContainer">
      <TitleComponent/>
    </div>

    <div className="logDescriptionContainer">
      <div className="logDate">
        <div className="date">{today}</div>
      </div>

      <div className="paragraphGroup">
        <div className="paragraph">

          <ParagraphComponent/>
        
        </div>
      </div>
    </div>
  </div>
*/

/*
<form>
 <Component>
</form>
<emotion>
<emotion>
*/