
import { useEffect, useState } from 'react';

const AnimatedStats = () => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [tutorsCount, setTutorsCount] = useState(0);

  useEffect(() => {
    const animateCount = (target: number, setter: (value: number) => void, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    // Start animations with slight delays
    setTimeout(() => animateCount(6, setCoursesCount), 200);
    setTimeout(() => animateCount(10, setStudentsCount), 400);
    setTimeout(() => animateCount(4, setTutorsCount), 600);
  }, []);

  return (
    <section className="py-16 animated-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center glass-card p-8 rounded-xl">
            <div className="text-5xl font-bold text-blue-600 mb-2">{coursesCount}</div>
            <div className="text-slate-600 text-lg">Courses Available</div>
          </div>
          <div className="text-center glass-card p-8 rounded-xl">
            <div className="text-5xl font-bold text-green-600 mb-2">{studentsCount}</div>
            <div className="text-slate-600 text-lg">Students Enrolled</div>
          </div>
          <div className="text-center glass-card p-8 rounded-xl">
            <div className="text-5xl font-bold text-purple-600 mb-2">{tutorsCount}</div>
            <div className="text-slate-600 text-lg">Expert Tutors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
