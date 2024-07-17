import React from 'react';
import Nav from '../../../components/landing/nav';
import Footer from '../../../components/landing/footer';
import Image from 'next/image';
import Download from '@/components/landing/download';
type Props = {};

const privacy = (props: Props) => {
    return (
        <div className="flex flex-col min-h-screen justify-between bg-[#0F0E14]">
            <Nav />
            <section className="privacy-policy text-white bg-[#0F0E14] relative isolate flex flex-col justify-center py-8 px-4 md:py-32 md:px-20 pt-32 md:pt-32">
                <div className='w-full max-w-4xl mx-auto text-gray-500 text-sm'>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
                        Privacy Policy for Amigo
                    </h2>
                    <p className="text-center mb-2 text-gray-300">Effective Date: 10 April 2024</p>
                    <br />
                    <p className="mb-4 text-gray-300">
                        <span className='text-xl md:text-2xl mr-5'>
                            Welcome to Amigo
                        </span>
                        (&quot;Amigo&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). Our Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application. Please read this privacy policy carefully.
                    </p>
                    <p className="mb-4 text-gray-300">
                        IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APPLICATION.
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
                        This privacy policy was created using Termly&apos;s Privacy Policy Generator.
                    </p>
                    <br />
                    <h3 className="text-xl text-gray-100 font-bold mb-2">Collection of Personal Information</h3>
                    <p className="mb-4 text-gray-100">
                        We collect personal information such as your phone number. This information is used for the purpose of authenticating your identity and linking your user ID within our app to your phone number, enhancing the security and personalization of our services.
                    </p>
                    <br />
                    <h3 className="text-xl text-gray-100 font-bold mb-2">Data Storage</h3>
                    <p className="mb-4 text-gray-300">
                        All user transactions and groups are securely stored on our servers. This allows us to provide a consistent and reliable experience across our platform, facilitating the management and synchronization of user data.
                    </p>
                </div>
            </section>
            <Download />
            <Footer />
        </div>
    );
};

export default privacy;