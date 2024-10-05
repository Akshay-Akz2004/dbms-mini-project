"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; 
import supabase from '@/lib/SupabaseClient'; 
import Header from '@/Components/Header';
import emailjs from 'emailjs-com';

const CourseDetailsPage = () => {
  const searchParams = useSearchParams(); 
  const courseTable = searchParams.get('table'); 
  const courseId = searchParams.get('id'); 
  const [courseDetails, setCourseDetails] = useState(null); 
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchCourseDetails = async () => {
    if (courseTable && courseId) {
      const { data, error } = await supabase
        .from(courseTable)
        .select('*')
        .eq('id', courseId)
        .single();

      if (error) {
        console.error('Error fetching course details:', error);
      } else {
        setCourseDetails(data);
      }
    }
  };

  useEffect(() => {
    fetchCourseDetails();
  }, [courseTable, courseId]);

  const handleConnectNow = () => {
    setShowModal(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = async () => {
    const { Instructor, ph, Course } = courseDetails;

    const templateParams = {
      email,
      subject: `Information Request about ${Course}`,
      Instructor, 
      ph, 
      Course,
    };

    try {
      const response = await emailjs.send('service_fd36fl5', 'template_7n7adlg', templateParams, 'eutCPfoJGdWfAjDW7');

      if (response.status === 200) {
        setSuccessMessage('Email sent successfully!');
        setEmail('');
        setShowModal(false);
      } else {
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Failed to send email. Please try again.');
    }
  };

  if (!courseDetails) {
    return <p>Loading course details...</p>;
  }

  const { Course, Instructor, Image, Rating, price, Duration, Description, ph } = courseDetails;

  return (
    <div>
      <Header />
      <div className='px-48 py-14'>
        <h1 className='text-4xl'>{Course}</h1>
        <div className='flex justify-center items-center'>
          <img src={Image} alt={Course} className='w-1/2 left-0 h-1/2 mt-10 rounded-lg object-cover mb-4' />
          <div className='mt-10 ml-28'>
            <h1 className='text-4xl mb-2'>"{Description}"</h1>
            <h1 className='mb-8'>Instructor: {Instructor}</h1>
            <h1>Rating: {Rating}</h1>
            <h1>Price: ${price}</h1>
            <h1>For more details, contact: <span className='font-bold'>{ph}</span></h1>
            <button onClick={handleConnectNow} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Connect Now</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 h-80 w-80 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center mt-4">Thanks for using <span className='text-red-600'>KTUScholarHub</span>!</h2>
            <h2 className="text-xl   mt-5 font-sans">Enter Your <span className='text-red-600'>Email</span></h2>
            <h3 className='text-gray-500 mb-8 text-xs '>We will contact you via mail</h3>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="xyz@example.com"
              className="border border-gray-300 p-2 mb-4 rounded w-full"
            />
            <div className="flex justify-center gap-3 mt-2">
              <button onClick={handleSendEmail} className="bg-red-700 text-white py-2 px-4 rounded-md w-20">Send</button>
              <button onClick={() => setShowModal(false)} className="bg-black text-white w-20 py-2 px-4 rounded-md">Cancel</button>
            </div>
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsPage;
