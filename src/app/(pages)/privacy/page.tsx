import React from 'react';
import Nav from '../../../components/landing/nav';
import Footer from '../../../components/landing/footer';
import Image from 'next/image';

type Props = {};

const privacy = (props: Props) => {
    return (
        <div className="flex-1 justify-between items-center bg-gray-950">
            <Nav />
            <section className="privacy-policy text-white bg-gray-950 relative isolate flex justify-center py-32 px-20">
                <div className='max-w-[60%] text-gray-500 text-sm'>
                    <p className="mb-4 text-gray-300"></p>
                    <h2 className="text-4xl font-bold text-center text-white mb-20 ml-60">
                        Privacy Policy for Amigo
                    </h2>
                    <p className="mb-2 text-gray-300">Effective Date: 10 April 2024</p>

                    <p className="mb-4 text-gray-300 ">
  <span className='text-2xl text-blue-100 mr-5'>
    Welcome to Amigo 
  </span>
  (&quot;Amigo&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). Our Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application. Please read this privacy policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APPLICATION.
</p>

<p className="mb-4 text-gray-300">
  We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &quot;Effective Date&quot; of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
</p>

                    <p className="mb-4 text-gray-300">
                        You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Application after the date such revised Privacy Policy is posted.
                    </p>

                    <p className="mb-4 text-gray-300">
                        This Privacy Policy does not apply to the third-party online/mobile store from which you install the Application or make payments, which may also collect and use data about you. We are not responsible for any of the data collected by any such third party.
                    </p>

                    <p className="mb-4 text-gray-300">
                        This privacy policy was created using Termly’s Privacy Policy Generator.
                    </p>

                    <h3 className="text-xl text-gray-100 font-bold mb-2">Collection of Personal Information</h3>
                    <p className="mb-4 text-gray-100">
                        We collect personal information such as your phone number. This information is used for the purpose of authenticating your identity and linking your user ID within our app to your phone number, enhancing the security and personalization of our services.
                    </p>

                    <h3 className="text-xl text-gray-100 font-bold mb-2">Data Storage</h3>
                    <p className="mb-4 text-gray-300">
                        All user transactions and groups are securely stored on our servers. This allows us to provide a consistent and reliable experience across our platform, facilitating the management and synchronization of user data.
                    </p>
                </div>
                <div>
                    <div className="relative mt-40">
                        <Image
                         width={500}
                         height={500}
                            src="/images/privacy1.jpeg"
                            alt="About Us"
                            className="w-full md:w-1/2 mt-8 md:mt-0"
                        />
                        <Image
                         width={500}
                         height={500}
                            src="/images/privacy2.jpeg"
                            alt="About Us"
                            className="w-full md:w-1/2 absolute top-10 right-20 transform translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default privacy;