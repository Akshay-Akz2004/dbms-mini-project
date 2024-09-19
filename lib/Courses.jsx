import React, { useEffect, useState } from 'react'
import { supabase } from './SupabaseClient'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from('Courses')
        .select('*')

      if (error) {
        console.error('Error fetching courses:', error)
      } else {
        setCourses(data)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className='px-36'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Courses</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {courses.length > 0 ? (
          courses.map(course => (
            <div key={course.id} className='max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 p-4'>
              <img 
                className='w-full h-48 object-cover mb-4' 
                src={course.image} 
                alt={course.title} 
              />
              <div className='px-4 py-2'>
                <div className='font-bold text-xl mb-2'>{course.title}</div>
                <div className='font-bold text-xl mb-2'>${course.price}</div>
            
              </div>
              <div className='px-4 py-2'>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  #{course.category}
                </span>
                {/* Add more tags if needed */}
              </div>
            </div>
          ))
        ) : (
          <p className='text-center w-full'>No courses available.</p>
        )}
      </div>
    </div>
  )
}

export default Courses
