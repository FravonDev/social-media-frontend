import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from 'formik';
import { DefaultInput } from '../../../components/Form/DefaultInput';
import { DefaultButton } from '../../../components/Form/DefaultButton';
import { useAuth } from '../../../hooks/useAuth';
import { Layout } from '../Layout/Layout';


export const Login = () => {
    const { login } = useAuth();

    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            login(values.email, values.password);
        }
    })

    console.log(formik.errors.email)
    return (
        <Layout>
            <div className="flex items-center justify-center w-full h-full max-w-[900px] max-h-[600px] border-2 rounded-lg overflow-hidden shadow-shaForm">
                <div className='flex-1 h-full bg-bottom bg-login-image1 bg-cover hidden md:lg:block'>
                </div>
                <div className='flex-1 h-full'>
                    <form onSubmit={formik.handleSubmit} className='flex m-12 flex-col gap-y-4 md:lg:gap-y-6'>
                        <h1 className='text-4xl font-roboto font-bold text-start md:lg:mt-12'>
                            Login
                        </h1>

                        <DefaultInput
                            type='email'
                            placeholder='email'
                            name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            helperText={formik.errors.email}
                        />

                        <DefaultInput
                            name='password'
                            type='password'
                            placeholder='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            helperText={Boolean(formik.touched.email) && formik.errors.password || undefined}
                        />

                        <div className="pt-8">
                            <DefaultButton type='submit'
                                buttonContent='Login'
                                disabled={!formik.isValid} />
                        </div>
                        <p className='text-center pt-6'>
                            <span className='p-2'>Don't have an account?</span>
                            <Link to="/register" className='text-blue'>
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
