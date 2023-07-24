import { useCallback } from 'react';
import { Model } from 'survey-core';
import { Survey, SurveyCreator } from 'survey-react';
import 'survey-react/survey.css';
import surveyJson from './survey.json';

function App() {
  const survey = new Model(surveyJson);
  return <Survey model={survey} />;
}

function App() {
  const survey = new Model(surveyJson);
  return <SurveyCreator json={survey} />;
}

// Path: index.js
import { useCallback } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react';
import 'survey-react/survey.css';
import surveyJson from './survey.json';

function App() {
  const survey = new Model(surveyJson);
  const surveyComplete = useCallback((sender) => {
    console.log(sender.data);
  }, []);

  survey.onComplete.add(surveyComplete);

  return <Survey model={survey} />;
}


// ...
const SURVEY_ID = 1;

function App() {
  const survey = new Model(surveyJson);
  const surveyComplete = useCallback((sender) => {
    saveSurveyResults(
      "https://your-web-service.com/" + SURVEY_ID,
      sender.data
    )
  }, []);

  survey.onComplete.add(surveyComplete);

  return <Survey model={survey} />;
}

function saveSurveyResults(url, json) {
  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.addEventListener('load', () => {
    // Handle "load"
  });
  request.addEventListener('error', () => {
    // Handle "error"
  });
  request.send(JSON.stringify(json));
}
const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

function App() {
  const survey = new Model(surveyJson);
  const surveyComplete = useCallback((sender) => {
    saveSurveyResults(
      "https://your-web-service.com/" + SURVEY_ID,
      sender.data
    )
  }, []);

  survey.onComplete.add(surveyComplete);

  return <SurveyCreator json={survey} options={creatorOptions} />;
}


