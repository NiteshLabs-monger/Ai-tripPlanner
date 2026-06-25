
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../schemas/SignupSchema.js';
import { signinSchema } from '../../schemas/signinschema.js';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card.jsx';
import { Field, FieldError, FieldLabel } from './ui/field.jsx';
import { Input } from './ui/input.jsx';
import { Button } from './ui/button.jsx'; // Assuming you have a button component
import bgImage from '@/assets/trip.jpg'; 
import { Loader2 } from 'lucide-react';// Import your image
import { useMatch } from 'react-router-dom';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { userService } from '@/api/authapi.js';

export default function Authform() {

  const isSignup = useMatch("/signup");
  const navigate =useNavigate()
  
  const currentSchema = isSignup? signupSchema:signinSchema;
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(currentSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });
  


  const onSubmit = async (data) => {
  
    try {
      if(isSignup){
         userService.signup(data)
        navigate('/signin')
      }else{
        userService.signin(data)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className='min-h-screen bg-cover bg-center flex justify-center items-center'>
      <Card className="w-full max-w-md ">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Start Your Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Ensure these 'name' props match your Zod schema keys exactly */}
            <Controller
              name="fullname"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Full Name</FieldLabel>
                  <Input placeholder="Your Name" {...field} />
                  <FieldError>{errors.fullname?.message}</FieldError>
                </Field>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input placeholder="email@example.com" {...field} />
                  <FieldError>{errors.email?.message}</FieldError>
                </Field>
              )}
            />
             <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>password</FieldLabel>
                  <Input  {...field} />
                  <FieldError>{errors.password?.message}</FieldError>
                </Field>
              )}
            />
             {isSignup ? 
             <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Confirm password</FieldLabel>
                  <Input  {...field} />
                  <FieldError>{errors.confirmPassword?.message}</FieldError>
                </Field>
              )}
            />:""}
            
            
           <CardFooter className="flex flex-col items-center">
            <Button type="submit" className="w-full " disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>

                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                          </>
                        ) : (
                          "submit"
                        )}
                      </Button>

            {isSignup ? 
            
            
                      <div className="text-center mt-4">
                        <p>
                          Already a member?{" "}
                          <Link
                            to="/signin"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Sign in
                          </Link>
                        </p>
                      </div>
          :
            
            
                      <div className="text-center mt-4">
                        <p>
                          New to Trip Dost?{" "}
                          <Link
                            to="/signup"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Sign up
                          </Link>
                        </p>
                      </div>}
           </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}