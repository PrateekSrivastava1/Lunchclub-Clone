import React from "react";
import "./ConnectionAnalysis.css";
function ConnectionAnalysis({networkScore, InspiredMeetings, boolNetworkScore, boolInspiredMeetings, SuperInvesters}) {
  return (
    <div className="ConnectionAnalysisBody"> 
    
        {/*if boolNetworkScore props is true then we will show netScore */}
        {/*if boolInspiredMeetings props is true then we will show netMeetingScore  */} 
        {/* if SuperInvesters props is true then we will show emoji */}  
    {
        (boolNetworkScore && (<p className="info">Your network score <strong className="netScore">{networkScore}</strong></p>))||
        (boolInspiredMeetings && (<p className="info">You Inspired <strong className="netMeetingScore">{InspiredMeetings} Meetings</strong></p>)) ||
        (SuperInvesters && (<p className="info">Superinviters 🎉</p>))
    }
      
    {
        (boolNetworkScore && (<strong className="underlineEffects">See breakdown</strong>))||
        (boolInspiredMeetings && (<strong className="underlineEffects">View analysis</strong>)) ||
        (SuperInvesters && (<strong className="underlineEffects">Look at the list</strong>))
    }
    </div>
  );
}

export default ConnectionAnalysis;
