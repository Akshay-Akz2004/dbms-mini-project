import React, { useEffect, useState } from 'react';
import supabase from '@/lib/SupabaseClient'; 
import Card from '@/Components/Card';

const Courses = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('Categories') 
        .select('id, categoryname, description, imagelink'); 

      if (error) {
        console.error('Error fetching categories:', error);
        return;
      }
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className='px-28 mt-6'>
      <h1 className='text-3xl font-bold text-gray-900 mb-2'>Explore Our Categories</h1>
      <p className='mb-6'>Discover your passion</p>
      <div className='flex flex-wrap justify-center gap-10'>
        {categories.map((category) => (
          <Card
            key={category.id}
            title={category.categoryname}
            description={category.description}
            image={category.imagelink}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
