import { Plus, ThumbsUp, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useState } from "react";

export default function VotingBucket() {
  const [votes, setVotes] = useState([]);
  const [vote, setvote] = useState('');


  const addVote = () => {
    if (vote.trim() === '') return;
    
    setVotes((prev) => [
      ...prev, 
      { name: vote, count: 0 } // Store as an object
    ]);
    setvote(''); 
  };

  // 2. Increment the count of a specific item by its index
  const handleIncrement = (indexToUpdate) => {
    setVotes((prev) =>
      prev.map((item, index) =>
        index === indexToUpdate 
          ? { ...item, count: item.count + 1 } 
          : item 
      )
    );
  };

  const clearBucket = () => {
    setVotes([]);
  };

  return (
    <Card style={{ maxWidth: '400px', margin: '20px auto', padding: '10px' }}>
      <CardHeader>
        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
          <h4 style={{ margin: 0 }}>Voting Bucket</h4>
          {votes.length > 0 && (
            <button onClick={clearBucket} title="Reset Bucket" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <RotateCcw size={16} color="gray" />
            </button>
          )}
        </div>
        <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
          <input 
            type="text" 
            value={vote} 
            onChange={(e) => setvote(e.target.value)} 
            placeholder="Add a candidate/option..."
            style={{ flex: 1, padding: '6px' }}
          />
          <button onClick={addVote} style={{ padding: '6px 12px' }}>
            <Plus size={16} />
          </button>
        </div>
      </CardHeader>
      
      <CardContent style={{ marginTop: '15px' }}>
        {votes.length === 0 ? (
          <p style={{ color: 'gray', fontSize: '14px', textAlign: 'center' }}>No options added yet.</p>
        ) : (
          votes.map((voteItem, index) => (
            <div 
              key={index} 
              style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid #eee" 
              }}
            >
              <span>{voteItem.name}</span>
              
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {/* Display the current vote count */}
                <span style={{ fontWeight: 'bold' }}>{voteItem.count}</span>
                
                {/* Button to trigger the vote */}
                <button 
                  onClick={() => handleIncrement(index)}
                  style={{ display: 'flex', alignItems: 'center', padding: '4px 8px', cursor: 'pointer' }}
                >
                  <ThumbsUp size={14} style={{ marginRight: '4px' }} /> Vote
                </button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}