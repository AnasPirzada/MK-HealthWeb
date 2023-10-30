import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import Contact from './StepperPage/Contactdetail.jsx';
import Other from './StepperPage/Otherdetail.jsx';
import License from './StepperPage/Licenandverification.jsx';
import Defaultfee from './StepperPage/defaultconsultFee.jsx';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ['', '', '', ''];
}

function getStepContent(step, showStep3, handleChoice, navigate) {
  switch (step) {
    case 0:
      return <Contact />;
    case 1:
      return <Other handleChoice={handleChoice} />;
    case 2:
      return  <License />;
    case 3:
      return <Defaultfee />;
    default:
      return 'Unknown step';
  }
}

const SignupStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      // Add default values for other form fields
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [showStep3, setShowStep3] = useState(false);
  const navigate = useNavigate(); // Add this line to access the navigate function

  const handleNext = data => {
    console.log(data);
    if (activeStep === 1 && showStep3) {
      setActiveStep(activeStep + 2);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChoice = choice => {
    if (choice === 'yes') {
      setShowStep3(true);
    } else {
      navigate('/'); // Replace '/' with the desired home page route
    }
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {getSteps().map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleNext)}>
          {getStepContent(activeStep, showStep3, handleChoice, navigate)}
          {/* <div className='d-flex justify-content-center my-5'>
            <Button
              className={classes.button}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>

            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              type='submit'
            >
              {activeStep === getSteps().length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div> */}
        </form>
      </FormProvider>
    </div>
  );
};

export default SignupStepper;
