//import circleGraph
//import frequency_backteps
//import barChart

function ReportPageSection() {
  /*
    {
    subtitle
    detailed graph
    analysis
    }
    */
}
// reportgraphs와 reportpagesection은 서로 의존하지 않는다. <-그동안 컴포넌트간의 의존, 비의존 관계를 헷갈렸던 것 같다.
function ReportGraphs() {
  /*
  <div>
    <div graphSection>
      <div className="roughGraph"> {roughGraph[0]}</div>
      <div className="graphName">{roughGraph[0].name}</div>
    </div>
    <div graphSection>
      <div className="roughGraph">{roughGraph[1]}</div>
      <div className="graphName">{roughGraph[1].name}</div>
    </div>
  </div>
  */
} //

export default function Report() {
  /*
  const data = {
    subtitle
    detailed graph
    analysisData
  }
 <div className="title">Journal Report</div>
 <div className="pages">
  <div className="page">
    <ReportGraphs roughGraph=circleGraph>
    <ReportPageSection data=data graph={shape:bar, line:false}>
    <ReportPageSection data=data graph={shape:bar, line:true}>
  </div>
  <div className="page">
    <ReportGraphs roughGraph=frequency_backteps>
    <ReportPageSection data=data graph={shape:calendar, color:true}>
    <ReportPageSection data=data graph={shape:calendar, color:false}>
  </div>
 </div>
    

    
 }
 */
}

/*
title
{ 
    {
        rough graph
        {
        mini title
        detailed graph
        analysis
        }
        {
        mini title
        detailed graph
        analysis
        }
    }
    {
        rough graph
        {
        mini title
        detailed graph
        analysis
        }
        {
        mini title
        detailed graph
        analysis
        }
    }
}
*/
