import React from "react";
import Welcome from "./pages/Welcome/Welcome";
import {Routes, Route } from 'react-router-dom';
import KeyFeatures from "./pages/Onboarding/KeyFeatures/KeyFeatures";
import OnboardingBudgetType from "./pages/Onboarding/OnboardingBudget/OnboardingBudgetType";
import OnboardingBudgetCurrency from "./pages/Onboarding/OnboardingBudget/OnboardingBudgetCurrency";
import OnboardingBudgetName from "./pages/Onboarding/OnboardingBudget/OnboardingBudgetName";
import OnboardingName from "./pages/Onboarding/PersonalInfo/OnboardingName";
import OnboardingGender from "./pages/Onboarding/PersonalInfo/OnboardingGender";
import OnboardingBudgetAmount from "./pages/Onboarding/OnboardingBudget/OnboardingBudgetAmout";
import PlanningMode from "./pages/Onboarding/PlanningMode/PlanningMode";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/onboarding/name" element={<OnboardingName />} />
          <Route path="/onboarding/gender" element={<OnboardingGender />} />
          <Route path="/onboarding/features" element={<KeyFeatures />} />
          <Route path="/onboarding/budget-type" element={<OnboardingBudgetType />} />
          <Route path="/onboarding/budget-name" element={<OnboardingBudgetName />} />
          <Route path="/onboarding/budget-currency" element={<OnboardingBudgetCurrency />} />
          <Route path="/onboarding/budget-amount" element={<OnboardingBudgetAmount />} />
          <Route path="/onboarding/select-budget-type" element={<OnboardingBudgetType />} />
          <Route path="/onboarding/planning-mode" element={<PlanningMode />} />
        </Routes>
  )
}

export default App;