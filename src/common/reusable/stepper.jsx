import React from 'react';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const Stepper = ({ stepsConfig = [], currentStep, isComplete, handleNext, fontSize = 16 ,displaycolor= "#1976d2", height = 16}) => {
  const googleFontsLink = document.createElement('link');
  googleFontsLink.rel = 'stylesheet';
  googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
  document.head.appendChild(googleFontsLink);

  const styles = `
    .stepper {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      line-height: ${height}px;
    }

    .step {
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: ${height}px;
    }

    .step-number {
      width: ${height}px;
      height: ${height}px;
      border-radius: 50%;
      background-color: #ffffff;
      border: 1px dashed black;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2px;
      z-index: 2;
      line-height: ${height}px; /* Added line-height */
    }

    .step-name {
      font-size: ${height}px;
      margin-left: 8px; /* Added margin to separate step name from step number */
    }

    .active .step-number {
      background: linear-gradient(to right, ${displaycolor} 50%, transparent 50%);
      background-color: white;
      color: ${displaycolor};
      border: 1px solid ${displaycolor};
    }

    .complete .step-number {
      background-color: white;
      color: ${displaycolor};
      border: 1px solid ${displaycolor};
    }

    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 20
    }

  `;

  return (
    <>
      <style>{styles}</style>
      <Box sx={{margin:'0px',height:'44px'}}>
      <Box sx={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}>
        <LinearProgress variant="determinate" value={((currentStep - 1) / (stepsConfig.length)) * 100} 
        sx={{
          '& .MuiLinearProgress-bar': {
            backgroundColor: displaycolor, 
          },
          backgroundColor:"#f0f0f0",
          borderRadius:"12px"
        }}/>
      </Box>
      <div className="stepper">
        {stepsConfig.map((step, index) => (
          <div
            key={step.name + index}
            className={`step ${currentStep > index + 1 || isComplete ? 'complete' : 'incomplete'} ${
              currentStep === index + 1 ? 'active' : ''
            }`}
          >
            <div className="step-number">
              {currentStep > index + 1 || isComplete ? <span style={{fontSize:`${height}px`}} className="material-symbols-outlined">check</span> : ' '}
            </div>
            <div className="step-name">{index + 1}.{step.name}</div>
          </div>
        ))}
      </div>
      </Box>
    </>
  );
};

export default Stepper;