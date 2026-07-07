const { z } = require('zod');

const itineraryInputSchema = z.object({
  destination: z.string()
    .min(2, { message: "Destination must be at least 2 characters long." })
    .max(50, { message: "Destination name is too long." }),
  
  durationDays: z.number()
    .int()
    .min(1, { message: "Duration must be at least 1 day." })
    .max(30, { message: "We only support up to 30-day itineraries." }),
  
  budget: z.enum(['Budget', 'moderate', 'Luxury'], {
    errorMap: () => ({ message: "Budget must be either 'Budget', 'Moderate', or 'Luxury'." })
  }),
  
  preferences: z.array(z.string())
    .min(1, { message: "Please select at least one preference." })
});

// A clean middleware wrapper
const validateItineraryInput = (req, res, next) => {
  const result = itineraryInputSchema.safeParse(req.body);
  
  if (!result.success) {
    // Format and return Zod's internal error issues neatly to the frontend
    const errorMessages = result.error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message
    }));
    
    return res.status(400).json({ errors: errorMessages });
  }
  
  // Replace req.body with the safely parsed data (strips out any uninvited malicious fields)
  req.body = result.data;
  next();
};
export { itineraryInputSchema, validateItineraryInput };