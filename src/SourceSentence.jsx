import React from 'react';

export default function SourceSentence({source, audio}) {
  return <div className="sentence sentence-card">
    <div className="sentence-row">
      <span>{source}</span>
      {audio && <div className="sentence-card-actions">{audio}</div>}
    </div>
  </div>;
}
