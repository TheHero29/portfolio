import { useEffect, useState } from 'react';
import './ProgressBar.css';
function ProgressBar({percentage}) {
    const [percent,setPercent] = useState(0);
    useEffect(() => {},1000)
return (
<div className="progress-bar-container">
<div className="progress-bar" style={{ width: `${percentage}%` }}>
<span className="progress-bar-text">{percentage}%</span>
</div>
</div>
);
}
export default ProgressBar
