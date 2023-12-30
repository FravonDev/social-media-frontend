import { DefaultButton } from '../../../components/Form/DefaultButton'
import { DefaultInput } from '../../../components/Form/DefaultInput'
import { Layout } from '../Layout/Layout'

export const Register = () => {
    return (
        <Layout>
            <div className="w-full h-full flex justify-center items-center ">
                <form action=""
                    className='flex flex-row justify-center h-full w-full max-h-[782px] max-w-[1030px]'
                >
                    <div className='flex-1 bg-purple bg-cover bg-no-repeat bg-center'>
                        1 Your Name
                        2 Birthdate
                        3 Email
                        4 Username
                        5 Password
                        6 Bio
                        7 Confirm
                    </div>
                    <div >
                        <h1>Hi! What's your name?</h1>
                        <p>Type your name to get started. Keep in mind that other users can see it.</p>
                        <DefaultInput placeholder="Tell us what's your name" />
                        <DefaultButton>NEXT</DefaultButton>
                        <p>
                            By signing up, you agree to social media
                            <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy policy</span>
                        </p>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
