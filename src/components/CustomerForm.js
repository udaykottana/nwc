import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateForm1 } from '../redux/slices/siteSlice'; // Adjust the import path accordingly
import Stepper from '../common/reusable/stepper';
import SiteDetails from './SiteDetails';
import SiteAddress from './SiteAddress';
import EdgeDevice from './EdgeDevice';
import EmailNotification from './EmailNotification';
import { Grid, Button, Box, Card, CardContent } from '@mui/material';

const CustomerForm = () => {
  const [formOneData, setFormOneData] = useState({
    siteName: "",
    description: "",
    file: null,
  });

  const [formTwoData, setFormTwoData] = useState({
    address: "",
  });
  const [next, setnext] = useState(false);
  const dispatch = useDispatch();

  const CHECKOUT_STEPS = [
    {
      name: 'Site details',
      Component: SiteDetails,
      stateData: formOneData,next,
      setStateData: setFormOneData
    },
    {
      name: 'Site address',
      Component: SiteAddress,
      stateData: formTwoData,
      setStateData: setFormTwoData
    },
    {
      name: 'Edge device',
      Component: EdgeDevice,
      stateData: {},
      setStateData: () => {}
    },
    {
      name: 'Email notification',
      Component: EmailNotification,
      stateData: {},
      setStateData: () => {}
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const isValidate = () => {
    switch (currentStep) {
      case 1:
        // Validation logic for SiteDetails
        if (!formOneData.siteName) {
          alert("Site Name is required.");
          return false;
        }
        return true;
      case 2:
        // Validation logic for SiteAddress
        if (!formTwoData.address) {
          alert("Address is required.");
          return false;
        }
        return true;
      case 3:
        // Validation logic for EdgeDevice
        // Add your validation logic here
        return true;
      case 4:
        // Validation logic for EmailNotification
        // Add your validation logic here
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    setnext(true);
    if (isValidate()) {
      setCurrentStep((prevStep) => {
        if (prevStep === CHECKOUT_STEPS.length) {
          setIsComplete(true);
          console.log(formOneData);
          // dispatch(updateForm1(formOneData)); // Dispatch action to update form1 data
          return prevStep;
        } else {
          console.log(formOneData);
          // dispatch(updateForm1(formOneData)); 
          return prevStep + 1;
        }
      });
    }
    setnext(true);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === 1) {
        return prevStep;
      } else {
        setIsComplete(false);
        return prevStep - 1;
      }
    });
  };

  const currentStepConfig = CHECKOUT_STEPS[currentStep - 1];
  const CurrentStepComponent = currentStepConfig.Component;
  const stepProps = {
    stateData: currentStepConfig.stateData,
    setStateData: currentStepConfig.setStateData,
  };

  return (
    <Card className="AddSiteCard" variant="outlined" sx={{ width: '100%', minWidth: 782, boxShadow: '0px 3px 6px rgba(0,0,0,0.16)', margin: 3, borderRadius: 1.5,
      '@media (max-width: 1441px)': { maxWidth: 782 },
      '@media (min-width: 1441px)': { maxWidth: 1260 },
    }}>
      <CardContent sx={{ padding: 2 }}>
        <Grid container direction="row" alignItems="flex-start" justify="center" height={{ xs: 'auto', md: 'auto', xl: '100%' }} spacing={{ xs: 2, md: 4, xl: 8 }}>
          <Grid item sx={{ gap: 0 }} p={0} width="730px" xs={12} md={12} lg={12} xl={12}>
            <h2 style={{ textAlign: "left", marginBottom: "0px" }}>Add Site</h2>
            <div style={{ borderTop: "1px solid #BCBCBC", width: "100%" }}></div>
            <h3 style={{ textAlign: "left" }}>Customer Name</h3>
            <Stepper
              stepsConfig={CHECKOUT_STEPS}
              currentStep={currentStep}
              isComplete={isComplete}
              handleNext={handleNext}
              fontSize={{ xs: 14, md: 16, lg: 18 }}
              displayColor="#1976d2"
              height="14"
            />
            <Box minHeight="500px">
              <CurrentStepComponent {...stepProps} />
            </Box>
          </Grid>
          <Grid item width="730px" xs={12} md={12} lg={12} xl={12}>
            <Grid container direction="row" alignItems="flex-start" justifyContent="flex-end">
              {!isComplete && currentStep > 1 && (
                <Button variant="outlined" onClick={handlePrev} sx={{ mr: 1 }}>
                  Back to {CHECKOUT_STEPS[currentStep - 2].name}
                </Button>
              )}
              {!isComplete && (
                <Button variant="contained" onClick={handleNext}>
                  {currentStep === CHECKOUT_STEPS.length ? 'Save Site' : `Proceed to ${CHECKOUT_STEPS[currentStep].name}`}
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CustomerForm;
