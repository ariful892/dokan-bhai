import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold my-[24px]'>Create Account</h1>
            <form className='' onSubmit={onSubmit}>
                <div className='flex flex-col  space-y-6 '>

                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={name} name='name' ref={nameRef} placeholder='Username' onChange={onChange} />
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={email} name='email' ref={emailRef} placeholder='email' onChange={onChange} />
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={phnNo} name='phnNo' ref={phnRef} placeholder='Phone No/Email' onChange={onChange} />
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={password} name='password' ref={passwordRef} placeholder='Password' onChange={onChange} />
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={confirmPassword} name='confirmPassword' ref={confirmPasswordRef} placeholder='Confirm Password' onChange={onChange} />
                    <input className='border-2 border-[#5C738A] w-full rounded-[8px] px-[16px] py-[8px] text-[16px]  text-[#5C738A]' type="text" value={isSeller} name='isSeller' ref={isSellerRef} placeholder='isSeller' onChange={onChange} />
                    <button type='submit' className='bg-[#DE3D3A] text-white py-[8px] px-[26px] rounded-[8px] w-7/12 '>Sign up</button>




                </div>
            </form>


        </div>
    );
};

export default SignUp;