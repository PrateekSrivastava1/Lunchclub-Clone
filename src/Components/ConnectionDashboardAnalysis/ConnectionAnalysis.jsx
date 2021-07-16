import React from "react";
import "./ConnectionAnalysis.css";
function ConnectionAnalysis(props) {
  return (
    <div className="ConnectionAnalysisBody"> 
    
        {/*if boolNetworkScore props is true then we will show netScore */}
        {/*if boolInspiredMeetings props is true then we will show netMeetingScore  */} 
        {/* if SuperInvesters props is true then we will show emoji */}  
    {
        (props.boolNetworkScore && (<p className="info">Your network score <strong className="netScore">{props.networkScore}</strong></p>))||
        (props.boolInspiredMeetings && (<p className="info">You Inspired <strong className="netMeetingScore">{props.InspiredMeetings} Meetings</strong></p>)) ||
        (props.SuperInvesters && (<p className="info">Superinviters 🎉</p>))
    }
      
    {
        (props.boolNetworkScore && (<strong className="underlineEffects">See breakdown</strong>))||
        (props.boolInspiredMeetings && (<strong className="underlineEffects">View analysis</strong>)) ||
        (props.SuperInvesters && (<strong className="underlineEffects">Look at the list</strong>))
    }
    </div>
  );
}

export default ConnectionAnalysis;
