"use client";
import CourseCard from '@/Components/Listing/CourseCard';
import React, { useEffect, useState } from 'react';
import supabase from '@/lib/SupabaseClient';
import { useRouter } from 'next/navigation'; 

const Mid = () => {
  const courseNames = [
    { name: "Computer Science", table: "CSE" },
    { name: "Mechanical Engineering", table: "MECH" },
    { name: "Electronics and Communication", table: "ECE" }
  ];

  const [categories, setCategories] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('CSE'); 
  const router = useRouter(); 

  const fetchCategories = async (courseTable) => {
    const { data, error } = await supabase
      .from(courseTable) 
      .select('id, Course, Instructor, Image, Rating, price'); 

    if (error) {
      console.error('Error fetching categories:', error);
      return;
    }
    setCategories(data); 
  };

  useEffect(() => {
    fetchCategories(selectedCourse); 
  }, [selectedCourse]);

  const handleCourseClick = (table) => {
    setSelectedCourse(table);
  };

  const handleCardClick = (courseId) => {
    router.push(`/course-details?table=${selectedCourse}&id=${courseId}`);
  };

  return (
    <div className='h-screen w-full p-4 md:p-20'>
      <h1 className='text-center text-3xl md:text-5xl font-sans mb-6'>Find a course that works for you</h1>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12'>
        {courseNames.map((course, index) => (
          <button 
            key={index} 
            className={`px-4 py-2 rounded-2xl border border-solid border-black ${selectedCourse === course.table ? 'bg-black text-white' : 'bg-white text-black'}`} 
            onClick={() => handleCourseClick(course.table)}
          >
            {course.name}
          </button>
        ))}
      </div>
      <div className='h-20'></div>
      <div className='flex flex-wrap gap-4 justify-center md:justify-normal'>
        {categories.length > 0 ? (
          categories.map((category) => (
            <CourseCard
              key={category.id}
              courseName={category.Course}
              instructor={category.Instructor}
              image={category.Image}
              rating={category.Rating}
              price={category.price}
              onClick={() => handleCardClick(category.id)} 
            />
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default Mid;
