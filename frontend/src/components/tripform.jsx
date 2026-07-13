import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ItenaryGenerationService from "@/api/askaiapi.js";

export default function TripPreferenceWizard({ onSuccess }) {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      destination: "",
      duration: 3,
      travelParty: "solo",
      budget: "moderate",
      pace: "balanced",
      interests: [],
    },
  });

  const watchParty = watch("travelParty");
  const watchBudget = watch("budget");
  const watchPace = watch("pace");
  const watchInterests = watch("interests");

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data) => {
    if (step < totalSteps) {
    return; 
  }
    try {
      const response = await ItenaryGenerationService.generateItenary(data);
      onSuccess(response.data); // Call the onSuccess callback with the generated itinerary data
      console.log("Itinerary generated successfully:", response);
    } catch (error) {
      console.error("Error generating itinerary:", error);
    }
  };

  const handleTagToggle = (tagValue) => {
    const currentTags = [...watchInterests];
    if (currentTags.includes(tagValue)) {
      setValue(
        "interests",
        currentTags.filter((t) => t !== tagValue),
      );
    } else {
      setValue("interests", [...currentTags, tagValue]);
    }
  };

  return (
    <div className="max-w-md mx-auto my-2 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Progress Header */}
      <div className="flex justify-between items-center mb-6 text-xs font-semibold tracking-wide uppercase text-gray-500">
        <span>
          Step {step} of {totalSteps}
        </span>
        <span className="text-blue-600">
          {Math.round((step / totalSteps) * 100)}% Complete
        </span>
      </div>

      {/* Visual Progress Bar */}
      <div className="w-full bg-gray-100 h-1.5 rounded-full mb-6 overflow-hidden">
        <div
          className="bg-blue-600 h-1.5 transition-all duration-300 ease-out"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <form  className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Where and when?
              </h2>
              <p className="text-sm text-gray-500">
                Tell us your destination and trip Duration.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destination
              </label>
              <input
                {...register("destination", {
                  required: "Destination is required",
                })}
                placeholder="e.g. Kyoto, Japan"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-colors"
              />
              {errors.destination && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {errors.destination.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (Days)
              </label>
              <input
                type="number"
                {...register("duration", { min: 1, max: 30 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
        )}

        {/* --- STEP 2: VIBE & BUDGET --- */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Who are going & budget?
              </h2>
              <p className="text-sm text-gray-500">
                Tailor the context of your recommendations.
              </p>
            </div>

            {/* Travel Party Grid Cards */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travel Party
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["solo", "couple", "family", "friends"].map((party) => {
                  const active = watchParty === party;
                  return (
                    <button
                      key={party}
                      type="button"
                      onClick={() => setValue("travelParty", party)}
                      className={`p-3 rounded-xl border text-sm font-medium capitalize text-center transition-all duration-200 ${
                        active
                          ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-600"
                          : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                      }`}
                    >
                      {party}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Segmented Control Toggle for Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Tier
              </label>
              <div className="flex bg-gray-100 p-1 rounded-xl">
                {["budget", "moderate", "luxury"].map((b) => {
                  const active = watchBudget === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setValue("budget", b)}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg capitalize transition-all duration-200 ${
                        active
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* --- STEP 3: STYLE & PACE --- */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Fine-tune your styles
              </h2>
              <p className="text-sm text-gray-500">
                Help the AI hit your specific interests.
              </p>
            </div>

            {/* Interactive Multi-Select Tag Chips */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Interests
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Foodie",
                  "History",
                  "Nature",
                  "Shopping",
                  "Adventure",
                  "Nightlife",
                ].map((interest) => {
                  const isSelected = watchInterests.includes(
                    interest.toLowerCase(),
                  );
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleTagToggle(interest.toLowerCase())}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                        isSelected
                          ? "bg-emerald-50 border-emerald-500 text-emerald-700 ring-1 ring-emerald-500"
                          : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Modern Radio Group for Pace */}
            {/* Custom Modern Radio Group for Pace */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trip Pace
              </label>
              <div className="space-y-2">
                {["relaxed", "balanced", "fast-paced"].map((p) => {
                  const active = watchPace === p;
                  return (
                    <label
                      key={p}
                      // Fix 1: Removed onClick from label to prevent event bubbling anomalies
                      className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all duration-200 ${
                        active
                          ? "border-blue-600 bg-blue-50/50"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-sm font-medium capitalize text-gray-800">
                        {p}
                      </span>
                      <input
                        type="radio"
                        value={p}
                        checked={active}
                        // Fix 2: Explicitly manage the value update through the native onChange channel
                        onChange={() => setValue("pace", p)}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* --- NAVIGATION CONTROLS --- */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <>
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-sm"
            >
              Next
            </button>
            <input type="date" className="ml-4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" />
            </>
          ) : (
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors shadow-sm"
            >
              Generate Itinerary ✨
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
