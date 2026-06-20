import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Lock, Mail, User, ArrowRight } from 'lucide-react';
import { signupSchema } from '../../schemas/SignupSchema.js';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card.jsx';
import { Field, FieldContent, FieldError, FieldLabel } from './ui/field.jsx';
import { Input } from './ui/input.jsx';

export default function Authform() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className='max-w-full max-h-full bg-[url("./trip.jpg")] bg-cover bg-center'>
      <Card>
        <CardHeader>
          <CardTitle>Start Your Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Note: Ensure 'name' matches your schema exactly (e.g., 'fullName' vs 'FullName') */}
            <Controller
              name="FullName"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Full Name</FieldLabel>
                  <Input placeholder="Your Name" {...field} />
                  <FieldError>{errors.FullName?.message}</FieldError>
                </Field>
              )}
            />
            <Controller
              name="Email"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input placeholder="email" {...field} />
                  <FieldError>{errors.Email?.message}</FieldError>
                </Field>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <Input placeholder="password" type="password" {...field} />
                  <FieldError>{errors.password?.message}</FieldError>
                </Field>
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Confirm Password</FieldLabel>
                  <Input placeholder="confirm password" type="password" {...field} />
                  <FieldError>{errors.confirmPassword?.message}</FieldError>
                </Field>
              )}
            />
            <button type="submit">Submit</button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}