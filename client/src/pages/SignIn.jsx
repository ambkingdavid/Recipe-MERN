import { useForm } from "react-hook-form";
import { useEffect } from "react";



export default function SignIn() {
  const { register,
    handleSubmit,
    reset,
    watch,
    setError,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      checkPassword: "",
    }
  });

  const onSubmit = (data) => {
    const password = watch(['password', 'checkPassword']);
    if (password[0] !== password[1]) {
      setError('checkPassword', { type: 'custom', message: 'password does not match' });
      return;
    }
    alert(`submitted data: ${JSON.stringify(data)}`);
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div className="flex justify-center items-center h-screen bg-brown-100 box-border">
      <div className="border rounded-2xl shadow w-[400px] max-w-100 bg-white">
        <div className="bg-gray-100 px-5 py-4 rounded-t-2xl">
          <h1 className="font-bold text-2xl">Create Account</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="px-5">
          <div className="flex flex-col space-y-2 py-3">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="noah1234" id="username"
              className="border-2 rounded-lg p-2 focus:border-1 focus:outline focus:outline-[2px] focus:outline-slate-200"
              {...register('username', { required: true, maxLength: 20 })} autoComplete="true" />
            {errors.username && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="flex flex-col space-y-2 py-3">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="noah@mail.com" id="email"
              className="border-2 rounded-lg p-2 focus:border-1 focus:outline focus:outline-[2px] focus:outline-slate-200"
              {...register('email', { required: true })} autoComplete="true" />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="flex flex-col space-y-2 py-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"
              className="border-2 rounded-lg p-2 focus:border-1 focus:outline focus:outline-[2px] focus:outline-slate-200"
              {...register('password', { required: true })} />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="flex flex-col space-y-2 py-3">
            <label htmlFor="checkPassword">Confirm password</label>
            <input type="password" id="checkPassword"
              className="border-2 rounded-lg p-2 focus:border-1 focus:outline focus:outline-[2px] focus:outline-slate-200"
              {...register('checkPassword', { required: true })} />
            {errors.checkPassword && <span className="text-sm text-red-500">{errors.checkPassword.message || 'This field is required'}</span>}
          </div>
          <div className="flex flex-col space-y-2 py-3">
            <input type="submit" className="bg-brown-200 text-white border-2 rounded-lg py-2 focus:border-1 focus:outline focus:outline-[2px] focus:outline-slate-200" />
          </div>
        </form>
      </div>
    </div>
  )
}
